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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      {/* <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-gray-900 mb-6"
          >
            Meet Our <span className="text-blue-600">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Meet the visionary behind Ecocee, driving innovation in embedded systems and IoT solutions. 
            Our growing team is expanding to build the future of technology together.
          </motion.p>
        </div>
      </section> */}

      {/* Founder Section */}
      {/* <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-white rounded-3xl shadow-2xl p-8 mb-16"
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership</h2>
            </div>
            
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0"
              >
                <Avatar3D {...founder.avatar} />
              </motion.div>
              
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                <p className="text-lg text-blue-600 font-semibold mb-4">{founder.role}</p>
                <p className="text-gray-700 leading-relaxed mb-6">{founder.description}</p>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-6">
                  {founder.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                <div className="flex justify-center md:justify-start space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="w-10 h-10 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                  >
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="w-10 h-10 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section> */}

      <section className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Meet the <span className="text-blue-600">Founder</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Driven by innovation and passion for technology, our founder leads Ecocee 
            with a vision to transform ideas into reality through cutting-edge embedded and IoT solutions.
          </p>
        </motion.div>

        {/* Founder Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-3xl shadow-2xl overflow-hidden max-w-4xl mx-auto"
        >
          <div className="flex flex-col lg:flex-row">
            {/* 3D Avatar Section */}
            <div className="lg:w-1/2 bg-gradient-to-br from-blue-500 to-purple-600 p-12 flex items-center justify-center">
              <motion.div
                initial={{ rotateY: -30 }}
                animate={{ rotateY: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="relative"
              >
                {/* 3D Avatar Container */}
                <div className="w-64 h-64 relative">
                  {/* Avatar Circle Background */}
                  <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                  
                  {/* 3D Avatar Representation */}
                  <div className="absolute inset-4 bg-gradient-to-b from-amber-700 to-amber-900 rounded-full shadow-2xl">
                    {/* Face */}
                    <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-32 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full shadow-lg">
                      {/* Eyes */}
                      <div className="absolute top-8 left-6 w-3 h-3 bg-gray-800 rounded-full"></div>
                      <div className="absolute top-8 right-6 w-3 h-3 bg-gray-800 rounded-full"></div>
                      {/* Nose */}
                      <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-amber-700 rounded-full"></div>
                      {/* Mouth */}
                      <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gray-700 rounded-full"></div>
                    </div>
                    
                    {/* Hair */}
                    <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-36 h-16 bg-gray-900 rounded-t-full"></div>
                    
                    {/* Body/Shirt */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-40 h-20 bg-blue-600 rounded-t-3xl"></div>
                  </div>
                  
                  {/* Floating elements */}
                  <motion.div
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full opacity-70"
                  ></motion.div>
                  <motion.div
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute -bottom-2 -left-2 w-6 h-6 bg-green-400 rounded-full opacity-60"
                  ></motion.div>
                </div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-12">
  <motion.div
    initial={{ opacity: 0, x: 30 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <h2 className="text-4xl font-bold text-gray-900 mb-3">
      SREERAJ V RAJESH
    </h2>
    <p className="text-xl text-blue-600 font-semibold mb-6">
      Founder & CEO, Ecocee
    </p>
    
    <div className="space-y-4 mb-8">
      <div className="flex items-center text-gray-600">
        <Calendar className="w-5 h-5 mr-3 text-blue-500" />
        <span>Age: 22</span>
      </div>
      <div className="flex items-center text-gray-600">
        <MapPin className="w-5 h-5 mr-3 text-blue-500" />
        <span>Thrissur, Kerala, India</span>
      </div>
    </div>

    <p className="text-gray-700 leading-relaxed mb-8">
      Sreeraj V Rajesh is an Electronics and Communication Engineering student and the founder of Ecocee, 
      a startup focused on embedded systems, IoT, and full-stack development. Currently awaiting final 
      year results, he is stepping into the professional field as a qualified engineer. His work bridges 
      academic understanding with hands-on project execution, creating a platform that supports students, 
      makers, and local innovators across Kerala and beyond.
    </p>

    <div className="space-y-3 mb-8">
      <h3 className="text-lg font-semibold text-gray-900">Core Expertise:</h3>
      <div className="flex flex-wrap gap-2">
        {['Embedded Systems', 'IoT Solutions', 'AI/ML', 'Full-Stack Development', 'Hardware Integration'].map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Social Links */}
    <div className="flex space-x-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://www.linkedin.com/in/sreerajvrajesh"
        target="_blank"
        rel="noopener noreferrer"
        className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
      >
        <Linkedin className="w-6 h-6" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="https://twitter.com/" // Replace with actual Twitter if available
        className="w-12 h-12 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
      >
        <Twitter className="w-6 h-6" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        href="mailto:cyberkutti@gmail.com" // Replace with actual email
        className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
      >
        <Mail className="w-6 h-6" />
      </motion.a>
    </div>
  </motion.div>
</div>

          </div>
        </motion.div>

        {/* Vision & Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 grid md:grid-cols-2 gap-8"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses with innovative embedded and IoT solutions that transform 
              ideas into reality, driving technological advancement and sustainable growth across industries.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              Creating customized, cutting-edge technology solutions that exceed expectations, 
              foster innovation, and build lasting partnerships with clients worldwide.
            </p>
          </div>
        </motion.div>
      </div>
    </section>

      {/* Team Members Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-center mb-12"
          >
            {/* <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Expert Team</h2> */}
            {/* <p className="text-lg text-gray-600">
              Meet the talented individuals who make innovation possible
            </p> */}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => {
              const IconComponent = member.icon;
              return (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 * index }}
                  whileHover={{ y: -5 }}
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-center">
                    <Avatar3D {...member.avatar} />
                    
                    <div className="mb-4">
                      {IconComponent && <IconComponent className="w-8 h-8 text-blue-600 mx-auto mb-2" />}
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-700 text-sm leading-relaxed mb-6">{member.description}</p>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-6">
                      {member.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded-lg text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex justify-center space-x-2">
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="w-8 h-8 bg-sky-500 text-white rounded-full flex items-center justify-center hover:bg-sky-600 transition-colors"
                      >
                        <Twitter className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        href="#"
                        className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors"
                      >
                        <Mail className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Culture</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Ecocee, I believe in fostering innovation through dedication, continuous learning, 
            and a passion for technology. As we grow, we&apos;ll build a diverse team that brings together 
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚀</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-sm text-gray-600">Pushing boundaries and exploring new possibilities</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-sm text-gray-600">Building partnerships to achieve extraordinary results</p>
              </div>
              <div className="p-4">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📚</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Growth</h3>
                <p className="text-sm text-gray-600">Continuous learning and professional development</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TeamPage;
