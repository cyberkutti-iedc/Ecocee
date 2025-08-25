'use client'

import { motion } from 'framer-motion'
import { Terminal, Sparkles, ArrowRight } from 'lucide-react'

interface HeroProps {
  onJoinWaitlist: () => void
}

export default function Hero({ onJoinWaitlist }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        {/* Logo and Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-2xl mb-6">
            <Terminal className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
            KuttAI
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-2">
            Your Offline AI Chat Companion
          </p>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Powered by an open-source Gemma model from Google DeepMind, customized by EcoCee for KTU students
          </p>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12"
        >
          <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Experience the power of AI in your command line. KuttAI brings intelligent conversations 
            directly to your terminal, designed specifically for academic excellence and offline productivity.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-green-500 rounded-lg flex items-center justify-center mb-4">
              <Terminal className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">CLI Interface</h3>
            <p className="text-slate-300 text-sm">Native command-line experience for developers and power users</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Offline First</h3>
            <p className="text-slate-300 text-sm">Work without internet - all processing happens locally</p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">KTU Optimized</h3>
            <p className="text-slate-300 text-sm">Specifically trained for Kerala Technical University curriculum</p>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <button
            onClick={onJoinWaitlist}
            className="group relative bg-gradient-to-r from-emerald-500 to-blue-500 hover:from-emerald-400 hover:to-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-emerald-500/25"
          >
            <span className="flex items-center gap-2">
              Join Beta Waitlist
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-blue-400 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity -z-10"></div>
          </button>
          <p className="text-sm text-slate-400 mt-4">
            Be among the first to experience the future of offline AI
          </p>
        </motion.div>
      </div>
    </section>
  )
}