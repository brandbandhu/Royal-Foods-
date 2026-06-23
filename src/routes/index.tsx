import { useEffect, useState } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Phone,
  Star,
  ShieldCheck,
  Clock,
  Leaf,
  ChefHat,
  Award,
  GraduationCap,
  Users,
} from "lucide-react";
import hero1 from "@/assets/hero-1.jpg";
import hero2 from "@/assets/hero-2.jpg";
import foodMess from "@/assets/food-mess.jpg";
import foodCafe from "@/assets/food-cafe.jpg";
import foodIndoor from "@/assets/food-indoor.jpg";
import foodOutdoor from "@/assets/food-outdoor.jpg";
import foodEvent from "@/assets/food-event.jpg";
import foodSnacks from "@/assets/food-snacks.jpg";
import hostelDining from "@/assets/hostel-dining.jpg";
import kitchen from "@/assets/kitchen.jpg";
import foodPrep from "@/assets/food-prep.jpg";
import royalTeam from "@/assets/royal-foods-team.jpeg";
import royalDining from "@/assets/royal-foods-dining.jpeg";
import { SERVICES, FACILITIES, SITE } from "@/lib/site";
import ServiceIcon from "@/components/ServiceIcon";
import Reveal from "@/components/Reveal";
import Link from "@/components/AppLink";

const SLIDES = [
  {
    img: hero1,
    title: "Royal Foods",
    sub: "Trusted food service partner for educational institutions.",
  },
  {
    img: hero2,
    title: "25+ Years of Institutional Catering",
    sub: "Professionally managed food operations with hygiene, nutrition, and customer satisfaction at the core.",
  },
  {
    img: royalTeam,
    title: "Serving 2200-2500 Students Daily",
    sub: "Reliable hostel mess and campus dining services at MIT ADT University, Loni Kalbhor, Pune.",
  },
];

function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative w-full h-[72vh] min-h-[520px] overflow-hidden lg:h-[calc(100vh-72px)] lg:min-h-[680px]">
      {SLIDES.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
        >
          <img
            src={s.img}
            alt={s.title}
            className="h-full w-full object-cover scale-105"
            width={1600}
            height={900}
            loading={idx === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0B1220]/85 via-[#0B1220]/55 to-[#0B1220]/30" />
        </div>
      ))}
      <div className="relative h-full mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col justify-center text-white">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-widest border border-white/20">
            <ChefHat className="h-3.5 w-3.5" /> Trusted Institutional Caterer
          </span>
          {SLIDES.map((s, idx) => (
            <div key={idx} className={`${idx === i ? "block animate-fade-up" : "hidden"}`}>
              <h1 className="mt-5 font-display text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                {s.title}
              </h1>
              <p className="mt-4 text-lg text-white/85 max-w-xl">{s.sub}</p>
            </div>
          ))}
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 font-semibold shadow-glow hover:scale-105 transition"
            >
              Explore Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand border border-white/20 px-6 py-3.5 font-semibold text-white hover:scale-105 transition"
            >
              Contact Us <Phone className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* controls */}
      <button
        onClick={() => setI((p) => (p - 1 + SLIDES.length) % SLIDES.length)}
        className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 grid place-items-center rounded-full bg-white/15 backdrop-blur text-white hover:bg-white/25 transition"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={() => setI((p) => (p + 1) % SLIDES.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 grid place-items-center rounded-full bg-white/15 backdrop-blur text-white hover:bg-white/25 transition"
        aria-label="Next slide"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${idx === i ? "w-10 bg-white" : "w-4 bg-white/40"}`}
          />
        ))}
      </div>
    </section>
  );
}

function SectionTitle({ kicker, title, sub }: { kicker?: string; title: string; sub?: string }) {
  return (
    <div className="text-center max-w-2xl mx-auto mb-12">
      {kicker && (
        <div className="inline-flex items-center gap-2 rounded-full bg-gradient-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          {kicker}
        </div>
      )}
      <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">{title}</h2>
      {sub && <p className="mt-3 text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal className="relative">
          <div className="relative rounded-3xl overflow-hidden shadow-card img-zoom">
            <img
              src={royalTeam}
              alt="Royal Foods institutional catering team"
              width={1024}
              height={768}
              loading="lazy"
              className="w-full h-[460px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden md:flex items-center gap-3 bg-white rounded-2xl px-5 py-4 shadow-glow">
            <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center text-white">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold">{SITE.experience} Years</div>
              <div className="text-xs text-muted-foreground">Catering Excellence</div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={150}>
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            About Royal Foods
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">
            Hygienic, nutritious, and reliable food service for student communities.
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Royal Foods is a professionally managed food service company with over 25 years of
            excellence in institutional catering and large-scale food operations. We proudly serve
            healthy and nutritious meals to approximately 2200-2500 students at MIT ADT University.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            {[
              { icon: ShieldCheck, t: "Hygiene & Food Safety" },
              { icon: Leaf, t: "Balanced Nutrition" },
              { icon: Clock, t: "Timely Service" },
              { icon: ChefHat, t: "Professional Team" },
            ].map((f) => (
              <div key={f.t} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-soft">
                <div className="h-10 w-10 rounded-lg bg-white grid place-items-center text-primary shadow-soft">
                  <f.icon className="h-5 w-5" />
                </div>
                <span className="font-semibold">{f.t}</span>
              </div>
            ))}
          </div>
          <Link
            to="/about"
            className="mt-6 inline-flex items-center gap-2 font-semibold text-primary group"
          >
            Learn more about us{" "}
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

function ServicesSection() {
  const imgs = [
    foodMess,
    royalDining,
    hostelDining,
    foodIndoor,
    foodEvent,
    foodOutdoor,
    kitchen,
    foodPrep,
  ];
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Our Services"
          title="Complete Institutional Catering Solutions"
          sub="From hostel mess management to bulk food supply, every operation is handled with care and consistency."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <Reveal key={s.slug} delay={idx * 60}>
              <div className="group hover-lift bg-white rounded-2xl overflow-hidden shadow-soft h-full flex flex-col">
                <div className="img-zoom h-48">
                  <img
                    src={imgs[idx]}
                    alt={s.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="h-12 w-12 -mt-12 mb-3 relative rounded-xl bg-gradient-brand grid place-items-center text-white shadow-glow">
                    <ServiceIcon name={s.icon} />
                  </div>
                  <h3 className="font-display text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground flex-1">{s.short}</p>
                  <Link
                    to="/services"
                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilitiesSection() {
  return (
    <section className="relative overflow-hidden py-20 bg-white">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-[#F8FCFF] to-[#ECFEFF]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle
          kicker="Facilities We Serve"
          title="Wherever MIT campus needs food, we're there"
          sub="Full operational coverage for institutional dining, kitchens, events, and meal planning."
        />
        <div className="grid grid-cols-2 gap-x-10 gap-y-16 md:grid-cols-4 lg:gap-x-20">
          {FACILITIES.map((f, idx) => (
            <Reveal key={f.title} delay={idx * 40}>
              <div className="group text-center">
                <div className="mx-auto grid h-28 w-28 place-items-center rounded-full bg-white text-slate-800 shadow-[0_16px_50px_-30px_rgb(15_23_42_/_0.22)] transition duration-300 group-hover:-translate-y-1 group-hover:text-slate-950 group-hover:shadow-[0_18px_55px_-30px_rgb(15_23_42_/_0.32)] md:h-32 md:w-32">
                  <ServiceIcon name={f.icon} className="h-12 w-12 stroke-[1.45] md:h-14 md:w-14" />
                </div>
                <h3 className="mx-auto mt-6 max-w-[13rem] font-display text-base font-bold leading-snug text-slate-950 md:text-lg">
                  {f.title}
                </h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const items = [
    {
      icon: Award,
      t: "25+ Years of Experience",
      d: "Decades of expertise in institutional catering and food service management.",
    },
    {
      icon: GraduationCap,
      t: "Trusted by Institutions",
      d: "Serving large student communities with efficiency and consistency.",
    },
    {
      icon: Users,
      t: "Large-Scale Daily Operations",
      d: "Capable of serving meals to 2200-2500 students every day.",
    },
    {
      icon: ShieldCheck,
      t: "Hygiene & Food Safety",
      d: "Strict hygiene protocols and quality control at every preparation stage.",
    },
    {
      icon: Leaf,
      t: "Nutritious Meals",
      d: "Well-planned menus designed for healthy and satisfying meals.",
    },
    {
      icon: Clock,
      t: "Timely & Reliable Service",
      d: "Committed to punctual meal delivery and smooth dining operations.",
    },
  ];
  return (
    <section className="py-20 bg-[#0B1220] text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_30%_30%,#2563EB,transparent_50%),radial-gradient(circle_at_70%_70%,#06B6D4,transparent_50%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-300">
            Why Choose Us
          </div>
          <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">
            Why educational institutions choose Royal Foods
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((f, i) => (
            <Reveal key={f.t} delay={i * 80}>
              <div className="rounded-2xl bg-white/5 backdrop-blur border border-white/10 p-6 hover:bg-white/10 transition">
                <div className="h-12 w-12 rounded-xl bg-gradient-brand grid place-items-center">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 font-bold text-lg">{f.t}</h3>
                <p className="mt-2 text-sm text-slate-300">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Categories() {
  const items = [
    { img: foodMess, t: "Mess Meals" },
    { img: foodSnacks, t: "Snacks & Tea" },
    { img: foodIndoor, t: "Buffet Service" },
    { img: foodPrep, t: "Fresh Prep" },
  ];
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Food Categories" title="What we serve, every day" />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 80}>
              <div className="img-zoom relative rounded-2xl overflow-hidden shadow-soft hover-lift">
                <img
                  src={it.img}
                  alt={it.t}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-64 w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-display font-bold text-xl">{it.t}</h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stats() {
  const stats = [
    { v: "25+", l: "Years Experience" },
    { v: "2200+", l: "Students Served Daily" },
    { v: "MIT ADT", l: "University Partner" },
    { v: "100%", l: "Quality Focus" },
  ];
  return (
    <section className="py-10 md:py-12 bg-gradient-brand text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 100}>
            <div>
              <div className="font-display text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold leading-none whitespace-nowrap">
                {s.v}
              </div>
              <div className="mt-2 text-white/85 text-xs md:text-[0.8rem] uppercase tracking-[0.16em] leading-snug">
                {s.l}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function GalleryPreview() {
  const imgs = [
    royalTeam,
    royalDining,
    foodMess,
    hostelDining,
    foodIndoor,
    foodOutdoor,
    kitchen,
    foodSnacks,
  ];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Gallery" title="A taste of our work" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {imgs.map((img, i) => (
            <Reveal key={i} delay={i * 50}>
              <div className="img-zoom rounded-xl overflow-hidden shadow-soft hover-lift">
                <img
                  src={img}
                  alt={`Gallery ${i + 1}`}
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-44 w-full object-cover"
                />
              </div>
            </Reveal>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3 font-semibold shadow-soft hover:scale-105 transition"
          >
            View Full Gallery <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const t = [
    {
      n: "Shri Ravindra Vitthal Deshmukh",
      r: "Director, Royal Foods",
      q: "Our mission has always been to provide safe, hygienic, nutritious, and quality food with complete dedication and professionalism.",
    },
    {
      n: "Royal Foods Team",
      r: "Institutional Catering Operations",
      q: "Serving thousands of students every day is our responsibility and our commitment towards their health and satisfaction.",
    },
    {
      n: "Royal Foods",
      r: "Food Service Partner",
      q: "Quality food and excellent service create a positive and healthy environment for students and institutions alike.",
    },
  ];
  return (
    <section className="py-20 bg-gradient-soft">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionTitle kicker="Testimonials" title="What our campus partners say" />
        <div className="grid md:grid-cols-3 gap-6">
          {t.map((x, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="bg-white rounded-2xl p-7 shadow-soft hover-lift h-full">
                <div className="flex text-amber-400 mb-3">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="text-foreground leading-relaxed">"{x.q}"</p>
                <div className="mt-5 flex items-center gap-3">
                  <div className="h-11 w-11 rounded-full bg-gradient-brand grid place-items-center text-white font-bold">
                    {x.n[0]}
                  </div>
                  <div>
                    <div className="font-semibold">{x.n}</div>
                    <div className="text-xs text-muted-foreground">{x.r}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactCTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-brand p-10 md:p-16 text-white shadow-glow">
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top_right,white,transparent_50%)]" />
          <div className="relative grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold">
                Ready to strengthen your institutional food service?
              </h2>
              <p className="mt-3 text-white/90 max-w-xl">
                Talk to Royal Foods for hostel mess management, daily meals, event catering, bulk
                food supply, or customized meal planning.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white text-primary px-6 py-3.5 font-semibold shadow-soft hover:scale-105 transition"
              >
                Get a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/30 px-6 py-3.5 font-semibold hover:bg-white/20 transition"
              >
                <Phone className="h-4 w-4" /> {SITE.phone}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <ServicesSection />
      <FacilitiesSection />
      <WhyUs />
      <Categories />
      <Stats />
      <GalleryPreview />
      <Testimonials />
      <ContactCTA />
    </>
  );
}
