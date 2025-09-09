"use client";
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { leadsFormStatus } from '@/data/leadsFormStatus';

type FormState = {
  fullName: string;
  dob: string;
  gender: string;
  contactNumber: string;
  email: string;
  permanentAddress: string;
  currentAddress: string;
  emergencyContactName: string;
  emergencyContactRelation: string;
  emergencyContactPhone: string;
  department: string;
  role: string;
  employmentType: string;
  dateOfJoining: string;
  reportingManager: string;
  highestQualification: string;
  certifications: string;
  yearsOfExperience: string;
  previousEmployers: string;
  govIdNumber: string;
  idProofUrl: string;
  panNumber: string;
  bankAccount: string;
  pfEsiDetails: string;
  coreSkills: string;
  languagesKnown: string;
  areasOfInterest: string;
  linkedin: string;
  github: string;
  website: string;
  socialMedia: string;
  ndaAccepted: boolean;
  consentAccepted: boolean;
  digitalSignature: string;
  photoUrl: string;
};

const InputField = ({ label, name, type = "text", placeholder, required = false, className = "", value, onChange, error, ...props }: {
  label: string;
  name: keyof FormState;
  type?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required={required}
      className={`w-full border rounded px-3 py-2 ${error ? 'border-red-500' : ''} ${className}`}
      value={value}
      onChange={onChange}
      {...props}
    />
    {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
  </div>
);

const SelectField = ({ label, name, options, required = false, className = "", value, onChange, error }: {
  label: string;
  name: keyof FormState;
  options: string[];
  required?: boolean;
  className?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 mb-1">{label}</label>
    <select
      name={name}
      required={required}
      className={`w-full border rounded px-3 py-2 ${error ? 'border-red-500' : ''} ${className}`}
      value={value}
      onChange={onChange}
    >
      <option value="">Select {label}</option>
      {options.map((option: string) => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
    {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
  </div>
);

const CheckboxField: React.FC<{
  label: string;
  name: keyof FormState;
  required?: boolean;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}> = ({ label, name, required = false, checked, onChange, error }) => (
  <div>
    <label className="flex items-center gap-2">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        required={required}
        className={`accent-blue-600 ${error ? 'border-red-500' : ''}`}
      />
      {label}
    </label>
    {error && <p className="text-xs text-red-600 mt-1">{error}</p>}
  </div>
);

export default function LeadFormCollector() {
  const [form, setForm] = useState<FormState>({
    fullName: '',
    dob: '',
    gender: '',
    contactNumber: '',
    email: '',
    permanentAddress: '',
    currentAddress: '',
    emergencyContactName: '',
    emergencyContactRelation: '',
    emergencyContactPhone: '',
    department: '',
    role: '',
    employmentType: '',
    dateOfJoining: '',
    reportingManager: '',
    highestQualification: '',
    certifications: '',
    yearsOfExperience: '',
    previousEmployers: '',
    govIdNumber: '',
    idProofUrl: '',
    panNumber: '',
    bankAccount: '',
    pfEsiDetails: '',
    coreSkills: '',
    languagesKnown: '',
    areasOfInterest: '',
    linkedin: '',
    github: '',
    website: '',
    socialMedia: '',
    ndaAccepted: false,
    consentAccepted: false,
    digitalSignature: '',
    photoUrl: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [message, setMessage] = useState({ text: '', type: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);
  const sections = [
    'Basic Personal Information',
    'Job / Company Information',
    'Professional Background',
    'Identity & Compliance',
    'Skills & Interests',
    'Optional Information',
    'Declarations'
  ];

  useEffect(() => {
    // Set today's date as default for date of joining
    const today = new Date().toISOString().split('T')[0];
    setForm(prev => ({ ...prev, dateOfJoining: today }));
  }, []);

  const validateField = (name: string, value: any) => {
    let error = '';
    
    switch (name) {
      case 'email':
        if (!value.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
          error = 'Please enter a valid email address';
        }
        break;
      case 'contactNumber':
      case 'emergencyContactPhone':
        if (!value.match(/^[0-9+\-\s]{10,15}$/)) {
          error = 'Please enter a valid phone number';
        }
        break;
      case 'digitalSignature':
        if (value !== form.fullName) {
          error = 'Digital signature must match your full name';
        }
        break;
      case 'idProofUrl':
      case 'photoUrl':
        if (value && !value.includes('drive.google.com')) {
          error = 'Please provide a valid Google Drive link';
        }
        break;
      case 'yearsOfExperience':
        if (isNaN(value) || value < 0 || value > 50) {
          error = 'Please enter a valid number of years (0-50)';
        }
        break;
      default:
        if (typeof value === 'string' && !value.trim() && name !== 'currentAddress' && 
            name !== 'panNumber' && name !== 'bankAccount' && name !== 'pfEsiDetails' && 
            name !== 'socialMedia' && name !== 'github' && name !== 'website' && 
            name !== 'certifications' && name !== 'previousEmployers') {
          error = 'This field is required';
        }
    }
    
    return error;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    
    setForm(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Validate field in real-time
    if (type !== 'checkbox') {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    Object.entries(form).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) newErrors[key] = error;
    });
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setMessage({ text: 'Please fix the errors in the form', type: 'error' });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    
    setIsSubmitting(true);
    setMessage({ text: 'Submitting...', type: 'info' });
    
    try {
      const res = await fetch('/api/leads/leadformcollector', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      
      const data = await res.json();
      
      if (res.ok) {
        setMessage({ text: 'Form submitted successfully!', type: 'success' });
        // Reset form after successful submission
        setForm({
          fullName: '',
          dob: '',
          gender: '',
          contactNumber: '',
          email: '',
          permanentAddress: '',
          currentAddress: '',
          emergencyContactName: '',
          emergencyContactRelation: '',
          emergencyContactPhone: '',
          department: '',
          role: '',
          employmentType: '',
          dateOfJoining: new Date().toISOString().split('T')[0],
          reportingManager: '',
          highestQualification: '',
          certifications: '',
          yearsOfExperience: '',
          previousEmployers: '',
          govIdNumber: '',
          idProofUrl: '',
          panNumber: '',
          bankAccount: '',
          pfEsiDetails: '',
          coreSkills: '',
          languagesKnown: '',
          areasOfInterest: '',
          linkedin: '',
          github: '',
          website: '',
          socialMedia: '',
          ndaAccepted: false,
          consentAccepted: false,
          digitalSignature: '',
          photoUrl: '',
        });
      } else {
        setMessage({ text: data.error || 'Submission failed. Please try again.', type: 'error' });
      }
    } catch (error) {
      setMessage({ text: 'Network error. Please check your connection and try again.', type: 'error' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const nextSection = () => {
    if (currentSection < sections.length - 1) {
      setCurrentSection(prev => prev + 1);
    }
  };

  const prevSection = () => {
    if (currentSection > 0) {
      setCurrentSection(prev => prev - 1);
    }
  };

  if (!leadsFormStatus.enabled) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="bg-white shadow-xl rounded-2xl p-8 text-center">
          <h1 className="text-2xl font-bold text-red-600 mb-4">Form is currently OFF</h1>
          <p className="text-gray-700">Please contact the admin for access or more information.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white shadow-xl rounded-2xl overflow-hidden"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 text-center">
            <h1 className="text-3xl font-bold mb-2">Leads Data Collection Form</h1>
            <p className="opacity-90">Please fill out all required fields marked with an asterisk (*)</p>
          </div>

          {/* Progress Bar */}
          <div className="px-6 pt-6">
            <div className="flex justify-between mb-2">
              {sections.map((section, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSection(index)}
                  className={`text-xs font-medium px-3 py-1 rounded-full transition-all ${
                    currentSection === index
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-500 hover:text-blue-600'
                  }`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div 
                className="bg-blue-600 h-2.5 rounded-full"
                initial={{ width: `${(currentSection / (sections.length - 1)) * 100}%` }}
                animate={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="text-sm text-gray-500 mt-2 text-center">
              Section {currentSection + 1} of {sections.length}: {sections[currentSection]}
            </p>
          </div>

          {/* Message Alert */}
          <AnimatePresence>
            {message.text && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mx-6 mt-4 p-4 rounded-lg ${
                  message.type === 'error' 
                    ? 'bg-red-100 text-red-700' 
                    : message.type === 'success' 
                    ? 'bg-green-100 text-green-700'
                    : 'bg-blue-100 text-blue-700'
                }`}
              >
                {message.text}
              </motion.div>
            )}
          </AnimatePresence>

          <form onSubmit={handleSubmit} className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSection}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                {/* 1. Basic Personal Information */}
                {currentSection === 0 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">1. Basic Personal Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Full Name" name="fullName" placeholder="Full Name" required value={form.fullName} onChange={handleChange} error={errors.fullName} />
                      <InputField label="Date of Birth" name="dob" type="date" required placeholder={undefined} value={form.dob} onChange={handleChange} error={errors.dob} />
                      <SelectField 
                        label="Gender" 
                        name="gender" 
                        options={["Male", "Female", "Other"]} 
                        value={form.gender} 
                        onChange={handleChange}
                        required 
                        error={errors.gender}
                      />
                      <InputField label="Contact Number" name="contactNumber" placeholder="Contact Number" required value={form.contactNumber} onChange={handleChange} error={errors.contactNumber} />
                      <InputField label="Email Address" name="email" type="email" placeholder="Email Address" required value={form.email} onChange={handleChange} error={errors.email} />
                      <InputField label="Permanent Address" name="permanentAddress" placeholder="Permanent Address" required value={form.permanentAddress} onChange={handleChange} error={errors.permanentAddress} />
                      <InputField label="Current Address (if different)" name="currentAddress" placeholder="Current Address" value={form.currentAddress} onChange={handleChange} error={errors.currentAddress} />
                      <InputField label="Emergency Contact Name" name="emergencyContactName" placeholder="Emergency Contact Name" required value={form.emergencyContactName} onChange={handleChange} error={errors.emergencyContactName} />
                      <InputField label="Emergency Contact Relation" name="emergencyContactRelation" placeholder="Emergency Contact Relation" required value={form.emergencyContactRelation} onChange={handleChange} error={errors.emergencyContactRelation} />
                      <InputField label="Emergency Contact Phone" name="emergencyContactPhone" placeholder="Emergency Contact Phone" required value={form.emergencyContactPhone} onChange={handleChange} error={errors.emergencyContactPhone} />
                    </div>
                  </div>
                )}

                {/* 2. Job / Company Information */}
                {currentSection === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">2. Job / Company Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <SelectField 
                        label="Department" 
                        name="department" 
                        options={["Executive", "Engineering", "Marketing", "Other"]} 
                        value={form.department} 
                        onChange={handleChange}
                        required 
                        error={errors.department}
                      />
                      <InputField label="Role / Job Title" name="role" placeholder="Role / Job Title" required value={form.role} onChange={handleChange} error={errors.role} />
                      <SelectField 
                        label="Employment Type" 
                        name="employmentType" 
                        options={["Full-time", "Part-time", "Intern", "Contract","Team"]} 
                        value={form.employmentType} 
                        onChange={handleChange}
                        required 
                        error={errors.employmentType}
                      />
                      <InputField label="Date of Joining" name="dateOfJoining" type="date" required placeholder={undefined} value={form.dateOfJoining} onChange={handleChange} error={errors.dateOfJoining} />
                      <InputField label="Reporting Manager / Supervisor" name="reportingManager" placeholder="Reporting Manager" required value={form.reportingManager} onChange={handleChange} error={errors.reportingManager} />
                    </div>
                  </div>
                )}

                {/* 3. Professional Background */}
                {currentSection === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">3. Professional Background</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Highest Qualification" name="highestQualification" placeholder="Highest Qualification" required value={form.highestQualification} onChange={handleChange} error={errors.highestQualification} />
                      <InputField label="Certifications / Special Skills" name="certifications" placeholder="Certifications / Special Skills" value={form.certifications} onChange={handleChange} error={errors.certifications} />
                      <InputField label="Years of Experience" name="yearsOfExperience" type="number" placeholder="Years of Experience" value={form.yearsOfExperience} onChange={handleChange} error={errors.yearsOfExperience} />
                      <InputField label="Previous Employer(s)" name="previousEmployers" placeholder="Previous Employer(s) (if student, type 0)" value={form.previousEmployers} onChange={handleChange} error={errors.previousEmployers} />
                    </div>
                  </div>
                )}

                {/* 4. Identity & Compliance */}
                {currentSection === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">4. Identity & Compliance</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Government ID Number" name="govIdNumber" placeholder="Government ID Number" required value={form.govIdNumber} onChange={handleChange} error={errors.govIdNumber} />
                      <InputField 
                        label="ID Proof Google Drive Link" 
                        name="idProofUrl" 
                        placeholder="ID Proof Google Drive Link" 
                        required 
                        value={form.idProofUrl} 
                        onChange={handleChange}
                        error={errors.idProofUrl}
                      />
                      <div className="md:col-span-2 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <p className="text-sm text-yellow-700">
                          <span className="font-bold">Note:</span> Upload to Google Drive, set to 'Anyone with the link can view'. Mask Aadhaar if needed.
                        </p>
                      </div>
                      <InputField label="PAN Number (optional)" name="panNumber" placeholder="PAN Number" value={form.panNumber} onChange={handleChange} error={errors.panNumber} />
                      <InputField label="Bank Account Details (optional)" name="bankAccount" placeholder="Bank Account Details" value={form.bankAccount} onChange={handleChange} error={errors.bankAccount} />
                      <InputField label="PF / ESI Details (optional)" name="pfEsiDetails" placeholder="PF / ESI Details" value={form.pfEsiDetails} onChange={handleChange} error={errors.pfEsiDetails} />
                    </div>
                  </div>
                )}

                {/* 5. Skills & Interests */}
                {currentSection === 4 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">5. Skills & Interests</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="Core Skills" name="coreSkills" placeholder="Core Skills" required value={form.coreSkills} onChange={handleChange} error={errors.coreSkills} />
                      <InputField label="Languages Known" name="languagesKnown" placeholder="Languages Known" required value={form.languagesKnown} onChange={handleChange} error={errors.languagesKnown} />
                      <div className="md:col-span-2">
                        <InputField label="Areas of Interest" name="areasOfInterest" placeholder="Areas of Interest" required value={form.areasOfInterest} onChange={handleChange} error={errors.areasOfInterest} />
                      </div>
                    </div>
                  </div>
                )}

                {/* 6. Optional Information */}
                {currentSection === 5 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">6. Optional Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <InputField label="LinkedIn Profile" name="linkedin" placeholder="LinkedIn Profile" value={form.linkedin} onChange={handleChange} error={errors.linkedin} />
                      <InputField label="GitHub / Portfolio" name="github" placeholder="GitHub / Portfolio" value={form.github} onChange={handleChange} error={errors.github} />
                      <InputField label="Personal Website / Portfolio" name="website" placeholder="Personal Website / Portfolio" value={form.website} onChange={handleChange} error={errors.website} />
                      <InputField label="Social Media (if job-relevant)" name="socialMedia" placeholder="Social Media" value={form.socialMedia} onChange={handleChange} error={errors.socialMedia} />
                    </div>
                  </div>
                )}

                {/* 7. Declarations */}
                {currentSection === 6 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-800 border-b pb-2">7. Declarations</h2>
                    <div className="space-y-4">
                      <CheckboxField 
                        label="I accept the Non-Disclosure Agreement (NDA)" 
                        name="ndaAccepted" 
                        required 
                        checked={form.ndaAccepted} 
                        onChange={handleChange}
                        error={errors.ndaAccepted}
                      />
                      <CheckboxField 
                        label="I consent to the storage and processing of my data" 
                        name="consentAccepted" 
                        required 
                        checked={form.consentAccepted} 
                        onChange={handleChange}
                        error={errors.consentAccepted}
                      />
                      <InputField 
                        label="Digital Signature (type full name)" 
                        name="digitalSignature" 
                        placeholder="Type your full name" 
                        required 
                        value={form.digitalSignature} 
                        onChange={handleChange}
                        error={errors.digitalSignature}
                      />
                      <InputField 
                        label="Photo Google Drive Link" 
                        name="photoUrl" 
                        placeholder="Photo Google Drive Link" 
                        required 
                        value={form.photoUrl} 
                        onChange={handleChange}
                        error={errors.photoUrl}
                      />
                      <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                        <p className="text-sm text-yellow-700">
                          <span className="font-bold">Note:</span> Upload a good quality photo to Google Drive, set to 'Anyone with the link can view'.
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <motion.button
                type="button"
                onClick={prevSection}
                disabled={currentSection === 0}
                className={`px-6 py-2 rounded-lg font-medium transition-all ${
                  currentSection === 0
                    ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
                whileHover={{ scale: currentSection === 0 ? 1 : 1.02 }}
                whileTap={{ scale: currentSection === 0 ? 1 : 0.98 }}
              >
                Previous
              </motion.button>

              {currentSection < sections.length - 1 ? (
                <motion.button
                  type="button"
                  onClick={nextSection}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Next
                </motion.button>
              ) : (
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-6 py-2 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 disabled:bg-green-400 transition-colors"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    'Submit Form'
                  )}
                </motion.button>
              )}
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}