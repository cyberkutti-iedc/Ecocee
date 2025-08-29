'use client';

import { useState, useRef, useEffect } from 'react';
import { Wifi, WifiOff, Cloud, Cpu, Zap, Clock } from 'lucide-react';

export default function AnimatedComparison() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Offline vs. Online <span className="text-green-500">AI</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Offline Column */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-700 rounded-2xl p-8 h-full">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-green-900 p-3 rounded-full">
                  <WifiOff className="h-10 w-10 text-green-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-green-500">Kuttai Offline</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Instant Response</h4>
                    <p className="text-gray-400">No network latency, responses generated locally</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-green-900 p-1 rounded mr-3">
                    <Cpu className="h-5 w-5 text-green-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Full Privacy</h4>
                    <p className="text-gray-400">Your data never leaves your device</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-green-500 mt-1 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Always Available</h4>
                    <p className="text-gray-400">Works anywhere, no internet connection needed</p>
                  </div>
                </div>
              </div>
              
              {/* Animation: Local processing */}
              <div className="mt-8 relative h-40">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-green-900 rounded-full flex items-center justify-center border-2 border-green-700">
                    <Cpu className="h-8 w-8 text-green-500" />
                  </div>
                </div>
                
                {isVisible && (
                  <>
                    <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-green-500 rounded-full animate-ping opacity-75"></div>
                    <div className="absolute top-1/2 left-1/3 w-6 h-6 bg-green-500 rounded-full animate-ping opacity-75 animation-delay-300"></div>
                    <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-green-500 rounded-full animate-ping opacity-75 animation-delay-700"></div>
                  </>
                )}
              </div>
            </div>
          </div>
          
          {/* Online Column */}
          <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-500 rounded-2xl p-8 h-full">
              <div className="flex items-center justify-center mb-6">
                <div className="bg-red-900 p-3 rounded-full">
                  <Cloud className="h-10 w-10 text-red-500" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-center mb-4 text-red-500">Cloud AI</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-500 mt-1 mr-3" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Network Latency</h4>
                    <p className="text-gray-400">Requests travel to remote servers and back</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-900 p-1 rounded mr-3">
                    <Wifi className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Privacy Concerns</h4>
                    <p className="text-gray-400">Your data processed on external servers</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-red-900 p-1 rounded mr-3">
                    <Zap className="h-5 w-5 text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">Subscription Costs</h4>
                    <p className="text-gray-400">Ongoing fees for API usage</p>
                  </div>
                </div>
              </div>
              
              {/* Animation: Data traveling to cloud */}
              <div className="mt-8 relative h-40">
                <div className="absolute left-10 top-1/2 transform -translate-y-1/2">
                  <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center border border-red-500">
                    <Cpu className="h-6 w-6 text-red-400" />
                  </div>
                </div>
                
                <div className="absolute right-10 top-1/2 transform -translate-y-1/2">
                  <div className="w-16 h-16 bg-red-900 rounded-full flex items-center justify-center border-2 border-red-500">
                    <Cloud className="h-8 w-8 text-red-500" />
                  </div>
                </div>
                
                {isVisible && (
                  <>
                    <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-red-500 rounded-full animate-bounce"></div>
                    <div className="absolute top-1/2 left-2/5 w-3 h-3 bg-red-500 rounded-full animate-bounce animation-delay-300"></div>
                    <div className="absolute top-2/5 left-1/2 w-2 h-2 bg-red-500 rounded-full animate-bounce animation-delay-700"></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}