"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { ReactNode } from "react";

type RevealVariant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";

interface AnimatedSectionProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number;
  duration?: number;
  className?: string;
  /** Amount the element must be visible before animating (0-1) */
  threshold?: number;
}

const variants: Record<RevealVariant, Variants> = {
  "fade-up": {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-in": {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  "slide-left": {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  "slide-right": {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  "scale-in": {
    hidden: { opacity: 0, scale: 0.92 },
    visible: { opacity: 1, scale: 1 },
  },
};

/**
 * Scroll-triggered reveal wrapper using Framer Motion.
 * Respects prefers-reduced-motion automatically.
 *
 * Usage:
 *   <AnimatedSection>
 *     <YourSection />
 *   </AnimatedSection>
 *
 *   <AnimatedSection variant="slide-left" delay={0.2}>
 *     <Card />
 *   </AnimatedSection>
 */
export const AnimatedSection = ({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.15,
}: AnimatedSectionProps) => {
  const prefersReduced = useReducedMotion();

  const v = variants[variant];

  return (
    <motion.div
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={v}
      transition={{
        duration: prefersReduced ? 0 : duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Staggered children reveal — animate child elements sequentially.
 *
 * Usage:
 *   <StaggerContainer>
 *     <div>Item 1</div>
 *     <div>Item 2</div>
 *     <div>Item 3</div>
 *   </StaggerContainer>
 */
export const StaggerContainer = ({
  children,
  className = "",
  staggerDelay = 0.08,
  threshold = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  threshold?: number;
}) => {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? "visible" : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: threshold }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReduced ? 0 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

/**
 * Individual stagger child — must be inside StaggerContainer.
 */
export const StaggerItem = ({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
