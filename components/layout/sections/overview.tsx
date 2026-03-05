"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ArrowRight } from "lucide-react";

export const OverviewSection = () => {
  return (
    <section className="w-full bg-background py-24 md:py-32 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-light text-primary tracking-tight">01</span>
            <Separator className="flex-1 bg-border" />
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-6">
            What We Do
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
            Ecocee is an AI and edge computing research startup based in Kerala, India. 
            We develop intelligent edge devices and research next-generation AI solutions 
            for real-world applications.
          </p>
        </div>

        {/* Core Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-sm font-semibold text-primary uppercase tracking-wider">
                  Edge AI Devices
                </CardTitle>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Developing intelligent edge devices with embedded AI capabilities 
                for real-time processing and decision-making.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-sm font-semibold text-primary uppercase tracking-wider">
                  AI Research
                </CardTitle>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Researching machine learning algorithms optimized for resource-constrained 
                edge computing environments.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-border bg-card hover:shadow-lg transition-all duration-300 group">
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between">
                <CardTitle className="text-sm font-semibold text-primary uppercase tracking-wider">
                  IoT Solutions
                </CardTitle>
                <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Building connected IoT systems that bring intelligence to the edge 
                for industrial and enterprise applications.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Mission Statement */}
        <div className="border border-border rounded-lg p-8 md:p-12 bg-secondary\/10">
          <p className="text-base text-foreground leading-relaxed mb-4">
            <span className="font-semibold">Our Mission:</span> To advance AI and edge computing 
            technology by developing intelligent devices that solve real-world problems. 
            We believe the future belongs to smart, connected devices that can think and act locally.
          </p>
          <p className="text-sm text-muted-foreground">
            A research-driven startup committed to making AI accessible at the edge.
          </p>
        </div>
      </div>
    </section>
  );
};
