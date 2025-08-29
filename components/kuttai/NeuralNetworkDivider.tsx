'use client';

import { useEffect, useRef, useState } from 'react';

export default function NeuralNetworkDivider() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (canvasRef.current) {
      observer.observe(canvasRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = 200;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Neural network nodes and connections
    const nodes = Array.from({ length: 15 }, (_, i) => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 2 + Math.random() * 3,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      connections: [] as number[],
    }));

    // Create connections between nodes
    nodes.forEach((node, i) => {
      // Connect to 2-4 other nodes
      const numConnections = 2 + Math.floor(Math.random() * 3);
      for (let j = 0; j < numConnections; j++) {
        const targetIndex = Math.floor(Math.random() * nodes.length);
        if (targetIndex !== i && !node.connections.includes(targetIndex)) {
          node.connections.push(targetIndex);
        }
      }
    });

    // Animation
    let animationFrameId: number;
    let pulseValue = 0;
    let pulseDirection = 1;

    const animate = () => {
      if (!ctx) return;

      // Clear canvas with slight transparency for trail effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update pulse value
      pulseValue += 0.02 * pulseDirection;
      if (pulseValue >= 1) pulseDirection = -1;
      if (pulseValue <= 0) pulseDirection = 1;

      // Update node positions
      nodes.forEach(node => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off edges
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw nodes
        const gradient = ctx.createRadialGradient(
          node.x, node.y, 0, 
          node.x, node.y, node.radius * 2
        );
        gradient.addColorStop(0, `rgba(34, 197, 94, ${0.7 + pulseValue * 0.3})`);
        gradient.addColorStop(1, 'rgba(34, 197, 94, 0)');

        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw connections
        node.connections.forEach(targetIndex => {
          const target = nodes[targetIndex];
          const dx = target.x - node.x;
          const dy = target.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 150) {
            // Draw connection line
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(target.x, target.y);
            ctx.strokeStyle = `rgba(34, 197, 94, ${0.3 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();

            // Draw data pulse along connection occasionally
            if (Math.random() < 0.02) {
              const pulseProgress = Math.random();
              const pulseX = node.x + dx * pulseProgress;
              const pulseY = node.y + dy * pulseProgress;

              ctx.beginPath();
              ctx.arc(pulseX, pulseY, 2, 0, Math.PI * 2);
              ctx.fillStyle = 'rgba(34, 197, 94, 0.8)';
              ctx.fill();
            }
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div className="w-full py-10 bg-black overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="w-full h-48 opacity-80"
      />
    </div>
  );
}