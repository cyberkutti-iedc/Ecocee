"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

export const EngineeringDomainsSection = () => {
  const domains = [
    {
      name: "Distributed Systems",
      description: "Consensus algorithms, state replication, and Byzantine fault tolerance. We research protocols that maintain consistency across thousands of nodes with minimal overhead.",
      tags: ["Consensus", "BFT", "State Replication"],
    },
    {
      name: "Cryptographic Systems",
      description: "Zero-knowledge proofs, threshold cryptography, and post-quantum algorithms. Building security foundations that remain valid in adversarial environments.",
      tags: ["ZK Proofs", "Threshold Crypto", "PQC"],
    },
    {
      name: "Network Architecture",
      description: "P2P networking, routing optimization, and network topology. Designing systems that operate efficiently at scale without central infrastructure.",
      tags: ["P2P", "Routing", "Topology"],
    },
    {
      name: "Systems Engineering",
      description: "Hardware-software co-design, embedded systems, and resource optimization. Creating unified abstractions across heterogeneous computing environments.",
      tags: ["Co-design", "Embedded", "Optimization"],
    },
    {
      name: "Infrastructure Compute",
      description: "Distributed computation frameworks and edge computing. Enabling computation across billions of devices while maintaining security and performance.",
      tags: ["Distributed Compute", "Edge", "Serverless"],
    },
    {
      name: "Data Integrity",
      description: "Distributed ledgers, verifiable computation, and audit trails. Ensuring data correctness and auditability across decentralized systems.",
      tags: ["Ledgers", "Verification", "Audit"],
    },
  ];

  return (
    <section className="w-full bg-background py-24 md:py-32 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-light text-primary tracking-tight">04</span>
            <Separator className="flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Engineering Domains
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Our research and engineering efforts span six core technical domains. Each domain represents 
            deep expertise developed through years of focused research and practical systems development.
          </p>
        </div>

        {/* Domains Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {domains.map((domain, idx) => (
            <Card 
              key={idx}
              className="border border-border bg-card hover:shadow-md transition-all duration-300 group"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between mb-3">
                  <CardTitle className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                    {domain.name}
                  </CardTitle>
                  <span className="text-xs font-light text-muted-foreground bg-secondary/40 px-2 py-1 rounded">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {domain.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-3 border-t border-border">
                  {domain.tags.map((tag, tagIdx) => (
                    <Badge 
                      key={tagIdx}
                      variant="outline"
                      className="text-xs font-normal border-border/50 bg-secondary/10 text-muted-foreground hover:bg-secondary/20"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Integration Note */}
        <div className="mt-16 p-8 border-l-4 border-primary bg-card rounded">
          <p className="text-sm text-muted-foreground leading-relaxed">
            <span className="font-semibold text-foreground">Integration Approach:</span> Rather than 
            siloing these domains, we focus on their intersections. The most impactful innovations emerge 
            where cryptographic systems meet distributed algorithms, where hardware constraints drive 
            software optimizations, and where network topology influences system design.
          </p>
        </div>
      </div>
    </section>
  );
};
