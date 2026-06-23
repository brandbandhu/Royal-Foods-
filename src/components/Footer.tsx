import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { NAV, SERVICES, SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="mt-24 bg-[#0B1220] text-slate-300">
      <div className="bg-gradient-brand">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-white">
            <h3 className="font-display text-2xl font-bold">Need a trusted institutional food service partner?</h3>
            <p className="text-white/85 mt-1">Talk to Royal Foods for healthy food, quality service, and trusted experience.</p>
          </div>
          <div className="flex gap-3">
            <a href={`tel:${SITE.phoneRaw}`} className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-5 py-3 font-semibold shadow-soft hover:scale-105 transition">
              <Phone className="h-4 w-4"/> Call Now
            </a>
            <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 font-semibold shadow-soft hover:scale-105 transition">
              <MessageCircle className="h-4 w-4"/> WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="mb-4">
            <div>
              <div className="text-white font-display font-bold text-lg">Royal Foods</div>
              <div className="text-xs uppercase tracking-widest text-cyan-300">Institutional Catering</div>
            </div>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Professionally managed food service company with 25+ years of institutional catering experience, serving healthy and nutritious meals at MIT ADT University.
          </p>
          <div className="flex gap-3 mt-5">
            {[Facebook, Instagram, Twitter, Linkedin].map((Icon, i) => (
              <a key={i} href="#" aria-label="social"
                 className="h-9 w-9 grid place-items-center rounded-full bg-white/5 hover:bg-gradient-brand hover:text-white transition">
                <Icon className="h-4 w-4"/>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.to}><Link to={n.to} className="hover:text-cyan-300 transition">{n.label}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => (
              <li key={s.slug}><Link to="/services" className="hover:text-cyan-300 transition">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-3"><MapPin className="h-4 w-4 mt-0.5 text-cyan-300 shrink-0"/><span>{SITE.address}</span></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 mt-0.5 text-cyan-300 shrink-0"/><span><a href={`tel:${SITE.phoneRaw}`} className="hover:text-cyan-300">{SITE.phone}</a>, <a href={`tel:${SITE.phoneAltRaw}`} className="hover:text-cyan-300">{SITE.phoneAlt}</a></span></li>
            <li className="flex gap-3"><Mail className="h-4 w-4 mt-0.5 text-cyan-300 shrink-0"/><a href={`mailto:${SITE.email}`} className="hover:text-cyan-300">{SITE.email}</a></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 text-xs text-slate-500 flex flex-col sm:flex-row gap-2 justify-between">
          <p>© {new Date().getFullYear()} Royal Foods. All rights reserved.</p>
          <p>Institutional Catering • Mess • Hostel • Events • Cafeteria</p>
        </div>
      </div>
    </footer>
  );
}
