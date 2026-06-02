import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CLIENT_INFO, CORE_PAGES } from "@/lib/routes";
import { MapPin, Phone, Mail, Clock, ShieldCheck } from "lucide-react";
import { MapView } from "@/components/Map";

export default function Contact() {
  const pageInfo = CORE_PAGES.contact;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={pageInfo.seoTitle}
        description={pageInfo.metaDescription}
        schemaType="LegalService"
        breadcrumbs={[{ name: "Contact", item: "/contact" }]}
      />

      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs items={[{ name: "Contact", item: "/contact" }]} />
          <div className="max-w-4xl mt-6">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              GET IN TOUCH
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight mt-2">
              Free Consultation — Criminal Defense Bel Air MD
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4 font-sans font-light max-w-2xl">
              Do not wait to secure your defense. Speak directly with attorney James Ryan today. All consultation details are strictly confidential.
            </p>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>

      {/* Contact Details & Form */}
      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Details Column */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                Office Information
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light">
                James Ryan represents clients across Maryland and DC. Our primary office is conveniently located in Bel Air, Maryland. Schedule an appointment or call our direct helpline.
              </p>
              <div className="w-12 h-1 bg-primary" />
            </div>

            <div className="flex flex-col gap-4 font-sans text-sm text-muted-foreground">
              <div className="flex items-start gap-3 bg-card p-5 border border-white/5 rounded-sm">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif text-base font-semibold text-foreground mb-1">Office Address</p>
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
                <Mail className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif text-base font-semibold text-foreground mb-1">Email Address</p>
                  <a href={`mailto:${CLIENT_INFO.email}`} className="text-xs hover:text-primary transition-colors">
                    {CLIENT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 bg-card p-5 border border-white/5 rounded-sm">
                <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <p className="font-serif text-base font-semibold text-foreground mb-1">Business Hours</p>
                  <p className="text-xs leading-relaxed">{CLIENT_INFO.hours}</p>
                </div>
              </div>
            </div>

            {/* Note on Google Business Profiles */}
            <div className="bg-primary/5 border border-primary/10 p-6 rounded-sm flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <p className="text-[11px] text-muted-foreground font-sans leading-relaxed">
                <strong>Local SEO & Map Note:</strong> Ryan Law LLC operates multiple Google Business Profiles to support clients across Harford/Cecil County, Baltimore County, and Washington DC. Our primary local listing and physical office is based in Bel Air, MD.
              </p>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Google Maps Embed Section */}
      <section className="h-[450px] w-full border-t border-white/5 relative bg-card">
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
      </section>

      <Footer />
      <FloatingCallButton />
    </div>
  );
}
