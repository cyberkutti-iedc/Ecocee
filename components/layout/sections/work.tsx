"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Bot, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const projects = [
  {
    id: 1,
    name: "ORDATO",
    category: "AI · Hospitality Technology",
    description: "AI-powered hospitality technology platform connecting guests, staff and operations through intelligent automation.",
    technologies: ["AI Agents", "Private Infrastructure", "Edge Computing"],
  },
  {
    id: 2,
    name: "ADARA",
    category: "Digital Signage · Connected Displays",
    description: "Digital signage and connected display infrastructure for real-time content management and audience intelligence.",
    technologies: ["IoT", "Cloud", "Real-time Systems"],
  },
  {
    id: 3,
    name: "NAVICENTRA",
    category: "Intelligent Fleet · Certification",
    description: "Intelligent fleet and certification technology powering logistics operations with AI-driven decision making.",
    technologies: ["AI", "Embedded Systems", "IoT"],
  },
];

const AIDemoCard = () => {
  const [typedText, setTypedText] = useState("");
  const [showMetrics, setShowMetrics] = useState(false);
  const fullText = "Analyzing operational data across 3 facilities. 2 priority tasks require attention.";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(interval);
        setTimeout(() => setShowMetrics(true), 500);
      }
    }, 30);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-card border border-border rounded-2xl p-6 md:p-8 max-w-lg hover:border-foreground/20 transition-all duration-300">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
        <div className="w-2.5 h-2.5 rounded-full bg-foreground dot-pulse" />
        <span className="text-sm font-medium text-foreground">Ecocee AI Agent</span>
        <span className="ml-auto text-[10px] text-muted-foreground uppercase tracking-wider">Demo</span>
      </div>

      <div className="space-y-4 mb-6 font-mono text-sm">
        <div className="flex gap-3 justify-end">
          <div className="bg-secondary border border-border rounded-xl rounded-tr-sm px-4 py-2.5 text-foreground/80 max-w-[85%]">
            What tasks require attention today?
          </div>
        </div>

        <div className="flex gap-3">
          <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center shrink-0">
            <Bot className="w-4 h-4 text-foreground" />
          </div>
          <div className="bg-secondary border border-border rounded-xl rounded-tl-sm px-4 py-2.5 text-foreground max-w-[85%]">
            {typedText}
            {typedText.length < fullText.length && (
              <span className="inline-block w-1.5 h-4 ml-1 bg-foreground animate-pulse align-middle" />
            )}
          </div>
        </div>
      </div>

      <div className={`grid grid-cols-3 gap-4 pt-4 border-t border-border transition-opacity duration-500 ${showMetrics ? 'opacity-100' : 'opacity-0'}`}>
        {["PRIVATE", "EDGE-READY", "INTEGRATION"].map((m) => (
          <div key={m} className="text-center">
            <div className="text-xs font-bold text-foreground">{m}</div>
            <div className="text-[10px] text-muted-foreground uppercase tracking-wider mt-1">
              {m === "PRIVATE" ? "Infrastructure" : m === "EDGE-READY" ? "Deployment" : "System"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const WorkSection = () => {
  return (
    <section id="work" className="py-32 md:py-40" aria-label="Selected Work">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <span className="text-xs font-medium text-muted-foreground uppercase tracking-[0.2em] mb-4 block">
            Selected Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
            Projects that
            <br />
            define our craft.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-2"
        >
          <div className="grid lg:grid-cols-2 gap-2 bg-card border border-border rounded-2xl overflow-hidden border-glow">
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <span className="text-xs text-muted-foreground font-mono mb-4 block">01</span>
              <span className="text-xs text-muted-foreground uppercase tracking-wider mb-3 block">
                {projects[0].category}
              </span>
              <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4 transition-colors">
                {projects[0].name}
              </h3>
              <p className="text-muted-foreground text-sm md:text-base max-w-md mb-6 leading-relaxed">
                {projects[0].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[0].technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs text-muted-foreground bg-secondary rounded-full border border-border hover:border-foreground/20 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
              <button className="inline-flex items-center gap-2 text-foreground font-medium hover:opacity-70 transition-opacity group text-sm underline-smooth">
                View case study
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="p-8 md:p-12 flex items-center justify-center bg-secondary/30">
              <AIDemoCard />
            </div>
          </div>
        </motion.div>

        <div className="space-y-2">
          {projects.slice(1).map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative bg-card border border-border hover:border-foreground/15 transition-all duration-500 overflow-hidden rounded-2xl border-glow"
            >
              <div className="p-8 md:p-12 lg:p-16 min-h-[350px] md:min-h-[450px] flex flex-col justify-end">
                <div className="absolute top-8 left-8 md:top-12 md:left-12">
                  <span className="text-xs text-muted-foreground font-mono">
                    {String(project.id).padStart(2, "0")}
                  </span>
                </div>

                <div className="absolute top-8 right-8 md:top-12 md:right-12 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-6 h-6 text-foreground" />
                </div>

                <div className="relative z-10">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider mb-3 block">
                    {project.category}
                  </span>
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 group-hover:opacity-80 transition-opacity duration-300">
                    {project.name}
                  </h3>
                  <p className="text-muted-foreground text-sm md:text-base max-w-xl mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 text-xs text-muted-foreground bg-secondary rounded-full border border-border hover:border-foreground/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
