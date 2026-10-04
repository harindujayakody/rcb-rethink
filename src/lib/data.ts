/* Central content for the RCB Holdings website.
   Specs below are taken from the verified content inventory (2026-10-04).
   Models listed without spec tables are shown as "specs on request" —
   never invent numbers. */

export const CONTACT = {
  company: "RCB Holdings (Pvt) Ltd",
  tagline: "Over 30 Years Pioneering The Industry",
  address: ["No. 516/2, Hokandara North,", "Hokandara, Sri Lanka."],
  phones: ["+94 112 561 959", "+94 771 600 600"],
  fax: "+94 112 561 032",
  emails: ["info@rcb.lk", "marketing@rcb.lk"],
  chairman: { name: "Mr. Ruwan Pradeep Dabare", title: "Chairman", mobile: "+94 777 361 228", email: "chairman@rcb.lk" },
  sdlgLanka: {
    name: "SDLG Lanka (Pvt) Ltd",
    address: ["No. 245, New Kandy Road,", "Kothalawala, Kaduwela, Sri Lanka."],
    phone: "+94 771 600 600",
    email: "sdlglanka@gmail.com",
  },
  hours: "Monday – Saturday, 8:30 AM – 5:30 PM",
};

/* ---------------- Navigation ---------------- */

export const NAV_LINKS = [
  { label: "Machinery", href: "/machinery" },
  { label: "Construction", href: "/construction" },
  { label: "Concrete Products", href: "/concrete-products" },
  { label: "Support", href: "/support" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/* ---------------- Machinery ---------------- */

export interface MachineSpec {
  label: string;
  value: string;
}

export interface MachineModel {
  slug: string;
  name: string;
  brand: string;
  tagline: string;
  image: string;
  /** Empty specs = "full specifications on request", never invented. */
  specs: MachineSpec[];
  features: string[];
}

export interface MachineCategory {
  slug: string;
  name: string;
  description: string;
  image: string;
  brands: string[];
  models: MachineModel[];
}

export const MACHINE_CATEGORIES: MachineCategory[] = [
  {
    slug: "wheel-loaders",
    name: "Wheel Loaders",
    description:
      "High-output wheel loaders for quarries, batching plants and site work — built for long shifts and low running cost.",
    image: "/images/machinery-yard.jpg",
    brands: ["SDLG", "YINENG"],
    models: [
      {
        slug: "yn959g",
        name: "YN959G",
        brand: "YINENG",
        tagline: "5-tonne class wheel loader for heavy site work.",
        image: "/images/machinery-yard.jpg",
        specs: [
          { label: "Bucket capacity", value: "3 m³" },
          { label: "Rated load", value: "5,000 kg" },
          { label: "Rated power", value: "162 kW / 2200 rpm" },
          { label: "Tyre", value: "23.5-25" },
          { label: "Dumping height", value: "3,100 mm" },
          { label: "Overall dimensions", value: "7,960 × 3,070 × 3,490 mm" },
          { label: "Operating weight", value: "17,000 kg" },
        ],
        features: [
          "High breakout force for quarry and stockpile work",
          "Heavy-duty axles and reinforced frame",
          "Comfortable cab with wide visibility",
        ],
      },
      { slug: "lg956f", name: "LG956F", brand: "SDLG", tagline: "SDLG wheel loader — specifications on request.", image: "/images/machinery-yard.jpg", specs: [], features: [] },
      { slug: "lg936l", name: "LG936L", brand: "SDLG", tagline: "SDLG wheel loader — specifications on request.", image: "/images/machinery-yard.jpg", specs: [], features: [] },
      { slug: "lg918", name: "LG918", brand: "SDLG", tagline: "SDLG compact wheel loader — specifications on request.", image: "/images/machinery-yard.jpg", specs: [], features: [] },
    ],
  },
  {
    slug: "excavators",
    name: "Excavators",
    description:
      "Crawler excavators with reinforced structures and precise hydraulics — for digging, trenching and loading.",
    image: "/images/hero-excavator.jpg",
    brands: ["SDLG"],
    models: [
      {
        slug: "lg6225e",
        name: "LG6225E",
        brand: "SDLG",
        tagline: "21.7-tonne crawler excavator for heavy digging.",
        image: "/images/hero-excavator.jpg",
        specs: [
          { label: "Operating weight", value: "21,700 kg" },
          { label: "Bucket capacity", value: "0.8–1.2 m³" },
          { label: "Maximum excavation force", value: "147.1 kN" },
          { label: "Swing speed", value: "0–11.6 r/min" },
          { label: "Travel speed (low / high)", value: "3.2 / 5.5 km/h" },
          { label: "Dimensions (L × W × H)", value: "9,745 × 2,990 × 2,940 mm" },
          { label: "Maximum digging radius", value: "9,940 mm" },
        ],
        features: [
          "Reinforced boom, arm and bucket",
          "Advanced hydraulic system with LCD monitoring",
          "Optional attachments for versatile site work",
          "Cab with air conditioning and vibration isolation",
          "Easy service and maintenance access",
        ],
      },
      { slug: "e660f", name: "E660F", brand: "SDLG", tagline: "SDLG excavator — specifications on request.", image: "/images/hero-excavator.jpg", specs: [], features: [] },
    ],
  },
  {
    slug: "road-rollers",
    name: "Road Rollers",
    description:
      "Full hydraulic single-drum vibratory rollers for road and paving compaction.",
    image: "/images/machinery-yard.jpg",
    brands: ["SDLG"],
    models: [
      {
        slug: "rs7120",
        name: "RS7120",
        brand: "SDLG",
        tagline: "12-tonne single-drum vibratory road roller.",
        image: "/images/machinery-yard.jpg",
        specs: [
          { label: "Overall dimensions", value: "6,113 × 2,300 × 3,130 mm" },
          { label: "Operating weight", value: "12,000 kg" },
          { label: "Rated power", value: "98 kW" },
          { label: "Swing angle", value: "12°" },
          { label: "Steering angle", value: "±35°" },
          { label: "Minimum turning radius", value: "6,400 mm" },
        ],
        features: [
          "Full hydraulic single-drum vibratory design",
          "Reliable engine and cooling system",
          "Comfortable cab with excellent visibility",
          "Easy maintenance access",
        ],
      },
    ],
  },
  {
    slug: "motor-graders",
    name: "Motor Graders",
    description:
      "Precision graders for road formation, levelling and finishing work.",
    image: "/images/machinery-yard.jpg",
    brands: ["SDLG"],
    models: [
      { slug: "g9138", name: "G9138", brand: "SDLG", tagline: "SDLG motor grader — specifications on request.", image: "/images/machinery-yard.jpg", specs: [], features: [] },
    ],
  },
  {
    slug: "block-making-machines",
    name: "Block Making Machines",
    description:
      "Automated block and paver production lines — from semi-automatic units to fully automatic plants.",
    image: "/images/industrial-1.jpg",
    brands: ["Noah", "Shengya"],
    models: [
      { slug: "qtj4-26a", name: "QTJ4-26A", brand: "Noah / Shengya", tagline: "Automatic block making machine — specifications on request.", image: "/images/industrial-1.jpg", specs: [], features: [] },
    ],
  },
  {
    slug: "forklifts",
    name: "Forklifts",
    description:
      "Diesel forklifts for yards, warehouses and factories — rugged and easy to maintain.",
    image: "/images/forklift.jpg",
    brands: ["SHANTUI"],
    models: [
      { slug: "diesel-3t", name: "3-Ton Diesel", brand: "SHANTUI", tagline: "Diesel forklift range — specifications on request.", image: "/images/forklift.jpg", specs: [], features: [] },
    ],
  },
  {
    slug: "stone-crushers",
    name: "Stone Crushers",
    description:
      "Crushing solutions for aggregate production — talk to our team about capacity and configuration.",
    image: "/images/industrial-2.jpg",
    brands: ["Jinbaoshan"],
    models: [
      { slug: "crusher-range", name: "Crusher Range", brand: "Jinbaoshan", tagline: "Stone crusher range — specifications on request.", image: "/images/industrial-2.jpg", specs: [], features: [] },
    ],
  },
];

export function getCategory(slug: string) {
  return MACHINE_CATEGORIES.find((c) => c.slug === slug);
}

export function getModel(categorySlug: string, modelSlug: string) {
  return getCategory(categorySlug)?.models.find((m) => m.slug === modelSlug);
}

export const ALL_MODELS = MACHINE_CATEGORIES.flatMap((c) =>
  c.models.map((m) => ({ ...m, categorySlug: c.slug, categoryName: c.name }))
);

/* ---------------- Concrete products ---------------- */

export interface ProductDim {
  name: string;
  dims: string;
  note?: string;
}

export const INTERLOCK_PRODUCTS: (ProductDim & { colors: string[] })[] = [
  { name: "UN II", dims: "220 × 110 × 60 mm", colors: ["White", "Red", "Black"] },
  { name: "UN III", dims: "220 × 110 × 80 mm", colors: ["White", "Red", "Black"] },
  { name: "Cobble II", dims: "200 × 100 × 60 mm", colors: ["White", "Red", "Black"] },
  { name: "Cobble III", dims: "220 × 100 × 80 mm", colors: ["White", "Red", "Black"] },
];

export const BLOCK_PRODUCTS: ProductDim[] = [
  { name: "CP Hollow", dims: "100 × 190 × 390 mm" },
  { name: "CP Solid", dims: "100 × 190 × 390 mm" },
  { name: "BNL Hollow", dims: "150 × 190 × 390 mm" },
  { name: "BNL Solid", dims: "150 × 190 × 390 mm" },
  { name: "AL Hollow", dims: "200 × 190 × 390 mm" },
  { name: "AL Solid", dims: "200 × 190 × 390 mm" },
];

/* ---------------- Projects ---------------- */

export interface Project {
  slug: string;
  name: string;
  location: string;
  scope: string;
  date?: string;
  image: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "cey-nor-boat-yard",
    name: "CEY-NOR Boat Yard",
    location: "Sri Lanka",
    scope: "Interlock paving supply and laying",
    date: "August 2016",
    image: "/images/pavers-1.jpg",
  },
  {
    slug: "sakithma-hardware",
    name: "Sakithma Hardware",
    location: "Sri Lanka",
    scope: "Interlock paving",
    image: "/images/pavers-2.jpg",
  },
  {
    slug: "hello-kidz",
    name: "Hello Kidz",
    location: "Sri Lanka",
    scope: "Interlock paving",
    image: "/images/pavers-3.jpg",
  },
];

/* ---------------- Why choose RCB ---------------- */

export const WHY_RCB = [
  { icon: "Wrench", title: "After-Sales Service", text: "Service backup long after delivery — our technicians know every machine we sell." },
  { icon: "ShieldCheck", title: "1-Year Warranty", text: "Warranty cover on machinery, handled locally by our own team." },
  { icon: "Cog", title: "Spare Parts & Accessories", text: "Genuine parts stocked in Hokandara to keep your machines running." },
  { icon: "GraduationCap", title: "Technical Expertise", text: "Three decades of hands-on knowledge across machines, blocks and paving." },
  { icon: "HardHat", title: "Installation Support", text: "Commissioning and installation support for block plants and machinery." },
  { icon: "FileText", title: "Leasing Assistance", text: "Simple documentation and leasing assistance to get you started faster." },
];

/* ---------------- Gallery ---------------- */

export const GALLERY = [
  { src: "/images/hero-excavator.jpg", caption: "Earthmovers at work" },
  { src: "/images/pavers-1.jpg", caption: "Interlock paving" },
  { src: "/images/pavers-2.jpg", caption: "Paver patterns" },
  { src: "/images/pavers-3.jpg", caption: "Laid to last" },
  { src: "/images/machinery-yard.jpg", caption: "Machinery yard" },
  { src: "/images/forklift.jpg", caption: "Material handling" },
  { src: "/images/industrial-1.jpg", caption: "Block production" },
  { src: "/images/industrial-2.jpg", caption: "Plant & machinery" },
  { src: "/images/hero-site.jpg", caption: "On site" },
];
