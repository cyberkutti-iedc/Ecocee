import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Settings, Server, Zap, Cpu, Bot } from 'lucide-react';
import Seo from '@/components/seo/Seo';
import { breadcrumbSchema, webPageSchema } from '@/lib/seo/schemas';
import { FooterSection } from '@/components/layout/sections/footer';
import { AnimatedSection } from '@/components/ui/animated-section';

export const metadata: Metadata = {
  title: 'Custom AI & IoT Solutions in Kerala | Ecocee Services',
  description: 'Explore Ecocee’s custom AI agents, IoT solutions, edge computing, and embedded systems for businesses. Built in Kerala, serving enterprises across India.',
  keywords: ['AI solutions company Kerala', 'IoT solutions Ernakulam', 'Embedded systems Thrissur', 'Edge AI', 'Private AI infrastructure'],
  alternates: {
    canonical: 'https://ecocee.in/solutions',
  },
};

const solutionLinks = [
  {
    slug: 'iot-companies-kerala',
    title: 'IoT Solutions',
    desc: 'Custom connected systems and data pipelines.',
    icon: Zap
  },
  {
    slug: 'ai-automation-business',
    title: 'AI Automation',
    desc: 'Business workflows automated with AI agents.',
    icon: Bot
  },
  {
    slug: 'private-ai-infrastructure',
    title: 'Private AI',
    desc: 'Secure, on-premise AI deployments.',
    icon: Server
  },
  {
    slug: 'embedded-systems-kerala',
    title: 'Embedded Systems',
    desc: 'Custom firmware and microcontroller engineering.',
    icon: Cpu
  },
  {
    slug: 'edge-computing-solutions',
    title: 'Edge Computing',
    desc: 'Real-time AI processing at the network edge.',
    icon: Settings
  }
];

export default function SolutionsIndexPage() {
  const structuredData = [
    webPageSchema(
      metadata.title as string,
      metadata.description as string,
      'https://ecocee.in/solutions'
    ),
    breadcrumbSchema([
      { name: 'Home', url: 'https://ecocee.in' },
      { name: 'Solutions', url: 'https://ecocee.in/solutions' },
    ]),
  ];

  return (
    <>
      <Seo
        title={metadata.title as string}
        description={metadata.description as string}
        canonical="https://ecocee.in/solutions"
        structuredData={structuredData}
      />
      
      <main className="bg-background min-h-screen pt-32 pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection variant="fade-up">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6" style={{ fontFamily: 'var(--font-display)' }}>
                Our Engineering <span className="text-primary">Solutions</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We engineer intelligent systems connecting AI, private infrastructure, edge computing and physical devices.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection variant="fade-up" delay={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {solutionLinks.map((sol) => (
                <Link key={sol.slug} href={`/solutions/${sol.slug}`} className="group block h-full">
                  <div className="bg-card border border-border/50 rounded-2xl p-8 hover:border-primary/50 hover:shadow-lg transition-all h-full flex flex-col">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
                      <sol.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-xl font-bold text-foreground mb-3">{sol.title}</h2>
                    <p className="text-muted-foreground mb-6 flex-grow">{sol.desc}</p>
                    <div className="flex items-center text-sm font-semibold text-primary mt-auto">
                      Learn more
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </main>

      <FooterSection />
    </>
  );
}
