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
  SlidersHorizontal,
  Ruler,
  Fence,
  Store,
  Frame,
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
  { slug: "sliding-casement-hinged-systems", title: "Sliding, Casement & Hinged Systems", summary: "Full range of operable window and door systems.", icon: SlidersHorizontal },
  { slug: "frameless-glass-doors", title: "Frameless Glass Doors", summary: "Minimal, seamless entryways for modern interiors.", icon: Square },
  { slug: "aluminium-cladding", title: "Aluminium Cladding", summary: "ACP, solid panel and stainless steel exterior cladding.", icon: PanelTop },
  { slug: "ventilated-facade-systems", title: "Ventilated Facade Systems", summary: "High-performance rainscreen facades for buildings that breathe.", icon: Building2 },
  { slug: "architectural-finishing", title: "Architectural Finishing & Detailing", summary: "Detail-obsessed finishing across facade and interior joinery.", icon: Ruler },
  { slug: "thermal-break-profiles", title: "Thermal Break & Energy-Efficient Profiles", summary: "Region-tuned profiles that cut heat gain and cost.", icon: Thermometer },
  { slug: "interior-glass-partitions", title: "Interior Glass Partitions & Balustrades", summary: "Elegant partitions and balustrades that shape space with light.", icon: Fence },
  { slug: "glass-ceramic-printing", title: "Glass Ceramic Printing", summary: "Durable ceramic printed patterns fused into architectural glass.", icon: Printer },
  { slug: "shower-cubicles-shopfronts", title: "Shower Cubicles & Shopfronts", summary: "Custom shower enclosures and retail shopfront systems.", icon: Store },
  { slug: "skylights-structural-glazing", title: "Skylights & Structural Glazing", summary: "Structural skylights and point-fixed glazing that flood interiors with daylight.", icon: Sun },
  { slug: "gypsum-works", title: "Gypsum Works", summary: "Precision drywall and partition systems.", icon: Grid3x3 },
  { slug: "painting-works", title: "Painting Works", summary: "Finish coatings for interiors and exteriors, done right.", icon: PaintRoller },
  { slug: "false-ceiling-light-partitions", title: "False Ceiling & Light Partitions", summary: "Modern suspended ceilings and light partitioning systems.", icon: Wind },
  { slug: "electromechanical", title: "Electromechanical Installation & Maintenance", summary: "Turn-key MEP installation and ongoing maintenance.", icon: Wrench },
  { slug: "plumbing-sanitary-works", title: "Plumbing & Sanitary Works", summary: "Reliable plumbing systems built to code and to last.", icon: Droplets },
  { slug: "shopfronts", title: "Shopfronts", summary: "Retail-ready shopfront systems built for busy trading.", icon: Frame },
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

// Mission distilled from the Quality Policy — everyday practice.
export const mission =
  "To deliver aluminium, glass and smart technical solutions built to the highest standards of craftsmanship, safety and professionalism — through advanced technology, premium materials and a dedicated team.";

// Vision straight from the Quality Policy.
export const vision =
  "To be the company of first choice for all stakeholders — challenging and changing the image of construction, lean and agile in adopting work processes to compete with the world's leading businesses.";

// Managing Director welcome (condensed from the client letter, first person).
export const welcomeParagraphs = [
  "It is my pleasure to welcome you to Astra Group of Companies. Since our establishment we have remained committed to delivering high-quality aluminium and glass solutions that combine innovation, precision and reliability.",
  "Our success is built on integrity, customer satisfaction and continuous improvement. We believe every project — regardless of its size — deserves the highest standards of craftsmanship, safety and professionalism. Through advanced technology, premium materials and the expertise of our dedicated team, we strive to exceed our clients' expectations at every stage.",
  "The construction industry continues to evolve, and we are committed to growing with it. We invest in modern manufacturing techniques, skilled professionals and sustainable practices to meet international quality standards while contributing to a greener future.",
  "Our greatest strength is the trust our clients, partners and employees place in us. Their confidence inspires us to maintain excellence in every project we undertake and to build long-lasting relationships based on transparency, respect and mutual success.",
];

// "Who Are We" (condensed from the client letter).
export const whoAreWeParagraphs = [
  "Astra Group of Companies UAE — Astra Smart Technical Services LLC in Dubai and Astra Aluminium & Glass Works in Umm Al Quwain — was established in 2023, with offices and factories across Dubai and UAQ.",
  "Our impeccable service has built a reputation across the UAE. We offer high-quality products and services at optimum pricing, backed by the right facilities and a professional, customer-centric team delivering tailored solutions that drive long-term value.",
];

export const managingDirector = {
  name: "Sankaranarayanan",
  title: "Managing Director",
  company: "For and on behalf of Astra Group of Companies",
};
