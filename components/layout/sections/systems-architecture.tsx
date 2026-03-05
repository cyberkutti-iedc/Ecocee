"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export const SystemsArchitectureSection = () => {
  return (
    <section className="w-full bg-background py-24 md:py-32 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-light text-primary tracking-tight">03</span>
            <Separator className="flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Systems Architecture
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Our infrastructure follows a three-layer architectural model designed for modularity, 
            scalability, and independent optimization of each concern.
          </p>
        </div>

        {/* Architecture Diagram with Tabs */}
        <Tabs defaultValue="overview" className="space-y-8">
          <TabsList className="grid w-full max-w-2xl grid-cols-3 bg-secondary/30 p-1 rounded-lg">
            <TabsTrigger value="overview" className="text-sm">Overview</TabsTrigger>
            <TabsTrigger value="layers" className="text-sm">Architectural Layers</TabsTrigger>
            <TabsTrigger value="interactions" className="text-sm">Layer Interactions</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Layer 1 */}
              <Card className="border border-border bg-card">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-primary" />
                    <Badge variant="outline" className="text-xs">Layer 1</Badge>
                  </div>
                  <CardTitle className="text-base font-semibold">Core Infrastructure</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Hardware abstraction, network routing, and persistent storage layer.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>Physical resource management</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>Network topology optimization</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>Storage consistency protocols</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Layer 2 */}
              <Card className="border border-border bg-card md:ring-2 md:ring-primary/20">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-primary/90" />
                    <Badge variant="outline" className="text-xs">Layer 2</Badge>
                  </div>
                  <CardTitle className="text-base font-semibold">Intelligence Layer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Decision-making, consensus mechanisms, and system optimization.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>Distributed consensus algorithms</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>Adaptive optimization engines</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>Fault detection and recovery</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Layer 3 */}
              <Card className="border border-border bg-card">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 rounded-full bg-primary/80" />
                    <Badge variant="outline" className="text-xs">Layer 3</Badge>
                  </div>
                  <CardTitle className="text-base font-semibold">Orchestration Layer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground">
                    Application deployment, service mesh, and policy enforcement.
                  </p>
                  <ul className="space-y-2 text-xs text-muted-foreground">
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>Workload orchestration</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>Policy enforcement engines</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-primary">→</span>
                      <span>Service-to-service communication</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="layers" className="space-y-6">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-base font-semibold">Detailed Layer Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Core Infrastructure Layer</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Responsible for low-level resource management and network protocols. This layer abstracts physical 
                      hardware heterogeneity and provides unified interfaces for higher layers.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">Network: P2P mesh topology</p>
                      </div>
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">Storage: Distributed ledger</p>
                      </div>
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">Compute: Heterogeneous devices</p>
                      </div>
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">Consensus: Byzantine fault-tolerant</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Intelligence Layer</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Implements decision-making algorithms and adaptive control systems that optimize overall 
                      infrastructure performance while maintaining security and resilience constraints.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">Consensus: Proof-of-work/stake</p>
                      </div>
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">Optimization: Gradient descent</p>
                      </div>
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">State Management: Merkle trees</p>
                      </div>
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">Security: Threshold cryptography</p>
                      </div>
                    </div>
                  </div>

                  <Separator className="my-4" />

                  <div>
                    <h4 className="font-semibold text-sm text-foreground mb-2">Orchestration Layer</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Manages application lifecycle, enforces policies, and provides abstractions for developers 
                      to deploy and manage services across the infrastructure.
                    </p>
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">Scheduling: Multi-objective</p>
                      </div>
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">Service mesh: Zero-trust</p>
                      </div>
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">APIs: GraphQL/REST</p>
                      </div>
                      <div className="bg-secondary/20 p-2 rounded border border-border">
                        <p className="font-mono text-muted-foreground">Observability: Distributed tracing</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="interactions" className="space-y-6">
            <Card className="border border-border bg-card">
              <CardHeader>
                <CardTitle className="text-base font-semibold">Cross-Layer Communication Patterns</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex gap-4 p-4 bg-secondary/20 rounded border border-border">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">1</div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Infrastructure → Intelligence</p>
                      <p className="text-xs text-muted-foreground">Network metrics, resource availability, and fault signals propagate upward enabling intelligent decision-making.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-secondary/20 rounded border border-border">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">2</div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Intelligence → Orchestration</p>
                      <p className="text-xs text-muted-foreground">Optimization decisions and resource allocations are communicated as policy directives to the orchestration layer.</p>
                    </div>
                  </div>

                  <div className="flex gap-4 p-4 bg-secondary/20 rounded border border-border">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-semibold text-primary">3</div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-1">Orchestration → Infrastructure</p>
                      <p className="text-xs text-muted-foreground">Service deployment and network configuration commands flow down to the infrastructure layer for execution.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};
