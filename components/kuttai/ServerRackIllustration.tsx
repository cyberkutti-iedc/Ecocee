'use client';

import { useState, useRef, useEffect } from 'react';
import { Server, Cpu, HardDrive, Database, Zap } from 'lucide-react';

export default function ServerRackIllustration() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeServer, setActiveServer] = useState<number | null>(null);
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

  const servers = [
    { id: 1, name: 'Gemma-2B', size: '2.5GB', status: 'active' },
    { id: 2, name: 'Llama3-8B', size: '5.2GB', status: 'inactive' },
    { id: 3, name: 'Code-Llama', size: '3.8GB', status: 'inactive' },
    { id: 4, name: 'Mistral-7B', size: '4.5GB', status: 'inactive' },
    { id: 5, name: 'Phi-2', size: '1.6GB', status: 'inactive' },
    { id: 6, name: 'Custom Model', size: 'Varies', status: 'empty' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-black to-gray-900 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Your Local <span className="text-green-500">AI Server</span>
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Isometric Server Rack */}
          <div className={`relative w-full lg:w-1/2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative mx-auto" style={{ perspective: '1000px' }}>
              <div 
                className="relative transform transition-transform duration-700"
                style={{ 
                  transform: isVisible ? 'rotateX(60deg) rotateZ(45deg)' : 'rotateX(60deg) rotateZ(45deg) translateY(100px)',
                  transformStyle: 'preserve-3d' 
                }}
              >
                {/* Server Rack Frame */}
                <div className="absolute w-64 h-80 bg-gray-800 border-2 border-gray-700"></div>
                <div className="absolute w-64 h-80 bg-gray-800 border-2 border-gray-700 transform translateZ(-40px)"></div>
                <div className="absolute w-40 h-80 bg-gray-900 border-2 border-gray-700 transform rotateY(90deg) translateX(20px) translateZ(112px)"></div>
                
                {/* Server Units */}
                {servers.map((server, index) => (
                  <div
                    key={server.id}
                    className={`absolute w-60 h-10 border-2 transition-all duration-300 cursor-pointer
                      ${server.status === 'active' ? 'bg-green-900 border-green-600' : 
                        server.status === 'inactive' ? 'bg-gray-700 border-gray-600' : 
                        'bg-gray-800 border-gray-700 border-dashed'}
                    `}
                    style={{ 
                      top: `${index * 48 + 20}px`,
                      left: '20px',
                      transform: 'translateZ(20px)',
                    }}
                    onMouseEnter={() => setActiveServer(server.id)}
                    onMouseLeave={() => setActiveServer(null)}
                  >
                    <div className="flex items-center justify-between px-3 h-full">
                      <div className="flex items-center">
                        <Server className="h-4 w-4 mr-2 text-green-400" />
                        <span className="text-xs font-medium text-white">{server.name}</span>
                      </div>
                      <div className="flex items-center">
                        {server.status === 'active' && (
                          <div className="h-2 w-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                        )}
                        <span className="text-xs text-gray-400">{server.size}</span>
                      </div>
                    </div>
                    
                    {/* Status lights */}
                    <div className="absolute bottom-1 right-2 flex space-x-1">
                      <div className={`h-1 w-1 rounded-full ${server.status === 'active' ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                      <div className={`h-1 w-1 rounded-full ${server.status === 'active' ? 'bg-green-500' : 'bg-gray-600'}`}></div>
                    </div>
                  </div>
                ))}
                
                {/* Blinking lights for active servers */}
                {isVisible && servers.filter(s => s.status === 'active').map(server => (
                  <div
                    key={`light-${server.id}`}
                    className="absolute h-1 w-1 bg-green-500 rounded-full animate-ping"
                    style={{ 
                      top: `${server.id * 48 + 35}px`,
                      left: '25px',
                      transform: 'translateZ(25px)',
                    }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Server Information */}
          <div className={`w-full lg:w-1/2 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-700 rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-green-500">Local AI Inference</h3>
              
              {activeServer ? (
                <>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {servers.find(s => s.id === activeServer)?.name}
                  </h4>
                  <p className="text-gray-400 mb-6">
                    {servers.find(s => s.id === activeServer)?.status === 'active' 
                      ? 'This model is currently loaded and ready for inference.'
                      : 'This model is available but not currently loaded into memory.'}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Cpu className="h-5 w-5 text-green-500 mr-2" />
                      <div>
                        <div className="text-sm text-gray-400">CPU Usage</div>
                        <div className="text-white font-medium">12-35%</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Database className="h-5 w-5 text-green-500 mr-2" />
                      <div>
                        <div className="text-sm text-gray-400">RAM</div>
                        <div className="text-white font-medium">4.2/8GB</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <HardDrive className="h-5 w-5 text-green-500 mr-2" />
                      <div>
                        <div className="text-sm text-gray-400">Storage</div>
                        <div className="text-white font-medium">2.5GB</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Zap className="h-5 w-5 text-green-500 mr-2" />
                      <div>
                        <div className="text-sm text-gray-400">Power</div>
                        <div className="text-white font-medium">45W</div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-gray-400 mb-6">
                    Kuttai runs entirely on your local hardware, transforming your computer into a personal AI server.
                    No cloud dependencies, no data leaks, and no subscription fees.
                  </p>
                  <ul className="space-y-3 text-gray-400">
                    <li className="flex items-start">
                      <div className="h-5 w-5 bg-green-900 rounded-full flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span>Run multiple models simultaneously</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 bg-green-900 rounded-full flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span>Models are loaded on-demand to save memory</span>
                    </li>
                    <li className="flex items-start">
                      <div className="h-5 w-5 bg-green-900 rounded-full flex items-center justify-center mr-2 mt-0.5">
                        <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                      </div>
                      <span>Hot-swap models without restarting</span>
                    </li>
                  </ul>
                </>
              )}
              
              <button className="mt-8 px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
                Manage Models
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}