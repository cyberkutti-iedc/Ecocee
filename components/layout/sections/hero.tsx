"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Bot, Cpu, Wifi } from "lucide-react";
import { useEffect, useState, useRef } from "react";

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = Date.now();
          const tick = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

import { FallingFlowers } from "@/components/ui/falling-flowers";
import { motion } from "framer-motion";

export const HeroSection = () => {
  const models = useCountUp(5, 1800);
  const clients = useCountUp(50, 2000);

  // Simple typing effect simulation
  const [typedText, setTypedText] = useState("");
  const fullText = "Yes! ESP32-S3 and ESP32-P4 available. Bulk quote or single unit?";
  
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full bg-background pt-20 pb-16 md:pt-28 md:pb-24 lg:pt-36 lg:pb-28 overflow-hidden" aria-label="Hero">
      <FallingFlowers />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 items-center">
          {/* Left - Copy */}
          <div className="lg:col-span-6 space-y-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-3">
              <Badge className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full border border-primary/20 font-medium">
                AI + Electronics
              </Badge>
              <span className="text-xs text-muted-foreground font-medium">
                Kerala, India · Est. 2023
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-extrabold text-foreground leading-[1.08] tracking-tight"
              style={{ fontFamily: "var(--font-display), 'Inter', system-ui, sans-serif" }}
            >
              AI That Lives
              <br />
              <span className="text-primary">Where You Work</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Custom AI agents, private infrastructure, and embedded systems — built for your workflows, not generic templates.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex flex-wrap gap-3 items-center">
              <Button
                size="lg"
                onClick={() => document.getElementById("ai-agents")?.scrollIntoView({ behavior: "smooth" })}
                className="h-12 px-7 bg-primary text-primary-foreground font-semibold shadow-md hover:shadow-lg hover:shadow-primary/20 transition-all duration-200 group"
              >
                Get a Consultation
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="h-12 px-7"
              >
                See How We Work
              </Button>
            </motion.div>
          </div>

          {/* Right — Live Product Demo */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="lg:col-span-6 relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-primary/30 to-accent/30 rounded-2xl blur-2xl opacity-50" />
            <div className="relative bg-card border border-border/50 rounded-2xl p-6 shadow-2xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 pulse-subtle" />
                  <span className="text-sm font-semibold text-foreground">Ecocee AI Operations Agent</span>
                </div>
                <Badge variant="outline" className="text-[10px] border-emerald-300 dark:border-emerald-700 text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-900/50 font-semibold">
                  Secure On-Premise
                </Badge>
              </div>

              {/* Chat Interface */}
              <div className="space-y-4 mb-6 font-mono text-sm">
                {/* User Message (Right aligned) */}
                <div className="flex gap-3 justify-end">
                  <div className="bg-secondary/80 rounded-xl rounded-tr-sm px-4 py-2.5 text-foreground max-w-[85%] border border-border/50">
                    Do we have ESP32 boards in stock for the warehouse deployment?
                  </div>
                  <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-[10px] font-bold text-muted-foreground shrink-0 border border-border">
                    OPS
                  </div>
                </div>
                
                {/* AI Message (Left aligned) */}
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="bg-primary/10 border border-primary/20 rounded-xl rounded-tl-sm px-4 py-2.5 text-foreground max-w-[85%] relative">
                    {typedText}
                    {typedText.length < fullText.length && (
                      <span className="inline-block w-1.5 h-4 ml-1 bg-primary animate-pulse align-middle" />
                    )}
                  </div>
                </div>
              </div>

              {/* Live Metrics */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50 bg-background/50 -mx-6 -mb-6 p-6 rounded-b-2xl">
                {[
                  { value: "0.8s", label: "Latency" },
                  { value: "Local", label: "Compute" },
                  { value: "AES-256", label: "Encryption" },
                ].map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="text-sm font-bold text-foreground">{m.value}</div>
                    <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Credibility Strip */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="mt-24 pt-8 border-t border-border/60">
          <p className="text-center text-sm font-medium text-muted-foreground mb-8 uppercase tracking-widest">
          TRUSTED BY BUSINESSES AROUND THE WORLD

          </p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Replace with actual client SVGs when available */}
            <div className="text-xl font-bold font-serif">Ordato.ai</div>
            <div className="text-xl font-bold tracking-tight">Adara Screens</div>
            <div className="text-xl font-extrabold italic">RALLYBOX</div>
            <div className="text-xl font-bold font-mono">Movi</div>
            
            <div className="hidden md:flex items-center gap-2 border-l border-border pl-12">
              <span ref={models.ref} className="text-2xl font-bold text-foreground">{models.count}+</span>
              <span className="text-xs text-muted-foreground leading-tight">Models<br/>Deployed</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
