import { useState, useRef, useEffect } from 'react';
import { Shield, Zap, Wallet, Code, Globe, Users, Server, Lock, Cpu, HardDrive } from 'lucide-react';

const benefits = [
  {
    icon: <Shield className="h-12 w-12 text-green-500" />,
    title: "100% Private & Secure",
    description: "Your conversations never leave your device. No data collection, no tracking, no privacy concerns.",
    details: [
      "All processing happens locally on your machine",
      "No internet connection required after setup",
      "Zero data sent to external servers",
      "Complete control over your information"
    ],
    highlight: "Your data stays yours"
  },
  {
    icon: <Wallet className="h-12 w-12 text-green-500" />,
    title: "Completely Free Forever",
    description: "No subscriptions, no API costs, no hidden fees. Download once and use forever.",
    details: [
      "No monthly subscription fees like ChatGPT Plus",
      "No API usage costs like OpenAI",
      "No rate limits or usage restrictions",
      "One-time setup, lifetime usage"
    ],
    highlight: "Save $20+ monthly"
  },
  {
    icon: <Zap className="h-12 w-12 text-green-500" />,
    title: "Lightning Fast Responses",
    description: "No network latency means instant responses. Your AI is always ready when you are.",
    details: [
      "Responses in under 200ms average",
      "No waiting for server connections",
      "Works even without internet",
      "Consistent performance anytime"
    ],
    highlight: "10x faster than cloud AI"
  },
  {
    icon: <Code className="h-12 w-12 text-green-500" />,
    title: "Open Source & Customizable",
    description: "Full access to source code. Modify, enhance, and contribute to make it better.",
    details: [
      "Available on GitHub for transparency",
      "Community-driven development",
      "Add your own features and improvements",
      "No vendor lock-in or restrictions"
    ],
    highlight: "Built by developers, for developers"
  },
  {
    icon: <Server className="h-12 w-12 text-green-500" />,
    title: "Multiple Model Support",
    description: "Choose from dozens of AI models or use multiple models simultaneously.",
    details: [
      "Support for any GGUF format model",
      "From lightweight 1.6GB to powerful 70B+ models",
      "Swap models without restarting",
      "Customize for specific use cases"
    ],
    highlight: "Your AI, your choice"
  },
  {
    icon: <Globe className="h-12 w-12 text-green-500" />,
    title: "Works Everywhere",
    description: "Cross-platform compatibility means it runs on Windows, macOS, and Linux.",
    details: [
      "Windows 10/11 support",
      "macOS (Intel and Apple Silicon)",
      "Linux distributions (Ubuntu, Mint, etc.)",
      "Consistent experience across platforms"
    ],
    highlight: "One solution, all platforms"
  }
];

export default function BenefitsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % benefits.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-black px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Choose <span className="text-green-500">Kuttai</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Experience the freedom of truly offline AI with unmatched privacy, zero costs, and complete control.
          </p>
        </div>

        {/* Main Benefits Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br from-gray-900 to-black border-2 rounded-2xl p-8 transition-all duration-500 cursor-pointer ${
                activeIndex === index 
                  ? 'border-green-500 shadow-2xl shadow-green-500/20 scale-105' 
                  : 'border-gray-700 hover:border-green-300'
              } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setActiveIndex(index)}
            >
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-900/30 rounded-2xl mb-4 group-hover:bg-green-900/50 transition-colors">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {benefit.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-300 text-sm">{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="text-center">
                <span className="inline-block px-4 py-2 bg-green-900/50 text-green-400 rounded-full text-sm font-semibold">
                  {benefit.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison with Cloud AI */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-green-700 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-center mb-12 text-white">
            Kuttai vs Cloud <span className="text-red-500">AI Services</span>
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="pb-4 text-gray-400 font-semibold">Feature</th>
                  <th className="pb-4 text-green-500 font-semibold text-center">Kuttai</th>
                  <th className="pb-4 text-red-500 font-semibold text-center">Cloud AI</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Monthly Cost", kuttai: "Free Forever", cloud: "$20+ / month" },
                  { feature: "Privacy", kuttai: "100% Private", cloud: "Data Collected" },
                  { feature: "Internet Required", kuttai: "No", cloud: "Always" },
                  { feature: "Response Speed", kuttai: "<200ms", cloud: "500ms - 2s" },
                  { feature: "Usage Limits", kuttai: "Unlimited", cloud: "Rate Limited" },
                  { feature: "Data Control", kuttai: "You Own It", cloud: "Server Storage" },
                  { feature: "Customization", kuttai: "Full Control", cloud: "Limited" },
                  { feature: "Open Source", kuttai: "Yes", cloud: "No" }
                ].map((row, index) => (
                  <tr key={index} className="border-b border-gray-800">
                    <td className="py-4 text-white font-medium">{row.feature}</td>
                    <td className="py-4 text-center">
                      <span className="inline-block px-3 py-1 bg-green-900/50 text-green-400 rounded-full text-sm font-semibold">
                        {row.kuttai}
                      </span>
                    </td>
                    <td className="py-4 text-center">
                      <span className="inline-block px-3 py-1 bg-red-900/50 text-red-400 rounded-full text-sm font-semibold">
                        {row.cloud}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* System Requirements */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-800 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Cpu className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">Minimum Requirements</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-400">RAM</span>
                <span className="text-white font-semibold">4GB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Storage</span>
                <span className="text-white font-semibold">2-8GB</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">CPU</span>
                <span className="text-white font-semibold">Any modern processor</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-400">Internet</span>
                <span className="text-white font-semibold">Setup only</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-gray-900 to-black border border-green-800 rounded-2xl p-8">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-green-500 mr-3" />
              <h3 className="text-2xl font-bold text-white">Join the Community</h3>
            </div>
            <p className="text-gray-400 mb-6">
              Kuttai is open source and welcomes contributions from developers worldwide. 
              Help us make offline AI better for everyone.
            </p>
            <div className="space-y-3">
              <a
                href="https://github.com/cyberkutti-iedc/kuttai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <span className="text-white">Star on GitHub</span>
                <span className="text-green-400">→</span>
              </a>
              <a
                href="https://github.com/cyberkutti-iedc/kuttai/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <span className="text-white">Report Issues</span>
                <span className="text-green-400">→</span>
              </a>
              <a
                href="https://github.com/cyberkutti-iedc/kuttai/pulls"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
              >
                <span className="text-white">Contribute Code</span>
                <span className="text-green-400">→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="mt-16 text-center">
          <h3 className="text-3xl font-bold text-white mb-4">
            Ready to Experience True AI Freedom?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join thousands of users who have taken control of their AI experience. 
            Download Kuttai today and never pay for AI again.
          </p>
          <button 
            onClick={() => {
              const installSection = document.getElementById('installation');
              if (installSection) {
                installSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 text-lg font-semibold"
          >
            Start Your Installation
            <Zap className="ml-3 h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}