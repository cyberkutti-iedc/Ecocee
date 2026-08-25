import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, User, Mail, Phone, MapPin, GraduationCap, ChevronDown, Globe, Lightbulb, Briefcase, Upload, FileText, Linkedin, Github, Shield, Loader2, Target, ArrowRight } from "lucide-react";
import { areasOfInterest, countries, currentYears, degrees, departments, indianStates } from "@/data/careers";
import { type FormData, type FormErrors } from "./types";

interface ApplicationFormModalProps {
  show: boolean;
  onClose: () => void;
  formData: FormData;
  formErrors: FormErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => void;
  onSubmit: (e: React.FormEvent) => void;
  isSubmitting: boolean;
  positionOptions: Array<{ value: string; label: string }>;
}

const ApplicationFormModal: React.FC<ApplicationFormModalProps> = ({ show, onClose, formData, formErrors, onChange, onSubmit, isSubmitting, positionOptions }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4 z-50 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-card border border-border rounded-3xl p-8 max-w-4xl w-full my-8 shadow-2xl max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            onClick={(e: React.MouseEvent) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-foreground">Leadership Application</h3>
              <button 
                onClick={onClose}
                className="p-2 hover:bg-background rounded-full transition-colors"
                type="button"
              >
                <X className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>

            <form onSubmit={onSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Personal Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Full Name</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground ${
                          formErrors.fullName 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                        placeholder="Enter your full name"
                      />
                      <User className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    {formErrors.fullName && <p className="text-red-400 text-sm font-medium">{formErrors.fullName}</p>}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Gender</label>
                    <div className="relative">
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none bg-background text-foreground ${
                          formErrors.gender 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                      >
                        <option value="">Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="Other">Other</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                    {formErrors.gender && <p className="text-red-400 text-sm font-medium">{formErrors.gender}</p>}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Mail className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Contact Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Email Address</label>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground ${
                          formErrors.email 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                        placeholder="Enter your email"
                      />
                      <Mail className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    {formErrors.email && <p className="text-red-400 text-sm font-medium">{formErrors.email}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text sm font-semibold text-muted-foreground mb-2">Phone Number</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground ${
                          formErrors.phone 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                        placeholder="Enter your phone number"
                      />
                      <Phone className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    {formErrors.phone && <p className="text-red-400 text-sm font-medium">{formErrors.phone}</p>}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <MapPin className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Address Information</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Country</label>
                    <div className="relative">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none bg-background text-foreground ${
                          formErrors.country 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                      >
                        <option value="">Select Country</option>
                        {countries.map((country, index) => (
                          <option key={index} value={country}>{country}</option>
                        ))}
                      </select>
                      <Globe className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    {formErrors.country && <p className="text-red-400 text-sm font-medium">{formErrors.country}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">State</label>
                    <div className="relative">
                      <select
                        name="state"
                        value={formData.state}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none bg-background text-foreground ${
                          formErrors.state 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                      >
                        <option value="">Select State</option>
                        {indianStates.map((state, index) => (
                          <option key={index} value={state}>{state}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    {formErrors.state && <p className="text-red-400 text-sm font-medium">{formErrors.state}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">District</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground ${
                          formErrors.district 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                        placeholder="Enter your district"
                      />
                      <MapPin className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    {formErrors.district && <p className="text-red-400 text-sm font-medium">{formErrors.district}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Full Address</label>
                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={onChange}
                      rows={3}
                      className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 resize-none bg-background text-foreground ${
                        formErrors.address 
                          ? "border-red-500 bg-red-900/20" 
                          : "border-border hover:border-primary/50 focus:border-primary"
                      }`}
                      placeholder="Enter your complete address"
                    />
                    {formErrors.address && <p className="text-red-400 text-sm font-medium">{formErrors.address}</p>}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <GraduationCap className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Professional Status</h3>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Are you a student, fresher, or working professional?</label>
                    <div className="relative">
                      <select
                        name="professionalStatus"
                        value={formData.professionalStatus}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none bg-background text-foreground ${
                          formErrors.professionalStatus 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                      >
                        <option value="">Select Status</option>
                        <option value="student">Student</option>
                        <option value="fresher">Fresher</option>
                        <option value="working">Working Professional</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    {formErrors.professionalStatus && <p className="text-red-400 text-sm font-medium">{formErrors.professionalStatus}</p>}
                  </div>

                  {formData.professionalStatus === 'student' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-background/50 rounded-xl border border-border">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-muted-foreground mb-2">Institution Name</label>
                        <input
                          type="text"
                          name="institutionName"
                          value={formData.institutionName}
                          onChange={onChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground ${
                            formErrors.institutionName 
                              ? "border-red-500 bg-red-900/20" 
                              : "border-border hover:border-primary/50 focus:border-primary"
                          }`}
                          placeholder="Enter institution name"
                        />
                        {formErrors.institutionName && <p className="text-red-400 text-sm font-medium">{formErrors.institutionName}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-muted-foreground mb-2">Degree</label>
                        <select
                          name="degree"
                          value={formData.degree}
                          onChange={onChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none bg-background text-foreground ${
                            formErrors.degree 
                              ? "border-red-500 bg-red-900/20" 
                              : "border-border hover:border-primary/50 focus:border-primary"
                          }`}
                        >
                          <option value="">Select Degree</option>
                          {degrees.map((degree, index) => (
                            <option key={index} value={degree}>{degree}</option>
                          ))}
                        </select>
                        {formErrors.degree && <p className="text-red-400 text-sm font-medium">{formErrors.degree}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="block text sm font-semibold text-muted-foreground mb-2">Department</label>
                        <select
                          name="department"
                          value={formData.department}
                          onChange={onChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none bg-background text-foreground ${
                            formErrors.department 
                              ? "border-red-500 bg-red-900/20" 
                              : "border-border hover:border-primary/50 focus:border-primary"
                          }`}
                        >
                          <option value="">Select Department</option>
                          {departments.map((department, index) => (
                            <option key={index} value={department}>{department}</option>
                          ))}
                        </select>
                        {formErrors.department && <p className="text-red-400 text-sm font-medium">{formErrors.department}</p>}
                      </div>
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-muted-foreground mb-2">Current Year</label>
                        <select
                          name="currentYear"
                          value={formData.currentYear}
                          onChange={onChange}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none bg-background text-foreground ${
                            formErrors.currentYear 
                              ? "border-red-500 bg-red-900/20" 
                              : "border-border hover:border-primary/50 focus:border-primary"
                          }`}
                        >
                          <option value="">Select Year</option>
                          {currentYears.map((year, index) => (
                            <option key={index} value={year}>{year}</option>
                          ))}
                        </select>
                        {formErrors.currentYear && <p className="text-red-400 text-sm font-medium">{formErrors.currentYear}</p>}
                      </div>
                    </div>
                  )}

                  {(formData.professionalStatus === 'fresher' || formData.professionalStatus === 'working') && (
                    <div className="space-y-6 p-6 bg-background/50 rounded-xl border border-border">
                      <div className="space-y-2">
                        <label className="block text-sm font-semibold text-muted-foreground mb-2">Have you completed your degree?</label>
                        <div className="relative">
                          <select
                            name="degreeCompleted"
                            value={formData.degreeCompleted}
                            onChange={onChange}
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none bg-background text-foreground ${
                              formErrors.degreeCompleted 
                                ? "border-red-500 bg-red-900/20" 
                                : "border-border hover:border-primary/50 focus:border-primary"
                            }`}
                          >
                            <option value="">Select Option</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                        </div>
                        {formErrors.degreeCompleted && <p className="text-red-400 text-sm font-medium">{formErrors.degreeCompleted}</p>}
                      </div>

                      {formData.degreeCompleted === 'yes' && (
                        <div className="space-y-2">
                          <label className="block text-sm font-semibold text-muted-foreground mb-2">CGPA (Optional)</label>
                          <input
                            type="number"
                            step="0.01"
                            min="0"
                            max="10"
                            name="cgpa"
                            value={formData.cgpa}
                            onChange={onChange}
                            className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground ${
                              formErrors.cgpa 
                                ? "border-red-500 bg-red-900/20" 
                                : "border-border hover:border-primary/50 focus:border-primary"
                            }`}
                            placeholder="Enter your CGPA (0-10)"
                          />
                          {formErrors.cgpa && <p className="text-red-400 text-sm font-medium">{formErrors.cgpa}</p>}
                        </div>
                      )}

                      {formData.professionalStatus === 'working' && (
                        <>
                          <div className="space-y-2">
                            <label className="block text-sm font-semibold text-muted-foreground mb-2">Work Experience (in years)</label>
                            <input
                              type="text"
                              name="workExperience"
                              value={formData.workExperience}
                              onChange={onChange}
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground ${
                                formErrors.workExperience 
                                  ? "border-red-500 bg-red-900/20" 
                                  : "border-border hover:border-primary/50 focus:border-primary"
                              }`}
                              placeholder="e.g., 2 years, 6 months"
                            />
                            {formErrors.workExperience && <p className="text-red-400 text-sm font-medium">{formErrors.workExperience}</p>}
                          </div>
                          <div className="space-y-2">
                            <label className="block text-sm font-semibold text-muted-foreground mb-2">Current Company</label>
                            <input
                              type="text"
                              name="currentCompany"
                              value={formData.currentCompany}
                              onChange={onChange}
                              className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground ${
                                formErrors.currentCompany 
                                  ? "border-red-500 bg-red-900/20" 
                                  : "border-border hover:border-primary/50 focus:border-primary"
                              }`}
                              placeholder="Enter your current company name"
                            />
                            {formErrors.currentCompany && <p className="text-red-400 text-sm font-medium">{formErrors.currentCompany}</p>}
                          </div>
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                    <Target className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Interest & Position</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Area of Interest</label>
                    <div className="relative">
                      <select
                        name="areaOfInterest"
                        value={formData.areaOfInterest}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none bg-background text-foreground ${
                          formErrors.areaOfInterest 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                      >
                        <option value="">Select Area of Interest</option>
                        {areasOfInterest.map((area, index) => (
                          <option key={index} value={area}>{area}</option>
                        ))}
                      </select>
                      <Lightbulb className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    {formErrors.areaOfInterest && <p className="text-red-400 text-sm font-medium">{formErrors.areaOfInterest}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Position Applied For</label>
                    <div className="relative">
                      <select
                        name="positionApplied"
                        value={formData.positionApplied}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 appearance-none bg-background text-foreground ${
                          formErrors.positionApplied 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                      >
                        <option value="">Select Position</option>
                        {positionOptions.map((opt, idx) => (
                          <option key={idx} value={opt.value}>{opt.label}</option>
                        ))}
                      </select>
                      <Briefcase className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    {formErrors.positionApplied && <p className="text-red-400 text-sm font-medium">{formErrors.positionApplied}</p>}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Upload className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Documents & Links</h3>
                </div>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Resume/CV Google Drive Link <span className="text-red-400">*</span></label>
                    <div className="relative">
                      <input
                        type="url"
                        name="resume"
                        value={formData.resume}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground ${
                          formErrors.resume 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                        placeholder="https://drive.google.com/file/d/..."
                      />
                      <FileText className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    {formErrors.resume && <p className="text-red-400 text-sm font-medium">{formErrors.resume}</p>}
                    <p className="text-sm text-muted-foreground">Please share your resume as a viewable Google Drive link</p>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">LinkedIn Profile URL <span className="text-red-400">*</span></label>
                    <div className="relative">
                      <input
                        type="url"
                        name="linkedinProfile"
                        value={formData.linkedinProfile}
                        onChange={onChange}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground ${
                          formErrors.linkedinProfile 
                            ? "border-red-500 bg-red-900/20" 
                            : "border-border hover:border-primary/50 focus:border-primary"
                        }`}
                        placeholder="https://www.linkedin.com/in/yourprofile"
                      />
                      <Linkedin className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    {formErrors.linkedinProfile && <p className="text-red-400 text-sm font-medium">{formErrors.linkedinProfile}</p>}
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-muted-foreground mb-2">GitHub Profile (Optional)</label>
                      <div className="relative">
                        <input
                          type="url"
                          name="githubProfile"
                          value={formData.githubProfile}
                          onChange={onChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground"
                          placeholder="https://github.com/yourusername"
                        />
                        <Github className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-muted-foreground mb-2">Portfolio Website (Optional)</label>
                      <div className="relative">
                        <input
                          type="url"
                          name="portfolio"
                          value={formData.portfolio}
                          onChange={onChange}
                          className="w-full px-4 py-3 rounded-xl border-2 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground"
                          placeholder="https://yourportfolio.com"
                        />
                        <Globe className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="block text-sm font-semibold text-muted-foreground mb-2">Referral ID (Optional)</label>
                    <div className="relative">
                      <input
                        type="text"
                        name="referralId"
                        value={formData.referralId}
                        onChange={onChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-border hover:border-primary/50 focus:border-primary transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary/20 bg-background text-foreground"
                        placeholder="Enter referral ID if you have one"
                      />
                      <User className="absolute right-3 top-3 w-5 h-5 text-muted-foreground" />
                    </div>
                    <p className="text-sm text-muted-foreground">If someone referred you to this position, please enter their referral ID</p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground">Agreement</h3>
                </div>
                <div className="bg-background/50 rounded-xl border border-border p-6">
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="agreement"
                      name="agreement"
                      checked={formData.agreement}
                      onChange={onChange}
                      className="mt-1 w-5 h-5 text-primary bg-background border-border rounded focus:ring-primary focus:ring-2"
                    />
                    <label htmlFor="agreement" className="text-muted-foreground text-sm leading-relaxed">
                      I agree that the information provided is accurate and complete. I understand that any false information may result in rejection of my application. I consent to Ecocee processing my personal data for recruitment purposes and agree to be contacted regarding this application and future opportunities.
                    </label>
                  </div>
                  {formErrors.agreement && <p className="text-red-400 text-sm font-medium mt-2">{formErrors.agreement}</p>}
                </div>
              </div>

              <div className="pt-6">
                <div className="text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center px-12 py-4 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-3 animate-spin" />
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        Submit Application
                        <ArrowRight className="w-5 h-5 ml-3" />
                      </>
                    )}
                  </button>
                </div>
                <p className="text-center text-muted-foreground text-sm mt-4">We'll review your application and get back to you within 5-7 business days.</p>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ApplicationFormModal; 