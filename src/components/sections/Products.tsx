"use client";

import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { PRODUCTS } from "@/lib/constants"
import { Sparkles } from "lucide-react"
import { toast } from "sonner"

const containerVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.2 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 50, damping: 20 }
  }
}

export function Products() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px 0px" })

  return (
    <section id="jeux" className="relative py-24 sm:py-32 bg-transparent overflow-hidden transition-colors duration-300">
      
      <div className="container relative mx-auto px-4 z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-h2 text-[var(--text-primary)] mb-4 uppercase">
            CHOISISSEZ VOTRE <span className="text-[var(--color-mj-gold)] drop-shadow-[0_0_20px_rgba(251,181,5,0.8)]">DESTIN</span>
          </h2>
          <p className="text-body font-semibold text-[var(--text-secondary)] uppercase tracking-widest mt-6">
            Tentez de remporter l'un de nos lots d'exception.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 max-w-[1400px] mx-auto items-stretch"
        >
          {PRODUCTS.map((product) => {
            // Map accents
            const gradientBar = product.id === 'maison' ? 'from-[var(--color-mj-blue)] to-[var(--color-mj-gold)]' : 
                                product.id === 'business' ? 'from-[var(--color-mj-red)] to-[var(--color-mj-gold)]' : 
                                'from-[var(--color-mj-gold)] to-[var(--color-mj-red)]';
            
            const radialGlow = product.id === 'maison' ? 'from-[var(--color-mj-gold)]/20' :
                               product.id === 'business' ? 'from-[var(--color-mj-red)]/20' :
                               'from-[var(--color-mj-blue)]/30';

            return (
              <motion.div key={product.id} variants={cardVariants} className="h-full">
                <div className="relative group h-full flex flex-col bg-[var(--bg-surface)]/40 dark:bg-[#050505]/60 backdrop-blur-md border border-[var(--border-subtle)] rounded-xl overflow-hidden shadow-2xl transition-all duration-300 hover:border-[var(--color-mj-gold)]/50 hover:shadow-[0_0_40px_rgba(251,181,5,0.1)]">

                  {/* Background Image Container */}
                  <div className="relative h-56 w-full overflow-hidden bg-black/5 dark:bg-white/5">
                    <Image 
                      src={`/${product.id.toUpperCase()}.jpg`}
                      alt={product.title}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Bottom gradient for text contrast only */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[var(--bg-surface)] to-transparent opacity-80" />
                    
                    {/* Corner accents */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-white/50" />
                    <div className="absolute top-2 right-2 w-2 h-2 border-t border-r border-white/50" />
                    <div className="absolute bottom-2 left-2 w-2 h-2 border-b border-l border-white/50" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-white/50" />
                  </div>

                  {/* Card Content */}
                  <div className="flex flex-col flex-1 p-6 md:p-8">
                    <div className="mb-4">
                      <div className="text-label text-[var(--text-secondary)] mb-2 border border-[var(--border-subtle)] bg-[var(--bg-base)]/50 inline-block px-2 py-1 rounded">
                        {product.frequency}
                      </div>
                      <h3 className="text-h3 text-[var(--text-primary)] uppercase">
                        {product.title}
                      </h3>
                    </div>

                    <div className="space-y-6 flex-1 text-left flex flex-col justify-start">
                      {/* GRAND LOT */}
                      <div>
                        <span className="block text-label text-[var(--text-secondary)] mb-2">
                          {product.grandLotTitle}
                        </span>
                        <div className="space-y-1">
                          {product.grandLot.map((line, i) => {
                            const isAmount = line.includes("FCFA");
                            return (
                              <div key={i} className={
                                isAmount
                                  ? `text-prize text-[var(--color-mj-gold)] drop-shadow-[0_0_25px_rgba(251,181,5,0.6)] py-1`
                                  : "text-body font-medium text-[var(--text-primary)]"
                              }>
                                {line === "Pendant 36 mois" ? (
                                  <>Pendant <span className="text-[var(--color-mj-gold)]">36 mois</span></>
                                ) : (
                                  line
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* SECONDARY LOTS */}
                      {product.secondaryLots.length > 0 && (
                        <div>
                          <span className="block text-label text-[var(--text-secondary)] mb-3">
                            {product.secondaryLotsTitle}
                          </span>
                          <div className="flex flex-wrap gap-2">
                            {product.secondaryLots.map((line, i) => (
                              <span
                                key={i}
                                className="inline-flex items-center px-3 py-1.5 bg-black/5 dark:bg-white/5 border border-[var(--border-subtle)] text-label text-[var(--text-primary)] backdrop-blur-sm"
                              >
                                {line.replace('-', '').trim()}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Full-width Glowing Red CTA */}
                    <div className="mt-8 pt-6 border-t border-[var(--border-subtle)]">
                      <button
                        onClick={() => toast.info(`L'opportunité ${product.title} ouvre bientôt !`)}
                        className="w-full flex items-center justify-center gap-2 h-14 bg-[var(--color-mj-red)] text-white font-heading font-bold text-lg uppercase tracking-[0.2em] rounded-lg shadow-[0_4px_20px_rgba(218,21,31,0.4)] dark:shadow-[0_0_20px_rgba(218,21,31,0.8)] hover:shadow-[0_0_30px_rgba(218,21,31,1)] transition-all duration-300 transform hover:-translate-y-1"
                      >
                        PARTICIPER
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
