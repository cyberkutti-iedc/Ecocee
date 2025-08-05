"use client";

import { useState, useEffect } from "react";
import { hardwareIdeas } from "@/data/hardwareList";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ChevronLeft, 
  ChevronRight, 
  Cpu, 
  Zap, 
  Settings,
  ArrowUpDown,
  Filter,
  Search
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Seo from "@/components/seo/Seo";

const ITEMS_PER_PAGE = 6;

type HardwareIdea = {
  id: number;
  title: string;
  description: string;
  platform: string;
  difficulty: string;
  category: string;
};

export default function HardwareList() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [filterPlatform, setFilterPlatform] = useState<string>("all");
  const [filterDifficulty, setFilterDifficulty] = useState<string>("all");
  const [filterCategory, setFilterCategory] = useState<string>("all");

  // Filter ideas based on search and filters
  const filteredIdeas = hardwareIdeas.filter((idea: HardwareIdea) => {
    const matchesSearch = idea.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlatform = filterPlatform === "all" || idea.platform === filterPlatform;
    const matchesDifficulty = filterDifficulty === "all" || idea.difficulty === filterDifficulty;
    const matchesCategory = filterCategory === "all" || idea.category === filterCategory;
    
    return matchesSearch && matchesPlatform && matchesDifficulty && matchesCategory;
  });

  const totalPages = Math.ceil(filteredIdeas.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedIdeas = filteredIdeas.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterPlatform, filterDifficulty, filterCategory]);

  const handlePageChange = (newPage: number) => {
    if (newPage > 0 && newPage <= totalPages) {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleExpand = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "beginner": return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case "intermediate": return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      case "advanced": return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200";
      case "expert": return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200";
      default: return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform.toLowerCase()) {
      case "arduino": return <Cpu className="w-4 h-4" />;
      case "esp32": return <Zap className="w-4 h-4" />;
      case "raspberry pi": return <Settings className="w-4 h-4" />;
      default: return <Cpu className="w-4 h-4" />;
    }
  };

  // Get unique values for filters
  const platforms = [...new Set(hardwareIdeas.map(idea => idea.platform))];
  const difficulties = [...new Set(hardwareIdeas.map(idea => idea.difficulty))];
  const categories = [...new Set(hardwareIdeas.map(idea => idea.category))];


  const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Ecocee",
  "url": "https://ecocee.in",
  "logo": "https://ecocee.in/icon.jpg",
  "sameAs": [
    // add social profiles if any
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91-9446715884",
    "contactType": "Customer Support"
  },
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kodungallur",
    "addressRegion": "Kerala",
    "addressCountry": "IN"
  },
  "description": "Kerala-based startup Ecocee specializes in embedded systems, IoT, AI, and custom technology solutions for innovative product development."
};

  return (
    
    <div className={`min-h-screen transition-colors duration-300 bg-gray-50 dark:bg-gray-900`}>
      <Seo
              title="Ecocee | Custom Embedded & IoT Solutions"
              description="Ecocee offers cutting-edge embedded systems and IoT development, delivering customized technology solutions for businesses seeking innovation."
              keywords={[
                "Ecocee",
                "IoT solutions",
                "embedded systems",
                "custom hardware",
                "technology innovation",
                "smart devices",
                "electronics engineering",
                "AI solutions",
                "machine learning",
                "industrial automation",
                "PCB design",
                "firmware development",
                "startup Kerala",
                "IoT company India",
                "embedded software",
                "product development",
                "hardware prototyping",
                "IoT consulting",
                "smart home",
                "smart industry"
              ]}
              canonical="https://ecocee.in"
              image="https://ecocee.in/icon.png"
              twitterHandle="@sreeraj_vr"
              siteName="Ecocee"
              structuredData={jsonLd}
            />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Hardware Ideas Collection
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Discover 100 innovative electronics projects across Arduino, ESP32, and Raspberry Pi platforms
          </p>
          
          <div className="flex flex-wrap justify-center gap-2 mt-4 text-sm text-gray-500 dark:text-gray-400">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              {hardwareIdeas.length} Total Ideas
            </span>
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              {filteredIdeas.length} Filtered Results
            </span>
          </div>
        </div>

        {/* Search and Filters */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-8 border dark:border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>

            {/* Platform Filter */}
            <Select value={filterPlatform} onValueChange={setFilterPlatform}>
              <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                <SelectValue placeholder="Platform" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                <SelectItem value="all">All Platforms</SelectItem>
                {platforms.map(platform => (
                  <SelectItem key={platform} value={platform}>{platform}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Difficulty Filter */}
            <Select value={filterDifficulty} onValueChange={setFilterDifficulty}>
              <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                <SelectValue placeholder="Difficulty" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                <SelectItem value="all">All Levels</SelectItem>
                {difficulties.map(difficulty => (
                  <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Category Filter */}
            <Select value={filterCategory} onValueChange={setFilterCategory}>
              <SelectTrigger className="dark:bg-gray-700 dark:border-gray-600">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="dark:bg-gray-700 dark:border-gray-600">
                <SelectItem value="all">All Categories</SelectItem>
                {categories.map(category => (
                  <SelectItem key={category} value={category}>{category}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Ideas Grid */}
        {paginatedIdeas.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 text-lg">
              No projects found matching your criteria
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-10">
            {paginatedIdeas.map((idea: HardwareIdea) => {
              const words = idea.description.split(" ");
              const shortDescription = words.slice(0, 15).join(" ") + (words.length > 15 ? "..." : "");
              
              return (
                <Card key={idea.id} className="group bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-xl overflow-hidden">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 text-xs font-semibold px-2 py-1">
                        #{idea.id.toString().padStart(3, '0')}
                      </Badge>
                      <div className="flex items-center gap-1 text-gray-500 dark:text-gray-400">
                        {getPlatformIcon(idea.platform)}
                        <span className="text-xs font-medium">{idea.platform}</span>
                      </div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {idea.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                      {expanded[idea.id] ? idea.description : shortDescription}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge className={getDifficultyColor(idea.difficulty)}>
                        {idea.difficulty}
                      </Badge>
                      <Badge variant="outline" className="text-xs dark:border-gray-600 dark:text-gray-300">
                        {idea.category}
                      </Badge>
                    </div>
                    
                    <Button
                      onClick={() => toggleExpand(idea.id)}
                      variant="ghost"
                      size="sm"
                      className="w-full text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
                    >
                      {expanded[idea.id] ? (
                        <>
                          <ArrowUpDown className="w-4 h-4 mr-1" />
                          Show Less
                        </>
                      ) : (
                        <>
                          <ArrowUpDown className="w-4 h-4 mr-1" />
                          View Details
                        </>
                      )}
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-12">
            <Button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              variant="outline"
              className="flex items-center gap-2 px-6 py-2 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Page <span className="font-semibold text-lg">{currentPage}</span> of{" "}
                <span className="font-semibold">{totalPages}</span>
              </span>
            </div>

            <Button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              variant="outline"
              className="flex items-center gap-2 px-6 py-2 dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 disabled:opacity-50"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        )}

        {/* Footer Stats */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 dark:text-gray-400">
            <span>Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredIdeas.length)} of {filteredIdeas.length} projects</span>
          </div>
        </div>
      </div>
    </div>
  );
}