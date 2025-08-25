// data/careers.ts

import { Brain, Microchip, Users, TrendingUp, Settings } from "lucide-react";

export interface LeadPosition {
  id: number;
  title: string;
  department: string;
  type: string;
  location: string;
  experience: string;
  icon: any;
  description: string;
  skills: string[];
  responsibilities: string[];
  learningOutcomes: string[];
  requirements: string[];
  category: 'business' | 'marketing' | 'operations';
}

export const leadPositions: LeadPosition[] = [
  {
    id: 1,
    title: "Business Lead",
    department: "Business Development",
    type: "Full-time Lead Position",
    location: "Hybrid/Remote",
    experience: "0-3 years",
    category: "business",
    icon: TrendingUp,
    description: "Lead our business development initiatives, drive strategic growth, and manage key partnerships. Shape the future of Ecocee by defining business strategy and ensuring sustainable growth in the AI/ML and embedded systems market.",
    skills: [
      "Business Strategy", 
      "Financial Planning", 
      "Sales Management", 
      "Partnership Development", 
      "Market Analysis", 
      "Fundraising", 
      "Team Leadership", 
      "Project Management"
    ],
    responsibilities: [
      "Define business goals, vision, and growth strategy",
      "Identify market opportunities and niches",
      "Monitor cash flow, budgeting, and expense management",
      "Build and manage client relationships",
      "Develop sales pipelines and partnerships",
      "Oversee marketing campaigns coordination",
      "Coordinate between departments (tech, design, operations)",
      "Pitch to investors and maintain investor relations",
      "Ensure compliance with local regulations and manage contracts",
      "Build collaborations with other startups and vendors",
      "Handle customer experience and major client issues"
    ],
    learningOutcomes: [
      "Advanced business strategy and planning skills",
      "Experience in startup growth and scaling",
      "Expertise in financial management and fundraising",
      "Leadership and team management capabilities",
      "Market analysis and competitive intelligence",
      "Investor relations and pitch presentation skills"
    ],
    requirements: [
      "Bachelor's degree in Business, Management, or related field",
      "0-3 years of business development or leadership experience",
      "Strong analytical and strategic thinking skills",
      "Excellent communication and presentation abilities",
      "Experience with financial planning and budget management",
      "Knowledge of startup ecosystem and funding landscape",
      "Proven track record in sales or partnership development"
    ]
  },
  {
    id: 2,
    title: "Marketing Lead",
    department: "Marketing & Growth",
    type: "Full-time Lead Position", 
    location: "Hybrid/Remote",
    experience: "0-3 years",
    category: "marketing",
    icon: Users,
    description: "Drive our marketing strategy and brand presence across digital platforms. Lead creative campaigns, manage social media, and build our community while showcasing Ecocee's innovative AI/ML and embedded systems solutions.",
    skills: [
      "Digital Marketing", 
      "Social Media Management", 
      "Content Creation", 
      "SEO/SEM", 
      "Brand Management", 
      "Video Editing", 
      "Analytics", 
      "Creative Design",
      "Photography",
      "Campaign Management"
    ],
    responsibilities: [
      "Develop overall marketing strategy aligned with startup goals",
      "Manage social media accounts (LinkedIn, Instagram, Twitter, etc.)",
      "Oversee content marketing: blogs, posts, newsletters",
      "Run paid campaigns (Google Ads, Meta Ads) and monitor performance",
      "Build and maintain Ecocee's brand identity and voice",
      "Shoot and edit photos, reels, and videos for campaigns",
      "Track KPIs: reach, engagement, conversion rates, and ROI",
      "Engage with industry communities and manage PR outreach",
      "Collaborate with tech team for product positioning",
      "Plan webinars, workshops, and startup meetups"
    ],
    learningOutcomes: [
      "Comprehensive digital marketing expertise",
      "Advanced content creation and video editing skills",
      "Brand building and community management experience",
      "Data-driven marketing analytics and optimization",
      "Creative campaign development and execution",
      "Multi-platform marketing strategy implementation"
    ],
    requirements: [
      "Bachelor's degree in Marketing, Communications, or related field",
      "0-3 years of digital marketing experience",
      "Proficiency in social media platforms and marketing tools",
      "Creative skills in photography, video editing, and design",
      "Experience with Google Analytics, Facebook Ads Manager",
      "Strong writing and communication skills",
      "Knowledge of SEO, content marketing, and growth hacking"
    ]
  },
  {
    id: 3,
    title: "Operations Lead",
    department: "Operations & Management",
    type: "Full-time Lead Position",
    location: "Hybrid/Remote", 
    experience: "0-3 years",
    category: "operations",
    icon: Settings,
    description: "Streamline our operations, manage projects efficiently, and ensure smooth coordination between all teams. Build scalable processes that support our growth in AI/ML and embedded systems development.",
    skills: [
      "Project Management", 
      "Process Optimization", 
      "Team Coordination", 
      "Resource Management", 
      "Compliance Management", 
      "Vendor Relations", 
      "Risk Management", 
      "Analytics & Reporting",
      "Event Management",
      "Quality Assurance"
    ],
    responsibilities: [
      "Design and maintain efficient operational processes",
      "Oversee ongoing projects and coordinate between teams",
      "Manage office resources, equipment, and inventory",
      "Support recruitment, onboarding, and team coordination",
      "Ensure legal and regulatory compliance for the company",
      "Generate operational reports and analyze process improvements",
      "Liaise with external vendors, partners, and service providers",
      "Organize company events, workshops, and meetups",
      "Track project milestones and ensure timely delivery",
      "Implement risk management and preventive measures"
    ],
    learningOutcomes: [
      "Advanced project management and process optimization",
      "Team leadership and coordination expertise",
      "Compliance and risk management experience",
      "Vendor and partner relationship management",
      "Operational analytics and reporting skills",
      "Event planning and logistics management"
    ],
    requirements: [
      "Bachelor's degree in Operations, Management, or related field",
      "0-3 years of operations or project management experience",
      "Strong organizational and analytical skills",
      "Experience with project management tools and methodologies",
      "Knowledge of compliance and regulatory requirements",
      "Excellent communication and coordination abilities",
      "Problem-solving mindset and attention to detail"
    ]
  }
];

export const degrees = [
  "B.Tech", "B.E", "BCA", "B.Sc", "MCA", "M.Tech", "M.E", "M.Sc", "MBA", "Ph.D", "Other"
];

export const departments = [
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
  "Business Administration",
  "Marketing",
  "Operations Management",
  "Other"
];

export const areasOfInterest = [
  "Business Development & Strategy",
  "Sales & Partnership Management", 
  "Digital Marketing & Social Media",
  "Content Creation & Brand Management",
  "Operations & Project Management",
  "Process Optimization & Analytics",
  "Artificial Intelligence & Machine Learning",
  "Embedded Systems Development",
  "IoT Solutions & Smart Devices",
  "Web Development",
  "Mobile App Development", 
  "Other"
];

export const countries = ["India", "USA", "Canada", "UK", "Australia", "Germany", "Other"];

export const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", 
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram",
  "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu",
  "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Delhi", "Puducherry", "Chandigarh", "Dadra and Nagar Haveli", "Daman and Diu", 
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Andaman and Nicobar Islands"
];

export const currentYears = [
  "1st Year", "2nd Year", "3rd Year", "4th Year", "5th Year", "6th Year"
];
