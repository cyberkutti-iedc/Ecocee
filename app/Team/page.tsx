'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Mail, MapPin, Calendar, LucideIcon } from 'lucide-react';


interface Avatar3DProps {
  color: string;
  hairColor: string;
  shirtColor: string;
}

interface TeamMemberAvatar {
  color: string;
  hairColor: string;
  shirtColor: string;
}

interface TeamMember {
  name: string;
  role: string;
  description: string;
  skills: string[];
  icon?: LucideIcon;
  avatar: TeamMemberAvatar;
}

// 3D Avatar Component
const Avatar3D = ({ color, hairColor, shirtColor }:Avatar3DProps) => (
  <div className="w-32 h-32 relative mx-auto mb-4">
    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full animate-pulse opacity-50"></div>
    
    <div className={`absolute inset-2 ${color} rounded-full shadow-xl`}>
      {/* Face */}
      <div className={`absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-16 ${color} rounded-full shadow-md`}>
        {/* Eyes */}
        <div className="absolute top-4 left-3 w-2 h-2 bg-gray-800 rounded-full"></div>
        <div className="absolute top-4 right-3 w-2 h-2 bg-gray-800 rounded-full"></div>
        {/* Nose */}
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-1 bg-gray-600 rounded-full"></div>
        {/* Mouth */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-2 h-0.5 bg-gray-700 rounded-full"></div>
      </div>
      
      {/* Hair */}
      <div className={`absolute top-1 left-1/2 transform -translate-x-1/2 w-18 h-8 ${hairColor} rounded-t-full`}></div>
      
      {/* Body/Shirt */}
      <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-10 ${shirtColor} rounded-t-2xl`}></div>
    </div>
  </div>
);

const TeamPage = () => {
  // const founder = {
  //   name: "[Your Name]",
  //   role: "Founder & CEO",
  //   description: "Visionary leader driving innovation in embedded systems and IoT solutions. Passionate about transforming ideas into reality.",
  //   skills: ["Leadership", "Strategy", "IoT", "Embedded Systems"],
  //   avatar: {
  //     color: "bg-gradient-to-b from-amber-600 to-amber-800",
  //     hairColor: "bg-gray-900",
  //     shirtColor: "bg-blue-600"
  //   }
  // };

  const teamMembers :TeamMember []= [
    // {
    //   name: "Alex Kumar",
    //   role: "Lead Software Engineer",
    //   description: "Expert in full-stack development with a focus on scalable web applications and mobile solutions.",
    //   skills: ["React", "Node.js", "Python", "Mobile Dev"],
    //   icon: Code,
    //   avatar: {
    //     color: "bg-gradient-to-b from-amber-500 to-amber-700",
    //     hairColor: "bg-gray-800",
    //     shirtColor: "bg-green-600"
    //   }
    // },
    // {
    //   name: "Priya Singh",
    //   role: "Hardware Engineer",
    //   description: "Specializes in embedded systems design, microcontroller programming, and hardware optimization.",
    //   skills: ["Embedded C", "PCB Design", "Hardware", "RTOS"],
    //   icon: Cpu,
    //   avatar: {
    //     color: "bg-gradient-to-b from-amber-400 to-amber-600",
    //     hairColor: "bg-gray-900",
    //     shirtColor: "bg-purple-600"
    //   }
    // },
    // {
    //   name: "Raj Patel",
    //   role: "AI/ML Engineer",
    //   description: "Develops intelligent solutions using machine learning, computer vision, and natural language processing.",
    //   skills: ["Python", "TensorFlow", "Computer Vision", "NLP"],
    //   icon: Brain,
    //   avatar: {
    //     color: "bg-gradient-to-b from-amber-500 to-amber-700",
    //     hairColor: "bg-gray-800",
    //     shirtColor: "bg-red-600"
    //   }
    // },
    // {
    //   name: "Sneha Reddy",
    //   role: "IoT Solutions Architect",
    //   description: "Designs comprehensive IoT ecosystems with cloud integration and real-time data analytics.",
    //   skills: ["IoT", "Cloud", "Data Analytics", "Protocols"],
    //   icon: Smartphone,
    //   avatar: {
    //     color: "bg-gradient-to-b from-amber-400 to-amber-600",
    //     hairColor: "bg-gray-900",
    //     shirtColor: "bg-teal-600"
    //   }
    // },
    // {
    //   name: "Arjun Nair",
    //   role: "DevOps Engineer",
    //   description: "Ensures seamless deployment and infrastructure management for scalable and reliable systems.",
    //   skills: ["Docker", "AWS", "CI/CD", "Kubernetes"],
    //   icon: Settings,
    //   avatar: {
    //     color: "bg-gradient-to-b from-amber-500 to-amber-700",
    //     hairColor: "bg-gray-800",
    //     shirtColor: "bg-orange-600"
    //   }
    // },
    // {
    //   name: "Maya Sharma",
    //   role: "UI/UX Designer",
    //   description: "Crafts intuitive and beautiful user experiences that bridge technology and human interaction.",
    //   skills: ["Figma", "UI/UX", "Prototyping", "User Research"],
    //   icon: Palette,
    //   avatar: {
    //     color: "bg-gradient-to-b from-amber-400 to-amber-600",
    //     hairColor: "bg-gray-900",
    //     shirtColor: "bg-pink-600"
    //   }
    // }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-900 dark:via-gray-950 dark:to-green-950 overflow-x-hidden transition-colors duration-300">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-green-700 via-green-500 to-emerald-600 bg-clip-text text-transparent dark:from-green-300 dark:via-green-400 dark:to-emerald-400"
          >
            Meet Our <span className="text-green-600 dark:text-green-300">Founder</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="text-lg md:text-xl text-gray-700 dark:text-gray-200 max-w-2xl mx-auto"
          >
            Driven by innovation and a passion for technology, our founder leads Ecocee with a vision to transform ideas into reality through embedded and IoT solutions.
          </motion.p>
        </div>
      </section>

      {/* Founder Card */}
      <motion.section
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-md flex flex-col items-center mb-16 border border-green-100 dark:border-green-900 transition-colors duration-300"
      >
        {/* Founder Image */}
        <div className="w-36 h-36 rounded-full overflow-hidden mt-8 border-4 border-green-200 dark:border-green-800 shadow-sm">
          <img
            src="https://media.licdn.com/dms/image/v2/D4E03AQF7C1E116LYCw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1731557854937?e=1756339200&v=beta&t=SAjAfVXumX64w80EYCxKAmOsABL-jnwI3jLnuH0rF2U"
            alt="Sreeraj V Rajesh"
            className="w-full h-full object-cover object-center"
          />
        </div>
        {/* Founder Content */}
        <div className="w-full px-8 py-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1">SREERAJ V RAJESH</h2>
          <p className="text-green-700 dark:text-green-300 font-medium mb-4">Founder & CEO, Ecocee</p>
          <div className="flex gap-4 text-gray-500 dark:text-gray-400 text-sm mb-4">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-green-500 dark:text-green-300" />22</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-green-500 dark:text-green-300" />Thrissur, Kerala</span>
          </div>
          <p className="text-gray-700 dark:text-gray-200 text-center mb-6 text-base leading-relaxed">
            Sreeraj V Rajesh is an Electronics and Communication Engineering student and the founder of Ecocee, a startup focused on embedded systems, IoT, and full-stack development. His work bridges academic understanding with hands-on project execution, supporting students, makers, and innovators across Kerala and beyond.
          </p>
          <div className="flex flex-wrap gap-2 mb-6 justify-center">
            {['Embedded Systems', 'IoT', 'AI/ML', 'Full-Stack', 'Hardware'].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 rounded-full text-xs font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="flex space-x-3">
            <a
              href="https://www.linkedin.com/in/sreerajvrajesh"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-green-600 dark:bg-green-800 text-white rounded-full flex items-center justify-center hover:bg-green-700 dark:hover:bg-green-700 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com/"
              className="w-9 h-9 bg-emerald-500 dark:bg-emerald-700 text-white rounded-full flex items-center justify-center hover:bg-emerald-600 dark:hover:bg-emerald-800 transition-colors"
            >
              <Twitter className="w-4 h-4" />
            </a>
            <a
              href="mailto:cyberkutti@gmail.com"
              className="w-9 h-9 bg-lime-500 dark:bg-lime-700 text-white rounded-full flex items-center justify-center hover:bg-lime-600 dark:hover:bg-lime-800 transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-16 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow border border-green-100 dark:border-green-900 flex flex-col items-center transition-colors duration-300">
          <span className="w-10 h-10 mb-3 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-2xl">🌱</span>
          <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Vision</h3>
          <p className="text-gray-700 dark:text-gray-200 text-center text-base">
            To empower businesses with innovative embedded and IoT solutions that transform ideas into reality, driving technological advancement and sustainable growth.
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow border border-green-100 dark:border-green-900 flex flex-col items-center transition-colors duration-300">
          <span className="w-10 h-10 mb-3 flex items-center justify-center rounded-full bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 text-2xl">🎯</span>
          <h3 className="text-xl font-bold text-green-700 dark:text-green-300 mb-2">Mission</h3>
          <p className="text-gray-700 dark:text-gray-200 text-center text-base">
            Creating customized, cutting-edge technology solutions that exceed expectations, foster innovation, and build lasting partnerships with clients worldwide.
          </p>
        </div>
      </motion.div>

      {/* Company Culture */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="bg-white dark:bg-gray-900 rounded-xl shadow p-8 text-center border border-green-100 dark:border-green-900 transition-colors duration-300"
          >
            <h2 className="text-2xl font-bold text-green-700 dark:text-green-300 mb-4">Our Culture</h2>
            <p className="text-base text-gray-700 dark:text-gray-200 leading-relaxed mb-7">
              At Ecocee, we believe in innovation, continuous learning, and a passion for technology. Our culture is built on simplicity, growth, and collaboration.
            </p>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="flex-1">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-green-200 mb-1">Innovation</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Pushing boundaries and exploring new possibilities</p>
              </div>
              <div className="flex-1">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">🤝</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-green-200 mb-1">Collaboration</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Building partnerships to achieve extraordinary results</p>
              </div>
              <div className="flex-1">
                <div className="w-10 h-10 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-xl">📚</span>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-green-200 mb-1">Growth</h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">Continuous learning and professional development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};



export default TeamPage;
