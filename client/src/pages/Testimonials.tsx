import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CORE_PAGES } from "@/lib/routes";
import { Star, Quote, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const pageInfo = CORE_PAGES.testimonials;

  const reviews = [
    {
      stars: 5,
      quote: "James Ryan completely saved my future. I was facing a serious DUI charge in Harford County, but he identified an issue with the breathalyzer test and got the case dismissed. His communication was outstanding throughout.",
      author: "Robert",
      location: "Harford County"
    },
    {
      stars: 5,
      quote: "I can't recommend Ryan Law LLC enough. He was extremely responsive, answered my late-night calls, and walked me through every step of my criminal defense. Professionalism at its finest.",
      author: "Sarah",
      location: "Baltimore County"
    },
    {
      stars: 5,
      quote: "Aggressive, professional, and compassionate. James Ryan fought my drug possession charges in Cecil County and secured a favorable outcome that allowed me to keep my job.",
      author: "Marcus",
      location: "Cecil County"
    },
    {
      stars: 5,
      quote: "Excellent representation. James Ryan was highly professional, prepared, and aggressive in court. He successfully fought my assault charges, resulting in a complete dismissal.",
      author: "David",
      location: "Washington DC"
    },
    {
      stars: 5,
      quote: "James Ryan is an outstanding lawyer. He handled my license suspension hearing with the MVA and saved my commercial driver's license (CDL). I am extremely grateful for his expertise.",
      author: "Thomas",
      location: "Harford County"
    },
    {
      stars: 5,
      quote: "If you are facing criminal charges, hire James Ryan. He was meticulous, found major errors in the police reports, and got my burglary charges reduced to a minor misdemeanor with probation.",
      author: "Emily",
      location: "Baltimore County"
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={pageInfo.seoTitle}
        description={pageInfo.metaDescription}
        schemaType="WebPage"
        breadcrumbs={[{ name: "Reviews", item: "/testimonials" }]}
      />

      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs items={[{ name: "Reviews", item: "/testimonials" }]} />
          <div className="max-w-4xl mt-6">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              CLIENT TRIUMPHS & SUCCESSES
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight mt-2">
              Ryan Law LLC Client Reviews
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4 font-sans font-light max-w-2xl">
              Discover real testimonials from individuals who have trusted James Ryan to protect their freedom, careers, and driving privileges in Maryland and DC.
            </p>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto w-full">
            {reviews.map((rev, idx) => (
              <div
                key={idx}
                className="bg-card border border-white/5 p-8 rounded-sm flex flex-col justify-between relative shadow-xl hover:border-primary/15 transition-all duration-300"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 pointer-events-none" />

                <div className="flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed font-sans font-light">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
                  <div>
                    <p className="font-serif text-sm font-bold text-foreground">{rev.author}</p>
                    <p className="text-[10px] tracking-wider uppercase text-muted-foreground font-sans">
                      {rev.location} Client
                    </p>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] text-primary font-sans font-semibold uppercase tracking-wider bg-primary/5 py-1 px-2.5 border border-primary/10 rounded-sm">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Free Consultation Section */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container max-w-4xl">
          <ContactForm />
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}
