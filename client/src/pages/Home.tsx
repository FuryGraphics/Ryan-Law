import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEO from "@/components/SEO";
import { CLIENT_INFO, CORE_PAGES } from "@/lib/routes";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Shield,
  Scale,
  Award,
  Calendar,
  CheckCircle,
  ChevronRight,
  Gavel,
  Briefcase,
  MapPin,
  Star,
  Quote
} from "lucide-react";

export default function Home() {
  const pageInfo = CORE_PAGES.home;

  const trustSignals = [
    { icon: Calendar, title: "Free Consultation", desc: "Speak directly with James Ryan today" },
    { icon: Shield, title: "Attorney Direct Access", desc: "When you call, you reach your lawyer" },
    { icon: Scale, title: "MD & DC Courtroom Savvy", desc: "Aggressive, proven trial strategy" },
    { icon: Award, title: "Affordable Payment Plans", desc: "Premium legal defense made accessible" },
    { icon: Gavel, title: "Aggressive Defense", desc: "Uncompromising protection of your rights" },
    { icon: MapPin, title: "Local Representation", desc: "Bel Air, Harford, Cecil & Baltimore Courts" }
  ];

  const practiceAreas = [
    {
      title: "Criminal Defense",
      desc: "Facing misdemeanor or felony charges in Maryland? We build bulletproof, strategic defenses to protect your freedom, career, and reputation.",
      href: "/criminal-defense",
      icon: Gavel
    },
    {
      title: "DUI Defense",
      desc: "Arrested for driving under the influence? We challenge breathalyzer results, field sobriety tests, and traffic stops to fight for your driver's license.",
      href: "/dui-defense",
      icon: Shield
    }
  ];

  const locations = [
    { name: "Bel Air, MD", slug: "bel-air-md" },
    { name: "Harford County", slug: "harford-county" },
    { name: "Cecil County", slug: "cecil-county" },
    { name: "Baltimore County", slug: "baltimore-county" },
    { name: "Washington DC", slug: "washington-dc" }
  ];

  const reviews = [
    {
      stars: 5,
      quote: "James Ryan completely saved my future. I was facing a serious DUI charge in Harford County, but he identified an issue with the breathalyzer test and got the case dismissed.",
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
    }
  ];

  // Motion config for editorial feel
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col selection:bg-primary/20 selection:text-primary">
      <SEO
        title={pageInfo.seoTitle}
        description={pageInfo.metaDescription}
        schemaType="LegalService"
      />

      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-32 pb-20 flex items-center overflow-hidden">
        {/* Abstract Background with subtle glow */}
        <div className="absolute inset-0 z-0">
          <img
            src={CLIENT_INFO.images.heroBg}
            alt="Ryan Law LLC Hero Background"
            className="w-full h-full object-cover opacity-20 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-transparent" />
          <div className="absolute top-1/4 right-1/4 w-96 h-90 bg-primary/5 rounded-full blur-[120px]" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col gap-4"
            >
              <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
                Aggressive Courtroom Advocacy
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground leading-[1.1]">
                Criminal Defense & DUI Attorney Serving{" "}
                <span className="text-primary">Bel Air, MD</span> and Surrounding Counties
              </h1>
              {/* Gold Accent Line */}
              <div className="w-24 h-1 bg-primary mt-2" />
            </motion.div>

            <motion.p
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl font-sans font-light"
            >
              When your freedom, reputation, and livelihood are on the line, you cannot afford to leave your defense to chance. Attorney James Ryan provides relentless, strategic, and highly personalized defense representation.
            </motion.p>

            <motion.div
              initial="hidden"
              animate="visible"
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <a
                href={CLIENT_INFO.phoneRaw}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold text-base py-4 px-8 rounded-sm transition-all shadow-lg text-center flex items-center justify-center gap-2 active:scale-[0.98]"
              >
                <Phone className="w-5 h-5 fill-current" />
                <span>Call Now — {CLIENT_INFO.phone}</span>
              </a>
              <Link href="/contact">
                <span className="border border-white/20 hover:border-primary hover:bg-primary/5 text-foreground font-sans font-medium text-base py-4 px-8 rounded-sm transition-all text-center cursor-pointer block">
                  Free Case Evaluation
                </span>
              </Link>
            </motion.div>
          </div>

          {/* Hero Right: Portrait Silhouette */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative max-w-sm w-full border border-white/5 bg-[#0e0e0e] p-3 rounded-sm shadow-2xl"
            >
              <img
                src={CLIENT_INFO.images.portrait}
                alt="James Ryan Attorney Silhouette"
                className="w-full h-auto rounded-sm"
              />
              <div className="absolute bottom-6 left-6 right-6 bg-background/90 backdrop-blur-md border border-white/10 p-4 rounded-sm">
                <p className="font-serif text-lg font-bold text-primary">{CLIENT_INFO.attorney}</p>
                <p className="text-[10px] tracking-widest uppercase text-muted-foreground font-sans">
                  Lead Defense Counsel • Ryan Law LLC
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Signals Bar */}
      <section className="py-16 bg-[#050505] border-y border-white/5 relative z-10">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {trustSignals.map((sig, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex flex-col items-center text-center gap-3 group"
              >
                <div className="p-3 bg-card border border-white/5 rounded-sm group-hover:border-primary/30 transition-colors duration-300">
                  <sig.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-serif text-sm font-semibold text-foreground tracking-wide">
                  {sig.title}
                </h4>
                <p className="text-[11px] text-muted-foreground font-sans leading-relaxed">
                  {sig.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="relative border border-white/5 p-4 bg-card"
            >
              <img
                src={CLIENT_INFO.images.portrait}
                alt="James Ryan Attorney Profile"
                className="w-full h-auto rounded-sm"
              />
              <div className="absolute top-8 right-8 bg-primary text-primary-foreground font-sans font-bold text-xs tracking-widest uppercase py-2 px-4 rounded-sm shadow-lg">
                100% DEFENSE
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="flex flex-col gap-3"
            >
              <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
                MEET JAMES RYAN
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
                Relentless Legal Defense Built Around Your Case
              </h2>
              <div className="w-16 h-1 bg-primary" />
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-sm md:text-base text-muted-foreground leading-relaxed font-sans font-light flex flex-col gap-4"
            >
              <p>
                James Ryan, the founder of Ryan Law LLC, is an aggressive, dedicated criminal defense attorney serving Harford County, Cecil County, Baltimore County, and Washington DC. He represents clients facing a broad spectrum of state and federal criminal charges, ranging from serious felonies and complex drug conspiracies to DUI defense and high-stakes traffic violations.
              </p>
              <p>
                Unlike massive, assembly-line firms where cases are passed down to paralegals or junior associates, James Ryan handles every file personally. He believes that a successful defense starts with direct, open communication. When you call Ryan Law LLC, you speak directly to your attorney. We analyze every piece of evidence, challenge procedural violations, and fight tirelessly for dismissals, reduced charges, or complete acquittals.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="pt-4"
            >
              <Link href="/attorney">
                <span className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold text-sm py-3.5 px-7 rounded-sm transition-all shadow-md active:scale-[0.98] cursor-pointer">
                  <span>Read Attorney Biography</span>
                  <ChevronRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Practice Areas Grid */}
      <section className="py-24 bg-[#050505] border-t border-white/5 relative">
        <div className="container flex flex-col gap-12">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              OUR LEGAL EXPERTISE
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
              How We Protect Your Freedom
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full"
          >
            {practiceAreas.map((area, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-card border border-white/5 p-8 rounded-sm hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Accent corner border */}
                <div className="absolute top-0 right-0 w-12 h-12 border-t-2 border-r-2 border-transparent group-hover:border-primary/20 transition-all duration-300" />

                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-background border border-white/5 rounded-sm w-fit group-hover:border-primary/30 transition-colors duration-300">
                    <area.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {area.title}
                  </h3>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light">
                    {area.desc}
                  </p>
                </div>

                <div className="pt-6">
                  <Link href={area.href}>
                    <span className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:underline cursor-pointer">
                      <span>Explore {area.title} Hub</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-20 bg-background border-t border-white/5 relative">
        <div className="container flex flex-col gap-12">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              REGIONAL COVERAGE
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
              Serving Clients Across Maryland & Washington DC
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
          >
            {locations.map((loc) => (
              <motion.div key={loc.slug} variants={fadeInUp}>
                <Link href={`/${loc.slug}`}>
                  <span className="inline-flex items-center gap-2 bg-card border border-white/5 hover:border-primary/30 py-3.5 px-6 rounded-sm text-sm font-sans font-medium hover:text-primary transition-all cursor-pointer shadow-md">
                    <MapPin className="w-4 h-4 text-primary shrink-0" />
                    <span>{loc.name}</span>
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Reviews / Testimonials Strip */}
      <section className="py-24 bg-[#050505] border-t border-white/5 relative overflow-hidden">
        <div className="container flex flex-col gap-12">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              CLIENT TESTIMONIALS
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold tracking-tight text-foreground">
              What Our Clients Say About Us
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto w-full"
          >
            {reviews.map((rev, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-card border border-white/5 p-8 rounded-sm flex flex-col justify-between relative shadow-xl"
              >
                <Quote className="absolute top-6 right-6 w-8 h-8 text-white/5 pointer-events-none" />

                <div className="flex flex-col gap-4">
                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(rev.stars)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 text-primary fill-current" />
                    ))}
                  </div>
                  <p className="text-xs md:text-sm text-muted-foreground italic leading-relaxed font-sans font-light">
                    "{rev.quote}"
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6">
                  <p className="font-serif text-sm font-bold text-foreground">{rev.author}</p>
                  <p className="text-[10px] tracking-wider uppercase text-muted-foreground font-sans">
                    {rev.location} Client
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="text-center mt-4">
            <Link href="/testimonials">
              <span className="text-xs text-primary font-medium hover:underline cursor-pointer">
                View All Client Testimonials & Case Results →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

        <div className="container max-w-4xl text-center flex flex-col items-center gap-6 relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight">
            Facing Criminal Charges or a DUI? Don't Wait.
          </h2>
          <p className="font-sans text-sm md:text-base text-primary-foreground/90 leading-relaxed max-w-2xl font-light">
            Every hour you wait is an hour the prosecution uses to build their case. Protect your rights immediately with aggressive legal counsel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
            <a
              href={CLIENT_INFO.phoneRaw}
              className="bg-background hover:bg-background/95 text-foreground font-sans font-bold text-base py-4 px-8 rounded-sm transition-all shadow-xl text-center flex items-center justify-center gap-2 active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 fill-current text-primary" />
              <span>Call James Ryan: {CLIENT_INFO.phone}</span>
            </a>
            <Link href="/contact">
              <span className="border border-primary-foreground/30 hover:border-primary-foreground hover:bg-white/5 text-primary-foreground font-sans font-medium text-base py-4 px-8 rounded-sm transition-all text-center cursor-pointer block">
                Schedule Free Consultation
              </span>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}
