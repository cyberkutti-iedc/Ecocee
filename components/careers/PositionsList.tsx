import React from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Award, ArrowRight } from "lucide-react";
import { type LeadPosition } from "@/data/careers";

interface PositionsListProps {
  positions: LeadPosition[];
  onJobClick: (job: LeadPosition) => void;
}

const PositionsList: React.FC<PositionsListProps> = ({ positions, onJobClick }) => {
  return (
    <section className="py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-foreground mb-4 font-display">Leadership Opportunities</h2>
          <p className="text-muted-foreground text-xl">Lead teams, drive growth, and make a significant impact in cutting-edge technology</p>
        </motion.div>

        <div className="space-y-6">
          {positions.map((job, index) => (
            <motion.div
              key={job.id}
              className="group cursor-pointer"
              onClick={() => onJobClick(job)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
            >
              <div className="bg-card backdrop-blur-sm border border-border rounded-2xl p-8 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`p-3 rounded-xl mr-4 ${
                        job.category === 'business' 
                          ? 'bg-gradient-to-r from-blue-900/50 to-indigo-900/50 border border-blue-500/30' 
                          : job.category === 'marketing'
                          ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-500/30'
                          : 'bg-gradient-to-r from-green-900/50 to-emerald-900/50 border border-green-500/30'
                      }`}>
                        <job.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-foreground font-display group-hover:text-primary transition-colors">{job.title}</h3>
                        <p className="text-muted-foreground">{job.department} • {job.type}</p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{job.description}</p>

                    <div className="flex flex-wrap gap-6 mb-6 text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{job.experience} Experience</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        <span className="capitalize">{job.category} Leadership</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.slice(0, 4).map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className={`px-4 py-2 text-sm rounded-full font-medium ${
                            job.category === 'business'
                              ? 'bg-blue-900/30 text-blue-300 border border-blue-500/30'
                              : job.category === 'marketing'
                              ? 'bg-purple-900/30 text-purple-300 border border-purple-500/30'
                              : 'bg-green-900/30 text-green-300 border border-green-500/30'
                          }`}
                        >
                          {skill}
                        </span>
                      ))}
                      {job.skills.length > 4 && (
                        <span className="px-4 py-2 bg-secondary text-secondary-foreground text-sm rounded-full border border-border/50">+{job.skills.length - 4}</span>
                      )}
                    </div>
                  </div>

                  <div className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PositionsList; 