import {
  Layers,
  GalleryVerticalEnd,
  DoorOpen,
  Square,
  PanelTop,
  Building2,
  Thermometer,
  Columns3,
  Printer,
  Bath,
  Sun,
  PaintRoller,
  Grid3x3,
  Wrench,
  Droplets,
  Wind,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  summary: string;
  icon: LucideIcon;
};

export const services: Service[] = [
  { slug: "curtain-wall-systems", title: "Curtain Wall Systems", summary: "Structural glazed envelopes engineered for performance and scale.", icon: Layers },
  { slug: "glass-works", title: "Glass Works", summary: "Bespoke glazing, tempered, laminated and insulated solutions.", icon: GalleryVerticalEnd },
  { slug: "aluminium-glass-doors-windows", title: "Aluminium & Glass Doors & Windows", summary: "Precision doors and windows with modern hardware systems.", icon: DoorOpen },
  { slug: "frameless-glass-doors", title: "Frameless Glass Doors", summary: "Minimal, seamless entryways for modern interiors.", icon: Square },
  { slug: "aluminium-cladding", title: "Aluminium Cladding", summary: "ACP, solid panel and stainless steel exterior cladding.", icon: PanelTop },
  { slug: "ventilated-facade-systems", title: "Ventilated Facade Systems", summary: "High-performance rainscreen facades for buildings that breathe.", icon: Building2 },
  { slug: "thermal-break-profiles", title: "Thermal Break Profiles", summary: "Energy-efficient profiles built for the region's climate.", icon: Thermometer },
  { slug: "interior-glass-partitions", title: "Interior Glass Partitions", summary: "Elegant partitions that shape space with light.", icon: Columns3 },
  { slug: "glass-ceramic-printing", title: "Glass Ceramic Printing", summary: "Durable ceramic printed patterns fused into architectural glass.", icon: Printer },
  { slug: "shower-cubicles", title: "Shower Cubicles", summary: "Custom frameless and framed shower enclosures.", icon: Bath },
  { slug: "skylights", title: "Skylights", summary: "Structural skylights that flood interiors with daylight.", icon: Sun },
  { slug: "gypsum-works", title: "Gypsum Works", summary: "Precision drywall and partition systems.", icon: Grid3x3 },
  { slug: "painting", title: "Painting", summary: "Finish coatings for interiors and exteriors, done right.", icon: PaintRoller },
  { slug: "false-ceiling", title: "False Ceiling", summary: "Modern suspended ceilings tailored to your design intent.", icon: Wind },
  { slug: "electromechanical-installation", title: "Electromechanical Installation", summary: "Turn-key MEP installation across commercial fit-outs.", icon: Wrench },
  { slug: "plumbing-sanitary-works", title: "Plumbing & Sanitary Works", summary: "Reliable plumbing systems built to code and to last.", icon: Droplets },
];

export const heroSlides = [
  {
    eyebrow: "Astra Group of Companies",
    headlineBefore: "Engineered ",
    headlineTyped: "Aluminium & Glass Solutions",
    subline: "A UAE group delivering premium aluminium, glass and smart technical services across Dubai and Umm Al Quwain.",
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
    eyebrow: "Astra Smart Technical Services",
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
    phone: "+971 00 000 0000",
    email: "info@astragroup.ae",
    address: "Umm Al Quwain, United Arab Emirates",
  },
  {
    name: "Astra Smart Technical Services LLC",
    city: "Dubai, UAE",
    phone: "+971 00 000 0000",
    email: "hello@astragroup.ae",
    address: "Dubai, United Arab Emirates",
  },
];

export const mission =
  "We deliver aluminium, glass and smart technical solutions built to the highest standards of craftsmanship, safety and professionalism.";

export const vision =
  "To be the company of first choice for all stakeholders — lean and agile in adopting work processes.";
