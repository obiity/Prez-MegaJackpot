"use client";

import React, { useState, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface HolographicCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function HolographicCard({ children, className = "", glowColor = "rgba(251, 181, 5, 0.4)" }: HolographicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Mouse position values
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs for 3D rotation
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), { stiffness: 300, damping: 25 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), { stiffness: 300, damping: 25 });

  // Glare position
  const glareX = useTransform(x, [-0.5, 0.5], [0, 100]);
  const glareY = useTransform(y, [-0.5, 0.5], [0, 100]);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Calculate relative mouse positions from -0.5 to 0.5
    const relativeX = (e.clientX - rect.left) / width - 0.5;
    const relativeY = (e.clientY - rect.top) / height - 0.5;

    x.set(relativeX);
    y.set(relativeY);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-1000 h-full w-full cursor-pointer">
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
        }}
        className={`relative h-full transition-shadow duration-500 rounded-2xl overflow-hidden cursor-pointer ${className}`}
      >
        {/* Holographic Sheen Layer */}
        {isHovered && (
          <motion.div
            className="pointer-events-none absolute inset-0 z-30 opacity-60 mix-blend-overlay transition-opacity duration-300"
            style={{
              background: `radial-gradient(circle at ${glareX}% ${glareY}%, rgba(255,255,255,0.8) 0%, rgba(251,181,5,0.3) 30%, transparent 70%)`,
            }}
          />
        )}

        {/* Dynamic Holographic Foil Border */}
        <div
          className={`absolute -inset-[1px] rounded-2xl z-20 pointer-events-none transition-opacity duration-500 ${
            isHovered ? "opacity-100" : "opacity-30"
          }`}
          style={{
            background: isHovered
              ? `linear-gradient(135deg, ${glowColor}, transparent 40%, rgba(218, 21, 31, 0.6) 70%, ${glowColor})`
              : "rgba(255, 255, 255, 0.08)",
          }}
        />

        {/* Card Body */}
        <div className="relative z-10 h-full w-full">
          {children}
        </div>
      </motion.div>
    </div>
  );
}
