import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CORE_PAGES, CRIMINAL_DEFENSE_SUBPAGES, DUI_DEFENSE_SUBPAGES } from "@/lib/routes";
import { Shield, Scale, Gavel, CheckCircle, ChevronRight } from "lucide-react";

export default function PracticeAreas() {
  const pageInfo = CORE_PAGES.practiceAreas;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={pageInfo.seoTitle}
        description={pageInfo.metaDescription}
        schemaType="LegalService"
        breadcrumbs={[{ name: "Practice Areas", item: "/practice-areas" }]}
      />

      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs items={[{ name: "Practice Areas", item: "/practice-areas" }]} />
          <div className="max-w-4xl mt-6">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              LEGAL SERVICES
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight mt-2">
              Bel Air, MD Law Firm — Criminal & DUI Defense
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-3 font-sans font-light max-w-2xl">
              We provide aggressive, courtroom-tested representation for individuals facing criminal prosecution or DUI charges in Maryland and Washington DC.
            </p>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-20 bg-background">
        <div className="container flex flex-col gap-16">
          {/* Criminal Defense Hub Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start border-b border-white/5 pb-16">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-4 bg-card border border-white/5 rounded-sm w-fit">
                <Gavel className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Criminal Defense
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light">
                James Ryan represents clients facing all levels of criminal charges, from minor misdemeanors to high-stakes felonies. We meticulously analyze police procedures and evidence to craft aggressive defense strategies.
              </p>
              <Link href="/criminal-defense">
                <span className="text-xs text-primary font-semibold hover:underline cursor-pointer pt-2 block">
                  Explore Criminal Defense Hub →
                </span>
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CRIMINAL_DEFENSE_SUBPAGES.slice(0, 10).map((sub) => (
                <Link key={sub.slug} href={`/criminal-defense/${sub.slug}`}>
                  <div className="bg-card border border-white/5 p-5 rounded-sm hover:border-primary/20 transition-all cursor-pointer group flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {sub.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground font-sans mt-1">
                        Defending charges in Maryland & DC
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* DUI Defense Hub Column */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 flex flex-col gap-4">
              <div className="p-4 bg-card border border-white/5 rounded-sm w-fit">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                DUI & Impaired Driving Defense
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light">
                A DUI conviction can cost you your driver's license, your job, and your freedom. We challenge roadside testing, official breathalyzers, and the legality of traffic stops to safeguard your privileges.
              </p>
              <Link href="/dui-defense">
                <span className="text-xs text-primary font-semibold hover:underline cursor-pointer pt-2 block">
                  Explore DUI Defense Hub →
                </span>
              </Link>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DUI_DEFENSE_SUBPAGES.slice(0, 8).map((sub) => (
                <Link key={sub.slug} href={`/dui-defense/${sub.slug}`}>
                  <div className="bg-card border border-white/5 p-5 rounded-sm hover:border-primary/20 transition-all cursor-pointer group flex items-center justify-between">
                    <div>
                      <h3 className="font-serif text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        {sub.title}
                      </h3>
                      <p className="text-[11px] text-muted-foreground font-sans mt-1">
                        Protecting your driver's license
                      </p>
                    </div>
                    <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </Link>
              ))}
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
