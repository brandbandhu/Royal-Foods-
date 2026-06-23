export const SITE = {
  name: "Royal Foods",
  tagline: "Trusted Food Service Partner for Educational Institutions",
  phone: "+91 98220 80115",
  phoneRaw: "+919822080115",
  phoneAlt: "+91 70574 50842",
  phoneAltRaw: "+917057450842",
  whatsapp: "919822080115",
  email: "royalfoods8@email.com",
  address: "MIT ADT University, Loni Kalbhor, Pune, Maharashtra 412201",
  mapUrl: "https://www.google.com/maps?q=MIT+ADT+University+Loni+Kalbhor+Pune+Maharashtra+412201&output=embed",
  director: "Shri Ravindra Vitthal Deshmukh",
  experience: "25+",
  dailyStudents: "2200-2500",
};

export const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/facilities", label: "Facilities" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    slug: "student-mess",
    title: "Hostel Mess Management",
    icon: "UtensilsCrossed",
    short: "Professionally managed mess operations for large student communities.",
    desc: "End-to-end hostel mess management with disciplined kitchen operations, balanced menus, hygiene checks, and punctual service for large student dining needs.",
  },
  {
    slug: "university-catering",
    title: "College & University Catering",
    icon: "GraduationCap",
    short: "Institutional catering built for educational campuses.",
    desc: "Reliable catering for colleges and universities with the scale, systems, and service discipline needed for daily campus food operations.",
  },
  {
    slug: "daily-meals",
    title: "Breakfast, Lunch & Dinner Services",
    icon: "Coffee",
    short: "Fresh daily meals planned around nutrition and taste.",
    desc: "Breakfast, lunch, and dinner services prepared with quality ingredients, consistent taste, and a focus on student health and satisfaction.",
  },
  {
    slug: "institutional-food",
    title: "Institutional Food Services",
    icon: "Building2",
    short: "Large-volume food operations with professional supervision.",
    desc: "Institutional food service management for educational organizations that need dependable operations, trained staff, and consistent food standards.",
  },
  {
    slug: "event-seminar",
    title: "Event & Seminar Catering",
    icon: "Tent",
    short: "Food service for seminars, meetings, and campus events.",
    desc: "Event and seminar catering with planned menus, clean service setups, refreshments, and smooth execution for institutional gatherings.",
  },
  {
    slug: "bulk-food",
    title: "Bulk Food Supply",
    icon: "PartyPopper",
    short: "High-volume meal preparation and supply with consistency.",
    desc: "Bulk food supply for institutions with large-scale cooking capacity, timely delivery, and reliable quality across every serving.",
  },
  {
    slug: "hygienic-kitchen",
    title: "Hygienic Kitchen Operations",
    icon: "Sandwich",
    short: "Clean cooking environments and strict food safety practices.",
    desc: "Kitchen operations built around sanitation, supervision, staff discipline, quality control, and safe food handling at every stage.",
  },
  {
    slug: "custom-meal-planning",
    title: "Customized Meal Planning",
    icon: "Leaf",
    short: "Balanced menus tailored to institutional dining needs.",
    desc: "Customized meal planning that balances nutrition, taste, variety, and service schedules for student communities and educational institutions.",
  },
] as const;

export const FACILITIES = [
  { title: "MIT ADT University", icon: "GraduationCap", desc: "Serving educational institution dining needs at Loni Kalbhor, Pune." },
  { title: "Hostel Mess", icon: "UtensilsCrossed", desc: "Hygienic, nutritious daily meals for resident students." },
  { title: "Student Dining Areas", icon: "Users", desc: "Smooth dining operations for 2200-2500 students daily." },
  { title: "Institutional Kitchens", icon: "ChefHat", desc: "Clean kitchens, trained staff, and regular supervision." },
  { title: "Seminar Catering", icon: "Building2", desc: "Refreshments and meals for institutional seminars and meetings." },
  { title: "Bulk Meal Supply", icon: "PartyPopper", desc: "Large-scale food preparation with consistent taste and quality." },
  { title: "Meal Planning", icon: "Leaf", desc: "Balanced menus designed around health, nutrition, and satisfaction." },
  { title: "Quality Control", icon: "ShieldCheck", desc: "Strict hygiene protocols and checks through food preparation." },
];

export const OPERATIONAL_STRENGTH = [
  { label: "Industry Experience", value: "25+ Years" },
  { label: "Daily Serving Capacity", value: "2200-2500 Students" },
  { label: "Core Specialization", value: "Institutional Catering" },
  { label: "Focus Areas", value: "Hygiene, Nutrition & Quality" },
  { label: "Service Commitment", value: "Timely & Professional" },
  { label: "Client Segment", value: "Educational Institutions" },
] as const;

export const QUALITY_COMMITMENTS = [
  "Fresh and quality ingredients",
  "Clean and hygienic cooking environment",
  "Balanced and nutritious meal planning",
  "Regular quality checks and supervision",
  "Consistent taste and food standards",
  "Professional staff training and discipline",
] as const;
