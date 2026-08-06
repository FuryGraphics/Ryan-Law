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

  // Verbatim reviews from the Ryan Law LLC Google Business Profile (Bel Air).
  const reviews = [
    {
      stars: 5,
      quote: "James Ryan is the best criminal defense Counselor I could have hired for my DUI/DWI case. I was extremely stressed about the circumstances in my case. James was always responsive to my questions and concerns. Ryan Law is easy on the budget when compared to others. In the end, James managed to negotiate dismissal all of my many traffic violations relevant to my DUI charges. I highly recommend giving Ryan Law a call if you want solid and dependable representation.",
      author: "Jose Jaquez",
      date: "a year ago"
    },
    {
      stars: 5,
      quote: "I gave 5 stars because James was thorough with ensuring every angle of my case could be dealt with if that angle was to be met in court. He informed me of everything I could prepare to make my case stronger and was able to get my case dismissed entirely during negotiations.",
      author: "Avery Alexander",
      date: "3 years ago"
    },
    {
      stars: 5,
      quote: "James Ryan could not have represented me better. I felt bad at times texting or calling him on weekends but that was never an issue for him. I was going through a really tough experience but he made it as seamless and smooth as possible and results were outstanding. Would highly recommend using Ryan law.",
      author: "Robert Blevins",
      date: "2 years ago"
    },
    {
      stars: 5,
      quote: "Very professional/formal - made sure i was aware of all options and outcomes by providing a clear and concise rundown, updating as necessary. Both times using Mr. Ryan, he exuded confidence and was clear he was prepared. The more recent case got thrown out due to Mr. Ryan being prepared and aware of my rights.",
      author: "Johann Joge",
      date: "a year ago"
    },
    {
      stars: 5,
      quote: "Mr. Ryan has done everything possible to make sure my case went smoothly! He's very professional, time punctuational, and understanding. He's an excellent negotiator and always answers his phone whenever I needed! I'll always be appreciative of him! Use him as an attorney he will not disappoint you!",
      author: "Kendrea Johnson",
      date: "a year ago"
    },
    {
      stars: 5,
      quote: "Would recommend to others. Had a DUI/DWI Reckless and Negligent Driving, and ended with dismissal. Stayed well communicated.",
      author: "Brian",
      date: "a year ago"
    },
    {
      stars: 5,
      quote: "Ryan Law was very helpful with my traffic case. He took matters and concerns serious, moved very quickly and delivered exceptionally. If you need someone to advocate for you in court, this is your guy.",
      author: "Kathiusca Livingston",
      date: "2 years ago"
    },
    {
      stars: 5,
      quote: "All I can say is thank you to this firm, and congrats on producing an even better outcome than expected! Very fair pricing, absolute experts at handling traffic violations.",
      author: "Jonathan Ruga",
      date: "a year ago"
    },
    {
      stars: 5,
      quote: "If you're looking for a professional attorney with lots of experience, who is fair and will defend you to the best of their ability then look no further. Great job, I'm very satisfied with the outcome. I would definitely recommend.",
      author: "Dre Clark",
      date: "a year ago"
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
                      Google Review &middot; {rev.date}
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
