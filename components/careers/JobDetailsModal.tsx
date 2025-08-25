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
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-gray-900 border border-green-600/30 rounded-3xl p-8 max-w-4xl w-full my-8 shadow-2xl max-h-[90vh] overflow-y-auto"
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
                  <job.icon className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                  <p className="text-gray-400">{job.department} • {job.type}</p>
                </div>
              </div>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                type="button"
              >
                <X className="w-6 h-6 text-gray-400" />
              </button>
            </div>

            <div className="space-y-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-green-400" />
                  Description
                </h4>
                <p className="text-gray-300 leading-relaxed">{job.description}</p>
              </div>

              <div className="flex flex-wrap gap-6 text-gray-400">
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
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Check className="w-5 h-5 mr-2 text-green-400" />
                  Skills Required
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {job.skills.map((skill, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 text-green-500" />
                      {skill}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Shield className="w-5 h-5 mr-2 text-green-400" />
                  Key Responsibilities
                </h4>
                <ul className="space-y-2">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <ArrowRight className="w-4 h-4 mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-green-400" />
                  Learning Outcomes
                </h4>
                <ul className="space-y-2">
                  {job.learningOutcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <Star className="w-4 h-4 mr-2 mt-0.5 text-yellow-500 flex-shrink-0" />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3 flex items-center">
                  <Target className="w-5 h-5 mr-2 text-green-400" />
                  Requirements
                </h4>
                <ul className="space-y-2">
                  {job.requirements.map((requirement, index) => (
                    <li key={index} className="flex items-start text-gray-300">
                      <CheckCircle className="w-4 h-4 mr-2 mt-0.5 text-blue-500 flex-shrink-0" />
                      {requirement}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => onApply(job.title)}
                className="px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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