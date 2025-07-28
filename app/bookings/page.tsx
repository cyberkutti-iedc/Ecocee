"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle, 
  Loader2, 
  ArrowRight, 
  User, 
  Mail, 
  Phone, 
  FileText, 
  Briefcase, 
  GraduationCap, 
  Building2, 
  Users, 
  Lightbulb, 
  Globe, 
  Cpu, 
  Brain, 
  Zap, 
  AlertCircle,
  ArrowLeft 
} from "lucide-react";

const steps = [
  {
    label: "What's your full name?",
    name: "name",
    icon: <User className="w-5 h-5 mr-2 text-blue-600" />,
    placeholder: "Enter your full name",
    type: "text",
    required: true,
  },
  {
    label: "Your email address",
    name: "email",
    icon: <Mail className="w-5 h-5 mr-2 text-blue-600" />,
    placeholder: "you@email.com",
    type: "email",
    required: true,
  },
  {
    label: "Your phone number",
    name: "phone",
    icon: <Phone className="w-5 h-5 mr-2 text-blue-600" />,
    placeholder: "+91-XXXXXXXXXX",
    type: "tel",
    required: true,
  },
  {
    label: "What kind of services are you looking for?",
    name: "service",
    icon: <Lightbulb className="w-5 h-5 mr-2 text-blue-600" />,
    type: "select",
    options: [
      { label: "Embedded Systems", value: "embedded", icon: <Cpu className="w-4 h-4 mr-2" /> },
      { label: "IoT Solutions", value: "iot", icon: <Globe className="w-4 h-4 mr-2" /> },
      { label: "AI Solutions", value: "ai", icon: <Brain className="w-4 h-4 mr-2" /> },
      { label: "Embedded + AI", value: "embedded_ai", icon: <Zap className="w-4 h-4 mr-2" /> },
      { label: "Custom Solutions", value: "custom", icon: <Lightbulb className="w-4 h-4 mr-2" /> },
      { label: "Product Purchase", value: "product", icon: <Briefcase className="w-4 h-4 mr-2" /> },
      { label: "Other", value: "other", icon: <FileText className="w-4 h-4 mr-2" /> },
    ],
    required: true,
  },
  {
    label: "Describe your work / requirements",
    name: "description",
    icon: <FileText className="w-5 h-5 mr-2 text-blue-600" />,
    placeholder: "Describe your project, product, or consultation needs in detail...",
    type: "textarea",
    required: true,
  },
  {
    label: "Area / Domain you are looking for",
    name: "area",
    icon: <Globe className="w-5 h-5 mr-2 text-blue-600" />,
    placeholder: "Eg: Healthcare, Education, Industry 4.0, Agriculture, etc.",
    type: "text",
    required: true,
  },
  {
    label: "Who are you?",
    name: "userType",
    icon: <Users className="w-5 h-5 mr-2 text-blue-600" />,
    type: "select",
    options: [
      { label: "Student", value: "student", icon: <GraduationCap className="w-4 h-4 mr-2" /> },
      { label: "Professional", value: "professional", icon: <Briefcase className="w-4 h-4 mr-2" /> },
      { label: "Startup", value: "startup", icon: <Building2 className="w-4 h-4 mr-2" /> },
      { label: "Business", value: "business", icon: <Users className="w-4 h-4 mr-2" /> },
      { label: "Other", value: "other", icon: <FileText className="w-4 h-4 mr-2" /> },
    ],
    required: true,
  },
  {
    label: "How did you know about us?",
    name: "how",
    icon: <ArrowRight className="w-5 h-5 mr-2 text-blue-600" />,
    type: "select",
    options: [
      { label: "Google Search", value: "Google Search" },
      { label: "Instagram", value: "Instagram" },
      { label: "LinkedIn", value: "LinkedIn" },
      { label: "Friend/Colleague", value: "Friend/Colleague" },
      { label: "Event/Workshop", value: "Event/Workshop" },
      { label: "YouTube", value: "YouTube" },
      { label: "Facebook", value: "Facebook" },
      { label: "Other", value: "Other" },
    ],
    required: true,
  },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  description: string;
  area: string;
  userType: string;
  how: string;
}

export default function BookingForm() {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    area: "",
    userType: "",
    how: "",
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(0);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) return 'Please enter a valid email';
        return '';
      case 'phone':
        if (!value.trim()) return 'Phone number is required';
        const phoneRegex = /^[\+]?[1-9][\d]{9,14}$/;
        if (!phoneRegex.test(value.replace(/[\s\-\(\)]/g, ''))) return 'Please enter a valid phone number';
        return '';
      case 'description':
        if (!value.trim()) return 'Description is required';
        if (value.trim().length < 10) return 'Description must be at least 10 characters';
        return '';
      case 'area':
        if (!value.trim()) return 'Area/Domain is required';
        if (value.trim().length < 2) return 'Area must be at least 2 characters';
        return '';
      case 'service':
      case 'userType':
      case 'how':
        if (!value) return 'This field is required';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear errors
    if (error) setError("");
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const handleSelect = (name: string, value: string) => {
    setForm(prev => ({ ...prev, [name]: value }));
    
    // Clear errors
    if (error) setError("");
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: "" }));
    }
  };

  const validateCurrentStep = (): boolean => {
    const currentStep = steps[step];
    const fieldName = currentStep.name as keyof FormData;
    const fieldValue = form[fieldName];
    const fieldError = validateField(fieldName, fieldValue);
    
    if (fieldError) {
      setFieldErrors(prev => ({ ...prev, [fieldName]: fieldError }));
      return false;
    }
    
    return true;
  };

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateCurrentStep()) {
      return;
    }
    
    if (step < steps.length - 1) {
      setStep(step + 1);
    }
  };

  const handlePrev = () => {
    if (step > 0) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  if (!validateCurrentStep()) {
    return;
  }

  setSubmitting(true);
  setError("");

  try {
    const res = await fetch('/api/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(form),  // Use `form` state here, not `formData`
    });

    const data = await res.json();  // Use `res.json()`, not `response.json()`

    if (data.success) {
      setSuccess(true);
      setShowPopup(true);
      // Reset form
      setForm({
        name: "",
        email: "",
        phone: "",
        service: "",
        description: "",
        area: "",
        userType: "",
        how: "",
      });
      setStep(0);
      setFieldErrors({});
    } else {
      setError(data.message || 'Something went wrong. Please try again.');
    }
  } catch (err) {
    console.error('Submit error:', err);
    setError('Network error. Please check your connection and try again.');
  } finally {
    setSubmitting(false);
  }
};

const resetForm = () => {
  setSuccess(false);
  setError("");
  setShowPopup(false);
  setFieldErrors({});
};


  const currentStep = steps[step];
  const currentFieldError = fieldErrors[currentStep.name];

  return (
    // <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 py-16 px-4">
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-black py-16 px-4">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl max-w-2xl w-full border border-blue-100 overflow-hidden"
      >
        <div className="p-8">
          {/* Header */}
          <div className="text-center mb-8">
        
              <h1 className="text-3xl font-bold text-blue-800 dark:text-blue-300 mb-2">
              Book Your Order / Consultation
            </h1>
           <p className="text-gray-600 dark:text-gray-300 text-lg">
              Let's get started! Please answer a few quick questions.
            </p>
          </div>

          {/* Global Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-50 border border-red-200 rounded-xl p-4 mb-6 flex items-start gap-3"
            >
              <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-red-800 font-medium">Error</p>
                <p className="text-red-700 text-sm">{error}</p>
              </div>
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
                className="flex flex-col items-center justify-center py-16"
              >
                <div className="bg-green-100 rounded-full p-4 mb-6">
                  <CheckCircle className="w-16 h-16 text-green-600" />
                </div>
                <h2 className="text-3xl font-bold mb-4 text-green-700">Order Confirmed!</h2>
                <p className="text-gray-700 text-center text-lg mb-8 max-w-md">
                  Thank you for booking your order/consultation with Ecocee. 
                  Our team will contact you within 24 hours.
                </p>
                <button
                  className="px-8 py-3 rounded-xl bg-blue-700 text-white font-semibold shadow-lg hover:bg-blue-800 transition-all transform hover:scale-105"
                  onClick={resetForm}
                >
                  Book Another Order
                </button>
              </motion.div>
            ) : (
              <motion.form
                key={step}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                onSubmit={step === steps.length - 1 ? handleSubmit : handleNext}
                className="space-y-6"
              >
                {/* Form Field */}
                <div className="space-y-4">
                  <label className="block text-lg font-semibold text-gray-800 flex items-center">
                    {currentStep.icon}
                    {currentStep.label}
                    {currentStep.required && <span className="text-red-500 ml-1">*</span>}
                  </label>
                  
                  {currentStep.type === "textarea" ? (
                    <div className="space-y-2">
                      <textarea
                        name={currentStep.name}
                        value={form[currentStep.name as keyof FormData]}
                        onChange={handleChange}
                        required={currentStep.required}
                        rows={5}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all resize-none text-gray-700 ${
                          currentFieldError 
                            ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                            : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                        }`}
                        placeholder={currentStep.placeholder}
                      />
                      {currentFieldError && (
                        <p className="text-red-600 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {currentFieldError}
                        </p>
                      )}
                    </div>
                  ) : currentStep.type === "select" ? (
                    <div className="space-y-2">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {currentStep.options?.map((option: any) => (
                          <button
                            type="button"
                            key={option.value}
                            className={`flex items-center px-4 py-3 rounded-xl border-2 transition-all text-left font-medium ${
                              form[currentStep.name as keyof FormData] === option.value
                                ? "bg-blue-700 text-white border-blue-700 shadow-lg transform scale-105"
                                : "bg-gray-50 border-gray-200 text-gray-700 hover:bg-blue-50 hover:border-blue-300"
                            }`}
                            onClick={() => handleSelect(currentStep.name, option.value)}
                          >
                            {option.icon}
                            {option.label}
                          </button>
                        ))}
                      </div>
                      {currentFieldError && (
                        <p className="text-red-600 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {currentFieldError}
                        </p>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <input
                        type={currentStep.type}
                        name={currentStep.name}
                        value={form[currentStep.name as keyof FormData]}
                        onChange={handleChange}
                        required={currentStep.required}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all text-gray-700 ${
                          currentFieldError 
                            ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100' 
                            : 'border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100'
                        }`}
                        placeholder={currentStep.placeholder}
                      />
                      {currentFieldError && (
                        <p className="text-red-600 text-sm flex items-center gap-1">
                          <AlertCircle className="w-4 h-4" />
                          {currentFieldError}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Navigation Buttons */}
                <div className="flex justify-between items-center pt-6">
                  <button
                    type="button"
                    onClick={handlePrev}
                    disabled={step === 0}
                    className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all ${
                      step === 0 
                        ? "opacity-50 cursor-not-allowed text-gray-400 bg-gray-100" 
                        : "text-gray-600 bg-gray-100 hover:bg-gray-200 hover:text-gray-800"
                    }`}
                  >
                    <ArrowLeft className="w-5 h-5 mr-2" />
                    Back
                  </button>
                  
                  {step < steps.length - 1 ? (
                    <button
                      type="submit"
                      className="flex items-center px-8 py-3 rounded-xl bg-blue-700 text-white font-bold shadow-lg hover:bg-blue-800 transition-all transform hover:scale-105"
                    >
                      Next
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex items-center px-8 py-3 rounded-xl bg-green-600 text-white font-bold shadow-lg hover:bg-green-700 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin mr-2" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Complete Booking
                        </>
                      )}
                    </button>
                  )}
                </div>

                {/* Progress Indicator */}
                <div className="pt-6 space-y-4">
                  <div className="flex justify-center gap-2">
                    {steps.map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-all ${
                          idx === step 
                            ? "bg-blue-700 scale-125" 
                            : idx < step 
                              ? "bg-green-500" 
                              : "bg-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="text-center">
                    <span className="text-sm text-gray-500">
                      Step {step + 1} of {steps.length}
                    </span>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div 
                        className="bg-blue-700 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${((step + 1) / steps.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* Success Popup */}
      <AnimatePresence>
        {showPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center"
            >
              <div className="bg-green-100 rounded-full p-4 mx-auto mb-6 w-fit">
                <CheckCircle className="w-16 h-16 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-4 text-green-700">
                🎉 Booking Confirmed!
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Thank you for choosing Ecocee! We've received your booking request and 
                our team will contact you within 24 hours to discuss your requirements.
              </p>
              <button
                className="w-full px-6 py-3 bg-blue-700 text-white font-bold rounded-xl shadow-lg hover:bg-blue-800 transition-all transform hover:scale-105"
                onClick={resetForm}
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}