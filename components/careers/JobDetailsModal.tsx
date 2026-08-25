import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, FileText, MapPin, Clock, Check, CheckCircle, ArrowRight, Award, Star, Target, Shield } from "lucide-react";
import { type LeadPosition } from "@/data/careers";

interface JobDetailsModalProps {
  job: LeadPosition | null;
  onClose: () => void;
  onApply: (positionTitle: string) => void;
}

const JobDetailsModal: React.FC<JobDetailsModalProps> = ({ job, onClose, onApply }) => {
  return (
    <AnimatePresence>
      {job && (
        <motion.div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-card border border-border rounded-3xl p-8 max-w-4xl w-full my-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
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
                  <h3 className="text-2xl font-bold text-foreground font-display">{job.title}</h3>
                  <p className="text-muted-foreground">{job.department} • {job.type}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-secondary rounded-full transition-colors"
                type="button"
              >
                <X className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center font-display">
                  <FileText className="w-5 h-5 mr-2 text-primary" />
                  Description
                </h4>
                <p className="text-muted-foreground leading-relaxed">{job.description}</p>
              </div>

              <div className="flex flex-wrap gap-6 text-muted-foreground">
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{job.location}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{job.experience} Experience</span>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center font-display">
                  <Check className="w-5 h-5 mr-2 text-primary" />
                  Skills Required
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {job.skills.map((skill, index) => (
                    <div key={index} className="flex items-center text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 text-primary" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center font-display">
                  <Shield className="w-5 h-5 mr-2 text-primary" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center font-display">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Learning Outcomes
                </h4>
                <ul className="space-y-2">
                  {job.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <Star className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-foreground mb-3 flex items-center font-display">
                  <Target className="w-5 h-5 mr-2 text-primary" />
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => onApply(job.title)}
                className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Apply Now
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JobDetailsModal; 