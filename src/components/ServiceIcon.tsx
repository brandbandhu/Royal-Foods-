import {
  UtensilsCrossed,
  Home,
  Coffee,
  Building2,
  Tent,
  PartyPopper,
  Sandwich,
  GraduationCap,
  Users,
  Briefcase,
  Leaf,
  ChefHat,
  ShieldCheck,
} from "lucide-react";

const MAP = {
  UtensilsCrossed,
  Home,
  Coffee,
  Building2,
  Tent,
  PartyPopper,
  Sandwich,
  GraduationCap,
  Users,
  Briefcase,
  Leaf,
  ChefHat,
  ShieldCheck,
} as const;

export default function ServiceIcon({
  name,
  className = "h-6 w-6",
}: {
  name: string;
  className?: string;
}) {
  const Icon = (MAP as Record<string, typeof Home>)[name] ?? UtensilsCrossed;
  return <Icon className={className} />;
}
