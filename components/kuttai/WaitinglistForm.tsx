'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Terminal, CheckCircle, XCircle, Loader } from 'lucide-react'

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
      setTerminalOutput(prev => [...prev, 'SUCCESS: Registration complete!', 'Welcome to KuttAI Beta Program.', 'You will receive updates via email.', ''])
      
      setTimeout(() => {
        onClose()
      }, 3000)
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 z-50 font-mono"
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
              <span className="text-green-400 text-sm">kuttai-registration@terminal:~$</span>
            </div>
            <button
              onClick={onClose}
              className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors"
            ></button>
          </div>

          <div className="flex h-96">
            {/* Terminal Output Side */}
            <div className="w-1/2 bg-black p-4 overflow-y-auto border-r border-green-500/30">
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
            <div className="w-1/2 bg-gray-900 p-6 overflow-y-auto">
              <h2 className="text-xl font-bold text-green-400 mb-6 flex items-center gap-2">
                <Terminal className="w-5 h-5" />
                ./register --beta-access
              </h2>

              <form onSubmit={handleSubmit} className="space-y-4 text-sm">
                {/* Name */}
                <div>
                  <label className="block text-green-400 mb-1">
                    --name &lt;string&gt; *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 placeholder-gray-500 focus:border-green-500 focus:outline-none font-mono"
                    placeholder="Enter your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-green-400 mb-1">
                    --email &lt;string&gt; *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 placeholder-gray-500 focus:border-green-500 focus:outline-none font-mono"
                    placeholder="user@domain.com"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-green-400 mb-1">
                    --phone &lt;optional&gt;
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 placeholder-gray-500 focus:border-green-500 focus:outline-none font-mono"
                    placeholder="+91 9876543210"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-green-400 mb-1">
                    --category &lt;enum&gt; *
                  </label>
                  <select
                    name="category"
                    required
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 focus:border-green-500 focus:outline-none font-mono"
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
                      <label className="block text-green-400 mb-1">
                        --institute &lt;string&gt; *
                      </label>
                      <input
                        type="text"
                        name="institute"
                        required
                        value={formData.institute}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 placeholder-gray-500 focus:border-green-500 focus:outline-none font-mono"
                        placeholder="College/University name"
                      />
                    </div>

                    {formData.category === 'student' && (
                      <div>
                        <label className="block text-green-400 mb-1">
                          --year &lt;enum&gt; *
                        </label>
                        <select
                          name="class_year"
                          required
                          value={formData.class_year}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 focus:border-green-500 focus:outline-none font-mono"
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
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-green-400 mb-1">
                      --country *
                    </label>
                    <select
                      name="country"
                      required
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 focus:border-green-500 focus:outline-none font-mono"
                    >
                      <option value="India">India</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  {formData.country === 'India' && (
                    <div>
                      <label className="block text-green-400 mb-1">
                        --state *
                      </label>
                      <input
                        type="text"
                        name="state"
                        required
                        value={formData.state}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-black border border-green-500/30 rounded text-green-400 placeholder-gray-500 focus:border-green-500 focus:outline-none font-mono"
                        placeholder="Kerala"
                      />
                    </div>
                  )}
                </div>

                {/* Agreement */}
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleInputChange}
                    className="mt-1 w-4 h-4 accent-green-500"
                  />
                  <label className="text-gray-300 text-xs">
                    --accept-terms: I agree to receive beta updates and communications.
                  </label>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={submitStatus === 'loading' || formData.country === 'Other'}
                    className="w-full bg-green-500 hover:bg-green-400 disabled:bg-gray-600 text-black disabled:text-gray-400 py-3 rounded font-bold transition-all duration-300 font-mono flex items-center justify-center gap-2"
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
            <span>Connected to KuttAI Registration System</span>
            <span>{submitStatus === 'loading' ? 'Processing...' : 'Ready'}</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}