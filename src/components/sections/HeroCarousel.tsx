"use client";

import React, { useEffect, useCallback, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { Countdown } from "@/components/ui/Countdown"
import { PRODUCTS } from "@/lib/constants"
import { Users, Trophy, Coins, CalendarDays } from "lucide-react"
import { motion } from "framer-motion"

export function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [Autoplay({ delay: 6000, stopOnInteraction: false })])
  const [selectedIndex, setSelectedIndex] = useState(0)

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
    <section className="relative w-full bg-transparent flex flex-col pt-16 sm:pt-20">
      {/* HUD Overlay Frame */}
      <div className="absolute inset-0 z-0 pointer-events-none border-b border-white/5 dark:border-[#fbb505]/20" />

      {/* Main Carousel Area */}
      <div className="relative w-full overflow-hidden z-10 cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
        <div className="flex w-full">
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

            const imagePosition = product.id === 'maison' ? 'object-center' :
                                  product.id === 'business' ? 'object-[center_25%]' :
                                  'object-[center_55%]';

            return (
              <div key={product.id} className="relative flex-[0_0_100%] w-full min-w-0 overflow-hidden min-h-[460px] sm:min-h-[520px] md:min-h-[580px] flex flex-col items-center justify-center pt-8 pb-10 sm:pt-12 sm:pb-14 px-4">
                
                {/* Background Image / Overlay */}
                <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
                  <Image 
                    src={`/${product.id.toUpperCase()}.png`}
                    alt={product.title}
                    fill
                    sizes="100vw"
                    className={`object-cover ${imagePosition} opacity-100`}
                    priority={index === 0}
                  />
                  {/* Subtle dark tint for text contrast */}
                  <div className="absolute inset-0 bg-black/40 dark:bg-black/60" />
                  {/* Gentle bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-base)] via-transparent to-transparent opacity-75" />
                </div>

                {/* Scoreboard Content Flow */}
                <div className="relative z-10 w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-2.5 sm:gap-4">
                  
                  {/* Live Status Tag */}
                  <motion.div 
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[var(--color-mj-red)]/50 bg-[var(--color-mj-red)]/10 backdrop-blur-md"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 10 }}
                    transition={{ duration: 0.4 }}
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--color-mj-red)] animate-pulse shadow-[0_0_10px_rgba(218,21,31,0.8)]" />
                    <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-[var(--color-mj-red)]">
                      Saison de tirages en cours
                    </span>
                  </motion.div>
                  
                  {/* Headline */}
                  <motion.h1 
                    className="text-hero text-[var(--text-primary)] uppercase leading-tight"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: selectedIndex === index ? 1 : 0, scale: selectedIndex === index ? 1 : 0.95 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    GAGNEZ <br />
                    {restTitle} <span className="text-[var(--color-mj-gold)] drop-shadow-[0_0_20px_rgba(251,181,5,0.8)]">{highlighted}</span>
                  </motion.h1>
                  
                  {/* Subtitle */}
                  <motion.p 
                    className="text-body text-[var(--text-secondary)] max-w-xl uppercase tracking-widest font-semibold text-xs sm:text-sm opacity-90"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: selectedIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    {product.id === 'maison' ? 'Devenez propriétaire de la villa de vos rêves.' :
                     product.id === 'business' ? 'Lancez votre activité avec un capital et un voyage commercial.' :
                     'Assurez votre avenir et celui de votre famille avec une rente garantie.'}
                  </motion.p>

                  {/* Countdown Card (in-flow) */}
                  <motion.div 
                    className="mt-2 sm:mt-3 flex flex-col items-center px-4 py-2.5 sm:px-6 sm:py-3 border border-[var(--border-subtle)] bg-[var(--bg-surface)]/85 dark:bg-[var(--bg-surface)]/75 backdrop-blur-xl rounded-2xl shadow-xl"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: selectedIndex === index ? 1 : 0, y: selectedIndex === index ? 0 : 10 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <p className="text-label text-[var(--text-secondary)] mb-1 sm:mb-2 font-mono">
                      Prochain tirage dans
                    </p>
                    <Countdown className="justify-center" />
                  </motion.div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* HUD Stat Strip (4-cell Scoreboard) */}
      <div className="relative z-20 w-full border-t border-[var(--border-subtle)] bg-[var(--bg-surface)]/40 backdrop-blur-lg">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[var(--border-subtle)]">
            
            <div className="p-3 sm:p-4 flex flex-col items-center justify-center text-center group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <CalendarDays className="w-4 h-4 mb-1 text-[var(--text-secondary)] group-hover:text-[var(--color-mj-gold)] transition-colors" />
              <div className="font-mono text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight tabular-nums">9 / AN</div>
              <div className="text-label text-[var(--text-secondary)] mt-1">Tirages garantis</div>
            </div>

            <div className="p-3 sm:p-4 flex flex-col items-center justify-center text-center group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Coins className="w-4 h-4 mb-1 text-[var(--text-secondary)] group-hover:text-[var(--color-mj-gold)] transition-colors" />
              <div className="font-mono text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight tabular-nums">150M+</div>
              <div className="text-label text-[var(--text-secondary)] mt-1">FCFA Distribués</div>
            </div>

            <div className="p-3 sm:p-4 flex flex-col items-center justify-center text-center group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Users className="w-4 h-4 mb-1 text-[var(--text-secondary)] group-hover:text-[var(--color-mj-gold)] transition-colors" />
              <div className="font-mono text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight tabular-nums">10 000+</div>
              <div className="text-label text-[var(--text-secondary)] mt-1">Joueurs Actifs</div>
            </div>

            <div className="p-3 sm:p-4 flex flex-col items-center justify-center text-center group hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
              <Trophy className="w-4 h-4 mb-1 text-[var(--text-secondary)] group-hover:text-[var(--color-mj-gold)] transition-colors" />
              <div className="font-mono text-xl sm:text-2xl font-bold text-[var(--text-primary)] tracking-tight tabular-nums">42</div>
              <div className="text-label text-[var(--text-secondary)] mt-1">Gagnants</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
