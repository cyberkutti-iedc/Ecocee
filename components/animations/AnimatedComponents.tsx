'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * Animated Logo SVG Component
 */
export function AnimatedLogo() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path');
      
      const timeline = gsap.timeline();
      
      paths.forEach((path, index) => {
        const length = path.getTotalLength();
        
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });

        timeline.to(
          path,
          {
            strokeDashoffset: 0,
            duration: 1.5,
            ease: 'power2.inOut',
          },
          index * 0.1
        );
      });

      // Float animation
      gsap.to(svgRef.current, {
        y: -20,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 200 200"
      className="w-32 h-32"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Circle background */}
      <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
      
      {/* Main shape - E */}
      <path
        d="M50 50 L100 50 L100 150 L50 150 M50 100 L100 100"
        fill="none"
        stroke="currentColor"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Accent circles */}
      <circle cx="130" cy="70" r="8" fill="currentColor" opacity="0.6" />
      <circle cx="150" cy="100" r="8" fill="currentColor" opacity="0.4" />
      <circle cx="130" cy="130" r="8" fill="currentColor" opacity="0.6" />
    </svg>
  );
}

/**
 * Animated Floating Particles
 */
export function AnimatedParticles() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particleCount = 6;
    const particles: HTMLElement[] = [];

    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'absolute w-2 h-2 rounded-full bg-blue-500 opacity-50';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      containerRef.current.appendChild(particle);
      particles.push(particle);

      gsap.to(particle, {
        x: (Math.random() - 0.5) * 200,
        y: (Math.random() - 0.5) * 200,
        opacity: Math.random() * 0.5 + 0.2,
        duration: Math.random() * 3 + 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }

    return () => {
      particles.forEach((p) => p.remove());
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {/* Particles will be added dynamically */}
    </div>
  );
}

/**
 * Animated gradient background
 */
export function AnimatedGradientBG() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    let hue = 0;

    const animate = () => {
      hue = (hue + 0.5) % 360;

      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, `hsl(${hue}, 100%, 50%)`);
      gradient.addColorStop(50, `hsl(${(hue + 60) % 360}, 100%, 50%)`);
      gradient.addColorStop(100, `hsl(${(hue + 120) % 360}, 100%, 50%)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ filter: 'blur(80px)', opacity: 0.3 }}
    />
  );
}

/**
 * Animated SVG Blob
 */
export function AnimatedBlob() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      gsap.to(svgRef.current, {
        scale: 1.05,
        duration: 1.5,
        yoyo: true,
        repeat: -1,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 400 400"
      className="w-64 h-64"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="blobFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.05" numOctaves="4" />
          <feDisplacementMap in="SourceGraphic" scale="40" />
        </filter>
        <linearGradient id="blobGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.8" />
        </linearGradient>
      </defs>

      <circle
        cx="200"
        cy="200"
        r="150"
        fill="url(#blobGradient)"
        filter="url(#blobFilter)"
        opacity="0.7"
      />
    </svg>
  );
}

/**
 * Animated scroll indicator
 */
export function AnimatedScrollIndicator() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const elements = containerRef.current.querySelectorAll('.scroll-line');
      
      gsap.to(elements, {
        y: 10,
        opacity: 0.2,
        duration: 1,
        repeat: -1,
        yoyo: true,
        stagger: 0.1,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center gap-1">
      <div className="scroll-line h-4 w-0.5 bg-white opacity-50" />
      <div className="scroll-line h-4 w-0.5 bg-white opacity-50" />
      <div className="scroll-line h-4 w-0.5 bg-white opacity-50" />
      <p className="text-xs text-white mt-2">Scroll to explore</p>
    </div>
  );
}

/**
 * Animated text reveal
 */
export function AnimatedTextReveal({ text }: { text: string }) {
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const split = new (gsap as any).utils.toArray(textRef.current.querySelectorAll('span'));
      
      gsap.from(textRef.current.querySelectorAll('span'), {
        opacity: 0,
        y: 20,
        stagger: 0.05,
        duration: 0.6,
        ease: 'back.out',
      });
    }
  }, []);

  return (
    <span ref={textRef}>
      {text.split('').map((char, i) => (
        <span key={i} className="inline-block">
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
}

/**
 * SVG Line Drawing animation
 */
export function SVGLineDrawing() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      const paths = svgRef.current.querySelectorAll('path');
      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
        });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 2,
          ease: 'power2.inOut',
        });
      });
    }
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 300 300"
      className="w-48 h-48"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Main line drawing */}
      <path
        d="M 50 50 L 250 50 L 250 150 L 50 150 L 50 250 L 150 250"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      
      {/* Additional decorative paths */}
      <path
        d="M 75 75 L 75 125"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
      <path
        d="M 225 75 L 225 125"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.5"
      />
    </svg>
  );
}
