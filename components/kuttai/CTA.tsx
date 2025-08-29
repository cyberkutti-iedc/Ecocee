import { Terminal, Github, Download } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-black px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
          Ready to Try <span className="text-green-500">Kuttai</span>?
        </h2>
        
        <p className="text-xl text-gray-400 mb-10 max-w-3xl mx-auto">
          Join thousands of developers who are using Kuttai for their AI chatbot needs. Free, open source, and privacy-focused.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
          <a 
            href="https://github.com/cyberkutti-iedc/kuttai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            <Github className="mr-3 h-6 w-6" />
            Star on GitHub
          </a>
          <button className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-green-600 hover:bg-green-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
            <Download className="mr-3 h-6 w-6" />
            Download Now
          </button>
          <button className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-green-600 hover:bg-green-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105">
            <Terminal className="mr-3 h-6 w-6" />
            View Docs
          </button>
        </div>
        
        <div className="bg-gray-900 rounded-xl p-6 border border-green-800 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4 text-white">Quick Start</h3>
          <div className="bg-black rounded-lg p-4 font-mono text-green-300">
            <div className="mb-2">
              <span className="text-white">$ </span>
              npm install -g kuttai
            </div>
            <div>
              <span className="text-white">$ </span>
              npx kuttai
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}