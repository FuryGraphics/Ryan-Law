import { useEffect } from "react";
import { Phone, ShieldCheck, Clock } from "lucide-react";
import { useLocationSettings } from "@/contexts/LocationContext";

const FORM_ID = "vTiqIYJBiCGmWYcENUrI";
const FORM_EMBED_SCRIPT = "https://services.caseclimb.com/js/form_embed.js";

export default function ContactForm() {
  const { currentLocation } = useLocationSettings();

  // Load the CaseClimb embed script once; it handles iframe auto-resizing.
  useEffect(() => {
    if (document.querySelector(`script[src="${FORM_EMBED_SCRIPT}"]`)) return;
    const script = document.createElement("script");
    script.src = FORM_EMBED_SCRIPT;
    script.async = true;
    document.body.appendChild(script);
  }, []);

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

      <div className="w-full relative mb-8">
        <iframe
          src={`https://services.caseclimb.com/widget/form/${FORM_ID}`}
          style={{ width: "100%", height: "560px", border: "none", borderRadius: "10px" }}
          id={`inline-${FORM_ID}`}
          data-layout="{'id':'INLINE'}"
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Website Form Ryan Law LLC "
          data-height="560"
          data-layout-iframe-id={`inline-${FORM_ID}`}
          data-form-id={FORM_ID}
          title="Website Form Ryan Law LLC "
        />
      </div>

      <a
        href={currentLocation.phoneRaw}
        className="w-full max-w-md inline-flex items-center justify-center gap-2.5 bg-transparent hover:bg-white/5 text-foreground border border-white/10 font-sans font-bold text-sm py-4 px-8 rounded-sm transition-all active:scale-[0.98] mb-8"
      >
        <Phone className="w-4 h-4" />
        <span>Call: {currentLocation.phone}</span>
      </a>

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
