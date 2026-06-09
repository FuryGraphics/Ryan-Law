import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { getPracticeArea, PRACTICE_AREAS, CLIENT_INFO } from "@/lib/routes";
import NotFound from "@/pages/NotFound";
import { Gavel, Shield, Car, HeartCrack, FileCheck, Phone, ChevronRight, CheckCircle, Scale, Calendar, Award } from "lucide-react";

const ICONS: Record<string, typeof Gavel> = {
  gavel: Gavel,
  shield: Shield,
  car: Car,
  "heart-crack": HeartCrack,
  "file-check": FileCheck
};

interface PracticeAreaParentProps {
  type: string;
}

export default function PracticeAreaParent({ type }: PracticeAreaParentProps) {
  const area = getPracticeArea(type);
  if (!area) return <NotFound />;

  const pageData = {
    title: area.title,
    seoTitle: area.seoTitle,
    metaDescription: area.metaDescription,
    h1: area.h1,
    intro: area.intro,
    subpages: area.subpages,
    cases: area.cases,
    icon: ICONS[area.iconKey] ?? Gavel
  };

  const steps = [
    { num: "01", title: "Free Case Evaluation", desc: "Speak directly with James Ryan. We will review your charges, police reports, and immediate court deadlines." },
    { num: "02", title: "Meticulous Investigation", desc: "We audit police body camera footage, breathalyzer calibration logs, and procedural actions to identify errors." },
    { num: "03", title: "Relentless Courtroom Defense", desc: "Whether negotiating a dismissal or fighting for an acquittal at trial, we advocate fiercely for your future." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={pageData.seoTitle}
        description={pageData.metaDescription}
        schemaType="LegalService"
        breadcrumbs={[{ name: pageData.title, item: `/${type}` }]}
      />

      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs items={[{ name: pageData.title, item: `/${type}` }]} />
          <div className="max-w-4xl mt-6">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              PRACTICE AREA HUB
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight mt-2">
              {pageData.h1}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4 font-sans font-light max-w-2xl">
              {pageData.intro}
            </p>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>

      {/* Sub-Practice Areas Grid */}
      <section className="py-20 bg-background">
        <div className="container flex flex-col gap-16">
          <div className="flex flex-col gap-3">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              SPECIFIC CHARGES WE HANDLE
            </span>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Select Your Charge to Learn More
            </h2>
            <div className="w-12 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageData.subpages.map((sub) => (
              <Link key={sub.slug} href={`/${type}/${sub.slug}`}>
                <div className="bg-card border border-white/5 p-6 rounded-sm hover:border-primary/20 transition-all cursor-pointer group flex flex-col justify-between h-40">
                  <div>
                    <h3 className="font-serif text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-xs text-muted-foreground font-sans mt-2 line-clamp-2">
                      Aggressive defense representation and legal counsel in Maryland.
                    </p>
                  </div>
                  <span className="text-xs text-primary font-medium inline-flex items-center gap-1 group-hover:underline">
                    <span>Defense Strategy</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* What We Handle Section */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-4 bg-card border border-white/5 rounded-sm w-fit">
              <pageData.icon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Comprehensive Case Coverage
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light">
              No matter the complexity or severity of your charges, James Ryan provides elite legal counsel. We investigate procedural violations, challenge questionable police work, and build uncompromising defense plans.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pageData.cases.map((caseType, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-card/50 p-4 border border-white/5 rounded-sm">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm font-sans text-foreground">{caseType}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Process Section */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="container flex flex-col gap-12">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              OUR METHODOLOGY
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Your Defense Process
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto w-full">
            {steps.map((step, idx) => (
              <div key={idx} className="bg-card border border-white/5 p-8 rounded-sm relative overflow-hidden">
                <span className="absolute top-4 right-6 font-serif text-5xl font-bold text-white/5">
                  {step.num}
                </span>
                <h3 className="font-serif text-base font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Hire Private Attorney Section */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container max-w-4xl text-center flex flex-col items-center gap-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
            Why Hire a Private Criminal Defense Attorney?
          </h2>
          <div className="w-12 h-1 bg-primary" />
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light max-w-2xl">
            Public defenders are highly skilled but severely overloaded with cases, often meeting clients minutes before a hearing. When you hire James Ryan of Ryan Law LLC, you secure a dedicated advocate with the time, resources, and singular focus required to conduct a thorough investigation, file aggressive motions, and represent you personally at every single court date.
          </p>
        </div>
      </section>

      {/* Free Consultation Section */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="container max-w-4xl">
          <ContactForm />
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}
