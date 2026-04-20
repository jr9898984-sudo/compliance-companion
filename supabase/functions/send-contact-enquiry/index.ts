// Edge Function: send-contact-enquiry
// Acts as a queued job worker (Laravel-style):
// 1. Receives enquiry payload from public contact form
// 2. Persists durable record in `contact_enquiries`
// 3. Dispatches two emails via Resend (admin notification + auto-reply)
// 4. Updates row with status (sent/failed) + attempt counter for retry safety

import { createClient } from "npm:@supabase/supabase-js@2.45.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

const ADMIN_INBOX = "vencorenexus@hotmail.com";
const FROM_ADDRESS = "Vencore Nexus <onboarding@resend.dev>"; // temporary verified sender
const MAX_ATTEMPTS = 3;

interface EnquiryPayload {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

function escape(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function validate(p: Partial<EnquiryPayload>): string | null {
  if (!p.name || p.name.length < 2 || p.name.length > 120) return "Invalid name";
  if (!p.company || p.company.length > 200) return "Invalid company";
  if (!p.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(p.email))
    return "Invalid email";
  if (!p.phone || p.phone.length < 6 || p.phone.length > 30) return "Invalid phone";
  if (!p.service || p.service.length > 120) return "Invalid service";
  if (!p.message || p.message.length < 5 || p.message.length > 5000)
    return "Invalid message";
  return null;
}

async function sendResendEmail(args: {
  apiKey: string;
  to: string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ ok: boolean; error?: string }> {
  for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${args.apiKey}`,
        },
        body: JSON.stringify({
          from: FROM_ADDRESS,
          to: args.to,
          subject: args.subject,
          html: args.html,
          reply_to: args.replyTo,
        }),
      });
      if (res.ok) return { ok: true };
      const txt = await res.text();
      // Retry on 429 / 5xx
      if (res.status === 429 || res.status >= 500) {
        await new Promise((r) => setTimeout(r, 400 * attempt));
        continue;
      }
      return { ok: false, error: `Resend ${res.status}: ${txt}` };
    } catch (err) {
      if (attempt === MAX_ATTEMPTS) {
        return { ok: false, error: (err as Error).message };
      }
      await new Promise((r) => setTimeout(r, 400 * attempt));
    }
  }
  return { ok: false, error: "Exhausted retries" };
}

function buildAdminEmail(p: EnquiryPayload): string {
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#0a1830">
    <div style="background:#0a1830;color:#d4af37;padding:24px;text-align:center">
      <h1 style="margin:0;font-size:22px;letter-spacing:2px">VENCORE NEXUS</h1>
      <p style="margin:6px 0 0;font-size:12px;letter-spacing:3px;color:#fff">NEW WEBSITE ENQUIRY</p>
    </div>
    <div style="background:#fafaf7;padding:28px;border:1px solid #eee">
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <tr><td style="padding:8px 0;color:#666;width:120px">Name</td><td style="padding:8px 0"><strong>${escape(p.name)}</strong></td></tr>
        <tr><td style="padding:8px 0;color:#666">Company</td><td style="padding:8px 0">${escape(p.company)}</td></tr>
        <tr><td style="padding:8px 0;color:#666">Email</td><td style="padding:8px 0"><a href="mailto:${escape(p.email)}" style="color:#0a1830">${escape(p.email)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#666">Phone</td><td style="padding:8px 0"><a href="tel:${escape(p.phone)}" style="color:#0a1830">${escape(p.phone)}</a></td></tr>
        <tr><td style="padding:8px 0;color:#666">Service</td><td style="padding:8px 0">${escape(p.service)}</td></tr>
      </table>
      <div style="margin-top:20px;padding:18px;background:#fff;border-left:3px solid #d4af37">
        <div style="font-size:11px;letter-spacing:2px;color:#999;margin-bottom:8px">MESSAGE</div>
        <div style="font-size:14px;line-height:1.6;white-space:pre-wrap">${escape(p.message)}</div>
      </div>
    </div>
    <div style="padding:16px;text-align:center;font-size:11px;color:#999">
      Sent automatically by vencorenexus.com
    </div>
  </div>`;
}

function buildAutoReply(p: EnquiryPayload): string {
  return `
  <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;color:#0a1830">
    <div style="background:#0a1830;color:#d4af37;padding:28px;text-align:center">
      <h1 style="margin:0;font-size:22px;letter-spacing:2px">VENCORE NEXUS</h1>
      <p style="margin:6px 0 0;font-size:11px;letter-spacing:3px;color:#fff">HR &amp; LEGAL SOLUTIONS</p>
    </div>
    <div style="background:#fafaf7;padding:32px">
      <h2 style="margin:0 0 12px;font-size:20px">Thank you, ${escape(p.name)}.</h2>
      <p style="font-size:14px;line-height:1.7;color:#444">
        We&rsquo;ve received your enquiry regarding <strong>${escape(p.service)}</strong>
        and our advisory team will respond within one business day.
      </p>
      <p style="font-size:14px;line-height:1.7;color:#444">
        For anything urgent, please reach us directly:
      </p>
      <p style="font-size:14px;margin:16px 0">
        📞 <a href="tel:+918618427262" style="color:#0a1830">+91 86184 27262</a><br/>
        ✉️ <a href="mailto:vencorenexus@hotmail.com" style="color:#0a1830">vencorenexus@hotmail.com</a>
      </p>
      <div style="margin-top:24px;padding-top:20px;border-top:1px solid #ddd;font-size:12px;color:#888">
        Vencore Nexus HR &amp; Legal Solutions<br/>
        Kammagondanahalli, Jalahalli West, Bengaluru &mdash; 560015
      </div>
    </div>
  </div>`;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const RESEND_KEY = Deno.env.get("RESEND_API_KEY");
  const SB_URL = Deno.env.get("SUPABASE_URL");
  const SB_SR = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (!RESEND_KEY || !SB_URL || !SB_SR) {
    console.error("Missing required env vars");
    return new Response(JSON.stringify({ error: "Server misconfigured" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  let payload: EnquiryPayload;
  try {
    payload = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON" }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const validationError = validate(payload);
  if (validationError) {
    return new Response(JSON.stringify({ error: validationError }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  const supabase = createClient(SB_URL, SB_SR);

  // 1. Persist enquiry (durable record)
  const { data: row, error: insertErr } = await supabase
    .from("contact_enquiries")
    .insert({
      name: payload.name,
      company: payload.company,
      email: payload.email,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
    })
    .select("id")
    .single();

  if (insertErr || !row) {
    console.error("Insert failed:", insertErr);
    return new Response(JSON.stringify({ error: "Could not save enquiry" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }

  // 2. Dispatch admin notification (with retries)
  const adminResult = await sendResendEmail({
    apiKey: RESEND_KEY,
    to: [ADMIN_INBOX],
    subject: `New Enquiry — ${payload.service} — ${payload.name}`,
    html: buildAdminEmail(payload),
    replyTo: payload.email,
  });

  // 3. Dispatch confirmation to sender (best-effort, doesn't block)
  const replyResult = await sendResendEmail({
    apiKey: RESEND_KEY,
    to: [payload.email],
    subject: "We've received your enquiry — Vencore Nexus",
    html: buildAutoReply(payload),
  });

  // 4. Update job state
  const sent = adminResult.ok;
  await supabase
    .from("contact_enquiries")
    .update({
      status: sent ? "sent" : "failed",
      attempts: 1,
      sent_at: sent ? new Date().toISOString() : null,
      last_error: sent
        ? null
        : `admin: ${adminResult.error}; reply: ${replyResult.error ?? "ok"}`,
    })
    .eq("id", row.id);

  if (!sent) {
    console.error("Email dispatch failed:", adminResult.error);
    return new Response(
      JSON.stringify({
        success: false,
        error: "Enquiry saved but email delivery failed. Our team will follow up.",
      }),
      {
        status: 502,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      },
    );
  }

  return new Response(
    JSON.stringify({ success: true, id: row.id }),
    {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    },
  );
});
