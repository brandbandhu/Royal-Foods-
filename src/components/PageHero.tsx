import { ChevronRight, Home } from "lucide-react";
import Link from "@/components/AppLink";
import breadcrumbBg from "@/assets/breadcrumb-pinterest.jpg";

export default function PageHero({
  title,
  subtitle,
  crumb,
}: {
  title: string;
  subtitle?: string;
  crumb: string;
}) {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <img
        src={breadcrumbBg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-slate-950/55" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/15 via-transparent to-slate-950/20" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        <h1 className="font-display text-4xl md:text-6xl font-extrabold animate-fade-up drop-shadow-sm">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl mx-auto text-white/95 text-lg animate-fade-up drop-shadow-sm">
            {subtitle}
          </p>
        )}
        <nav className="mt-6 inline-flex items-center gap-2 text-sm bg-white/15 backdrop-blur-md px-4 py-2 rounded-full animate-fade-in ring-1 ring-white/20">
          <Link to="/" className="inline-flex items-center gap-1 hover:underline">
            <Home className="h-3.5 w-3.5" />
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5 opacity-70" />
          <span className="font-semibold">{crumb}</span>
        </nav>
      </div>
      <svg
        className="absolute -bottom-1 left-0 w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path d="M0,40 C360,100 1080,0 1440,60 L1440,80 L0,80 Z" fill="white" />
      </svg>
    </section>
  );
}
