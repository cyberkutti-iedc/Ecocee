import { Terminal, Github, Download, ExternalLink, Clock, Shield, Zap, AlertCircle } from 'lucide-react';

export default function CTA() {
  const scrollToInstallation = () => {
    const installSection = document.getElementById('installation');
    if (installSection) {
      installSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-black to-green-950 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Stop Paying for <span className="text-red-500">AI Subscriptions</span>
          </h2>
          <p className="text-2xl text-green-400 mb-4 font-semibold">
            Get Your Own Offline AI Assistant Today
          </p>
          <p className="text-xl text-gray-400 mb-10 max-w-4xl mx-auto">
            Download Kuttai now and join thousands of developers who have taken control of their AI experience. 
            Completely free, fully private, and works forever without internet.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-12">
            <button 
              onClick={scrollToInstallation}
              className="flex items-center justify-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-lg font-semibold shadow-lg hover:shadow-green-500/25"
            >
              <Download className="mr-3 h-6 w-6" />
              Start Free Installation
            </button>
            <a 
              href="https://github.com/cyberkutti-iedc/kuttai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-green-600 hover:bg-green-800 text-white rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              <Github className="mr-3 h-6 w-6" />
              View Source Code
            </a>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">5 Minutes Setup</h3>
            <p className="text-gray-400">Quick installation process with step-by-step guidance</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">100% Safe</h3>
            <p className="text-gray-400">Open source code you can inspect and verify</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-green-500" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Instant Results</h3>
            <p className="text-gray-400">Start chatting with your AI immediately after setup</p>
          </div>
        </div>

        {/* FAQ Quick Answers */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-700 rounded-2xl p-8 mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-white">
            Common Questions Answered
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">Is it really free?</h4>
              <p className="text-gray-300 mb-4">Yes, completely free forever. No hidden costs, no subscriptions, no API fees. Download once, use forever.</p>
              
              <h4 className="text-lg font-semibold text-green-400 mb-2">Does it work offline?</h4>
              <p className="text-gray-300 mb-4">Absolutely. After initial setup, no internet connection is required. Your AI works anywhere, anytime.</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-green-400 mb-2">Is my data safe?</h4>
              <p className="text-gray-300 mb-4">Your conversations never leave your device. Zero data collection, no tracking, complete privacy.</p>
              
              <h4 className="text-lg font-semibold text-green-400 mb-2">What if I need help?</h4>
              <p className="text-gray-300">Active community support on GitHub. Report issues and get help from fellow developers.</p>
            </div>
          </div>
        </div>

        {/* Installation Preview */}
        <div className="bg-black border border-green-700 rounded-xl overflow-hidden mb-16">
          <div className="bg-gray-900 px-4 py-3 flex justify-between items-center">
            <div className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-red-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-3 text-green-400 font-mono">Quick Start Preview</span>
            </div>
          </div>
          
          <div className="p-6 font-mono bg-gray-950">
            <div className="text-green-300 mb-2"># Step 1: Install Node.js from nodejs.org</div>
            <div className="text-blue-300 mb-2"># Step 2: Download your AI model</div>
            <div className="text-yellow-300 mb-2"># Step 3: Place model in kuttai/models folder</div>
            <div className="text-white mb-4"># Step 4: Run Kuttai</div>
            <div className="text-green-400">$ npx kuttai</div>
            <div className="text-gray-400 mt-2">Loading model... Done!</div>
            <div className="text-white mt-1">Kuttai: Hello! I'm your offline AI assistant. How can I help you today?</div>
          </div>
        </div>

        {/* Social Proof & Links */}
        <div className="text-center">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Join the Open Source Community</h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Kuttai is developed by <span className="text-green-500 font-semibold">EcoCee</span> and maintained by a growing community of contributors. 
              Help us improve offline AI for everyone.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-12">
            <a
              href="https://ecocee.in/kuttai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300"
            >
              <ExternalLink className="mr-2 h-5 w-5" />
              Official Website
            </a>
            <a
              href="https://github.com/cyberkutti-iedc/kuttai/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300"
            >
              <AlertCircle className="mr-2 h-5 w-5" />
              Report Issues
            </a>
            <a
              href="https://github.com/cyberkutti-iedc/kuttai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              Contribute
            </a>
          </div>

          {/* Final CTA */}
          <div className="bg-gradient-to-r from-green-900/50 to-green-800/50 border border-green-600 rounded-xl p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't Wait - Start Saving Money Today
            </h3>
            <p className="text-gray-300 mb-6">
              While others pay $20+ monthly for AI subscriptions, you can have your own powerful AI assistant for free.
            </p>
            <button 
              onClick={scrollToInstallation}
              className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-lg font-bold shadow-lg hover:shadow-green-500/30"
            >
              <Download className="mr-3 h-6 w-6" />
              Get Started Now - It's Free!
            </button>
            <p className="text-sm text-green-300 mt-4">
              No credit card required • No sign-up • No data collection
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}