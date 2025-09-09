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
    role: "Co-Founder & CVO",
    department: "Executive",
    bio: "Experienced embedded systems researcher and AI enthusiast with a passion for innovation, driving Ecocee’s vision, technological advancement, and long-term strategic growth.",
    skills: [
      "Embedded Systems",
      "Artificial Intelligence (AI)",
      "Research & Development",
      "Strategic Leadership",
      "Innovation Management",
      "Startup Mentoring"
    ],
    experience: "Entrepreneurship mentor with 4+ years of experience guiding startups.",
    avatar: "👩🏻‍🎓",
    linkedin: "https://linkedin.com/in/chaithanyaraj-teacher",
    github: "https://github.com/chaithanyaraj",
    email: "#",
    joinedDate: "2024-07-13"
  },
  {
    id: 3,
    name: "Seona Ann Tom",
    role: "Marketing Lead",
    department: "Marketing",
    bio: "Marketing Lead with strong AI/ML interest, leadership experience, and a passion for driving innovation and strategic growth at Ecocee.",
    skills: [
      "Artificial Intelligence (AI)",
      "Machine Learning (ML)",
      "Deep Learning (DL)",
      "Figma"
    ],
    experience: "Marketing Lead at Ecocee, with prior experience in leadership and organizing AI/ML initiatives.",
    avatar: "👩‍💻",
    linkedin: "https://linkedin.com/in/seona-ann-tom",
    github: "https://github.com/seonaann",
    email: "seonaanntom9@gmail.com",
    joinedDate: "2025-09-10"
  },
  {
    id: 4,
    name: "Rajesh V M",
    role: "Co-Founder",
    department: "Executive",
    bio: "Co-Founder of Ecocee with 35+ years of expertise in electronics and technical fields, bringing deep experience and leadership to the company’s foundation.",
    skills: [
      "Electronics",
      "Technical Expertise",
      "Leadership",
      "Team Mentoring"
    ],
    experience: "35+ years in electronics and technical leadership, Co-Founder of Ecocee.",
    avatar: "👨‍🔧",
    joinedDate: "2023"
  },
  {
    id: 5,
    name: "Amal Krishna O U",
    role: "Technical Lead",
    department: "Engineering",
    bio: "Technical Lead with 5+ years of experience in electronics and finance-related domains, specializing in core electronics and system-level problem solving.",
    skills: [
      "Core Electronics",
      "Embedded Systems",
      "Circuit Debugging",
      "System Design",
      "Finance Technology"
    ],
    experience: "5+ years of professional experience in core electronics and finance areas.",
    avatar: "👨‍🔬",
    linkedin: "https://linkedin.com/in/example-amalkrishna",
    github: "https://github.com/example-amalkrishna",
    email: "amal@gmail.com",
    joinedDate: "2025-09-10"
  },
  {
    id: 6,
    name: "Akashi Sasi",
    role: "Operations Lead",
    department: "Executive",
    bio: "Operations Lead with 2.5+ years of entrepreneurial learning and expertise in operations management. Passionate about building scalable processes and continuous learning.",
    skills: [
      "Operations Management",
      "Entrepreneurship",
      "Process Optimization",
      "Team Collaboration",
      "Leadership"
    ],
    experience: "2.5+ years in entrepreneurship and operations management, with strong focus on learning and growth.",
    avatar: "👨‍🏭",
    linkedin: "https://linkedin.com/in/example-akashisasi",
    github: "https://github.com/example-akashisasi",
    email: "akashisasi@example.com",
    joinedDate: "2025-09-10"
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
