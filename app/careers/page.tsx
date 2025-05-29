"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Code, Cpu, Users, Mail, Calendar, X, MapPin, Clock, Award } from "lucide-react";

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
  gradient: string;
}

const CareerPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<InternshipPosition | null>(null);

  const internshipPositions: InternshipPosition[] = [
    {
      id: 1,
      title: "Software Development Intern",
      department: "Software Engineering",
      type: "Internship",
      location: "Remote/Hybrid",
      duration: "3-6 months",
      icon: <Code className="w-6 h-6" />,
      description: "Join our software development team to work on cutting-edge web and mobile applications.",
      skills: ["React.js", "Node.js", "Python", "JavaScript", "Git"],
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      title: "Embedded Systems Intern",
      department: "Hardware Engineering",
      type: "Internship", 
      location: "On-site",
      duration: "4-6 months",
      icon: <Cpu className="w-6 h-6" />,
      description: "Work with our embedded systems team on IoT solutions and hardware programming.",
      skills: ["C/C++", "Arduino", "Raspberry Pi", "MQTT", "Sensors"],
      gradient: "from-green-500 to-teal-600"
    },
    {
      id: 3,
      title: "IoT Solutions Intern",
      department: "Product Development",
      type: "Internship",
      location: "Hybrid",
      duration: "3-5 months", 
      icon: <Users className="w-6 h-6" />,
      description: "Contribute to innovative IoT solutions and help shape the future of connected devices.",
      skills: ["IoT Protocols", "Cloud Platforms", "Data Analytics", "Python", "AWS/Azure"],
      gradient: "from-orange-500 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const handleJobClick = (job: InternshipPosition): void => {
    setSelectedJob(job);
  };

  const closeModal = (): void => {
    setSelectedJob(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <motion.div 
        className="relative overflow-hidden bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Build Your
                <span className="block bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  Future
                </span>
              </h1>
            </motion.div>
            <motion.p 
              className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              Join Ecocee, an innovative MSME specializing in embedded systems and IoT solutions. 
              Shape the future of connected technology with us.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={itemVariants}
            >
              <button 
                className="px-8 py-4 bg-white text-purple-600 font-semibold rounded-full hover:bg-gray-100 transition-colors transform hover:scale-105" 
                type="button"
              >
                Explore Opportunities
              </button>
              <button 
                className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-purple-600 transition-colors" 
                type="button"
              >
                Learn About Us
              </button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-blue-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </motion.div>

      {/* Career Opportunities */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Internship Opportunities
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Kickstart your career with hands-on experience in cutting-edge technology. 
            Learn, grow, and innovate with industry experts.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {internshipPositions.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              className="group cursor-pointer"
              onClick={() => handleJobClick(job)}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${job.gradient} p-1`}>
                <div className="bg-slate-800/90 backdrop-blur rounded-2xl p-8 h-full">
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3 bg-white/10 rounded-xl">
                      {job.icon}
                    </div>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 text-sm font-medium rounded-full">
                      {job.type}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 group-hover:bg-clip-text transition-all duration-300">
                    {job.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {job.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Clock className="w-4 h-4 mr-2" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.slice(0, 3).map((skill, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-white/10 text-white text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                    {job.skills.length > 3 && (
                      <span className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full">
                        +{job.skills.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button 
                    className="w-full py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-xl transition-colors group-hover:bg-white group-hover:text-slate-800" 
                    type="button"
                  >
                    Apply Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Company Stats */}
      <motion.div 
        className="bg-slate-800/50 backdrop-blur"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Projects Delivered" },
              { number: "5+", label: "Team Members" },
              { number: "15+", label: "Technologies" },
              { number: "100%", label: "Client Satisfaction" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Modal for Job Details */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-slate-800 rounded-3xl p-8 max-w-lg w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Coming Soon!</h3>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-slate-700 rounded-full transition-colors"
                  type="button"
                >
                  <X className="w-6 h-6 text-gray-400" />
                </button>
              </div>
              
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-10 h-10 text-white" />
                </div>
                
                <h4 className="text-xl font-semibold text-white mb-4">
                  Career Applications Opening Soon!
                </h4>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Thank you for your interest in joining Ecocee! Our application forms will be opening in 
                  <span className="font-semibold text-purple-400"> June-July 2025</span>. 
                  Stay tuned for exciting opportunities ahead.
                </p>
                
                <div className="bg-slate-700/50 rounded-xl p-6 mb-6">
                  <h5 className="text-lg font-medium text-white mb-3">Get in Touch</h5>
                  <div className="flex items-center justify-center text-gray-300">
                    <Mail className="w-5 h-5 mr-2" />
                    <a 
                      href="mailto:ecoceeteam@gmail.com"
                      className="hover:text-purple-400 transition-colors"
                    >
                      ecoceeteam@gmail.com
                    </a>
                  </div>
                </div>
                
                <button 
                  onClick={closeModal}
                  className="w-full py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium rounded-xl hover:from-purple-600 hover:to-pink-600 transition-colors"
                  type="button"
                >
                  Stay Updated
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ecocee</h3>
            <p className="text-gray-400 mb-6">
              Innovative MSME specializing in embedded systems and IoT solutions
            </p>
            <div className="flex justify-center items-center text-gray-400">
              <Mail className="w-5 h-5 mr-2" />
              <a 
                href="mailto:ecoceeteam@gmail.com"
                className="hover:text-purple-400 transition-colors"
              >
                ecoceeteam@gmail.com
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareerPage;
