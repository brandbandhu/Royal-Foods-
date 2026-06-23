import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { X } from "lucide-react";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import foodMess from "@/assets/food-mess.jpg";
import hostelDining from "@/assets/hostel-dining.jpg";
import foodCafe from "@/assets/food-cafe.jpg";
import foodIndoor from "@/assets/food-indoor.jpg";
import foodOutdoor from "@/assets/food-outdoor.jpg";
import foodEvent from "@/assets/food-event.jpg";
import foodSnacks from "@/assets/food-snacks.jpg";
import kitchen from "@/assets/kitchen.jpg";
import foodPrep from "@/assets/food-prep.jpg";
import royalTeam from "@/assets/royal-foods-team.jpeg";
import royalDining from "@/assets/royal-foods-dining.jpeg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery - Royal Foods Institutional Catering Photos" },
      { name: "description", content: "Browse Royal Foods gallery: institutional catering team, dining service, mess food, hostel dining, event catering, food preparation and kitchen setups." },
      { property: "og:title", content: "Royal Foods Gallery" },
      { property: "og:description", content: "Photos from Royal Foods institutional catering operations." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: GalleryPage,
});

const ITEMS = [
  { img: royalTeam, cat: "Team", t: "Royal Foods Catering Team" },
  { img: royalDining, cat: "Institutional Dining", t: "Institutional Dining Service" },
  { img: foodMess, cat: "Mess Food", t: "Daily Mess Thali" },
  { img: hostelDining, cat: "Hostel Dining", t: "Hostel Dinner Service" },
  { img: foodCafe, cat: "Cafeteria", t: "Campus Cafeteria" },
  { img: foodEvent, cat: "Event Catering", t: "Event Buffet" },
  { img: foodPrep, cat: "Food Preparation", t: "Fresh Ingredient Prep" },
  { img: kitchen, cat: "Kitchen Setup", t: "Pro Kitchen" },
  { img: foodOutdoor, cat: "Outdoor Catering", t: "Outdoor Counter" },
  { img: foodSnacks, cat: "Snacks & Beverages", t: "Tea, Coffee & Snacks" },
  { img: foodIndoor, cat: "Event Catering", t: "Indoor Buffet" },
  { img: foodMess, cat: "Mess Food", t: "South Indian Special" },
  { img: hostelDining, cat: "Hostel Dining", t: "Community Meals" },
  { img: foodCafe, cat: "Cafeteria", t: "Bakery & Counter" },
];

const CATS = ["All", "Team", "Institutional Dining", "Mess Food", "Hostel Dining", "Cafeteria", "Event Catering", "Food Preparation", "Kitchen Setup", "Outdoor Catering", "Snacks & Beverages"];

function GalleryPage() {
  const [cat, setCat] = useState("All");
  const [open, setOpen] = useState<number | null>(null);
  const list = useMemo(() => cat === "All" ? ITEMS : ITEMS.filter(i => i.cat === cat), [cat]);

  return (
    <>
      <PageHero title="Gallery" subtitle="A visual taste of Royal Foods institutional food service, dining operations, kitchens, plates, events and people." crumb="Gallery" />

      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {CATS.map((c) => (
              <button key={c} onClick={() => setCat(c)}
                className={`px-4 py-2 rounded-full text-sm font-semibold border transition ${cat === c ? "bg-gradient-brand text-white border-transparent shadow-soft" : "bg-white text-foreground border-border hover:border-primary/40"}`}>
                {c}
              </button>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {list.map((it, i) => (
              <Reveal key={`${it.t}-${i}`} delay={i*40}>
                <button onClick={() => setOpen(i)} className="group block w-full text-left">
                  <div className="img-zoom rounded-2xl overflow-hidden shadow-soft hover-lift relative h-60">
                    <img src={it.img} alt={it.t} width={1024} height={768} loading="lazy" className="w-full h-full object-cover"/>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-transparent opacity-0 group-hover:opacity-100 transition"/>
                    <div className="absolute bottom-3 left-3 right-3 text-white translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition">
                      <div className="text-xs uppercase tracking-widest text-cyan-300">{it.cat}</div>
                      <div className="font-semibold">{it.t}</div>
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {open !== null && list[open] && (
        <div className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm grid place-items-center p-4 animate-fade-in" onClick={() => setOpen(null)}>
          <button onClick={() => setOpen(null)} className="absolute top-5 right-5 h-11 w-11 grid place-items-center rounded-full bg-white/10 text-white hover:bg-white/20" aria-label="Close">
            <X className="h-5 w-5"/>
          </button>
          <div className="max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img src={list[open].img} alt={list[open].t} className="w-full h-auto rounded-2xl shadow-glow"/>
            <div className="text-white text-center mt-4">
              <div className="text-xs uppercase tracking-widest text-cyan-300">{list[open].cat}</div>
              <div className="font-display text-xl font-bold">{list[open].t}</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
