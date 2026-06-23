import { Target, Eye, Heart, ShieldCheck, Sparkles, Leaf, Award } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import { OPERATIONAL_STRENGTH, QUALITY_COMMITMENTS, SITE } from "@/lib/site";
import royalTeam from "@/assets/royal-foods-team.jpeg";
import royalDining from "@/assets/royal-foods-dining.jpeg";
import foodPrep from "@/assets/food-prep.jpg";

export default function AboutPage() {
  const values = [
    {
      icon: ShieldCheck,
      t: "Hygiene & Safety",
      d: "Strict hygiene protocols and quality control at every stage.",
    },
    {
      icon: Leaf,
      t: "Balanced Nutrition",
      d: "Well-planned meals designed for student health and satisfaction.",
    },
    {
      icon: Heart,
      t: "Customer Satisfaction",
      d: "Focused service standards and long-term institutional relationships.",
    },
    {
      icon: Award,
      t: "Operational Excellence",
      d: "Consistent taste, supervision, and professional discipline.",
    },
  ];
  return (
    <>
      <PageHero
        title="About Royal Foods"
        subtitle="A professionally managed food service company with 25+ years of excellence in institutional catering."
        crumb="About"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="img-zoom rounded-3xl overflow-hidden shadow-card">
              <img
                src={royalTeam}
                alt="Royal Foods institutional catering team"
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-[480px] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Company Overview
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">
              Trusted food service partner for educational institutions.
            </h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Royal Foods is a professionally managed food service company with over 25 years of
              excellence in institutional catering and large-scale food operations.
            </p>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              With a strong commitment to quality, hygiene, and customer satisfaction, we proudly
              provide healthy and nutritious meals to approximately 2200-2500 students at MIT ADT
              University.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 items-center">
          <Reveal className="lg:order-2">
            <div className="img-zoom rounded-3xl overflow-hidden shadow-card">
              <img
                src={royalDining}
                alt="Royal Foods institutional dining service"
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-[420px] object-cover"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="lg:order-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              Director's Message
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">
              A commitment to student health and satisfaction.
            </h2>
            <div className="mt-5 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                At Royal Foods, our mission has always been to provide safe, hygienic, nutritious,
                and quality food with complete dedication and professionalism.
              </p>
              <p>
                For more than 25 years, we have continuously worked towards maintaining high
                standards in institutional catering services. Serving thousands of students every
                day is not just our responsibility, but also our commitment towards their health and
                satisfaction.
              </p>
              <p>
                We sincerely thank our clients and partners for their trust and continued support.
              </p>
            </div>
            <div className="mt-6 font-semibold text-foreground">{SITE.director}</div>
            <div className="text-sm text-muted-foreground">Director, Royal Foods</div>
          </Reveal>
        </div>
      </section>

      <section className="py-16 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid md:grid-cols-3 gap-6">
          {[
            {
              icon: Target,
              t: "Our Mission",
              d: "To deliver hygienic, nutritious, and high-quality food services with professionalism, consistency, and customer satisfaction.",
            },
            {
              icon: Eye,
              t: "Our Vision",
              d: "To become the most trusted and preferred institutional catering partner by maintaining excellence in food quality and service standards.",
            },
            {
              icon: Sparkles,
              t: "Our Promise",
              d: "Healthy food, quality service, trusted experience, and continuous improvement in every operation.",
            },
          ].map((x, i) => (
            <Reveal key={x.t} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 shadow-soft hover-lift h-full">
                <div className="h-14 w-14 rounded-2xl bg-gradient-brand grid place-items-center text-white shadow-glow">
                  <x.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">{x.t}</h3>
                <p className="mt-2 text-muted-foreground">{x.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full bg-gradient-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              Our Values
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">
              Built on hygiene, fueled by care
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <Reveal key={v.t} delay={i * 80}>
                <div className="text-center p-6 bg-white border border-border rounded-2xl hover-lift">
                  <div className="mx-auto h-14 w-14 rounded-2xl bg-gradient-soft grid place-items-center text-primary">
                    <v.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mt-4 font-bold">{v.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-soft">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary shadow-soft">
              Hygiene & Quality
            </div>
            <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">
              Quality is the foundation of everything we do
            </h2>
            <ul className="mt-6 space-y-3">
              {QUALITY_COMMITMENTS.map((l) => (
                <li key={l} className="flex gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span>{l}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={150}>
            <div className="img-zoom rounded-3xl overflow-hidden shadow-card">
              <img
                src={foodPrep}
                alt="Fresh ingredients prep"
                width={1024}
                height={768}
                loading="lazy"
                className="w-full h-[460px] object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Operational Strength
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">
            Built for large-scale institutional food service
          </h2>
          <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
            Royal Foods combines experience, service discipline, and daily operational capacity to
            support educational institutions with dependable food service.
          </p>
          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {OPERATIONAL_STRENGTH.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-border rounded-2xl p-6 hover-lift"
              >
                <div className="text-sm uppercase tracking-widest text-muted-foreground">
                  {s.label}
                </div>
                <div className="mt-3 font-display text-2xl font-extrabold text-gradient-brand">
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
