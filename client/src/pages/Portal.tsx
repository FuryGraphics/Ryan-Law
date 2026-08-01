import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";
import SEO from "@/components/SEO";
import { CLIENT_INFO, LOCATION_CONFIGS } from "@/lib/routes";
import { MapPin, Phone, ArrowRight, ShieldCheck, Scale, Award } from "lucide-react";

export default function Portal() {
  const [, setLocation] = useLocation();

  const portalLocations = [
    {
      key: "bel-air",
      name: "Bel Air Office",
      city: "Bel Air, MD",
      phone: "(443) 348-0434",
      address: "16a Bel Air South Pkwy, Bel Air, MD 21015",
      path: "/bel-air",
      desc: "Serving Harford County, Cecil County, and northeastern Maryland. Aggressive criminal defense & DUI representation.",
    },
    {
      key: "towson",
      name: "Towson Office",
      city: "Towson, MD",
      phone: "(443) 348-0434",
      address: "Towson, MD (By Appointment Only)",
      path: "/towson",
      desc: "Serving Towson, Baltimore County, and surrounding Baltimore metro courts. Strategic trial advocacy.",
    },
    {
      key: "dc",
      name: "Washington DC Office",
      city: "Washington, DC",
      phone: "(202) 519-1935",
      address: "Washington, DC (By Appointment Only)",
      path: "/dc",
      desc: "Serving the District of Columbia and federal courts. Relentless defense of complex charges.",
    }
  ];

  // Motion config
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
        staggerChildren: 0.15
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col justify-between selection:bg-primary/20 selection:text-primary relative overflow-hidden">
      {/* Background glow and image */}
      <div className="absolute inset-0 z-0">
        <img
          src={CLIENT_INFO.images.heroBg}
          alt="Ryan Law LLC Background"
          className="w-full h-full object-cover opacity-10 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      </div>

      <SEO
        title="Ryan Law LLC | Criminal Defense & DUI Attorney | MD & DC"
        description="Aggressive criminal defense and DUI attorney James Ryan. Select your location to speak directly with legal counsel in Bel Air, Towson, or Washington DC."
        schemaType="LegalService"
      />

      {/* Top Branding Bar */}
      <header className="container py-8 relative z-10 flex justify-center border-b border-white/5">
        <div className="flex flex-col items-center text-center">
          <span className="font-serif text-3xl md:text-4xl font-bold tracking-wider text-primary">
            RYAN LAW
          </span>
          <span className="text-[10px] md:text-xs tracking-[0.4em] uppercase text-muted-foreground -mt-1 font-sans">
            LLC • CRIMINAL & DUI DEFENSE
          </span>
        </div>
      </header>

      {/* Main Location Selector */}
      <main className="container py-16 md:py-24 relative z-10 flex-1 flex flex-col justify-center items-center gap-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center max-w-2xl flex flex-col items-center gap-4"
        >
          <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
            SELECT AN OFFICE LOCATION
          </span>
          <h1 className="font-serif text-3xl md:text-5xl font-bold tracking-tight text-foreground leading-tight">
            Relentless Defense. <br className="sm:hidden" />
            Proven Trial Strategy.
          </h1>
          <div className="w-16 h-1 bg-primary mt-2" />
          <p className="font-sans text-sm md:text-base text-muted-foreground leading-relaxed font-light mt-2">
            Attorney James Ryan represents clients facing DUI, felony, and misdemeanor charges across Maryland and Washington DC. Please select your nearest office location to proceed to our local homepage and speak directly with your defense counsel.
          </p>
        </motion.div>

        {/* Location Grid */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mt-4"
        >
          {portalLocations.map((loc) => (
            <motion.div
              key={loc.key}
              variants={fadeInUp}
              onClick={() => {
                // Set sessionStorage preference for browsing subpages
                sessionStorage.setItem("ryan_law_location_pref", loc.key);
                setLocation(loc.path);
              }}
              className="bg-card border border-white/5 p-8 rounded-sm hover:border-primary/30 hover:bg-white/[0.01] transition-all duration-300 flex flex-col justify-between group cursor-pointer relative overflow-hidden shadow-2xl"
            >
              {/* Subtle top border glow */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="flex flex-col gap-5">
                <div className="p-3 bg-background border border-white/5 rounded-sm w-fit group-hover:border-primary/20 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {loc.name}
                  </h3>
                  <p className="text-xs text-primary font-sans font-semibold tracking-wider uppercase">
                    {loc.city}
                  </p>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground font-sans leading-relaxed font-light">
                  {loc.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-8 flex flex-col gap-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground font-sans">
                  <span className="font-medium text-foreground">{loc.phone}</span>
                  <span className="text-[11px] uppercase tracking-wider text-muted-foreground">Direct Line</span>
                </div>
                <span className="inline-flex items-center justify-center gap-2 w-full bg-white/5 group-hover:bg-primary group-hover:text-primary-foreground text-foreground font-sans font-bold text-xs py-3 rounded-sm transition-all duration-300">
                  <span>Enter Site</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </main>

      {/* Footer / Trust Bar */}
      <footer className="border-t border-white/5 py-8 bg-[#050505]/50 relative z-10">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground font-sans">
          <div className="flex gap-8">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-primary" />
              <span>100% Confidential Consultation</span>
            </div>
            <div className="flex items-center gap-2">
              <Scale className="w-4 h-4 text-primary" />
              <span>Attorney-Direct Advocacy</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex gap-6">
              <Link href="/disclaimer">
                <span className="hover:text-primary transition-colors cursor-pointer">Disclaimer</span>
              </Link>
              <Link href="/privacy-policy">
                <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
              </Link>
              <Link href="/terms-of-service">
                <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
              </Link>
            </div>
            <p>© {new Date().getFullYear()} Ryan Law LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
