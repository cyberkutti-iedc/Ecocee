// data/team.ts
export interface TeamMember {
  id: number;
  name: string;
  role: string;
  department: string;
  bio: string;
  skills: string[];
  experience: string;
  avatar: string; 
  linkedin?: string;
  github?: string;
  email?: string;
  joinedDate: string;
}

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Sreeraj V Rajesh",
    role: "Founder & CEO",
    department: "Leadership",
    bio: "Embedded systems engineer and entrepreneur with 4+ years in embedded systems and 3+ years in entrepreneurship, driving innovation in AI, ML, circuit design, and IoT solutions.",
    skills: [
        "Embedded Systems",
        "AI & Machine Learning",
        "Circuit Design",
        "IoT Architecture",
        "Entrepreneurship",
        "Product Innovation",
        "Startup Leadership"
    ],
    experience: "4+ years in Embedded Systems, 3+ years in Entrepreneurship",
    avatar: "👨🏻‍💻",
    linkedin: "https://linkedin.com/in/sreerajvrajesh",
    github: "https://github.com/cyberkutti-iedc",
    email: "cyberkutti@gmail.com",
    joinedDate: "2023"
  },
  {
   id: 2,
   name: "Dr Chaithanya Raj",
    role: "Chief Visionary Officer (CVO)",
    department: "Executive",
    bio: "Experienced embedded systems researcher and AI enthusiast with a passion for innovation, driving Ecocee’s vision, technological advancement, and long-term strategic growth.",
    skills: [ "Embedded Systems",
  "Artificial Intelligence (AI)",
  "Research & Development",
  "Strategic Leadership",
  "Innovation Management",
  "Startup Mentoring"],
    experience: "Entrepreneurship mentor with 4+ years of experience guiding startups.",
    avatar: "👩🏻‍🎓",
    linkedin: "https://linkedin.com/in/chaithanyaraj-teacher",
    github: "https://github.com/chaithanyaraj",
    email: "#",
    joinedDate: "2024-07-13",
   
   
  }
];

export const departments = [
  "All",
  "Executive", 
  "Engineering", 
  "Product", 
  "Quality"
] as const;

export type Department = typeof departments[number];