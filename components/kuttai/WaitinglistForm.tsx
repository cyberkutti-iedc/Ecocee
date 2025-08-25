'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Terminal, CheckCircle, XCircle, Loader, Heart } from 'lucide-react'

interface WaitlistFormProps {
  onClose: () => void
  submitStatus: 'idle' | 'loading' | 'success' | 'error'
  setSubmitStatus: (status: 'idle' | 'loading' | 'success' | 'error') => void
}

export default function WaitlistForm({ onClose, submitStatus, setSubmitStatus }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    category: '',
    institute: '',
    class_year: '',
    country: 'India',
    state: '',
    agreed: false
  })

  const [terminalOutput, setTerminalOutput] = useState<string[]>([])
  const [currentStep, setCurrentStep] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const [showSuccessPopup, setShowSuccessPopup] = useState(false)

  useEffect(() => {
    // Check if mobile on initial render and window resize
    const checkMobile = () => setIsMobile(window.innerWidth < 768)
    checkMobile()
    
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  useEffect(() => {
    // Simulate terminal initialization
    const initSequence = [
      'Initializing waitlist registration...',
      'Connecting to database... [OK]',
      'Ready for input.',
      ''
    ]
    
    let index = 0
    const interval = setInterval(() => {
      if (index < initSequence.length) {
        setTerminalOutput(prev => [...prev, initSequence[index]])
        index++
      } else {
        clearInterval(interval)
      }
    }, 300)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (submitStatus === 'success') {
      setShowSuccessPopup(true)
      const timer = setTimeout(() => {
        setShowSuccessPopup(false)
        onClose()
      }, 5000) // Show popup for 5 seconds
      
      return () => clearTimeout(timer)
    }
  }, [submitStatus, onClose])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (formData.country !== 'India') {
      setTerminalOutput(prev => [...prev, 'ERROR: Service currently limited to India only.', 'Please contact: info@ecocee.in', ''])
      return
    }

    if (!formData.agreed) {
      setTerminalOutput(prev => [...prev, 'ERROR: Terms agreement required.', ''])
      return
    }

    setSubmitStatus('loading')
    setTerminalOutput(prev => [...prev, 'Processing registration...', 'Validating data...'])

    try {
      const response = await fetch('/api/kuttai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone || null,
          category: formData.category,
          institute: formData.institute || null,
          class_year: formData.class_year || null,
          country: formData.country,
          state: formData.state,
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Registration failed')
      }

      setSubmitStatus('success')
      setTerminalOutput(prev => [...prev, 'SUCCESS: Registration complete!', 'Welcome to KuttAI Beta Program.', 'We will notify you when the beta version is online.', 'Love from EcoCee Team 💚', ''])
    } catch (error: any) {
      console.error('Error:', error)
      setSubmitStatus('error')
      setTerminalOutput(prev => [...prev, `ERROR: ${error.message}`, 'Please try again later.', ''])
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))
  }

  return (
    <AnimatePresence>
      {/* Success Popup */}
      {showSuccessPopup && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          className="fixed inset-0 flex items-center justify-center z-50 p-4"
        >
          <div className="bg-gray-900 border-2 border-green-500 rounded-lg p-6 max-w-md w-full shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <CheckCircle className="w-16 h-16 text-green-500 mb-4" />
              <h3 className="text-xl font-bold text-green-400 mb-2">Registration Successful!</h3>
              <p className="text-gray-300 mb-4">
                You've been added to our beta waitlist. We'll notify you when KuttAI is ready!
              </p>
              <div className="flex items-center text-green-300 mt-2">
                <span className="mr-1">Love from EcoCee</span>
                <Heart className="w-5 h-5 fill-green-300" />
              </div>
            </div>
          </div>
        </motion.div>
      )}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 z-40 font-mono"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-gray-900 border border-green-500/50 rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl"
          onClick={e => e.stopPropagation()}
        >
          {/* Terminal Header */}
          <div className="bg-gray-800 px-4 py-3 flex items-center justify-between border-b border-green-500/30">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-green-400" />
              <span className="text-green-400 text-sm truncate">kuttai-registration@terminal:~$</span>
            </div>
            <button
              onClick={onClose}
              className="w-6 h-6 flex items-center justify-center text-gray-300 hover:text-white transition-colors md:w-3 md:h-3 md:bg-red-500 md:rounded-full md:hover:bg-red-400"
              aria-label="Close"
            >
              <X className="w-4 h-4 md:hidden" />
            </button>
          </div>

          <div className={`flex ${isMobile ? 'flex-col h-[calc(90vh-112px)]' : 'h-96'}`}>
            {/* Terminal Output Side - Hidden on mobile unless in success/error state */}
            <div className={`bg-black p-4 overflow-y-auto border-green-500/30
              ${isMobile ? 
                (submitStatus === 'success' || submitStatus === 'error' ? 'w-full h-2/5 border-b' : 'hidden') 
                : 'w-1/2 border-r'}`}
            >
              <div className="space-y-1 text-sm">
                {terminalOutput.map((line, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={`${
                      line && line.startsWith && line.startsWith('ERROR:') ? 'text-red-400' :
                      line && line.startsWith && line.startsWith('SUCCESS:') ? 'text-green-400' :
                      line && line.includes && line.includes('[OK]') ? 'text-green-400' :
                      'text-gray-300'
                    }`}
                  >
                    {line && <span className="text-green-600 mr-2">$</span>}
                    {line || ''}
                  </motion.div>
                ))}
                <motion.div className="text-green-400">
                  <span className="text-green-600 mr-2">$</span>
                  <span className="animate-pulse">█</span>
                </motion.div>
              </div>
            </div>

            {/* Form Side */}
            <div className={`bg-gray-900 overflow-y-auto ${isMobile ? 'w-full h-3/5 p-4' : 'w-1/2 p-6'}`}>
              <h2 className="text-lg md:text-xl font-bold text-green-400 mb-4 md:mb-6 flex items-center gap-2">
                <Terminal className="w-4 h-4 md:w-5 md:h-5" />
                ./register --beta-access
              </h2>

              <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4 text-sm">
                {/* Name */}
                <div>
                  <label className="block text-green-400 mb-1 text-xs md:text-sm">
                    --name &lt;string&gt; *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 placeholder-gray-500 focus:border-green-500 focus:outline-none font-mono text-xs md:text-sm"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-green-400 mb-1 text-xs md:text-sm">
                    --email &lt;string&gt; *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 placeholder-gray-500 focus:border-green-500 focus:outline-none font-mono text-xs md:text-sm"
                    placeholder="user@domain.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-green-400 mb-1 text-xs md:text-sm">
                    --phone &lt;optional&gt;
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 placeholder-gray-500 focus:border-green-500 focus:outline-none font-mono text-xs md:text-sm"
                    placeholder="+91 9876543210"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-green-400 mb-1 text-xs md:text-sm">
                    --category &lt;enum&gt; *
                  </label>
                  <select
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 focus:border-green-500 focus:outline-none font-mono text-xs md:text-sm"
                  >
                    <option value="">Select type</option>
                    <option value="student">student</option>
                    <option value="teacher">teacher</option>
                    <option value="professional">professional</option>
                    <option value="other">other</option>
                  </select>
                </div>

                {/* Institute (conditional) */}
                {(formData.category === 'student' || formData.category === 'teacher') && (
                  <>
                    <div>
                      <label className="block text-green-400 mb-1 text-xs md:text-sm">
                        --institute &lt;string&gt; *
                      </label>
                      <input
                        type="text"
                        name="institute"
                        required
                        value={formData.institute}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 placeholder-gray-500 focus:border-green-500 focus:outline-none font-mono text-xs md:text-sm"
                        placeholder="College/University name"
                      />
                    </div>

                    {formData.category === 'student' && (
                      <div>
                        <label className="block text-green-400 mb-1 text-xs md:text-sm">
                          --year &lt;enum&gt; *
                        </label>
                        <select
                          name="class_year"
                          required
                          value={formData.class_year}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 focus:border-green-500 focus:outline-none font-mono text-xs md:text-sm"
                        >
                          <option value="">Select year</option>
                          <option value="1st Year">1st_year</option>
                          <option value="2nd Year">2nd_year</option>
                          <option value="3rd Year">3rd_year</option>
                          <option value="4th Year">4th_year</option>
                          <option value="Postgraduate">postgraduate</option>
                        </select>
                      </div>
                    )}
                  </>
                )}

                {/* Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-green-400 mb-1 text-xs md:text-sm">
                      --country *
                    </label>
                    <select
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 focus:border-green-500 focus:outline-none font-mono text-xs md:text-sm"
                    >
                      <option value="India">India</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {formData.country === 'India' && (
                    <div>
                      <label className="block text-green-400 mb-1 text-xs md:text-sm">
                        --state *
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 placeholder-gray-500 focus:border-green-500 focus:outline-none font-mono text-xs md:text-sm"
                        placeholder="Kerala"
                      />
                    </div>
                  )}
                </div>

                {/* Agreement */}
                <div className="flex items-start gap-2 pt-2">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 accent-green-500 flex-shrink-0"
                  />
                  <label className="text-gray-300 text-xs">
                    --accept-terms: I agree to receive beta updates and communications.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-3 md:pt-4">
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading' || formData.country === 'Other'}
                    className="w-full bg-green-500 hover:bg-green-400 disabled:bg-gray-600 text-black disabled:text-gray-400 py-2 md:py-3 rounded font-bold transition-all duration-300 font-mono flex items-center justify-center gap-2 text-sm md:text-base"
                  >
                    {submitStatus === 'loading' ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        ./executing...
                      </>
                    ) : (
                      './submit --register'
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Terminal status bar */}
          <div className="bg-gray-800 px-4 py-2 border-t border-green-500/30 text-xs text-green-400 flex justify-between">
            <span className="truncate">Connected to KuttAI Registration System</span>
            <span>{submitStatus === 'loading' ? 'Processing...' : 'Ready'}</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}