"use client";

import { Button } from "@/components/ui/button";
import { Instagram, ExternalLink } from "lucide-react";
import { useState } from "react";

export const CommunitySection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    // Replace with actual Instagram link when ready
    // window.open('https://instagram.com/ecocee.official', '_blank');
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section id="community" className="py-24">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center space-y-8">
          
          {/* Instagram Icon */}
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 shadow-lg">
            <Instagram className="w-10 h-10 text-white" />
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Follow Us on Instagram
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Get behind-the-scenes content, tech insights, and project updates from our embedded solutions team.
            </p>
          </div>

          {/* Instagram Handle */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 dark:bg-gray-800 rounded-full border border-gray-200 dark:border-gray-700">
            <Instagram className="w-4 h-4 text-pink-500" />
            <span className="font-mono text-gray-700 dark:text-gray-300">@ecocee.official</span>
          </div>

          {/* CTA Button */}
          <div className="pt-4">
            <Button 
              onClick={handleClick}
              className="group bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span className="flex items-center">
                Follow @ecocee.official
                <ExternalLink className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </span>
            </Button>
          </div>

        </div>
      </div>

      {/* Simple Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 max-w-sm w-full text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-pink-500 to-purple-600 rounded-xl flex items-center justify-center">
              <Instagram className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
              Coming Soon!
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              We're setting up @ecocee.official on Instagram. Stay tuned for updates!
            </p>
            
            <Button 
              onClick={closeModal}
              className="w-full bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-semibold py-3 rounded-xl transition-all duration-300"
            >
              Got it
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};