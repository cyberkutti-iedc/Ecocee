"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "Users",
    title: "Expert Team",
    description: "Our elite engineers specialize in cutting-edge embedded systems and IoT solutions. We stay ahead with the latest hardware and firmware technologies.",
  },
  {
    icon: "Settings",
    title: "Custom Solutions",
    description: "Tailored embedded systems designed for your specific requirements. From PCB design to firmware development, we deliver precision-engineered solutions.",
  },
  {
    icon: "Zap",
    title: "Innovative Approach",
    description: "Leveraging AI, machine learning, and advanced sensor technologies to create intelligent embedded systems that transform industries.",
  },
  {
    icon: "RefreshCw",
    title: "Agile Development",
    description: "Rapid prototyping and iterative development process ensuring your embedded solutions evolve with your business needs.",
  },
  {
    icon: "DollarSign",
    title: "Cost-Effective",
    description: "Optimized hardware design and efficient firmware development delivering high-performance solutions within your budget constraints.",
  },
  {
    icon: "Headphones",
    title: "24/7 Support",
    description: "Comprehensive technical support from concept to deployment and beyond, ensuring your embedded systems operate flawlessly.",
  },
];

export const FeaturesSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const descriptionRef = useRef(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Master timeline for section entrance
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    // Title animation with magnetic effect
    tl.fromTo(titleRef.current,
      { 
        y: 100, 
        opacity: 0,
        rotationX: 30 
      },
      { 
        y: 0, 
        opacity: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "power3.out"
      }
    )
    // Subtitle animation
    .fromTo(subtitleRef.current,
      { 
        scale: 0.8, 
        opacity: 0 
      },
      { 
        scale: 1, 
        opacity: 1,
        duration: 0.8,
        ease: "back.out(1.7)"
      },
      "-=0.8"
    )
    // Description animation
    .fromTo(descriptionRef.current,
      { 
        x: -50, 
        opacity: 0,
        skewX: 5 
      },
      { 
        x: 0, 
        opacity: 1,
        skewX: 0,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.5"
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
          amount: 0.6,
          from: "center"
        },
        ease: "back.out(1.5)"
      },
      "-=0.3"
    );

    // Individual card hover animations
    cardsRef.current.forEach((card, index) => {
      const icon = card.querySelector('.feature-icon');
      const content = card.querySelector('.feature-content');
      const glow = card.querySelector('.feature-glow');
      const particles = card.querySelectorAll('.feature-particle');

      // Mouse enter animation
      card.addEventListener('mouseenter', () => {
        const tlHover = gsap.timeline();
        
        tlHover
          .to(card, {
            y: -15,
            rotationY: 8,
            rotationX: 5,
            duration: 0.4,
            ease: "power2.out"
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
            duration: 0.4,
            ease: "power2.out"
          }, 0)
          .to(particles, {
            scale: 1,
            opacity: 1,
            stagger: 0.1,
            duration: 0.3,
            ease: "power2.out"
          }, 0.1)
          .to(content, {
            y: -5,
            duration: 0.3,
            ease: "power2.out"
          }, 0);
      });

      // Mouse leave animation
      card.addEventListener('mouseleave', () => {
        const tlLeave = gsap.timeline();
        
        tlLeave
          .to(card, {
            y: 0,
            rotationY: 0,
            rotationX: 0,
            duration: 0.6,
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
            duration: 0.6,
            ease: "elastic.out(1, 0.5)"
          }, 0)
          .to(particles, {
            scale: 0,
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
          }, 0)
          .to(content, {
            y: 0,
            duration: 0.4,
            ease: "power2.out"
          }, 0);
      });
    });

    // Continuous floating animation for background elements
    gsap.to(".floating-tech", {
      y: 20,
      rotation: 5,
      duration: 6,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 1.5
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      id="features" 
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-black via-gray-950 to-green-950/30"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Circuit Board Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(34, 197, 94, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Floating Tech Elements */}
        <div className="floating-tech absolute top-20 right-20 w-16 h-16 border-2 border-green-400/20 rounded-lg rotate-45" />
        <div className="floating-tech absolute bottom-40 left-20 w-12 h-12 border border-cyan-400/20 rounded-full" />
        <div className="floating-tech absolute top-1/3 left-1/4 w-8 h-8 bg-emerald-400/10 rounded" />
        
        {/* Gradient Orbs */}
        <div className="absolute -top-32 -left-32 w-64 h-64 bg-green-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-4 px-6 py-2 bg-black/50 backdrop-blur-md rounded-full border border-green-500/30">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <h2 
              ref={titleRef}
              className="text-sm text-green-400 tracking-widest uppercase font-mono font-bold transform-gpu"
            >
              Why Choose Ecocee
            </h2>
          </div>
          
          <h2 
            ref={subtitleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 transform-gpu"
          >
            <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Core
            </span>
            <span className="text-white block mt-2">Capabilities</span>
          </h2>
          
          <p 
            ref={descriptionRef}
            className="md:w-2/3 mx-auto text-xl text-gray-300 leading-relaxed transform-gpu"
          >
            We engineer cutting-edge embedded solutions that transform businesses. 
            Our expertise spans from hardware design to AI integration, delivering 
            innovative systems that drive growth and technological advancement.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 transform-gpu">
          {featureList.map(({ icon, title, description }, index) => (
            <div key={title} className="relative">
              <Card
                ref={el => cardsRef.current[index] = el}
                className="group relative h-full bg-gradient-to-br from-black/80 via-gray-900/90 to-green-950/50 border border-green-500/20 shadow-2xl hover:shadow-[0_25px_60px_rgba(34,197,94,0.25)] transition-all duration-500 rounded-2xl overflow-hidden transform-gpu preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Glow Layer */}
                <div className="feature-glow absolute inset-0 bg-gradient-to-br from-green-500/10 via-cyan-500/5 to-transparent opacity-30 pointer-events-none" />
                
                {/* Hover Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-px">
                  <div className="w-full h-full bg-gradient-to-br from-black/80 via-gray-900/90 to-green-950/50 rounded-2xl" />
                </div>

                {/* Animated Particles */}
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="feature-particle absolute w-2 h-2 bg-green-400 rounded-full opacity-0 scale-0"
                    style={{
                      top: `${20 + i * 30}%`,
                      left: `${10 + i * 40}%`,
                    }}
                  />
                ))}

                <div className="relative z-10 h-full flex flex-col">
                  <CardHeader className="flex flex-col items-center text-center pb-4 flex-grow-0">
                    <div className="relative mb-6">
                      {/* Icon Background Glow */}
                      <div className="absolute inset-0 bg-green-400/20 rounded-full blur-xl scale-150" />
                      {/* Main Icon */}
                      <div className="feature-icon relative flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-cyan-500 shadow-2xl border-2 border-green-400/50 transform-gpu">
                        <Icon
                          name={icon as keyof typeof icons}
                          size={28}
                          className="text-white drop-shadow-lg"
                        />
                      </div>
                    </div>
                    
                    <CardTitle className="text-xl font-bold text-white group-hover:text-green-300 transition-colors duration-300 transform-gpu">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="feature-content text-gray-300 text-sm leading-relaxed text-center pb-6 transform-gpu flex-grow">
                    <span className="block">{description}</span>
                  </CardContent>
                </div>

                {/* Animated Progress Line */}
                <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full group-hover:left-0 transition-all duration-1000 ease-out transform-gpu" />
                
                {/* Corner Accents */}
                <div className="absolute top-3 left-3 w-3 h-3 border-l-2 border-t-2 border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 right-3 w-3 h-3 border-r-2 border-t-2 border-cyan-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 left-3 w-3 h-3 border-l-2 border-b-2 border-emerald-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-3 right-3 w-3 h-3 border-r-2 border-b-2 border-green-400/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 transform-gpu">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-black/50 backdrop-blur-md rounded-2xl border border-green-500/30 shadow-2xl group hover:border-cyan-400/50 transition-all duration-500">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse" />
            <span className="text-gray-300 font-semibold group-hover:text-white transition-colors duration-300">
              Ready to build something extraordinary?{" "}
              <span className="text-green-400 font-bold">Let's engineer your vision</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};