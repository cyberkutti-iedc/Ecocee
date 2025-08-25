'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Loader2, CheckCircle, AlertCircle, CreditCard, User, Mail, Phone, MapPin, School, Building } from 'lucide-react';


// Purchase Page Component
export default function PurchasePage() {
  // Theme config
  const theme = {
    primary: "emerald",
    secondary: "teal",
    accent: "teal",
    gradient: "from-emerald-50 to-white",
    lightBg: "bg-emerald-50",
    darkBg: "bg-gray-800",
    primaryButton: "bg-emerald-600 hover:bg-emerald-700",
    secondaryButton: "bg-white text-emerald-600 border-emerald-200 hover:bg-emerald-50",
    accentLight: "bg-emerald-100",
    textAccent: "text-emerald-600",
    borderAccent: "border-emerald-300",
    iconAccent: "text-emerald-500",
    iconLight: "text-emerald-400",
    dot: "bg-emerald-400",
  };

  // Form data interface
  interface FormData {
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
    userType: 'individual' | 'student' | 'educator' | 'business';
    licenseType: 'basic' | 'pro' | 'enterprise';
    paymentMethod: 'creditCard' | 'paypal' | 'bankTransfer';
    cardNumber: string;
    cardExpiry: string;
    cardCvc: string;
    agreeToTerms: boolean;
    licenseKey?: string;
  }

  // Form state
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: '',
    userType: 'individual',
    licenseType: 'basic',
    paymentMethod: 'creditCard',
    cardNumber: '',
    cardExpiry: '',
    cardCvc: '',
    agreeToTerms: false
  });

 
  
  // Define form error types
  interface FormErrors {
    name?: string;
    email?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
    cardNumber?: string;
    cardExpiry?: string;
    cardCvc?: string;
    agreeToTerms?: string;
  }

  // UI state
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [currentStep, setCurrentStep] = useState(1);

  // License pricing
  const licensePricing = {
    basic: {
      individual: 99,
      student: 49,
      educator: 79,
      business: 199
    },
    pro: {
      individual: 199,
      student: 99,
      educator: 149,
      business: 399
    },
    enterprise: {
      individual: 499,
      student: 299,
      educator: 399,
      business: 999
    }
  };

  // Get current price
  const getCurrentPrice = () => {
    return licensePricing[formData.licenseType][formData.userType];
  };

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
    
    // Clear error for this field when user types
    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name as keyof FormErrors]: ''
      });
    }
  };

  // Validate form fields
  const validateForm = () => {
    const errors = {} as FormErrors;
    
    // Required fields
    if (!formData.name.trim()) errors.name = 'Name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.address.trim()) errors.address = 'Address is required';
    if (!formData.city.trim()) errors.city = 'City is required';
    if (!formData.state.trim()) errors.state = 'State/Province is required';
    if (!formData.zipCode.trim()) errors.zipCode = 'ZIP/Postal code is required';
    if (!formData.country.trim()) errors.country = 'Country is required';
    
    // Payment validation for step 3
    if (formData.paymentMethod === 'creditCard') {
      if (!formData.cardNumber.trim()) errors.cardNumber = 'Card number is required';
      else if (!/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) errors.cardNumber = 'Invalid card number';
      
      if (!formData.cardExpiry.trim()) errors.cardExpiry = 'Expiration date is required';
      else if (!/^\d{2}\/\d{2}$/.test(formData.cardExpiry)) errors.cardExpiry = 'Use MM/YY format';
      
      if (!formData.cardCvc.trim()) errors.cardCvc = 'CVC is required';
      else if (!/^\d{3,4}$/.test(formData.cardCvc)) errors.cardCvc = 'Invalid CVC';
    }
    
    if (!formData.agreeToTerms) errors.agreeToTerms = 'You must agree to the terms and conditions';

    return errors;
  };

  // Handle form submission
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Validate form
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    setSubmitError('');
    
    try {
      // In a real app, you would integrate with a payment gateway here
      // For demo, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Generate license key (in real app, this would be generated by the backend)
      const licenseKey = `NITI-${formData.userType.substring(0, 3).toUpperCase()}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
      
      // Email template that would be sent to your email
      const emailBody = `
        New Niti Device License Purchase:
        
        License Key: ${licenseKey}
        License Type: ${formData.licenseType} (${formData.userType})
        Amount: $${getCurrentPrice()}
        
        Customer Information:
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        
        Billing Address:
        ${formData.address}
        ${formData.city}, ${formData.state} ${formData.zipCode}
        ${formData.country}
        
        Payment Method: ${formData.paymentMethod}
        
        Timestamp: ${new Date().toISOString()}
      `;
      
      // In a real app, this would send to your server which would then email you
      // console.log('Email would be sent to: ecoceeteam@gmail.com');
      // console.log(emailBody);
      
      // Store license key to display to the user
      setFormData({
        ...formData,
        licenseKey
      });
      
      setSubmitSuccess(true);
      
      // In a real app, redirect after success or display a confirmation page
      // setTimeout(() => {
      //   window.location.href = '/niti/purchase/success';
      // }, 3000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('There was an error processing your purchase. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle step navigation
  const goToNextStep = () => {
    const errors: FormErrors = {};
    
    // Validate fields for current step
    if (currentStep === 1) {
      if (!formData.name.trim()) errors.name = 'Name is required';
      if (!formData.email.trim()) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
      if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    } else if (currentStep === 2) {
      if (!formData.address.trim()) errors.address = 'Address is required';
      if (!formData.city.trim()) errors.city = 'City is required';
      if (!formData.state.trim()) errors.state = 'State/Province is required';
      if (!formData.zipCode.trim()) errors.zipCode = 'ZIP/Postal code is required';
      if (!formData.country.trim()) errors.country = 'Country is required';
    }
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setCurrentStep(currentStep + 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToPreviousStep = () => {
    setCurrentStep(currentStep - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  // Format card number with spaces
  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return value;
    }
  };

  return (
    <div className={`min-h-screen ${theme.gradient}`}>
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className={`text-4xl font-bold ${theme.textAccent}`}>Purchase Niti Device License</h1>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Complete your purchase to receive your Niti device license key and start building amazing projects.
          </p>
        </motion.div>
        
        {/* Progress Steps */}
        <div className="max-w-3xl mx-auto mb-10">
          <div className="flex justify-between">
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 1 ? `${theme.primaryButton} text-white` : 'bg-gray-200'}`}>
                <User size={20} />
              </div>
              <span className="text-sm mt-2">Personal Info</span>
            </div>
            <div className="flex-1 h-1 mt-5 mx-4">
              <div className={`h-full ${currentStep >= 2 ? theme.primaryButton : 'bg-gray-200'}`}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 2 ? `${theme.primaryButton} text-white` : 'bg-gray-200'}`}>
                <MapPin size={20} />
              </div>
              <span className="text-sm mt-2">Address</span>
            </div>
            <div className="flex-1 h-1 mt-5 mx-4">
              <div className={`h-full ${currentStep >= 3 ? theme.primaryButton : 'bg-gray-200'}`}></div>
            </div>
            <div className="flex flex-col items-center">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep >= 3 ? `${theme.primaryButton} text-white` : 'bg-gray-200'}`}>
                <CreditCard size={20} />
              </div>
              <span className="text-sm mt-2">Payment</span>
            </div>
          </div>
        </div>
        
        {/* Success Message */}
        {submitSuccess ? (
          <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className={`max-w-lg mx-auto p-8 rounded-lg shadow-xl ${theme.accentLight} text-center`}
        >
          <CheckCircle className="mx-auto text-green-500" size={60} />
          <h2 className="text-2xl font-bold mt-4">Purchase Successful!</h2>
          <p className="mt-2 text-gray-600">
            Thank you for your purchase. A confirmation email has been sent to <strong>{formData.email}</strong>.
          </p>
        
          {/* License Key Notice */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="mt-6 p-4 bg-white rounded-lg border border-gray-200"
          >
            <h3 className="font-bold text-lg mb-2">License Key Processing</h3>
            <p className="text-gray-600">
              Your license key will be sent to your email shortly after verification.
            </p>
            <div className="mt-3 p-3 bg-gray-100 rounded font-mono text-lg text-gray-500 italic">
              Pending Verification...
            </div>
          </motion.div>
        
          {/* Dashboard Redirect */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 0.6, duration: 0.5 }}
            className="mt-6"
          >
            <button 
              onClick={() => window.location.href = '/niti'} 
              className={`px-6 py-3 ${theme.primaryButton} text-white rounded-lg transition hover:shadow-md`}
            >
              Go to Home
            </button>
          </motion.div>
        </motion.div>
        
        ) : (
          // Purchase Form
          <motion.form 
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white rounded-xl shadow-xl overflow-hidden"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Form Header */}
            <div className={`p-6 ${theme.accentLight}`}>
              <h2 className={`text-2xl font-bold ${theme.textAccent}`}>
                {currentStep === 1 && "Your Information"}
                {currentStep === 2 && "Billing Address"}
                {currentStep === 3 && "Payment Details"}
              </h2>
              <p className="text-gray-600 mt-1">
                {currentStep === 1 && "Please provide your contact information"}
                {currentStep === 2 && "Enter your billing address"}
                {currentStep === 3 && "Complete your purchase by selecting a license and payment method"}
              </p>
            </div>
            
            {/* Form Fields - Step 1: Personal Info */}
            {currentStep === 1 && (
              <motion.div 
                className="p-8 space-y-6"
                variants={containerVariants}
              >
                {/* Name */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className={theme.iconLight} size={18} />
                    </div>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${formErrors.name ? 'border-red-500' : theme.borderAccent} rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 outline-none`}
                      placeholder="Enter your full name"
                    />
                  </div>
                  {formErrors.name && <p className="mt-1 text-red-500 text-sm">{formErrors.name}</p>}
                </motion.div>
                
                {/* Email */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className={theme.iconLight} size={18} />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${formErrors.email ? 'border-red-500' : theme.borderAccent} rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 outline-none`}
                      placeholder="Enter your email address"
                    />
                  </div>
                  {formErrors.email && <p className="mt-1 text-red-500 text-sm">{formErrors.email}</p>}
                </motion.div>
                
                {/* Phone */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className={theme.iconLight} size={18} />
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${formErrors.phone ? 'border-red-500' : theme.borderAccent} rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 outline-none`}
                      placeholder="Enter your phone number"
                    />
                  </div>
                  {formErrors.phone && <p className="mt-1 text-red-500 text-sm">{formErrors.phone}</p>}
                </motion.div>
                
                {/* User Type */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-1">
                    I am purchasing as a:
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.userType === 'individual' ? `border-2 ${theme.borderAccent} ${theme.accentLight}` : 'border-gray-200 hover:border-emerald-200'}`}
                      onClick={() => setFormData({...formData, userType: 'individual'})}
                    >
                      <User className={`${formData.userType === 'individual' ? theme.iconAccent : 'text-gray-400'} mb-2`} size={24} />
                      <span className="font-medium">Individual</span>
                    </div>
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.userType === 'student' ? `border-2 ${theme.borderAccent} ${theme.accentLight}` : 'border-gray-200 hover:border-emerald-200'}`}
                      onClick={() => setFormData({...formData, userType: 'student'})}
                    >
                      <School className={`${formData.userType === 'student' ? theme.iconAccent : 'text-gray-400'} mb-2`} size={24} />
                      <span className="font-medium">Student</span>
                    </div>
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.userType === 'educator' ? `border-2 ${theme.borderAccent} ${theme.accentLight}` : 'border-gray-200 hover:border-emerald-200'}`}
                      onClick={() => setFormData({...formData, userType: 'educator'})}
                    >
                      <School className={`${formData.userType === 'educator' ? theme.iconAccent : 'text-gray-400'} mb-2`} size={24} />
                      <span className="font-medium">Educator/Staff</span>
                    </div>
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.userType === 'business' ? `border-2 ${theme.borderAccent} ${theme.accentLight}` : 'border-gray-200 hover:border-emerald-200'}`}
                      onClick={() => setFormData({...formData, userType: 'business'})}
                    >
                      <Building className={`${formData.userType === 'business' ? theme.iconAccent : 'text-gray-400'} mb-2`} size={24} />
                      <span className="font-medium">Business</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
            
            {/* Form Fields - Step 2: Billing Address */}
            {currentStep === 2 && (
              <motion.div 
                className="p-8 space-y-6"
                variants={containerVariants}
              >
                {/* Address */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                    Street Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <MapPin className={theme.iconLight} size={18} />
                    </div>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className={`block w-full pl-10 pr-3 py-3 border ${formErrors.address ? 'border-red-500' : theme.borderAccent} rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 outline-none`}
                      placeholder="Enter your street address"
                    />
                  </div>
                  {formErrors.address && <p className="mt-1 text-red-500 text-sm">{formErrors.address}</p>}
                </motion.div>
                
                {/* City */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className={`block w-full px-3 py-3 border ${formErrors.city ? 'border-red-500' : theme.borderAccent} rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 outline-none`}
                    placeholder="Enter your city"
                  />
                  {formErrors.city && <p className="mt-1 text-red-500 text-sm">{formErrors.city}</p>}
                </motion.div>
                
                {/* State and ZIP */}
                <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-1">
                      State/Province <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={`block w-full px-3 py-3 border ${formErrors.state ? 'border-red-500' : theme.borderAccent} rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 outline-none`}
                      placeholder="Enter your state"
                    />
                    {formErrors.state && <p className="mt-1 text-red-500 text-sm">{formErrors.state}</p>}
                  </div>
                  <div>
                    <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                      ZIP/Postal Code <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      className={`block w-full px-3 py-3 border ${formErrors.zipCode ? 'border-red-500' : theme.borderAccent} rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 outline-none`}
                      placeholder="Enter your ZIP code"
                    />
                    {formErrors.zipCode && <p className="mt-1 text-red-500 text-sm">{formErrors.zipCode}</p>}
                  </div>
                </motion.div>
                
                {/* Country */}
                <motion.div variants={itemVariants}>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                    Country <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleChange}
                    className={`block w-full px-3 py-3 border ${formErrors.country ? 'border-red-500' : theme.borderAccent} rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 outline-none`}
                  >
                    <option value="">Select your country</option>
                    <option value="United States">United States</option>
                    <option value="Canada">Canada</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Australia">Australia</option>
                    <option value="India">India</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="Other">Other</option>
                  </select>
                  {formErrors.country && <p className="mt-1 text-red-500 text-sm">{formErrors.country}</p>}
                </motion.div>
              </motion.div>
            )}
            
            {/* Form Fields - Step 3: Payment Details */}
            {currentStep === 3 && (
              <motion.div 
                className="p-8 space-y-6"
                variants={containerVariants}
              >
                {/* License Type */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select License Type
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.licenseType === 'basic' ? `border-2 ${theme.borderAccent} ${theme.accentLight}` : 'border-gray-200 hover:border-emerald-200'}`}
                      onClick={() => setFormData({...formData, licenseType: 'basic'})}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold">Basic</h3>
                        <span className={`${theme.textAccent} font-bold`}>${licensePricing.basic[formData.userType]}</span>
                      </div>
                      <p className="text-sm text-gray-600">Essential features for personal projects</p>
                    </div>
                    
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.licenseType === 'pro' ? `border-2 ${theme.borderAccent} ${theme.accentLight}` : 'border-gray-200 hover:border-emerald-200'}`}
                      onClick={() => setFormData({...formData, licenseType: 'pro'})}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold">Pro</h3>
                        <span className={`${theme.textAccent} font-bold`}>${licensePricing.pro[formData.userType]}</span>
                      </div>
                      <p className="text-sm text-gray-600">Advanced features with priority support</p>
                    </div>
                    
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.licenseType === 'enterprise' ? `border-2 ${theme.borderAccent} ${theme.accentLight}` : 'border-gray-200 hover:border-emerald-200'}`}
                      onClick={() => setFormData({...formData, licenseType: 'enterprise'})}
                    >
                      <div className="flex justify-between items-start mb-2">
                      <h3 className="font-bold">Enterprise</h3>
                        <span className={`${theme.textAccent} font-bold`}>${licensePricing.enterprise[formData.userType]}</span>
                      </div>
                      <p className="text-sm text-gray-600">Full feature set with dedicated support</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Payment Method */}
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Select Payment Method
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.paymentMethod === 'creditCard' ? `border-2 ${theme.borderAccent} ${theme.accentLight}` : 'border-gray-200 hover:border-emerald-200'}`}
                      onClick={() => setFormData({...formData, paymentMethod: 'creditCard'})}
                    >
                      <CreditCard className={`${formData.paymentMethod === 'creditCard' ? theme.iconAccent : 'text-gray-400'} mb-2`} size={24} />
                      <span className="font-medium">Credit Card</span>
                    </div>
                    
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.paymentMethod === 'paypal' ? `border-2 ${theme.borderAccent} ${theme.accentLight}` : 'border-gray-200 hover:border-emerald-200'}`}
                      onClick={() => setFormData({...formData, paymentMethod: 'paypal'})}
                    >
                      <div className="h-6 mb-2 flex items-center">
                        <span className="text-blue-600 font-bold text-lg">Pay</span>
                        <span className="text-blue-800 font-bold text-lg">Pal</span>
                      </div>
                      <span className="font-medium">PayPal</span>
                    </div>
                    
                    <div 
                      className={`p-4 border rounded-lg cursor-pointer transition-all ${formData.paymentMethod === 'bankTransfer' ? `border-2 ${theme.borderAccent} ${theme.accentLight}` : 'border-gray-200 hover:border-emerald-200'}`}
                      onClick={() => setFormData({...formData, paymentMethod: 'bankTransfer'})}
                    >
                      <Building className={`${formData.paymentMethod === 'bankTransfer' ? theme.iconAccent : 'text-gray-400'} mb-2`} size={24} />
                      <span className="font-medium">Bank Transfer</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Credit Card Details */}
                {formData.paymentMethod === 'creditCard' && (
                  <motion.div variants={itemVariants} className="space-y-6">
                    <div>
                      <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                        Card Number <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <CreditCard className={theme.iconLight} size={18} />
                        </div>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={formData.cardNumber}
                          onChange={(e) => {
                            const formatted = formatCardNumber(e.target.value);
                            setFormData({...formData, cardNumber: formatted});
                          }}
                          maxLength={19}
                          className={`block w-full pl-10 pr-3 py-3 border ${formErrors.cardNumber ? 'border-red-500' : theme.borderAccent} rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 outline-none`}
                          placeholder="1234 5678 9012 3456"
                        />
                      </div>
                      {formErrors.cardNumber && <p className="mt-1 text-red-500 text-sm">{formErrors.cardNumber}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="cardExpiry" className="block text-sm font-medium text-gray-700 mb-1">
                          Expiration Date <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="cardExpiry"
                          name="cardExpiry"
                          value={formData.cardExpiry}
                          onChange={handleChange}
                          placeholder="MM/YY"
                          maxLength={5}
                          className={`block w-full px-3 py-3 border ${formErrors.cardExpiry ? 'border-red-500' : theme.borderAccent} rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 outline-none`}
                        />
                        {formErrors.cardExpiry && <p className="mt-1 text-red-500 text-sm">{formErrors.cardExpiry}</p>}
                      </div>
                      <div>
                        <label htmlFor="cardCvc" className="block text-sm font-medium text-gray-700 mb-1">
                          CVC <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="cardCvc"
                          name="cardCvc"
                          value={formData.cardCvc}
                          onChange={handleChange}
                          placeholder="123"
                          maxLength={4}
                          className={`block w-full px-3 py-3 border ${formErrors.cardCvc ? 'border-red-500' : theme.borderAccent} rounded-lg shadow-sm focus:ring-2 focus:ring-emerald-200 focus:border-emerald-300 outline-none`}
                        />
                        {formErrors.cardCvc && <p className="mt-1 text-red-500 text-sm">{formErrors.cardCvc}</p>}
                      </div>
                    </div>
                  </motion.div>
                )}
                
                {/* Order Summary */}
                <motion.div variants={itemVariants} className="bg-gray-50 p-4 rounded-lg mt-8">
                  <h3 className="text-lg font-medium mb-3">Order Summary</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>License Type:</span>
                      <span className="font-medium capitalize">{formData.licenseType}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>User Type:</span>
                      <span className="font-medium capitalize">{formData.userType}</span>
                    </div>
                    <div className="border-t border-gray-200 my-2 pt-2 flex justify-between">
                      <span className="font-bold">Total:</span>
                      <span className={`font-bold ${theme.textAccent}`}>${getCurrentPrice()}</span>
                    </div>
                  </div>
                </motion.div>
                
                {/* Terms and Conditions */}
                <motion.div variants={itemVariants}>
                  <div className="flex items-start mt-4">
                    <div className="flex items-center h-5">
                      <input
                        id="agreeToTerms"
                        name="agreeToTerms"
                        type="checkbox"
                        checked={formData.agreeToTerms}
                        onChange={handleChange}
                        className={`h-4 w-4 ${theme.borderAccent} rounded focus:ring-emerald-500`}
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="agreeToTerms" className="text-gray-700">
                        I agree to the <a href="/terms" className={`${theme.textAccent} hover:underline`}>Terms and Conditions</a> and <a href="/privacy" className={`${theme.textAccent} hover:underline`}>Privacy Policy</a>
                      </label>
                      {formErrors.agreeToTerms && <p className="mt-1 text-red-500 text-sm">{formErrors.agreeToTerms}</p>}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
            
            {/* Form Actions */}
            <div className="p-8 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between">
              {/* Back Button (for steps 2 and 3) */}
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={goToPreviousStep}
                  className={`px-6 py-3 ${theme.secondaryButton} rounded-lg transition-colors`}
                >
                  Back
                </button>
              )}
              
              {/* Next Button (for steps 1 and 2) */}
              {currentStep < 3 && (
                <button
                  type="button"
                  onClick={goToNextStep}
                  className={`px-6 py-3 ${theme.primaryButton} text-white rounded-lg transition-colors ml-auto`}
                >
                  Continue
                </button>
              )}
              
              {/* Submit Button (for step 3) */}
              {currentStep === 3 && (
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-6 py-3 ${theme.primaryButton} text-white rounded-lg transition-colors flex items-center justify-center ml-auto`}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2" size={20} />
                      Processing...
                    </>
                  ) : (
                    `Complete Purchase - $${getCurrentPrice()}`
                  )}
                </button>
              )}
            </div>
            
            {/* Error Message */}
            {submitError && (
              <div className="px-8 pb-6">
                <div className="bg-red-50 p-4 rounded-lg flex items-start">
                  <AlertCircle className="text-red-500 mt-0.5 mr-3 flex-shrink-0" size={18} />
                  <p className="text-red-700">{submitError}</p>
                </div>
              </div>
            )}
          </motion.form>
        )}
        
        {/* Features Section (visible on desktop and only in step 1) */}
        {!submitSuccess && currentStep === 1 && (
          <div className="mt-20 max-w-3xl mx-auto">
            <h2 className={`text-2xl font-bold ${theme.textAccent} text-center mb-8`}>
              Benefits of the Niti Device License
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4`}>
                  <CheckCircle className={theme.iconAccent} size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">One-time Payment</h3>
                <p className="text-gray-600">No subscription fees or hidden costs. Pay once and own your license forever.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4`}>
                  <CheckCircle className={theme.iconAccent} size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Free Updates</h3>
                <p className="text-gray-600">Receive free updates for a full year, keeping your device running smoothly.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className={`w-12 h-12 ${theme.accentLight} rounded-full flex items-center justify-center mb-4`}>
                  <CheckCircle className={theme.iconAccent} size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2">Priority Support</h3>
                <p className="text-gray-600">Get priority access to our technical support team for any questions.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}