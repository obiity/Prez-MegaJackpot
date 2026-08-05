"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  ArrowRight,
  Home,
  Briefcase,
  Users,
  Sparkles,
  Copy,
  Zap,
  Ticket as TicketIcon,
  Check,
  RotateCw
} from "lucide-react";
import { toast } from "sonner";
import { playSound } from "@/lib/audioSFX";

type ProductId = "maison" | "business" | "famille";

interface ProductConfig {
  id: ProductId;
  name: string;
  subtitle: string;
  prize: string;
  price: string;
  chances: string;
  drawDate: string;
  accentHex: string;
  accentBg: string;
  accentBorder: string;
  gradientFrom: string;
  gradientTo: string;
  icon: any;
}

const PRODUCTS_CONFIG: Record<ProductId, ProductConfig> = {
  maison: {
    id: "maison",
    name: "OPPORTUNITÉ MAISON",
    subtitle: "Villa de Luxe ou Maison Individuelle",
    prize: "Villa 100 000 000 FCFA",
    price: "5 000 FCFA",
    chances: "1 / 5 000 tickets",
    drawDate: "15 Août 2026",
    accentHex: "#fbb505",
    accentBg: "bg-[#fbb505]/15",
    accentBorder: "border-[#fbb505]",
    gradientFrom: "from-[#fbb505]/25",
    gradientTo: "to-[#0c1a3a]",
    icon: Home,
  },
  business: {
    id: "business",
    name: "OPPORTUNITÉ BUSINESS",
    subtitle: "Voyage + Formation + Capital",
    prize: "15 000 000 FCFA + Dubaï",
    price: "5 000 FCFA",
    chances: "1 / 2 500 tickets",
    drawDate: "01 Juil 2026",
    accentHex: "#da151f",
    accentBg: "bg-[#da151f]/15",
    accentBorder: "border-[#da151f]",
    gradientFrom: "from-[#da151f]/25",
    gradientTo: "to-[#1a0407]",
    icon: Briefcase,
  },
  famille: {
    id: "famille",
    name: "OPPORTUNITÉ FAMILLE",
    subtitle: "Rente Mensuelle Garantie",
    prize: "2M FCFA/mois (36 mois)",
    price: "5 000 FCFA",
    chances: "1 / 3 000 tickets",
    drawDate: "20 Fév 2026",
    accentHex: "#3b82f6",
    accentBg: "bg-[#3b82f6]/15",
    accentBorder: "border-[#3b82f6]",
    gradientFrom: "from-[#3b82f6]/25",
    gradientTo: "to-[#02112e]",
    icon: Users,
  },
};

function generateRandomSerial() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const part1 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  const part2 = Array.from({ length: 4 }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  return `MJ-2026-${part1}-${part2}`;
}

export function TicketSimulator() {
  const [selectedProduct, setSelectedProduct] = useState<ProductId>("maison");
  const [serialNumber, setSerialNumber] = useState("MJ-2026-X8B9-4012");
  const [isSpinning, setIsSpinning] = useState(false);
  const [generatedCount, setGeneratedCount] = useState(1);
  const [copied, setCopied] = useState(false);
  const ticketCardRef = useRef<HTMLDivElement>(null);

  const product = PRODUCTS_CONFIG[selectedProduct];
  const Icon = product.icon;

  const handleGenerate = () => {
    setIsSpinning(true);
    playSound.click();

    // Auto-scroll on mobile to the ticket code card
    if (window.innerWidth < 1024 && ticketCardRef.current) {
      ticketCardRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
    }

    let spins = 0;
    const interval = setInterval(() => {
      setSerialNumber(generateRandomSerial());
      playSound.spinTick();
      spins++;
      if (spins > 12) {
        clearInterval(interval);
        setIsSpinning(false);
        setGeneratedCount((prev) => prev + 1);
        playSound.winFanfare();
        toast.success(`✨ Ticket porte-bonheur #${generatedCount + 1} attribué !`);
      }
    }, 60);
  };

  const handleCopySerial = () => {
    navigator.clipboard.writeText(serialNumber);
    setCopied(true);
    playSound.click();
    toast.success("Code série copié dans le presse-papier !");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-10 sm:py-12 px-2 sm:px-4 max-w-6xl mx-auto z-10">
      {/* Header Title */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#fbb505]/20 via-[#da151f]/20 to-[#3b82f6]/20 border border-[#fbb505]/40 text-[var(--color-mj-gold)] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(251,181,5,0.2)]">
          <Zap className="w-3.5 h-3.5 text-[var(--color-mj-gold)] animate-pulse" /> SIMULATEUR DE CHANCE INTERACTIF
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-[#021a3c] dark:text-white uppercase tracking-tight">
          TESTEZ VOTRE <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-mj-gold)] via-yellow-400 to-[var(--color-mj-gold)]">CHANCE</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-300 max-w-xl mx-auto mt-2 text-xs sm:text-sm md:text-base font-medium leading-relaxed px-2">
          Sélectionnez votre opportunité de rêve, générez votre numéro de série fétiche et réservez instantanément votre participation.
        </p>
      </div>

      {/* Main Interactive Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Left Column: Product Selection & Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5 bg-gradient-to-b from-[#da151f] via-[#a00c17] to-[#7a060d] dark:from-[#0c1a3a] dark:via-[#061430] dark:to-[#04112c] text-white p-5 sm:p-6 md:p-8 rounded-3xl border border-amber-400/40 dark:border-white/10 shadow-xl relative overflow-hidden transition-colors">
          
          {/* Decorative Laser Glow */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-mj-gold)]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--color-mj-gold)] text-black flex items-center justify-center text-[11px] font-black">1</span>
                Choisissez l&apos;opportunité
              </h3>
              <span className="text-[10px] font-mono text-[var(--color-mj-gold)] bg-black/40 px-2 py-0.5 rounded border border-[#fbb505]/40 font-bold">
                {product.chances}
              </span>
            </div>

            {/* 3 Selector Cards */}
            <div className="space-y-3">
              {(Object.keys(PRODUCTS_CONFIG) as ProductId[]).map((key) => {
                const item = PRODUCTS_CONFIG[key];
                const ItemIcon = item.icon;
                const isSelected = selectedProduct === key;

                return (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedProduct(key);
                      playSound.click();
                    }}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-300 relative overflow-hidden cursor-pointer group ${
                      isSelected
                        ? "border-amber-300 bg-black/40 shadow-[0_0_20px_rgba(251,181,5,0.3)]"
                        : "border-white/20 bg-black/20 hover:border-white/40 hover:bg-black/35"
                    }`}
                  >
                    {/* Active Glow Bar */}
                    {isSelected && (
                      <motion.div
                        layoutId="activeGlow"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-[var(--color-mj-gold)]"
                      />
                    )}

                    <div className="flex items-center justify-between gap-2">
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-105 ${
                            isSelected
                              ? "bg-[var(--color-mj-gold)] text-black border border-amber-200"
                              : "bg-white/10 text-white border border-white/20"
                          }`}
                        >
                          <ItemIcon className="w-5 h-5" />
                        </div>

                        <div>
                          <div className="font-heading font-extrabold text-xs sm:text-sm text-white flex items-center gap-2">
                            {item.name}
                          </div>
                          <div className="text-[11px] sm:text-xs font-bold mt-0.5 text-amber-200">
                            {item.prize}
                          </div>
                        </div>
                      </div>

                      {isSelected ? (
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center text-black bg-[var(--color-mj-gold)] shrink-0 font-bold shadow-md"
                        >
                          <Check className="w-3.5 h-3.5 stroke-[3]" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full border border-white/30 flex items-center justify-center shrink-0 group-hover:border-white/60">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/30 group-hover:bg-white/70" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Action Button: Generate Serial */}
          <div className="pt-3 relative z-10">
            <button
              onClick={handleGenerate}
              disabled={isSpinning}
              className={`w-full h-14 bg-gradient-to-r ${
                isSpinning
                  ? "from-amber-500 via-[#fbb505] to-amber-600 shadow-[0_0_35px_rgba(251,181,5,0.7)] text-black font-black"
                  : "from-[var(--color-mj-red)] via-rose-600 to-[var(--color-mj-red-dark)] hover:from-red-600 hover:to-[var(--color-mj-red)] text-white font-black"
              } font-heading text-xs sm:text-sm uppercase tracking-wider rounded-2xl transition-all duration-300 flex items-center justify-center text-center disabled:opacity-90 cursor-pointer active:scale-98 px-4 relative overflow-hidden`}
            >
              {/* Shimmer sweep line */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shimmer_2s_infinite] skew-x-12 pointer-events-none" />

              <span>{isSpinning ? "GÉNÉRATION EN COURS..." : "GÉNÉRER UN NUMÉRO FÉTICHE"}</span>
            </button>
          </div>

        </div>

        {/* Right Column: Holographic Physical Ticket Forge */}
        <div ref={ticketCardRef} className="lg:col-span-7 flex flex-col scroll-mt-24">
          <div className="relative h-full flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#da151f] via-[#b80d17] to-[#7a060d] dark:from-[#0c1a3a] dark:via-[#061430] dark:to-[#04112c] border border-amber-400/50 dark:border-[#fbb505]/40 shadow-xl text-white overflow-hidden p-5 sm:p-6 space-y-4">
            
            {/* Holographic Laser Background Grid */}
            <div className="absolute inset-0 bg-[radial-gradient(#fbb505_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            {/* Ticket Header Row */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/15 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-mj-gold)]/15 border border-[#fbb505]/40 flex items-center justify-center text-[var(--color-mj-gold)] shrink-0 shadow-md">
                  <TicketIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-mj-gold)] animate-ping" />
                    <span className="font-mono text-xs sm:text-sm font-black text-[var(--color-mj-gold)] uppercase tracking-wider">
                      TICKET HOMOLOGUÉ #00{generatedCount}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-300 block mt-0.5 font-medium">Certification Officielle Huissier de Justice</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-mono bg-black/70 px-3 py-1.5 rounded-full border border-white/15 text-gray-200 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" /> CERTIFIÉ & SÉCURISÉ
              </div>
            </div>

            {/* Middle Content Area: Dense Ticket Details */}
            <div className="space-y-4 relative z-10 my-auto">
              
              {/* Product Banner Strip Inside Ticket */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border" style={{ backgroundColor: `${product.accentHex}20`, color: product.accentHex, borderColor: `${product.accentHex}50` }}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">{product.name}</span>
                    <h4 className="font-heading font-extrabold text-sm text-white" style={{ color: product.accentHex }}>{product.prize}</h4>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[9px] font-mono text-gray-400 uppercase block">Prochain Tirage</span>
                  <span className="text-xs font-mono font-bold text-white bg-white/10 px-2.5 py-0.5 rounded border border-white/15">{product.drawDate}</span>
                </div>
              </div>

              {/* Single-Line Official Serial Code Machine */}
              <div className="text-center w-full flex flex-col items-center">
                <div className="flex items-center justify-center gap-2 mb-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-gray-300 font-bold">
                  <Sparkles className="w-3 h-3 text-[var(--color-mj-gold)] shrink-0" />
                  <span>CODE SÉRIE UNIQUE HOMOLOGUÉ</span>
                  <Sparkles className="w-3 h-3 text-[var(--color-mj-gold)] shrink-0" />
                </div>

                {/* Glowing Ticket Chassis with Cyber Decode Flash */}
                <div
                  className={`relative w-full px-4 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-black/90 border-2 ${
                    isSpinning ? "border-amber-400 shadow-[0_0_40px_rgba(251,181,5,0.7)] scale-[1.01]" : "border-[#fbb505]/60 shadow-[0_0_35px_rgba(251,181,5,0.35)]"
                  } transition-all duration-200 flex items-center justify-center overflow-hidden group`}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] skew-x-12 pointer-events-none" />

                  <div className="w-full text-center py-0.5 select-none flex items-center justify-center">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={serialNumber}
                        initial={{ opacity: 0.8, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0.8, scale: 1.02 }}
                        className={`font-mono font-black text-base sm:text-xl md:text-2xl lg:text-3xl ${
                          isSpinning ? "text-white drop-shadow-[0_0_20px_rgba(255,255,255,1)]" : "text-[var(--color-mj-gold)] drop-shadow-[0_0_18px_rgba(251,181,5,0.9)]"
                        } tracking-tight sm:tracking-wider whitespace-nowrap leading-none inline-block select-none pointer-events-none transition-colors`}
                      >
                        {serialNumber}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {/* Copy Button */}
                <button
                  onClick={handleCopySerial}
                  className="mt-2.5 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-gray-300 hover:text-white text-[11px] font-mono transition-all cursor-pointer shadow-sm hover:scale-105 active:scale-95"
                  title="Copier le code série"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400 font-bold">Code copié !</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" />
                      <span>Copier le code</span>
                    </>
                  )}
                </button>
              </div>

              {/* 3 Ticket Attribute Badges Row */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-gray-400 block text-[9px] uppercase">Chances</span>
                  <span className="font-bold text-[var(--color-mj-gold)]">{product.chances}</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-gray-400 block text-[9px] uppercase">Prix Unitaire</span>
                  <span className="font-bold text-white">{product.price}</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-gray-400 block text-[9px] uppercase">Sécurité</span>
                  <span className="font-bold text-emerald-400">100% Inviolable</span>
                </div>
              </div>

            </div>

            {/* Perforated Tear Line Divider with Scannable Barcode Element */}
            <div className="relative pt-2 pb-1 space-y-1">
              <div className="relative h-3 w-full flex items-center justify-between overflow-hidden pointer-events-none">
                <div className="w-full border-t-2 border-dashed border-white/25 opacity-70" />
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 px-1">
                <span>VERIFICATION CODE</span>
                <span className="tracking-[0.25em] font-bold text-gray-300">||| | |||| || | ||| ||</span>
                <span>HUISSIER #9021</span>
              </div>
            </div>

            {/* Ticket Footer Section: Selected Lot & Action CTA */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3.5 relative z-10 mt-auto">
              <div className="text-left w-full sm:w-auto">
                <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 block">Valeur du Ticket</span>
                <h4 className="font-heading font-extrabold text-base text-white">
                  {product.price} <span className="text-xs text-[var(--color-mj-gold)] font-mono font-normal">/ ticket</span>
                </h4>
              </div>

              <button
                onClick={() => {
                  playSound.winFanfare();
                  toast.success(`Ticket ${serialNumber} réservé avec succès !`);
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-[var(--color-mj-gold)] to-yellow-400 hover:from-yellow-400 hover:to-[var(--color-mj-gold)] text-black font-heading font-black text-xs uppercase tracking-wider rounded-2xl shadow-[0_0_25px_rgba(251,181,5,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0 active:scale-95"
              >
                <span>VALIDER CE TICKET</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
