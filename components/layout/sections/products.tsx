"use client";

import React from "react";
import Link from "next/link";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { products } from "@/data/products";

// Small client-side helper to show featured products (data imported synchronously)
export const ProductsSection: React.FC = () => {
  const featured = products.filter((p) => p.featured);
  const preview = featured.slice(0, 3);

  return (
    <section className="w-full bg-background py-24 md:py-32 animate-in fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-4xl font-light text-primary tracking-tight">02</span>
            <div className="flex-1 h-[1px] bg-border" />
          </div>

          <h2 className="text-4xl md:text-5xl font-semibold text-foreground tracking-tight mb-4">
            Products & Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            Production-ready embedded hardware, Edge AI modules and specialized prototypes for
            industrial-grade deployments. Minimal, secure, and designed for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {preview.map((p) => (
            <Card key={p.id} className="bg-card border border-border overflow-hidden">
              <div className="relative h-44 w-full bg-slate-800/30">
                {/* Use Next/Image when external domains allowed — fallback to img if needed */}
                <img
                  src={p.headerImage}
                  alt={p.title}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-1">{p.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {p.description.length > 120 ? p.description.slice(0, 120) + "..." : p.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {(p.tags || []).slice(0, 3).map((t) => (
                        <Badge key={t} variant="outline" className="text-xs">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <div className="text-sm text-muted-foreground">{p.inStock ? "In stock" : "Prototype"}</div>
                  <div className="flex items-center gap-3">
                    <Link href={`/products`} className="inline-block">
                      <Button variant="ghost" className="text-primary/90">View all</Button>
                    </Link>
                    <Link href={`/products`} className="inline-block">
                      <Button className="bg-primary text-primary-foreground">View product</Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-6">
          <Link href="/products">
            <Button className="bg-primary text-primary-foreground px-8 py-3 font-semibold">Browse full catalog</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
