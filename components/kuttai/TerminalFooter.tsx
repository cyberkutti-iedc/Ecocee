'use client'

import { motion } from 'framer-motion'
import { Terminal, Mail, Globe, Github, Heart, ExternalLink, Command } from 'lucide-react'

export default function TerminalFooter() {
  return (
    <footer className="py-16 px-4 border-t border-green-500/30 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        {/* Main Footer Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-3 gap-8 mb-12"
        >
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded flex items-center justify-center">
                <Terminal className="w-5 h-5 text-black" />
              </div>
              <div>
                <div className="text-2xl font-bold text-white font-mono">KuttAI</div>
                <div className="text-sm text-gray-400 font-mono">v1.0.0-beta</div>
              </div>
            </div>
            <p className="text-gray-400 font-mono text-sm mb-4">
              Your offline AI companion in the terminal. Built for developers, optimized for students.
            </p>
            
            {/* Terminal-style status */}
            <div className="bg-black border border-green-500/30 rounded p-3 font-mono text-xs">
              <div className="text-green-400 mb-1">$ ./status --system</div>
              <div className="text-gray-300">Service: ACTIVE</div>
              <div className="text-gray-300">Build: stable-2025.01</div>
              <div className="text-gray-300">License: Open Source</div>
            </div>
          </div>

          {/* Quick Commands */}
          <div>
            <h4 className="text-green-400 font-mono mb-4 flex items-center gap-2">
              <Command className="w-4 h-4" />
              ./commands --help
            </h4>
            <div className="space-y-2 text-sm font-mono">
              <div className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors">
                $ kuttai ask &lt;question&gt;
              </div>
              <div className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors">
                $ kuttai code &lt;language&gt;
              </div>
              <div className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors">
                $ kuttai study &lt;subject&gt;
              </div>
              <div className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors">
                $ kuttai debug &lt;error&gt;
              </div>
              <div className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors">
                $ kuttai --help
              </div>
            </div>
          </div>

          {/* Contact Terminal */}
          <div>
            <h4 className="text-green-400 font-mono mb-4 flex items-center gap-2">
              <Mail className="w-4 h-4" />
              ./contact --info
            </h4>
            <div className="bg-black border border-green-500/30 rounded p-3 font-mono text-xs space-y-1">
              <div className="text-green-400">$ curl -X GET contact.ecocee.in</div>
              <div className="text-gray-300">
                <span className="text-green-400">email:</span> info@ecocee.in
              </div>
              <div className="text-gray-300">
                <span className="text-green-400">web:</span> 
                <a href="https://ecocee.in" target="_blank" className="hover:text-green-400 ml-1">
                  ecocee.in <ExternalLink className="w-3 h-3 inline" />
                </a>
              </div>
              <div className="text-gray-300">
                <span className="text-green-400">github:</span> 
                <a href="https://github.com/ecocee" target="_blank" className="hover:text-green-400 ml-1">
                  @ecocee <ExternalLink className="w-3 h-3 inline" />
                </a>
              </div>
              <div className="text-gray-300">
                <span className="text-green-400">status:</span> ONLINE
              </div>
            </div>
          </div>
        </motion.div>

        {/* Technical Specs Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="border-t border-green-500/20 pt-8 mb-8"
        >
          <div className="bg-gray-800 border border-green-500/30 rounded-lg p-4">
            <div className="grid md:grid-cols-4 gap-4 text-center font-mono text-sm">
              <div>
                <div className="text-green-400 font-bold">Model</div>
                <div className="text-gray-300">Gemma-7B + EcoCee</div>
              </div>
              <div>
                <div className="text-green-400 font-bold">Specialization</div>
                <div className="text-gray-300">KTU Academic</div>
              </div>
              <div>
                <div className="text-green-400 font-bold">Performance</div>
                <div className="text-gray-300">&lt;200ms Response</div>
              </div>
              <div>
                <div className="text-green-400 font-bold">Privacy</div>
                <div className="text-gray-300">100% Offline</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="border-t border-green-500/20 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-gray-400 font-mono text-sm">
              <span>© 2025 Developed with</span>
              <Heart className="w-4 h-4 text-red-400 fill-current animate-pulse" />
              <span>by</span>
              <a 
                href="https://ecocee.in" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-400 font-semibold hover:text-green-300 transition-colors"
              >
                EcoCee
              </a>
            </div>

            {/* Beta Status */}
            <div className="flex items-center gap-4">
              <div className="bg-yellow-500/20 border border-yellow-500/30 rounded px-3 py-1 text-yellow-400 font-mono text-xs">
                BETA VERSION
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-mono text-xs">SYSTEM ONLINE</span>
              </div>
            </div>
          </div>

          {/* Terminal Command Line */}
          <div className="mt-6 bg-black border border-green-500/30 rounded p-3 font-mono text-sm">
            <div className="flex items-center gap-2">
              <span className="text-green-400">user@ktu:~$</span>
              <span className="text-gray-300">echo "Thank you for your interest in KuttAI!"</span>
            </div>
            <div className="text-green-400 mt-1">Thank you for your interest in KuttAI!</div>
            <div className="flex items-center gap-2 mt-2">
              <span className="text-green-400">user@ktu:~$</span>
              <span className="text-green-400 animate-pulse">█</span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}