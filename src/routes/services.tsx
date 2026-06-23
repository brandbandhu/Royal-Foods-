import { ArrowRight, Check } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import ServiceIcon from "@/components/ServiceIcon";
import { SERVICES } from "@/lib/site";
import foodMess from "@/assets/food-mess.jpg";
import hostelDining from "@/assets/hostel-dining.jpg";
import foodCafe from "@/assets/food-cafe.jpg";
import foodIndoor from "@/assets/food-indoor.jpg";
import foodOutdoor from "@/assets/food-outdoor.jpg";
import foodEvent from "@/assets/food-event.jpg";
import foodSnacks from "@/assets/food-snacks.jpg";
import royalDining from "@/assets/royal-foods-dining.jpeg";
import royalTeam from "@/assets/royal-foods-team.jpeg";
import Link from "@/components/AppLink";

const IMGS = [
  foodMess,
  royalTeam,
  hostelDining,
  foodIndoor,
  royalDining,
  foodOutdoor,
  foodSnacks,
  foodCafe,
];

const HIGHLIGHTS: Record<string, string[]> = {
  "student-mess": [
    "Hostel dining operations",
    "Balanced daily menus",
    "Hygiene supervision",
    "Smooth student service",
  ],
  "university-catering": [
    "Educational institutions",
    "Large student communities",
    "Efficient service systems",
    "Consistent standards",
  ],
  "daily-meals": [
    "Breakfast service",
    "Lunch service",
    "Dinner service",
    "Nutritious meal planning",
  ],
  "institutional-food": [
    "Large-volume cooking",
    "Professional supervision",
    "Trained operations team",
    "Reliable food standards",
  ],
  "event-seminar": [
    "Seminars & meetings",
    "Refreshments",
    "Institutional gatherings",
    "Clean service setup",
  ],
  "bulk-food": [
    "High-volume preparation",
    "Timely supply",
    "Consistent taste",
    "Quality ingredients",
  ],
  "hygienic-kitchen": [
    "Clean cooking environment",
    "Quality checks",
    "Staff discipline",
    "Safe food handling",
  ],
  "custom-meal-planning": [
    "Customized menus",
    "Balanced nutrition",
    "Student satisfaction",
    "Taste and variety",
  ],
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Our Services"
        subtitle="Complete institutional catering solutions for educational institutions and student communities."
        crumb="Services"
      />

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-16">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug}>
              <div
                className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
              >
                <div className="img-zoom rounded-3xl overflow-hidden shadow-card relative">
                  <img
                    src={IMGS[i]}
                    alt={s.title}
                    width={1024}
                    height={768}
                    loading="lazy"
                    className="w-full h-[400px] object-cover"
                  />
                  <div className="absolute top-4 left-4 h-14 w-14 rounded-2xl bg-white/95 backdrop-blur grid place-items-center text-primary shadow-glow">
                    <ServiceIcon name={s.icon} className="h-7 w-7" />
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-gradient-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
                    Service {String(i + 1).padStart(2, "0")}
                  </div>
                  <h2 className="mt-4 font-display text-3xl md:text-4xl font-extrabold">
                    {s.title}
                  </h2>
                  <p className="mt-4 text-muted-foreground leading-relaxed">{s.desc}</p>
                  <ul className="mt-6 grid sm:grid-cols-2 gap-3">
                    {HIGHLIGHTS[s.slug].map((h) => (
                      <li key={h} className="flex items-center gap-2 text-sm">
                        <span className="h-6 w-6 rounded-full bg-gradient-brand grid place-items-center text-white shrink-0">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-brand text-white px-6 py-3 font-semibold shadow-soft hover:scale-105 transition"
                  >
                    Get a Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
