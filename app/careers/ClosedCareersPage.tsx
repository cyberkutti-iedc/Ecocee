import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Briefcase, Clock, Mail, Users, Target, Sparkles } from "lucide-react";

const ClosedCareersPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
      
      {/* Subtle Ambient Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-1/4 w-[30rem] h-[30rem] bg-secondary/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/50 border border-border mb-12 backdrop-blur-sm"
            >
              <Clock className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium text-foreground tracking-wide uppercase">
                Opening Soon
              </span>
            </motion.div>

            {/* Floating Icon */}
            <div className="relative mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="w-24 h-24 mx-auto rounded-2xl bg-card border border-border shadow-xl flex items-center justify-center relative z-10"
              >
                <Sparkles className="w-10 h-10 text-primary" />
              </motion.div>
            </div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 text-foreground tracking-tight font-display leading-[1.1]"
            >
              We're Building
              <br />
              <span className="text-primary mt-2 block">
                The Future
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-xl text-muted-foreground mb-12 font-medium max-w-xl mx-auto leading-relaxed"
            >
              Ecocee is expanding. Amazing opportunities in AI/ML, embedded systems, and IoT are on the horizon.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-16"
            >
              <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Join Our Team</h3>
                <p className="text-sm text-muted-foreground">Work alongside passionate innovators.</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Build Innovation</h3>
                <p className="text-sm text-muted-foreground">Tackle complex real-world challenges.</p>
              </div>
              <div className="flex flex-col items-center p-6 rounded-2xl bg-card border border-border shadow-sm hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Make Impact</h3>
                <p className="text-sm text-muted-foreground">Deliver solutions that matter.</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center w-full"
            >
              <motion.a
                href="mailto:info@ecocee.in"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-2xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
              >
                <Mail className="w-5 h-5 mr-3" />
                Get Notified
              </motion.a>
              
              <motion.a
                href="/"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-2xl bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all w-full sm:w-auto"
              >
                <ArrowRight className="w-5 h-5 mr-3 rotate-180" />
                Back to Home
              </motion.a>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClosedCareersPage;