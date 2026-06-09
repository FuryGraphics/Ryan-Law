import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { CLIENT_INFO, PRACTICE_AREAS } from "@/lib/routes";
import { Menu, X, ChevronDown, Phone, MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/attorney" },
    {
      name: "Practice Areas",
      href: "/practice-areas",
      dropdown: PRACTICE_AREAS.map((area) => ({
        title: area.title,
        href: `/${area.slug}`,
        desc: area.tagline
      }))
    },
    { name: "Reviews", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Utility Bar */}
      <div
        className={`hidden md:block bg-primary text-primary-foreground overflow-hidden transition-all duration-300 ${
          isScrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container flex items-center justify-between py-2.5 text-xs font-sans">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" />
              {CLIENT_INFO.address}
            </span>
            <span className="hidden lg:flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {CLIENT_INFO.hours}
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${CLIENT_INFO.email}`}
              className="hidden lg:flex items-center gap-1.5 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-3.5 h-3.5" />
              {CLIENT_INFO.email}
            </a>
            <a
              href={CLIENT_INFO.phoneRaw}
              className="flex items-center gap-1.5 font-bold hover:opacity-80 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              {CLIENT_INFO.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-3 shadow-lg"
            : "bg-background/80 backdrop-blur-sm border-b border-white/5 py-4"
        }`}
      >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex flex-col cursor-pointer group">
            <span className="font-serif text-xl md:text-2xl font-bold tracking-wider text-primary transition-colors group-hover:text-primary/90">
              RYAN LAW
            </span>
            <span className="text-[9px] tracking-[0.3em] uppercase text-muted-foreground -mt-1 font-sans">
              LLC • CRIMINAL & DUI DEFENSE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative group"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <div className="flex items-center gap-1 py-2 text-sm font-medium tracking-wide text-foreground/80 hover:text-primary transition-colors cursor-pointer">
                  <span>{link.name}</span>
                  <ChevronDown className="w-4 h-4 opacity-70 group-hover:rotate-180 transition-transform duration-200" />
                </div>
              ) : (
                <Link href={link.href}>
                  <span
                    className={`py-2 text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                      location === link.href
                        ? "text-primary border-b border-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              )}

              {/* Practice Areas Dropdown */}
              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[340px]">
                  <div className="bg-card border border-white/10 p-3 rounded-md shadow-2xl flex flex-col animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.dropdown.map((section) => (
                      <Link key={section.title} href={section.href}>
                        <div className="px-3 py-2.5 rounded-sm hover:bg-white/5 transition-colors cursor-pointer group/item">
                          <h4 className="font-serif text-sm font-semibold text-foreground group-hover/item:text-primary transition-colors">
                            {section.title}
                          </h4>
                          <p className="text-[11px] text-muted-foreground font-sans mt-0.5">
                            {section.desc}
                          </p>
                        </div>
                      </Link>
                    ))}
                    <Link href="/practice-areas">
                      <span className="text-xs text-primary font-medium hover:underline cursor-pointer block px-3 pt-2 pb-1 border-t border-white/5 mt-1">
                        View All Practice Areas →
                      </span>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Call CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={CLIENT_INFO.phoneRaw}
            className="hidden xl:flex items-center gap-2 text-sm font-sans font-semibold text-foreground/90 hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4 text-primary" />
            <span>{CLIENT_INFO.phone}</span>
          </a>

          <Link href="/contact">
            <span className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold text-sm py-2.5 px-5 rounded-sm transition-all shadow-md active:scale-[0.97] cursor-pointer">
              Free Consultation
            </span>
          </Link>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[72px] bg-background/98 z-40 border-t border-white/5 animate-in fade-in duration-200 overflow-y-auto">
          <div className="container py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-2">
                {link.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === link.name ? null : link.name)
                      }
                      className="flex items-center justify-between py-2 text-lg font-medium text-foreground border-b border-white/5"
                    >
                      <span>{link.name}</span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-200 ${
                          activeDropdown === link.name ? "rotate-180 text-primary" : ""
                        }`}
                      />
                    </button>
                    {activeDropdown === link.name && (
                      <div className="pl-4 flex flex-col gap-1 py-2 animate-in slide-in-from-top-1 duration-200">
                        {link.dropdown.map((section) => (
                          <Link key={section.title} href={section.href}>
                            <div className="py-2 cursor-pointer">
                              <span className="font-serif text-sm font-semibold text-primary">
                                {section.title}
                              </span>
                              <p className="text-[11px] text-muted-foreground font-sans">
                                {section.desc}
                              </p>
                            </div>
                          </Link>
                        ))}
                        <Link href="/practice-areas">
                          <span className="text-xs text-primary font-medium py-2 cursor-pointer block">
                            View All Practice Areas →
                          </span>
                        </Link>
                      </div>
                    )}
                  </>
                ) : (
                  <Link href={link.href}>
                    <span
                      className={`py-2 text-lg font-medium border-b border-white/5 cursor-pointer block ${
                        location === link.href ? "text-primary" : "text-foreground"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                )}
              </div>
            ))}

            <a
              href={CLIENT_INFO.phoneRaw}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold text-base py-4 rounded-sm transition-all mt-4"
            >
              <Phone className="w-5 h-5" />
              <span>Call James Ryan Directly</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
