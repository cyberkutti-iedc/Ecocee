"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, IndentIncreaseIcon, GroupIcon, Scale3DIcon } from "lucide-react";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

interface BenefitsProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: IndentIncreaseIcon,
    title: "Boost Efficiency",
    description: "Optimize workflows and cut down on expenses with our streamlined embedded solutions.",
  },
  {
    icon: LineChart,
    title: "Enhance Productivity",
    description: "Make informed decisions with real-time data-driven insights and analytics.",
  },
  {
    icon: GroupIcon,
    title: "Improve Customer Experiences",
    description: "Provide personalized and engaging interactions through smart IoT solutions.",
  },
  {
    icon: Scale3DIcon,
    title: "Scale with Flexibility",
    description: "Expand and adapt seamlessly with our tailored, future-proof solutions.",
  },
];

export const BenefitsSection = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);

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

    // Title animation
    tl.fromTo(titleRef.current, 
      { 
        y: 100, 
        opacity: 0,
        rotationX: 45 
      },
      { 
        y: 0, 
        opacity: 1,
        rotationX: 0,
        duration: 1.2,
        ease: "power3.out"
      }
    )
    // Description animation
    .fromTo(descriptionRef.current,
      { 
        x: -100, 
        opacity: 0,
        skewX: 10 
      },
      { 
        x: 0, 
        opacity: 1,
        skewX: 0,
        duration: 1,
        ease: "power2.out"
      },
      "-=0.8"
    )
    // Cards staggered animation
    .fromTo(cardsRef.current,
      { 
        y: 80, 
        opacity: 0,
        scale: 0.8,
        rotationY: -15 
      },
      { 
        y: 0, 
        opacity: 1,
        scale: 1,
        rotationY: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "back.out(1.7)"
      },
      "-=0.5"
    );

    // Card hover animations
    cardsRef.current.forEach((card, index) => {
      const icon = card.querySelector('.benefit-icon');
      const number = card.querySelector('.benefit-number');
      const glow = card.querySelector('.card-glow');

      // Mouse enter
      card.addEventListener('mouseenter', () => {
        gsap.to(card, {
          y: -15,
          rotationY: 5,
          rotationX: 5,
          duration: 0.4,
          ease: "power2.out"
        });
        
        gsap.to(icon, {
          scale: 1.2,
          rotation: 10,
          duration: 0.4,
          ease: "back.out(1.7)"
        });

        gsap.to(number, {
          scale: 1.3,
          opacity: 0.4,
          duration: 0.4,
          ease: "power2.out"
        });

        gsap.to(glow, {
          scale: 1.5,
          opacity: 0.8,
          duration: 0.4,
          ease: "power2.out"
        });
      });

      // Mouse leave
      card.addEventListener('mouseleave', () => {
        gsap.to(card, {
          y: 0,
          rotationY: 0,
          rotationX: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)"
        });

        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)"
        });

        gsap.to(number, {
          scale: 1,
          opacity: 0.1,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)"
        });

        gsap.to(glow, {
          scale: 1,
          opacity: 0.3,
          duration: 0.6,
          ease: "elastic.out(1, 0.5)"
        });
      });
    });

    // Continuous floating animation for background elements
    gsap.to(".floating-orb", {
      y: 30,
      rotation: 360,
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      stagger: 2
    });

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef}
      id="benefits" 
      className="relative py-24 sm:py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-black to-green-950"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-orb absolute top-20 left-10 w-32 h-32 bg-green-500/5 rounded-full blur-3xl" />
        <div className="floating-orb absolute bottom-32 right-16 w-40 h-40 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="floating-orb absolute top-1/2 left-1/3 w-24 h-24 bg-emerald-500/5 rounded-full blur-2xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(#10b981 1px, transparent 1px),
                             linear-gradient(90deg, #10b981 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 place-items-center lg:gap-20">
          {/* Left Content */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-8 h-8 border-l-2 border-t-2 border-green-400 opacity-60" />
            <div className="absolute -bottom-4 -right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400 opacity-60" />
            
            <h2 
              ref={titleRef}
              className="text-lg text-green-400 mb-3 tracking-widest uppercase font-bold font-mono transform-gpu"
            >
              Strategic Advantages
            </h2>
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-green-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent transform-gpu">
              Transform Your
              <span className="block mt-2">Business DNA</span>
            </h2>
            <p 
              ref={descriptionRef}
              className="text-xl text-gray-300 mb-8 leading-relaxed bg-black/40 backdrop-blur-md rounded-2xl px-6 py-5 shadow-2xl border border-green-500/20 transform-gpu"
            >
              Partnering with Ecocee unlocks the true potential of your business through 
              cutting-edge embedded solutions. Our bespoke IoT systems improve efficiency, 
              productivity, and customer engagement, giving you a distinct competitive edge 
              in the digital landscape.
            </p>
          </div>

          {/* Right - Benefits Cards */}
          <div className="grid lg:grid-cols-2 gap-6 w-full transform-gpu">
            {benefitList.map(({ icon: IconComponent, title, description }, index) => (
              <Card
                key={title}
                ref={el => cardsRef.current[index] = el}
                className="relative group bg-gradient-to-br from-black via-gray-900 to-green-950/50 border border-green-500/20 shadow-2xl hover:shadow-[0_20px_50px_rgba(34,197,94,0.3)] transition-all duration-500 rounded-2xl overflow-hidden transform-gpu preserve-3d"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Animated Glow Effect */}
                <div className="card-glow absolute inset-0 bg-gradient-to-br from-green-500/10 via-cyan-500/5 to-transparent opacity-30 pointer-events-none" />
                
                {/* Hover Border Animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-cyan-500 to-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl p-px">
                  <div className="w-full h-full bg-gradient-to-br from-black via-gray-900 to-green-950/50 rounded-2xl" />
                </div>

                <div className="relative z-10">
                  <CardHeader className="pb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-green-500 to-cyan-500 shadow-2xl border-2 border-green-400/50 benefit-icon transform-gpu">
                        <IconComponent
                          width={28}
                          height={28}
                          className="text-white drop-shadow-lg"
                        />
                      </div>
                      <span className="benefit-number text-4xl text-gray-800 font-black transition-all duration-500 select-none transform-gpu">
                        0{index + 1}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold text-white tracking-tight group-hover:text-green-300 transition-colors duration-300 transform-gpu">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-gray-300 text-sm font-medium pb-6 leading-relaxed transform-gpu">
                    <span className="block">{description}</span>
                  </CardContent>
                </div>

                {/* Animated Progress Bar */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-400 to-cyan-400 group-hover:w-full transition-all duration-1000 ease-out" />
                
                {/* Floating Particles */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 animate-ping bg-green-400 rounded-full" />
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 transform-gpu">
          <div className="inline-flex items-center gap-4 px-8 py-4 bg-black/50 backdrop-blur-md rounded-2xl border border-green-500/30 shadow-2xl">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-gray-300 font-semibold">
              Ready to transform your business?{" "}
              <span className="text-green-400 font-bold">Let's discuss your project</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};