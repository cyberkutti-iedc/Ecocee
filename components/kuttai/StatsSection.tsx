'use client';

import { Users, Download, Github, Cpu } from 'lucide-react';

export default function StatsSection() {
  const highlights = [
    {
      icon: Cpu,
      title: 'Local Execution',
      desc: 'Runs quantized models entirely on Apple Silicon with Metal acceleration.',
    },
    {
      icon: Github,
      title: 'Open Source',
      desc: 'Free to inspect and contribute under the Apache-2.0 open source license.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      desc: 'Engineered for developers, researchers, and local AI practitioners.',
    },
    {
      icon: Download,
      title: 'Direct Deployment',
      desc: 'Self-contained executable with zero cloud dependencies.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-green-950 to-black px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          Kuttai <span className="text-green-500">Architecture</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-gray-900/50 p-6 rounded-xl text-center flex flex-col items-center justify-center border border-green-500/10"
              >
                <Icon className="w-8 h-8 text-green-400 mb-3" />
                <p className="text-xl font-bold text-white">{item.title}</p>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
