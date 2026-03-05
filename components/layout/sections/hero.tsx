"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

export const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full bg-background py-12 md:py-20 overflow-hidden relative" aria-label="Hero">
      {/* Decorative abstract tech background — subtle and non-intrusive */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 900 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="gTech" x1="0" x2="1">
              <stop offset="0%" stopColor="rgba(16,185,129,0.12)" />
              <stop offset="100%" stopColor="rgba(79,70,229,0.04)" />
            </linearGradient>
          </defs>
          <g stroke="url(#gTech)" strokeWidth="1" strokeOpacity="0.6" strokeLinecap="round">
            <path d="M20 200 C140 60, 300 340, 460 200 S740 60, 860 200" stroke="rgba(16,185,129,0.04)" />
            <circle cx="120" cy="100" r="4" fill="rgba(16,185,129,0.16)" />
            <circle cx="380" cy="260" r="3" fill="rgba(79,70,229,0.08)" />
            <circle cx="640" cy="160" r="5" fill="rgba(16,185,129,0.12)" />
          </g>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-12 items-center">
          {/* Left - Messaging */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-3">
              <Badge className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">Ecocee · Startup</Badge>
              <span className="text-xs text-muted-foreground">AI · Edge Computing</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight animate-in fade-in">
              AI & Edge Computing.
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-in fade-in">
              Research-driven startup building intelligent edge devices and AI solutions in Kerala.
            </p>

            <div className="flex flex-wrap gap-3 items-center mt-6">
              <Button
                onClick={() => (window.location.href = '/products')}
                className="h-12 px-6 bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg hover:brightness-105 transform-gpu transition-all duration-200"
                aria-label="Explore Our Solutions"
              >
                Explore Our Solutions
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="h-12 px-6 hover:shadow hover:bg-secondary/5 transition-all duration-200"
                aria-label="Get in Touch"
              >
                Get in Touch
              </Button>

              <a
                href="#research"
                className="ml-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                See research →
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6">
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="text-foreground/70">Capabilities</span>
                <div className="flex items-center gap-2">
                  <div className="px-3 py-1 bg-card/40 rounded-full text-xs font-medium text-foreground">Edge AI</div>
                  <div className="px-3 py-1 bg-card/40 rounded-full text-xs font-medium text-foreground">IoT Devices</div>
                  <div className="px-3 py-1 bg-card/40 rounded-full text-xs font-medium text-foreground">AI Research</div>
                </div>
              </div>

              <div className="hidden sm:flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-card/60 rounded text-foreground">Research‑led</span>
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-card/60 rounded text-foreground">Production‑ready</span>
              </div>
            </div>
          </div>

          {/* Right - Product mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md">
              {/* Decorative gradient */}
              <div
                aria-hidden
                className="absolute -left-12 -top-10 w-48 h-48 rounded-full bg-gradient-to-tr from-primary/20 via-primary/10 to-transparent blur-xl opacity-60"
              />

              <Card className="bg-card border border-border shadow-2xl transform-gpu transition-transform hover:scale-[1.02]">
                <div className="p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-sm font-semibold text-foreground">AI Research Progress</div>
                    <div className="text-xs text-muted-foreground">Growth</div>
                  </div>

                  <div className="rounded-md overflow-hidden bg-gradient-to-b from-slate-800/30 to-transparent p-4">
                    {/* Mini sparkline / chart (SVG) */}
                    <svg viewBox="0 0 120 40" className="w-full h-20" aria-hidden>
                      <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                        <stop offset="0%" stopColor="var(--sparkline-1)" />
                        <stop offset="100%" stopColor="var(--sparkline-2)" />
                      </linearGradient>
                      </defs>
                      <path d="M0 28 C20 10, 40 30, 60 18 C80 6, 100 26, 120 12" fill="none" stroke="url(#g1)" strokeWidth={3} strokeLinecap="round" />
                    </svg>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-sm text-muted-foreground">
                      <div className="flex flex-col">
                        <span className="text-xs">YoY growth</span>
                        <span className="text-foreground font-medium">+142%</span>
                      </div>
                      <div className="flex flex-col text-right">
                        <span className="text-xs">Models deployed</span>
                        <span className="text-foreground font-medium">38</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex gap-3">
                    <div className="px-3 py-2 bg-secondary/10 rounded text-xs text-muted-foreground">AI Research</div>
                    <div className="px-3 py-2 bg-secondary/10 rounded text-xs text-muted-foreground">Edge AI</div>
                    <div className="px-3 py-2 bg-secondary/10 rounded text-xs text-muted-foreground">Kerala</div>
                  </div>
                </div>
              </Card>

              {/* Floating device card */}
              <div className="absolute -right-8 top-12 w-36 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl border border-border shadow-lg transform rotate-3 opacity-90 hover:rotate-0 transition-transform" aria-hidden />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};