"use client";

import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { teamData } from "@/data/team";
import { Linkedin } from "lucide-react";

export const TeamSection: React.FC = () => {
  const preview = teamData.slice(0, 4);

  return (
    <section className="w-full bg-background py-24 md:py-32 animate-in fade-in" id="team">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-light text-primary tracking-tight">04</span>
            <div className="flex-1 h-[1px] bg-border" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-4">
            Leadership & Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Experienced engineers and researchers building production-grade systems with academic rigor and
            real-world focus.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {preview.map((m) => (
            <Card key={m.id} className="bg-card border border-border p-4">
              <CardHeader className="flex items-start gap-4 p-0">
                <Avatar className="w-12 h-12 flex items-center justify-center bg-secondary/10 text-foreground text-xl">
                  <span aria-hidden>{m.avatar}</span>
                </Avatar>
                <div>
                  <h3 className="text-base font-semibold text-foreground">{m.name}</h3>
                  <p className="text-xs text-muted-foreground">{m.role}</p>
                </div>
              </CardHeader>

              <CardContent className="p-0 mt-4">
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.bio}</p>

                <div className="flex items-center gap-3">
                  {m.linkedin && (
                    <a href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} LinkedIn`}>
                      <Button variant="ghost" className="p-2">
                        <Linkedin className="w-4 h-4 text-primary" />
                      </Button>
                    </a>
                  )}
                  {m.email && (
                    <a href={`mailto:${m.email}`} aria-label={`Email ${m.name}`}>
                      <Button variant="outline" className="text-muted-foreground">Contact</Button>
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a href="/Team">
            <Button className="bg-primary text-primary-foreground px-6 py-2">View full team</Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
