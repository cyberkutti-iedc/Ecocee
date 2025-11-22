/**
 * GSAP Animation Utilities
 * Reusable animation functions for the entire website
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';
import { SplitText } from 'gsap/SplitText';
import { Observer } from 'gsap/Observer';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText, Observer);

/**
 * Animate text characters with stagger effect
 */
export function animateTextCharacters(
  selector: string,
  options?: {
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
  }
) {
  const timeline = gsap.timeline();
  const split = new SplitText(selector, { type: 'chars' });
  const chars = split.chars;

  timeline.from(
    chars,
    {
      opacity: 0,
      y: 20,
      rotationZ: -10,
      duration: options?.duration || 0.8,
      stagger: options?.stagger || 0.05,
      delay: options?.delay || 0,
      ease: options?.ease || 'back.out',
    },
    0
  );

  return timeline;
}

/**
 * Animate text lines with stagger effect
 */
export function animateTextLines(
  selector: string,
  options?: {
    duration?: number;
    stagger?: number;
    delay?: number;
    ease?: string;
  }
) {
  const timeline = gsap.timeline();
  const split = new SplitText(selector, { type: 'lines' });
  const lines = split.lines;

  timeline.from(
    lines,
    {
      opacity: 0,
      y: 30,
      duration: options?.duration || 0.6,
      stagger: options?.stagger || 0.1,
      delay: options?.delay || 0,
      ease: options?.ease || 'power2.out',
    },
    0
  );

  return timeline;
}

/**
 * Create parallax effect for elements
 */
export function createParallax(
  selector: string,
  options?: {
    speed?: number;
    trigger?: string;
  }
) {
  gsap.to(selector, {
    y: (i, target) => {
      const rect = target.getBoundingClientRect();
      return -rect.top * (options?.speed || 0.5);
    },
    ease: 'none',
    scrollTrigger: {
      trigger: options?.trigger || selector,
      start: 'top center',
      end: 'bottom center',
      scrub: 1,
      markers: false,
    },
  });
}

/**
 * Fade in element on scroll
 */
export function fadeInOnScroll(selector: string, options?: { delay?: number }) {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 30,
    duration: 0.8,
    delay: options?.delay || 0,
    ease: 'power2.out',
  });
}

/**
 * Scale up element on scroll
 */
export function scaleInOnScroll(selector: string, options?: { delay?: number }) {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    scale: 0.8,
    opacity: 0,
    duration: 0.8,
    delay: options?.delay || 0,
    ease: 'back.out',
  });
}

/**
 * Stagger multiple elements on scroll
 */
export function staggerInOnScroll(
  selector: string,
  options?: {
    stagger?: number;
    duration?: number;
  }
) {
  gsap.from(selector, {
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    opacity: 0,
    y: 20,
    duration: options?.duration || 0.6,
    stagger: options?.stagger || 0.1,
    ease: 'power2.out',
  });
}

/**
 * Create continuous floating animation
 */
export function floatAnimation(selector: string, options?: { duration?: number }) {
  gsap.to(selector, {
    y: -20,
    duration: options?.duration || 3,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
}

/**
 * Create rotation animation
 */
export function rotateAnimation(selector: string, options?: { duration?: number }) {
  gsap.to(selector, {
    rotation: 360,
    duration: options?.duration || 4,
    ease: 'none',
    repeat: -1,
  });
}

/**
 * Create pulse animation
 */
export function pulseAnimation(selector: string, options?: { scale?: number }) {
  gsap.to(selector, {
    scale: options?.scale || 1.1,
    duration: 0.6,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
}

/**
 * SVG morphing animation
 */
export function morphSVG(selector: string, targetPath: string, options?: { duration?: number }) {
  gsap.to(selector, {
    attr: { d: targetPath },
    duration: options?.duration || 1,
    ease: 'power2.inOut',
  });
}

/**
 * SVG stroke animation
 */
export function animateSVGStroke(selector: string, options?: { duration?: number }) {
  const elements = document.querySelectorAll(selector);
  
  elements.forEach((el) => {
    const length = (el as SVGPathElement).getTotalLength?.() || 0;
    
    gsap.set(el, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(el, {
      strokeDashoffset: 0,
      duration: options?.duration || 2,
      ease: 'power2.inOut',
    });
  });
}

/**
 * Create scroll-triggered counter animation
 */
export function animateCounter(
  selector: string,
  targetValue: number,
  options?: {
    duration?: number;
    suffix?: string;
    prefix?: string;
  }
) {
  const obj = { value: 0 };

  gsap.to(obj, {
    value: targetValue,
    duration: options?.duration || 2,
    scrollTrigger: {
      trigger: selector,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
    ease: 'power2.out',
    onUpdate: function () {
      const element = document.querySelector(selector) as HTMLElement;
      if (element) {
        element.textContent = `${options?.prefix || ''}${Math.floor(obj.value)}${options?.suffix || ''}`;
      }
    },
  });
}

/**
 * Timeline builder helper
 */
export function createTimeline(options?: {
  paused?: boolean;
  onComplete?: () => void;
}) {
  return gsap.timeline({
    paused: options?.paused || false,
    onComplete: options?.onComplete,
  });
}

/**
 * Stagger animation helper
 */
export function staggerAnimation(
  selector: string,
  animationConfig: gsap.TweenVars,
  options?: {
    stagger?: number;
    duration?: number;
  }
) {
  return gsap.to(selector, {
    ...animationConfig,
    duration: options?.duration || 0.6,
    stagger: {
      amount: options?.stagger || 0.3,
    },
  });
}

/**
 * Cleanup ScrollTrigger instances
 */
export function cleanupScrollTriggers() {
  ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
}

/**
 * Refresh ScrollTrigger (useful after DOM changes)
 */
export function refreshScrollTriggers() {
  ScrollTrigger.refresh();
}
