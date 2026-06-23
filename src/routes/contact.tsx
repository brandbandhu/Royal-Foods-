import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle, Clock } from "lucide-react";
import { toast } from "sonner";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import contactSupport from "@/assets/Screenshot 2026-06-23 104939.png";
import { SERVICES, SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { name: "description", content: "Contact Royal Foods for hostel mess management, institutional catering, bulk food supply and customized meal planning at MIT ADT University, Loni Kalbhor, Pune." },
      { title: "Contact Royal Foods - Institutional Catering Enquiries" },
      { property: "og:title", content: "Contact Royal Foods" },
      { property: "og:description", content: "Talk to Royal Foods for institutional catering services." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => {
      setSending(false);
      (e.target as HTMLFormElement).reset();
      toast.success("Thanks! Our team will get back to you shortly.");
    }, 900);
  };

  return (
    <>
      <PageHero title="Contact Us" subtitle="Talk to Royal Foods for institutional catering, hostel mess management, bulk food supply, and customized meal planning." crumb="Contact" />

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            { icon: MapPin, t: "Visit Us", v: SITE.address },
            { icon: Phone, t: "Call Us", v: `${SITE.phone}, ${SITE.phoneAlt}`, href: `tel:${SITE.phoneRaw}` },
            { icon: Mail, t: "Email Us", v: SITE.email, href: `mailto:${SITE.email}` },
          ].map((c, i) => (
            <Reveal key={c.t} delay={i*100}>
              <a href={c.href || "#"} className="block bg-white border border-border rounded-2xl p-6 hover-lift">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center text-white shadow-soft"><c.icon className="h-6 w-6"/></div>
                <h3 className="mt-4 font-display font-bold text-lg">{c.t}</h3>
                <p className="mt-1 text-muted-foreground">{c.v}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid lg:grid-cols-[1fr_1fr] gap-10 items-center">
            <Reveal className="hidden lg:block">
              <img
                src={contactSupport}
                alt="Royal Foods contact support"
                width={900}
                height={700}
                loading="lazy"
                className="mx-auto w-full max-w-3xl object-contain"
              />
            </Reveal>
            <Reveal>
            <div className="bg-white rounded-3xl shadow-card p-8 md:p-10">
              <h2 className="font-display text-2xl md:text-3xl font-extrabold">Send us a message</h2>
              <p className="mt-2 text-muted-foreground">Fill the form and our team will respond to your institutional food service requirement.</p>
              <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
                <Field label="Name" required><input required name="name" className="input" placeholder="Your name"/></Field>
                <Field label="Mobile Number" required><input required name="phone" type="tel" pattern="[0-9+\s\-]{7,}" className="input" placeholder="+91 ..."/></Field>
                <Field label="Email" required className="sm:col-span-2"><input required name="email" type="email" className="input" placeholder="you@example.com"/></Field>
                <Field label="Service Required" required className="sm:col-span-2">
                  <select required name="service" className="input" defaultValue="">
                    <option value="" disabled>Select a service</option>
                    {SERVICES.map(s => <option key={s.slug} value={s.title}>{s.title}</option>)}
                    <option value="Other">Other</option>
                  </select>
                </Field>
                <Field label="Message" required className="sm:col-span-2">
                  <textarea required name="message" rows={4} className="input" placeholder="Tell us about your institution, student count, meal requirement, dates..."/>
                </Field>
                <div className="sm:col-span-2 flex flex-wrap gap-3">
                  <button type="submit" disabled={sending} className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-7 py-3.5 font-semibold shadow-soft hover:scale-105 transition disabled:opacity-60 disabled:cursor-not-allowed">
                    {sending ? "Sending..." : (<>Send Message <Send className="h-4 w-4"/></>)}
                  </button>
                  <a href={`https://wa.me/${SITE.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-6 py-3.5 font-semibold hover:scale-105 transition">
                    <MessageCircle className="h-4 w-4"/> WhatsApp
                  </a>
                </div>
              </form>
            </div>
            </Reveal>
          </div>

          <Reveal delay={150}>
            <div className="grid lg:grid-cols-[1.2fr_0.8fr_0.8fr] gap-6">
              <div className="rounded-3xl overflow-hidden shadow-card border border-border h-80">
                <iframe title="Royal Foods location" src={SITE.mapUrl} className="w-full h-full" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
              </div>
              <div className="rounded-3xl bg-gradient-brand text-white p-7 shadow-glow">
                <div className="flex items-center gap-3 mb-3">
                  <Clock className="h-6 w-6"/>
                  <h3 className="font-display font-bold text-xl">Operating Hours</h3>
                </div>
                <ul className="space-y-1 text-white/90 text-sm">
                  <li className="flex justify-between"><span>Monday – Saturday</span><span>7:00 AM – 10:00 PM</span></li>
                  <li className="flex justify-between"><span>Sunday</span><span>8:00 AM – 9:00 PM</span></li>
                  <li className="flex justify-between"><span>Events</span><span>24 / 7 (on request)</span></li>
                </ul>
              </div>
              <div className="rounded-3xl bg-white border border-border p-7">
                <h3 className="font-display font-bold text-lg">Why Royal Foods?</h3>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>25+ years institutional catering experience</li>
                  <li>Serving 2200-2500 students daily</li>
                  <li>Hygiene, nutrition, and quality focus</li>
                  <li>Timely, professional service commitment</li>
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        .input {
          width: 100%;
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: 0.75rem;
          padding: 0.75rem 1rem;
          font-size: 0.95rem;
          transition: all .2s;
          color: var(--foreground);
        }
        .input:focus {
          outline: none;
          border-color: var(--brand);
          box-shadow: 0 0 0 4px rgb(37 99 235 / 0.12);
          background: white;
        }
      `}</style>
    </>
  );
}

function Field({ label, required, children, className = "" }: { label: string; required?: boolean; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-semibold mb-1.5 block">{label}{required && <span className="text-destructive ml-1">*</span>}</span>
      {children}
    </label>
  );
}
