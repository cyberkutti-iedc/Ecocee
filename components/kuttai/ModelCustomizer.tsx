'use client';

import { useState, useEffect } from 'react';
import { Cpu, HardDrive, MemoryStick, Download, Trash2 } from 'lucide-react';

const models = [
  { id: 'gemma-2b', name: 'Gemma 2B', size: '2.5GB', ram: 4, vram: 2, description: 'General purpose model good for most tasks' },
  { id: 'llama3-8b', name: 'Llama 3 8B', size: '5.2GB', ram: 8, vram: 6, description: 'More capable model for complex reasoning' },
  { id: 'code-llama', name: 'Code Llama', size: '3.8GB', ram: 6, vram: 4, description: 'Specialized for code generation and analysis' },
  { id: 'mistral-7b', name: 'Mistral 7B', size: '4.5GB', ram: 7, vram: 5, description: 'Fast and efficient model with good performance' },
  { id: 'phi-2', name: 'Phi-2', size: '1.6GB', ram: 3, vram: 2, description: 'Small but powerful model for limited hardware' },
];

export default function ModelCustomizer() {
  const [selectedModels, setSelectedModels] = useState(['gemma-2b']);
  const [totalSize, setTotalSize] = useState(2.5);
  const [totalRAM, setTotalRAM] = useState(4);
  const [totalVRAM, setTotalVRAM] = useState(2);

  useEffect(() => {
    // Calculate totals based on selected models
    let size = 0;
    let ram = 0;
    let vram = 0;
    
    selectedModels.forEach(modelId => {
      const model = models.find(m => m.id === modelId);
      if (model) {
        size += parseFloat(model.size.replace('GB', ''));
        ram += model.ram;
        vram += model.vram;
      }
    });
    
    setTotalSize(size);
    setTotalRAM(ram);
    setTotalVRAM(vram);
  }, [selectedModels]);

  const toggleModel = (modelId: string) => {
    if (selectedModels.includes(modelId)) {
      setSelectedModels(selectedModels.filter(id => id !== modelId));
    } else {
      setSelectedModels([...selectedModels, modelId]);
    }
  };

  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Customize Your <span className="text-green-500">AI Models</span>
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Model Selection */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">Available Models</h3>
            <div className="space-y-4">
              {models.map(model => (
                <div 
                  key={model.id}
                  className={`p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedModels.includes(model.id) 
                      ? 'border-green-500 bg-green-950/30' 
                      : 'border-gray-700 hover:border-green-300'
                  }`}
                  onClick={() => toggleModel(model.id)}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-lg font-semibold text-white">{model.name}</h4>
                      <p className="text-gray-400 text-sm mt-1">{model.description}</p>
                    </div>
                    <div className={`h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                      selectedModels.includes(model.id) 
                        ? 'bg-green-500 border-green-500' 
                        : 'bg-transparent border-gray-500'
                    }`}>
                      {selectedModels.includes(model.id) && (
                        <div className="h-2 w-2 bg-white rounded-full"></div>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex mt-4 text-sm text-gray-400">
                    <div className="flex items-center mr-4">
                      <HardDrive className="h-4 w-4 mr-1" />
                      <span>{model.size}</span>
                    </div>
                    <div className="flex items-center mr-4">
                      <MemoryStick className="h-4 w-4 mr-1" />
                      <span>{model.ram}GB RAM</span>
                    </div>
                    <div className="flex items-center">
                      <Cpu className="h-4 w-4 mr-1" />
                      <span>{model.vram}GB VRAM</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* System Requirements */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-white">System Requirements</h3>
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-700 rounded-2xl p-6">
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Selected Models</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedModels.length === 0 ? (
                    <span className="text-gray-400">No models selected</span>
                  ) : (
                    selectedModels.map(modelId => {
                      const model = models.find(m => m.id === modelId);
                      return (
                        <span 
                          key={modelId}
                          className="px-3 py-1 bg-green-900 text-green-300 rounded-full text-sm flex items-center"
                        >
                          {model?.name}
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleModel(modelId);
                            }}
                            className="ml-2 text-green-500 hover:text-white"
                          >
                            <Trash2 className="h-3 w-3" />
                          </button>
                        </span>
                      );
                    })
                  )}
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Total Storage Needed</span>
                    <span className="text-white font-semibold">{totalSize.toFixed(1)}GB</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div 
                      className="bg-green-600 h-2.5 rounded-full" 
                      style={{ width: `${Math.min(totalSize / 20 * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">RAM Required</span>
                    <span className="text-white font-semibold">{totalRAM}GB</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{ width: `${Math.min(totalRAM / 32 * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">VRAM Recommended</span>
                    <span className="text-white font-semibold">{totalVRAM}GB</span>
                  </div>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div 
                      className="bg-purple-600 h-2.5 rounded-full" 
                      style={{ width: `${Math.min(totalVRAM / 16 * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-green-950/30 rounded-lg border border-green-800">
                <h4 className="text-lg font-semibold text-white mb-2">Download Command</h4>
                <div className="bg-black rounded-lg p-3 font-mono text-sm text-green-300">
                  npx --no node-llama-cpp pull --dir ./models {"<model-url>"}
                </div>
                <p className="text-gray-400 text-sm mt-2">
                  Replace {"<model-url>"} with the Hugging Face URL of your chosen model
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}