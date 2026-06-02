import { useState } from "react";
import { Link, useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CRIMINAL_DEFENSE_SUBPAGES, DUI_DEFENSE_SUBPAGES, CLIENT_INFO } from "@/lib/routes";
import { ChevronDown, CheckCircle, Scale, Shield, Gavel, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface PracticeAreaSubProps {
  parentType: "criminal-defense" | "dui-defense";
  subSlug: string;
}

export default function PracticeAreaSub({ parentType, subSlug }: PracticeAreaSubProps) {
  const isCriminal = parentType === "criminal-defense";
  const list = isCriminal ? CRIMINAL_DEFENSE_SUBPAGES : DUI_DEFENSE_SUBPAGES;
  const currentSub = list.find((p) => p.slug === subSlug) || list[0];

  const parentTitle = isCriminal ? "Criminal Defense" : "DUI Defense";

  // Detailed templates based on sub-slug
  const subTitle = currentSub.title;
  const h1 = `${subTitle} Defense Attorney Bel Air, MD`;
  const seoTitle = `${subTitle} Defense Lawyer Bel Air | Ryan Law LLC`;
  const metaDescription = `Facing ${subTitle.toLowerCase()} charges in Maryland? Attorney James Ryan of Ryan Law LLC offers aggressive, strategic legal defense. Call (917) 576-4324 for a free consult.`;

  const intro = `Arrested or investigated for ${subTitle.toLowerCase()} in Maryland? This is a serious legal situation that can impact your freedom, career, and driver's license. James Ryan at Ryan Law LLC understands the local Maryland statutes, courtroom procedures, and potential defenses. We provide aggressive, relentless representation to challenge the state's case.`;

  const handles = [
    `Challenging the legality of the initial police stop or search`,
    `Auditing all state evidence, police reports, and witness statements`,
    `Filing aggressive pre-trial motions to suppress unlawfully obtained evidence`,
    `Representing you personally at all Maryland District & Circuit Court hearings`,
    `Negotiating for dismissals, reduced charges, or alternatives like probation before judgment (PBJ)`,
    `Providing comprehensive trial defense if a favorable agreement cannot be reached`
  ];

  const steps = [
    { num: "01", title: "Immediate Case Audit", desc: `James Ryan personally reviews your ${subTitle.toLowerCase()} charges and police documents during a free consultation.` },
    { num: "02", title: "Evidence & Procedure Challenge", desc: "We investigate if police violated your constitutional rights, failed to calibrate testing equipment, or made procedural errors." },
    { num: "03", title: "Strategic Courtroom Advocacy", desc: "We present a robust, tailored defense strategy in court to secure the absolute best possible legal outcome." }
  ];

  const faqs = [
    {
      question: `What are the potential penalties for ${subTitle.toLowerCase()} in Maryland?`,
      answer: "Penalties vary widely based on the specific charge, your prior record, and the circumstances. They can range from fines and probation to mandatory ignition interlock devices, license suspension, and significant jail time. We fight to minimize or eliminate these consequences."
    },
    {
      question: "Do I need to hire a private attorney, or can I use a public defender?",
      answer: "While public defenders are qualified, they are heavily overloaded. Hiring James Ryan ensures you have a dedicated advocate who will personally handle your case, answer your calls, conduct a thorough investigation, and fight for your future."
    },
    {
      question: "Will I have to go to court?",
      answer: "In most criminal and DUI cases in Maryland, your physical appearance in court is mandatory. James Ryan will represent you at every hearing and guide you through the process so you know exactly what to expect."
    },
    {
      question: "What should I do immediately after being charged?",
      answer: "Do not speak to the police or prosecutors about your case. Contact Ryan Law LLC immediately. Anything you say can and will be used against you, but speaking to your attorney is fully protected and confidential."
    },
    {
      question: "How can a charge like this be beaten or reduced?",
      answer: "We look for constitutional violations, lack of probable cause for the stop, faulty testing equipment, inconsistent police reports, and lack of credible evidence. Identifying even one major error can lead to a dismissal or reduction of charges."
    },
    {
      question: "What is Probation Before Judgment (PBJ) in Maryland?",
      answer: "PBJ is a disposition where the court strikes the finding of guilt and places you on probation. If you complete probation successfully, you do not receive a conviction on your record, and it prevents points from being assessed on your driver's license."
    }
  ];

  // Find 2 related sub-pages for internal linking
  const relatedPages = list.filter((p) => p.slug !== subSlug).slice(0, 2);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={seoTitle}
        description={metaDescription}
        schemaType="FAQPage"
        schemaData={{
          faqs: faqs,
          path: `/${parentType}/${subSlug}`
        }}
        breadcrumbs={[
          { name: parentTitle, item: `/${parentType}` },
          { name: subTitle, item: `/${parentType}/${subSlug}` }
        ]}
      />

      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: parentTitle, item: `/${parentType}` },
              { name: subTitle, item: `/${parentType}/${subSlug}` }
            ]}
          />
          <div className="max-w-4xl mt-6">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              {parentTitle} SPECIALTY
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight mt-2">
              {h1}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4 font-sans font-light max-w-2xl">
              {intro}
            </p>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>

      {/* What We Handle Section */}
      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-4 bg-card border border-white/5 rounded-sm w-fit">
              {isCriminal ? <Gavel className="w-8 h-8 text-primary" /> : <Shield className="w-8 h-8 text-primary" />}
            </div>
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              How We Build Your {subTitle} Defense
            </h2>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light">
              James Ryan conducts a deep-dive investigation into every case. We do not accept the state's narrative. We fight to uncover procedural errors and constitutional violations that can dismantle the prosecution's case.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-3">
            {handles.map((handle, idx) => (
              <div key={idx} className="flex items-start gap-3 bg-card p-4 border border-white/5 rounded-sm">
                <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm font-sans text-foreground leading-relaxed">{handle}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The 3-Step Process */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container flex flex-col gap-12">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              OUR STRATEGY
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Our 3-Step Defense Process
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

      {/* FAQ Accordion Section */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="container max-w-4xl flex flex-col gap-12">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              LEGAL QUESTIONS ANSWERED
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          <Accordion type="single" collapsible className="w-full font-sans space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`faq-${idx}`}
                className="bg-card border border-white/5 px-6 rounded-sm"
              >
                <AccordionTrigger className="font-serif text-sm md:text-base font-semibold text-foreground hover:text-primary transition-colors py-4">
                  <div className="flex items-center gap-3 text-left">
                    <HelpCircle className="w-4 h-4 text-primary shrink-0" />
                    <span>{faq.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-xs md:text-sm text-muted-foreground leading-relaxed pb-4 pt-1">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Related Pages Internal Linking */}
      <section className="py-16 bg-[#050505] border-t border-white/5">
        <div className="container flex flex-col gap-8">
          <h3 className="font-serif text-lg font-bold text-foreground text-center">
            Related {parentTitle} Practice Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto w-full">
            {relatedPages.map((page) => (
              <Link key={page.slug} href={`/${parentType}/${page.slug}`}>
                <div className="bg-card border border-white/5 p-5 rounded-sm hover:border-primary/20 transition-all cursor-pointer group flex items-center justify-between">
                  <span className="font-serif text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                    {page.title} Defense
                  </span>
                  <ChevronDown className="w-4 h-4 text-muted-foreground group-hover:text-primary -rotate-90 transition-all" />
                </div>
              </Link>
            ))}
          </div>
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
