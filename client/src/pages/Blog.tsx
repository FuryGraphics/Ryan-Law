import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FloatingCallButton from "@/components/FloatingCallButton";
import ContactForm from "@/components/ContactForm";
import SEO from "@/components/SEO";
import Breadcrumbs from "@/components/Breadcrumbs";
import { BLOG_POSTS, CORE_PAGES } from "@/lib/routes";
import { Calendar, ChevronRight, BookOpen } from "lucide-react";

export default function Blog() {
  const pageInfo = CORE_PAGES.blog;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SEO
        title={pageInfo.seoTitle}
        description={pageInfo.metaDescription}
        schemaType="WebPage"
        breadcrumbs={[{ name: "Blog", item: "/blog" }]}
      />

      <Navigation />

      {/* Hero Header */}
      <section className="relative pt-32 pb-16 bg-[#050505] border-b border-white/5">
        <div className="container">
          <Breadcrumbs items={[{ name: "Blog", item: "/blog" }]} />
          <div className="max-w-4xl mt-6">
            <span className="text-primary font-sans text-xs font-bold tracking-[0.3em] uppercase">
              LEGAL GUIDES & INSIGHTS
            </span>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground tracking-tight mt-2">
              Maryland Criminal Defense Legal Tips
            </h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed mt-4 font-sans font-light max-w-2xl">
              Stay informed with our starter guides, statutory explanations, and courtroom advice written personally by attorney James Ryan to help protect your rights.
            </p>
            <div className="w-16 h-1 bg-primary mt-4" />
          </div>
        </div>
      </section>

      {/* Blog Posts List */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto w-full">
            {BLOG_POSTS.map((post) => (
              <article key={post.slug} className="bg-card border border-white/5 p-8 rounded-sm hover:border-primary/20 transition-all duration-300 flex flex-col justify-between group">
                <div className="flex flex-col gap-4">
                  {/* Meta */}
                  <div className="flex items-center gap-4 text-xs font-sans text-muted-foreground">
                    <span className="bg-primary/10 text-primary px-2.5 py-1 rounded-sm font-semibold uppercase tracking-wider text-[10px]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{post.date}</span>
                    </span>
                  </div>

                  <Link href={`/blog/${post.slug}`}>
                    <h2 className="font-serif text-xl font-bold text-foreground group-hover:text-primary transition-colors cursor-pointer leading-snug">
                      {post.title}
                    </h2>
                  </Link>

                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-sans font-light">
                    {post.excerpt}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/5 mt-6 flex items-center justify-between">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="inline-flex items-center gap-1 text-xs text-primary font-medium hover:underline cursor-pointer">
                      <span>Read Legal Guide</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </Link>
                  <BookOpen className="w-4 h-4 text-muted-foreground/30" />
                </div>
              </article>
            ))}
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
