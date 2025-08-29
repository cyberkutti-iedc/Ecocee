'use client';

// import { motion } from 'framer-motion'
// import { Terminal, Sparkles, ArrowRight } from 'lucide-react'

// interface HeroProps {
//   onJoinWaitlist: () => void
// }

// export default function Hero({ onJoinWaitlist }: HeroProps) {
//   return (
//     <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
//       <div className="max-w-6xl mx-auto text-center">
//         {/* Logo and Title */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="mb-8"
//         >
//           <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl mb-6">
//             <Terminal className="w-10 h-10 text-white" />
//           </div>
//           <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
//             KuttAI
//           </h1>
//           <p className="text-xl md:text-2xl text-slate-300 mb-2">
//             Your Offline AI Chat Companion
//           </p>
//           <p className="text-sm text-slate-400 max-w-2xl mx-auto">
//             Powered by an open-source Gemma model from Google DeepMind, customized by EcoCee for KTU students
//           </p>
//         </motion.div>

//         {/* Description */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="mb-12"
//         >
//           <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
//             Experience the power of AI in your command line. KuttAI brings intelligent conversations 
//             directly to your terminal, designed specifically for academic excellence and offline productivity.
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
//         >
//           <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
//             <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center mb-4">
//               <Terminal className="w-6 h-6 text-white" />
//             </div>
//             <h3 className="text-lg font-semibold text-white mb-2">CLI Interface</h3>
//             <p className="text-slate-300 text-sm">Native command-line experience for developers and power users</p>
//           </div>

//           <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
//             <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
//               <Sparkles className="w-6 h-6 text-white" />
//             </div>
//             <h3 className="text-lg font-semibold text-white mb-2">Offline First</h3>
//             <p className="text-slate-300 text-sm">Work without internet - all processing happens locally</p>
//           </div>

//           <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
//             <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
//               <Sparkles className="w-6 h-6 text-white" />
//             </div>
//             <h3 className="text-lg font-semibold text-white mb-2">KTU Optimized</h3>
//             <p className="text-slate-300 text-sm">Specifically trained for Kerala Technical University curriculum</p>
//           </div>
//         </motion.div>

//         {/* CTA Button */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.6 }}
//         >
//           <button
//             onClick={onJoinWaitlist}
//             className="group relative bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25"
//           >
//             <span className="flex items-center gap-2">
//               Join Beta Waitlist
//               <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//             </span>
//             <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
//           </button>
//           <p className="text-sm text-slate-400 mt-4">
//             Be among the first to experience the future of offline AI
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   )
// }
'use client';

import { useState, useEffect } from 'react';
import { Terminal, ChevronDown, Github, Download, Cpu } from 'lucide-react';

export default function HeroSection() {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'npx kuttai';

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + fullText[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, 100);
      
      return () => clearTimeout(timeout);
    }
    
    // Reset animation after completion
    const resetTimeout = setTimeout(() => {
      setCurrentText('');
      setCurrentIndex(0);
    }, 3000);
    
    return () => clearTimeout(resetTimeout);
  }, [currentIndex, fullText]);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-center relative bg-gradient-to-b from-black to-green-950">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1718241905696-cb34c2c07bed?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80')] bg-cover bg-center opacity-20"></div>
      
      <div className="relative z-10 text-center px-4 md:px-0">
        <div className="flex justify-center items-center mb-8">
          <Terminal className="h-16 w-16 text-green-500 mr-4" />
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-white">
            Kuttai
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl mb-8 text-green-200 max-w-3xl mx-auto">
          The free, open-source CLI AI chatbot that works offline with customizable models.
        </p>
        
        <div className="bg-black border border-green-700 rounded-lg p-6 mb-10 max-w-2xl mx-auto">
          <div className="flex items-center mb-2">
            <div className="flex space-x-2 mr-3">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-green-400 font-mono">terminal</span>
          </div>
          <div className="font-mono text-green-300">
            <span className="text-white">$ </span>
            {currentText}
            <span className="animate-pulse">▊</span>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <a 
            href="https://github.com/cyberkutti-iedc/kuttai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </a>
          <button className="flex items-center justify-center px-6 py-3 bg-transparent border border-green-600 hover:bg-green-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
            <Download className="mr-2 h-5 w-5" />
            Download
          </button>
          <button className="flex items-center justify-center px-6 py-3 bg-transparent border border-green-600 hover:bg-green-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
            <Cpu className="mr-2 h-5 w-5" />
            Models
          </button>
        </div>
      </div>
      
      <button 
        onClick={scrollToFeatures}
        className="absolute bottom-10 animate-bounce"
      >
        <ChevronDown className="h-10 w-10 text-green-500" />
      </button>
    </section>
  );
}