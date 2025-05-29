"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, Cpu, Users, Mail, Calendar, X, MapPin, Clock, ArrowRight } from "lucide-react";

interface InternshipPosition {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  duration: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

const CareerPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<InternshipPosition | null>(null);

  const internshipPositions: InternshipPosition[] = [
    {
      id: 1,
      title: "Software Development Intern",
      department: "Engineering",
      type: "Internship",
      location: "Remote/Hybrid",
      duration: "3-6 months",
      icon: <Code className="w-5 h-5" />,
      description: "Join our software development team to work on cutting-edge web and mobile applications.",
      skills: ["React.js", "Node.js", "Python", "JavaScript", "Git"]
    },
    {
      id: 2,
      title: "Embedded Systems Intern",
      department: "Hardware",
      type: "Internship", 
      location: "On-site",
      duration: "4-6 months",
      icon: <Cpu className="w-5 h-5" />,
      description: "Work with our embedded systems team on IoT solutions and hardware programming.",
      skills: ["C/C++", "Arduino", "Raspberry Pi", "MQTT", "Sensors"]
    },
    {
      id: 3,
      title: "IoT Solutions Intern",
      department: "Product",
      type: "Internship",
      location: "Hybrid",
      duration: "3-5 months", 
      icon: <Users className="w-5 h-5" />,
      description: "Contribute to innovative IoT solutions and help shape the future of connected devices.",
      skills: ["IoT Protocols", "Cloud Platforms", "Data Analytics", "Python", "AWS/Azure"]
    }
  ];

  const handleJobClick = (job: InternshipPosition): void => {
    setSelectedJob(job);
  };

  const closeModal = (): void => {
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
              Careers at
              <span className="block font-medium text-blue-600">Ecocee</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our team of innovators working on embedded systems and IoT solutions. 
              Build technology that makes a difference.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Internship Positions */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-medium text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 text-lg">
              Internship opportunities to kickstart your career
            </p>
          </motion.div>

          <div className="space-y-6">
            {internshipPositions.map((job, index) => (
              <motion.div
                key={job.id}
                className="group cursor-pointer"
                onClick={() => handleJobClick(job)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -2 }}
              >
                <div className="bg-white border border-gray-200 rounded-xl p-8 hover:border-blue-300 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="p-2 bg-blue-50 rounded-lg mr-4">
                          {job.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {job.department} • {job.type}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 mb-6 text-sm text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{job.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.slice(0, 4).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 4 && (
                          <span className="px-3 py-1 bg-gray-100 text-gray-500 text-sm rounded-full">
                            +{job.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-5 h-5 text-blue-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-medium text-gray-900 mb-6">
              About Ecocee
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              We are an innovative MSME specializing in embedded systems and IoT solutions. 
              Our team is passionate about creating technology that connects the physical and digital worlds, 
              making everyday life smarter and more efficient.
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:ecoceeteam@gmail.com"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Modal for Job Details */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-medium text-gray-900">Coming Soon</h3>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  type="button"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              <div className="text-center py-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-blue-600" />
                </div>
                
                <h4 className="text-lg font-medium text-gray-900 mb-4">
                  Applications Opening Soon
                </h4>
                
                <p className="text-gray-600 mb-8 leading-relaxed">
                  Thank you for your interest in joining Ecocee! Our application forms will be available in 
                  <span className="font-medium text-blue-600"> June-July 2025</span>.
                </p>
                
                <div className="bg-gray-50 rounded-xl p-6 mb-6">
                  <h5 className="font-medium text-gray-900 mb-3">Stay Connected</h5>
                  <div className="flex items-center justify-center text-gray-600">
                    <Mail className="w-4 h-4 mr-2" />
                    <a 
                      href="mailto:ecoceeteam@gmail.com"
                      className="hover:text-blue-600 transition-colors"
                    >
                      ecoceeteam@gmail.com
                    </a>
                  </div>
                </div>
                
                <button 
                  onClick={closeModal}
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-colors"
                  type="button"
                >
                  Got it
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-xl font-medium text-gray-900 mb-2">Ecocee</h3>
          <p className="text-gray-600 mb-4">
            Embedded Systems & IoT Solutions
          </p>
          <div className="flex justify-center items-center text-gray-500">
            <Mail className="w-4 h-4 mr-2" />
            <a 
              href="mailto:ecoceeteam@gmail.com"
              className="hover:text-blue-600 transition-colors"
            >
              ecoceeteam@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareerPage;
