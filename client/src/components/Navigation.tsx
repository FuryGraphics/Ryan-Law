import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { CLIENT_INFO, CRIMINAL_DEFENSE_SUBPAGES, DUI_DEFENSE_SUBPAGES } from "@/lib/routes";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg"
          : "bg-transparent py-6"
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

              {/* Mega Dropdown Menu */}
              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-4 w-[600px]">
                  <div className="bg-card border border-white/10 p-6 rounded-md shadow-2xl grid grid-cols-2 gap-8 animate-in fade-in slide-in-from-top-2 duration-200">
                    {link.dropdown.map((section) => (
                      <div key={section.title}>
                        <Link href={section.href}>
                          <h4 className="font-serif text-base font-semibold text-primary mb-3 hover:underline cursor-pointer">
                            {section.title}
                          </h4>
                        </Link>
                        <ul className="space-y-2">
                          {section.items.map((item) => (
                            <li key={item.name}>
                              <Link href={item.href}>
                                <span className="text-xs text-muted-foreground hover:text-primary transition-colors block py-1 cursor-pointer">
                                  {item.name}
                                </span>
                              </Link>
                            </li>
                          ))}
                          <li>
                            <Link href={section.href}>
                              <span className="text-xs text-primary font-medium hover:underline cursor-pointer block pt-2">
                                View All Services →
                              </span>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Call CTA Button & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={CLIENT_INFO.phoneRaw}
            className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-semibold text-sm py-2.5 px-5 rounded-sm transition-all shadow-md active:scale-[0.97]"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now — {CLIENT_INFO.phone}</span>
          </a>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
                      <div className="pl-4 flex flex-col gap-4 py-2 animate-in slide-in-from-top-1 duration-200">
                        {link.dropdown.map((section) => (
                          <div key={section.title} className="flex flex-col gap-2">
                            <Link href={section.href}>
                              <span className="font-serif text-sm font-semibold text-primary cursor-pointer">
                                {section.title}
                              </span>
                            </Link>
                            <div className="grid grid-cols-2 gap-2 pl-2">
                              {section.items.map((item) => (
                                <Link key={item.name} href={item.href}>
                                  <span className="text-xs text-muted-foreground py-1 cursor-pointer">
                                    {item.name}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
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
