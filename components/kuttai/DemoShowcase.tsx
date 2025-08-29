'use client';

import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const terminalLines = [
  { text: "$ npx kuttai", type: "command" },
  { text: "Initializing Kuttai CLI...", type: "system" },
  { text: "Loading model: gemma-2b...", type: "system" },
  { text: "Model loaded successfully!", type: "success" },
  { text: "Kuttai is ready! How can I help you today?", type: "assistant" },
  { text: "> Tell me about artificial intelligence", type: "input" },
  { text: "Artificial intelligence (AI) refers to the simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.", type: "assistant" },
  { text: "> What programming language are you built with?", type: "input" },
  { text: "I'm built with JavaScript/Node.js using the node-llama-cpp library, which allows me to run efficiently on your local machine without requiring an internet connection.", type: "assistant" },
  { text: "> exit", type: "input" },
  { text: "Goodbye! Shutting down...", type: "system" }
];

export default function DemoSection() {
  const [currentLines, setCurrentLines] = useState<any[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying && currentIndex < terminalLines.length) {
      interval = setInterval(() => {
        setCurrentLines(prev => [...prev, terminalLines[currentIndex]]);
        setCurrentIndex(prev => prev + 1);
      }, 800);
    } else if (currentIndex >= terminalLines.length) {
      setIsPlaying(false);
    }
    
    return () => clearInterval(interval);
  }, [isPlaying, currentIndex]);

  const handlePlayPause = () => {
    if (currentIndex >= terminalLines.length) {
      handleReset();
    }
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setCurrentLines([]);
    setCurrentIndex(0);
    setIsPlaying(false);
  };

  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          See It In <span className="text-green-500">Action</span>
        </h2>
        
        <div className="bg-black border border-green-700 rounded-xl overflow-hidden">
          <div className="bg-gray-900 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-green-400 font-mono">terminal</span>
            </div>
            <div className="flex space-x-2">
              <button 
                onClick={handlePlayPause}
                className="p-1 rounded hover:bg-gray-700"
              >
                {isPlaying ? <Pause className="h-4 w-4 text-green-500" /> : <Play className="h-4 w-4 text-green-500" />}
              </button>
              <button 
                onClick={handleReset}
                className="p-1 rounded hover:bg-gray-700"
              >
                <RotateCcw className="h-4 w-4 text-green-500" />
              </button>
            </div>
          </div>
          
          <div className="p-6 font-mono h-96 overflow-auto bg-gray-950">
            {currentLines.map((line, index) => (
              <div 
                key={index} 
                className={
                  line.type === "command" ? "text-green-300 mb-2" :
                  line.type === "system" ? "text-blue-300 mb-2" :
                  line.type === "success" ? "text-green-500 mb-2" :
                  line.type === "assistant" ? "text-white mb-2" :
                  line.type === "input" ? "text-yellow-300 mb-2" : "text-gray-400 mb-2"
                }
              >
                {line.text}
              </div>
            ))}
            {isPlaying && currentIndex < terminalLines.length && (
              <div className="inline-block w-2 h-4 bg-green-500 animate-pulse"></div>
            )}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-400 mb-6">
            Experience the full power of Kuttai on your own machine
          </p>
          <button className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}