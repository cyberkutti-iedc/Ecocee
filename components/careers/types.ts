export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  country: string;
  state: string;
  district: string;
  address: string;
  gender: string;
  professionalStatus: string;
  institutionName: string;
  degree: string;
  department: string;
  currentYear: string;
  degreeCompleted: string;
  cgpa: string;
  workExperience: string;
  currentCompany: string;
  areaOfInterest: string;
  resume: string;
  linkedinProfile: string;
  githubProfile: string;
  portfolio: string;
  referralId: string;
  positionApplied: string;
  agreement: boolean;
}

export interface FormErrors {
  [key: string]: string;
} 