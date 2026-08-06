/**
 * Per-location structured data.
 *
 * Each office has its own Google Business Profile with its own address, hours,
 * rating and reviews, so each location page gets its own schema block — the
 * same block on every page tells Google three different things about one
 * business and none of them win.
 *
 * These are emitted two ways:
 *   1. Baked into a static HTML file per location route at build time
 *      (see the emitLocationPages plugin in vite.config.ts) so crawlers get
 *      the right block without executing JavaScript.
 *   2. Swapped in at runtime by SEO.tsx during client-side navigation.
 */

export type LocationKey = "bel-air" | "towson" | "dc";

export const LOCATION_SCHEMA_ELEMENT_ID = "location-schema";

const SHARED = {
  "@context": "https://schema.org",
  "@type": "Attorney",
  name: "Ryan Law LLC",
  logo: "https://d17lvxud83eqj6.cloudfront.net/c24072df-1e90-46d0-a866-dab754440700.png",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card",
} as const;

// Google Business Profiles list every office as open 24 hours, 7 days.
const OPEN_24_7 = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
].map(day => ({
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [day],
  opens: "00:00",
  closes: "24:00",
}));

const belAir = {
  ...SHARED,
  "@id": "https://www.ryanlaw.us/bel-air#office",
  description:
    "At Ryan Law LLC, located at 16a Bel Air S Pkwy, Suite 202, we are dedicated to providing top-notch legal services for criminal defense cases in our community. Our experienced attorneys specialize in defending clients facing DUI and DWI charges, ensuring your rights are protected every step of the way. As your reliable Criminal Defense Attorney Near Me, we utilize our extensive legal knowledge to fight for favorable outcomes in complex legal situations. Trust our committed team to help you navigate the justice system with confidence and expertise. Contact us today to experience unparalleled legal support and representation in your time of need.",
  url: "https://www.ryanlaw.us/bel-air",
  telephone: "+14436409917",
  image: "https://d17lvxud83eqj6.cloudfront.net/c24072df-1e90-46d0-a866-dab754440700.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "16a Bel Air S Pkwy Suite 202",
    addressLocality: "Bel Air",
    addressRegion: "MD",
    postalCode: "21015",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "39.5006323",
    longitude: "-76.3533814",
  },
  openingHoursSpecification: OPEN_24_7,
  areaServed: [
    { "@type": "Place", name: "Bel Air, MD" },
    { "@type": "Place", name: "Harford County, MD" },
    { "@type": "Place", name: "Cecil County, MD" },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=100092842359531",
    "https://www.instagram.com/ryan_law_llc_towson/",
    "http://www.youtube.com/@RyanLawLLCTowson",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.7",
    reviewCount: 47,
    bestRating: 5,
    worstRating: 1,
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jose Jaquez" },
      reviewBody:
        "James Ryan is the best criminal defense Counselor I could have hired for my DUI/DWI case. I was extremely stressed about the circumstances in my case. James was always responsive to my questions and concerns. Ryan Law is easy on the budget when compared to others. In the end, James managed to negotiate dismissal all of my many traffic violations relevant to my DUI charges. I highly recommend giving Ryan Law a call if you want solid and dependable representation.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Avery Alexander" },
      reviewBody:
        "I gave 5 stars because James was thorough with ensuring every angle of my case could be dealt with if that angle was to be met in court. He informed me of everything I could prepare to make my case stronger and was able to get my case dismissed entirely during negotiations.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Robert Blevins" },
      reviewBody:
        "James Ryan could not have represented me better. I felt bad at times texting or calling him on weekends but that was never an issue for him. I was going through a really tough experience but he made it as seamless and smooth as possible and results were outstanding. Would highly recommend using Ryan law.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Johann Joge" },
      reviewBody:
        "Very professional/formal - made sure i was aware of all options and outcomes by providing a clear and concise rundown, updating as necessary. Both times using Mr. Ryan, he exuded confidence and was clear he was prepared. The more recent case got thrown out due to Mr. Ryan being prepared and aware of my rights.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Kendrea Johnson" },
      reviewBody:
        "Mr. Ryan has done everything possible to make sure my case went smoothly! He's very professional, time punctuational, and understanding. He's an excellent negotiator and always answers his phone whenever I needed! I'll always be appreciative of him! Use him as an attorney he will not disappoint you!",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    },
  ],
};

// Supplied by the client for the Towson office. Invalid values in the original
// were corrected: "undefined:00" opening times, a null geo, and a worstRating
// of 5 — all three make Google discard the property or the whole block.
const towson = {
  ...SHARED,
  "@id": "https://www.ryanlaw.us/towson#office",
  description:
    "At Ryan Law LLC, located at 100 West Road, Suite 300, we are dedicated to providing top-notch legal services for criminal defense cases in our community. Our experienced attorneys specialize in defending clients facing DUI and DWI charges, ensuring your rights are protected every step of the way. As your reliable Criminal Defense Attorney Near Me, we utilize our extensive legal knowledge to fight for favorable outcomes in complex legal situations. Trust our committed team to help you navigate the justice system with confidence and expertise. Contact us today to experience unparalleled legal support and representation in your time of need.",
  url: "https://www.ryanlaw.us/towson",
  telephone: "+14436409917",
  image: "https://d17lvxud83eqj6.cloudfront.net/c24072df-1e90-46d0-a866-dab754440700.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "100 West Road suite 300",
    addressLocality: "Towson",
    addressRegion: "MD",
    postalCode: "21204",
    addressCountry: "US",
  },
  openingHoursSpecification: OPEN_24_7,
  areaServed: [
    { "@type": "Place", name: "Towson, MD" },
    { "@type": "Place", name: "Essex, MD" },
    { "@type": "Place", name: "Catonsville, MD" },
  ],
  sameAs: [
    "https://www.facebook.com/profile.php?id=100092842359531",
    "https://www.instagram.com/ryan_law_llc_towson/",
    "http://www.youtube.com/@RyanLawLLCTowson",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: 8,
    bestRating: 5,
    worstRating: 1,
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jacob Deuster" },
      reviewBody:
        "Ryan Law delivered expert and efficient service. Their reputation, communication and support were outstanding. I felt confident working with their criminal defense lawyer. Would definitely return because of the great experience.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Deuster Service" },
      reviewBody:
        "From the moment I walked into the office, the support I received was outstanding. The staff were friendly and organized, and the attorney took the time to explain everything clearly. I felt completely at ease knowing I had a knowledgeable criminal defense lawyer on my side. Communication was fast and professional, and every question was answered promptly. I was especially impressed with how smoothly the entire process went, from the first consultation to the final paperwork. Highly recommend Ryan Law for anyone needing reliable legal support.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Bhuvnesh Surje" },
      reviewBody:
        "I recently worked with Ryan Law and was extremely impressed. Their expertise was evident, they handled my case quickly and efficiently. Their reputation in the community is strong and they communicated with me clearly at every step. The support from the entire team made me feel confident throughout the process. I would highly recommend them to anyone needing a criminal defense lawyer or a DUI attorney.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "kyle chmielewski" },
      reviewBody:
        "Ryan Law was incredibly efficient – the criminal defense lawyer handled everything quickly and kept me informed at every step. I felt heard and the whole process was smooth and fast. If happiness had a location on Google Maps, it would be here.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Raymond Jones" },
      reviewBody:
        "I worked on a couple criminal matters with James. His commitment to clients and his work ethic is unmatched.  I will recommend his services.",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    },
  ],
};

// Supplied by the client for the Washington DC office. Same three corrections
// as Towson. Its own logo, phone and Facebook page — this office is a separate
// listing, not a copy of the Maryland one.
const dc = {
  ...SHARED,
  "@id": "https://www.ryanlaw.us/dc#office",
  description:
    "Discover unparalleled legal support at Ryan Law LLC, your trusted Criminal Defense Law Firm at 1240 3rd St NE Suite 743, Washington D.C. Our expert team, specializing as DUI, Reckless Driving, and DWI Lawyers, is committed to delivering exceptional, personalized defense strategies tailored to your case. With decades of collective experience, we challenge every detail, ensuring the best trial outcomes through meticulous case preparation and evidence review. Whether facing a criminal charge or a traffic violation, choose Ryan Law LLC for dedicated, client-centered representation.",
  url: "https://www.ryanlaw.us/dc",
  telephone: "+12029290012",
  image: "https://d17lvxud83eqj6.cloudfront.net/2f50a1f9-65ee-4285-ae79-3f5448d5da5d.png",
  logo: "https://d17lvxud83eqj6.cloudfront.net/2f50a1f9-65ee-4285-ae79-3f5448d5da5d.png",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1240 3rd St NE Suite 743",
    addressLocality: "Washington",
    addressRegion: "DC",
    postalCode: "20002",
    addressCountry: "US",
  },
  openingHoursSpecification: OPEN_24_7,
  areaServed: [{ "@type": "Place", name: "Washington D.C." }],
  sameAs: ["https://www.facebook.com/profile.php?id=61586449136343"],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: 2,
    bestRating: 5,
    worstRating: 1,
  },
  // The second review on this profile (Dennis Nevin) is a rating with no text.
  // An empty reviewBody is invalid, so only the review that has content is
  // listed; reviewCount above still reflects both.
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Makai Wiggins" },
      reviewBody: "Lawyer Ryan handles his business and his performance never disappoints",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5, worstRating: 1 },
    },
  ],
};

export const LOCATION_SCHEMAS: Record<LocationKey, Record<string, unknown> | null> = {
  "bel-air": belAir,
  towson,
  dc,
};

/**
 * Local Marketing Manager review-widget slugs, per office. Only offices with a
 * widget appear here; the rest fall back to the curated review cards.
 */
export const LOCATION_REVIEW_WIDGETS: Partial<Record<LocationKey, string>> = {
  towson: "ryan-law-llc-review-widget",
  dc: "ryan-law-llc-1-review-widget",
};

/** Routes that should get their own pre-rendered HTML file at build time. */
export const LOCATION_ROUTES: Record<LocationKey, string> = {
  "bel-air": "bel-air",
  towson: "towson",
  dc: "dc",
};
