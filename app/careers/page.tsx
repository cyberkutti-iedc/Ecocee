"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, Cpu, Users, Mail, Calendar, X, MapPin, Clock, ArrowRight, 
  User, Phone, Globe, MapPin as Location, Building, GraduationCap,
  Upload, FileText, Linkedin, Github, Briefcase, Shield, Check,
  AlertCircle, Loader2
} from "lucide-react";

interface InternshipPosition {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  duration: string;
  icon: React.ReactNode;
  description: string;
  skills: string[];
}

interface FormData {
  fullName: string;
  age: string;
  dob: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  district: string;
  address: string;
  gender: string;
  institutionName: string;
  degree: string;
  department: string;
  areaOfInterest: string;
  instituteId: File | null;
  approvalLetter: File | null;
  resume: File | null;
  linkedinProfile: string;
  githubProfile: string;
  portfolio: string;
  agreement: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const CareerPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<InternshipPosition | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    age: "",
    dob: "",
    email: "",
    phone: "",
    country: "",
    state: "",
    district: "",
    address: "",
    gender: "",
    institutionName: "",
    degree: "",
    department: "",
    areaOfInterest: "",
    instituteId: null,
    approvalLetter: null,
    resume: null,
    linkedinProfile: "",
    githubProfile: "",
    portfolio: "",
    agreement: false
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);

  const fileInputRefs = {
    instituteId: useRef<HTMLInputElement>(null),
    approvalLetter: useRef<HTMLInputElement>(null),
    resume: useRef<HTMLInputElement>(null)
  };

  const internshipPositions: InternshipPosition[] = [
    {
      id: 1,
      title: "Software Development Intern",
      department: "Engineering",
      type: "Internship",
      location: "Remote/Hybrid",
      duration: "3-6 months",
      icon: <Code className="w-5 h-5" />,
      description: "Join our software development team to work on cutting-edge web and mobile applications.",
      skills: ["React.js", "Node.js", "Python", "JavaScript", "Git"]
    },
    {
      id: 2,
      title: "Embedded Systems Intern",
      department: "Hardware",
      type: "Internship", 
      location: "On-site",
      duration: "4-6 months",
      icon: <Cpu className="w-5 h-5" />,
      description: "Work with our embedded systems team on IoT solutions and hardware programming.",
      skills: ["C/C++", "Arduino", "Raspberry Pi", "MQTT", "Sensors"]
    },
    {
      id: 3,
      title: "IoT Solutions Intern",
      department: "Product",
      type: "Internship",
      location: "Hybrid",
      duration: "3-5 months", 
      icon: <Users className="w-5 h-5" />,
      description: "Contribute to innovative IoT solutions and help shape the future of connected devices.",
      skills: ["IoT Protocols", "Cloud Platforms", "Data Analytics", "Python", "AWS/Azure"]
    }
  ];

  const degrees = [
    "B.Tech", "B.E", "BCA", "B.Sc", "MCA", "M.Tech", "M.E", "M.Sc", "MBA", "Ph.D"
  ];

  const departments = [
    "Computer Science Engineering (CSE)",
    "Electronics & Communication Engineering (ECE)",
    "Electrical & Electronics Engineering (EEE)",
    "Mechanical Engineering",
    "Civil Engineering",
    "Information Technology (IT)",
    "Electronics & Instrumentation Engineering",
    "Biomedical Engineering",
    "Chemical Engineering",
    "Aerospace Engineering",
    "Computer Applications",
    "Information Science",
    "Other"
  ];

  const areasOfInterest = [
    "Web Development",
    "Mobile App Development",
    "Embedded Systems",
    "IoT Solutions",
    "Machine Learning",
    "Data Science",
    "Cloud Computing",
    "Cybersecurity",
    "Robotics",
    "AI/ML",
    "Hardware Design",
    "PCB Design",
    "Firmware Development",
    "Other"
  ];

  const countries = ["India", "USA", "Canada", "UK", "Australia", "Germany", "Other"];
  
  const indianStates = [
    "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", 
    "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
    "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", 
    "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
    "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
    "Delhi", "Puducherry", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu",
    "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Andaman and Nicobar Islands"
  ];

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,15}$/;
    return phoneRegex.test(phone);
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};

    // Required field validations
    if (!formData.fullName.trim()) errors.fullName = "Full name is required";
    if (!formData.age || parseInt(formData.age) < 16 || parseInt(formData.age) > 100) {
      errors.age = "Age must be between 16 and 100";
    }
    if (!formData.dob) errors.dob = "Date of birth is required";
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.phone) {
      errors.phone = "Phone number is required";
    } else if (!validatePhone(formData.phone)) {
      errors.phone = "Please enter a valid phone number";
    }
    if (!formData.country) errors.country = "Country is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.district.trim()) errors.district = "District is required";
    if (!formData.address.trim()) errors.address = "Address is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.institutionName.trim()) errors.institutionName = "Institution name is required";
    if (!formData.degree) errors.degree = "Degree is required";
    if (!formData.department) errors.department = "Department is required";
    if (!formData.areaOfInterest) errors.areaOfInterest = "Area of interest is required";
    if (!formData.resume) errors.resume = "Resume/CV is required";
    if (!formData.agreement) errors.agreement = "Please accept the terms and conditions";

    // LinkedIn profile validation
    if (formData.linkedinProfile && !formData.linkedinProfile.includes('linkedin.com')) {
      errors.linkedinProfile = "Please enter a valid LinkedIn profile URL";
    }

    // GitHub profile validation
    if (formData.githubProfile && !formData.githubProfile.includes('github.com')) {
      errors.githubProfile = "Please enter a valid GitHub profile URL";
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checkbox = e.target as HTMLInputElement;
      setFormData(prev => ({
        ...prev,
        [name]: checkbox.checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }

    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, fieldName: keyof typeof fileInputRefs) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      [fieldName]: file
    }));

    // Clear error when file is selected
    if (formErrors[fieldName]) {
      setFormErrors(prev => ({
        ...prev,
        [fieldName]: ""
      }));
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: "",
      age: "",
      dob: "",
      email: "",
      phone: "",
      country: "",
      state: "",
      district: "",
      address: "",
      gender: "",
      institutionName: "",
      degree: "",
      department: "",
      areaOfInterest: "",
      instituteId: null,
      approvalLetter: null,
      resume: null,
      linkedinProfile: "",
      githubProfile: "",
      portfolio: "",
      agreement: false
    });
    setFormErrors({});
    
    // Reset file inputs
    Object.values(fileInputRefs).forEach(ref => {
      if (ref.current) {
        ref.current.value = "";
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call - Replace with actual API endpoint
      const formDataToSend = new FormData();
      
      // Append all form fields
      Object.entries(formData).forEach(([key, value]) => {
        if (value instanceof File) {
          formDataToSend.append(key, value);
        } else if (value !== null && value !== undefined) {
          formDataToSend.append(key, String(value));
        }
      });

      // Replace with your actual API endpoint
      // const response = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT || '/api/applications', {
      //   method: 'POST',
      //   body: formDataToSend,
      // });

      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 2000));

      setShowThankYou(true);
      resetForm();
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your application. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleJobClick = (job: InternshipPosition): void => {
    setSelectedJob(job);
  };

  const closeModal = (): void => {
    setSelectedJob(null);
    setShowApplicationForm(false);
    setShowThankYou(false);
  };

  const openApplicationForm = (): void => {
    setSelectedJob(null);
    setShowApplicationForm(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-indigo-600/5"></div>
        <div className="max-w-4xl mx-auto text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-7xl font-light text-gray-900 mb-8 tracking-tight">
              Careers at
              <span className="block font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Ecocee
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join our team of innovators working on embedded systems and IoT solutions. 
              Build technology that makes a difference in the world.
            </p>
            <motion.button
              onClick={openApplicationForm}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Apply Now
              <ArrowRight className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Internship Positions */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-gray-600 text-xl">
              Internship opportunities to kickstart your career
            </p>
          </motion.div>

          <div className="space-y-6">
            {internshipPositions.map((job, index) => (
              <motion.div
                key={job.id}
                className="group cursor-pointer"
                onClick={() => handleJobClick(job)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
              >
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-8 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 hover:bg-white">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mr-4">
                          {job.icon}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                            {job.title}
                          </h3>
                          <p className="text-gray-500">
                            {job.department} • {job.type}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                        {job.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-6 mb-6 text-gray-500">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-2" />
                          <span>{job.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.slice(0, 4).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm rounded-full font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                        {job.skills.length > 4 && (
                          <span className="px-4 py-2 bg-gray-100 text-gray-500 text-sm rounded-full">
                            +{job.skills.length - 4}
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="ml-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowRight className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              About Ecocee
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              We are an innovative MSME specializing in embedded systems and IoT solutions. 
              Our team is passionate about creating technology that connects the physical and digital worlds, 
              making everyday life smarter and more efficient.
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:ecoceeteam@gmail.com"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 transition-colors text-lg font-medium"
              >
                <Mail className="w-5 h-5 mr-2" />
                Get in touch
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Modal */}
      <AnimatePresence>
        {showApplicationForm && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-4xl w-full my-8 shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Application Form</h3>
                  <p className="text-gray-600">Join the Ecocee team</p>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  type="button"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <User className="w-5 h-5 mr-2" />
                    Personal Information
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your full name"
                      />
                      {formErrors.fullName && <p className="text-red-500 text-sm mt-1">{formErrors.fullName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Age *</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        min="16"
                        max="100"
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.age ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your age"
                      />
                      {formErrors.age && <p className="text-red-500 text-sm mt-1">{formErrors.age}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date of Birth *</label>
                      <input
                        type="date"
                        name="dob"
                        value={formData.dob}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.dob ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {formErrors.dob && <p className="text-red-500 text-sm mt-1">{formErrors.dob}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Gender *</label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.gender ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                      {formErrors.gender && <p className="text-red-500 text-sm mt-1">{formErrors.gender}</p>}
                    </div>
                  </div>
                </div>

                {/* Contact Information */}
                <div className="border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Contact Information
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email ID *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="your.email@example.com"
                      />
                      {formErrors.email && <p className="text-red-500 text-sm mt-1">{formErrors.email}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.phone ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="+91 12345 67890"
                      />
                      {formErrors.phone && <p className="text-red-500 text-sm mt-1">{formErrors.phone}</p>}
                    </div>
                  </div>
                </div>

                {/* Address Information */}
                <div className="border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Location className="w-5 h-5 mr-2" />
                    Address Information
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Country *</label>
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.country ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">Select Country</option>
                        {countries.map(country => (
                          <option key={country} value={country}>{country}</option>
                        ))}
                      </select>
                      {formErrors.country && <p className="text-red-500 text-sm mt-1">{formErrors.country}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">State *</label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.state ? 'border-red-500' : 'border-gray-300'}`}
                        disabled={formData.country !== 'India'}
                      >
                        <option value="">Select State</option>
                        {formData.country === 'India' && indianStates.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                        {formData.country !== 'India' && formData.country && (
                          <option value="other">Other</option>
                        )}
                      </select>
                      {formErrors.state && <p className="text-red-500 text-sm mt-1">{formErrors.state}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">District *</label>
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.district ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your district"
                      />
                      {formErrors.district && <p className="text-red-500 text-sm mt-1">{formErrors.district}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Address *</label>
                      <textarea
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.address ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your complete address"
                      />
                      {formErrors.address && <p className="text-red-500 text-sm mt-1">{formErrors.address}</p>}
                    </div>
                  </div>
                </div>

                {/* Educational Information */}
                <div className="border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <GraduationCap className="w-5 h-5 mr-2" />
                    Educational Information
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Institution Name *</label>
                      <input
                        type="text"
                        name="institutionName"
                        value={formData.institutionName}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.institutionName ? 'border-red-500' : 'border-gray-300'}`}
                        placeholder="Enter your institution name"
                      />
                      {formErrors.institutionName && <p className="text-red-500 text-sm mt-1">{formErrors.institutionName}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Degree *</label>
                      <select
                        name="degree"
                        value={formData.degree}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.degree ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">Select Degree</option>
                        {degrees.map(degree => (
                          <option key={degree} value={degree}>{degree}</option>
                        ))}
                      </select>
                      {formErrors.degree && <p className="text-red-500 text-sm mt-1">{formErrors.degree}</p>}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Department *</label>
                      <select
                        name="department"
                        value={formData.department}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.department ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">Select Department</option>
                        {departments.map(dept => (
                          <option key={dept} value={dept}>{dept}</option>
                        ))}
                      </select>
                      {formErrors.department && <p className="text-red-500 text-sm mt-1">{formErrors.department}</p>}
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Area of Interest *</label>
                      <select
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.areaOfInterest ? 'border-red-500' : 'border-gray-300'}`}
                      >
                        <option value="">Select Area of Interest</option>
                        {areasOfInterest.map(area => (
                          <option key={area} value={area}>{area}</option>
                        ))}
                      </select>
                      {formErrors.areaOfInterest && <p className="text-red-500 text-sm mt-1">{formErrors.areaOfInterest}</p>}
                    </div>
                  </div>
                </div>

                {/* Document Uploads */}
                <div className="border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Upload className="w-5 h-5 mr-2" />
                    Document Uploads
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Institute ID</label>
                      <div className="relative">
                        <input
                          type="file"
                          ref={fileInputRefs.instituteId}
                          onChange={(e) => handleFileChange(e, 'instituteId')}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRefs.instituteId.current?.click()}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-left text-gray-500 hover:bg-gray-50 transition-colors flex items-center"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          {formData.instituteId ? formData.instituteId.name : 'Upload Institute ID'}
                        </button>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Institution Approval Letter</label>
                      <div className="relative">
                        <input
                          type="file"
                          ref={fileInputRefs.approvalLetter}
                          onChange={(e) => handleFileChange(e, 'approvalLetter')}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRefs.approvalLetter.current?.click()}
                          className="w-full px-4 py-3 border border-gray-300 rounded-xl text-left text-gray-500 hover:bg-gray-50 transition-colors flex items-center"
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          {formData.approvalLetter ? formData.approvalLetter.name : 'Upload Approval Letter'}
                        </button>
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Resume/CV *</label>
                      <div className="relative">
                        <input
                          type="file"
                          ref={fileInputRefs.resume}
                          onChange={(e) => handleFileChange(e, 'resume')}
                          accept=".pdf,.doc,.docx"
                          className="hidden"
                        />
                        <button
                          type="button"
                          onClick={() => fileInputRefs.resume.current?.click()}
                          className={`w-full px-4 py-3 border rounded-xl text-left hover:bg-gray-50 transition-colors flex items-center ${formErrors.resume ? 'border-red-500' : 'border-gray-300'}`}
                        >
                          <FileText className="w-4 h-4 mr-2" />
                          {formData.resume ? formData.resume.name : 'Upload Resume/CV *'}
                        </button>
                        {formErrors.resume && <p className="text-red-500 text-sm mt-1">{formErrors.resume}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Professional Profiles */}
                <div className="border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Briefcase className="w-5 h-5 mr-2" />
                    Professional Profiles
                  </h4>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">LinkedIn Profile</label>
                      <div className="relative">
                        <Linkedin className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="url"
                          name="linkedinProfile"
                          value={formData.linkedinProfile}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.linkedinProfile ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="https://linkedin.com/in/yourprofile"
                        />
                        {formErrors.linkedinProfile && <p className="text-red-500 text-sm mt-1">{formErrors.linkedinProfile}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">GitHub Profile</label>
                      <div className="relative">
                        <Github className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                          type="url"
                          name="githubProfile"
                          value={formData.githubProfile}
                          onChange={handleInputChange}
                          className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${formErrors.githubProfile ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="https://github.com/yourusername"
                        />
                        {formErrors.githubProfile && <p className="text-red-500 text-sm mt-1">{formErrors.githubProfile}</p>}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">Portfolio (Optional)</label>
                      <input
                        type="url"
                        name="portfolio"
                        value={formData.portfolio}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="https://yourportfolio.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Agreement */}
                <div className="border border-gray-200 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2" />
                    Terms & Agreement
                  </h4>
                  
                  <div className="bg-gray-50 rounded-xl p-4 mb-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      By submitting this application, I agree to the following terms:
                    </p>
                    <ul className="text-sm text-gray-600 mt-2 space-y-1 list-disc list-inside">
                      <li>All information provided is accurate and truthful</li>
                      <li>I consent to the processing of my personal data for recruitment purposes</li>
                      <li>I understand that providing false information may result in disqualification</li>
                      <li>I agree to Ecocee's privacy policy and data handling practices</li>
                    </ul>
                  </div>
                  
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={handleInputChange}
                      className="mt-1 mr-3 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <label className={`text-sm ${formErrors.agreement ? 'text-red-500' : 'text-gray-700'}`}>
                      I have read and agree to the terms and conditions *
                    </label>
                  </div>
                  {formErrors.agreement && <p className="text-red-500 text-sm mt-1">{formErrors.agreement}</p>}
                </div>

                {/* Form Actions */}
                <div className="flex flex-col sm:flex-row gap-4 pt-6">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    Reset Form
                  </button>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Application'
                    )}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Check className="w-10 h-10 text-green-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Application Submitted!
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Thank you for your interest in joining Ecocee! We have received your application 
                  and will review it carefully. We'll contact you soon with updates on your application status.
                </p>
                
                <div className="bg-blue-50 rounded-xl p-4 mb-6">
                  <p className="text-sm text-blue-800 font-medium">
                    What's Next?
                  </p>
                  <p className="text-sm text-blue-700 mt-1">
                    Our team will review your application within 3-5 business days. 
                    You'll receive an email confirmation shortly.
                  </p>
                </div>
                
                <button 
                  onClick={closeModal}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all"
                  type="button"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-2xl w-full shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className="p-3 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-xl mr-4">
                    {selectedJob.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">{selectedJob.title}</h3>
                    <p className="text-gray-600">{selectedJob.department} • {selectedJob.type}</p>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                  type="button"
                >
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-600 leading-relaxed">{selectedJob.description}</p>
                </div>
                
                <div className="flex flex-wrap gap-6 text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span>{selectedJob.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2" />
                    <span>{selectedJob.duration}</span>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedJob.skills.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 text-sm rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Ready to Apply?</h4>
                  <p className="text-gray-600 mb-4">
                    Join our team and work on exciting projects that make a real impact. 
                    Fill out our comprehensive application form to get started.
                  </p>
                  <button
                    onClick={openApplicationForm}
                    className="w-full py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all flex items-center justify-center"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Ecocee</h3>
          <p className="text-gray-600 mb-4">
            Embedded Systems & IoT Solutions
          </p>
          <div className="flex justify-center items-center text-gray-500">
            <Mail className="w-4 h-4 mr-2" />
            <a 
              href="mailto:ecoceeteam@gmail.com"
              className="hover:text-blue-600 transition-colors"
            >
              ecoceeteam@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CareerPage;
