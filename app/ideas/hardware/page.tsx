"use client";

import { useRouter } from "next/navigation";
import { hardwareIdeas } from "@/data/hardwareList";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function HardwareList() {
  const router = useRouter();

  return (
    <section className="container mx-auto min-h-screen px-6 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center">Hardware Ideas</h1>
      <p className="text-lg text-center text-gray-600 mt-4">Explore and build amazing electronics projects.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {hardwareIdeas.map((idea) => (
          <Card key={idea.id} className="border rounded-lg shadow-md p-6">
            <CardHeader>
              <CardTitle className="text-xl font-semibold">{idea.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{idea.description}</p>
              <Button
                onClick={() => router.push(`/hardware/${idea.id}`)}
                className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
              >
                View Details <ArrowRight className="size-5" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
