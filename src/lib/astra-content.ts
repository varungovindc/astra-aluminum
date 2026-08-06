import {
  Layers,
  GalleryVerticalEnd,
  DoorOpen,
  Square,
  PanelTop,
  Building2,
  Thermometer,
  Printer,
  Sun,
  PaintRoller,
  Grid3x3,
  Wrench,
  Droplets,
  Wind,
  SlidersHorizontal,
  Ruler,
  Fence,
  Store,
  Frame,
  Umbrella,
  Warehouse,
  Waves,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import catAluminium from "@/assets/cat-aluminium.jpg";
import catGlass from "@/assets/cat-glass.jpg";
import catSteel from "@/assets/cat-steel.jpg";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
  category: "aluminium" | "glass" | "steel" | "smart";
};

export const services: Service[] = [
  // ─── Aluminium Works ─────────────────────────────────────────────
  { slug: "aluminium-glass-doors-windows", title: "Aluminium Doors & Windows", summary: "Precision doors and windows in premium aluminium systems.", icon: DoorOpen, category: "aluminium" },
  { slug: "sliding-casement-hinged-systems", title: "Sliding, Casement & Hinged Systems", summary: "Full range of operable window and door systems.", icon: SlidersHorizontal, category: "aluminium" },
  { slug: "aluminium-cladding", title: "Aluminium Cladding", summary: "ACP, solid panel and composite exterior cladding.", icon: PanelTop, category: "aluminium" },
  { slug: "ventilated-facade-systems", title: "Ventilated Facade Systems", summary: "High-performance rainscreen facades that breathe.", icon: Building2, category: "aluminium" },
  { slug: "thermal-break-profiles", title: "Thermal Break Profiles", summary: "Energy-efficient profiles tuned for the UAE climate.", icon: Thermometer, category: "aluminium" },
  { slug: "aluminium-pergolas", title: "Aluminium Pergolas & Louvers", summary: "Shaded outdoor structures in powder-coated aluminium.", icon: Umbrella, category: "aluminium" },
  { slug: "shopfronts", title: "Aluminium Shopfronts", summary: "Retail-ready shopfront systems built for busy trading.", icon: Frame, category: "aluminium" },

  // ─── Glass Works ─────────────────────────────────────────────────
  { slug: "curtain-wall-systems", title: "Curtain Wall Systems", summary: "Structural glazed envelopes engineered for scale.", icon: Layers, category: "glass" },
  { slug: "glass-works", title: "Tempered & Laminated Glass", summary: "Bespoke tempered, laminated and insulated glass units.", icon: GalleryVerticalEnd, category: "glass" },
  { slug: "frameless-glass-doors", title: "Frameless Glass Doors", summary: "Minimal, seamless entryways for modern interiors.", icon: Square, category: "glass" },
  { slug: "interior-glass-partitions", title: "Interior Glass Partitions", summary: "Elegant office partitions shaped with light.", icon: Fence, category: "glass" },
  { slug: "glass-balustrades", title: "Glass Balustrades & Railings", summary: "Frameless and clamped glass balustrades.", icon: ShieldCheck, category: "glass" },
  { slug: "glass-ceramic-printing", title: "Glass Ceramic Printing", summary: "Ceramic-printed patterns fused into architectural glass.", icon: Printer, category: "glass" },
  { slug: "shower-cubicles", title: "Shower Cubicles", summary: "Custom shower enclosures in tempered glass.", icon: Waves, category: "glass" },
  { slug: "skylights-structural-glazing", title: "Skylights & Structural Glazing", summary: "Point-fixed glazing and skylights that flood interiors with daylight.", icon: Sun, category: "glass" },

  // ─── Steel Works ─────────────────────────────────────────────────
  { slug: "steel-canopy", title: "Steel Canopies", summary: "Structural steel canopies for entrances, drop-offs and walkways.", icon: Umbrella, category: "steel" },
  { slug: "stainless-steel-handrails", title: "Stainless Steel Handrails", summary: "Polished stainless handrails for stairs, ramps and balconies.", icon: Fence, category: "steel" },
  { slug: "steel-cladding", title: "Stainless Steel Cladding", summary: "Architectural stainless and metal panel cladding.", icon: PanelTop, category: "steel" },
  { slug: "steel-pergolas", title: "Steel Pergolas & Shades", summary: "Powder-coated steel pergolas and outdoor shade structures.", icon: Sun, category: "steel" },
  { slug: "steel-sheds", title: "Steel Sheds & Structures", summary: "Warehouse sheds, car park shades and fabricated structures.", icon: Warehouse, category: "steel" },
  { slug: "steel-doors", title: "Steel Doors & Gates", summary: "Heavy-duty steel doors, gates and security shutters.", icon: DoorOpen, category: "steel" },

  // ─── Smart Technical Services ────────────────────────────────────
  { slug: "architectural-finishing", title: "Architectural Finishing & Detailing", summary: "Detail-obsessed finishing across facade and interior joinery.", icon: Ruler, category: "smart" },
  { slug: "gypsum-works", title: "Gypsum Works", summary: "Precision drywall and partition systems.", icon: Grid3x3, category: "smart" },
  { slug: "false-ceiling", title: "False Ceiling & Light Partitions", summary: "Modern suspended ceilings and light partitioning.", icon: Wind, category: "smart" },
  { slug: "painting-works", title: "Painting Works", summary: "Finish coatings for interiors and exteriors, done right.", icon: PaintRoller, category: "smart" },
  { slug: "electromechanical", title: "Electromechanical (MEP)", summary: "Turn-key MEP installation and ongoing maintenance.", icon: Wrench, category: "smart" },
  { slug: "plumbing-sanitary-works", title: "Plumbing & Sanitary Works", summary: "Reliable plumbing systems built to code and to last.", icon: Droplets, category: "smart" },
  { slug: "retail-shopfronts", title: "Retail Shopfront Fit-outs", summary: "Full shopfront fit-out delivery with signage coordination.", icon: Store, category: "smart" },
];

export type Category = {
  id: "aluminium" | "glass" | "steel" | "smart";
  eyebrow: string;
  title: string;
  tagline: string;
  image: string;
  accent: "orange" | "blue";
};

export const categories: Category[] = [
  {
    id: "aluminium",
    eyebrow: "01 — Aluminium",
    title: "Aluminium Works",
    tagline: "Doors, windows, cladding, facades and pergolas engineered in premium aluminium.",
    image: catAluminium,
    accent: "orange",
  },
  {
    id: "glass",
    eyebrow: "02 — Glass",
    title: "Glass Works",
    tagline: "Curtain walls, frameless doors, partitions, balustrades and structural glazing.",
    image: catGlass,
    accent: "blue",
  },
  {
    id: "steel",
    eyebrow: "03 — Steel",
    title: "Steel Works",
    tagline: "Canopies, pergolas, cladding, handrails, sheds, doors and fabricated structures.",
    image: catSteel,
    accent: "orange",
  },
];

export const heroSlides = [
  {
    eyebrow: "Astra Group Of Companies",
    headlineBefore: "Aluminium. Glass. ",
    headlineTyped: "Steel.",
    subline: "A UAE group delivering premium aluminium, glass, steel and smart technical services across Dubai and Umm Al Quwain.",
    ctaPrimary: { label: "Explore Services", to: "/services" as const },
    ctaSecondary: { label: "About Us", to: "/about" as const },
    accent: "orange" as const,
  },
  {
    eyebrow: "Facades & Envelopes",
    headlineBefore: "Advanced ",
    headlineTyped: "Cladding & Facades",
    subline: "Ventilated facades, ACP, solid panel and stainless steel cladding built for scale and precision.",
    ctaPrimary: { label: "See Facade Work", to: "/services" as const },
    ctaSecondary: { label: "Talk To Us", to: "/contact" as const },
    accent: "blue" as const,
  },
  {
    eyebrow: "Astra Group Of Companies",
    headlineBefore: "Smart ",
    headlineTyped: "Technical Services",
    subline: "Electromechanical, plumbing, gypsum, painting and finishing — one team, end-to-end.",
    ctaPrimary: { label: "Our Capabilities", to: "/services" as const },
    ctaSecondary: { label: "Get In Touch", to: "/contact" as const },
    accent: "orange" as const,
  },
];

export const companies = [
  {
    name: "Astra Aluminium & Glass Works",
    city: "Umm Al Quwain, UAE",
    phone: "+971 564949513",
    email: "info@astragroup.ae",
    address: "Umm Al Quwain, United Arab Emirates",
  },
];

export const mission =
  "To deliver aluminium, glass, steel and smart technical solutions built to the highest standards of craftsmanship, safety and professionalism — through advanced technology, premium materials and a dedicated team.";

export const vision =
  "To be the company of first choice for all stakeholders — challenging and changing the image of construction, lean and agile in adopting work processes to compete with the world's leading businesses.";

export const welcomeParagraphs = [
  "It is my pleasure to welcome you to Astra Group of Companies. Since our establishment we have remained committed to delivering high-quality aluminium, glass and steel solutions that combine innovation, precision and reliability.",
  "Our success is built on integrity, customer satisfaction and continuous improvement. We believe every project — regardless of its size — deserves the highest standards of craftsmanship, safety and professionalism. Through advanced technology, premium materials and the expertise of our dedicated team, we strive to exceed our clients' expectations at every stage.",
  "The construction industry continues to evolve, and we are committed to growing with it. We invest in modern manufacturing techniques, skilled professionals and sustainable practices to meet international quality standards while contributing to a greener future.",
  "Our greatest strength is the trust our clients, partners and employees place in us. Their confidence inspires us to maintain excellence in every project we undertake and to build long-lasting relationships based on transparency, respect and mutual success.",
];

export const whoAreWeParagraphs = [
  "Astra Group of Companies UAE — Astra Smart Technical Services LLC in Dubai and Astra Aluminium & Glass Works in Umm Al Quwain — was established in 2023, with offices and factories across Dubai and UAQ.",
  "Our impeccable service has built a reputation across the UAE. We offer high-quality products and services at optimum pricing, backed by the right facilities and a professional, customer-centric team delivering tailored solutions that drive long-term value.",
];

export const managingDirector = {
  name: "Sankaranarayanan",
  title: "Managing Director",
  company: "For and on behalf of Astra Group of Companies",
};

export const careers = [
  {
    id: "project-engineer",
    title: "Project Engineer (Aluminium & Glass)",
    location: "Dubai / UAQ",
    type: "Full-time",
    description: "We are looking for an experienced Project Engineer to oversee aluminium and glass installation projects, ensuring quality, safety, and timely delivery.",
    requirements: [
      "Bachelor's degree in Civil or Mechanical Engineering.",
      "3-5 years of experience in the UAE aluminium and glass industry.",
      "Proficient in AutoCAD and project management software.",
      "Strong communication and leadership skills.",
    ],
  },
  {
    id: "fabricator",
    title: "Aluminium Fabricator",
    location: "Umm Al Quwain",
    type: "Full-time",
    description: "Join our production team in UAQ. You will be responsible for cutting, assembling, and finishing high-quality aluminium door and window systems.",
    requirements: [
      "Proven experience as an aluminium fabricator.",
      "Ability to read and interpret technical drawings.",
      "Experience with various profile systems (Technal, Schuco, Gulf Extrusions).",
      "Focus on precision and quality.",
    ],
  },
  {
    id: "sales-executive",
    title: "Sales Executive",
    location: "Dubai",
    type: "Full-time",
    description: "Drive growth for our Smart Technical Services division. You will build relationships with contractors, consultants, and property developers.",
    requirements: [
      "Previous sales experience in UAE construction or technical services.",
      "Excellent negotiation and presentation skills.",
      "Valid UAE driving license.",
      "Self-motivated with a track record of meeting targets.",
    ],
  },
];

export const projects = [
  {
    id: "luxury-villa-palm",
    title: "Luxury Villa — Palm Jumeirah",
    category: "Aluminium & Glass",
    description: "Full supply and installation of slim-profile sliding doors, structural glass partitions, and bespoke aluminium pergolas for a premium residential project.",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=1200&auto=format&fit=crop",
    year: "2024",
    location: "Dubai",
  },
  {
    id: "commercial-tower-uaq",
    title: "Commercial Office Tower",
    category: "Curtain Wall & Cladding",
    description: "Engineering and execution of unitized curtain wall system and fire-rated ACP cladding for a 15-story commercial development.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
    year: "2023",
    location: "Umm Al Quwain",
  },
  {
    id: "retail-hub-dubai",
    title: "Modern Retail Hub",
    category: "Shopfronts & Steel Works",
    description: "Frameless glass shopfronts and decorative stainless steel canopies for a high-end retail destination.",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
    year: "2024",
    location: "Dubai",
  },
  {
    id: "industrial-warehouse",
    title: "Industrial Logistics Center",
    category: "Steel Structures",
    description: "Design and fabrication of heavy-duty steel sheds, mezzanine floors, and automated industrial gates.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    year: "2023",
    location: "Dubai",
  },
];
