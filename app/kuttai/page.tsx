'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import TerminalHero from '@/components/kuttai/TerminalHero'
import WaitlistForm from '@/components/kuttai/WaitinglistForm'
import TerminalFeatures from '@/components/kuttai/Features'
import TerminalFooter from '@/components/kuttai/TerminalFooter'

export default function KuttAIPage() {
  const [showForm, setShowForm] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
    
    // Simulate terminal boot sequence
    const bootSequence = [
      'Initializing KuttAI v1.0.0-beta...',
      'Loading AI models... [████████████████] 100%',
      'Connecting to neural network... OK',
      'System ready. Welcome to the future of offline AI.',
      '',
      'Type "join-waitlist" to get early access.'
    ]

    let index = 0
    const interval = setInterval(() => {
      if (index < bootSequence.length) {
        setTerminalLines(prev => [...prev, bootSequence[index]])
        index++
      } else {
        clearInterval(interval)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [])

  if (!isClient) {
    return (
      <div className="min-h-screen bg-black text-green-400 font-mono flex items-center justify-center">
        <div className="text-center">
          <div className="text-4xl mb-4">KuttAI</div>
          <div className="text-sm">Loading terminal...</div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-x-hidden">
      {/* Static background pattern */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(90deg, transparent 0%, rgba(0, 255, 0, 0.1) 50%, transparent 100%),
            linear-gradient(0deg, transparent 0%, rgba(0, 255, 0, 0.1) 50%, transparent 100%)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Scanlines effect */}
      <div className="fixed inset-0 pointer-events-none opacity-20">
        <div className="w-full h-full" style={{
          background: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(0, 255, 0, 0.03) 2px,
            rgba(0, 255, 0, 0.03) 4px
          )`
        }}></div>
      </div>

      {/* Terminal cursor blink animation */}
      <style jsx global>{`
        .terminal-cursor::after {
          content: '█';
          animation: blink 1s infinite;
          color: #00ff00;
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        .glitch {
          animation: glitch 3s infinite;
        }
        
        @keyframes glitch {
          0%, 90%, 100% { transform: translateX(0); }
          20% { transform: translateX(-2px); }
          40% { transform: translateX(2px); }
          60% { transform: translateX(-1px); }
          80% { transform: translateX(1px); }
        }
        
        .terminal-window {
          box-shadow: 
            0 0 30px rgba(0, 255, 0, 0.2),
            inset 0 0 30px rgba(0, 255, 0, 0.05);
        }
        
        .glow-text {
          text-shadow: 0 0 10px currentColor;
        }

        .floating-code {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(1deg); }
        }
      `}</style>

      <TerminalHero 
        onJoinWaitlist={() => setShowForm(true)} 
        terminalLines={terminalLines}
      />
      <TerminalFeatures />
      <TerminalFooter />

      {/* Waitlist Modal */}
      {showForm && (
        <WaitlistForm
          onClose={() => {
            setShowForm(false)
            setSubmitStatus('idle')
          }}
          submitStatus={submitStatus}
          setSubmitStatus={setSubmitStatus}
        />
      )}
    </div>
  )
}