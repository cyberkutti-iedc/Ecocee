'use client';

import React, { useState, useEffect } from 'react';
import { Download, Sparkles, X, Github, Star, Users, Zap, Shield, Code, Globe } from 'lucide-react';

interface KuttaiHeaderProps {
  t: {
    newProduct: string;
    kuttaiTitle: string;
  };
}

export default function KuttaiHeader({ t }: KuttaiHeaderProps) {
  const [showPopup, setShowPopup] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const handleKuttaiClick = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const dismissBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* Stylish Header Banner */}
      <div className="relative w-full overflow-hidden mt-10">
        {/* Main Banner */}
        <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating orbs */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-white/10 rounded-full animate-pulse blur-xl"></div>
            <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-violet-300/20 rounded-full animate-bounce blur-lg" style={{ animationDuration: '3s' }}></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-indigo-300/15 rounded-full animate-pulse blur-xl" style={{ animationDelay: '1s' }}></div>
            
            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '30px 30px'
            }}></div>
            
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600/50 via-transparent to-indigo-600/50"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
              
              {/* Left side - Product announcement */}
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-2xl px-4 py-2 border border-white/30 shadow-lg">
                  <div className="relative">
                    <Sparkles className="w-5 h-5 text-yellow-300 animate-pulse" />
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
                  </div>
                  <span className="font-bold text-sm text-white">{t.newProduct}</span>
                </div>
              </div>

              {/* Center - Product info */}
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <div className="text-center sm:text-left">
                  <h2 className="text-xl sm:text-2xl font-bold text-white mb-1">{t.kuttaiTitle}</h2>
                  <p className="text-violet-100 text-sm">The ultimate offline AI assistant</p>
                </div>
                
                <div className="flex gap-2 flex-wrap justify-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-green-500 text-white shadow-sm">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                    OFFLINE
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-orange-500 text-white shadow-sm">
                    <Github className="w-3 h-3 mr-1" />
                    OPEN SOURCE
                  </span>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-blue-500 text-white shadow-sm">
                    <Star className="w-3 h-3 mr-1" />
                    FREE
                  </span>
                </div>
              </div>

              {/* Right side - CTA */}
              <div className="flex items-center gap-3">
                <button
                  onClick={handleKuttaiClick}
                  className="group relative inline-flex items-center gap-2 bg-white text-violet-600 hover:text-violet-700 font-bold py-3 px-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white to-violet-50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <Download className="w-4 h-4 relative z-10 group-hover:animate-bounce" />
                  <span className="relative z-10">Download Now</span>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                </button>

                <button
                  onClick={dismissBanner}
                  className="w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white hover:text-violet-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stylish Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-lg flex items-center justify-center p-4 z-50 animate-in fade-in duration-300">
          <div className="relative bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-in slide-in-from-bottom-8 duration-500">
            
            {/* Header with gradient */}
            <div className="relative bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 px-8 py-6">
              {/* Background decorations */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-0 left-0 w-32 h-32 bg-white/10 rounded-full -translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-indigo-300/20 rounded-full translate-x-20 translate-y-20"></div>
              </div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{t.kuttaiTitle}</h3>
                    <p className="text-violet-100">Your Personal AI Assistant</p>
                  </div>
                </div>
                
                <button
                  onClick={closePopup}
                  className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 overflow-y-auto max-h-96">
              <div className="grid md:grid-cols-2 gap-8">
                
                {/* Features */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Why Choose Kuttai?</h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                        <Shield className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">100% Offline</h5>
                        <p className="text-sm text-gray-600">Complete privacy, no data leaves your device</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
                        <Code className="w-5 h-5 text-orange-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Open Source</h5>
                        <p className="text-sm text-gray-600">Transparent, community-driven development</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-gray-100 transition-colors">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
                        <Star className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900">Completely Free</h5>
                        <p className="text-sm text-gray-600">No subscriptions, no hidden costs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Stats & Download */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-6">Community Stats</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-4 bg-violet-50 rounded-2xl">
                      <div className="text-2xl font-bold text-violet-600">10K+</div>
                      <div className="text-sm text-violet-500">Downloads</div>
                    </div>
                    <div className="text-center p-4 bg-green-50 rounded-2xl">
                      <div className="text-2xl font-bold text-green-600">4.9★</div>
                      <div className="text-sm text-green-500">Rating</div>
                    </div>
                    <div className="text-center p-4 bg-orange-50 rounded-2xl">
                      <div className="text-2xl font-bold text-orange-600">500+</div>
                      <div className="text-sm text-orange-500">Contributors</div>
                    </div>
                    <div className="text-center p-4 bg-blue-50 rounded-2xl">
                      <div className="text-2xl font-bold text-blue-600">24/7</div>
                      <div className="text-sm text-blue-500">Available</div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <button className="w-full bg-gradient-to-r from-violet-600 to-purple-600 text-white font-bold py-4 px-6 rounded-2xl hover:from-violet-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg">
                      <Download className="w-5 h-5" />
                      Download for Windows
                    </button>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                        <Github className="w-4 h-4" />
                        GitHub
                      </button>
                      <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2">
                        <Globe className="w-4 h-4" />
                        Docs
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}