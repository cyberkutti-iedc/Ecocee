import type { Metadata } from "next";
import Link from "next/link";
import { 
  MapPin, Calendar, Users, Target, ArrowRight, Bot, Cpu, 
  Server, Zap, MonitorSmartphone, Settings, Workflow, 
  ShieldCheck, BrainCircuit, Linkedin, Mail
} from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar } from "@/components/ui/avatar";
import { AnimatedSection } from "@/components/ui/animated-section";
import { FooterSection } from "@/components/layout/sections/footer";
import { EcoceeLabsSection } from "@/components/layout/sections/ecocee-labs";
import Seo from "@/components/seo/Seo";
import { organizationSchema, breadcrumbSchema } from "@/lib/seo/schemas";
import { teamData } from "@/data/team";

export const metadata: Metadata = {
  title: "About Ecocee — AI & Electronics Technology Company",
  description: "Ecocee is an AI + Electronics technology company that engineers intelligent systems connecting AI, private infrastructure, edge computing and physical devices.",
};

export default function AboutPage() {
  const structuredData = [
    organizationSchema,
    breadcrumbSchema([
      { name: "Home", url: "https://ecocee.in" },
      { name: "About", url: "https://ecocee.in/about" },
    ]),
  ];

  return (
    <>
      <Seo
        title="About Ecocee — AI & Electronics Technology Company"
        description="Ecocee is an AI + Electronics technology company that engineers intelligent systems connecting AI, private infrastructure, edge computing and physical devices."
        canonical="https://ecocee.in/about"
        image="https://ecocee.in/og-banner.webp"
        twitterHandle="@Ecocee"
        siteName="Ecocee"
        structuredData={structuredData}
      />

      <main className="bg-background min-h-screen">
        {/* 1. Hero Section */}
        <section className="py-20 md:py-28 pt-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Badge className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full border border-primary/20 mb-6 font-medium">
              About Ecocee
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              We Engineer Intelligence
              <br />
              <span className="text-primary">for the Real World</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-4">
              Ecocee is an AI + Electronics technology company building intelligent systems that connect AI, private infrastructure, edge computing and physical devices.
            </p>
            <p className="text-sm font-semibold text-foreground mb-8">
              Built in Kerala. Serving businesses worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary text-primary-foreground font-semibold h-11 px-6 group" asChild>
                <Link href="/#contact">
                  Talk to an Ecocee Architect
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" className="h-11 px-6" asChild>
                <Link href="/#solutions">Explore Our Capabilities</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Company Facts */}
        <section className="py-8 border-y border-border/30 bg-secondary/5">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:divide-x divide-border/50">
              <div className="px-4">
                <Calendar className="w-5 h-5 text-primary mx-auto mb-2 opacity-80" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Founded</p>
                <p className="font-semibold text-foreground">2023</p>
              </div>
              <div className="px-4 border-l border-border/50 md:border-none">
                <MapPin className="w-5 h-5 text-primary mx-auto mb-2 opacity-80" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Headquarters</p>
                <p className="font-semibold text-foreground">Kodungallur, Kerala, India</p>
              </div>
              <div className="px-4 pt-6 md:pt-0 border-t border-border/50 md:border-t-0">
                <Users className="w-5 h-5 text-primary mx-auto mb-2 opacity-80" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Team</p>
                <p className="font-semibold text-foreground">Engineers & Researchers</p>
              </div>
              <div className="px-4 pt-6 md:pt-0 border-t border-border/50 md:border-t-0 border-l border-border/50 md:border-l-0">
                <Target className="w-5 h-5 text-primary mx-auto mb-2 opacity-80" />
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Focus</p>
                <p className="font-semibold text-foreground">AI + Electronics</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Why Ecocee Exists */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <section className="py-24">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8" style={{ fontFamily: "var(--font-display)" }}>
                Why Ecocee Exists
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  AI is becoming increasingly powerful, but putting that intelligence into real business operations is still a difficult engineering problem.
                </p>
                <p>
                  Businesses need more than an AI model. They need systems that can understand their data, connect with existing software, operate within their security requirements, and interact with the physical world.
                </p>
                <p className="font-medium text-foreground text-xl">
                  Ecocee was founded to engineer those systems.
                </p>
                <p>
                  We bring together AI, software, embedded systems, edge computing and IoT to build practical technology around real operational problems.
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 4. What We Engineer */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <section className="py-24 bg-secondary/10 border-y border-border/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center" style={{ fontFamily: "var(--font-display)" }}>
                What We Engineer
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    title: "AI Agents",
                    desc: "AI agents connected to business data, tools and workflows to automate operational tasks.",
                    icon: Bot
                  },
                  {
                    title: "Private AI Infrastructure",
                    desc: "AI deployments designed around requirements for privacy, control, security and performance.",
                    icon: Server
                  },
                  {
                    title: "Edge AI",
                    desc: "Intelligence running closer to where data is generated for responsive real-world applications.",
                    icon: Zap
                  },
                  {
                    title: "Embedded & IoT Systems",
                    desc: "Custom firmware, electronics, sensors and connected devices.",
                    icon: Cpu
                  },
                  {
                    title: "AI + Hardware",
                    desc: "Systems where software intelligence meets the physical world.",
                    icon: MonitorSmartphone
                  }
                ].map((item, idx) => (
                  <Card key={idx} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                        <item.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 5. How We Think */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <section className="py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center" style={{ fontFamily: "var(--font-display)" }}>
                How We Think
              </h2>
              <div className="space-y-4 max-w-4xl mx-auto">
                {[
                  {
                    num: "01",
                    title: "Problem First",
                    desc: "We start by understanding the real problem—not by choosing a technology."
                  },
                  {
                    num: "02",
                    title: "Built for Reality",
                    desc: "Our systems are designed around real environments, constraints and operations."
                  },
                  {
                    num: "03",
                    title: "Intelligence Where It Matters",
                    desc: "Cloud, private infrastructure or edge—we choose the appropriate deployment for the problem."
                  },
                  {
                    num: "04",
                    title: "Privacy by Design",
                    desc: "Security and data handling are considered throughout architecture and deployment."
                  },
                  {
                    num: "05",
                    title: "Built to Evolve",
                    desc: "We design systems that can improve as the business and technology evolve."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl bg-card border border-border/50 hover:border-primary/30 transition-colors">
                    <div className="text-2xl font-light text-primary font-mono shrink-0">{item.num}</div>
                    <div>
                      <h3 className="text-lg font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground text-sm sm:text-base">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 6. Why Ecocee */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <section className="py-24 bg-secondary/5 border-y border-border/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center" style={{ fontFamily: "var(--font-display)" }}>
                Why Ecocee
              </h2>
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {[
                  {
                    title: "AI + Electronics",
                    desc: "We work across software intelligence and physical systems.",
                    icon: BrainCircuit
                  },
                  {
                    title: "End-to-End Engineering",
                    desc: "From architecture and software to embedded hardware and deployment.",
                    icon: Settings
                  },
                  {
                    title: "Private & Edge-Ready",
                    desc: "Solutions can be designed for cloud, private, on-premise or hybrid environments.",
                    icon: ShieldCheck
                  },
                  {
                    title: "Technology Partnership",
                    desc: "We work beyond initial development through deployment, support and continuous improvement.",
                    icon: Workflow
                  }
                ].map((item, idx) => (
                  <Card key={idx} className="bg-card border-border hover:border-primary/20 transition-colors">
                    <CardContent className="p-6 flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 7. Our Journey */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <section className="py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-16 text-center" style={{ fontFamily: "var(--font-display)" }}>
                Our Journey
              </h2>
              <div className="relative">
                {/* Desktop line */}
                <div className="hidden md:block absolute top-[22px] left-8 right-8 h-0.5 bg-border/80" />
                
                <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-4 relative z-10">
                  {[
                    { title: "2023", desc: "Ecocee founded in Kerala." },
                    { title: "Engineering", desc: "Embedded systems and electronics." },
                    { title: "AI Systems", desc: "Expansion into AI and intelligent automation." },
                    { title: "Edge Intelligence", desc: "Combining AI with embedded and edge computing." },
                    { title: "Today", desc: "Building intelligent technology systems for businesses." },
                  ].map((item, idx) => (
                    <div key={idx} className="flex md:flex-col items-center md:items-start text-left md:text-center gap-4 md:gap-0 w-full md:flex-1">
                      {/* Mobile line segment */}
                      <div className="md:hidden absolute left-[15px] top-6 bottom-0 w-0.5 bg-border/80 -z-10" />
                      
                      <div className="w-8 h-8 rounded-full bg-background border-4 border-primary flex items-center justify-center shrink-0 md:mx-auto md:mb-6 shadow-sm z-10">
                        <div className="w-2 h-2 rounded-full bg-primary" />
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-foreground mb-1">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 8. Ecocee Labs */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <EcoceeLabsSection />
        </AnimatedSection>

        {/* 9. Meet the Team */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <section className="py-24 border-t border-border/50" id="team">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4" style={{ fontFamily: "var(--font-display)" }}>
                  Meet the Team
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Engineers, researchers and builders working across AI, electronics and intelligent systems.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {teamData.slice(0, 3).map((member) => (
                  <Card key={member.id} className="bg-card border-border overflow-hidden hover:shadow-lg transition-all duration-300">
                    <CardHeader className="p-6 pb-0 flex flex-col items-center text-center">
                      <Avatar className="w-24 h-24 mb-5 bg-secondary/10 border border-border/50 text-4xl flex items-center justify-center shadow-sm">
                        <span aria-hidden>{member.avatar}</span>
                      </Avatar>
                      <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
                      <p className="text-primary font-medium text-sm mt-1 mb-5">{member.role}</p>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 text-center flex flex-col h-full">
                      <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">
                        {member.bio}
                      </p>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {member.skills.slice(0, 4).map((skill, i) => (
                          <span key={i} className="px-2.5 py-1 bg-secondary/40 text-secondary-foreground text-xs font-medium rounded-md border border-border/50">
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* Social Links */}
                      <div className="flex items-center justify-center gap-3 mt-auto border-t border-border/50 pt-5">
                        {member.linkedin && (
                          <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-md bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label={`LinkedIn ${member.name}`}>
                            <Linkedin className="w-4 h-4" />
                          </a>
                        )}
                        {member.email && member.email !== "#" && (
                          <a href={`mailto:${member.email}`} className="w-8 h-8 flex items-center justify-center rounded-md bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors" aria-label={`Email ${member.name}`}>
                            <Mail className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>

        {/* 10. Final CTA */}
        <AnimatedSection variant="fade-up" delay={0.1}>
          <section className="py-24 bg-secondary/5 border-t border-border/50">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
                Have a Problem Worth Engineering?
              </h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                Tell us what you're trying to solve. We'll explore whether AI, edge computing, embedded systems or automation can turn it into a practical solution.
              </p>
              <div className="flex flex-col items-center">
                <Button className="bg-primary text-primary-foreground font-semibold h-12 px-8 mb-4 group shadow-md" asChild>
                  <Link href="/#contact">
                    Talk to an Ecocee Architect
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <p className="text-sm text-muted-foreground font-medium">
                  30-minute discovery call · No commitment
                </p>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </main>

      <FooterSection />
    </>
  );
}
