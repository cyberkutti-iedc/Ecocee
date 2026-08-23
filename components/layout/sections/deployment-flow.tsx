"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket, ShieldCheck } from "lucide-react";
import { useState } from "react";

const steps = [
  {
    id: 1,
    title: "Discovery & Assessment",
    timeframe: "Phase 1",
    icon: Search,
    description: "We don't start with code. We dive deep into your operations to map your workflows, evaluate existing infrastructure, and identify the root bottlenecks.",
    color: "from-blue-500/20 to-blue-500/0",
    iconColor: "text-blue-500",
    details: ["Current Workflow Mapping", "Technology Limitation Audit", "Business Problem Validation"],
  },
  {
    id: 2,
    title: "Solution & Architecture",
    timeframe: "Phase 2",
    icon: PenTool,
    description: "We present a transparent proposal and Statement of Work. Once approved, we design the database schema, hardware integrations, and AI system architecture.",
    color: "from-indigo-500/20 to-indigo-500/0",
    iconColor: "text-indigo-500",
    details: ["Infrastructure Architecture", "Data Security Approach", "Approved Statement of Work (SOW)"],
  },
  {
    id: 3,
    title: "Engineering & MVP",
    timeframe: "Phase 3",
    icon: Code2,
    description: "Our engineers build the solution iteratively. We provide continuous demonstrations and an early working MVP to validate the core business workflow.",
    color: "from-amber-500/20 to-amber-500/0",
    iconColor: "text-amber-500",
    details: ["Iterative Frontend & Backend Build", "RAG Model Training", "Early MVP Delivery"],
  },
  {
    id: 4,
    title: "UAT & Deployment",
    timeframe: "Phase 4",
    icon: Rocket,
    description: "After rigorous User Acceptance Testing and refinement, we deploy the AI agent and hardware to your production environment—ensuring zero data leakage.",
    color: "from-emerald-500/20 to-emerald-500/0",
    iconColor: "text-emerald-500",
    details: ["User Acceptance Testing (UAT)", "Defect Resolution", "On-Premise Secure Deployment"],
  },
  {
    id: 5,
    title: "Handover & Partnership",
    timeframe: "Phase 5",
    icon: ShieldCheck,
    description: "We deliver full documentation and knowledge transfer. Through SLA-driven support, we remain your long-term technology partner to continuously optimise and innovate.",
    color: "from-primary/20 to-primary/0",
    iconColor: "text-primary",
    details: ["Source Code & API Docs Handover", "SLA Support & Monitoring", "Continuous Improvement Cycle"],
  },
];

export const DeploymentFlowSection = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section className="w-full bg-background py-24 md:py-32 border-t border-border/50" aria-label="Deployment Process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <span className="text-primary text-sm font-bold uppercase tracking-widest mb-3 block">How We Work</span>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The Ecocee Operating Flow
          </h2>
          <p className="text-lg text-muted-foreground">
            We operate as your technology partner, not just a software vendor. Our proven methodology ensures we solve the right problem before writing a single line of code.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connecting line (hidden on small screens) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent -translate-x-1/2" />

          <div className="space-y-6 md:space-y-12">
            {steps.map((step, index) => (
              <div key={step.id} className="relative flex flex-col md:flex-row items-center gap-6 md:gap-16">
                
                {/* Left side (or right depending on index) */}
                <motion.div 
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  onMouseEnter={() => setActiveStep(step.id)}
                  onMouseLeave={() => setActiveStep(null)}
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                  className={`flex-1 w-full bg-card hover:bg-secondary/30 p-6 md:p-8 rounded-2xl border border-transparent hover:border-border/60 transition-colors cursor-pointer group ${index % 2 === 0 ? "md:text-right" : "md:order-2 md:text-left"}`}
                >
                  <div className={`inline-block px-3 py-1 mb-4 text-xs font-bold uppercase tracking-wider text-muted-foreground bg-secondary rounded-full border border-border transition-colors ${activeStep === step.id ? 'bg-primary/10 text-primary border-primary/20' : ''}`}>
                    {step.timeframe}
                  </div>
                  <h3 className={`text-2xl font-bold text-foreground mb-3 transition-colors ${activeStep === step.id ? step.iconColor : ''}`}>{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                  
                  {/* Expandable Details Area */}
                  <div 
                    className={`grid transition-all duration-300 ease-in-out ${activeStep === step.id ? "grid-rows-[1fr] opacity-100 mt-5" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <div className="overflow-hidden">
                      <div className={`flex flex-col gap-3 pt-4 border-t border-border/50 ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                        {step.details.map((detail, idx) => (
                          <div key={idx} className={`flex items-center gap-2.5 text-sm font-medium text-foreground/80 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                            <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${step.iconColor} ${activeStep === step.id ? 'animate-pulse' : ''}`} />
                            <span>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Center Node */}
                <div className={`hidden md:flex relative z-10 w-16 h-16 rounded-2xl bg-card border transition-colors duration-300 shadow-xl items-center justify-center shrink-0 ${index % 2 === 0 ? "" : "md:order-1"} ${activeStep === step.id ? 'border-primary' : 'border-border'}`}>
                  <step.icon className={`w-6 h-6 transition-transform duration-300 ${step.iconColor} ${activeStep === step.id ? 'scale-110' : ''}`} />
                  {/* Subtle glow */}
                  <div className={`absolute inset-0 bg-gradient-to-b ${step.color} rounded-2xl blur-md -z-10 transition-opacity duration-300 ${activeStep === step.id ? 'opacity-100' : 'opacity-40'}`} />
                </div>

                {/* Empty space for alternating layout */}
                <div className={`hidden md:block flex-1 ${index % 2 === 0 ? "" : "md:order-0"}`} />
                
                {/* Mobile Icon (visible only on small screens) */}
                <div className={`md:hidden flex items-center justify-center w-12 h-12 rounded-xl bg-card border shadow-sm mb-2 transition-colors ${activeStep === step.id ? 'border-primary' : 'border-border'}`}>
                  <step.icon className={`w-5 h-5 ${step.iconColor}`} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
