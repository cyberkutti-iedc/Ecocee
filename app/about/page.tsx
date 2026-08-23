import type { Metadata } from "next";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Seo from "@/components/seo/Seo";
import {
  organizationSchema,
  breadcrumbSchema,
} from "@/lib/seo/schemas";
import {
  Bot,
  Cpu,
  Wifi,
  Target,
  Users,
  MapPin,
  Calendar,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import { FooterSection } from "@/components/layout/sections/footer";

export const metadata: Metadata = {
  title: "About Ecocee — AI & Electronics Startup Kerala | Our Story",
  description:
    "Ecocee is a Kerala-based AI and electronics startup founded in 2023 in Kodungallur, Thrissur. We build custom AI agents, edge computing devices, and IoT solutions for businesses across India.",
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
        title="About Ecocee — AI & Electronics Startup Kerala | Our Story"
        description="Ecocee is a Kerala-based AI and electronics startup founded in 2023 in Kodungallur, Thrissur. We build custom AI agents, edge computing devices, and IoT solutions."
        canonical="https://ecocee.in/about"
        image="https://ecocee.in/og-banner.webp"
        twitterHandle="@Ecocee"
        siteName="Ecocee"
        structuredData={structuredData}
      />

      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="py-20 md:py-28">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Badge className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full border border-primary/20 mb-6 font-medium">
              About Ecocee
            </Badge>
            <h1
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground tracking-tight mb-6 leading-tight speakable-hero"
              style={{ fontFamily: "var(--font-display)" }}
            >
              We Make AI Real
              <br />
              <span className="text-primary">For Indian Businesses</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl speakable-summary">
              Ecocee is a Kerala-based AI and electronics startup founded in 2023 in Kodungallur,
              Thrissur. We build custom AI agents, edge computing devices, and IoT solutions —
              making artificial intelligence accessible and practical for businesses across India.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="py-16 border-t border-border/30">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <div className="md:col-span-2 space-y-6">
                <h2
                  className="text-2xl md:text-3xl font-bold text-foreground"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Our Story
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Ecocee was born from a simple observation: while AI was transforming businesses
                    globally, most Indian SMEs and mid-market companies had no practical way to adopt it.
                    The technology was either too expensive, too complex, or too generic to solve real
                    business problems.
                  </p>
                  <p>
                    Founded by Sreeraj V Rajesh, an embedded systems engineer with over 4 years of
                    hands-on experience in hardware design and AI, and co-founded by Dr. Chaithanya Raj,
                    an experienced researcher and entrepreneurship mentor, Ecocee set out to bridge
                    this gap.
                  </p>
                  <p>
                    Today, Ecocee builds three types of custom AI agents — for business, office, and
                    warehouse operations — along with edge computing devices and IoT systems. Every
                    solution we build is designed for the real world: affordable enough for SMEs,
                    powerful enough for enterprises, and privacy-first by design.
                  </p>
                </div>
              </div>

              {/* Key facts sidebar */}
              <div className="space-y-4">
                {[
                  { icon: Calendar, label: "Founded", value: "2023" },
                  { icon: MapPin, label: "Headquarters", value: "Kodungallur, Thrissur, Kerala" },
                  { icon: Users, label: "Team", value: "Engineers & Researchers" },
                  { icon: Target, label: "Focus", value: "AI + Electronics" },
                ].map(({ icon: Icon, label, value }) => (
                  <Card key={label} className="bg-card border border-border">
                    <CardContent className="p-4 flex items-start gap-3">
                      <Icon className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <div>
                        <p className="text-xs text-muted-foreground">{label}</p>
                        <p className="text-sm font-medium text-foreground">{value}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What We Build */}
        <section className="py-16 bg-secondary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-8"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What We Build
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Bot,
                  title: "Custom AI Agents",
                  description:
                    "Business, office, and warehouse AI agents trained on your workflows. WhatsApp automation, meeting summaries, inventory tracking, and more.",
                },
                {
                  icon: Cpu,
                  title: "Edge Computing Devices",
                  description:
                    "Custom embedded hardware with AI capabilities. ESP32, ARM, and custom PCB architectures for real-time processing at the edge.",
                },
                {
                  icon: Wifi,
                  title: "IoT Solutions",
                  description:
                    "Connected device systems with cloud integration, remote monitoring, sensor networks, and industrial automation.",
                },
              ].map(({ icon: Icon, title, description }) => (
                <Card key={title} className="bg-card border border-border hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2
              className="text-2xl md:text-3xl font-bold text-foreground mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Ready to Work With Us?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you need an AI agent for your business, a custom edge device, or an IoT
              solution — we&apos;re here to help. Free consultation, no commitment.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-primary text-primary-foreground font-semibold group" asChild>
                <Link href="/#contact">
                  Get in Touch
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <FooterSection />
    </>
  );
}
