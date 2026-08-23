"use client";

import { useEffect, useState } from "react";

const FLOWER_EMOJIS = ["🌸", "🌼", "🌺", "🌻", "🏵️", "💮"];
const PETAL_COUNT = 15;

function generatePetalStyle(index: number) {
  const left = Math.random() * 100;
  const delay = Math.random() * 8;
  const duration = 8 + Math.random() * 6;
  const size = 16 + Math.random() * 24;
  const rotate = Math.random() * 360;

  return {
    position: "absolute" as const,
    top: "-10%",
    left: `${left}%`,
    fontSize: `${size}px`,
    transform: `rotate(${rotate}deg)`,
    opacity: 0.9,
    animation: `flowerFall ${duration}s linear ${delay}s infinite`,
    pointerEvents: "none" as const,
    zIndex: 10,
    userSelect: "none" as const,
  };
}

export function FallingFlowers() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: PETAL_COUNT }).map((_, i) => (
        <div key={i} style={generatePetalStyle(i)}>
          {FLOWER_EMOJIS[i % FLOWER_EMOJIS.length]}
        </div>
      ))}
    </div>
  );
}
