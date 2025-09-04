import { useState } from 'react';
import { Download, ExternalLink, Folder, Terminal, CheckCircle, AlertCircle, Monitor, Apple, Smartphone } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Install Node.js",
    description: "Download and install Node.js from the official website",
    icon: <Download className="h-8 w-8 text-green-500" />,
    action: "Download Node.js",
    url: "https://nodejs.org/",
    details: [
      "Visit the official Node.js website",
      "Download the LTS version for your operating system",
      "Run the installer and follow the setup wizard",
      "Restart your terminal/command prompt"
    ],
    platforms: [
      { name: "Windows 10/11", icon: <Monitor className="h-5 w-5" /> },
      { name: "macOS", icon: <Apple className="h-5 w-5" /> },
      { name: "Linux (Ubuntu, Mint, etc.)", icon: <Smartphone className="h-5 w-5" /> }
    ]
  },
  {
    id: 2,
    title: "Choose Your AI Model",
    description: "Download a GGUF model from Hugging Face",
    icon: <ExternalLink className="h-8 w-8 text-green-500" />,
    action: "Visit Hugging Face",
    url: "https://huggingface.co/",
    details: [
      "Search for 'Gemma 2B.gguf model' on Hugging Face",
      "For normal systems: Choose 2B models (1.6GB)",
      "For powerful systems: You can use up to 7B or larger models",
      "Copy the model download URL for the next step"
    ],
    code: "npx --no node-llama-cpp pull --dir ./models <model-url>",
    note: "Alternative: Use the command above in your terminal with the model URL from Hugging Face"
  },
  {
    id: 3,
    title: "Place the Model",
    description: "Move your downloaded model to the Kuttai models folder",
    icon: <Folder className="h-8 w-8 text-green-500" />,
    details: [
      "Windows: AppData/Local/kuttai/models/",
      "macOS/Linux: ~/.kuttai/models/",
      "Create the folders if they don't exist",
      "Copy your downloaded .gguf model file into this folder"
    ],
    paths: {
      windows: "C:\\Users\\YourName\\AppData\\Local\\kuttai\\models\\",
      mac: "~/.kuttai/models/",
      linux: "~/.kuttai/models/"
    }
  },
  {
    id: 4,
    title: "Run Kuttai",
    description: "Open terminal and start your offline AI chatbot",
    icon: <Terminal className="h-8 w-8 text-green-500" />,
    code: "npx kuttai",
    details: [
      "Open any terminal/command prompt",
      "Type the command above and press Enter",
      "Wait for the model to load",
      "Start chatting with your offline AI assistant!"
    ]
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(1);
  const [completedSteps, setCompletedSteps] = useState(new Set());

  const toggleStep = (stepId: number) => {
    const newCompleted = new Set(completedSteps);
    if (completedSteps.has(stepId)) {
      newCompleted.delete(stepId);
    } else {
      newCompleted.add(stepId);
    }
    setCompletedSteps(newCompleted);
  };

  return (
    <section id="installation" className="py-20 bg-gradient-to-b from-green-950 to-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Easy <span className="text-green-500">Installation</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Get your offline AI chatbot running in 4 simple steps. No technical expertise required.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex justify-between items-center max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <div key={step.id} className="flex items-center">
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                    completedSteps.has(step.id)
                      ? 'bg-green-600 border-green-600'
                      : activeStep === step.id
                      ? 'border-green-500 bg-green-900'
                      : 'border-gray-600 bg-gray-800'
                  }`}
                >
                  {completedSteps.has(step.id) ? (
                    <CheckCircle className="h-6 w-6 text-white" />
                  ) : (
                    <span className="text-white font-semibold">{step.id}</span>
                  )}
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-16 md:w-32 h-0.5 mx-2 ${
                    completedSteps.has(step.id) ? 'bg-green-600' : 'bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Installation Steps */}
        <div className="space-y-8">
          {steps.map((step) => (
            <div 
              key={step.id}
              className={`bg-gradient-to-br from-gray-900 to-black border-2 rounded-2xl p-8 transition-all duration-300 ${
                activeStep === step.id 
                  ? 'border-green-500 shadow-lg shadow-green-500/20' 
                  : 'border-gray-700 hover:border-green-300'
              }`}
              onClick={() => setActiveStep(step.id)}
            >
              <div className="flex flex-col lg:flex-row lg:items-start gap-8">
                {/* Step Header */}
                <div className="lg:w-1/3">
                  <div className="flex items-center mb-4">
                    {step.icon}
                    <div className="ml-4">
                      <h3 className="text-2xl font-bold text-white">
                        Step {step.id}: {step.title}
                      </h3>
                      <p className="text-gray-400 mt-1">{step.description}</p>
                    </div>
                  </div>

                  {/* Action Button */}
                  {step.url && (
                    <a
                      href={step.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 mb-4"
                    >
                      {step.action}
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  )}

                  {/* Mark as Complete */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleStep(step.id);
                    }}
                    className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                      completedSteps.has(step.id)
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    }`}
                  >
                    <CheckCircle className="mr-2 h-4 w-4" />
                    {completedSteps.has(step.id) ? 'Completed' : 'Mark Complete'}
                  </button>
                </div>

                {/* Step Details */}
                <div className="lg:w-2/3">
                  <div className="space-y-4">
                    <ul className="space-y-2">
                      {step.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-300">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Platform Support */}
                    {step.platforms && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Supported Platforms:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                          {step.platforms.map((platform, index) => (
                            <div key={index} className="flex items-center p-3 bg-gray-800 rounded-lg">
                              {platform.icon}
                              <span className="ml-2 text-gray-300">{platform.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Code Block */}
                    {step.code && (
                      <div className="mt-6">
                        <div className="bg-black rounded-lg p-4 border border-green-800">
                          <div className="flex items-center mb-2">
                            <Terminal className="h-4 w-4 text-green-400 mr-2" />
                            <span className="text-green-400 font-mono text-sm">command</span>
                          </div>
                          <code className="text-green-300 font-mono">{step.code}</code>
                        </div>
                        {step.note && (
                          <p className="text-sm text-gray-400 mt-2 flex items-start">
                            <AlertCircle className="h-4 w-4 mt-0.5 mr-2 text-yellow-500 flex-shrink-0" />
                            {step.note}
                          </p>
                        )}
                      </div>
                    )}

                    {/* File Paths */}
                    {step.paths && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold text-white mb-3">File Locations:</h4>
                        <div className="space-y-2">
                          {Object.entries(step.paths).map(([platform, path]) => (
                            <div key={platform} className="bg-gray-800 rounded-lg p-3">
                              <div className="text-green-400 font-semibold capitalize mb-1">{platform}:</div>
                              <code className="text-gray-300 font-mono text-sm">{path}</code>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Completion Message */}
        {completedSteps.size === steps.length && (
          <div className="mt-12 p-8 bg-gradient-to-r from-green-900 to-green-800 rounded-2xl border border-green-600 text-center">
            <CheckCircle className="h-16 w-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2">Congratulations!</h3>
            <p className="text-green-200 mb-6">
              You have successfully set up Kuttai. Your offline AI chatbot is ready to use.
            </p>
            <div className="bg-black rounded-lg p-4 inline-block">
              <code className="text-green-300 font-mono">npx kuttai</code>
            </div>
          </div>
        )}

        {/* Support Links */}
        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Need Help?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="https://github.com/cyberkutti-iedc/kuttai/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300"
            >
              Report an Issue on GitHub
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
            <a
              href="https://ecocee.in/kuttai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300"
            >
              Visit Official Site
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}