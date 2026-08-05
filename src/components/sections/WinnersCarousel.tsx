"use client";

import React, { useState, useEffect, useCallback } from 'react'
import { TicketCard } from "@/components/ui/TicketCard"
import { MapPin, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function WinnersCarousel() {
  const winners = [
    {
      id: 1,
      name: "Amadou D.",
      city: "Dakar",
      quote: "Je n'y croyais pas jusqu'à ce qu'on m'appelle. Cette villa a totalement changé la vie de ma famille !",
      product: "Maison",
      prize: "Villa 100M FCFA",
      color: "bg-[var(--color-mj-gold)] text-black font-bold",
      avatar: "AD"
    },
    {
      id: 2,
      name: "Fatou S.",
      city: "Thiès",
      quote: "Avec le capital de 15 millions gagné, j'ai pu enfin ouvrir mon propre salon de coiffure et recruter 4 employées.",
      product: "Business",
      prize: "15M FCFA + Dubaï",
      color: "bg-[var(--color-mj-red)] text-white font-bold",
      avatar: "FS"
    },
    {
      id: 3,
      name: "Ousmane F.",
      city: "Saint-Louis",
      quote: "Une rente mensuelle de 2 millions FCFA pendant 3 ans ! Cela me permet de financer sereinement l'université de mes enfants.",
      product: "Famille",
      prize: "2M FCFA/mois",
      color: "bg-blue-600 text-white font-bold",
      avatar: "OF"
    },
    {
      id: 4,
      name: "Aïssatou N.",
      city: "Mbour",
      quote: "Le voyage d'affaires à Dubaï m'a ouvert les portes de fournisseurs directs pour développer mon commerce d'import-export.",
      product: "Business",
      prize: "15M FCFA + Voyage",
      color: "bg-[var(--color-mj-red)] text-white font-bold",
      avatar: "AN"
    },
    {
      id: 5,
      name: "Moussa K.",
      city: "Ziguinchor",
      quote: "Gagner un terrain viabilisé avec titre foncier m'a permis d'investir dans l'immobilier locatif en toute sécurité.",
      product: "Maison",
      color: "bg-[var(--color-mj-gold)] text-black font-bold",
      avatar: "MK"
    },
    {
      id: 6,
      name: "Mariama B.",
      city: "Bouaké",
      quote: "J'ai tenté ma chance avec un seul ticket de 10 000 FCFA. Aujourd'hui, je suis propriétaire de ma maison à 28 ans !",
      product: "Maison",
      color: "bg-[var(--color-mj-gold)] text-black font-bold",
      avatar: "MB"
    },
    {
      id: 7,
      name: "Cheikh S.",
      city: "Dakar",
      quote: "Grâce à la rente Famille, ma mère a pu prendre sa retraite anticipée et profiter pleinement de sa santé.",
      product: "Famille",
      color: "bg-blue-600 text-white font-bold",
      avatar: "CS"
    }
  ]

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4000, stopOnInteraction: true })
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  const onInit = useCallback(() => {
    if (!emblaApi) return
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onInit()
    onSelect()
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <section className="py-12 bg-transparent text-[var(--text-primary)] overflow-hidden">
      <div className="w-full relative">
        <div className="flex items-end justify-between mb-8 text-center sm:text-left">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-[#021a3c] dark:text-white mb-2 uppercase font-black">
              ILS ONT CHANGÉ DE VIE
            </h2>
            <p className="text-slate-600 dark:text-gray-400 font-mono uppercase text-sm tracking-widest">
              Découvrez les histoires de nos récents gagnants.
            </p>
          </div>
        </div>

        {/* Embla Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden cursor-grab active:cursor-grabbing select-none" ref={emblaRef}>
            <div className="flex -ml-6 pb-6 pt-4 touch-pan-y">
              {winners.map((winner) => (
                <div key={winner.id} className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.333333%] min-w-0 pl-6 group">
                  <TicketCard
                    className="h-full bg-gradient-to-br from-[#da151f] via-[#b80d17] to-[#7a060d] dark:from-[#021a3c] dark:to-[#021a3c] border border-amber-400/40 dark:border-white/10 text-white shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300 group overflow-hidden"
                    headerContent={
                      <div className="p-6 pb-2 flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-[var(--color-mj-gold)] dark:bg-[#102a58] text-black dark:text-[var(--color-mj-gold)] border border-amber-200 dark:border-[#fbb505]/30 flex items-center justify-center font-heading text-lg shrink-0 font-black shadow-md">
                            {winner.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold text-white transition-colors">{winner.name}</h4>
                            <div className="flex items-center text-xs text-rose-100 dark:text-gray-400 font-mono transition-colors">
                              <MapPin className="w-3.5 h-3.5 mr-1 text-[var(--color-mj-gold)]" />
                              {winner.city}
                            </div>
                          </div>
                        </div>
                        <div className="text-[10px] font-mono font-bold uppercase px-2.5 py-1 rounded bg-black/40 text-[var(--color-mj-gold)] border border-amber-300/40 shrink-0 shadow-sm">
                          {winner.product}
                        </div>
                      </div>
                    }
                  >
                    <div className="relative flex-1 pt-2">
                      <p className="text-rose-100 dark:text-gray-300 text-sm italic relative z-10 pl-1 leading-relaxed font-medium">
                        &quot;{winner.quote}&quot;
                      </p>
                    </div>
                  </TicketCard>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows (Desktop) */}
          <button
            onClick={scrollPrev}
            className="hidden md:flex absolute top-1/2 -left-12 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white dark:bg-black/60 border border-slate-300 dark:border-white/20 shadow-lg text-[#021a3c] dark:text-white hover:text-[var(--color-mj-gold)] hover:border-[var(--color-mj-gold)] transition-all z-10 cursor-pointer"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-white dark:bg-black/60 border border-slate-300 dark:border-white/20 shadow-lg text-[#021a3c] dark:text-white hover:text-[var(--color-mj-gold)] hover:border-[var(--color-mj-gold)] transition-all z-10 cursor-pointer"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                index === selectedIndex
                  ? "w-8 bg-[var(--color-mj-gold)] shadow-[0_0_10px_rgba(251,181,5,0.8)]"
                  : "w-2.5 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Aller au gagnant ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
