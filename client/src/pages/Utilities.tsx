import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { CORE_PAGES, CRIMINAL_DEFENSE_SUBPAGES, DUI_DEFENSE_SUBPAGES, LOCATION_PAGES, BLOG_POSTS, CLIENT_INFO } from "@/lib/routes";
import { ShieldAlert, Lock, ChevronRight, Phone, FileText, Mail, MapPin, Globe } from "lucide-react";

const LEGAL_EFFECTIVE_DATE = "July 28, 2026";

// Contact details registered for the 10DLC/A2P SMS campaign. These must match the
// carrier registration exactly, so they are kept separate from the site-wide
// CLIENT_INFO phone number used for click-to-call CTAs.
const SMS_CONTACT = {
  phone: "(917) 576-4324",
  phoneRaw: "tel:+19175764324",
  email: CLIENT_INFO.email,
};

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
          <p className="text-xs text-muted-foreground/70"><strong className="text-foreground/80">Effective Date:</strong> {LEGAL_EFFECTIVE_DATE}</p>

          <p>Ryan Law LLC ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy describes how we collect, use, and protect your information when you visit our website ({CLIENT_INFO.domain.replace("www.", "")}), communicate with us, or use our services.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Mailing address</li>
            <li>Information related to your legal matter</li>
            <li>Website usage data (IP address, browser type, pages visited)</li>
          </ul>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">How We Use Your Information</h2>
          <p>We use your information to:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Provide legal services</li>
            <li>Respond to inquiries</li>
            <li>Send appointment reminders and case-related updates</li>
            <li>Communicate important information regarding your legal matter</li>
            <li>Comply with legal and ethical obligations</li>
          </ul>
          <p>We do not sell your personal information.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">SMS/Text Messaging Communications</h2>
          <p>Ryan Law LLC sends SMS text messages regarding scheduling, appointment reminders, case updates, requests for information, billing notifications, and other communications related to your legal matter.</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Message frequency varies.</li>
            <li>Message and data rates may apply.</li>
            <li>Reply STOP to any message to opt out.</li>
            <li>Reply HELP for assistance.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
          </ul>
          <p>Consent to receive SMS messages is not a condition of purchase or legal representation.</p>
          <p>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties, excluding aggregators and providers of the Text Message services.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Data Sharing</h2>
          <p>We may share your information with trusted service providers who assist in operating our business (such as secure hosting or case management systems). These providers are required to maintain confidentiality.</p>
          <p>We may also disclose information when required by law or court order.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Data Security</h2>
          <p>We use reasonable administrative, technical, and physical safeguards to protect the information we collect. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Your Choices</h2>
          <p>You may opt out of SMS communications at any time by replying STOP. You may request access to, correction of, or deletion of your personal information by contacting us using the information below.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Children's Privacy</h2>
          <p>Our services are not directed to individuals under 18, and we do not knowingly collect personal information from minors.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. The updated version will be indicated by a revised "Effective Date" at the top of this page.</p>

          <LegalContactBlock />
        </div>
      </section>
      <Footer />
      <FloatingCallButton />
    </div>
  );
}

function LegalContactBlock() {
  return (
    <div className="pt-6 mt-6 border-t border-white/10">
      <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground mb-4">Contact Us</h2>
      <div className="bg-card border border-white/5 rounded-sm p-6 space-y-3 text-sm">
        <p className="font-serif text-base font-semibold text-foreground">{CLIENT_INFO.name}</p>
        <p className="flex items-start gap-3"><MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" /><span>{CLIENT_INFO.address}</span></p>
        <p className="flex items-center gap-3"><Phone className="w-4 h-4 text-primary shrink-0" /><a href={SMS_CONTACT.phoneRaw} className="hover:text-primary transition-colors">{SMS_CONTACT.phone}</a></p>
        <p className="flex items-center gap-3"><Mail className="w-4 h-4 text-primary shrink-0" /><a href={`mailto:${SMS_CONTACT.email}`} className="hover:text-primary transition-colors">{SMS_CONTACT.email}</a></p>
        <p className="flex items-center gap-3"><Globe className="w-4 h-4 text-primary shrink-0" /><span>{CLIENT_INFO.domain}</span></p>
      </div>
    </div>
  );
}

export function TermsOfService() {
  const pageInfo = CORE_PAGES.terms;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO title={pageInfo.seoTitle} description={pageInfo.metaDescription} schemaType="WebPage" breadcrumbs={[{ name: "Terms of Service", item: "/terms-of-service" }]} />
      <Navigation />
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs items={[{ name: "Terms of Service", item: "/terms-of-service" }]} />
          <div className="max-w-4xl mt-6">
            <FileText className="w-8 h-8 text-primary mb-2" />
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight">Terms of Service</h1>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>
      <section className="py-20 bg-background flex-grow">
        <div className="container max-w-3xl font-sans font-light text-sm md:text-base text-muted-foreground leading-relaxed space-y-6">
          <p className="text-xs text-muted-foreground/70"><strong className="text-foreground/80">Effective Date:</strong> {LEGAL_EFFECTIVE_DATE}</p>

          <p>Welcome to {CLIENT_INFO.domain.replace("www.", "")} (the "Site"), operated by Ryan Law LLC ("Firm," "we," "our," or "us"). By accessing or using this Site, or by opting in to receive communications from us, you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use this Site.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Use of the Site</h2>
          <p>This Site is provided for informational purposes only. Use of this Site, or communication with the Firm through this Site, does not create an attorney-client relationship. An attorney-client relationship is only formed upon execution of a written engagement agreement with Ryan Law LLC.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">No Legal Advice</h2>
          <p>The content on this Site is general information and should not be construed as legal advice on any specific matter. You should consult with a licensed attorney regarding your individual situation before taking any action.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Intellectual Property</h2>
          <p>All content on this Site, including text, graphics, logos, and images, is the property of Ryan Law LLC unless otherwise noted, and may not be reproduced without written permission.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">SMS/Text Messaging Terms</h2>
          <p>By opting in to receive text messages from Ryan Law LLC, you agree to the following:</p>
          <ul className="list-disc pl-6 space-y-1">
            <li>You are voluntarily providing your mobile phone number and consenting to receive text messages from Ryan Law LLC, including but not limited to appointment reminders, case updates, scheduling communications, and customer service responses.</li>
            <li>Message frequency may vary.</li>
            <li>Message and data rates may apply, depending on your mobile carrier and plan.</li>
            <li>You may opt out of text messages at any time by replying STOP to any message. You may receive one final message confirming your opt-out.</li>
            <li>For help, reply HELP or contact us directly at {SMS_CONTACT.email} or {SMS_CONTACT.phone}.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
            <li>Consent to receive SMS messages is not a condition of receiving legal services from Ryan Law LLC.</li>
            <li>Not all mobile carriers are supported. Supported carriers are not liable for delayed or undelivered messages.</li>
          </ul>
          <p>No mobile information will be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties, excluding aggregators and providers of the Text Message services.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Privacy Policy</h2>
          <p>Your information is handled in accordance with our <Link href="/privacy-policy"><span className="text-primary hover:underline cursor-pointer">Privacy Policy</span></Link>.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Disclaimer of Warranties</h2>
          <p>This Site is provided "as is" without warranties of any kind, either express or implied, including but not limited to accuracy, completeness, or fitness for a particular purpose.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Limitation of Liability</h2>
          <p>To the fullest extent permitted by law, Ryan Law LLC shall not be liable for any direct, indirect, incidental, or consequential damages arising from your use of this Site or reliance on its content.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Governing Law</h2>
          <p>These Terms are governed by the laws of the State of Maryland, without regard to its conflict of law principles.</p>

          <h2 className="font-serif text-xl md:text-2xl font-bold text-foreground pt-4">Changes to These Terms</h2>
          <p>We may revise these Terms at any time. Continued use of the Site after changes are posted constitutes acceptance of the revised Terms.</p>

          <LegalContactBlock />
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
