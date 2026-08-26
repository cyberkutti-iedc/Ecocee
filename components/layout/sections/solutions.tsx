"use client";

import { motion } from "framer-motion";
import { Bot, Server, Eye, Cpu, MonitorPlay, Code2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const solutions = [
  {
    id: 1,
    title: "AI Business Automation",
    description: "Automate repetitive operational workflows with AI agents.",
    icon: Bot,
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/20",
  },
  {
    id: 2,
    title: "Private AI Systems",
    description: "Deploy AI in private, on-premise or hybrid environments according to business requirements.",
    icon: Server,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/20",
  },
  {
    id: 3,
    title: "Edge AI & Computer Vision",
    description: "Process real-world data locally for responsive intelligent systems.",
    icon: Eye,
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/20",
  },
  {
    id: 4,
    title: "IoT & Embedded Systems",
    description: "Connect sensors, devices and machines to intelligent software.",
    icon: Cpu,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/20",
  },
  {
    id: 5,
    title: "AI + Hardware",
    description: "Combine software intelligence with physical devices and embedded systems.",
    icon: MonitorPlay,
    color: "text-rose-500",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/20",
  },
  {
    id: 6,
    title: "Custom AI Systems",
    description: "Engineer specialized systems for complex problems that don't fit an off-the-shelf solution.",
    icon: Code2,
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/20",
  },
];

export const SolutionsSection = () => {
  return (
    <section id="solutions" className="py-24 bg-secondary/20 border-t border-border/50" aria-label="What We Build">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="text-primary text-sm font-bold uppercase tracking-widest mb-2 block">Capabilities</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6" style={{ fontFamily: "var(--font-display)" }}>
              What Can Ecocee Build For You?
            </h2>
            <p className="text-lg text-muted-foreground">
              From business automation to intelligent hardware, we design technology around the problem—not around a pre-built template.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, i) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full bg-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg group">
                <CardContent className="p-8">
                  <div className={`w-14 h-14 rounded-2xl ${solution.bgColor} border ${solution.borderColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <solution.icon className={`w-7 h-7 ${solution.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{solution.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {solution.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
