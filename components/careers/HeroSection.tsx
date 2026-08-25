import React from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroSectionProps {
  onViewPositions: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onViewPositions }) => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary/5"></div>
      <div className="max-w-4xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-7xl font-light text-foreground mb-8 tracking-tight font-display">
            Lead with
            <span className="block font-bold text-primary mt-2">
              Ecocee
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Join our leadership team and drive innovation in AI/ML, embedded systems, and IoT solutions. 
            Shape the future of technology while building a sustainable startup.
          </p>
          <motion.button
            onClick={onViewPositions}
            className="inline-flex items-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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