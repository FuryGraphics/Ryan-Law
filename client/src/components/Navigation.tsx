import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { CLIENT_INFO, CRIMINAL_DEFENSE_SUBPAGES, DUI_DEFENSE_SUBPAGES } from "@/lib/routes";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { useLocationSettings } from "@/contexts/LocationContext";

export default function Navigation() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { currentLocation } = useLocationSettings();

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
      dropdown: [
        {
          title: "Criminal Defense",
          href: "/criminal-defense",
          items: CRIMINAL_DEFENSE_SUBPAGES.slice(0, 6).map(p => ({
            name: p.title,
            href: `/criminal-defense/${p.slug}`
          }))
        },
        {
          title: "DUI Defense",
          href: "/dui-defense",
          items: DUI_DEFENSE_SUBPAGES.slice(0, 6).map(p => ({
            name: p.title,
            href: `/dui-defense/${p.slug}`
          }))
        }
      ]
    },
    { name: "Reviews", href: "/testimonials" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact" }
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md py-4 border-white/5 shadow-lg"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <div className="flex flex-col cursor-pointer group shrink-0">
            <span className="font-serif text-lg xs:text-xl md:text-2xl font-bold tracking-wider text-primary group-hover:text-primary/90 transition-colors whitespace-nowrap">
              RYAN LAW
            </span>
            <span className="text-[8px] xs:text-[9px] tracking-[0.25em] uppercase text-muted-foreground -mt-1 font-sans whitespace-nowrap">
              LLC • CRIMINAL & DUI DEFENSE
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
              onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
            >
              {link.dropdown ? (
                <div className="flex items-center gap-1 py-2 text-sm font-sans font-medium text-foreground/80 hover:text-primary transition-colors cursor-pointer">
                  <span>{link.name}</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />
                </div>
              ) : (
                <Link href={link.href}>
                  <span
                    className={`py-2 text-sm font-sans font-medium transition-colors cursor-pointer ${
                      location === link.href
                        ? "text-primary border-b border-primary"
                        : "text-foreground/80 hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </span>
                </Link>
              )}

              {/* Dropdown Menu */}
              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-card border border-white/5 p-6 rounded-sm shadow-2xl mt-2 grid grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-2 duration-200">
                  {link.dropdown.map((section) => (
                    <div key={section.title} className="flex flex-col gap-4">
                      <Link href={section.href}>
                        <span className="font-serif text-sm font-bold text-primary hover:underline cursor-pointer">
                          {section.title}
                        </span>
                      </Link>
                      <ul className="flex flex-col gap-2.5">
                        {section.items.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href}>
                              <span className="font-sans text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                                {item.name}
                              </span>
                            </Link>
                          </li>
                        ))}
                        <li>
                          <Link href={section.href}>
                            <span className="font-sans text-xs text-primary hover:underline cursor-pointer">
                              View All Areas →
                            </span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Call CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-4 shrink-0">
          <a
            href={currentLocation.phoneRaw}
            className="hidden xs:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold text-xs sm:text-sm py-2 px-3 sm:px-5 rounded-sm transition-all shadow-md active:scale-[0.97] whitespace-nowrap"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>Call — {currentLocation.phone}</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground/80 hover:text-primary transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[73px] bg-background/98 z-40 p-6 border-t border-white/5 animate-in fade-in duration-200 overflow-y-auto">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <div key={link.name} className="flex flex-col gap-2">
                {link.dropdown ? (
                  <div className="flex flex-col gap-2">
                    <span className="py-2 text-lg font-medium text-foreground/60 border-b border-white/5">
                      {link.name}
                    </span>
                    <div className="pl-4 flex flex-col gap-4 mt-2">
                      {link.dropdown.map((section) => (
                        <div key={section.title} className="flex flex-col gap-2">
                          <Link href={section.href}>
                            <span className="font-serif text-sm font-bold text-primary">
                              {section.title}
                            </span>
                          </Link>
                          <div className="grid grid-cols-2 gap-2 pl-2">
                            {section.items.map((item) => (
                              <Link key={item.href} href={item.href}>
                                <span className="font-sans text-xs text-muted-foreground py-1 block">
                                  {item.name}
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
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
              href={currentLocation.phoneRaw}
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
