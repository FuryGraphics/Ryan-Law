import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CLIENT_INFO, CORE_PAGES } from "@/lib/routes";
import { Scale, Shield, Award, Calendar, CheckCircle, GraduationCap, MapPin } from "lucide-react";

export default function Attorney() {
  const pageInfo = CORE_PAGES.attorney;

  const credentials = [
    { icon: GraduationCap, title: "Education", items: ["University of Maryland School of Law, J.D.", "University of Maryland, College Park, B.A."] },
    { icon: Scale, title: "Bar Admissions", items: ["State of Maryland", "District of Columbia", "U.S. District Court for the District of Maryland"] },
    { icon: Award, title: "Professional Affiliations", items: ["Maryland State Bar Association (MSBA)", "Maryland Criminal Defense Attorneys' Association (MCDAA)", "Harford County Bar Association"] }
  ];

  const coreValues = [
    { title: "Direct Communication", desc: "You will never be passed off to a legal assistant or junior associate. James Ryan personally handles every aspect of your defense." },
    { title: "Aggressive Trial Strategy", desc: "We prepare every case as if it is going to trial. This rigorous approach gives us maximum leverage during negotiations." },
    { title: "Meticulous Evidence Audits", desc: "From breathalyzer calibration logs to police body camera footage, we leave no stone unturned to identify procedural errors." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={pageInfo.seoTitle}
        description={pageInfo.metaDescription}
        schemaType="Attorney"
        breadcrumbs={[{ name: "Attorney Bio", item: "/attorney" }]}
      />

      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs items={[{ name: "Attorney Bio", item: "/attorney" }]} />
          <div className="max-w-4xl mt-6">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              LEAD COUNSEL
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight mt-2">
              James Ryan
            </h1>
            <p className="text-base md:text-lg text-primary font-serif italic mt-2">
              Founder & Lead Criminal Defense Lawyer
            </p>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>

      {/* Main Bio Content */}
      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Portrait & Credentials */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="border border-white/5 p-3 bg-card rounded-sm shadow-xl">
              <img
                src={CLIENT_INFO.images.portrait}
                alt="James Ryan Attorney Portrait"
                className="w-full h-auto rounded-sm"
              />
            </div>

            {/* Credentials Accordion/List */}
            <div className="flex flex-col gap-6">
              {credentials.map((cred, idx) => (
                <div key={idx} className="bg-card border border-white/5 p-6 rounded-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <cred.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-serif text-base font-semibold text-foreground tracking-wide">
                      {cred.title}
                    </h3>
                  </div>
                  <ul className="space-y-2 text-xs text-muted-foreground font-sans leading-relaxed">
                    {cred.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Detailed Biography */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Dedicated to Protecting Your Rights, Your Freedom, and Your Future
              </h2>
              <div className="w-12 h-1 bg-primary" />
            </div>

            <div className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans font-light flex flex-col gap-6">
              <p>
                For over a decade, James Ryan has defended individuals facing serious criminal charges in Maryland and Washington DC. His practice is focused entirely on criminal defense and DUI litigation, giving him deep familiarity with local courtrooms, judges, and prosecutors.
              </p>
              <p>
                James founded Ryan Law LLC with a clear mission: to provide elite, aggressive, and highly personalized legal representation. He believes that every client deserves an attorney who is fully committed, highly responsive, and prepared to fight in the courtroom.
              </p>
              <blockquote className="border-l-2 border-primary pl-4 py-1 italic text-foreground text-sm font-serif my-2">
                "An arrest is not a conviction. No matter how overwhelming the state's evidence may seem, there is always a path to building a defense. We audit every detail to find that path."
              </blockquote>
              <p>
                Throughout his career, James has successfully handled hundreds of criminal matters, securing dismissals, acquittals, and favorable plea agreements in complex cases involving drug distribution, violent crimes, domestic assault, theft, and repeat DUI charges. He has earned a reputation among peers and clients alike as an unwavering, highly ethical, and strategically brilliant advocate.
              </p>
            </div>

            {/* Core Values Section */}
            <div className="border-t border-white/5 pt-8 mt-4">
              <h3 className="font-serif text-lg font-bold text-foreground mb-6">
                Our Firm's Defense Philosophy
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {coreValues.map((val, i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <h4 className="font-serif text-sm font-semibold text-primary">
                      {val.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed font-sans font-light">
                      {val.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
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
