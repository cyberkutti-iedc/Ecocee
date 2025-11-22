"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Cpu, Cloud, Zap, Server, CircuitBoard, Brain, Microchip, Satellite } from "lucide-react";
import { useRouter } from "next/navigation";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(useGSAP, DrawSVGPlugin, ScrollTrigger);
}

export const HeroSection = () => {
  const router = useRouter();
  const containerRef = useRef(null);
  const masterTimeline = useRef(null);

  // Element refs
  const heroBadgeRef = useRef(null);
  const headlineRefs = useRef([]);
  const descRef = useRef(null);
  const ctaButtonsRef = useRef([]);
  const logo3dRef = useRef(null);
  const floatingIconsRef = useRef([]);
  const circuitBgRef = useRef(null);
  const particlesRef = useRef([]);
  const whySectionRef = useRef(null);

  const handleConsulting = () => router.push("/consulting");
  const handleProjects = () => router.push("/projects");
  const handleContact = () => router.push("/contact");

  // Enhanced animation configuration
  useGSAP(() => {
    if (!containerRef.current) return;

    // Create master timeline
    masterTimeline.current = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // Background circuit animation
    if (circuitBgRef.current) {
      const paths = circuitBgRef.current.querySelectorAll('path');
      gsap.fromTo(paths, 
        { drawSVG: "0%", opacity: 0 },
        { 
          drawSVG: "100%", 
          opacity: 1,
          duration: 2.5,
          stagger: 0.15,
          ease: "power2.inOut"
        }
      );
    }

    // Particle field animation
    particlesRef.current.forEach((particle, i) => {
      gsap.to(particle, {
        x: `+=${gsap.utils.random(-150, 150)}`,
        y: `+=${gsap.utils.random(-100, 100)}`,
        rotation: gsap.utils.random(-180, 180),
        duration: gsap.utils.random(4, 8),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2
      });
    });

    // Main animation sequence
    masterTimeline.current
      // Badge entrance with 3D flip
      .fromTo(heroBadgeRef.current, 
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
      // Headline cascade with magnetic effect
      .fromTo(headlineRefs.current,
        { 
          y: 120, 
          rotationX: 45,
          opacity: 0,
          filter: "blur(10px)"
        },
        { 
          y: 0, 
          rotationX: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.5,
          stagger: 0.25,
          ease: "power4.out"
        },
        "-=0.5"
      )
      // Description slide-in
      .fromTo(descRef.current,
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
      // CTA buttons spring animation
      .fromTo(ctaButtonsRef.current,
        { 
          y: 80, 
          scale: 0.8,
          opacity: 0 
        },
        { 
          y: 0, 
          scale: 1,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "bounce.out"
        },
        "-=0.8"
      )
      // 3D Logo reveal with perspective
      .fromTo(logo3dRef.current,
        { 
          rotationY: -180,
          rotationX: 60,
          scale: 0.3,
          opacity: 0,
          transformPerspective: 1000
        },
        { 
          rotationY: 0,
          rotationX: 0,
          scale: 1,
          opacity: 1,
          duration: 2,
          ease: "power4.inOut"
        },
        "-=0.5"
      )
      // Floating icons entrance
      .fromTo(floatingIconsRef.current,
        { 
          scale: 0, 
          rotation: -180,
          opacity: 0 
        },
        { 
          scale: 1, 
          rotation: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.15,
          ease: "elastic.out(1, 0.5)"
        },
        "-=1.5"
      );

    // Continuous floating animation for icons
    floatingIconsRef.current.forEach((icon, i) => {
      gsap.to(icon, {
        y: `+=${gsap.utils.random(20, 40)}`,
        rotation: gsap.utils.random(-10, 10),
        duration: gsap.utils.random(2, 4),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.5
      });
    });

    // 3D mouse interaction for logo
    if (logo3dRef.current) {
      const handleMouseMove = (e) => {
        const rect = logo3dRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        
        gsap.to(logo3dRef.current, {
          rotationY: x * 30,
          rotationX: -y * 20,
          duration: 1,
          ease: "power2.out"
        });
      };

      const handleMouseLeave = () => {
        gsap.to(logo3dRef.current, {
          rotationY: 0,
          rotationX: 0,
          duration: 1.5,
          ease: "elastic.out(1, 0.5)"
        });
      };

      logo3dRef.current.addEventListener('mousemove', handleMouseMove);
      logo3dRef.current.addEventListener('mouseleave', handleMouseLeave);

      // Cleanup
      return () => {
        if (logo3dRef.current) {
          logo3dRef.current.removeEventListener('mousemove', handleMouseMove);
          logo3dRef.current.removeEventListener('mouseleave', handleMouseLeave);
        }
      };
    }

    // ScrollTrigger for why section
    gsap.fromTo(whySectionRef.current,
      { 
        x: -150, 
        opacity: 0,
        scale: 0.9 
      },
      { 
        x: 0, 
        opacity: 1,
        scale: 1,
        duration: 1.5,
        scrollTrigger: {
          trigger: whySectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
          markers: false
        }
      }
    );

    // Advanced button hover effects
    ctaButtonsRef.current.forEach(button => {
      button.addEventListener('mouseenter', () => {
        gsap.to(button, {
          y: -8,
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

  }, { scope: containerRef });

  const content = {
    badge: "Next-Gen Embedded Solutions",
    headline: ["AI-Powered", "Embedded Systems", "For The Future"],
    description: "Transforming ideas into intelligent embedded solutions. We specialize in cutting-edge IoT, AI integration, and hardware innovation that pushes technological boundaries.",
    cta: {
      primary: "Start Your Project",
      secondary: "View Case Studies",
      tertiary: "Consult Experts"
    },
    features: [
      "Edge AI & Machine Learning Integration",
      "Custom Hardware Architecture Design",
      "Real-time Embedded Systems Development",
      "IoT & Cloud Connectivity Solutions",
      "Firmware Optimization & Security"
    ]
  };

  return (
    <section ref={containerRef} className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-black to-green-950">
      
      {/* Animated Circuit Background */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <svg
          ref={circuitBgRef}
          className="w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
        >
          <path
            d="M100,150 L400,150 L400,300 L700,300 L700,450 L1000,450"
            stroke="url(#greenGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M1100,150 L800,150 L800,300 L500,300 L500,450 L200,450"
            stroke="url(#greenGradient)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M600,100 L600,350 L900,350 L900,500 L600,500 L600,700"
            stroke="url(#blueGreenGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <defs>
            <linearGradient id="greenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#059669" stopOpacity="0.3" />
            </linearGradient>
            <linearGradient id="blueGreenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 -z-10">
        {[...Array(20)].map((_, i) => (
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
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="min-h-screen flex flex-col lg:flex-row items-center justify-between py-20 lg:py-0 gap-12 lg:gap-8">
          
          {/* Left Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8 lg:space-y-12">
            
            {/* Animated Badge */}
            <div className="w-full flex justify-center lg:justify-start">
              <Badge
                ref={heroBadgeRef}
                variant="outline"
                className="text-sm py-3 px-6 bg-black/50 backdrop-blur-md border border-green-500/30 text-green-400 font-mono tracking-wider shadow-2xl transform-gpu"
              >
                <CircuitBoard className="w-4 h-4 mr-2" />
                {content.badge}
              </Badge>
            </div>

            {/* Main Headline with Magnetic Effect */}
            <div className="space-y-4">
              {content.headline.map((line, index) => (
                <h1
                  key={index}
                  ref={el => headlineRefs.current[index] = el}
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight tracking-tight transform-gpu ${
                    index === 0 ? 'text-green-400' :
                    index === 1 ? 'text-white' :
                    'bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent'
                  }`}
                >
                  {line}
                </h1>
              ))}
            </div>

            {/* Description */}
            <p
              ref={descRef}
              className="text-lg lg:text-xl text-gray-300 max-w-2xl leading-relaxed bg-black/30 backdrop-blur-sm rounded-2xl p-6 border border-green-500/10 transform-gpu"
            >
              {content.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center lg:justify-start">
              <Button
                ref={el => ctaButtonsRef.current[0] = el}
                className="group relative font-bold px-8 py-4 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white shadow-2xl transform-gpu overflow-hidden"
                onClick={handleConsulting}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                <Zap className="w-5 h-5 mr-3" />
                {content.cta.primary}
              </Button>
              
              <Button
                ref={el => ctaButtonsRef.current[1] = el}
                variant="outline"
                className="font-bold px-8 py-4 rounded-xl border-2 border-green-500/50 text-green-400 hover:bg-green-500/10 hover:border-green-400 backdrop-blur-sm transform-gpu"
                onClick={handleProjects}
              >
                <Brain className="w-5 h-5 mr-3" />
                {content.cta.secondary}
              </Button>
            </div>

            {/* Features List */}
            <div ref={whySectionRef} className="why-section w-full max-w-2xl mt-8 transform-gpu">
              <div className="rounded-2xl border border-green-500/20 bg-black/40 backdrop-blur-md p-6 lg:p-8 shadow-2xl">
                <h3 className="text-xl font-bold text-green-400 mb-6 flex items-center">
                  <Microchip className="w-6 h-6 mr-3" />
                  Core Capabilities
                </h3>
                <ul className="space-y-3 text-gray-300">
                  {content.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3 group">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2 group-hover:scale-150 transition-transform duration-300" />
                      <span className="text-base leading-relaxed group-hover:text-green-300 transition-colors duration-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Right - 3D Logo & Floating Elements */}
          <div className="flex-1 flex items-center justify-center relative">
            
            {/* Floating Tech Icons */}
            <div
              ref={el => floatingIconsRef.current[0] = el}
              className="absolute top-10 left-4 lg:left-10 p-4 bg-green-500/10 rounded-2xl backdrop-blur-md border border-green-500/20 shadow-2xl transform-gpu"
            >
              <Cpu className="w-8 h-8 text-green-400" />
            </div>
            
            <div
              ref={el => floatingIconsRef.current[1] = el}
              className="absolute top-4 right-4 lg:right-10 p-4 bg-cyan-500/10 rounded-2xl backdrop-blur-md border border-cyan-500/20 shadow-2xl transform-gpu"
            >
              <Cloud className="w-8 h-8 text-cyan-400" />
            </div>
            
            <div
              ref={el => floatingIconsRef.current[2] = el}
              className="absolute bottom-20 left-2 lg:left-8 p-4 bg-emerald-500/10 rounded-2xl backdrop-blur-md border border-emerald-500/20 shadow-2xl transform-gpu"
            >
              <Server className="w-8 h-8 text-emerald-400" />
            </div>
            
            <div
              ref={el => floatingIconsRef.current[3] = el}
              className="absolute bottom-10 right-2 lg:right-8 p-4 bg-blue-500/10 rounded-2xl backdrop-blur-md border border-blue-500/20 shadow-2xl transform-gpu"
            >
              <Satellite className="w-8 h-8 text-blue-400" />
            </div>

            {/* Main 3D Logo Container */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 transform-gpu">
              <div
                ref={logo3dRef}
                className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border border-green-500/30 bg-gradient-to-br from-green-500/10 via-black to-cyan-500/10 backdrop-blur-md flex items-center justify-center cursor-pointer transform-gpu"
                style={{
                  transformStyle: 'preserve-3d',
                }}
              >
                {/* Holographic Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-green-500/5 via-transparent to-cyan-500/5 rounded-3xl" />
                
                {/* Main Logo */}
                <div className="relative z-10 w-4/5 h-4/5 flex items-center justify-center">
                  <div className="absolute w-full h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full blur-xl opacity-20 animate-pulse" />
                  <img
                    src="/logo.webp"
                    alt="Ecocee AI Embedded Systems"
                    className="w-full h-full object-contain drop-shadow-2xl filter brightness-110 contrast-110 transform-gpu"
                    style={{ transform: 'translateZ(50px)' }}
                  />
                </div>

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl border border-green-400/30 shadow-[0_0_80px_0_rgba(34,197,94,0.3)]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-green-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-400 rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  );
};