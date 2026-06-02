import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CORE_PAGES, CRIMINAL_DEFENSE_SUBPAGES, DUI_DEFENSE_SUBPAGES, LOCATION_PAGES, BLOG_POSTS, CLIENT_INFO } from "@/lib/routes";
import { ShieldAlert, Lock, ChevronRight, Phone } from "lucide-react";

export function Disclaimer() {
  const pageInfo = CORE_PAGES.disclaimer;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO title={pageInfo.seoTitle} description={pageInfo.metaDescription} schemaType="WebPage" breadcrumbs={[{ name: "Disclaimer", item: "/disclaimer" }]} />
      <Navigation />
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs items={[{ name: "Disclaimer", item: "/disclaimer" }]} />
          <div className="max-w-4xl mt-6">
            <ShieldAlert className="w-8 h-8 text-primary mb-2" />
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight">Legal Disclaimer</h1>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-background flex-grow">
        <div className="container max-w-3xl font-sans font-light text-sm md:text-base text-muted-foreground leading-relaxed space-y-6">
          <p><strong>No Attorney-Client Relationship:</strong> The information provided on this website is for general educational and informational purposes only. It is not intended to be, and should not be construed as, formal legal advice. Accessing, reading, or submitting information through this website, our contact forms, or direct email does not establish an attorney-client relationship between you and Ryan Law LLC or James Ryan.</p>
          <p>An attorney-client relationship is only established once we have conducted a thorough conflict-of-interest check, held a formal consultation, and both parties have executed a written legal representation agreement (Retainer Agreement) signed by attorney James Ryan.</p>
          <p><strong>Confidentiality Warning:</strong> Please do not submit extremely sensitive, confidential, or legally compromising information regarding your case via our online contact form, email, or voicemail. While we take extreme measures to safeguard our communication, transmission over the public internet is not entirely secure until formal representation is established.</p>
          <p><strong>Attorney Advertising:</strong> This website constitutes attorney advertising under the rules of professional conduct in Maryland and the District of Columbia. Prior results, case outcomes, or client testimonials featured on this site do not guarantee, warrant, or predict a similar outcome in your legal matter.</p>
        </div>
      </section>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export function PrivacyPolicy() {
  const pageInfo = CORE_PAGES.privacy;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO title={pageInfo.seoTitle} description={pageInfo.metaDescription} schemaType="WebPage" breadcrumbs={[{ name: "Privacy Policy", item: "/privacy-policy" }]} />
      <Navigation />
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs items={[{ name: "Privacy Policy", item: "/privacy-policy" }]} />
          <div className="max-w-4xl mt-6">
            <Lock className="w-8 h-8 text-primary mb-2" />
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight">Privacy Policy</h1>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-background flex-grow">
        <div className="container max-w-3xl font-sans font-light text-sm md:text-base text-muted-foreground leading-relaxed space-y-6">
          <p>At Ryan Law LLC, we are committed to protecting your privacy and safeguarding any personal information you share with us. This Privacy Policy outlines how we collect, use, and protect your data when you visit our website.</p>
          <h2>Information We Collect</h2>
          <p>We only collect personal information that you voluntarily provide to us, such as your name, phone number, email address, and general case descriptions submitted through our secure contact forms.</p>
          <h2>How We Use Your Information</h2>
          <p>Any information you submit is used solely to evaluate your legal situation and contact you to schedule a consultation. We do not sell, trade, rent, or lease your personal information to third parties under any circumstances. Your information is strictly private and confidential.</p>
          <h2>SMS & Text Message Communication</h2>
          <p>By providing your phone number, you consent to receive text messages or calls from Ryan Law LLC regarding your inquiry. You can opt-out of text communications at any time by replying "STOP".</p>
        </div>
      </section>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

export function SitemapPage() {
  const pageInfo = CORE_PAGES.sitemap;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO title={pageInfo.seoTitle} description={pageInfo.metaDescription} schemaType="WebPage" breadcrumbs={[{ name: "Sitemap", item: "/sitemap" }]} />
      <Navigation />
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs items={[{ name: "Sitemap", item: "/sitemap" }]} />
          <div className="max-w-4xl mt-6">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight">HTML Sitemap</h1>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-background flex-grow">
        <div className="container max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-12 font-sans">
          {/* Core Pages */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-lg font-bold text-primary pb-2 border-b border-white/5">Core Pages</h2>
            <ul className="space-y-2 text-xs text-muted-foreground">
              {Object.entries(CORE_PAGES).map(([key, page]) => (
                <li key={key}>
                  <Link href={page.path}>
                    <span className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                      <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                      <span>{page.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-lg font-bold text-primary pb-2 border-b border-white/5">Practice Areas</h2>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li>
                <Link href="/criminal-defense">
                  <span className="hover:text-primary transition-colors cursor-pointer font-bold flex items-center gap-1">
                    <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>Criminal Defense Hub</span>
                  </span>
                </Link>
              </li>
              {CRIMINAL_DEFENSE_SUBPAGES.map((sub) => (
                <li key={sub.slug} className="pl-4">
                  <Link href={`/criminal-defense/${sub.slug}`}>
                    <span className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                      <ChevronRight className="w-3 h-3 text-primary/50 shrink-0" />
                      <span>{sub.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5">
                <Link href="/dui-defense">
                  <span className="hover:text-primary transition-colors cursor-pointer font-bold flex items-center gap-1">
                    <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                    <span>DUI Defense Hub</span>
                  </span>
                </Link>
              </li>
              {DUI_DEFENSE_SUBPAGES.map((sub) => (
                <li key={sub.slug} className="pl-4">
                  <Link href={`/dui-defense/${sub.slug}`}>
                    <span className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                      <ChevronRight className="w-3 h-3 text-primary/50 shrink-0" />
                      <span>{sub.title}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations & Blog */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-lg font-bold text-primary pb-2 border-b border-white/5">Service Locations</h2>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {LOCATION_PAGES.map((loc) => (
                  <li key={loc.slug}>
                    <Link href={`/${loc.slug}`}>
                      <span className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                        <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span>Attorney in {loc.name}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-lg font-bold text-primary pb-2 border-b border-white/5">Legal Guides & Blog</h2>
              <ul className="space-y-2 text-xs text-muted-foreground">
                {BLOG_POSTS.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/blog/${post.slug}`}>
                      <span className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                        <ChevronRight className="w-3.5 h-3.5 text-primary shrink-0" />
                        <span className="line-clamp-1">{post.title}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}
