"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ShieldCheck, ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/constants";

export function HeroSpotlightOfficial() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 6000, stopOnInteraction: false })
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState({ days: 12, hours: 8, minutes: 26, seconds: 45 });

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        return { ...prev, seconds: 59, minutes: prev.minutes > 0 ? prev.minutes - 1 : 59 };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  return (
    <section className="relative w-full overflow-hidden bg-[#021a3c] shadow-[0_20px_50px_rgba(0,0,0,0.6)] pt-0 transition-all">
      {/* Embla Drag Carousel */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
        <div className="flex w-full">
          {PRODUCTS.map((product) => {
            const imagePos =
              product.id === "maison"
                ? "object-center"
                : product.id === "business"
                ? "object-[center_30%]"
                : "object-[center_55%]";

            return (
              <div key={product.id} className="relative flex-[0_0_100%] w-full min-w-0 overflow-hidden min-h-[540px] sm:min-h-[620px] lg:min-h-[660px] flex flex-col justify-center">
                {/* 100% Edge-to-Edge Full Screen Background Image */}
                <div className="absolute inset-0 z-0 w-full h-full overflow-hidden">
                  <Image
                    src={`/${product.id.toUpperCase()}.png`}
                    alt={product.title}
                    fill
                    sizes="100vw"
                    className={`object-cover ${imagePos}`}
                    priority
                  />
                  {/* Full screen gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/30" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#010919] via-transparent to-black/50" />
                </div>

                {/* Inner Content Container */}
                <div className="container mx-auto px-4 sm:px-8 max-w-7xl relative z-10 pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 flex-1 flex flex-col justify-center">
                  <div className="text-left space-y-4 max-w-2xl">
                    {/* Season & Verification Badge */}
                    <div className="flex items-center gap-2 flex-wrap">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-[var(--color-mj-red)] text-white text-xs font-mono font-bold uppercase tracking-wider rounded-full shadow-[0_0_15px_rgba(218,21,31,0.5)]">
                        <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
                        {product.frequency}
                      </div>

                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-black/60 backdrop-blur-md border border-[#fbb505]/40 text-[var(--color-mj-gold)] text-[11px] font-mono font-bold uppercase tracking-wider rounded-full">
                        <ShieldCheck className="w-3.5 h-3.5" />
                        Tirage Certifié Huissier
                      </div>
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl lg:text-6xl font-heading font-black text-white uppercase tracking-tight leading-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.8)]">
                      {product.title}
                    </h1>

                    {/* Grand Lot Value Display */}
                    <div className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[var(--color-mj-gold)] uppercase tracking-wide drop-shadow-[0_0_20px_rgba(251,181,5,0.6)]">
                      {product.grandLot[0]}
                    </div>

                    {/* Secondary Lots Checklist */}
                    <ul className="space-y-1.5 py-1 text-xs sm:text-sm font-medium text-gray-100 drop-shadow-md">
                      {product.secondaryLots.map((lot, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <span className="w-4 h-4 rounded-full bg-[var(--color-mj-red)] text-white flex items-center justify-center text-[10px] font-bold shrink-0 shadow-md">✓</span>
                          <span className="font-semibold">{lot}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Countdown Clock Block */}
                    <div className="pt-2">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-gray-200 block mb-2 font-bold drop-shadow">Tirage certifié dans</span>
                      <div className="flex items-center gap-2.5">
                        <div className="text-center px-3.5 py-2 bg-black/75 backdrop-blur-md rounded-xl border border-[#fbb505]/30 min-w-[54px] shadow-lg">
                          <span className="font-mono font-bold text-lg text-white block">{String(timeLeft.days).padStart(2, '0')}</span>
                          <span className="text-[9px] font-mono text-[var(--color-mj-gold)] uppercase font-bold">Jours</span>
                        </div>
                        <div className="text-center px-3.5 py-2 bg-black/75 backdrop-blur-md rounded-xl border border-[#fbb505]/30 min-w-[54px] shadow-lg">
                          <span className="font-mono font-bold text-lg text-white block">{String(timeLeft.hours).padStart(2, '0')}</span>
                          <span className="text-[9px] font-mono text-[var(--color-mj-gold)] uppercase font-bold">Heures</span>
                        </div>
                        <div className="text-center px-3.5 py-2 bg-black/75 backdrop-blur-md rounded-xl border border-[#fbb505]/30 min-w-[54px] shadow-lg">
                          <span className="font-mono font-bold text-lg text-white block">{String(timeLeft.minutes).padStart(2, '0')}</span>
                          <span className="text-[9px] font-mono text-[var(--color-mj-gold)] uppercase font-bold">Min</span>
                        </div>
                        <div className="text-center px-3.5 py-2 bg-black/75 backdrop-blur-md rounded-xl border border-[#fbb505]/30 min-w-[54px] shadow-lg">
                          <span className="font-mono font-bold text-lg text-white block">{String(timeLeft.seconds).padStart(2, '0')}</span>
                          <span className="text-[9px] font-mono text-[var(--color-mj-gold)] uppercase font-bold">Sec</span>
                        </div>
                      </div>
                    </div>

                    {/* CTA Button */}
                    <div className="pt-3">
                      <Link href="/tickets">
                        <button className="px-8 py-3.5 bg-gradient-to-r from-[var(--color-mj-red)] via-rose-600 to-[var(--color-mj-red-dark)] hover:from-red-600 hover:to-[var(--color-mj-red)] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-wider rounded-xl shadow-[0_0_25px_rgba(218,21,31,0.6)] transition-all transform hover:scale-105 cursor-pointer flex items-center gap-2">
                          <span>PARTICIPER À L'OPPORTUNITÉ</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Carousel Indicator Dots on top of image */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20 pointer-events-auto">
        {PRODUCTS.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollTo(idx)}
            aria-label={`Aller au slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all cursor-pointer ${
              selectedIndex === idx
                ? "w-8 bg-[var(--color-mj-gold)] shadow-[0_0_10px_rgba(251,181,5,0.8)]"
                : "w-2.5 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
