"use client";

import React, { useState, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { Physics2DPlugin } from "gsap/Physics2DPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Cpu,
  Brain,
  Code,
  Wifi,
  Zap,
  Target,
  ArrowRight,
  CircuitBoard,
  Microchip,
  Satellite,
  Cloud,
  Server,
  CpuIcon
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, Physics2DPlugin, ScrollTrigger);
}

type Service = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
  features: string[];
  details: string;
  gradient: string;
};

const services: Service[] = [
  {
    icon: Cpu,
    title: "Embedded Systems",
    description: "Custom embedded solutions tailored to your hardware requirements with real-time performance optimization.",
    features: [
      "Microcontroller Programming",
      "Real-time Systems",
      "Hardware Integration",
      "Performance Optimization",
    ],
    details: "We specialize in embedded systems development with expertise across ARM, RISC-V, and x86 architectures. From bare-metal programming to RTOS implementation, we deliver robust solutions for industrial, automotive, and consumer applications.",
    gradient: "from-green-500 to-emerald-600",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    description: "Intelligent automation and machine learning solutions powered by edge computing.",
    features: [
      "Edge AI Models",
      "Computer Vision",
      "Natural Language Processing",
      "Predictive Analytics",
    ],
    details: "Deploy AI solutions at the edge with optimized models for embedded devices. Our expertise spans TensorFlow Lite, PyTorch Mobile, and custom neural network implementations for real-time inference.",
    gradient: "from-green-400 to-cyan-500",
  },
  {
    icon: Code,
    title: "Firmware Development",
    description: "Secure and efficient low-level programming for embedded devices and IoT systems.",
    features: [
      "Bootloader Development",
      "Driver Programming",
      "RTOS Implementation",
      "Security Protocols",
    ],
    details: "We provide reliable firmware solutions ensuring your embedded devices function with precision, security, and optimized performance. Expertise in FreeRTOS, Zephyr, and custom RTOS development.",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: Wifi,
    title: "IoT Solutions",
    description: "End-to-end IoT development from sensor nodes to cloud integration and analytics.",
    features: [
      "Sensor Networks",
      "Wireless Protocols",
      "Cloud Integration",
      "Real-time Analytics",
    ],
    details: "Complete IoT ecosystem development including LoRaWAN, BLE, Zigbee, and 5G connectivity. We build scalable IoT platforms with AWS IoT, Azure IoT, and custom cloud solutions.",
    gradient: "from-cyan-500 to-green-500",
  },
  {
    icon: Zap,
    title: "Hardware Design",
    description: "Custom PCB design and hardware architecture for embedded systems and IoT devices.",
    features: [
      "PCB Design & Layout",
      "Signal Integrity",
      "Power Management",
      "RF Design",
    ],
    details: "Full-cycle hardware development from schematic design to manufacturing. Expertise in high-speed digital, analog, and mixed-signal design with EMI/EMC compliance.",
    gradient: "from-lime-500 to-green-500",
  },
  {
    icon: Target,
    title: "Custom Solutions",
    description: "Tailored technology solutions designed specifically for your unique requirements.",
    features: [
      "System Architecture",
      "Prototyping",
      "MVP Development",
      "Scalable Solutions",
    ],
    details: "End-to-end custom development from concept to production. We specialize in solving complex engineering challenges with innovative hardware-software co-design approaches.",
    gradient: "from-green-500 to-emerald-700",
  },
];

export const ServicesSection = () => {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const particlesRef = useRef([]);
  const floatingIconsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Section entrance animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Badge animation
    tl.fromTo(".services-badge", 
      { 
        rotationX: -90, 
        scale: 0.5, 
        opacity: 0 
      },
      { 
        rotationX: 0, 
        scale: 1, 
        opacity: 1, 
        duration: 1.2,
        ease: "back.out(1.7)"
      }
    )
    // Title animation
    .fromTo(titleRef.current,
      { 
        y: 100, 
        opacity: 0,
        rotationX: 45,
        filter: "blur(10px)"
      },
      { 
        y: 0, 
        opacity: 1,
        rotationX: 0,
        filter: "blur(0px)",
        duration: 1.5,
        ease: "power4.out"
      },
      "-=0.8"
    )
    // Subtitle animation
    .fromTo(subtitleRef.current,
      { 
        x: -100, 
        opacity: 0,
        skewX: 15 
      },
      { 
        x: 0, 
        opacity: 1,
        skewX: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.8)"
      },
      "-=1"
    )
    // Cards staggered animation with 3D effect
    .fromTo(cardsRef.current,
      { 
        y: 100, 
        opacity: 0,
        rotationY: -25,
        scale: 0.8 
      },
      { 
        y: 0, 
        opacity: 1,
        rotationY: 0,
        scale: 1,
        duration: 1,
        stagger: {
          amount: 0.8,
          from: "center"
        },
        ease: "back.out(1.5)"
      },
      "-=0.5"
    );

    // Particle animations
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        x: `+=${gsap.utils.random(-200, 200)}`,
        y: `+=${gsap.utils.random(-150, 150)}`,
        rotation: gsap.utils.random(-180, 180),
        duration: gsap.utils.random(6, 12),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.3
      });
    });

    // Floating icons animation
    floatingIconsRef.current.forEach((icon, i) => {
      gsap.to(icon, {
        y: `+=${gsap.utils.random(30, 60)}`,
        rotation: gsap.utils.random(-15, 15),
        duration: gsap.utils.random(3, 6),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5
      });
    });

    // Card hover animations with Physics2D
    cardsRef.current.forEach((card, index) => {
      const icon = card.querySelector('.service-icon');
      const button = card.querySelector('.service-button');
      const glow = card.querySelector('.service-glow');
      const particles = card.querySelectorAll('.service-particle');

      // Mouse enter with physics
      card.addEventListener('mouseenter', () => {
        const tlHover = gsap.timeline();
        
        tlHover
          .to(card, {
            y: -20,
            rotationY: 10,
            rotationX: 5,
            duration: 0.6,
            ease: "power2.out",
            physics2D: {
              velocity: 150,
              acceleration: 300
            }
          })
          .to(icon, {
            scale: 1.3,
            rotation: 15,
            duration: 0.4,
            ease: "back.out(1.7)"
          }, 0)
          .to(glow, {
            scale: 1.2,
            opacity: 0.8,
            duration: 0.4
          }, 0)
          .to(button, {
            y: -5,
            scale: 1.05,
            duration: 0.3
          }, 0)
          .to(particles, {
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            duration: 0.3
          }, 0.1);
      });

      // Mouse leave with elastic return
      card.addEventListener('mouseleave', () => {
        const tlLeave = gsap.timeline();
        
        tlLeave
          .to(card, {
            y: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)"
          })
          .to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "elastic.out(1, 0.5)"
          }, 0)
          .to(glow, {
            scale: 1,
            opacity: 0.3,
            duration: 0.6
          }, 0)
          .to(button, {
            y: 0,
            scale: 1,
            duration: 0.4
          }, 0)
          .to(particles, {
            scale: 0,
            opacity: 0,
            duration: 0.2
          }, 0);
      });
    });

    // Button hover effects
    const buttons = gsap.utils.toArray('.service-button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          y: -2,
          scale: 1.05,
          boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)",
          duration: 0.3,
          ease: "power2.out"
        });
      });

      button.addEventListener('mouseleave', () => {
        gsap.to(button, {
          y: 0,
          scale: 1,
          boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
          duration: 0.4,
          ease: "elastic.out(1, 0.5)"
        });
      });
    });

  }, { scope: sectionRef });

  const openModal = (index: number) => {
    setSelectedServiceIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedServiceIndex(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative w-full py-24 sm:py-32 bg-gradient-to-br from-gray-950 via-black to-green-950 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circuit Board Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#10b981 1px, transparent 1px),
                             linear-gradient(90deg, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
        
        {/* Animated Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            ref={el => particlesRef.current[i] = el}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-green-400' : 
              i % 3 === 1 ? 'bg-emerald-300' : 'bg-cyan-300'
            } opacity-40`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Floating Tech Icons */}
        <div ref={el => floatingIconsRef.current[0] = el} className="absolute top-20 left-20 p-4 bg-green-500/10 rounded-2xl backdrop-blur-md border border-green-500/20 shadow-2xl transform-gpu">
          <Cpu className="w-8 h-8 text-green-400" />
        </div>
        <div ref={el => floatingIconsRef.current[1] = el} className="absolute top-4 right-20 p-4 bg-cyan-500/10 rounded-2xl backdrop-blur-md border border-cyan-500/20 shadow-2xl transform-gpu">
          <Cloud className="w-8 h-8 text-cyan-400" />
        </div>
        <div ref={el => floatingIconsRef.current[2] = el} className="absolute bottom-40 left-10 p-4 bg-emerald-500/10 rounded-2xl backdrop-blur-md border border-emerald-500/20 shadow-2xl transform-gpu">
          <Server className="w-8 h-8 text-emerald-400" />
        </div>
        <div ref={el => floatingIconsRef.current[3] = el} className="absolute bottom-20 right-10 p-4 bg-blue-500/10 rounded-2xl backdrop-blur-md border border-blue-500/20 shadow-2xl transform-gpu">
          <Satellite className="w-8 h-8 text-blue-400" />
        </div>

        {/* Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="w-full flex justify-center mb-8">
            <Badge
              variant="outline"
              className="services-badge text-sm py-3 px-6 bg-black/50 backdrop-blur-md border border-green-500/30 text-green-400 font-mono tracking-wider shadow-2xl transform-gpu"
            >
              <CircuitBoard className="w-4 h-4 mr-2" />
              Our Expertise
            </Badge>
          </div>
          
          <h2 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight text-white mb-6 transform-gpu">
            <span className="block">Advanced</span>
            <span className="block bg-gradient-to-r from-green-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent mt-2">
              Technical Services
            </span>
          </h2>
          
          <p ref={subtitleRef} className="max-w-3xl mx-auto text-lg lg:text-xl text-gray-300 leading-relaxed bg-black/30 backdrop-blur-sm rounded-2xl px-8 py-6 border border-green-500/10 transform-gpu">
            From embedded systems to AI-powered solutions, we deliver cutting-edge technology services 
            that transform your ideas into market-ready products with expert engineering and innovation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ icon: Icon, title, description, features, gradient }, i) => (
            <div
              key={i}
              ref={el => cardsRef.current[i] = el}
              className="group relative bg-black/40 backdrop-blur-md rounded-3xl border border-green-500/20 shadow-2xl hover:shadow-[0_25px_60px_rgba(34,197,94,0.25)] transition-all duration-500 overflow-hidden transform-gpu preserve-3d cursor-pointer min-h-[480px] flex flex-col"
              style={{ transformStyle: 'preserve-3d' }}
              onClick={() => openModal(i)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openModal(i); }}
              aria-label={`Learn more about ${title}`}
            >
              {/* Animated Glow Layer */}
              <div className="service-glow absolute inset-0 bg-gradient-to-br from-green-500/10 via-cyan-500/5 to-transparent opacity-30 pointer-events-none" />
              
              {/* Hover Border Animation */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl p-px">
                <div className="w-full h-full bg-gradient-to-br from-black/40 to-gray-900/50 rounded-3xl" />
              </div>

              {/* Service Particles */}
              {[...Array(3)].map((_, particleIndex) => (
                <div
                  key={particleIndex}
                  className="service-particle absolute w-2 h-2 bg-green-400 rounded-full opacity-0 scale-0"
                  style={{
                    top: `${20 + particleIndex * 25}%`,
                    left: `${15 + particleIndex * 35}%`,
                  }}
                />
              ))}

              <div className="relative z-10 h-full flex flex-col p-8">
                {/* Icon with 3D effect */}
                <div className="relative mb-6">
                  <div className="absolute inset-0 bg-green-400/20 rounded-2xl blur-xl scale-150" />
                  <div className="service-icon relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 shadow-2xl border-2 border-green-400/50 transform-gpu">
                    <Icon className="text-white w-10 h-10 drop-shadow-lg" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-300 transition-colors duration-300">
                  {title}
                </h3>
                
                <p className="text-gray-300 text-lg mb-6 leading-relaxed flex-grow">
                  {description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 group/feature">
                      <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0 group-hover/feature:scale-150 transition-transform duration-300" />
                      <span className="text-gray-300 text-sm font-medium group-hover/feature:text-green-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  className="service-button w-full justify-center bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white font-bold rounded-2xl shadow-xl border-0 transition-all duration-300 py-4 mt-auto group/button"
                  onClick={(e) => { e.stopPropagation(); openModal(i); }}
                >
                  <span className="flex items-center">
                    Learn More 
                    <ArrowRight className="w-5 h-5 ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                  </span>
                </Button>
              </div>

              {/* Corner Accents */}
              <div className="absolute top-4 left-4 w-3 h-3 border-l-2 border-t-2 border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute top-4 right-4 w-3 h-3 border-r-2 border-t-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 w-3 h-3 border-l-2 border-b-2 border-emerald-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-4 right-4 w-3 h-3 border-r-2 border-b-2 border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for service details */}
      {selectedServiceIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 z-50"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div 
            className="bg-gradient-to-br from-black via-gray-900 to-green-950/50 backdrop-blur-md rounded-3xl max-w-2xl w-full p-8 relative shadow-2xl border border-green-500/30 transform-gpu"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center gap-6 mb-8">
              <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 shadow-xl">
                {React.createElement(services[selectedServiceIndex].icon, {
                  className: "text-white w-8 h-8",
                })}
              </div>
              <h3 className="text-3xl font-bold text-white">
                {services[selectedServiceIndex].title}
              </h3>
            </div>
            
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              {services[selectedServiceIndex].details}
            </p>
            
            <h4 className="font-semibold mb-4 text-green-400 text-lg">
              Key Features:
            </h4>
            
            <ul className="space-y-3 text-gray-300 mb-8">
              {services[selectedServiceIndex].features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button
              className="w-full justify-center bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-400 hover:to-cyan-400 text-white font-bold rounded-2xl py-4 border-0"
              onClick={closeModal}
            >
              Close Details
            </Button>
          </div>
        </div>
      )}
    </section>
  );
};