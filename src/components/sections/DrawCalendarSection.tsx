"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calendar as CalendarIcon, Clock, Home, Briefcase, Users, ShieldCheck, ArrowRight, Bell, Check } from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { playSound } from "@/lib/audioSFX";

type FilterType = "tous" | "maison" | "business" | "famille";

interface DrawEvent {
  id: string;
  productType: "maison" | "business" | "famille";
  productName: string;
  prize: string;
  date: string;
  dayMonth: string;
  year: string;
  time: string;
  countdown: string;
  isNext: boolean;
  accentColor: string;
  accentBg: string;
  borderHex: string;
  icon: any;
}

const DRAW_EVENTS: DrawEvent[] = [
  {
    id: "draw-1",
    productType: "business",
    productName: "OPPORTUNITÉ BUSINESS",
    prize: "15 000 000 FCFA + Voyage Dubaï",
    date: "01 Juillet 2026",
    dayMonth: "01 JUIL",
    year: "2026",
    time: "20h00 GMT",
    countdown: "Dans 12 jours",
    isNext: true,
    accentColor: "text-[var(--color-mj-red)]",
    accentBg: "bg-[var(--color-mj-red)]/15",
    borderHex: "border-[#da151f]/70 hover:border-[#da151f] shadow-[0_0_20px_rgba(218,21,31,0.25)]",
    icon: Briefcase,
  },
  {
    id: "draw-2",
    productType: "maison",
    productName: "OPPORTUNITÉ MAISON",
    prize: "Villa de Luxe 100 000 000 FCFA",
    date: "15 Août 2026",
    dayMonth: "15 AOÛT",
    year: "2026",
    time: "20h00 GMT",
    countdown: "Dans 57 jours",
    isNext: false,
    accentColor: "text-[var(--color-mj-gold)]",
    accentBg: "bg-[var(--color-mj-gold)]/15",
    borderHex: "border-[var(--color-mj-gold)]/50",
    icon: Home,
  },
  {
    id: "draw-3",
    productType: "famille",
    productName: "OPPORTUNITÉ FAMILLE",
    prize: "Rente 2M FCFA/mois (36 mois)",
    date: "20 Octobre 2026",
    dayMonth: "20 OCT",
    year: "2026",
    time: "20h00 GMT",
    countdown: "Dans 123 jours",
    isNext: false,
    accentColor: "text-blue-500 dark:text-blue-400",
    accentBg: "bg-blue-500/15",
    borderHex: "border-blue-500/50",
    icon: Users,
  },
  {
    id: "draw-4",
    productType: "maison",
    productName: "OPPORTUNITÉ MAISON",
    prize: "Maison Individuelle Clé en Main",
    date: "20 Décembre 2026",
    dayMonth: "20 DÉC",
    year: "2026",
    time: "20h00 GMT",
    countdown: "Tirage Fin d'Année",
    isNext: false,
    accentColor: "text-[var(--color-mj-gold)]",
    accentBg: "bg-[var(--color-mj-gold)]/15",
    borderHex: "border-[var(--color-mj-gold)]/50",
    icon: Home,
  },
];

export function DrawCalendarSection() {
  const [activeFilter, setActiveFilter] = useState<FilterType>("tous");
  const [remindersSet, setRemindersSet] = useState<Record<string, boolean>>({});

  const filteredEvents = DRAW_EVENTS.filter(
    (item) => activeFilter === "tous" || item.productType === activeFilter
  );

  const toggleReminder = (id: string, dateStr: string) => {
    playSound.click();
    setRemindersSet((prev) => {
      const isAlreadySet = !!prev[id];
      if (!isAlreadySet) {
        toast.success(`⏰ Rappel programmé pour le tirage du ${dateStr} !`);
      } else {
        toast.info("Rappel désactivé.");
      }
      return { ...prev, [id]: !isAlreadySet };
    });
  };

  return (
    <section className="relative py-10 px-4 max-w-6xl mx-auto z-10 transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-black/60 border border-[#fbb505]/40 text-[var(--color-mj-gold)] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(251,181,5,0.2)]">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" /> CALENDRIER OFFICIEL CERTIFIÉ PAR HUISSIER
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-[#021a3c] dark:text-white uppercase tracking-tight">
          CALENDRIER DES <span className="text-[var(--color-mj-gold)]">PROCHAINS TIRAGES</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-300 max-w-xl mx-auto mt-2 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
          Consultez les dates officielles des tirages en direct et réservez vos numéros fétiches à l&apos;avance.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
        {[
          { id: "tous", label: "Tous les Tirages" },
          { id: "maison", label: "Maison" },
          { id: "business", label: "Business" },
          { id: "famille", label: "Famille" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveFilter(tab.id as FilterType);
              playSound.click();
            }}
            className={`px-4 py-2 rounded-full font-heading text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === tab.id
                ? "bg-[var(--color-mj-gold)] text-black shadow-[0_0_15px_rgba(251,181,5,0.4)] scale-105"
                : "bg-slate-100 dark:bg-black/40 hover:bg-slate-200 dark:hover:bg-black/70 text-slate-700 dark:text-gray-300 border border-slate-300 dark:border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Calendar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map((event) => {
          const EventIcon = event.icon;
          const isReminderSet = !!remindersSet[event.id];

          return (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl p-5 sm:p-6 bg-gradient-to-br from-[#da151f] via-[#a00c17] to-[#60050c] dark:from-[#0c1f44] dark:via-[#05132e] dark:to-[#030d22] border border-amber-400/40 dark:border-white/10 text-white shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
            >
              <div className="flex items-start justify-between gap-4">
                
                {/* Left Date Box */}
                <div className="shrink-0 w-20 sm:w-24 text-center p-3 rounded-2xl bg-black/50 dark:bg-black/60 border border-white/20 dark:border-white/15 shadow-md flex flex-col justify-center">
                  <span className="font-heading font-black text-lg sm:text-xl text-[var(--color-mj-gold)] block leading-tight">
                    {event.dayMonth}
                  </span>
                  <span className="font-mono text-xs text-amber-200 dark:text-gray-400 font-bold block mt-0.5">
                    {event.year}
                  </span>
                  <div className="mt-1 pt-1 border-t border-white/20 dark:border-white/10 text-[9px] font-mono text-rose-100 dark:text-gray-400 flex items-center justify-center gap-1">
                    <Clock className="w-2.5 h-2.5 text-[var(--color-mj-gold)]" />
                    {event.time}
                  </div>
                </div>

                {/* Right Event Content */}
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/40 border border-amber-300/40 text-[var(--color-mj-gold)] text-[10px] font-mono font-bold uppercase">
                      <EventIcon className="w-3 h-3" />
                      {event.productName}
                    </div>

                    {event.isNext && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--color-mj-gold)] text-black text-[9px] font-mono font-black uppercase animate-pulse shadow-md">
                        Prochain Tirage
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-extrabold text-sm sm:text-base leading-snug text-balance text-white min-h-[2.5rem] sm:min-h-[2.75rem] flex items-center">
                    {event.prize}
                  </h3>

                  <div className="flex items-center gap-4 text-xs font-mono text-rose-100 dark:text-gray-300 pt-1">
                    <span className="flex items-center gap-1 text-[var(--color-mj-gold)] font-bold">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {event.date}
                    </span>
                    <span className="text-amber-200 dark:text-gray-400">({event.countdown})</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons Row */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <button
                  onClick={() => toggleReminder(event.id, event.date)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                    isReminderSet
                      ? "bg-green-500/20 border-green-500/50 text-green-400"
                      : "bg-white/5 hover:bg-white/10 border-white/15 text-gray-300 hover:text-white"
                  }`}
                >
                  {isReminderSet ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="font-bold">Rappel activé</span>
                    </>
                  ) : (
                    <>
                      <Bell className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" />
                      <span>Rappeler</span>
                    </>
                  )}
                </button>

                <Link href="/tickets" onClick={() => playSound.click()}>
                  <button className="px-5 py-2 bg-gradient-to-r from-[var(--color-mj-gold)] to-yellow-400 hover:from-yellow-400 hover:to-[var(--color-mj-gold)] text-black font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95">
                    <span>RÉSERVER</span>
                    <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                  </button>
                </Link>
              </div>

            </motion.div>
          );
        })}
      </div>

    </section>
  );
}
