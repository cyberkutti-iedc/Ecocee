"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const ResearchDevelopmentSection = () => {
  const researchAreas = [
    {
      id: "adaptive-control",
      title: "Adaptive Control Systems",
      status: "Active Research",
      description: "Self-optimizing infrastructure that dynamically adjusts parameters based on operational telemetry. We're developing real-time feedback loops that enable systems to maintain optimal performance across varying network conditions.",
      keyQuestions: [
        "How can we build feedback control systems that remain stable across millions of heterogeneous nodes?",
        "What metrics best predict system performance degradation before it occurs?",
        "Can we achieve sub-second response times in adaptive network rerouting?"
      ],
      timeline: "2025-2027",
      collaborators: "Academic partners in control theory and distributed systems"
    },
    {
      id: "infrastructure-intelligence",
      title: "Infrastructure Intelligence Optimization",
      status: "Active Research",
      description: "Embedding machine learning at the infrastructure layer to enable intelligent resource allocation. We're exploring how to train models that understand network topology, fault patterns, and usage predictions.",
      keyQuestions: [
        "How do we build models that generalize across different infrastructure deployments?",
        "What's the minimal feature set needed for accurate infrastructure prediction?",
        "Can we ensure model decisions remain auditable and explainable?"
      ],
      timeline: "2025-2028",
      collaborators: "ML research labs and infrastructure providers"
    },
    {
      id: "scalable-architecture",
      title: "Scalable Systems Architecture",
      status: "Active Research",
      description: "Designing architectural patterns that maintain performance and security properties as systems scale from thousands to billions of nodes. We're investigating hierarchical organization, gossip protocols, and sharded consensus.",
      keyQuestions: [
        "What architectural patterns enable linear scalability in consensus latency?",
        "How do we partition state while maintaining consistency guarantees?",
        "Can we achieve global properties through local decision-making?"
      ],
      timeline: "2024-2026",
      collaborators: "Database systems researchers and large-scale infrastructure teams"
    },
    {
      id: "cryptographic-innovation",
      title: "Post-Quantum Cryptographic Protocols",
      status: "Active Research",
      description: "Developing cryptographic primitives and protocols that remain secure against quantum computing threats. We're working on PQC integration into existing infrastructure without breaking backward compatibility.",
      keyQuestions: [
        "How can we migrate existing systems to post-quantum algorithms without service interruption?",
        "What performance compromises are acceptable for quantum resistance?",
        "Can hybrid classical-quantum protocols accelerate adoption?"
      ],
      timeline: "2024-2027",
      collaborators: "NIST, academic cryptography groups, and standardization bodies"
    },
    {
      id: "verifiable-computation",
      title: "Verifiable Computation at Scale",
      status: "Active Research",
      description: "Creating practical zero-knowledge proof systems and verifiable computation frameworks that enable trust in distributed computation without requiring all nodes to re-execute tasks.",
      keyQuestions: [
        "Can we reduce ZK proof generation time below milliseconds?",
        "How do we make proof verification constant-time regardless of computation complexity?",
        "What applications benefit most from verifiable computation?"
      ],
      timeline: "2025-2028",
      collaborators: "Cryptography researchers and blockchain research teams"
    },
  ];

  return (
    <section className="w-full bg-background py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-light text-primary tracking-tight">06</span>
            <Separator className="flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Research & Development
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Our R&D efforts focus on solving the core technical challenges of deep-technology infrastructure. 
            We collaborate with academic institutions, publish findings, and maintain rigorous research standards 
            across all domains.
          </p>
        </div>

        {/* Research Areas Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {researchAreas.map((area, idx) => (
            <AccordionItem 
              key={idx}
              value={area.id}
              className="border border-border bg-card rounded-lg px-6 data-[state=open]:shadow-md transition-shadow"
            >
              <AccordionTrigger className="py-6 hover:no-underline group">
                <div className="flex items-start gap-4 text-left">
                  <div className="flex-shrink-0 w-10 h-10 rounded bg-primary/10 flex items-center justify-center font-semibold text-sm text-primary">
                    {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                      {area.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge 
                        variant="outline" 
                        className="text-xs font-normal bg-primary/5 border-primary/20 text-primary"
                      >
                        {area.status}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {area.timeline}
                      </span>
                    </div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-6 pt-4">
                <div className="space-y-4 ml-14">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>

                  <div>
                    <h4 className="text-sm font-semibold text-foreground mb-3">Key Research Questions</h4>
                    <ul className="space-y-2">
                      {area.keyQuestions.map((question, qIdx) => (
                        <li key={qIdx} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="text-primary flex-shrink-0 mt-1">•</span>
                          <span>{question}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-3 border-t border-border">
                    <p className="text-xs text-muted-foreground">
                      <span className="font-semibold text-foreground">Collaborators:</span> {area.collaborators}
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Publication & Engagement */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="border border-border bg-card">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-primary uppercase tracking-wider">
                Publications
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-light text-foreground mb-2">12+</p>
              <p className="text-xs text-muted-foreground">
                Peer-reviewed papers in distributed systems, cryptography, and infrastructure.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-card">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-primary uppercase tracking-wider">
                Research Partnerships
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-light text-foreground mb-2">8</p>
              <p className="text-xs text-muted-foreground">
                Active collaborations with leading universities and research institutions.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-card">
            <CardHeader>
              <CardTitle className="text-sm font-semibold text-primary uppercase tracking-wider">
                Patents
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-light text-foreground mb-2">6</p>
              <p className="text-xs text-muted-foreground">
                Filed patents covering novel consensus mechanisms and architectural innovations.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action for Collaboration */}
        <div className="mt-16 p-8 md:p-12 border border-border bg-card rounded-lg">
          <h3 className="text-lg font-semibold text-foreground mb-3">Interested in Research Collaboration?</h3>
          <p className="text-sm text-muted-foreground mb-6">
            We actively seek partnerships with academic institutions, research labs, and organizations 
            pursuing complementary deep-technology research. Our collaborative model emphasizes open science, 
            joint publications, and shared infrastructure access.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a 
              href="#contact" 
              className="px-6 py-2 bg-primary text-white text-sm font-medium rounded hover:bg-primary/90 transition-colors inline-block text-center"
            >
              Contact Research Team
            </a>
            <a 
              href="#" 
              className="px-6 py-2 border border-primary text-primary text-sm font-medium rounded hover:bg-primary/5 transition-colors inline-block text-center"
            >
              View Publications
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
