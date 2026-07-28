"use client";

import React, { useState, useEffect, useCallback } from 'react'
import { TicketCard } from "@/components/ui/TicketCard"
import { Quote, MapPin, ChevronLeft, ChevronRight } from "lucide-react"
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

export function WinnersCarousel() {
  const winners = [
    {
      id: 1,
      name: "Amadou D.",
      city: "Dakar",
      quote: "Je n'y croyais pas jusqu'à ce qu'on m'appelle. Cette maison a changé la vie de ma famille !",
      product: "Maison",
      color: "bg-[var(--color-mj-gold)]",
      avatar: "AD"
    },
    {
      id: 2,
      name: "Fatou S.",
      city: "Thiès",
      quote: "Avec le capital gagné, j'ai pu enfin ouvrir mon salon de coiffure.",
      product: "Business",
      color: "bg-[var(--color-mj-red)]",
      avatar: "FS"
    },
    {
      id: 3,
      name: "Ousmane F.",
      city: "Saint-Louis",
      quote: "Une rente mensuelle qui me permet d'assurer l'éducation de mes enfants.",
      product: "Famille",
      color: "bg-[var(--color-mj-blue)]",
      avatar: "OF"
    },
    {
      id: 4,
      name: "Aïssatou N.",
      city: "Mbour",
      quote: "Le voyage à Dubaï m'a permis de trouver de nouveaux fournisseurs pour mon commerce.",
      product: "Business",
      color: "bg-[var(--color-mj-red)]",
      avatar: "AN"
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
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onInit()
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect()
    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <section className="py-16 bg-[var(--bg-base)] overflow-hidden transition-colors duration-300">
      <div className="container mx-auto px-4 relative max-w-6xl">
        <div className="flex items-end justify-between mb-10">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl text-[var(--text-primary)] mb-2 transition-colors uppercase">ILS ONT CHANGÉ DE VIE</h2>
            <p className="text-[var(--text-secondary)] font-mono uppercase text-sm tracking-widest transition-colors">Découvrez les histoires de nos récents gagnants.</p>
          </div>
        </div>

        {/* Embla Carousel Container */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-6 pb-6 pt-4 touch-pan-y">
              {winners.map((winner) => (
                <div key={winner.id} className="flex-[0_0_300px] md:flex-[0_0_340px] min-w-0 pl-6 group">
                  <TicketCard
                    className="h-full border-none shadow-md hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
                    headerContent={
                      <div className="p-6 pb-2 flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 rounded-full bg-[var(--bg-base)] border border-[var(--border-subtle)] flex items-center justify-center font-heading text-lg text-[var(--color-mj-blue)] dark:text-white shrink-0 transition-colors">
                            {winner.avatar}
                          </div>
                          <div>
                            <h4 className="font-bold text-[var(--text-primary)] transition-colors">{winner.name}</h4>
                            <div className="flex items-center text-xs text-[var(--text-secondary)] font-mono transition-colors">
                              <MapPin className="w-3 h-3 mr-1 text-[var(--color-mj-gold)]" />
                              {winner.city}
                            </div>
                          </div>
                        </div>
                        <div className={`text-[10px] font-bold uppercase px-2 py-1 rounded text-white ${winner.color} shrink-0 shadow-sm`}>
                          {winner.product}
                        </div>
                      </div>
                    }
                  >
                    <div className="relative flex-1 pt-2">
                      <Quote className="absolute -top-4 -left-2 w-10 h-10 text-[var(--text-primary)] opacity-5 -z-10 rotate-180 transition-colors" />
                      <p className="text-[var(--text-secondary)] text-sm italic relative z-10 pl-2 transition-colors leading-relaxed font-medium">
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
            className="hidden md:flex absolute top-1/2 -left-12 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)] hover:border-[var(--color-mj-gold)] hover:shadow-md transition-all z-10"
            aria-label="Témoignage précédent"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="hidden md:flex absolute top-1/2 -right-12 -translate-y-1/2 w-12 h-12 items-center justify-center rounded-full bg-[var(--bg-surface)] border border-[var(--border-subtle)] shadow-sm text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)] hover:border-[var(--color-mj-gold)] hover:shadow-md transition-all z-10"
            aria-label="Témoignage suivant"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-2">
          {scrollSnaps.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${index === selectedIndex ? "w-6 bg-[var(--color-mj-gold)] shadow-sm" : "bg-[var(--border-subtle)] hover:bg-[var(--text-secondary)]/50"
                }`}
              aria-label={`Aller au gagnant ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
