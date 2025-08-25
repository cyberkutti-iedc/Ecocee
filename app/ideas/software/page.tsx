"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { softwareIdeas } from "@/data/softwareList";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export default function SoftwareList() {
  const router = useRouter();
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(softwareIdeas.length / itemsPerPage);

  const paginatedIdeas = softwareIdeas.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <section className="container mx-auto min-h-screen px-6 py-10 bg-gray-100 dark:bg-[#0a0a0a] text-black dark:text-white">
      <motion.h1
        className="text-3xl md:text-5xl font-bold text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Software Ideas
      </motion.h1>
      <motion.p
        className="text-lg text-center text-gray-600 dark:text-gray-300 mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Explore and develop amazing software projects.
      </motion.p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {paginatedIdeas.map((idea, index) => (
          <motion.div
            key={idea.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="border rounded-lg shadow-md p-6 dark:bg-gray-900 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold">{idea.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-300">
                  {idea.description.length > 80 ? `${idea.description.slice(0, 80)}...` : idea.description}
                </p>
                <Button
                  onClick={() => router.push(`/ideas/software/${idea.id}`)}
                  className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  View Details <ArrowRight className="size-5" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center mt-8 gap-4">
        <Button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
          className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-black dark:text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="size-5" /> Previous
        </Button>
        <span className="text-lg font-semibold">{page} / {totalPages}</span>
        <Button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
          className="bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600 text-black dark:text-white px-4 py-2 rounded-lg flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next <ChevronRight className="size-5" />
        </Button>
      </div>
    </section>
  );
}
