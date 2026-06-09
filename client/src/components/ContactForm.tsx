import { CLIENT_INFO } from "@/lib/routes";
import { Mail, Phone, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const emailHref = `mailto:${CLIENT_INFO.email}?subject=${encodeURIComponent(
    "Free Case Evaluation Request"
  )}&body=${encodeURIComponent(
    "Hello James,\n\nI would like to request a free, confidential consultation regarding my legal matter.\n\nName:\nPhone:\nWhat I'm facing (DUI / Criminal / Traffic / Other):\nBrief summary:\n\nThank you."
  )}`;

  return (
    <div className="bg-card border border-white/5 rounded-sm p-6 md:p-10 shadow-2xl relative overflow-hidden text-center flex flex-col items-center">
      {/* Accent subtle background glow */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="p-4 bg-background border border-white/5 rounded-sm mb-5">
        <Mail className="w-7 h-7 text-primary" />
      </div>

      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-3">
        Request a Free Case Evaluation
      </h3>
      <p className="text-xs md:text-sm text-muted-foreground font-sans leading-relaxed max-w-md mb-7">
        Email James Ryan directly to start your free, confidential consultation. He
        personally reviews every message and responds promptly.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-md">
        <a
          href={emailHref}
          className="flex-1 flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold text-sm py-4 px-6 rounded-sm transition-all shadow-md active:scale-[0.98]"
        >
          <Mail className="w-4 h-4" />
          <span>Email James Ryan</span>
        </a>
        <a
          href={CLIENT_INFO.phoneRaw}
          className="flex-1 flex items-center justify-center gap-2 border border-white/15 hover:border-primary hover:bg-primary/5 text-foreground font-sans font-medium text-sm py-4 px-6 rounded-sm transition-all active:scale-[0.98]"
        >
          <Phone className="w-4 h-4 text-primary" />
          <span>{CLIENT_INFO.phone}</span>
        </a>
      </div>

      <p className="text-[11px] text-muted-foreground font-sans mt-4">
        Or email us at{" "}
        <a href={emailHref} className="text-primary hover:underline">
          {CLIENT_INFO.email}
        </a>
      </p>

      <div className="flex items-start gap-2 pt-6 mt-6 border-t border-white/5 text-[10px] text-muted-foreground leading-relaxed text-left max-w-md">
        <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        <p>
          Contacting Ryan Law LLC does not form a binding attorney-client relationship.
          Please avoid sending extremely sensitive details until formal representation is
          established.
        </p>
      </div>
    </div>
  );
}
