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
  terms: {
    title: "Terms & Conditions",
    path: "/terms-and-conditions",
    seoTitle: "Terms & Conditions | Ryan Law LLC",
    metaDescription: "Terms and conditions governing the use of the Ryan Law LLC website. Review the rules, disclaimers, and limitations that apply to visitors of this site.",
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

export const TRAFFIC_OFFENSE_SUBPAGES = [
  { slug: "reckless-and-negligent-driving", title: "Reckless & Negligent Driving", keyword: "Reckless Driving Lawyer Maryland" },
  { slug: "speeding-and-racing", title: "Speeding & Racing", keyword: "Speeding Ticket Attorney Bel Air MD" },
  { slug: "driving-on-suspended-license", title: "Driving on a Suspended License", keyword: "Suspended License Lawyer Maryland" },
  { slug: "driving-without-a-license", title: "Driving Without a License", keyword: "No License Charge Maryland" },
  { slug: "hit-and-run", title: "Hit & Run / Leaving the Scene", keyword: "Hit and Run Attorney Maryland" },
  { slug: "cdl-traffic-violations", title: "CDL Traffic Violations", keyword: "CDL Ticket Lawyer Maryland" },
  { slug: "mva-point-hearings", title: "MVA Point & Suspension Hearings", keyword: "MVA Hearing Lawyer Maryland" }
];

export const DOMESTIC_VIOLENCE_SUBPAGES = [
  { slug: "protective-and-peace-orders", title: "Protective & Peace Orders", keyword: "Protective Order Lawyer Maryland" },
  { slug: "domestic-assault", title: "Domestic Assault Charges", keyword: "Domestic Assault Attorney Bel Air MD" },
  { slug: "violation-of-protective-order", title: "Violation of a Protective Order", keyword: "Violating Protective Order Maryland" },
  { slug: "false-allegations", title: "False Allegations Defense", keyword: "False Domestic Violence Claim Maryland" },
  { slug: "second-degree-assault", title: "Second-Degree Assault (Domestic)", keyword: "Second Degree Assault Lawyer Maryland" }
];

export const EXPUNGEMENT_SUBPAGES = [
  { slug: "expungement-eligibility", title: "Expungement Eligibility", keyword: "Expungement Eligibility Maryland" },
  { slug: "the-expungement-process", title: "The Expungement Process", keyword: "How to Expunge Record Maryland" },
  { slug: "expunging-a-pbj", title: "Expunging a PBJ", keyword: "Expunge PBJ Maryland" },
  { slug: "record-shielding", title: "Record Shielding", keyword: "Record Shielding Maryland" },
  { slug: "governors-pardons", title: "Governor's Pardons", keyword: "Governor Pardon Maryland" }
];

// Top-level practice area "hubs". Pages (hub + sub-pages) are generated from this config.
export const PRACTICE_AREAS = [
  {
    slug: "criminal-defense",
    title: "Criminal Defense",
    navLabel: "Criminal Defense",
    tagline: "Felony & misdemeanor defense across Maryland.",
    iconKey: "gavel",
    seoTitle: "Criminal Defense Attorney Bel Air, MD | Ryan Law LLC",
    metaDescription: "Facing criminal charges in Maryland? James Ryan provides aggressive, custom criminal defense representation. Call (917) 576-4324 for a free consultation.",
    h1: "Criminal Defense Attorney Bel Air, MD",
    intro: "A criminal charge can disrupt every aspect of your life. Whether you are facing a misdemeanor or a complex felony in Maryland, the legal system can feel overwhelming. At Ryan Law LLC, we provide experienced, aggressive, and relentless defense representation to ensure your rights are fully protected and your voice is heard.",
    cases: [
      "Drug Charges (Possession, Distribution, Conspiracy)",
      "Assault, Battery, and Violent Crimes",
      "Domestic Violence & Protective Orders",
      "Theft, Burglary, and Property Crimes",
      "Weapons Charges & Gun Violations",
      "Traffic Violations & MVA Hearings",
      "Probation Violations & Expungements",
      "Juvenile Offenses & School Hearings"
    ],
    subpages: CRIMINAL_DEFENSE_SUBPAGES
  },
  {
    slug: "dui-defense",
    title: "DUI Defense",
    navLabel: "DUI & DWI Defense",
    tagline: "Protect your license and your freedom.",
    iconKey: "shield",
    seoTitle: "DUI Defense Attorney Bel Air, MD | Ryan Law LLC",
    metaDescription: "Arrested for a DUI or DWI in Maryland? Protect your driver's license and freedom. Contact James Ryan for an aggressive defense strategy. Free evaluation.",
    h1: "DUI Defense Attorney Bel Air, MD",
    intro: "In Maryland, a DUI or DWI arrest triggers two separate legal battles: a criminal case in court and an administrative case with the Motor Vehicle Administration (MVA). At Ryan Law LLC, we understand the science and procedures behind blood alcohol tests, field sobriety testing, and traffic stops, and we build aggressive defenses to safeguard your license.",
    cases: [
      "First-Time DUI & DWI Charges",
      "Repeat & Multiple DUI Offenses",
      "Felony DUI & DUI with Injury",
      "Underage DUI & MVA Hearings",
      "Breathalyzer & Blood Test Challenges",
      "Field Sobriety Test Audits",
      "Commercial Driver (CDL) DUI Defense",
      "Ignition Interlock Device Requirements"
    ],
    subpages: DUI_DEFENSE_SUBPAGES
  },
  {
    slug: "traffic-offenses",
    title: "Traffic & Driving Offenses",
    navLabel: "Traffic & Driving Offenses",
    tagline: "Keep points off your record and your license valid.",
    iconKey: "car",
    seoTitle: "Traffic Offense Attorney Bel Air, MD | Ryan Law LLC",
    metaDescription: "Ticketed or charged with a serious traffic offense in Maryland? James Ryan fights reckless driving, suspended license, and CDL charges. Call (917) 576-4324.",
    h1: "Traffic & Driving Offense Attorney Bel Air, MD",
    intro: "Many Maryland traffic charges are misdemeanors that carry jail time, heavy fines, license points, and lasting consequences for your insurance and employment, especially for commercial drivers. Ryan Law LLC defends the full range of serious traffic and driving offenses and fights to keep points off your record and your license in your hands.",
    cases: [
      "Reckless & Negligent Driving",
      "Excessive Speeding & Racing",
      "Driving on a Suspended or Revoked License",
      "Driving Without a License or Registration",
      "Hit & Run / Leaving the Scene of an Accident",
      "Commercial Driver (CDL) Violations",
      "MVA Point Accumulation Hearings",
      "Failure to Appear & Bench Warrants"
    ],
    subpages: TRAFFIC_OFFENSE_SUBPAGES
  },
  {
    slug: "domestic-violence",
    title: "Domestic Violence Defense",
    navLabel: "Domestic Violence Defense",
    tagline: "Protective orders & domestic assault charges.",
    iconKey: "heart-crack",
    seoTitle: "Domestic Violence Defense Attorney Bel Air, MD | Ryan Law LLC",
    metaDescription: "Accused of domestic violence or served a protective order in Maryland? James Ryan provides discreet, aggressive defense. Call (917) 576-4324 for a free consult.",
    h1: "Domestic Violence Defense Attorney Bel Air, MD",
    intro: "Domestic violence accusations in Maryland move quickly and carry immediate consequences, from protective orders that remove you from your home to criminal charges that threaten your freedom and reputation. Ryan Law LLC defends the accused with discretion and intensity, challenging weak evidence and protecting your rights at every stage.",
    cases: [
      "Temporary & Final Protective Orders",
      "Peace Orders",
      "Domestic Assault (First & Second Degree)",
      "Violation of a Protective Order",
      "False or Exaggerated Allegations",
      "Custody & Firearm Surrender Consequences",
      "Stalking & Harassment Charges",
      "Modification & Expiration of Orders"
    ],
    subpages: DOMESTIC_VIOLENCE_SUBPAGES
  },
  {
    slug: "expungements",
    title: "Expungements & Record Relief",
    navLabel: "Expungements & Record Relief",
    tagline: "Clear your record and move forward.",
    iconKey: "file-check",
    seoTitle: "Expungement Attorney Bel Air, MD | Ryan Law LLC",
    metaDescription: "Clear your Maryland criminal record. James Ryan handles expungements, PBJ removal, and record shielding so your past stops holding you back. Free consultation.",
    h1: "Expungement & Record Relief Attorney Bel Air, MD",
    intro: "A criminal record can follow you for years, blocking jobs, housing, and professional licenses, even for charges that were dropped or resolved without a conviction. Ryan Law LLC helps Maryland residents determine what they qualify for and files the petitions needed to expunge, shield, and clear their records so they can move forward.",
    cases: [
      "Expungement of Dismissed & Nolle Prosequi Charges",
      "Expungement After Acquittal",
      "Probation Before Judgment (PBJ) Expungement",
      "Expungement of Eligible Convictions",
      "Record Shielding Petitions",
      "Juvenile Record Expungement",
      "Governor's Pardon Applications",
      "Background Check & Disclosure Guidance"
    ],
    subpages: EXPUNGEMENT_SUBPAGES
  }
] as const;

export function getPracticeArea(slug: string) {
  return PRACTICE_AREAS.find((a) => a.slug === slug);
}

export const LOCATION_PAGES = [
  { slug: "bel-air-md", name: "Bel Air, MD", title: "Criminal Defense & DUI Attorney Bel Air, MD", courthouse: "Harford County District & Circuit Courthouses (Bel Air, MD)" },
  { slug: "harford-county", name: "Harford County", title: "Criminal Defense & DUI Attorney Harford County", courthouse: "Harford County Courthouse (Bel Air, MD)" },
  { slug: "cecil-county", name: "Cecil County", title: "Criminal Defense & DUI Attorney Cecil County", courthouse: "Cecil County District & Circuit Courthouses (Elkton, MD)" },
  { slug: "baltimore-county", name: "Baltimore County", title: "Criminal Defense & DUI Attorney Baltimore County", courthouse: "Baltimore County District & Circuit Courthouses (Towson, MD)" },
  { slug: "washington-dc", name: "Washington DC", title: "Criminal Defense & DUI Attorney Washington DC", courthouse: "Superior Court of the District of Columbia (Washington, DC)" },
  { slug: "aberdeen-md", name: "Aberdeen, MD", title: "Criminal Defense & DUI Attorney Aberdeen, MD", courthouse: "Harford County District Court (Aberdeen / Bel Air, MD)" },
  { slug: "havre-de-grace-md", name: "Havre de Grace, MD", title: "Criminal Defense & DUI Attorney Havre de Grace, MD", courthouse: "Harford County District & Circuit Courthouses (Bel Air, MD)" },
  { slug: "edgewood-md", name: "Edgewood, MD", title: "Criminal Defense & DUI Attorney Edgewood, MD", courthouse: "Harford County District Court (Bel Air, MD)" },
  { slug: "forest-hill-md", name: "Forest Hill, MD", title: "Criminal Defense & DUI Attorney Forest Hill, MD", courthouse: "Harford County District & Circuit Courthouses (Bel Air, MD)" },
  { slug: "elkton-md", name: "Elkton, MD", title: "Criminal Defense & DUI Attorney Elkton, MD", courthouse: "Cecil County District & Circuit Courthouses (Elkton, MD)" },
  { slug: "towson-md", name: "Towson, MD", title: "Criminal Defense & DUI Attorney Towson, MD", courthouse: "Baltimore County District & Circuit Courthouses (Towson, MD)" }
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
