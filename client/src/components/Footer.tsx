import { Link } from "wouter";
import { CLIENT_INFO, CRIMINAL_DEFENSE_SUBPAGES, DUI_DEFENSE_SUBPAGES, LOCATION_PAGES } from "@/lib/routes";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useLocationSettings } from "@/contexts/LocationContext";

export default function Footer() {
  const { currentLocation } = useLocationSettings();

  return (
    <footer className="bg-[#050505] border-t border-white/5 pt-16 pb-8">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        {/* Brand Column */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <div className="flex flex-col cursor-pointer group">
              <span className="font-serif text-2xl font-bold tracking-wider text-primary">
                RYAN LAW
              </span>
              <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground -mt-1 font-sans">
                LLC • CRIMINAL & DUI DEFENSE
              </span>
            </div>
          </Link>
          <p className="text-xs text-muted-foreground leading-relaxed font-sans mt-2">
            Aggressive criminal defense and DUI attorney representing clients across Harford County, Cecil County, Baltimore County, and Washington DC. Protecting your rights and fighting for your future.
          </p>
        </div>

        {/* Practice Areas */}
        <div>
          <h4 className="font-serif text-base font-semibold text-primary mb-4 tracking-wide">
            Practice Areas
          </h4>
          <ul className="space-y-2 text-xs text-muted-foreground font-sans">
            <li>
              <Link href="/criminal-defense">
                <span className="hover:text-primary transition-colors cursor-pointer">Criminal Defense Hub</span>
              </Link>
            </li>
            {CRIMINAL_DEFENSE_SUBPAGES.slice(0, 4).map((p) => (
              <li key={p.slug}>
                <Link href={`/criminal-defense/${p.slug}`}>
                  <span className="hover:text-primary transition-colors cursor-pointer">{p.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Locations */}
        <div>
          <h4 className="font-serif text-base font-semibold text-primary mb-4 tracking-wide">
            Our Service Locations
          </h4>
          <ul className="space-y-2 text-xs text-muted-foreground font-sans">
            {LOCATION_PAGES.map((loc) => (
              <li key={loc.slug}>
                <Link href={`/${loc.slug}`}>
                  <span className="hover:text-primary transition-colors cursor-pointer">{loc.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4 text-xs text-muted-foreground font-sans">
          <h4 className="font-serif text-base font-semibold text-primary tracking-wide">
            Office Details
          </h4>
          <div className="flex items-start gap-3">
            <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Ryan Law LLC</p>
              <p>{currentLocation.address}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="w-4 h-4 text-primary shrink-0" />
            <a href={currentLocation.phoneRaw} className="hover:text-primary transition-colors">
              {currentLocation.phone}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Mail className="w-4 h-4 text-primary shrink-0" />
            <a href={`mailto:${CLIENT_INFO.email}`} className="hover:text-primary transition-colors">
              {CLIENT_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-primary shrink-0" />
            <span>{CLIENT_INFO.hours}</span>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="container border-t border-white/5 pt-8 text-[11px] text-muted-foreground font-sans flex flex-col gap-6">
        {/* Legal Disclaimer */}
        <div className="leading-relaxed border-b border-white/5 pb-6 text-justify">
          <p className="font-semibold text-foreground mb-1">Disclaimer & Attorney-Client Privilege:</p>
          <p>
            The legal information presented on this website, including criminal defense guidelines, DUI penalties, and Maryland courtroom procedures, is provided for general educational and informational purposes only. It does not constitute formal legal advice, and accessing this information does not establish an attorney-client relationship. Under Maryland and DC professional rules, a binding attorney-client relationship with Ryan Law LLC is only created upon the execution of a written, signed retainer agreement.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Ryan Law LLC. All rights reserved.</p>
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
            <Link href="/sitemap">
              <span className="hover:text-primary transition-colors cursor-pointer">Sitemap</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
