"use client";

//import { useRouter } from "next/navigation";
import { useState } from "react";
import { hardwareIdeas } from "@/data/hardwareList";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {  ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 6;

type HardwareIdea = {
  id: number;
  title: string;
  description: string;
};

export default function HardwareList() {
  //const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});

  const totalPages = Math.ceil(hardwareIdeas.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedIdeas = hardwareIdeas.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="container mx-auto min-h-screen px-6 py-10">
      <h1 className="text-3xl md:text-5xl font-bold text-center">Hardware Ideas</h1>
      <p className="text-lg text-center text-gray-600 mt-4">
        Explore and build amazing electronics projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {paginatedIdeas.map((idea: HardwareIdea) => {
          const words = idea.description.split(" ");
          const shortDescription = words.slice(0, 10).join(" ") + (words.length > 10 ? "..." : "");
          return (
            <Card key={idea.id} className="border rounded-lg shadow-md p-6 transition hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{idea.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {expanded[idea.id] ? idea.description : shortDescription}
                </p>
                <Button
                  onClick={() => toggleExpand(idea.id)}
                  className="mt-2 text-blue-600 hover:underline"
                  variant="link"
                >
                  {expanded[idea.id] ? "Show Less" : "View Details"}
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="flex justify-center items-center gap-4 mt-10">
        <Button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          <ChevronLeft className="size-5" /> Prev
        </Button>

        <span className="text-lg font-semibold">
          Page {currentPage} of {totalPages}
        </span>

        <Button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 disabled:opacity-50"
        >
          Next <ChevronRight className="size-5" />
        </Button>
      </div>
    </section>
  );
}