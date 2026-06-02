import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { LOCATION_PAGES, CLIENT_INFO, CRIMINAL_DEFENSE_SUBPAGES, DUI_DEFENSE_SUBPAGES } from "@/lib/routes";
import { MapPin, Phone, Clock, Scale, Shield, Gavel, CheckCircle, ChevronRight } from "lucide-react";
import { MapView } from "@/components/Map";

interface LocationProps {
  slug: string;
}

export default function Location({ slug }: LocationProps) {
  const currentLocation = LOCATION_PAGES.find((l) => l.slug === slug) || LOCATION_PAGES[0];

  const h1 = `Criminal Defense & DUI Attorney in ${currentLocation.name}`;
  const seoTitle = `${currentLocation.title} | Ryan Law LLC`;
  const metaDescription = `Arrested or facing criminal or DUI charges in ${currentLocation.name}? James Ryan of Ryan Law LLC offers elite, aggressive legal defense. Call (917) 576-4324 today.`;

  const intro = `If you have been arrested, issued a citation, or are under investigation in ${currentLocation.name}, you need an aggressive, local defense attorney who understands the specific court system and procedures. James Ryan of Ryan Law LLC represents clients facing criminal and DUI charges throughout ${currentLocation.name}, advocating relentlessly for dismissals, reduced charges, and protection of constitutional rights.`;

  const localPracticeAreas = [
    { title: "Criminal Defense", desc: "Defending felony and misdemeanor charges in court.", href: "/criminal-defense", icon: Gavel },
    { title: "DUI & DWI Defense", desc: "Protecting your driver's license and fighting charges.", href: "/dui-defense", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={seoTitle}
        description={metaDescription}
        schemaType="LocalBusiness"
        schemaData={{
          locationName: currentLocation.name,
          locality: currentLocation.name.includes("County") ? "" : currentLocation.name.split(",")[0],
          region: "MD",
          path: `/${slug}`
        }}
        breadcrumbs={[{ name: currentLocation.name, item: `/${slug}` }]}
      />

      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs items={[{ name: currentLocation.name, item: `/${slug}` }]} />
          <div className="max-w-4xl mt-6">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              LOCAL LEGAL REPRESENTATION
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight mt-2">
              {h1}
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4 font-sans font-light max-w-2xl">
              {intro}
            </p>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>

      {/* Address & Google Maps Section */}
      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Local Details Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
              Contact Our Office
            </h2>
            <div className="w-12 h-1 bg-primary" />
            
            <div className="flex flex-col gap-4 font-sans text-sm text-muted-foreground">
              <div className="flex items-start gap-3 bg-card p-5 border border-white/5 rounded-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif text-base font-semibold text-foreground mb-1">Primary Office Location</p>
                  <p className="text-xs leading-relaxed">{CLIENT_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-card p-5 border border-white/5 rounded-sm">
                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif text-base font-semibold text-foreground mb-1">Direct Helpline</p>
                  <a href={CLIENT_INFO.phoneRaw} className="text-xs hover:text-primary transition-colors">
                    {CLIENT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-card p-5 border border-white/5 rounded-sm">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif text-base font-semibold text-foreground mb-1">Office Hours</p>
                  <p className="text-xs leading-relaxed">{CLIENT_INFO.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-7 h-[400px] w-full border border-white/5 rounded-sm overflow-hidden relative bg-card shadow-2xl">
            <MapView
              onMapReady={(map: any) => {
                const geocoder = new google.maps.Geocoder();
                geocoder.geocode({ address: CLIENT_INFO.address }, (results, status) => {
                  if (status === "OK" && results && results[0]) {
                    const location = results[0].geometry.location;
                    map.setCenter(location);
                    map.setZoom(15);
                    new google.maps.Marker({
                      position: location,
                      map: map,
                      title: CLIENT_INFO.name,
                    });
                  }
                });
              }}
            />
          </div>
        </div>
      </section>

      {/* Local Practice Areas Served */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container flex flex-col gap-12">
          <div className="text-center flex flex-col items-center gap-3">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              LEGAL SOLUTIONS IN {currentLocation.name.toUpperCase()}
            </span>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              Defense Services We Provide
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto w-full">
            {localPracticeAreas.map((area, idx) => (
              <div key={idx} className="bg-card border border-white/5 p-8 rounded-sm hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col gap-4">
                  <div className="p-4 bg-background border border-white/5 rounded-sm w-fit group-hover:border-primary/30 transition-colors">
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
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline cursor-pointer">
                      <span>Explore Services</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Courthouse Info */}
      <section className="py-20 bg-background border-t border-white/5">
        <div className="container max-w-4xl text-center flex flex-col items-center gap-6">
          <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
            Local Court & Jurisdiction Information
          </h2>
          <div className="w-12 h-1 bg-primary" />
          <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light max-w-2xl">
            Cases originating in <strong>{currentLocation.name}</strong> are typically processed and litigated at the:
          </p>
          <div className="bg-card border border-white/5 p-6 rounded-sm w-full max-w-md font-serif text-base font-semibold text-primary shadow-xl">
            {currentLocation.courthouse}
          </div>
          <p className="text-xs text-muted-foreground leading-relaxed font-sans font-light max-w-2xl">
            James Ryan represents clients personally at this jurisdiction. Having an attorney who knows local courthouse procedures, judges, and clerks is vital to orchestrating a strategic, flawless defense plan.
          </p>
        </div>
      </section>

      {/* Free Consultation Section */}
      <section className="py-20 bg-[#050505] border-t border-white/5">
        <div className="container max-w-4xl">
          <ContactForm />
        </div>
      </section>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}
