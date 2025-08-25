import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onViewPositions: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onViewPositions }) => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/10 to-emerald-600/10"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-light text-white mb-8 tracking-tight">
            Lead with
            <span className="block font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Ecocee
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our leadership team and drive innovation in AI/ML, embedded systems, and IoT solutions. 
            Shape the future of technology while building a sustainable startup.
          </p>
          <motion.button
            onClick={onViewPositions}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold rounded-2xl hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Leadership Positions
            <ChevronDown className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection; 