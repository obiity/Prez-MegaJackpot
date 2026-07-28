"use client";

import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Countdown } from "@/components/ui/Countdown"
import { PRODUCTS } from "@/lib/constants"
import { ChevronLeft, ChevronRight, Users, Trophy, Coins, CalendarDays } from "lucide-react"
import { motion } from "framer-motion"

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 6000, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    setTimeout(() => onSelect(), 0)
    emblaApi.on('select', onSelect)
    emblaApi.on('reInit', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="relative w-full h-[90vh] min-h-[700px] max-h-[900px] bg-transparent overflow-hidden flex flex-col pt-20">
      {/* HUD Overlay Frame */}
      <div className="absolute inset-0 z-0 pointer-events-none border-b border-white/5 dark:border-[var(--color-mj-gold)]/10" />

      {/* Main Carousel Area */}
      <div className="relative flex-1 w-full overflow-hidden z-10" ref={emblaRef}>
        <div className="flex w-full h-full">
          {PRODUCTS.map((product, index) => {
            let restTitle = "";
            let highlighted = "";
            if (product.grandLot[0] === "Pendant 36 mois") {
              restTitle = "Pendant";
              highlighted = "36 mois";
            } else {
              const splitTitle = product.grandLot[0].split(' ');
              highlighted = splitTitle.pop() || '';
              restTitle = splitTitle.join(' ');
            }

            return (
              <div key={product.id} className="relative flex-[0_0_100%] w-full h-full min-w-0 overflow-hidden flex flex-col items-center justify-center">
                
                {/* Background Image / Overlay */}
                <motion.div 
                  className="absolute inset-0 w-full h-full origin-center z-0"
                  initial={{ scale: 1.15 }}
                  animate={{ scale: selectedIndex === index ? 1.05 : 1.15 }}
                  transition={{ duration: 6, ease: "linear" }}
                >
                  <Image 
                    src={`/${product.id.toUpperCase()}.jpg`}
                    alt={product.title}
                    fill
                    className={`object-cover opacity-100 ${
                      product.id === 'maison' ? 'object-center' :
                      product.id === 'business' ? 'object-top' :
                      'object-[center_30%]'
                    }`}
                    priority={index === 0}
                  />
                  {/* Subtle tint for text contrast */}
                  <div className="absolute inset-0 bg-[var(--bg-base)]/40 dark:bg-[var(--bg-base)]/60" />
                  {/* Bottom fade to blend with the next section */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent opacity-90" />
                </motion.div>

                {/* Scoreboard Content */}
                <div className="relative z-10 w-full container mx-auto px-4 flex flex-col items-center text-center">
                  
                  {/* Live Status Tag */}
                  <motion.div 
                    className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-sm border border-[var(--color-mj-red)]/50 bg-[var(--color-mj-red)]/10 backdrop-blur-md"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--color-mj-red)] animate-pulse shadow-[0_0_10px_rgba(218,21,31,0.8)]" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[var(--color-mj-red)]">
                      Saison de tirages en cours
                    </span>
                  </motion.div>
                  
                  {/* Headline */}
                  <motion.h1 
                    className="text-hero text-[var(--text-primary)] mb-4 uppercase"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: selectedIndex === index ? 1 : 0, scale: selectedIndex === index ? 1 : 0.95 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                  >
                    GAGNEZ <br />
                    {restTitle} <span className="text-[var(--color-mj-gold)] drop-shadow-[0_0_20px_rgba(251,181,5,0.8)]">{highlighted}</span>
                  </motion.h1>
                  
                  <motion.p 
                    className="text-body text-[var(--text-secondary)] mb-32 max-w-2xl uppercase tracking-widest font-semibold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: selectedIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    {product.id === 'maison' ? 'Devenez propriétaire de la villa de vos rêves.' :
                     product.id === 'business' ? 'Lancez votre activité avec un capital et un voyage commercial.' :
                     'Assurez votre avenir et celui de votre famille avec une rente garantie.'}
                  </motion.p>
                </div>
              </div>
            )
          })}
        </div>

        {/* Static Overlay for Countdown */}
        <div className="absolute bottom-8 left-0 right-0 z-20 flex justify-center pointer-events-none px-4">
          <div className="pointer-events-auto flex flex-col items-center p-4 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/30 backdrop-blur-md rounded-lg shadow-[0_0_30px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <p className="text-label text-[var(--text-secondary)] mb-3">
              Prochain tirage dans
            </p>
            <Countdown className="justify-center" />
          </div>
        </div>

        {/* Carousel Nav */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 hidden md:flex justify-between pointer-events-none z-20">
          <button onClick={scrollPrev} className="pointer-events-auto h-12 w-12 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 backdrop-blur-md flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--color-mj-gold)] hover:border-[var(--color-mj-gold)] transition-colors">
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button onClick={scrollNext} className="pointer-events-auto h-12 w-12 rounded-full border border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 backdrop-blur-md flex items-center justify-center text-[var(--text-primary)] hover:text-[var(--color-mj-gold)] hover:border-[var(--color-mj-gold)] transition-colors">
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* HUD Stat Strip (4-cell Scoreboard) */}
      <div className="relative z-20 w-full border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]/40 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--border-subtle)]">
            
            <div className="p-4 sm:p-6 flex flex-col items-center justify-center text-center group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <CalendarDays className="w-5 h-5 mb-2 text-[var(--text-secondary)] group-hover:text-[var(--color-mj-gold)] transition-colors" />
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight tabular-nums">9 / AN</div>
              <div className="text-label text-[var(--text-secondary)] mt-2">Tirages garantis</div>
            </div>

            <div className="p-4 sm:p-6 flex flex-col items-center justify-center text-center group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Coins className="w-5 h-5 mb-2 text-[var(--text-secondary)] group-hover:text-[var(--color-mj-gold)] transition-colors" />
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight tabular-nums">150M+</div>
              <div className="text-label text-[var(--text-secondary)] mt-2">FCFA Distribués</div>
            </div>

            <div className="p-4 sm:p-6 flex flex-col items-center justify-center text-center group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Users className="w-5 h-5 mb-2 text-[var(--text-secondary)] group-hover:text-[var(--color-mj-gold)] transition-colors" />
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight tabular-nums">10 000+</div>
              <div className="text-label text-[var(--text-secondary)] mt-2">Joueurs Actifs</div>
            </div>

            <div className="p-4 sm:p-6 flex flex-col items-center justify-center text-center group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Trophy className="w-5 h-5 mb-2 text-[var(--text-secondary)] group-hover:text-[var(--color-mj-gold)] transition-colors" />
              <div className="font-mono text-2xl sm:text-3xl font-bold text-[var(--text-primary)] tracking-tight tabular-nums">42</div>
              <div className="text-label text-[var(--text-secondary)] mt-2">Gagnants</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
