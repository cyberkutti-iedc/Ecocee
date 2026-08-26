import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, ChevronRight } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import { breadcrumbSchema, webPageSchema } from '@/lib/seo/schemas';
import { FooterSection } from '@/components/layout/sections/footer';
import { AnimatedSection } from '@/components/ui/animated-section';
import { Button } from '@/components/ui/button';
import { solutionsData } from '@/content/solutions';

export function generateStaticParams() {
  return Object.keys(solutionsData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const params = await props.params;
  const cleanSlug = params.slug.replace(/\/$/, '');
  const solution = solutionsData[cleanSlug];
  
  if (!solution) {
    return {};
  }
  
  return {
    title: solution.title,
    description: solution.description,
    keywords: solution.keywords,
    alternates: {
      canonical: `https://ecocee.in/solutions/${cleanSlug}`,
    },
    openGraph: {
      title: solution.title,
      description: solution.description,
      url: `https://ecocee.in/solutions/${cleanSlug}`,
    },
  };
}

export default async function SolutionPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const cleanSlug = params.slug.replace(/\/$/, '');
  const solution = solutionsData[cleanSlug];
  
  if (!solution) {
    notFound();
  }
  
  const structuredData = [
    webPageSchema(
      solution.title,
      solution.description,
      `https://ecocee.in/solutions/${cleanSlug}`,
      solution.faqs
    ),
    breadcrumbSchema([
      { name: 'Home', url: 'https://ecocee.in' },
      { name: 'Solutions', url: 'https://ecocee.in/solutions' },
      { name: solution.h1, url: `https://ecocee.in/solutions/${cleanSlug}` },
    ]),
  ];

  return (
    <>
      <Seo
        title={solution.title}
        description={solution.description}
        canonical={`https://ecocee.in/solutions/${cleanSlug}`}
        structuredData={structuredData}
      />
      
      <main className="bg-background min-h-screen pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-muted-foreground mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <Link href="/solutions" className="hover:text-foreground transition-colors">Solutions</Link>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-foreground truncate">{solution.title.split('|')[0].trim()}</span>
          </nav>

          <AnimatedSection variant="fade-up">
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-8 leading-tight" style={{ fontFamily: 'var(--font-display)' }}>
              {solution.h1}
            </h1>
            
            {/* Main Content */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none mb-16"
              dangerouslySetInnerHTML={{ __html: solution.content }}
            />
          </AnimatedSection>

          {/* FAQs */}
          {solution.faqs.length > 0 && (
            <AnimatedSection variant="fade-up" delay={0.1}>
              <div className="bg-secondary/5 border border-border/50 rounded-3xl p-8 md:p-12 mb-16">
                <h2 className="text-2xl font-bold text-foreground mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                  Frequently Asked Questions
                </h2>
                <div className="space-y-6">
                  {solution.faqs.map((faq, idx) => (
                    <div key={idx}>
                      <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          )}

          {/* CTA */}
          <AnimatedSection variant="fade-up" delay={0.1}>
            <div className="text-center bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4" style={{ fontFamily: 'var(--font-display)' }}>
                Ready to engineer a solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
                {solution.localCta}
              </p>
              <Button className="bg-primary text-primary-foreground font-semibold h-12 px-8 group" asChild>
                <Link href="/#contact">
                  Talk to an Ecocee Architect
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
          
        </div>
      </main>

      <FooterSection />
    </>
  );
}
