import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { FACILITIES } from "@/lib/site";
import hostelDining from "@/assets/hostel-dining.jpg";
import foodIndoor from "@/assets/food-indoor.jpg";
import royalDining from "@/assets/royal-foods-dining.jpeg";
import royalTeam from "@/assets/royal-foods-team.jpeg";
import Link from "@/components/AppLink";

export default function FacilitiesPage() {
  const banners = [
    { img: royalTeam, t: "Royal Foods Institutional Catering Team" },
    { img: royalDining, t: "Institutional Dining & Seminar Service" },
    { img: hostelDining, t: "Hostel Mess & Student Dining" },
    { img: foodIndoor, t: "Event & Seminar Catering" },
  ];

  return (
    <>
      <PageHero
        title="Facilities We Serve"
        subtitle="Royal Foods supports educational institutions with professional food service operations, hygienic kitchens, and large-scale student dining."
        crumb="Facilities"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FACILITIES.map((f, i) => (
              <Reveal key={f.title} delay={i * 40}>
                <div className="group hover-lift bg-white border border-border rounded-2xl p-7 h-full min-h-[260px] flex flex-col justify-between shadow-soft">
                  <div>
                    <div className="h-14 w-14 rounded-2xl bg-gradient-soft grid place-items-center text-primary group-hover:bg-gradient-brand group-hover:text-white transition">
                      <ServiceIcon name={f.icon} className="h-7 w-7" />
                    </div>
                    <h3 className="mt-6 font-display font-bold text-xl leading-tight">{f.title}</h3>
                  </div>
                  <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">
                    {f.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid sm:grid-cols-2 gap-6">
          {banners.map((b, i) => (
            <Reveal key={b.t} delay={i * 100}>
              <div className="img-zoom relative rounded-3xl overflow-hidden shadow-card hover-lift h-72">
                <img
                  src={b.img}
                  alt={b.t}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 text-white">
                  <h3 className="font-display font-bold text-2xl">{b.t}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-brand text-white p-10 md:p-14 text-center shadow-glow">
            <h2 className="font-display text-3xl md:text-4xl font-extrabold">
              Need dependable institutional food service?
            </h2>
            <p className="mt-3 text-white/90">
              We tailor menus, staffing, supervision, and schedules to your institution's exact
              dining needs.
            </p>
            <Link
              to="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3 font-semibold hover:scale-105 transition"
            >
              Request a Proposal <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
