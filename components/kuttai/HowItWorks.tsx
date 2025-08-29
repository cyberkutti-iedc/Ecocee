import { Terminal, Download, Cpu, Play } from 'lucide-react';

const steps = [
  {
    icon: <Terminal className="h-8 w-8 text-green-500" />,
    title: "Install Kuttai",
    description: "Open your terminal and install globally using npm",
    code: "npm install -g kuttai"
  },
  {
    icon: <Download className="h-8 w-8 text-green-500" />,
    title: "Download Models",
    description: "Download GGUF models from Hugging Face",
    code: "npx --no node-llama-cpp pull --dir ./models <model-file-url>"
  },
  {
    icon: <Cpu className="h-8 w-8 text-green-500" />,
    title: "Customize (Optional)",
    description: "Add your preferred models to the models directory",
    code: "# Add models to ~/.kuttai/models/"
  },
  {
    icon: <Play className="h-8 w-8 text-green-500" />,
    title: "Run Kuttai",
    description: "Start using Kuttai from your terminal",
    code: "npx kuttai"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-b from-black to-green-950 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
          How It <span className="text-green-500">Works</span>
        </h2>
        
        <div className="space-y-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col md:flex-row items-start">
              <div className="flex items-start mb-4 md:mb-0 md:w-1/4">
                <div className="bg-green-900 p-3 rounded-full mr-4">
                  {step.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{step.title}</h3>
                  <p className="text-gray-400 mt-1">{step.description}</p>
                </div>
              </div>
              <div className="md:w-3/4 bg-black border border-green-800 rounded-lg p-4 font-mono text-green-300 overflow-x-auto">
                {step.code}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}