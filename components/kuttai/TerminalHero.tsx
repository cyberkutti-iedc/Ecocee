'use client'

import { motion } from 'framer-motion'
import { Terminal, Play, Code, Database, Zap } from 'lucide-react'

interface TerminalHeroProps {
  onJoinWaitlist: () => void
  terminalLines: string[]
}

export default function TerminalHero({ onJoinWaitlist, terminalLines }: TerminalHeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center p-4 relative">
      <div className="max-w-7xl mx-auto w-full">
        
        {/* Main Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="terminal-window bg-gray-900 rounded-lg overflow-hidden border border-green-500/40 shadow-2xl mb-8"
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-green-500/30">
            <div className="flex items-center gap-3">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm">kuttai@system:~$</span>
              <div className="text-xs text-gray-400">- Terminal v2.1.0</div>
            </div>
            <div className="flex items-center gap-2">
              <button className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors"></button>
              <button className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors"></button>
              <button className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors"></button>
            </div>
          </div>

          {/* Terminal Content */}
          <div className="p-6 h-80 bg-black relative">
            <div className="space-y-2 text-sm">
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.8, duration: 0.5 }}
                  className="text-green-400"
                >
                  {line && <span className="text-green-600 mr-2">$</span>}
                  {line}
                </motion.div>
              ))}
              {terminalLines.length > 0 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: terminalLines.length * 0.8 }}
                  className="text-green-400 terminal-cursor"
                >
                  <span className="text-green-600 mr-2">$</span>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Main Title and Description */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-8xl md:text-9xl font-bold mb-8 glitch">
            <span className="text-green-400 glow-text">Kutt</span>
            <span className="text-white">AI</span>
          </h1>
          
          <div className="bg-gray-900/80 border border-green-500/30 rounded-lg p-6 mb-8 max-w-4xl mx-auto backdrop-blur-sm">
            <p className="text-2xl md:text-3xl text-green-400 mb-4 font-mono">
              &gt; The Future of Offline AI Chat
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Experience intelligent conversations directly in your terminal. Built on Google's Gemma model, 
              customized by EcoCee for Kerala Technical University students. Your AI assistant that works 
              completely offline with zero compromise on privacy.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2 }}
              className="floating-code bg-gray-900/90 border border-green-500/30 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300"
            >
              <Terminal className="w-8 h-8 text-green-400 mb-3 mx-auto" />
              <div className="text-green-400 font-mono text-sm mb-2">$ ./cli --native</div>
              <div className="text-gray-300 text-xs">Pure terminal experience</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.2 }}
              className="floating-code bg-gray-900/90 border border-green-500/30 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300"
            >
              <Database className="w-8 h-8 text-blue-400 mb-3 mx-auto" />
              <div className="text-blue-400 font-mono text-sm mb-2">$ ./offline --mode</div>
              <div className="text-gray-300 text-xs">Zero internet required</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.4 }}
              className="floating-code bg-gray-900/90 border border-green-500/30 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300"
            >
              <Code className="w-8 h-8 text-purple-400 mb-3 mx-auto" />
              <div className="text-purple-400 font-mono text-sm mb-2">$ ./ktu --optimize</div>
              <div className="text-gray-300 text-xs">Academic focused AI</div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.6 }}
              className="floating-code bg-gray-900/90 border border-green-500/30 rounded-lg p-4 hover:border-green-500/50 transition-all duration-300"
            >
              <Zap className="w-8 h-8 text-yellow-400 mb-3 mx-auto" />
              <div className="text-yellow-400 font-mono text-sm mb-2">$ ./speed --max</div>
              <div className="text-gray-300 text-xs">&lt;200ms responses</div>
            </motion.div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="space-y-6"
          >
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={onJoinWaitlist}
                className="group relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-black px-10 py-4 rounded-lg font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/50 font-mono"
              >
                <span className="flex items-center gap-3">
                  <Play className="w-6 h-6" />
                  ./join-waitlist --beta
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 rounded-lg blur opacity-30 group-hover:opacity-60 transition-opacity -z-10"></div>
              </button>
            </div>

            {/* Status Information */}
            <div className="grid md:grid-cols-3 gap-4 max-w-3xl mx-auto">
              <div className="bg-gray-900/80 border border-green-500/30 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-green-400 font-mono text-lg font-bold">1,247</div>
                <div className="text-gray-400 text-sm">Beta Applicants</div>
              </div>
              <div className="bg-gray-900/80 border border-green-500/30 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-green-400 font-mono text-lg font-bold">99.9%</div>
                <div className="text-gray-400 text-sm">System Uptime</div>
              </div>
              <div className="bg-gray-900/80 border border-green-500/30 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-green-400 font-mono text-lg font-bold">&lt;200ms</div>
                <div className="text-gray-400 text-sm">Avg Response</div>
              </div>
            </div>

            {/* Beta Notice */}
            <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 max-w-2xl mx-auto backdrop-blur-sm">
              <div className="flex items-center justify-center gap-2 text-yellow-400 font-mono">
                <span className="animate-pulse">⚠</span>
                <span className="font-bold">BETA PROGRAM</span>
                <span className="animate-pulse">⚠</span>
              </div>
              <p className="text-yellow-300 text-sm mt-2 text-center">
                Limited access program. Join waitlist for early access to KuttAI.
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Command Examples Section - Better placement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-green-400 mb-2 font-mono">
              ./available-commands --preview
            </h3>
            <p className="text-gray-400 text-sm">Get a glimpse of what KuttAI can do</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Command Help Terminal */}
            <div className="bg-gray-900 border border-green-500/30 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-3 py-2 border-b border-green-500/30">
                <span className="text-green-400 text-xs font-mono">student@ktu:~$</span>
              </div>
              <div className="p-4 bg-black text-xs font-mono space-y-1">
                <div className="text-gray-500">$ kuttai --help</div>
                <div className="text-green-400">Available commands:</div>
                <div className="text-green-300 ml-2">ask &lt;question&gt; - Ask any academic question</div>
                <div className="text-green-300 ml-2">code &lt;language&gt; - Get coding help</div>
                <div className="text-green-300 ml-2">study &lt;subject&gt; - Study materials</div>
                <div className="text-green-300 ml-2">debug &lt;error&gt; - Debug assistance</div>
                <div className="text-green-300 ml-2">explain &lt;concept&gt; - Detailed explanations</div>
                <div className="text-green-400 animate-pulse">█</div>
              </div>
            </div>

            {/* Example Interaction Terminal */}
            <div className="bg-gray-900 border border-green-500/30 rounded-lg overflow-hidden">
              <div className="bg-gray-800 px-3 py-2 border-b border-green-500/30">
                <span className="text-green-400 text-xs font-mono">user@ktu:~$</span>
              </div>
              <div className="p-4 bg-black text-xs font-mono space-y-1">
                <div className="text-gray-500">$ kuttai ask "explain OOP concepts"</div>
                <div className="text-green-400">KuttAI v1.0.0-beta:</div>
                <div className="text-green-300">Object-Oriented Programming includes:</div>
                <div className="text-green-300">• Encapsulation - Data hiding</div>
                <div className="text-green-300">• Inheritance - Code reusability</div>
                <div className="text-green-300">• Polymorphism - Multiple forms</div>
                <div className="text-green-400 animate-pulse">█</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}