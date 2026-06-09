import { Button } from "@/components/ui/button";
import { Mail, Phone, ShieldCheck, Clock } from "lucide-react";
import { CLIENT_INFO } from "@/lib/routes";

export default function ContactForm() {
  return (
    <div className="bg-card border border-white/5 rounded-sm p-8 md:p-12 shadow-2xl relative overflow-hidden text-center flex flex-col items-center max-w-3xl mx-auto">
      {/* Accent subtle background glow */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="mb-8 max-w-2xl">
        <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
          FREE CASE EVALUATION
        </span>
        <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mt-2 mb-4">
          Speak Directly with Attorney James Ryan
        </h3>
        <p className="text-xs md:text-sm text-muted-foreground font-sans leading-relaxed">
          Do not leave your freedom and future to chance. Whether you are facing a DUI, drug charges, assault, or any misdemeanor/felony in Maryland or DC, we are here to fight for you. Contact us immediately for a fully confidential consultation.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md justify-center mb-8">
        <a
          href={`mailto:${CLIENT_INFO.email}?subject=Case Evaluation Request - Ryan Law LLC`}
          className="flex-1 inline-flex items-center justify-center gap-2.5 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold text-sm py-4 px-8 rounded-sm transition-all active:scale-[0.98] shadow-lg shadow-primary/10"
        >
          <Mail className="w-4 h-4 fill-current" />
          <span>Email James Ryan</span>
        </a>

        <a
          href={CLIENT_INFO.phoneRaw}
          className="flex-1 inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/5 text-foreground border border-white/10 font-sans font-bold text-sm py-4 px-8 rounded-sm transition-all active:scale-[0.98]"
        >
          <Phone className="w-4 h-4" />
          <span>Call: {CLIENT_INFO.phone}</span>
        </a>
      </div>

      {/* Meta Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full border-t border-white/5 pt-8 text-left max-w-xl font-sans text-xs text-muted-foreground">
        <div className="flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground">Rapid Response Hours</p>
            <p className="text-[11px]">Mon–Fri 9am–6pm (Emails monitored 24/7)</p>
          </div>
        </div>
        <div className="flex items-start gap-2.5">
          <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-foreground">Confidentiality Assured</p>
            <p className="text-[11px]">All initial communications are fully protected under attorney-client privilege.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
