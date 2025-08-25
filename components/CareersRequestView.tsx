"use client";

import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Alert } from "@/components/ui/alert";
import { motion, AnimatePresence } from "framer-motion";
import { CareerApplication } from "@/types/careers";
// Lucide icons
import {
  Linkedin,
  Github,
  FileText,
  Mail,
  UserCheck,
  UserX,
  ExternalLink
} from "lucide-react";



interface CareersRequestViewProps {
  applications: CareerApplication[];
}

type InternApplication = {
  id: string;
  full_name: string;
  age: number;
  dob: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  district: string;
  address: string;
  gender: string;
  institution_name: string;
  degree: string;
  department: string;
  current_year: string;
  area_of_interest: string;
  institute_id: string | null;
  approval_letter: string | null;
  resume: string;
  linkedin_profile: string;
  github_profile: string;
  portfolio: string | null;
  referral_id: string | null;
  position_applied: string;
  agreement: boolean;
  created_at: string;
};

export default function CareersRequestView({ applications }: CareersRequestViewProps) {
  const { user } = useUser();
  const [data, setData] = useState<InternApplication[]>([]);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (user?.publicMetadata?.status === "admin") {
      fetch("/api/fetchcareers")
        .then((res) => res.json())
        .then((d) => {
          if (Array.isArray(d)) setData(d);
        });
    }
  }, [user]);

  if (!user) return <Alert variant="default">Loading...</Alert>;
  if (user?.publicMetadata?.status !== "admin") {
    return <Alert variant="destructive">You are not authorized to view this page.</Alert>;
  }

  const filtered = data.filter((item) =>
    item.full_name.toLowerCase().includes(search.toLowerCase()) ||
    item.email.toLowerCase().includes(search.toLowerCase()) ||
    item.position_applied.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-primary drop-shadow-lg tracking-tight">
        Careers Request Box
      </h1>

      <div className="flex justify-center mb-8">
        <Input
          placeholder="🔍 Search by name, email, or position..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-lg rounded-full px-6 py-3 shadow-lg border-2 border-primary/30 focus:border-primary transition"
        />
      </div>

      {filtered.length === 0 && (
        <Alert variant="default" className="text-center">
          No applications found.
        </Alert>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filtered.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Card
              className={`transition-all duration-300 border-2 border-primary/20 rounded-3xl shadow-xl bg-gradient-to-br from-background via-muted/40 to-background hover:shadow-2xl ${
                expanded === item.id ? "ring-2 ring-primary/40 scale-[1.02]" : ""
              }`}
            >
              <CardHeader
                onClick={() => setExpanded(expanded === item.id ? null : item.id)}
                className="flex items-center gap-6 cursor-pointer hover:bg-primary/10 rounded-2xl p-6 transition"
              >
                <img
                  src={`https://ui-avatars.com/api/?name=${encodeURIComponent(item.full_name)}&background=random`}
                  alt={item.full_name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-primary/30 shadow-lg"
                />
                <div className="flex-1">
                  <div className="text-xl font-bold text-primary">{item.full_name}</div>
                  <div className="text-base text-muted-foreground">{item.position_applied}</div>
                  <Badge variant="outline" className="mt-2 px-3 py-1 bg-primary/10 text-primary border-primary/30">
                    <Mail className="inline mr-1 w-4 h-4" /> {item.email}
                  </Badge>
                </div>
                <Button variant="ghost" size="icon" aria-label="Expand" className="text-primary text-2xl">
                  <span className={`transform transition-transform ${expanded === item.id ? "rotate-180" : ""}`}>▼</span>
                </Button>
              </CardHeader>

              <AnimatePresence initial={false}>
                {expanded === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardContent className="px-8 pb-4 pt-2 grid grid-cols-1 md:grid-cols-2 gap-4 text-base text-muted-foreground">
                      <div><b>Age:</b> {item.age}</div>
                      <div><b>DOB:</b> {item.dob}</div>
                      <div><b>Phone:</b> <a href={`tel:${item.phone}`} className="text-primary underline">{item.phone}</a></div>
                      <div><b>Country:</b> {item.country}</div>
                      <div><b>State:</b> {item.state}</div>
                      <div><b>District:</b> {item.district}</div>
                      <div className="md:col-span-2"><b>Address:</b> {item.address}</div>
                      <div><b>Gender:</b> {item.gender}</div>
                      <div><b>Institution:</b> {item.institution_name}</div>
                      <div><b>Degree:</b> {item.degree}</div>
                      <div><b>Department:</b> {item.department}</div>
                      <div><b>Year:</b> {item.current_year}</div>
                      <div><b>Interests:</b> <Badge className="bg-primary/10 text-primary">{item.area_of_interest}</Badge></div>
                      <div className="flex items-center gap-2">
                        <b>Resume:</b>
                        <a href={item.resume} target="_blank" className="text-primary underline flex items-center gap-1">
                          <FileText className="w-4 h-4" /> View
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <b>LinkedIn:</b>
                        <a href={item.linkedin_profile} target="_blank" className="text-blue-700 underline flex items-center gap-1">
                          <Linkedin className="w-4 h-4" /> Profile
                        </a>
                      </div>
                      <div className="flex items-center gap-2">
                        <b>GitHub:</b>
                        <a href={item.github_profile} target="_blank" className="text-gray-700 underline flex items-center gap-1">
                          <Github className="w-4 h-4" /> Profile
                        </a>
                      </div>
                      {item.portfolio && (
                        <div className="flex items-center gap-2">
                          <b>Portfolio:</b>
                          <a href={item.portfolio} target="_blank" className="text-green-700 underline flex items-center gap-1">
                            <ExternalLink className="w-4 h-4" /> Link
                          </a>
                        </div>
                      )}
                      {item.approval_letter && (
                        <div className="flex items-center gap-2">
                          <b>Approval Letter:</b>
                          <a href={item.approval_letter} target="_blank" className="text-primary underline flex items-center gap-1">
                            <FileText className="w-4 h-4" /> View
                          </a>
                        </div>
                      )}
                      <div><b>Referral ID:</b> {item.referral_id || "-"}</div>
                      <div>
                        <b>Agreement:</b>{" "}
                        {item.agreement ? (
                          <span className="text-green-600 font-bold">
                            <UserCheck className="inline w-4 h-4" /> Yes
                          </span>
                        ) : (
                          <span className="text-red-600 font-bold">
                            <UserX className="inline w-4 h-4" /> No
                          </span>
                        )}
                      </div>
                      <div><b>Submitted:</b> {new Date(item.created_at).toLocaleString()}</div>
                    </CardContent>
                    <CardFooter className="flex flex-wrap justify-end gap-3 px-8 pb-6 pt-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-2"
                        asChild
                      >
                        <a href={item.resume} target="_blank" rel="noopener noreferrer">
                          <FileText className="w-4 h-4" /> Download Resume
                        </a>
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="flex items-center gap-2"
                        asChild
                      >
                        <a href={`mailto:${item.email}`}>
                          <Mail className="w-4 h-4" /> Contact
                        </a>
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        <UserX className="w-4 h-4" /> Reject
                      </Button>
                    </CardFooter>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
