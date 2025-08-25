'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Only astronaut image
const imageData = [
  { src: '/assets/astronaut.png', alt: 'Space Explorer', color: '#00ff88' } // neon green
];

// Particle system for background effects
const ParticleSystem = () => {
  const [particles, setParticles] = useState<
    Array<{ id: number; x: number; y: number; size: number; opacity: number }>
  >([]);

  useEffect(() => {
    const newParticles = [];
    for (let i = 0; i < 40; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.4 + 0.1,
      });
    }
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute rounded-full bg-emerald-400/20 animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            animation: `float ${3 + Math.random() * 4}s ease-in-out infinite ${
              Math.random() * 2
            }s`,
          }}
        />
      ))}
    </div>
  );
};

// Glitch text effect
const GlitchText = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={`relative inline-block ${className}`}>
    {/* Main text */}
    <span className="relative z-10 bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-300 bg-clip-text text-transparent">
      {children}
    </span>

    {/* Glitch layers only visible on md+ */}
    <span
      className="hidden sm:block absolute top-0 left-0 bg-gradient-to-r from-green-500 to-lime-400 bg-clip-text text-transparent opacity-60 animate-glitch-1"
      aria-hidden="true"
    >
      {children}
    </span>
    <span
      className="hidden sm:block absolute top-0 left-0 bg-gradient-to-r from-emerald-300 to-green-600 bg-clip-text text-transparent opacity-60 animate-glitch-2"
      aria-hidden="true"
    >
      {children}
    </span>
  </div>
);

// Audio visualizer
const AudioVisualizer = () => {
  const [bars, setBars] = useState<number[]>([]);

  useEffect(() => {
    const generateBars = () => {
      setBars(Array.from({ length: 15 }, () => Math.random() * 100 + 10));
    };
    generateBars();
    const interval = setInterval(generateBars, 150);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-end justify-center space-x-1 h-12 sm:h-16 mb-6 sm:mb-8">
      {bars.map((height, i) => (
        <div
          key={i}
          className="w-1 bg-gradient-to-t from-green-500 to-emerald-300 rounded-t transition-all duration-150 ease-out"
          style={{ height: `${height}%` }}
        />
      ))}
    </div>
  );
};

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-green-900/10 via-black to-emerald-900/20" />
      <ParticleSystem />

      <main className="relative min-h-screen flex flex-col items-center justify-center px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-6xl mx-auto gap-12">
          {/* Text Section */}
          <div className="flex-1 text-center lg:text-left space-y-6 sm:space-y-8">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold">
              <GlitchText>404</GlitchText>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-emerald-300">
              Track Not Found
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-emerald-200/70 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Looks like this melody got lost in the mix. Let’s get you back to
              the main stage.
            </p>

            <AudioVisualizer />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                href="/"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/30"
              >
                <span className="relative z-10 text-black group-hover:text-white">
                  Return Home
                </span>
              </Link>
              <button className="group px-6 sm:px-8 py-3 sm:py-4 border-2 border-emerald-400/30 rounded-xl font-semibold text-lg hover:border-emerald-400/70 hover:bg-emerald-400/10 transition-all duration-300 hover:scale-105">
                <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent group-hover:from-green-400 group-hover:to-white">
                  Discover Music
                </span>
              </button>
            </div>
          </div>

          {/* Astronaut */}
          <div className="flex-1 flex justify-center items-center relative w-full">
            <div
              className="relative"
              style={{
                transform: `translate(${mousePosition.x * 0.4}px, ${
                  mousePosition.y * 0.4
                }px)`,
              }}
            >
              <div
                className="absolute inset-0 rounded-full blur-3xl opacity-60 animate-pulse"
                style={{
                  background: `radial-gradient(circle, ${imageData[0].color}40, transparent 70%)`,
                  width: '150%',
                  height: '150%',
                  left: '-25%',
                  top: '-25%',
                }}
              />
              <Image
                src={imageData[0].src}
                alt={imageData[0].alt}
                width={350}
                height={350}
                className="w-48 sm:w-64 md:w-80 lg:w-[350px] h-auto select-none drop-shadow-2xl"
                style={{
                  animation: 'float 6s ease-in-out infinite',
                  filter: `drop-shadow(0 0 30px ${imageData[0].color}60)`,
                }}
                priority
              />
            </div>
          </div>
        </div>
      </main>

      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-15px) rotate(2deg);
          }
          50% {
            transform: translateY(-8px) rotate(0deg);
          }
          75% {
            transform: translateY(-12px) rotate(-2deg);
          }
        }
        @keyframes glitch-1 {
          0%,
          100% {
            transform: translateX(0);
          }
          20% {
            transform: translateX(-2px);
          }
          40% {
            transform: translateX(2px);
          }
        }
        @keyframes glitch-2 {
          0%,
          100% {
            transform: translateY(0);
          }
          20% {
            transform: translateY(-1px);
          }
          40% {
            transform: translateY(1px);
          }
        }
      `}</style>
    </div>
  );
}
