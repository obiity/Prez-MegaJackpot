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
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { playSound } from "@/lib/audioSFX";
import { useLanguage } from "@/i18n/LanguageContext";

type ProductId = "maison" | "business" | "famille";

interface ProductMeta {
  id: ProductId;
  price: string;
  accentHex: string;
  icon: LucideIcon;
}

const PRODUCTS_META: Record<ProductId, ProductMeta> = {
  maison: {
    id: "maison",
    price: "5 000 FCFA",
    accentHex: "#fbb505",
    icon: Home,
  },
  business: {
    id: "business",
    price: "5 000 FCFA",
    accentHex: "#da151f",
    icon: Briefcase,
  },
  famille: {
    id: "famille",
    price: "5 000 FCFA",
    accentHex: "#fbb505",
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
  const { t } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<ProductId>("maison");
  const [serialNumber, setSerialNumber] = useState("MJ-2026-X8B9-4012");
  const [isSpinning, setIsSpinning] = useState(false);
  const [generatedCount, setGeneratedCount] = useState(1);
  const [copied, setCopied] = useState(false);
  const ticketCardRef = useRef<HTMLDivElement>(null);

  const meta = PRODUCTS_META[selectedProduct];
  const productCopy = t.simulator.products[selectedProduct];
  const Icon = meta.icon;

  const handleGenerate = () => {
    setIsSpinning(true);
    playSound.click();

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
        toast.success(`${t.simulator.toastAssignedPrefix}${generatedCount + 1}${t.simulator.toastAssignedSuffix}`);
      }
    }, 60);
  };

  const handleCopySerial = () => {
    navigator.clipboard.writeText(serialNumber);
    setCopied(true);
    playSound.click();
    toast.success(t.simulator.toastCopied);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative py-10 sm:py-12 px-2 sm:px-4 max-w-6xl mx-auto z-10">
      {/* Header Title */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gradient-to-r from-[#fbb505]/20 via-[#da151f]/20 to-[#102a58]/40 border border-[#fbb505]/40 text-[var(--color-mj-gold)] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(251,181,5,0.2)]">
          <Zap className="w-3.5 h-3.5 text-[var(--color-mj-gold)] animate-pulse" /> {t.simulator.badge}
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-[#021a3c] dark:text-white uppercase tracking-tight">
          {t.simulator.headingPart1}{" "}
          <span className="text-[var(--color-mj-gold)]">
            {t.simulator.headingHighlight}
          </span>
        </h2>
        <p className="text-slate-600 dark:text-gray-300 max-w-xl mx-auto mt-2 text-xs sm:text-sm md:text-base font-medium leading-relaxed px-2">
          {t.simulator.subtitle}
        </p>
      </div>

      {/* Main Interactive Deck */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-stretch">
        
        {/* Left Column: Product Selection & Controls */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5 bg-gradient-to-b from-[#da151f] to-[#a00c17] dark:from-[#102a58] dark:to-[#021a3c] text-white p-5 sm:p-6 md:p-8 rounded-3xl border border-[#fbb505]/40 dark:border-white/10 shadow-xl relative overflow-hidden transition-colors">
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--color-mj-gold)]/20 rounded-full blur-3xl pointer-events-none" />

          <div className="space-y-4 relative z-10">
            <div className="flex items-center justify-between">
              <h3 className="text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[var(--color-mj-gold)] text-[#021a3c] flex items-center justify-center text-[11px] font-black">1</span>
                {t.simulator.step1Title}
              </h3>
              <span className="text-[10px] font-mono text-[var(--color-mj-gold)] bg-black/40 px-2 py-0.5 rounded border border-[#fbb505]/40 font-bold">
                {productCopy.chances}
              </span>
            </div>

            {/* 3 Selector Cards */}
            <div className="space-y-3">
              {(Object.keys(PRODUCTS_META) as ProductId[]).map((key) => {
                const itemMeta = PRODUCTS_META[key];
                const itemCopy = t.simulator.products[key];
                const ItemIcon = itemMeta.icon;
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
                        ? "border-[#fbb505] bg-black/40 shadow-[0_0_20px_rgba(251,181,5,0.3)]"
                        : "border-white/20 bg-black/20 hover:border-white/40 hover:bg-black/35"
                    }`}
                  >
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
                              ? "bg-[var(--color-mj-gold)] text-[#021a3c]"
                              : "bg-white/10 text-white border border-white/20"
                          }`}
                        >
                          <ItemIcon className="w-5 h-5" />
                        </div>

                        <div>
                          <div className="font-heading font-extrabold text-xs sm:text-sm text-white flex items-center gap-2">
                            {itemCopy.name}
                          </div>
                          <div className="text-[11px] sm:text-xs font-bold mt-0.5 text-[var(--color-mj-gold)]">
                            {itemCopy.prize}
                          </div>
                        </div>
                      </div>

                      {isSelected ? (
                        <div className="w-6 h-6 rounded-full flex items-center justify-center text-[#021a3c] bg-[var(--color-mj-gold)] shrink-0 font-bold shadow-md">
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
              className={`w-full h-14 ${
                isSpinning
                  ? "bg-[var(--color-mj-gold)] shadow-[0_0_35px_rgba(251,181,5,0.7)] text-[#021a3c] font-black"
                  : "bg-gradient-to-r from-[var(--color-mj-red)] to-[var(--color-mj-red-dark)] hover:brightness-110 text-white font-black"
              } font-heading text-xs sm:text-sm uppercase tracking-wider rounded-2xl transition-all duration-300 flex items-center justify-center text-center disabled:opacity-90 cursor-pointer active:scale-98 px-4 relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent animate-[shimmer_2s_infinite] skew-x-12 pointer-events-none" />
              <span>{isSpinning ? t.simulator.generatingBtn : t.simulator.generateBtn}</span>
            </button>
          </div>

        </div>

        {/* Right Column: Holographic Physical Ticket Forge */}
        <div ref={ticketCardRef} className="lg:col-span-7 flex flex-col scroll-mt-24">
          <div className="relative h-full flex flex-col justify-between rounded-3xl bg-gradient-to-br from-[#da151f] to-[#a00c17] dark:from-[#102a58] dark:to-[#021a3c] border border-[#fbb505]/50 dark:border-[#fbb505]/40 shadow-xl text-white overflow-hidden p-5 sm:p-6 space-y-4">
            
            <div className="absolute inset-0 bg-[radial-gradient(#fbb505_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

            {/* Ticket Header Row */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/15 relative z-10">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-mj-gold)]/15 border border-[#fbb505]/40 flex items-center justify-center text-[var(--color-mj-gold)] shrink-0 shadow-md">
                  <TicketIcon className="w-5 h-5" />
                </div>
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[var(--color-mj-gold)] animate-ping" />
                    <span className="font-mono text-xs sm:text-sm font-black text-[var(--color-mj-gold)] uppercase tracking-wider">
                      {t.simulator.ticketHomologated}{generatedCount}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-300 block mt-0.5 font-medium">{t.simulator.bailiffCert}</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-[10px] font-mono bg-black/70 px-3 py-1.5 rounded-full border border-white/15 text-gray-200 shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" /> {t.simulator.certifiedSecure}
              </div>
            </div>

            {/* Middle Content Area */}
            <div className="space-y-4 relative z-10 my-auto">
              
              {/* Product Banner Strip Inside Ticket */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border" style={{ backgroundColor: `${meta.accentHex}20`, color: meta.accentHex, borderColor: `${meta.accentHex}50` }}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-400 uppercase tracking-widest block">{productCopy.name}</span>
                    <h4 className="font-heading font-extrabold text-sm text-white" style={{ color: meta.accentHex }}>{productCopy.prize}</h4>
                  </div>
                </div>
                <div className="text-right shrink-0">
                  <span className="text-[9px] font-mono text-gray-400 uppercase block">{t.simulator.nextDraw}</span>
                  <span className="text-xs font-mono font-bold text-white bg-white/10 px-2.5 py-0.5 rounded border border-white/15">{productCopy.drawDate}</span>
                </div>
              </div>

              {/* Single-Line Official Serial Code Machine */}
              <div className="text-center w-full flex flex-col items-center">
                <div className="flex items-center justify-center gap-2 mb-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-gray-300 font-bold">
                  <Sparkles className="w-3 h-3 text-[var(--color-mj-gold)] shrink-0" />
                  <span>{t.simulator.uniqueSerialCode}</span>
                  <Sparkles className="w-3 h-3 text-[var(--color-mj-gold)] shrink-0" />
                </div>

                <div
                  className={`relative w-full px-4 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-black/90 border-2 ${
                    isSpinning ? "border-[#fbb505] shadow-[0_0_40px_rgba(251,181,5,0.7)] scale-[1.01]" : "border-[#fbb505]/60 shadow-[0_0_35px_rgba(251,181,5,0.35)]"
                  } transition-all duration-200 flex items-center justify-center overflow-hidden group`}
                >
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
                  title={t.simulator.copyTitle}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="text-green-400 font-bold">{t.simulator.copied}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" />
                      <span>{t.simulator.copyCode}</span>
                    </>
                  )}
                </button>
              </div>

              {/* 3 Ticket Attribute Badges Row */}
              <div className="grid grid-cols-3 gap-2 text-center text-[10px] font-mono">
                <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-gray-400 block text-[9px] uppercase">{t.simulator.chancesLabel}</span>
                  <span className="font-bold text-[var(--color-mj-gold)]">{productCopy.chances}</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-gray-400 block text-[9px] uppercase">{t.simulator.unitPriceLabel}</span>
                  <span className="font-bold text-white">{meta.price}</span>
                </div>
                <div className="p-2 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-gray-400 block text-[9px] uppercase">{t.simulator.securityLabel}</span>
                  <span className="font-bold text-emerald-400">{t.simulator.securityValue}</span>
                </div>
              </div>

            </div>

            {/* Perforated Tear Line Divider */}
            <div className="relative pt-2 pb-1 space-y-1">
              <div className="relative h-3 w-full flex items-center justify-between overflow-hidden pointer-events-none">
                <div className="w-full border-t-2 border-dashed border-white/25 opacity-70" />
              </div>
              <div className="flex items-center justify-between text-[9px] font-mono text-gray-400 px-1">
                <span>{t.simulator.verificationCode}</span>
                <span className="tracking-[0.25em] font-bold text-gray-300">||| | |||| || | ||| ||</span>
                <span>{t.simulator.bailiffNumber}</span>
              </div>
            </div>

            {/* Ticket Footer Section */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3.5 relative z-10 mt-auto">
              <div className="text-left w-full sm:w-auto">
                <span className="text-[9px] font-mono uppercase tracking-wider text-gray-400 block">{t.simulator.ticketValue}</span>
                <h4 className="font-heading font-extrabold text-base text-white">
                  {meta.price} <span className="text-xs text-[var(--color-mj-gold)] font-mono font-normal">{t.simulator.perTicket}</span>
                </h4>
              </div>

              <button
                onClick={() => {
                  playSound.winFanfare();
                  toast.success(`${t.simulator.toastReservedPrefix}${serialNumber}${t.simulator.toastReservedSuffix}`);
                }}
                className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-[var(--color-mj-gold)] hover:brightness-110 text-[#021a3c] font-heading font-black text-xs uppercase tracking-wider rounded-2xl shadow-[0_0_25px_rgba(251,181,5,0.5)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer shrink-0 active:scale-95"
              >
                <span>{t.simulator.validateCta}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
