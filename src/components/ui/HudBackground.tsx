"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function HudBackground() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  const isDark = resolvedTheme === "dark";

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'} 1px, transparent 1px),
            linear-gradient(to bottom, ${isDark ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 0, 0, 0.03)'} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
        }}
      />
      
      {/* Top Right Glow (Gold) */}
      <div 
        className={`absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[120px] transition-opacity duration-700 ${
          isDark ? 'bg-[var(--color-mj-gold)] opacity-15' : 'bg-[var(--color-mj-gold)] opacity-5'
        }`}
      />

      {/* Bottom Left Glow (Red) */}
      <div 
        className={`absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full blur-[120px] transition-opacity duration-700 ${
          isDark ? 'bg-[var(--color-mj-red)] opacity-20' : 'bg-[var(--color-mj-red)] opacity-[0.03]'
        }`}
      />
    </div>
  );
}
