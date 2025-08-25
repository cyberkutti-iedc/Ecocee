'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ArrowRight, Sparkles } from 'lucide-react'

interface FloatingCTAProps {
  onClose: () => void
}

export default function FloatingCTA({ onClose }: FloatingCTAProps) {
  const [showCTA, setShowCTA] = useState(false)
  const [timeSpent, setTimeSpent] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (timeSpent >= 30 && !showCTA) {
      setShowCTA(true)
    }
  }, [timeSpent, showCTA])

  const handleCreateOwn = () => {
    router.push('/bookings')
  }

 
  return (
    <AnimatePresence>
      {showCTA && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 100 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 100 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <div className="relative bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 rounded-2xl shadow-2xl shadow-green-500/25 border border-green-400/20 backdrop-blur-sm max-w-sm">
            {/* Dismiss button */}
           <button
            type="button"
            onClick={onClose}
            className="absolute top-3 right-3 text-white/70 hover:text-white p-1 rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

            {/* Content */}
            <div className="p-6">
              {/* Icon and title */}
              <div className="flex items-center gap-3 mb-3">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">
                  Don't Disturb
                </h3>
              </div>

              {/* Message */}
              <p className="text-white/90 text-sm mb-4 leading-relaxed">
                Inspired by our innovations? Let's bring your ideas to life! 
                Create your own embedded system or AI solution with Ecocee.
              </p>

              {/* CTA Button */}
              <button
                type="button"
                onClick={handleCreateOwn}
                className="w-full bg-white hover:bg-gray-100 text-gray-900 font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Make Your Own</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Small text */}
              <p className="text-white/60 text-xs text-center mt-2">
                Book a consultation • Free initial assessment
              </p>
            </div>

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-400 via-emerald-500 to-teal-600 opacity-75 animate-pulse -z-10 blur-md"></div>
          </div>

          {/* Floating particles effect */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-green-400 rounded-full"
                initial={{
                  x: Math.random() * 200,
                  y: Math.random() * 200,
                  opacity: 0
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
                style={{
                  left: `${20 + (i * 15)}%`,
                  top: `${10 + (i * 10)}%`
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
