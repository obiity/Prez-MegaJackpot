"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function Countdown({ className }: { className?: string }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 22,
    seconds: 10,
  });
  
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Jours", value: timeLeft.days },
    { label: "Heures", value: timeLeft.hours },
    { label: "Min", value: timeLeft.minutes },
    { label: "Sec", value: timeLeft.seconds },
  ];

  if (!mounted) {
    return <div className={cn("flex gap-1.5 sm:gap-4 justify-center items-center h-16 sm:h-24", className)} />;
  }

  return (
    <div className={cn("flex gap-1.5 sm:gap-4 justify-center items-center", className)}>
      {timeBlocks.map((block, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="relative bg-[var(--bg-surface)] text-[var(--text-primary)] font-mono w-11 h-13 sm:w-16 sm:h-20 rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-3xl shadow-lg border border-[var(--border-subtle)] overflow-hidden">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={block.value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center leading-none"
              >
                {block.value.toString().padStart(2, "0")}
              </motion.span>
            </AnimatePresence>
            {/* Glossy overlay for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent pointer-events-none" />
          </div>
          <span className="text-[9px] sm:text-xs mt-1 sm:mt-2 font-semibold tracking-wider text-[var(--text-primary)] dark:text-white uppercase opacity-80 transition-colors">{block.label}</span>
        </div>
      ))}
    </div>
  );
}
