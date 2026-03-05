"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export const InfrastructureVisionSection = () => {
  return (
    <section className="w-full bg-background py-24 md:py-32 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-light text-primary tracking-tight">02</span>
            <Separator className="flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            Infrastructure Vision
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            We envision a computing paradigm where infrastructure is adaptive, self-healing, and intelligently 
            distributed. Our research drives toward systems that can optimize themselves in real-time while 
            maintaining cryptographic security and operational resilience.
          </p>
        </div>

        {/* Vision Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Adaptive Systems</h3>
                <p className="text-sm text-muted-foreground">
                  Infrastructure that learns from operational patterns and optimizes resource allocation dynamically.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Distributed Intelligence</h3>
                <p className="text-sm text-muted-foreground">
                  Decision-making capability distributed across nodes without central control dependencies.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Cryptographic Foundation</h3>
                <p className="text-sm text-muted-foreground">
                  Security architecture built from first principles with quantum-resistant algorithms.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Operational Resilience</h3>
                <p className="text-sm text-muted-foreground">
                  Systems designed to gracefully degrade and recover from cascading failures across distributed networks.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Scale at Edge</h3>
                <p className="text-sm text-muted-foreground">
                  Infrastructure that maintains performance and security properties across millions of distributed nodes.
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-2">Verifiable Computation</h3>
                <p className="text-sm text-muted-foreground">
                  Zero-knowledge proofs and cryptographic verification enabling trust in distributed computation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Focus */}
        <Card className="border border-border bg-card">
          <CardHeader>
            <CardTitle className="text-base font-semibold text-foreground">
              Research Horizon: 3-7 Year Vision
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">
              Our infrastructure research aims to enable a computing model where billions of nodes operate 
              cohesively without central coordination, maintain security through cryptographic primitives rather 
              than perimeter defense, and optimize globally while computing locally.
            </p>
            <div className="pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">
                Research Partners: Academic institutions and enterprise infrastructure providers
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
