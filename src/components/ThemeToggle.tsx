"use client";

import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { toast } from "sonner";

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check initial saved theme or system preference
    const savedTheme = localStorage.getItem("mj_theme") as "dark" | "light" | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else {
      // Default to dark mode for Mega Jackpot VIP brand
      document.documentElement.classList.add("dark");
      setTheme("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("mj_theme", newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
      toast.info("Mode Nuit activé 🌙");
    } else {
      document.documentElement.classList.remove("dark");
      toast.info("Mode Jour activé ☀️");
    }
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggleTheme}
      className={`p-1.5 sm:p-2 transition-colors duration-300 flex items-center justify-center cursor-pointer ${
        theme === "light"
          ? "text-amber-500 hover:text-amber-600"
          : "text-[var(--color-mj-gold)] hover:text-amber-400"
      }`}
      aria-label="Basculer Mode Jour / Nuit"
      title={theme === "dark" ? "Activer le Mode Jour (Clair)" : "Activer le Mode Nuit (Sombre)"}
    >
      {theme === "dark" ? (
        <Sun className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-[var(--color-mj-gold)] stroke-[2.2] animate-in zoom-in spin-in-90 duration-300" />
      ) : (
        <Moon className="w-4.5 h-4.5 sm:w-5 sm:h-5 text-amber-500 stroke-[2.2] animate-in zoom-in spin-in-90 duration-300" />
      )}
    </button>
  );
}
