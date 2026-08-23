"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import {
  Bot,
  Building2,
  Warehouse,
  MessageSquare,
  ArrowRight,
  Check,
  Zap,
  Clock,
  Shield,
} from "lucide-react";
import { useState } from "react";

interface AIAgent {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  tagline: string;
  description: string;
  features: string[];
  stats: { label: string; value: string }[];
}

const agents: AIAgent[] = [
  {
    id: "business",
    icon: MessageSquare,
    title: "Business AI Agent",
    tagline: "24/7 customer handling",
    description:
      "Responds to customer inquiries, qualifies leads, manages CRM, and handles WhatsApp, email, and website chat — in English and Malayalam.",
    features: [
      "WhatsApp, email & website chat automation",
      "Lead qualification & CRM updates",
      "Appointment booking & scheduling",
      "24/7 support (English + Malayalam)",
      "Smart handoff to human agents",
    ],
    stats: [
      { label: "Response Time", value: "< 3s" },
      { label: "Resolution", value: "94%" },
      { label: "Savings", value: "60%" },
    ],
  },
  {
    id: "office",
    icon: Building2,
    title: "Office AI Agent",
    tagline: "Internal knowledge engine",
    description:
      "Meeting summaries, document analysis, scheduling, and answers from your internal knowledge base.",
    features: [
      "Meeting summaries & action items",
      "Document analysis & extraction",
      "Calendar & scheduling coordination",
      "Internal knowledge base Q&A",
      "Automated report generation",
    ],
    stats: [
      { label: "Time Saved", value: "12h/wk" },
      { label: "Accuracy", value: "97%" },
      { label: "Setup", value: "1 day" },
    ],
  },
  {
    id: "warehouse",
    icon: Warehouse,
    title: "Warehouse AI Agent",
    tagline: "Inventory intelligence",
    description:
      "Tracks inventory in real-time, automates reorder alerts, coordinates with suppliers, detects anomalies, and forecasts demand.",
    features: [
      "Real-time inventory tracking",
      "Automated reorder & supplier alerts",
      "Anomaly detection in stock movements",
      "Demand forecasting & analytics",
      "Daily operational reports",
    ],
    stats: [
      { label: "Stock Accuracy", value: "99.2%" },
      { label: "Waste Reduction", value: "35%" },
      { label: "ROI", value: "4x" },
    ],
  },
];

const agentColors = {
  business: { bg: "bg-primary/10", text: "text-primary", border: "border-primary/20" },
  office: { bg: "bg-blue-500/10 dark:bg-blue-400/10", text: "text-blue-600 dark:text-blue-400", border: "border-blue-500/20" },
  warehouse: { bg: "bg-amber-500/10", text: "text-amber-600 dark:text-amber-400", border: "border-amber-500/20" },
};

export const AIAgentsSection = () => {
  const [activeAgent, setActiveAgent] = useState<string>("business");
  const agent = agents.find((a) => a.id === activeAgent) || agents[0];
  const colors = agentColors[agent.id as keyof typeof agentColors];

  return (
    <section id="ai-agents" className="w-full bg-background py-24 md:py-32" aria-label="AI Agents">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-3xl">
          <Badge className="bg-primary/10 text-primary text-xs px-3 py-1.5 rounded-full border border-primary/20 mb-4 font-medium">
            Custom AI Agents
          </Badge>
          <h2
            className="text-3xl md:text-5xl font-extrabold text-foreground tracking-tight mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Built for How You
            <br />
            <span className="text-primary">Actually Work</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Not generic chatbots. Custom AI agents trained on your processes, your data, and your
            workflows. Each handles a specific job — so your team focuses on what matters.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-12 border-b border-border pb-px">
          {agents.map((a) => {
            const Icon = a.icon;
            const isActive = activeAgent === a.id;
            return (
              <button
                key={a.id}
                onClick={() => setActiveAgent(a.id)}
                className={`flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all border-b-2 -mb-px ${
                  isActive
                    ? "text-primary border-primary"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:border-border"
                }`}
                aria-label={`View ${a.title}`}
                aria-pressed={isActive}
              >
                <Icon className="w-4 h-4" />
                {a.title}
              </button>
            );
          })}
        </div>

        {/* Active agent */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
                  {(() => {
                    const Icon = agent.icon;
                    return <Icon className={`w-5 h-5 ${colors.text}`} />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                    {agent.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{agent.tagline}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">{agent.description}</p>
            </div>

            <ul className="space-y-3">
              {agent.features.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <Check className={`w-4 h-4 ${colors.text} mt-0.5 shrink-0`} />
                  <span className="text-sm text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                className="bg-primary text-primary-foreground font-semibold group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Book a Demo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
              </Button>
              <Button variant="outline" onClick={() => (window.location.href = "/ai-agents")}>
                View All Agents & Pricing
              </Button>
            </div>
          </div>

          {/* Right — Stats + flow */}
          <div className="space-y-6">
            <div className="grid grid-cols-3 gap-3">
              {agent.stats.map((stat, idx) => (
                <Card key={idx} className="bg-card border border-border text-center p-4">
                  <CardContent className="p-0">
                    <div className="text-2xl font-extrabold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                      {stat.value}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-1">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-card border border-border p-6">
              <h4 className="text-sm font-semibold text-foreground mb-4">How It Works</h4>
              <div className="space-y-4">
                {[
                  { step: "01", label: "Discovery call", desc: "We map your workflows and data" },
                  { step: "02", label: "Custom build", desc: "Agent trained on your processes" },
                  { step: "03", label: "Deploy & iterate", desc: "Live in days, improving weekly" },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <div className={`w-8 h-8 rounded-lg ${colors.bg} flex items-center justify-center shrink-0`}>
                      <span className={`text-xs font-bold ${colors.text}`}>{item.step}</span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="flex flex-wrap gap-5">
              {[
                { icon: Shield, label: "Data stays private" },
                { icon: Zap, label: "Setup in 1-3 days" },
                { icon: Clock, label: "24/7 operation" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Icon className="w-3.5 h-3.5 text-primary" />
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
