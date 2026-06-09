export interface RouteInfo {
  title: string;
  path: string;
  seoTitle: string;
  metaDescription: string;
  schemaType: 'LegalService' | 'Attorney' | 'LocalBusiness' | 'FAQPage' | 'BreadcrumbList' | 'WebPage';
}

export const CLIENT_INFO = {
  name: "Ryan Law LLC",
  attorney: "James Ryan",
  phone: "(917) 576-4324",
  phoneRaw: "tel:+19175764324",
  email: "james@ryanlaw.us",
  address: "16a Bel Air South Pkwy, Bel Air, MD 21015",
  domain: "www.ryanlaw.us",
  primaryCity: "Bel Air, MD",
  practiceAreas: ["Criminal Defense", "DUI Defense"],
  serviceAreas: ["Harford County", "Cecil County", "Baltimore County", "Washington DC"],
  hours: "Mon–Fri 9am–6pm, Sat by appt",
  images: {
    portrait: "/james-ryan-portrait.jpg",
    heroBg: "https://d2xsxph8kpxj0f.cloudfront.net/310519663703679771/86bsyXg3nUQiFFCXn5o5yc/law-hero-bg-ZxmbDEbRWf68j8PSramZkV.webp"
  }
};

export const CORE_PAGES: Record<string, RouteInfo> = {
  home: {
    title: "Home",
    path: "/",
    seoTitle: "Criminal Defense Attorney Bel Air, MD | Ryan Law LLC",
    metaDescription: "Facing criminal or DUI charges in Maryland? Contact James Ryan at Ryan Law LLC in Bel Air, MD for an aggressive, strategic defense. Free consultations.",
    schemaType: "LegalService"
  },
  attorney: {
    title: "James Ryan",
    path: "/attorney",
    seoTitle: "James Ryan — Criminal Defense Lawyer Bel Air | Ryan Law LLC",
    metaDescription: "Learn more about attorney James Ryan of Ryan Law LLC. Providing aggressive criminal and DUI defense in Harford, Cecil, and Baltimore Counties.",
    schemaType: "Attorney"
  },
  practiceAreas: {
    title: "Practice Areas",
    path: "/practice-areas",
    seoTitle: "Bel Air, MD Law Firm — Criminal & DUI Defense | Ryan Law LLC",
    metaDescription: "Ryan Law LLC defends clients facing DUI, felony, misdemeanor, drug, assault, and domestic violence charges in Bel Air, Maryland and surrounding areas.",
    schemaType: "LegalService"
  },
  testimonials: {
    title: "Reviews",
    path: "/testimonials",
    seoTitle: "Ryan Law LLC Reviews | Criminal Defense Client Testimonials",
    metaDescription: "Read real client reviews and testimonials for James Ryan at Ryan Law LLC. See how we help clients secure favorable outcomes in Maryland courts.",
    schemaType: "WebPage"
  },
  blog: {
    title: "Blog",
    path: "/blog",
    seoTitle: "Maryland Criminal Defense Legal Tips | Ryan Law LLC Blog",
    metaDescription: "Get free legal tips and advice on Maryland criminal defense, DUI charges, breathalyzer laws, and expungements from Ryan Law LLC.",
    schemaType: "WebPage"
  },
  contact: {
    title: "Contact",
    path: "/contact",
    seoTitle: "Free Consultation — Criminal Defense Bel Air MD | Ryan Law LLC",
    metaDescription: "Contact Ryan Law LLC in Bel Air, MD for a free legal consultation. Call (917) 576-4324 to speak directly with criminal defense attorney James Ryan.",
    schemaType: "LegalService"
  },
  disclaimer: {
    title: "Disclaimer",
    path: "/disclaimer",
    seoTitle: "Legal Disclaimer | Ryan Law LLC",
    metaDescription: "Legal disclaimer for Ryan Law LLC. Information on this website is for general educational purposes only and does not constitute formal legal advice.",
    schemaType: "WebPage"
  },
  privacy: {
    title: "Privacy Policy",
    path: "/privacy-policy",
    seoTitle: "Privacy Policy | Ryan Law LLC",
    metaDescription: "Privacy policy for Ryan Law LLC. Learn how we collect, use, and protect your personal information on our website.",
    schemaType: "WebPage"
  },
  sitemap: {
    title: "Sitemap",
    path: "/sitemap",
    seoTitle: "HTML Sitemap | Ryan Law LLC",
    metaDescription: "Sitemap for Ryan Law LLC. Find and navigate to all practice areas, locations, blog posts, and core pages easily.",
    schemaType: "WebPage"
  }
};

export const CRIMINAL_DEFENSE_SUBPAGES = [
  { slug: "dui", title: "DUI Defense", keyword: "DUI Defense Bel Air MD" },
  { slug: "underage-dui", title: "Underage DUI", keyword: "Underage DUI Maryland" },
  { slug: "drug-charges", title: "Drug Charges", keyword: "Drug Charges Harford County" },
  { slug: "assault-and-battery", title: "Assault & Battery", keyword: "Assault Defense Maryland" },
  { slug: "domestic-violence", title: "Domestic Violence", keyword: "Domestic Violence Lawyer Bel Air" },
  { slug: "theft-and-burglary", title: "Theft & Burglary", keyword: "Theft Attorney Maryland" },
  { slug: "weapons-charges", title: "Weapons Charges", keyword: "Weapons Charge Defense MD" },
  { slug: "traffic-violations", title: "Traffic Violations", keyword: "Traffic Ticket Lawyer Bel Air MD" },
  { slug: "license-suspension", title: "License Suspension", keyword: "MVA License Suspension Defense" },
  { slug: "probation-violations", title: "Probation Violations", keyword: "Probation Violation Lawyer MD" },
  { slug: "expungements", title: "Expungements", keyword: "Criminal Record Expungement MD" },
  { slug: "juvenile-offenses", title: "Juvenile Offenses", keyword: "Juvenile Defense Attorney Maryland" },
  { slug: "felonies", title: "Felony Defense", keyword: "Felony Criminal Defense MD" },
  { slug: "misdemeanors", title: "Misdemeanor Defense", keyword: "Misdemeanor Lawyer Bel Air" },
  { slug: "faq", title: "Criminal Defense FAQ", keyword: "Maryland Criminal Law FAQ" }
];

export const DUI_DEFENSE_SUBPAGES = [
  { slug: "first-time-dui", title: "First-Time DUI", keyword: "First DUI Penalty Maryland" },
  { slug: "repeat-dui", title: "Repeat DUI", keyword: "Multiple DUI Attorney Maryland" },
  { slug: "felony-dui", title: "Felony DUI", keyword: "Felony DUI Lawyer Maryland" },
  { slug: "underage-dui", title: "Underage DUI", keyword: "Underage DUI MD" },
  { slug: "dui-with-injury", title: "DUI with Injury", keyword: "DUI Accident Attorney Maryland" },
  { slug: "breathalyzer-challenges", title: "Breathalyzer Challenges", keyword: "Refuse Breathalyzer MD" },
  { slug: "license-suspension-defense", title: "License Suspension Defense", keyword: "MVA Hearing DUI Maryland" },
  { slug: "commercial-driver-dui", title: "Commercial Driver (CDL) DUI", keyword: "CDL DUI Maryland" },
  { slug: "faq", title: "DUI FAQ", keyword: "Maryland DUI FAQ" }
];

export const LOCATION_PAGES = [
  { slug: "bel-air-md", name: "Bel Air, MD", title: "Criminal Defense & DUI Attorney Bel Air, MD", courthouse: "Harford County District & Circuit Courthouses (Bel Air, MD)" },
  { slug: "harford-county", name: "Harford County", title: "Criminal Defense & DUI Attorney Harford County", courthouse: "Harford County Courthouse (Bel Air, MD)" },
  { slug: "cecil-county", name: "Cecil County", title: "Criminal Defense & DUI Attorney Cecil County", courthouse: "Cecil County District & Circuit Courthouses (Elkton, MD)" },
  { slug: "baltimore-county", name: "Baltimore County", title: "Criminal Defense & DUI Attorney Baltimore County", courthouse: "Baltimore County District & Circuit Courthouses (Towson, MD)" },
  { slug: "washington-dc", name: "Washington DC", title: "Criminal Defense & DUI Attorney Washington DC", courthouse: "Superior Court of the District of Columbia (Washington, DC)" }
];

export const BLOG_POSTS = [
  {
    slug: "what-to-do-if-you-are-arrested-in-maryland",
    title: "What to Do If You Are Arrested in Maryland",
    category: "Criminal Defense",
    date: "June 2, 2026",
    excerpt: "Knowing your rights during an arrest in Maryland can make a massive difference in your case. Discover the immediate steps you must take to protect yourself."
  },
  {
    slug: "first-dui-in-maryland-penalties-and-how-to-fight-it",
    title: "First DUI in Maryland: Penalties and How to Fight It",
    category: "DUI Defense",
    date: "May 20, 2026",
    excerpt: "Arrested for a first-time DUI in Maryland? Learn about potential jail time, license suspensions, ignition interlock requirements, and how to build a defense."
  },
  {
    slug: "can-you-refuse-a-breathalyzer-in-maryland",
    title: "Can You Refuse a Breathalyzer in Maryland?",
    category: "DUI Defense",
    date: "May 10, 2026",
    excerpt: "Understand the differences between roadside breath tests and official station breathalyzer tests in Maryland, and the severe consequences of refusal."
  },
  {
    slug: "how-to-get-a-criminal-record-expunged-in-maryland",
    title: "How to Get a Criminal Record Expunged in Maryland",
    category: "Expungements",
    date: "April 28, 2026",
    excerpt: "A criminal record can hinder your employment and housing options. Find out if your charges are eligible for expungement in Maryland and how the process works."
  }
];
