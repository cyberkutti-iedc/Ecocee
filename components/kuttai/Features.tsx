// 'use client'

// import { motion } from 'framer-motion'
// import { Terminal, Shield, Zap, Book, Code, Cpu, Database, Lock } from 'lucide-react'

// const features = [
//   {
//     icon: Terminal,
//     command: './features --cli',
//     title: 'Native CLI Experience',
//     description: 'Built for developers who live in the terminal. Intuitive commands, tab completion, and customizable shortcuts.',
//     output: ['$ kuttai ask "explain recursion"', '> Recursion is a programming technique...', '> Base case: when function stops calling itself', '> Recursive case: function calls itself with modified input']
//   },
//   {
//     icon: Shield,
//     command: './security --offline',
//     title: 'Complete Privacy',
//     description: 'Everything runs locally on your machine. No data sent to servers, no tracking, no compromises.',
//     output: ['$ ./privacy --status', '> Data location: LOCAL_MACHINE', '> Network requests: 0', '> Privacy level: MAXIMUM']
//   },
//   {
//     icon: Zap,
//     command: './performance --benchmark',
//     title: 'Lightning Fast',
//     description: 'Optimized for speed with instant responses. Low memory usage, efficient processing.',
//     output: ['$ ./benchmark --response-time', '> Average response: 127ms', '> Memory usage: 45MB', '> CPU usage: 8%']
//   },
//   {
//     icon: Book,
//     command: './academic --ktu',
//     title: 'KTU Specialized',
//     description: 'Fine-tuned for Kerala Technical University curriculum. Understands your syllabus and academic needs.',
//     output: ['$ kuttai study "data structures"', '> Loading KTU CS syllabus...', '> Topic: Arrays, Linked Lists, Trees', '> Sample questions included']
//   },
//   {
//     icon: Code,
//     command: './dev-tools --assist',
//     title: 'Developer Assistant',
//     description: 'Code review, debugging help, algorithm explanations, and programming guidance in multiple languages.',
//     output: ['$ kuttai code --language python', '> Python environment ready', '> Available: syntax check, debug, explain', '> Libraries: numpy, pandas, matplotlib loaded']
//   },
//   {
//     icon: Cpu,
//     command: './ai --model-info',
//     title: 'Gemma Powered',
//     description: 'Built on Google DeepMind\'s Gemma model, customized by EcoCee for academic excellence.',
//     output: ['$ ./model --info', '> Base: Google Gemma-7B', '> Customization: EcoCee Academic v2.1', '> Specialization: KTU curriculum']
//   }
// ]

// export default function TerminalFeatures() {
//   return (
//     <section className="py-20 px-4 relative">
//       <div className="max-w-7xl mx-auto">
//         {/* Section Header */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-16"
//         >
//           <div className="inline-block bg-gray-900 border border-green-500/30 rounded-lg p-4 mb-8 font-mono">
//             <div className="text-green-400 text-sm">$ ./features --list --detailed</div>
//             <div className="text-gray-300 text-sm mt-1">Scanning system capabilities...</div>
//           </div>
          
//           <h2 className="text-5xl font-bold text-white mb-4 font-mono">
//             <span className="text-green-400">&gt;</span> System Features
//           </h2>
//           <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
//             Advanced AI capabilities designed for terminal enthusiasts and academic excellence.
//           </p>
//         </motion.div>

//         {/* Features Grid */}
//         <div className="grid lg:grid-cols-2 gap-8">
//           {features.map((feature, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               className="group"
//             >
//               <div className="bg-gray-900 border border-green-500/30 rounded-lg overflow-hidden hover:border-green-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
//                 {/* Terminal Header */}
//                 <div className="bg-gray-800 px-4 py-2 border-b border-green-500/20 flex items-center justify-between">
//                   <div className="flex items-center gap-2">
//                     <feature.icon className="w-4 h-4 text-green-400" />
//                     <span className="text-green-400 text-sm font-mono">{feature.command}</span>
//                   </div>
//                   <div className="flex gap-1">
//                     <div className="w-2 h-2 bg-red-500 rounded-full"></div>
//                     <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
//                     <div className="w-2 h-2 bg-green-500 rounded-full"></div>
//                   </div>
//                 </div>

//                 {/* Terminal Content */}
//                 <div className="p-6">
//                   <div className="mb-4">
//                     <h3 className="text-xl font-bold text-white mb-2 font-mono">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-400">
//                       {feature.description}
//                     </p>
//                   </div>

//                   {/* Terminal Output Simulation */}
//                   <div className="bg-black rounded border border-green-500/20 p-3 font-mono text-sm">
//                     {feature.output.map((line, lineIndex) => (
//                       <motion.div
//                         key={lineIndex}
//                         initial={{ opacity: 0 }}
//                         whileInView={{ opacity: 1 }}
//                         viewport={{ once: true }}
//                         transition={{ delay: (index * 0.1) + (lineIndex * 0.2) }}
//                         className={`${
//                           line.startsWith('$') 
//                             ? 'text-green-400 mb-1' 
//                             : line.startsWith('>')
//                             ? 'text-gray-300 ml-2'
//                             : 'text-gray-400 ml-2'
//                         } mb-1`}
//                       >
//                         {line}
//                       </motion.div>
//                     ))}
//                     <motion.span 
//                       className="text-green-400 animate-pulse"
//                       initial={{ opacity: 0 }}
//                       whileInView={{ opacity: 1 }}
//                       viewport={{ once: true }}
//                       transition={{ delay: (index * 0.1) + (feature.output.length * 0.2) }}
//                     >
//                       █
//                     </motion.span>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         {/* System Specifications */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.8, delay: 0.5 }}
//           className="mt-20"
//         >
//           <div className="bg-gray-900 border border-green-500/30 rounded-lg overflow-hidden">
//             {/* Terminal Header */}
//             <div className="bg-gray-800 px-4 py-2 border-b border-green-500/20 flex items-center gap-2">
//               <Database className="w-4 h-4 text-green-400" />
//               <span className="text-green-400 text-sm font-mono">./system --specifications</span>
//             </div>

//             {/* System Info Grid */}
//             <div className="p-6">
//               <div className="grid md:grid-cols-3 gap-8">
//                 <div>
//                   <h4 className="text-green-400 font-mono mb-3 flex items-center gap-2">
//                     <Cpu className="w-4 h-4" />
//                     AI Engine
//                   </h4>
//                   <div className="space-y-1 text-sm font-mono text-gray-300">
//                     <div>Model: Google Gemma-7B</div>
//                     <div>Custom: EcoCee Academic v2.1</div>
//                     <div>Optimization: KTU Curriculum</div>
//                     <div>Languages: 15+ supported</div>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-green-400 font-mono mb-3 flex items-center gap-2">
//                     <Lock className="w-4 h-4" />
//                     Security
//                   </h4>
//                   <div className="space-y-1 text-sm font-mono text-gray-300">
//                     <div>Processing: 100% Local</div>
//                     <div>Data Storage: On-device only</div>
//                     <div>Network: Zero dependencies</div>
//                     <div>Privacy: Military-grade</div>
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="text-green-400 font-mono mb-3 flex items-center gap-2">
//                     <Zap className="w-4 h-4" />
//                     Performance
//                   </h4>
//                   <div className="space-y-1 text-sm font-mono text-gray-300">
//                     <div>Response: &lt;200ms average</div>
//                     <div>Memory: 45MB typical usage</div>
//                     <div>CPU: 8% average load</div>
//                     <div>Storage: 2.5GB installation</div>
//                   </div>
//                 </div>
//               </div>

//               {/* Status Bar */}
//               <div className="mt-8 pt-4 border-t border-green-500/20">
//                 <div className="flex justify-between items-center text-sm font-mono">
//                   <div className="flex items-center gap-4 text-green-400">
//                     <span>Status: OPERATIONAL</span>
//                     <span>Users: 1,247</span>
//                     <span>Uptime: 99.9%</span>
//                   </div>
//                   <div className="text-gray-400">
//                     Developed by EcoCee | Open Source
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

import { Cpu, Download, Code, Shield, Wifi, WifiOff } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="h-10 w-10 text-green-500" />,
    title: "Preloaded Gemma 2B Model",
    description: "Comes with a default powerful model ready to use right out of the box."
  },
  {
    icon: <Download className="h-10 w-10 text-green-500" />,
    title: "Customizable Models",
    description: "Download and use any GGUF model from Hugging Face to suit your needs."
  },
  {
    icon: <WifiOff className="h-10 w-10 text-green-500" />,
    title: "Full Offline Support",
    description: "Works completely offline once models are downloaded. No internet required."
  },
  {
    icon: <Code className="h-10 w-10 text-green-500" />,
    title: "Open Source",
    description: "Completely free and open source. Modify and contribute to the codebase."
  },
  {
    icon: <Shield className="h-10 w-10 text-green-500" />,
    title: "Privacy Focused",
    description: "Your data stays on your device. No external servers or data collection."
  },
  {
    icon: <Wifi className="h-10 w-10 text-green-500" />,
    title: "Node.js Powered",
    description: "Built on the robust JavaScript runtime for cross-platform compatibility."
  }
];

export default function FeatureSection() {
  return (
    <section id="features" className="py-20 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Powerful <span className="text-green-500">Features</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-gray-900 to-black border border-green-800 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/20"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}