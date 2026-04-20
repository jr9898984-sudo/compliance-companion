-- Contact enquiries table (durable record of every submission)
CREATE TABLE public.contact_enquiries (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  company TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  service TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending', -- pending | sent | failed
  attempts INT NOT NULL DEFAULT 0,
  last_error TEXT,
  sent_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_enquiries ENABLE ROW LEVEL SECURITY;

-- Anyone (anonymous visitor) may submit an enquiry
CREATE POLICY "Anyone can submit an enquiry"
  ON public.contact_enquiries
  FOR INSERT
  WITH CHECK (true);

-- No public read/update/delete. Only service role (edge functions) can manage.
-- Updated-at trigger
CREATE OR REPLACE FUNCTION public.tg_update_updated_at()
RETURNS TRIGGER
LANGUAGE plpgsql
SET search_path = public
AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$;

CREATE TRIGGER trg_contact_enquiries_updated
  BEFORE UPDATE ON public.contact_enquiries
  FOR EACH ROW EXECUTE FUNCTION public.tg_update_updated_at();

CREATE INDEX idx_contact_enquiries_status_created
  ON public.contact_enquiries(status, created_at);