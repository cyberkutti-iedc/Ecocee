"use client";

import React, { useState, useRef } from "react";
import Seo from "@/components/seo/Seo";
import ClosedCareersPage from "./ClosedCareersPage";
import InternModal from "@/components/InternModal";
import HeroSection from "@/components/careers/HeroSection";
import CategoryFilter, { type CategoryKey } from "@/components/careers/CategoryFilter";
import PositionsList from "@/components/careers/PositionsList";
import JobDetailsModal from "@/components/careers/JobDetailsModal";
import ApplicationFormModal from "@/components/careers/ApplicationFormModal";
import { leadPositions, type LeadPosition } from "@/data/careers";
import { type FormData, type FormErrors } from "@/components/careers/types";

// Toggle for careers availability - set to true to show careers, false to show closed message
const CAREERS_AVAILABLE = false;

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Organization",
	"name": "Ecocee",
	"url": "https://ecocee.in",
	"logo": "https://ecocee.in/icon.jpg",
	"contactPoint": {
		"@type": "ContactPoint",
		"telephone": "+91-9446715884",
		"contactType": "Customer Support"
	},
	"address": {
		"@type": "PostalAddress",
		"addressLocality": "Kodungallur",
		"addressRegion": "Kerala",
		"addressCountry": "IN"
	},
	"description": "Kerala-based startup Ecocee specializes in embedded systems, IoT, AI, and custom technology solutions for innovative product development."
};

const CareerPage: React.FC = () => {
	const [selectedJob, setSelectedJob] = useState<LeadPosition | null>(null);
	const [showApplicationForm, setShowApplicationForm] = useState<boolean>(false);
	const [selectedCategory, setSelectedCategory] = useState<CategoryKey>('all');
	const [formData, setFormData] = useState<FormData>({
		fullName: "",
		email: "",
		phone: "",
		country: "",
		state: "",
		district: "",
		address: "",
		gender: "",
		professionalStatus: "",
		institutionName: "",
		degree: "",
		department: "",
		currentYear: "",
		degreeCompleted: "",
		cgpa: "",
		workExperience: "",
		currentCompany: "",
		areaOfInterest: "",
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

		if (!formData.fullName.trim()) errors.fullName = "Full name is required";
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
		if (!formData.professionalStatus) errors.professionalStatus = "Professional status is required";
		if (!formData.areaOfInterest) errors.areaOfInterest = "Area of interest is required";
		if (!formData.positionApplied) errors.positionApplied = "Position applied is required";
		if (!formData.resume) {
			errors.resume = "Resume/CV Google Drive link is required";
		} else if (!formData.resume.includes('drive.google.com')) {
			errors.resume = "Please enter a valid Google Drive link for Resume/CV";
		}
		if (!formData.linkedinProfile) {
			errors.linkedinProfile = "LinkedIn profile URL is required";
		} else if (!formData.linkedinProfile.includes('linkedin.com')) {
			errors.linkedinProfile = "Please enter a valid LinkedIn profile URL";
		}
		if (!formData.agreement) errors.agreement = "Please accept the terms and conditions";

		if (formData.professionalStatus === 'student') {
			if (!formData.institutionName.trim()) errors.institutionName = "Institution name is required";
			if (!formData.degree) errors.degree = "Degree is required";
			if (!formData.department) errors.department = "Department is required";
			if (!formData.currentYear) errors.currentYear = "Current year is required";
		} else if (formData.professionalStatus === 'fresher' || formData.professionalStatus === 'working') {
			if (!formData.degreeCompleted) errors.degreeCompleted = "Please specify if degree is completed";
			if (formData.degreeCompleted === 'yes' && formData.cgpa && (parseFloat(formData.cgpa) < 0 || parseFloat(formData.cgpa) > 10)) {
				errors.cgpa = "CGPA should be between 0 and 10";
			}
			if (formData.professionalStatus === 'working') {
				if (!formData.workExperience) errors.workExperience = "Work experience is required";
				if (!formData.currentCompany.trim()) errors.currentCompany = "Current company is required";
			}
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
			email: "",
			phone: "",
			country: "",
			state: "",
			district: "",
			address: "",
			gender: "",
			professionalStatus: "",
			institutionName: "",
			degree: "",
			department: "",
			currentYear: "",
			degreeCompleted: "",
			cgpa: "",
			workExperience: "",
			currentCompany: "",
			areaOfInterest: "",
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
			const res = await fetch('/api/careers', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(formData)
			});
			const result = await res.json();
			if (!res.ok || !result.success) {
				throw new Error(result.error || 'Submission failed');
			}
			setShowThankYou(true);
			resetForm();
		} catch (error) {
			console.error('Error submitting form:', error);
			alert('There was an error submitting your application. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleJobClick = (job: LeadPosition): void => {
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
		positionsRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
	};

	const filteredPositions = selectedCategory === 'all' 
		? leadPositions 
		: leadPositions.filter(job => job.category === selectedCategory);

	if (!CAREERS_AVAILABLE) {
		return <ClosedCareersPage />;
	}

	return (
		<>
			<Seo
				title="Leadership Careers at Ecocee | Business, Marketing & Operations Leads"
				description="Join Ecocee's leadership team! We're hiring Business Leads, Marketing Leads, and Operations Leads. Lead innovation in AI, ML, Embedded Systems, and IoT solutions in Kerala."
				keywords={[
					"Business Lead Jobs Kerala",
					"Marketing Lead Careers Kerala", 
					"Operations Lead Jobs Kerala",
					"Startup Leadership Jobs India",
					"Ecocee Leadership Careers",
					"Business Development Jobs Kerala",
					"Digital Marketing Lead Jobs",
					"Project Management Careers Kerala",
					"Startup Jobs Kerala",
					"Tech Leadership Careers India"
				]}
				canonical="https://ecocee.in/careers"
				image="https://ecocee.in/icon.jpg"
				twitterHandle="@Ecocee"
				siteName="Ecocee"
				structuredData={jsonLd}
			/>
			<div className="min-h-screen bg-gradient-to-br from-gray-900 via-green-900 to-black">
				<HeroSection onViewPositions={scrollToPositions} />
				<div ref={positionsRef as any}>
					<CategoryFilter selectedCategory={selectedCategory} onChange={setSelectedCategory} />
				</div>
				<PositionsList positions={filteredPositions} onJobClick={handleJobClick} />

				{/* About section kept simple and could be modularized later if needed */}
				<section className="py-20 px-6 bg-gray-800/30 backdrop-blur-sm">
					<div className="max-w-4xl mx-auto text-center">
						<h2 className="text-4xl font-bold text-white mb-6">About Ecocee</h2>
						<p className="text-xl text-gray-300 leading-relaxed mb-8">
							We are an innovative MSME specializing in AI/ML solutions, embedded systems, and IoT technologies. 
							Our leadership team drives cutting-edge innovation that bridges the physical and digital worlds, 
							creating impactful technology solutions for businesses and communities across Kerala and India.
						</p>
						<div className="flex justify-center">
							<a href="mailto:info@ecocee.in" className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors text-lg font-medium">Get in touch</a>
						</div>
					</div>
				</section>

				<JobDetailsModal job={selectedJob} onClose={closeModal} onApply={openApplicationForm} />

				<ApplicationFormModal
					show={showApplicationForm}
					onClose={closeModal}
					formData={formData}
					formErrors={formErrors}
					onChange={handleInputChange}
					onSubmit={handleSubmit}
					isSubmitting={isSubmitting}
					positionOptions={leadPositions.map((p) => ({ value: p.title, label: p.title }))}
				/>

				<InternModal
					show={showThankYou}
					onClose={() => setShowThankYou(false)}
					title="Thank You!"
				>
					<p>Your application has been submitted successfully.</p>
					<p>We will get back to you soon.</p>
				</InternModal>
			</div>
		</>
	);
};

export default CareerPage;