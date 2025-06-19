"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, Loader2, ArrowRight, User, Mail, Phone, FileText, Briefcase, GraduationCap, Building2, Users, Lightbulb, Globe, Cpu, Brain, Zap } from "lucide-react";

const steps = [
	{
		label: "What's your full name?",
		name: "name",
		icon: <User className="w-5 h-5 mr-2 text-blue-600" />,
		placeholder: "Your Name",
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
			{ label: "Embedded Systems", value: "embedded", icon: <Cpu className="w-5 h-5 mr-2" /> },
			{ label: "IoT Solutions", value: "iot", icon: <Globe className="w-5 h-5 mr-2" /> },
			{ label: "AI Solutions", value: "ai", icon: <Brain className="w-5 h-5 mr-2" /> },
			{ label: "Embedded + AI", value: "embedded_ai", icon: <Zap className="w-5 h-5 mr-2" /> },
			{ label: "Custom Solutions", value: "custom", icon: <Lightbulb className="w-5 h-5 mr-2" /> },
			{ label: "Product Purchase", value: "product", icon: <Briefcase className="w-5 h-5 mr-2" /> },
			{ label: "Other", value: "other", icon: <FileText className="w-5 h-5 mr-2" /> },
		],
		required: true,
	},
	{
		label: "Describe your work / requirements",
		name: "description",
		icon: <FileText className="w-5 h-5 mr-2 text-blue-600" />,
		placeholder: "Describe your project, product, or consultation needs...",
		type: "textarea",
		required: true,
	},
	{
		label: "Area / Domain you are looking for",
		name: "area",
		icon: <Globe className="w-5 h-5 mr-2 text-blue-600" />,
		placeholder: "Eg: Healthcare, Education, Industry 4.0, etc.",
		type: "text",
		required: true,
	},
	{
		label: "Who are you?",
		name: "userType",
		icon: <Users className="w-5 h-5 mr-2 text-blue-600" />,
		type: "select",
		options: [
			{ label: "Student", value: "student", icon: <GraduationCap className="w-5 h-5 mr-2" /> },
			{ label: "Professional", value: "professional", icon: <Briefcase className="w-5 h-5 mr-2" /> },
			{ label: "Startup", value: "startup", icon: <Building2 className="w-5 h-5 mr-2" /> },
			{ label: "Business", value: "business", icon: <Users className="w-5 h-5 mr-2" /> },
			{ label: "Other", value: "other", icon: <FileText className="w-5 h-5 mr-2" /> },
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
			{ label: "Other", value: "Other" },
		],
		required: true,
	},
];

export default function BookOrderPage() {
	const [form, setForm] = useState({
		name: "",
		email: "",
		phone: "",
		service: "",
		description: "",
		area: "",
		how: "",
		userType: "",
	});
	const [submitting, setSubmitting] = useState(false);
	const [success, setSuccess] = useState(false);
	const [showPopup, setShowPopup] = useState(false);
	const [step, setStep] = useState(0);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleRadio = (name: string, value: string) => {
		setForm({ ...form, [name]: value });
	};

	const handleNext = (e: React.FormEvent) => {
		e.preventDefault();
		if (step < steps.length - 1) setStep(step + 1);
	};

	const handlePrev = () => {
		if (step > 0) setStep(step - 1);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitting(true);
		setTimeout(() => {
			setSubmitting(false);
			setSuccess(true);
			setShowPopup(true);
			setForm({
				name: "",
				email: "",
				phone: "",
				service: "",
				description: "",
				area: "",
				how: "",
				userType: "",
			});
			setStep(0);
		}, 1500);
	};

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-blue-100 to-indigo-100 py-16 px-2">
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				className="bg-white/90 rounded-3xl shadow-2xl max-w-xl w-full flex flex-col border border-blue-100 overflow-hidden"
			>
				<div className="w-full flex flex-col justify-center p-8">
					<h1 className="text-2xl font-bold text-center mb-4 text-blue-700">
						Book Your Order / Consultation
					</h1>
					<p className="text-center text-gray-600 mb-6 text-base">
						Let's get started! Please answer a few quick questions.
					</p>
					<AnimatePresence mode="wait">
						{success ? (
							<motion.div
								key="success"
								initial={{ opacity: 0, y: 40 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: 40 }}
								className="flex flex-col items-center justify-center py-12"
							>
								<CheckCircle className="w-16 h-16 text-green-500 mb-4" />
								<h2 className="text-2xl font-bold mb-2 text-green-700">Order Confirmed!</h2>
								<p className="text-gray-700 text-center">Thank you for booking your order/consultation with Ecocee.<br />Our team will contact you soon.</p>
								<button
									className="mt-6 px-6 py-2 rounded-xl bg-blue-700 text-white font-semibold shadow hover:bg-blue-800 transition-all"
									onClick={() => setShowPopup(false)}
								>
									Close
								</button>
							</motion.div>
						) : (
							<motion.form
								key={step}
								initial={{ opacity: 0, x: 40 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -40 }}
								onSubmit={step === steps.length - 1 ? handleSubmit : handleNext}
								className="space-y-8"
							>
								<div>
									<label className="block text-base font-semibold text-gray-700 mb-3 flex items-center">
										{steps[step].icon}
										{steps[step].label}
									</label>
									{steps[step].type === "textarea" ? (
										<textarea
											name={steps[step].name}
											value={form[steps[step].name as keyof typeof form]}
											onChange={handleChange}
											required={steps[step].required}
											rows={4}
											className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all resize-none"
											placeholder={steps[step].placeholder}
										/>
									) : steps[step].type === "select" ? (
										<div className="flex flex-wrap gap-2">
											{steps[step].options?.map((opt: any) => (
												<button
													type="button"
													key={opt.value}
													className={`flex items-center px-4 py-2 rounded-xl border-2 transition-all text-sm font-semibold ${
														form[steps[step].name as keyof typeof form] === opt.value
															? "bg-blue-700 text-white border-blue-700"
															: "bg-gray-100 border-gray-200 text-gray-700 hover:bg-blue-50"
													}`}
													onClick={() => handleRadio(steps[step].name, opt.value)}
												>
													{opt.icon}
													{opt.label}
												</button>
											))}
										</div>
									) : (
										<input
											type={steps[step].type}
											name={steps[step].name}
											value={form[steps[step].name as keyof typeof form]}
											onChange={handleChange}
											required={steps[step].required}
											className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 transition-all"
											placeholder={steps[step].placeholder}
										/>
									)}
								</div>
								<div className="flex justify-between items-center">
									<button
										type="button"
										onClick={handlePrev}
										disabled={step === 0}
										className={`px-6 py-2 rounded-xl font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 transition-all ${step === 0 ? "opacity-50 cursor-not-allowed" : ""}`}
									>
										Back
									</button>
									{step < steps.length - 1 ? (
										<button
											type="submit"
											className="px-8 py-3 rounded-xl bg-blue-700 text-white font-bold shadow-lg flex items-center gap-2 hover:bg-blue-800 transition-all"
										>
											Next <ArrowRight className="w-5 h-5" />
										</button>
									) : (
										<button
											type="submit"
											disabled={submitting}
											className="px-8 py-3 rounded-xl bg-blue-700 text-white font-bold shadow-lg flex items-center gap-2 hover:bg-blue-800 transition-all"
										>
											{submitting ? (
												<>
													<Loader2 className="w-5 h-5 animate-spin mr-2" />
													Booking...
												</>
											) : (
												<>Book Order</>
											)}
										</button>
									)}
								</div>
								{/* Progress Dots */}
								<div className="flex justify-center gap-2 mt-4">
									{steps.map((_, idx) => (
										<span
											key={idx}
											className={`w-3 h-3 rounded-full ${idx === step ? "bg-blue-700" : "bg-gray-300"}`}
										/>
									))}
								</div>
								{/* Step indicator */}
								<div className="text-center text-xs text-gray-400 mt-2">
									Step {step + 1} of {steps.length}
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
						key="popup"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={{ opacity: 1, scale: 1 }}
						exit={{ opacity: 0, scale: 0.95 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
					>
						<motion.div
							className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full flex flex-col items-center"
							initial={{ y: 40, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: 40, opacity: 0 }}
						>
							<CheckCircle className="w-16 h-16 text-green-500 mb-4" />
							<h2 className="text-2xl font-bold mb-2 text-green-700">Order Confirmed!</h2>
							<p className="text-gray-700 text-center mb-4">
								Thank you for booking your order/consultation with Ecocee.<br />
								Our team will contact you soon.
							</p>
							<button
								className="bg-blue-700 text-white font-bold px-6 py-2 rounded-xl shadow hover:bg-blue-800 transition-all"
								onClick={() => setShowPopup(false)}
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
