import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS, CLIENT_INFO } from "@/lib/routes";
import { Calendar, ChevronRight, Phone, ArrowLeft } from "lucide-react";

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const post = BLOG_POSTS.find((p) => p.slug === slug) || BLOG_POSTS[0];

  const seoTitle = `${post.title} | Ryan Law LLC Blog`;
  const metaDescription = `${post.excerpt.slice(0, 150)}... James Ryan of Ryan Law LLC explains Maryland legal procedures.`;

  // Dynamic Content Generation based on Slug
  const renderArticleContent = () => {
    switch (post.slug) {
      case "what-to-do-if-you-are-arrested-in-maryland":
        return (
          <>
            <p>
              Being arrested is one of the most stressful experiences a person can go through. In the heat of the moment, fear and adrenaline can cause you to make critical mistakes that prosecutors will later use to build their case. Knowing your constitutional rights and how to assert them is your absolute best defense.
            </p>
            <h2>1. Remain Silent — Exercise Your Fifth Amendment Right</h2>
            <p>
              The single most important rule is also the most frequently ignored: <strong>you have the right to remain silent</strong>. Under the Fifth Amendment, you are not obligated to answer any questions about what happened, where you were, or what you were doing.
            </p>
            <p>
              Politely but firmly tell the officers: <em>"I am exercising my right to remain silent, and I will not answer any questions without an attorney present."</em> Once you state this, police must stop questioning you. Do not try to explain your side, argue, or talk your way out of the arrest.
            </p>
            <h2>2. Do Not Consent to Any Searches</h2>
            <p>
              If officers ask to search your pockets, your vehicle, or your home, you should clearly state: <em>"I do not consent to any searches."</em> Even if police proceed to search anyway, your explicit refusal ensures that your defense attorney can challenge the search's legality in court. If police search without consent and without a valid warrant, any evidence found may be suppressed and thrown out of your case.
            </p>
            <h2>3. Do Not Resist Arrest</h2>
            <p>
              Even if you believe the arrest is entirely unlawful, <strong>never physically resist, run, or argue with the officers</strong>. Doing so can result in additional, severe charges like resisting arrest or assaulting a law enforcement officer. Comply with physical directives, but remain silent.
            </p>
            <h2>4. Request Your Attorney Immediately</h2>
            <p>
              You have the right to speak with a lawyer immediately. As soon as you are permitted to make a phone call, contact Ryan Law LLC at <strong>(917) 576-4324</strong>. Do not discuss details of your case over the jail phone, as these calls are recorded and routinely monitored by prosecutors.
            </p>
          </>
        );
      case "first-dui-in-maryland-penalties-and-how-to-fight-it":
        return (
          <>
            <p>
              A first-time DUI (Driving Under the Influence) or DWI (Driving While Impaired) arrest in Maryland can be terrifying. Many people assume that because they blew over the limit, they have no choice but to plead guilty. This is a dangerous misconception. DUI cases are highly technical, and numerous defense strategies can be leveraged.
            </p>
            <h2>Understanding the Charges: DUI vs. DWI</h2>
            <p>
              In Maryland, there is a legal distinction between DUI and DWI:
            </p>
            <ul>
              <li><strong>DUI (Driving Under the Influence):</strong> Typically charged if your Blood Alcohol Concentration (BAC) is .08% or higher. It carries a maximum penalty of 1 year in jail, up to $1,000 in fines, and 12 points on your license for a first offense.</li>
              <li><strong>DWI (Driving While Impaired):</strong> A lesser charge, often brought if your BAC is between .07% and .08%, or if police allege you are impaired by drugs or alcohol regardless of BAC. It carries up to 60 days in jail, $500 in fines, and 8 points.</li>
            </ul>
            <h2>Administrative Consequences: The MVA Hearing</h2>
            <p>
              Separate from your court date, you face a potential license suspension from the Motor Vehicle Administration (MVA). If you blew .08% or higher, or refused the test, you must request an administrative hearing <strong>within 30 days</strong> of your arrest to prevent automatic suspension. James Ryan can represent you at this hearing to safeguard your driving privileges.
            </p>
            <h2>How We Fight a Maryland DUI</h2>
            <p>
              DUI arrests are not bulletproof. We analyze the entire timeline to identify errors:
            </p>
            <ul>
              <li><strong>The Traffic Stop:</strong> Did police have reasonable suspicion to pull you over? If the stop was illegal, all subsequent evidence is thrown out.</li>
              <li><strong>Field Sobriety Tests:</strong> Were the tests administered in strict accordance with National Highway Traffic Safety Administration (NHTSA) standards? Bad weather, uneven pavement, or medical conditions can invalidate results.</li>
              <li><strong>The Breathalyzer:</strong> Was the breath test machine calibrated correctly? Did the officer observe you continuously for 20 minutes prior to the test?</li>
            </ul>
          </>
        );
      case "can-you-refuse-a-breathalyzer-in-maryland":
        return (
          <>
            <p>
              When you are pulled over on suspicion of driving under the influence in Maryland, officers will likely ask you to blow into a breathalyzer. Most drivers do not realize that there are actually two completely different breath tests, and the rules regarding refusal are very different for each.
            </p>
            <h2>1. The Roadside Preliminary Breath Test (PBT)</h2>
            <p>
              This is a small, handheld device that officers use on the side of the road. It is designed to help officers determine if there is probable cause to arrest you.
            </p>
            <p>
              <strong>You have the absolute right to refuse this roadside test</strong>, and there are no penalties or license suspensions for doing so. In fact, the results of a PBT are generally not even admissible in court. It is highly recommended that you politely decline the roadside PBT.
            </p>
            <h2>2. The Station-House Breath Test (The Intoximeter)</h2>
            <p>
              If you are arrested and taken to the police station, you will be asked to blow into a large, desktop breathalyzer machine. Under Maryland's <strong>"Implied Consent"</strong> law, driving on Maryland roads means you have agreed to submit to this test if arrested for DUI.
            </p>
            <p>
              While you can physically refuse to blow, doing so carries immediate, severe administrative penalties:
            </p>
            <ul>
              <li><strong>First Refusal:</strong> Automatic 270-day suspension of your Maryland driver's license, or mandatory participation in the Ignition Interlock System for 1 year.</li>
              <li><strong>In Court:</strong> Prosecutors can argue to the jury that your refusal is evidence of your "consciousness of guilt."</li>
            </ul>
            <h2>Which Choice Is Right?</h2>
            <p>
              Every case is unique. While refusing the station test prevents the state from getting exact scientific evidence of your BAC, it guarantees a severe MVA license penalty. If you are facing this situation, you must contact an attorney immediately to analyze how to navigate your MVA hearing and courtroom defense.
            </p>
          </>
        );
      case "how-to-get-a-criminal-record-expunged-in-maryland":
        return (
          <>
            <p>
              A criminal record can follow you for the rest of your life, making it difficult to secure employment, obtain housing, qualify for loans, or get admitted to college. Fortunately, Maryland has some of the most progressive expungement laws in the nation, allowing many individuals to completely erase their records.
            </p>
            <h2>What Is Expungement?</h2>
            <p>
              Expungement is the legal process of removing files and records from public inspection. Once a record is expunged, it is destroyed or moved to a secure, private archive. Legally, you can state under oath that you have never been arrested or charged with that specific crime.
            </p>
            <h2>What Records Are Eligible for Expungement?</h2>
            <p>
              Under Maryland law, you can generally expunge records if:
            </p>
            <ul>
              <li>The charges were dismissed (Nolle Prosequi).</li>
              <li>You were found Not Guilty (Acquittal).</li>
              <li>The case was indefinitely postponed (Stet).</li>
              <li>You received a Probation Before Judgment (PBJ), after waiting 3 years.</li>
              <li>You were convicted of certain non-violent misdemeanors, after a designated waiting period (typically 10 to 15 years depending on the charge).</li>
            </ul>
            <h2>What Cannot Be Expunged?</h2>
            <p>
              Generally, serious felony convictions, violent crimes, and DUI convictions are not eligible for expungement in Maryland. However, if your DUI resulted in a Probation Before Judgment (PBJ), it may be shielded from public view in certain civil databases, even if it cannot be fully expunged.
            </p>
            <h2>How the Expungement Process Works</h2>
            <p>
              To expunge a record, you must file a formal Petition for Expungement in the court where your case was processed. If the state's attorney or victims do not object, the judge will sign an Expungement Order directing police and state databases to destroy the records. This process typically takes 90 to 120 days.
            </p>
          </>
        );
      default:
        return <p>Legal guide content is being compiled by Ryan Law LLC.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={seoTitle}
        description={metaDescription}
        schemaType="WebPage"
        breadcrumbs={[
          { name: "Blog", item: "/blog" },
          { name: post.title, item: `/blog/${post.slug}` }
        ]}
      />

      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs
            items={[
              { name: "Blog", item: "/blog" },
              { name: post.title, item: `/blog/${post.slug}` }
            ]}
          />
          
          <div className="max-w-4xl mt-6 flex flex-col gap-4">
            <div className="flex items-center gap-4 text-xs font-sans text-muted-foreground">
              <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-sm font-semibold uppercase tracking-wider text-[10px]">
                {post.category}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </span>
            </div>

            <h1 className="text-2xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground tracking-tight leading-tight">
              {post.title}
            </h1>
            <div className="w-16 h-1 bg-primary mt-2" />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-20 bg-background">
        <div className="container grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Main Body */}
          <div className="lg:col-span-8">
            <div className="prose prose-invert prose-primary font-sans font-light text-muted-foreground max-w-none text-sm md:text-base leading-relaxed space-y-6">
              {renderArticleContent()}
            </div>

            {/* Author / CTA Box */}
            <div className="bg-card border border-white/5 p-8 rounded-sm mt-12 flex flex-col gap-4 relative overflow-hidden">
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-2xl pointer-events-none" />
              <h3 className="font-serif text-lg font-bold text-foreground">
                Facing a Criminal Charge or DUI in Maryland?
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground font-sans leading-relaxed">
                Do not navigate the complex legal system alone. Secure aggressive, dedicated defense counsel today. Speak directly with attorney James Ryan to review your options.
              </p>
              <div className="pt-2">
                <a
                  href={CLIENT_INFO.phoneRaw}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-sans font-bold text-xs py-3 px-6 rounded-sm transition-all active:scale-[0.98]"
                >
                  <Phone className="w-4 h-4 fill-current" />
                  <span>Call James Ryan Directly: {CLIENT_INFO.phone}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4 flex flex-col gap-8">
            {/* Quick Links */}
            <div className="bg-card border border-white/5 p-6 rounded-sm">
              <h3 className="font-serif text-base font-bold text-primary mb-4 pb-2 border-b border-white/5">
                Practice Areas
              </h3>
              <ul className="space-y-3 text-xs font-sans text-muted-foreground">
                <li>
                  <Link href="/criminal-defense">
                    <span className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                      <ChevronRight className="w-3.5 h-3.5 text-primary" />
                      <span>Criminal Defense Hub</span>
                    </span>
                  </Link>
                </li>
                <li>
                  <Link href="/dui-defense">
                    <span className="hover:text-primary transition-colors cursor-pointer flex items-center gap-1">
                      <ChevronRight className="w-3.5 h-3.5 text-primary" />
                      <span>DUI Defense Hub</span>
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
