import { Outlet, Link, createRootRoute } from "@tanstack/react-router";
import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";
import "../styles.css";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow mb-4 justify-center"><span className="gold-rule" />Error 404</div>
        <h1 className="font-display text-7xl font-semibold text-navy-deep">404</h1>
        <h2 className="mt-3 font-display text-2xl text-navy-deep">Page not found</h2>
        <p className="mt-3 text-sm text-muted-foreground">
          The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
        </p>
        <Link to="/" className="btn-primary mt-8 inline-flex">Return Home</Link>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Vencore Nexus — HR & Legal Solutions | Statutory Compliance, Payroll & Advisory" },
      { name: "description", content: "Vencore Nexus delivers statutory compliance, payroll management and HR legal advisory across India. Trusted by enterprises for precision and reliability." },
      { name: "author", content: "Vencore Nexus HR & Legal Solutions" },
      { property: "og:title", content: "Vencore Nexus — HR & Legal Solutions" },
      { property: "og:description", content: "Statutory compliance, payroll & HR legal advisory across India." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <Outlet />
      </main>
      <SiteFooter />
    </div>
  );
}

