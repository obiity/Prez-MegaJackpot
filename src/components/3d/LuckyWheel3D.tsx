"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Trophy, Gift, Dices, Volume2, VolumeX, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { playSound } from "@/lib/audioSFX";

const WHEEL_SECTORS = [
  { id: 1, label: "VILLA DE LUXE", prize: "Villa 100M FCFA", color: "#fbb505", textColor: "#000" },
  { id: 2, label: "TICKET GRATUIT", prize: "1 Ticket Maison Offert", color: "#102a58", textColor: "#fff" },
  { id: 3, label: "VOYAGE DUBAÏ", prize: "Voyage Business Dubaï", color: "#da151f", textColor: "#fff" },
  { id: 4, label: "+5 000 CHANCES", prize: "Bonus Tirage Famille", color: "#021a3c", textColor: "#fff" },
  { id: 5, label: "RENTE 2M / MOIS", prize: "Rente 36 Mois", color: "#fbb505", textColor: "#000" },
  { id: 6, label: "PACK HIGH-TECH", prize: "MacBook + iPhone 16", color: "#363636", textColor: "#fff" },
  { id: 7, label: "CASH 5 000 000", prize: "5M FCFA Cash", color: "#da151f", textColor: "#fff" },
  { id: 8, label: "TICKETS X3", prize: "Triple Chance Tirage", color: "#102a58", textColor: "#fff" },
];

export function LuckyWheel3D() {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [wonSector, setWonSector] = useState<typeof WHEEL_SECTORS[0] | null>(null);
  const [isMuted, setIsMuted] = useState(false);

  const handleSpin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setWonSector(null);
    playSound.click();

    // Random sector (0 to 7)
    const randomIndex = Math.floor(Math.random() * WHEEL_SECTORS.length);
    const sectorAngle = 360 / WHEEL_SECTORS.length;
    
    // Calculate rotation: 5 full spins (1800 deg) + target angle offset
    const targetAngle = 360 - (randomIndex * sectorAngle + sectorAngle / 2);
    const totalRotation = rotation + 1800 + targetAngle - (rotation % 360);

    setRotation(totalRotation);

    // Play tick sounds during spin
    let tickCount = 0;
    const interval = setInterval(() => {
      playSound.spinTick();
      tickCount++;
      if (tickCount > 25) clearInterval(interval);
    }, 120);

    // Stop spin after 4.5 seconds
    setTimeout(() => {
      setIsSpinning(false);
      const won = WHEEL_SECTORS[randomIndex];
      setWonSector(won);
      playSound.winFanfare();

      // Launch Confetti Burst
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#fbb505", "#da151f", "#ffffff"],
      });
    }, 4500);
  };

  const toggleSound = () => {
    const muted = playSound.toggleSound();
    setIsMuted(muted);
  };

  return (
    <section className="relative py-24 px-4 max-w-6xl mx-auto z-20 text-center overflow-hidden">
      
      {/* Header Badge */}
      <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-mj-gold)]/10 border border-[var(--color-mj-gold)]/50 text-[var(--color-mj-gold)] text-xs font-mono font-bold uppercase tracking-widest mb-4 shadow-[0_0_20px_rgba(251,181,5,0.2)]">
        <Sparkles className="w-4 h-4 animate-spin" /> MINI-JEU 3D INTERACTIF
      </div>

      <h2 className="text-h2 text-[var(--text-primary)] uppercase mb-3">
        ROUE DE LA <span className="text-[var(--color-mj-gold)] drop-shadow-[0_0_25px_rgba(251,181,5,0.8)]">FORTUNE 3D</span>
      </h2>
      <p className="text-body text-[var(--text-secondary)] max-w-lg mx-auto mb-10 font-medium">
        Faites tourner la roue dorée officielle et débloquez instantanément un avantage exclusif pour le prochain tirage.
      </p>

      {/* Main Wheel Container */}
      <div className="relative max-w-lg mx-auto flex flex-col items-center justify-center">
        
        {/* Top Fixed Gold Pointer Arrow */}
        <div className="absolute top-0 z-30 transform -translate-y-4">
          <div className="w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[32px] border-t-[var(--color-mj-gold)] filter drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]" />
        </div>

        {/* 3D Wheel Disk */}
        <div className="relative w-80 h-80 sm:w-96 sm:h-96 md:w-[420px] md:h-[420px] rounded-full p-4 bg-gradient-to-b from-[var(--color-mj-gold)] via-[#021a3c] to-[#010d1e] border-4 border-[var(--color-mj-gold)] shadow-[0_0_60px_rgba(251,181,5,0.4)] flex items-center justify-center">
          
          {/* Perimeter LED Lights */}
          {[...Array(16)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-3 h-3 rounded-full border border-black transition-all ${
                isSpinning ? "bg-yellow-300 animate-ping" : "bg-[var(--color-mj-gold)] shadow-[0_0_8px_#fbb505]"
              }`}
              style={{
                transform: `rotate(${i * 22.5}deg) translate(195px)`,
              }}
            />
          ))}

          {/* Rotating Wheel Canvas */}
          <motion.div
            className="w-full h-full rounded-full relative overflow-hidden border-2 border-white/20 shadow-inner"
            animate={{ rotate: rotation }}
            transition={{ duration: 4.5, ease: [0.15, 0.9, 0.2, 1] }}
          >
            {WHEEL_SECTORS.map((sector, index) => {
              const angle = 360 / WHEEL_SECTORS.length;
              const rotate = index * angle;

              return (
                <div
                  key={sector.id}
                  className="absolute w-1/2 h-1/2 top-0 right-0 origin-bottom-left flex items-center justify-center pr-6"
                  style={{
                    transform: `rotate(${rotate}deg) skewY(-45deg)`,
                    backgroundColor: sector.color,
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  <span
                    className="font-heading font-extrabold text-[10px] sm:text-xs tracking-wider uppercase whitespace-nowrap block"
                    style={{
                      transform: `skewY(45deg) rotate(${angle / 2}deg) translate(30px, -10px)`,
                      color: sector.textColor,
                    }}
                  >
                    {sector.label}
                  </span>
                </div>
              );
            })}
          </motion.div>

          {/* Center Golden Spinner Hub Button */}
          <button
            onClick={handleSpin}
            disabled={isSpinning}
            className="absolute z-20 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-b from-[var(--color-mj-gold)] to-yellow-600 text-black border-4 border-white font-heading font-black text-sm sm:text-base uppercase tracking-wider shadow-[0_0_30px_rgba(251,181,5,0.8)] hover:scale-105 active:scale-95 transition-all duration-300 flex flex-col items-center justify-center gap-1 cursor-pointer disabled:opacity-80"
          >
            <Dices className={`w-6 h-6 ${isSpinning ? "animate-spin" : ""}`} />
            <span>{isSpinning ? "EN COURS" : "TOURNER"}</span>
          </button>
        </div>

        {/* Audio Toggle Button */}
        <button
          onClick={toggleSound}
          className="mt-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/40 border border-white/10 text-xs font-mono text-gray-300 hover:text-white transition-colors"
        >
          {isMuted ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4 text-[var(--color-mj-gold)]" />}
          <span>{isMuted ? "EFFETS SONORES DESACTIVÉS" : "EFFETS SONORES ACTIVÉS"}</span>
        </button>

      </div>

      {/* Won Prize Modal */}
      <AnimatePresence>
        {wonSector && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <div className="relative p-8 max-w-md w-full rounded-2xl bg-gradient-to-b from-[#0c2045] to-[#021a3c] border-2 border-[var(--color-mj-gold)] text-center text-white shadow-[0_0_60px_rgba(251,181,5,0.5)]">
              <div className="w-16 h-16 rounded-full bg-[var(--color-mj-gold)] text-black flex items-center justify-center mx-auto mb-4 shadow-[0_0_30px_rgba(251,181,5,0.8)]">
                <Trophy className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-heading font-bold uppercase text-[var(--color-mj-gold)] mb-2">
                FÉLICITATIONS !
              </h3>
              <p className="text-gray-300 text-sm mb-4">Vous avez remporté le bonus exclusif :</p>
              <div className="text-2xl font-heading font-black text-white bg-black/60 py-3 px-6 rounded-xl border border-[var(--color-mj-gold)]/40 mb-6">
                {wonSector.prize}
              </div>
              <button
                onClick={() => setWonSector(null)}
                className="w-full py-3.5 bg-[var(--color-mj-red)] text-white font-heading font-bold text-base uppercase tracking-wider rounded-xl shadow-[0_0_20px_rgba(218,21,31,0.6)] hover:bg-red-600 transition-colors flex items-center justify-center gap-2"
              >
                RÉCLAMER MON GAIN <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
