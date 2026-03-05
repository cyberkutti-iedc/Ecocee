"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return setStatus("error");
    setStatus("loading");

    try {
      // placeholder for integration (e.g., Supabase, Mailchimp)
      await new Promise((res) => setTimeout(res, 700));
      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section className="w-full bg-background py-12 md:py-20 animate-in fade-in" aria-labelledby="newsletter-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-card border border-border">
          <CardHeader className="p-6 md:p-8">
            <h3 id="newsletter-heading" className="text-2xl font-semibold text-foreground">
              Stay informed — research updates & product news
            </h3>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
              Short, curated updates about our research, releases, and engineering insights. No spam — unsubscribe anytime.
            </p>
          </CardHeader>
          <CardContent className="p-6 md:px-8 md:py-6">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center">
              <label htmlFor="newsletter-email" className="sr-only">Email address</label>
              <Input
                id="newsletter-email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 min-w-0"
                aria-label="Email address"
              />

              <Button type="submit" className="h-11 bg-primary text-primary-foreground" disabled={status === "loading"}>
                {status === "loading" ? "Joining..." : "Subscribe"}
              </Button>
            </form>

            <div className="mt-3 text-sm" role="status" aria-live="polite">
              {status === "success" && <p className="text-emerald-400">Thanks — you'll receive our next update.</p>}
              {status === "error" && <p className="text-destructive">Please enter a valid email address.</p>}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
