"use client";

import { motion } from "framer-motion";
import { Bot, Server, Cpu, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export const EcoceeStackSection = () => {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const stackLayers = [
    {
      id: 1,
      title: "Software Layer",
      subtitle: "Custom AI Agents",
      icon: Bot,
      color: "text-emerald-500",
      bgHover: "hover:bg-emerald-500/10",
      borderColor: "border-emerald-500/30",
      description: "Agents trained on your data to automate repetitive workflows. They connect to your existing CRM, ERP, and databases securely.",
      features: ["Retrieval-Augmented Generation (RAG)", "API-first integration", "Role-based access control"],
    },
    {
      id: 2,
      title: "Compute Layer",
      subtitle: "Private Infrastructure",
      icon: Server,
      color: "text-blue-500",
      bgHover: "hover:bg-blue-500/10",
      borderColor: "border-blue-500/30",
      description: "We don't send your proprietary data to public clouds. We deploy local or hybrid AI servers that you fully control.",
      features: ["NVIDIA-powered local inference", "Zero cloud dependency", "DPDPA/GDPR compliance"],
    },
    {
      id: 3,
      title: "Edge Layer",
      subtitle: "Embedded Hardware",
      icon: Cpu,
      color: "text-amber-500",
      bgHover: "hover:bg-amber-500/10",
      borderColor: "border-amber-500/30",
      description: "Custom firmware and IoT sensors that feed real-world data directly into your AI stack for real-time operational decisions.",
      features: ["ESP32 custom firmware", "Real-time telemetry", "Industrial IoT sensors"],
    },
  ];

  return (
    <section id="ecocee-stack" className="py-24 bg-background border-t border-border/50 relative overflow-hidden" aria-label="Ecocee Stack">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Our Architecture</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
              The Full-Stack Automation Ecosystem
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just sell APIs. We build the entire nervous system for your business—from the physical sensors to the private servers to the intelligent agents.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: The Stack Visualization */}
          <div className="relative space-y-4">
            {/* Connecting line behind */}
            <div className="absolute left-8 top-10 bottom-10 w-0.5 bg-gradient-to-b from-emerald-500 via-blue-500 to-amber-500 opacity-20" />
            
            {stackLayers.map((layer) => (
              <motion.div
                key={layer.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: layer.id * 0.1 }}
                onMouseEnter={() => setActiveLayer(layer.id)}
                onMouseLeave={() => setActiveLayer(null)}
                className={`relative p-6 rounded-2xl border transition-all duration-300 cursor-pointer bg-card
                  ${activeLayer === layer.id ? `border-border ${layer.bgHover} scale-[1.02] shadow-xl z-10` : 'border-border/50 opacity-60 hover:opacity-100'}
                  ${activeLayer !== null && activeLayer !== layer.id ? 'opacity-30 blur-[1px]' : ''}
                `}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-background border ${layer.borderColor} flex items-center justify-center shrink-0 shadow-inner`}>
                    <layer.icon className={`w-6 h-6 ${layer.color}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{layer.subtitle}</h3>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-2">{layer.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {layer.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Dynamic Feature List */}
          <div className="hidden lg:block bg-secondary/30 border border-border/50 rounded-3xl p-10 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
            
            <div className="h-full flex flex-col justify-center min-h-[300px]">
              {activeLayer === null ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-muted-foreground">
                  <Bot className="w-12 h-12 mx-auto mb-4 opacity-20" />
                  <p>Hover over a layer to see technical details.</p>
                </motion.div>
              ) : (
                stackLayers.map((layer) => (
                  activeLayer === layer.id && (
                    <motion.div
                      key={`feature-${layer.id}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-6"
                    >
                      <h4 className="text-2xl font-bold text-foreground border-b border-border/50 pb-4">
                        {layer.subtitle} Capabilities
                      </h4>
                      <ul className="space-y-4">
                        {layer.features.map((feature, i) => (
                          <motion.li 
                            key={i}
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="flex items-center gap-3 text-muted-foreground"
                          >
                            <div className={`w-1.5 h-1.5 rounded-full bg-current ${layer.color}`} />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <div className="pt-6">
                        <Button variant="outline" className="group">
                          View Tech Specs
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </div>
                    </motion.div>
                  )
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
