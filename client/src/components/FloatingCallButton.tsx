import { CLIENT_INFO } from "@/lib/routes";
import { Phone } from "lucide-react";

export default function FloatingCallButton() {
  return (
    <div className="sm:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-3rem)] max-w-sm">
      <a
        href={CLIENT_INFO.phoneRaw}
        className="flex items-center justify-center gap-3 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold text-base py-4 px-6 rounded-full shadow-2xl transition-all active:scale-[0.97] border border-primary/20 animate-bounce duration-1000"
      >
        <Phone className="w-5 h-5 fill-current" />
        <span>📞 Call James Ryan Now</span>
      </a>
    </div>
  );
}
