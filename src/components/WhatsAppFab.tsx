import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export default function WhatsAppFab() {
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=Hi%20Royal%20Foods%2C%20I%27d%20like%20to%20enquire%20about%20catering%20services.`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 h-14 w-14 grid place-items-center rounded-full bg-[#25D366] text-white shadow-glow animate-pulse-ring hover:scale-110 transition"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
