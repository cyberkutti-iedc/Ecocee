"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Code, Cpu, Users, Mail, X, MapPin, Clock, ArrowRight, 
  User, Phone, MapPin as Location, GraduationCap,
  Upload, FileText, Linkedin, Github, Briefcase, Shield, Check,
  Loader2, ChevronDown, Brain, Microchip, Award, Target,
  BookOpen, Lightbulb, Wrench, Database,
  Globe,
  Calendar
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
  responsibilities: string[];
  learningOutcomes: string[];
  requirements: string[];
  category: 'ai' | 'embedded';
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
  currentYear: string;
  areaOfInterest: string;
  instituteId: string;
  approvalLetter: string;
  resume: string;
  linkedinProfile: string;
  githubProfile: string;
  portfolio: string;
  referralId: string;
  positionApplied: string;
  agreement: boolean;
}

interface FormErrors {
  [key: string]: string;
}

const CareerPage: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<InternshipPosition | null>(null);
  const [showApplicationForm, setShowApplicationForm] = useState<boolean>(false);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'ai' | 'embedded'>('all');
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
    currentYear: "",
    areaOfInterest: "",
    instituteId: "",
    approvalLetter: "",
    resume: "",
    linkedinProfile: "",
    githubProfile: "",
    portfolio: "",
    referralId: "",
    positionApplied: "",
    agreement: false
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [showThankYou, setShowThankYou] = useState<boolean>(false);

  const positionsRef = useRef<HTMLDivElement>(null);

  const internshipPositions: InternshipPosition[] = [
    {
      id: 1,
      title: "AI/ML Developer Intern",
      department: "Artificial Intelligence",
      type: "Internship",
      location: "Offline",
      duration: "15 Days",
      category: "ai",
      icon: <Brain className="w-5 h-5" />,
      description: "Join our AI team to work on cutting-edge machine learning projects, computer vision applications, and intelligent automation systems that shape the future of technology.",
      skills: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Pandas", "NumPy", "Keras"],
      responsibilities: [
        "Develop and train machine learning models for real-world applications",
        "Implement computer vision algorithms for image processing and analysis",
        "Work on natural language processing projects and chatbot development",
        "Optimize ML models for performance and deployment",
        "Collaborate with cross-functional teams on AI-driven solutions",
        "Conduct data preprocessing and feature engineering",
        "Document research findings and present results to stakeholders",
        "Participate in code reviews and maintain high coding standards"
      ],
      learningOutcomes: [
        "Hands-on experience with industry-standard ML frameworks",
        "Understanding of end-to-end ML pipeline development",
        "Knowledge of model deployment and production systems",
        "Experience with cloud ML services (AWS, GCP, Azure)",
        "Skills in data visualization and statistical analysis",
        "Understanding of AI ethics and responsible AI practices"
      ],
      requirements: [
        "Strong foundation in mathematics and statistics",
        "Programming experience in Python",
        "Basic understanding of machine learning concepts",
        "Familiarity with data structures and algorithms",
        "Interest in AI research and applications",
        "Good analytical and problem-solving skills"
      ]
    },
    {
      id: 2,
      title: "Embedded Systems Developer Intern",
      department: "Hardware Engineering",
      type: "Internship", 
      location: "Offline",
      duration: "15 Days",
      category: "embedded",
      icon: <Microchip className="w-5 h-5" />,
      description: "Work with our embedded systems team on IoT solutions, microcontroller programming, and hardware-software integration for innovative electronic products.",
      skills: ["C/C++", "Arduino", "Raspberry Pi", "MQTT", "I2C/SPI", "PCB Design", "RTOS", "Embedded Linux"],
      responsibilities: [
        "Design and develop embedded software for microcontrollers",
        "Work on IoT device connectivity and communication protocols",
        "Implement sensor integration and data acquisition systems",
        "Develop firmware for various hardware platforms",
        "Debug and troubleshoot embedded systems issues",
        "Collaborate on PCB design and hardware testing",
        "Optimize code for memory and power efficiency",
        "Create technical documentation and user manuals"
      ],
      learningOutcomes: [
        "Proficiency in embedded C/C++ programming",
        "Understanding of microcontroller architectures",
        "Experience with real-time operating systems",
        "Knowledge of communication protocols (UART, SPI, I2C)",
        "Skills in hardware debugging and testing",
        "Understanding of power management in embedded systems"
      ],
      requirements: [
        "Strong programming skills in C/C++",
        "Basic understanding of digital electronics",
        "Familiarity with microcontrollers and development boards",
        "Knowledge of basic circuit analysis",
        "Interest in hardware-software integration",
        "Good debugging and problem-solving abilities"
      ]
    },
    // {
    //   id: 3,
    //   title: "Full Stack AI Developer Intern",
    //   department: "Software Development",
    //   type: "Internship",
    //   location: "Offline", 
    //   duration: "15 Days",
    //   category: "ai",
    //   icon: <Code className="w-5 h-5" />,
    //   description: "Build end-to-end AI-powered web applications, integrating machine learning models with modern web technologies to create intelligent user experiences.",
    //   skills: ["React.js", "Node.js", "Python", "FastAPI", "MongoDB", "Docker", "TensorFlow.js", "WebRTC"],
    //   responsibilities: [
    //     "Develop responsive web interfaces for AI applications",
    //     "Integrate ML models with web backends using REST APIs",
    //     "Build real-time AI features using WebSocket connections",
    //     "Implement user authentication and authorization systems",
    //     "Create data visualization dashboards for AI insights",
    //     "Optimize application performance and user experience",
    //     "Deploy applications using containerization and cloud services",
    //     "Maintain code quality through testing and documentation"
    //   ],
    //   learningOutcomes: [
    //     "Full-stack development skills with modern frameworks",
    //     "Experience integrating AI/ML models with web applications",
    //     "Knowledge of API design and microservices architecture",
    //     "Understanding of cloud deployment and DevOps practices",
    //     "Skills in database design and management",
    //     "Experience with real-time application development"
    //   ],
    //   requirements: [
    //     "Proficiency in JavaScript/TypeScript and Python",
    //     "Experience with React.js or similar frontend frameworks",
    //     "Basic understanding of machine learning concepts",
    //     "Familiarity with RESTful API development",
    //     "Knowledge of database systems (SQL/NoSQL)",
    //     "Interest in AI-powered web applications"
    //   ]
    // },
    // {
    //   id: 4,
    //   title: "IoT Systems Integration Intern",
    //   department: "IoT Solutions",
    //   type: "Internship",
    //   location: "Offline",
    //   duration: "15 Days", 
    //   category: "embedded",
    //   icon: <Cpu className="w-5 h-5" />,
    //   description: "Design and implement comprehensive IoT solutions, from sensor networks to cloud integration, creating smart systems for various industry applications.",
    //   skills: ["Python", "MQTT", "LoRaWAN", "AWS IoT", "Grafana", "InfluxDB", "Node-RED", "Zigbee"],
    //   responsibilities: [
    //     "Design IoT system architectures for various use cases",
    //     "Implement sensor data collection and processing pipelines",
    //     "Develop cloud-based IoT dashboards and analytics",
    //     "Configure and manage IoT communication protocols",
    //     "Build automated alerting and notification systems",
    //     "Integrate IoT systems with existing enterprise applications",
    //     "Perform system testing and validation",
    //     "Create comprehensive system documentation"
    //   ],
    //   learningOutcomes: [
    //     "Understanding of IoT system architecture and design patterns",
    //     "Experience with various IoT communication protocols",
    //     "Knowledge of cloud IoT platforms and services",
    //     "Skills in time-series data management and visualization",
    //     "Understanding of IoT security best practices",
    //     "Experience with industrial IoT applications"
    //   ],
    //   requirements: [
    //     "Programming experience in Python or similar languages",
    //     "Basic understanding of networking and protocols",
    //     "Familiarity with cloud platforms (AWS, Azure, GCP)",
    //     "Interest in IoT and connected device ecosystems",
    //     "Knowledge of database systems and data analysis",
    //     "Good system thinking and integration skills"
    //   ]
    // }
  ];

  const degrees = [
    "B.Tech", "B.E", "BCA", "B.Sc", "MCA", "M.Tech", "M.E", "M.Sc", "MBA", "Ph.D"
  ];

  const departments = [
    "Computer Science Engineering (CSE)",
    "Computer Science Engineering - AI (CSE-AI)",
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
    "Data Science",
    "Artificial Intelligence",
    "Machine Learning",
    "Robotics Engineering",
    "Other"
  ];

  const areasOfInterest = [
    "Artificial Intelligence & Machine Learning",
    "Deep Learning & Neural Networks",
    "Computer Vision",
    "Natural Language Processing",
    "Embedded Systems Development",
    "IoT Solutions & Smart Devices",
    "Microcontroller Programming",
    "PCB Design & Hardware Development",
    "Web Development",
    "Mobile App Development",
    "Cloud Computing",
    "Cybersecurity",
    "Robotics",
    "Data Science & Analytics",
    "DevOps & System Administration",
    "Other"
  ];

  const currentYears = [
    "1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "6th Year"
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
    if (!formData.currentYear) errors.currentYear = "Current year is required";
    if (!formData.areaOfInterest) errors.areaOfInterest = "Area of interest is required";
    if (!formData.positionApplied) errors.positionApplied = "Position applied is required";
    if (!formData.resume) {
      errors.resume = "Resume/CV Google Drive link is required";
    } else if (!formData.resume.includes('drive.google.com')) {
      errors.resume = "Please enter a valid Google Drive link for Resume/CV";
    }
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
      currentYear: "",
      areaOfInterest: "",
      instituteId: "",
      approvalLetter: "",
      resume: "",
      linkedinProfile: "",
      githubProfile: "",
      portfolio: "",
      referralId: "",
      positionApplied: "",
      agreement: false
    });
    setFormErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!validateForm()) return;
  
    setIsSubmitting(true);
  
    try {
      const res = await fetch('/api/intern', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      const result = await res.json();
  
      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Submission failed');
      }
  
      console.log('Intern data saved:', result.document);
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

  const openApplicationForm = (positionTitle?: string): void => {
    if (positionTitle) {
      setFormData(prev => ({
        ...prev,
        positionApplied: positionTitle
      }));
    }
    setSelectedJob(null);
    setShowApplicationForm(true);
  };

  const scrollToPositions = () => {
    positionsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const filteredPositions = selectedCategory === 'all' 
    ? internshipPositions 
    : internshipPositions.filter(job => job.category === selectedCategory);

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
              Join our team of innovators working on AI, machine learning, embedded systems, and IoT solutions. 
              Build technology that makes a difference in the world.
            </p>
            <motion.button
              onClick={scrollToPositions}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Open Positions
              <ChevronDown className="w-5 h-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-6" ref={positionsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-2 flex space-x-2">
              {[
                { key: 'all', label: 'All Positions', icon: <Briefcase className="w-4 h-4" /> },
                { key: 'ai', label: 'AI/ML', icon: <Brain className="w-4 h-4" /> },
                { key: 'embedded', label: 'Embedded Systems', icon: <Microchip className="w-4 h-4" /> }
              ].map((category) => (
                <button
                  key={category.key}
                  onClick={() => setSelectedCategory(category.key as any)}
                  className={`flex items-center px-6 py-3 rounded-xl transition-all ${
                    selectedCategory === category.key
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.icon}
                  <span className="ml-2 font-medium">{category.label}</span>
                </button>
              ))}
            </div>
          </div>
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
              Internship opportunities to kickstart your career in cutting-edge technology
            </p>
          </motion.div>

          <div className="space-y-6">
            {filteredPositions.map((job, index) => (
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
                        <div className={`p-3 rounded-xl mr-4 ${
                          job.category === 'ai' 
                            ? 'bg-gradient-to-r from-purple-100 to-pink-100' 
                            : 'bg-gradient-to-r from-blue-100 to-indigo-100'
                        }`}>
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
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-2" />
                          <span className="capitalize">{job.category} Track</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2">
                        {job.skills.slice(0, 4).map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className={`px-4 py-2 text-sm rounded-full font-medium ${
                              job.category === 'ai'
                                ? 'bg-gradient-to-r from-purple-50 to-pink-50 text-purple-700'
                                : 'bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700'
                            }`}
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
              We are an innovative MSME specializing in AI/ML solutions, embedded systems, and IoT technologies. 
              Our team is passionate about creating intelligent systems that bridge the physical and digital worlds, 
              making technology more accessible and impactful for businesses and communities.
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

      {/* Job Details Modal */}
      <AnimatePresence>
        {selectedJob && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-4xl w-full my-8 shadow-2xl max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e: React.MouseEvent) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                  <div className={`p-3 rounded-xl mr-4 ${
                    selectedJob.category === 'ai' 
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100' 
                      : 'bg-gradient-to-r from-blue-100 to-indigo-100'
                  }`}>
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
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <FileText className="w-5 h-5 mr-2" />
                    Description
                  </h4>
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
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                      <Check className="w-5 h-5 mr-2" />
                                      Skills Required
                                    </h4>
                                    <ul className="list-disc list-inside text-gray-600">
                                      {selectedJob.skills.map((skill, index) => (
                                        <li key={index}>{skill}</li>
                                      ))}
                                    </ul>
                                  </div>
                  
                                  <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                      <Shield className="w-5 h-5 mr-2" />
                                      Responsibilities
                                    </h4>
                                    <ul className="list-disc list-inside text-gray-600">
                                      {selectedJob.responsibilities.map((responsibility, index) => (
                                        <li key={index}>{responsibility}</li>
                                      ))}
                                    </ul>
                                  </div>
                  
                                  <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                      <Award className="w-5 h-5 mr-2" />
                                      Learning Outcomes
                                    </h4>
                                    <ul className="list-disc list-inside text-gray-600">
                                      {selectedJob.learningOutcomes.map((outcome, index) => (
                                        <li key={index}>{outcome}</li>
                                      ))}
                                    </ul>
                                  </div>
                  
                                  <div>
                                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                                      <Target className="w-5 h-5 mr-2" />
                                      Requirements
                                    </h4>
                                    <ul className="list-disc list-inside text-gray-600">
                                      {selectedJob.requirements.map((requirement, index) => (
                                        <li key={index}>{requirement}</li>
                                      ))}
                                    </ul>
                                  </div>
                                </div>
                  
                                <div className="mt-8 text-center">
                                  <button
                                    onClick={() => openApplicationForm(selectedJob.title)}
                                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                                  >
                                    Apply Now
                                  </button>
                                </div>
                              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                  
                        {/* Application Form Modal */}
                        <AnimatePresence>
                          {showApplicationForm && (
                            <motion.div
                              className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              onClick={closeModal}
                            >
                              <motion.div
                                className="bg-white rounded-3xl p-8 max-w-4xl w-full my-8 shadow-2xl max-h-[90vh] overflow-y-auto"
                                initial={{ scale: 0.95, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.95, opacity: 0 }}
                                onClick={(e: React.MouseEvent) => e.stopPropagation()}
                              >
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Application Form</h3>
                                <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 rounded-3xl shadow-2xl border border-gray-100">
  {/* Personal Information Section */}
  <div className="space-y-6">
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
        <User className="w-4 h-4 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">Personal Information</h3>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
        <div className="relative">
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.fullName 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="Enter your full name"
          />
          <User className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.fullName && <p className="text-red-500 text-sm font-medium">{formErrors.fullName}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Age</label>
        <div className="relative">
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.age 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="Enter your age"
          />
          <Calendar className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.age && <p className="text-red-500 text-sm font-medium">{formErrors.age}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Date of Birth</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleInputChange}
          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
            formErrors.dob 
              ? "border-red-400 bg-red-50" 
              : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
          }`}
        />
        {formErrors.dob && <p className="text-red-500 text-sm font-medium">{formErrors.dob}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Gender</label>
        <div className="relative">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 appearance-none ${
              formErrors.gender 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {formErrors.gender && <p className="text-red-500 text-sm font-medium">{formErrors.gender}</p>}
      </div>
    </div>
  </div>

  {/* Contact Information Section */}
  <div className="space-y-6">
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-blue-600 rounded-full flex items-center justify-center">
        <Mail className="w-4 h-4 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">Contact Information</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
        <div className="relative">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.email 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="Enter your email"
          />
          <Mail className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.email && <p className="text-red-500 text-sm font-medium">{formErrors.email}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
        <div className="relative">
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.phone 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="Enter your phone number"
          />
          <Phone className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.phone && <p className="text-red-500 text-sm font-medium">{formErrors.phone}</p>}
      </div>
    </div>
  </div>

  {/* Address Information Section */}
  <div className="space-y-6">
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center">
        <MapPin className="w-4 h-4 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">Address Information</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
        <div className="relative">
          <select
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 appearance-none ${
              formErrors.country 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
          >
            <option value="">Select Country</option>
            {countries.map((country, index) => (
              <option key={index} value={country}>
                {country}
              </option>
            ))}
          </select>
          <Globe className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.country && <p className="text-red-500 text-sm font-medium">{formErrors.country}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
        <div className="relative">
          <select
            name="state"
            value={formData.state}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 appearance-none ${
              formErrors.state 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
          >
            <option value="">Select State</option>
            {indianStates.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {formErrors.state && <p className="text-red-500 text-sm font-medium">{formErrors.state}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">District</label>
        <div className="relative">
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.district 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="Enter your district"
          />
          <MapPin className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.district && <p className="text-red-500 text-sm font-medium">{formErrors.district}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Address</label>
        <textarea
          name="address"
          value={formData.address}
          onChange={handleInputChange}
          rows={3}
          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 resize-none ${
            formErrors.address 
              ? "border-red-400 bg-red-50" 
              : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
          }`}
          placeholder="Enter your complete address"
        />
        {formErrors.address && <p className="text-red-500 text-sm font-medium">{formErrors.address}</p>}
      </div>
    </div>
  </div>

  {/* Academic Information Section */}
  <div className="space-y-6">
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center">
        <GraduationCap className="w-4 h-4 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">Academic Information</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Institution Name</label>
        <div className="relative">
          <input
            type="text"
            name="institutionName"
            value={formData.institutionName}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.institutionName 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="Enter institution name"
          />
          <GraduationCap className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.institutionName && <p className="text-red-500 text-sm font-medium">{formErrors.institutionName}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Degree</label>
        <div className="relative">
          <select
            name="degree"
            value={formData.degree}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 appearance-none ${
              formErrors.degree 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
          >
            <option value="">Select Degree</option>
            {degrees.map((degree, index) => (
              <option key={index} value={degree}>
                {degree}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {formErrors.degree && <p className="text-red-500 text-sm font-medium">{formErrors.degree}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Department</label>
        <div className="relative">
          <select
            name="department"
            value={formData.department}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 appearance-none ${
              formErrors.department 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
          >
            <option value="">Select Department</option>
            {departments.map((department, index) => (
              <option key={index} value={department}>
                {department}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {formErrors.department && <p className="text-red-500 text-sm font-medium">{formErrors.department}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Current Year</label>
        <div className="relative">
          <select
            name="currentYear"
            value={formData.currentYear}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 appearance-none ${
              formErrors.currentYear 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
          >
            <option value="">Select Year</option>
            {currentYears.map((year, index) => (
              <option key={index} value={year}>
                {year}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {formErrors.currentYear && <p className="text-red-500 text-sm font-medium">{formErrors.currentYear}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Area of Interest</label>
        <div className="relative">
          <select
            name="areaOfInterest"
            value={formData.areaOfInterest}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 appearance-none ${
              formErrors.areaOfInterest 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
          >
            <option value="">Select Area</option>
            {areasOfInterest.map((area, index) => (
              <option key={index} value={area}>
                {area}
              </option>
            ))}
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
        {formErrors.areaOfInterest && <p className="text-red-500 text-sm font-medium">{formErrors.areaOfInterest}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Institute ID</label>
        <div className="relative">
          <input
            type="text"
            name="instituteId"
            value={formData.instituteId}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.instituteId 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="Enter your institute ID"
          />
          <GraduationCap className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.instituteId && <p className="text-red-500 text-sm font-medium">{formErrors.instituteId}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Approval Letter (Drive Link)</label>
        <div className="relative">
          <input
            type="text"
            name="approvalLetter"
            value={formData.approvalLetter}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.approvalLetter 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="https://drive.google.com/..."
          />
          <FileText className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.approvalLetter && <p className="text-red-500 text-sm font-medium">{formErrors.approvalLetter}</p>}
      </div>
    </div>
  </div>

  {/* Documents & Links Section */}
  <div className="space-y-6">
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-8 h-8 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full flex items-center justify-center">
        <FileText className="w-4 h-4 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">Documents & Professional Links</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Resume (Google Drive Link)</label>
        <div className="relative">
          <input
            type="text"
            name="resume"
            value={formData.resume}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.resume 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="https://drive.google.com/..."
          />
          <FileText className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.resume && <p className="text-red-500 text-sm font-medium">{formErrors.resume}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">LinkedIn Profile</label>
        <div className="relative">
          <input
            type="text"
            name="linkedinProfile"
            value={formData.linkedinProfile}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.linkedinProfile 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="https://linkedin.com/in/..."
          />
          <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
        </div>
        {formErrors.linkedinProfile && <p className="text-red-500 text-sm font-medium">{formErrors.linkedinProfile}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">GitHub Profile</label>
        <div className="relative">
          <input
            type="text"
            name="githubProfile"
            value={formData.githubProfile}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.githubProfile 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="https://github.com/..."
          />
          <svg className="absolute right-3 top-3 w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </div>
        {formErrors.githubProfile && <p className="text-red-500 text-sm font-medium">{formErrors.githubProfile}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Portfolio Website</label>
        <div className="relative">
          <input
            type="text"
            name="portfolio"
            value={formData.portfolio}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.portfolio 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="https://yourportfolio.com"
          />
          <Globe className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.portfolio && <p className="text-red-500 text-sm font-medium">{formErrors.portfolio}</p>}
      </div>
    </div>
  </div>

  {/* Application Details Section */}
  <div className="space-y-6">
    <div className="flex items-center space-x-3 mb-6">
      <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center">
        <User className="w-4 h-4 text-white" />
      </div>
      <h3 className="text-xl font-bold text-gray-800">Application Details</h3>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Referral ID (Optional)</label>
        <div className="relative">
          <input
            type="text"
            name="referralId"
            value={formData.referralId}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.referralId 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="Enter referral ID if any"
          />
          <User className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.referralId && <p className="text-red-500 text-sm font-medium">{formErrors.referralId}</p>}
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-semibold text-gray-700 mb-2">Position Applied For</label>
        <div className="relative">
          <input
            type="text"
            name="positionApplied"
            value={formData.positionApplied}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-blue-100 ${
              formErrors.positionApplied 
                ? "border-red-400 bg-red-50" 
                : "border-gray-200 hover:border-blue-300 focus:border-blue-500"
            }`}
            placeholder="Enter position/role applied for"
          />
          <GraduationCap className="absolute right-3 top-3 w-5 h-5 text-gray-400" />
        </div>
        {formErrors.positionApplied && <p className="text-red-500 text-sm font-medium">{formErrors.positionApplied}</p>}
      </div>
    </div>
  </div>

  {/* Agreement Section */}
  <div className="space-y-4">
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
      <label className="flex items-start space-x-3 cursor-pointer">
        <input
          type="checkbox"
          name="agreement"
          checked={formData.agreement}
          onChange={handleInputChange}
          className="mt-1 w-5 h-5 text-blue-600 border-2 border-gray-300 rounded focus:ring-blue-500 focus:ring-2"
        />
        <div className="text-sm text-gray-700 leading-relaxed">
          I agree to the{' '}
            <span
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
            onClick={() => window.open('/terms-and-conditions', '_blank')}
            >
            terms and conditions
            </span>{' '}
            and{' '}
            <span
            className="text-blue-600 font-semibold hover:underline cursor-pointer"
            onClick={() => window.open('/privacy-policy', '_blank')}
            >
            privacy policy
            </span>
          . I understand that my information will be used for registration purposes only.
        </div>
      </label>
      {formErrors.agreement && <p className="text-red-500 text-sm font-medium mt-2">{formErrors.agreement}</p>}
    </div>
  </div>

  {/* Submit Button */}
  <div className="pt-6">
    <button
      type="submit"
      className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white font-bold py-4 px-8 rounded-2xl hover:from-blue-700 hover:via-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      disabled={isSubmitting}
    >
      {isSubmitting ? (
        <div className="flex items-center justify-center space-x-2">
          <Loader2 className="w-5 h-5 animate-spin" />
          <span>Submitting...</span>
        </div>
      ) : (
        <span className="text-lg">Submit Registration</span>
      )}
    </button>
  </div>
</form>
              </motion.div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                        
                      </div>
                    );
                  };
                  
                  export default CareerPage;

