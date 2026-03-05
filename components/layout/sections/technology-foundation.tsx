"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export const TechnologyFoundationSection = () => {
  const technologies = [
    {
      category: "Distributed Consensus",
      items: [
        { name: "Byzantine Fault Tolerant Consensus", details: "Custom BFT variant optimized for < 5% network overhead" },
        { name: "Proof-of-Stake Mechanisms", details: "Economic models ensuring validator honesty" },
        { name: "Adaptive Consensus Switching", details: "Dynamic algorithm selection based on network conditions" },
      ],
    },
    {
      category: "Cryptographic Foundation",
      items: [
        { name: "Threshold Cryptography", details: "M-of-N schemes for distributed key management" },
        { name: "Zero-Knowledge Proofs", details: "Efficient ZK implementations for computation verification" },
        { name: "Post-Quantum Algorithms", details: "NIST PQC standards for quantum-resistant security" },
      ],
    },
    {
      category: "Hardware Architecture",
      items: [
        { name: "ARM-based Embedded Systems", details: "Optimized for constrained resource environments" },
        { name: "FPGA Acceleration", details: "Hardware acceleration for cryptographic operations" },
        { name: "TPM Integration", details: "Trusted Platform Module for secure key storage" },
      ],
    },
    {
      category: "Infrastructure Compute",
      items: [
        { name: "Container Orchestration", details: "Kubernetes-compatible with enhanced security policies" },
        { name: "Serverless Runtime", details: "Function execution on heterogeneous hardware" },
        { name: "Resource Virtualization", details: "Efficient abstraction across device capabilities" },
      ],
    },
  ];

  return (
    <section className="w-full bg-background py-24 md:py-32 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-light text-primary tracking-tight">05</span>
            <Separator className="flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Technology Foundation
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Our technology stack is built on decades of research in distributed systems, cryptography, 
            and systems engineering. Each component is carefully selected and often enhanced for our 
            specific infrastructure requirements.
          </p>
        </div>

        {/* Technology Categories with Tables */}
        <div className="space-y-12">
          {technologies.map((category, idx) => (
            <Card key={idx} className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-base font-semibold text-foreground">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow className="border-border hover:bg-transparent">
                        <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Technology
                        </TableHead>
                        <TableHead className="text-xs font-semibold text-muted-foreground uppercase tracking-wide">
                          Implementation Details
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {category.items.map((item, itemIdx) => (
                        <TableRow key={itemIdx} className="border-border hover:bg-secondary/20">
                          <TableCell className="font-medium text-sm text-foreground py-4">
                            {item.name}
                          </TableCell>
                          <TableCell className="text-sm text-muted-foreground py-4">
                            {item.details}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Key Principles */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="border border-border bg-secondary/10">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">
                Design Principles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">—</span>
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Openness:</span> Auditable algorithms and documented protocols
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">—</span>
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Efficiency:</span> Minimal computational overhead
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">—</span>
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Resilience:</span> Graceful degradation under adversity
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border border-border bg-secondary/10">
            <CardHeader>
              <CardTitle className="text-base font-semibold text-foreground">
                Evaluation Standards
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">—</span>
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Academic rigor:</span> Peer-reviewed research foundation
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">—</span>
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Security audits:</span> Third-party cryptanalysis
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">—</span>
                  <span className="text-sm text-muted-foreground">
                    <span className="font-semibold text-foreground">Benchmarking:</span> Production performance metrics
                  </span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
