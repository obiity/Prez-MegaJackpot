"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  Home,
  Briefcase,
  Users,
  ShieldCheck,
  ArrowRight,
  Bell,
  Check,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import Link from "next/link";
import { playSound } from "@/lib/audioSFX";
import { useLanguage } from "@/i18n/LanguageContext";

type FilterType = "tous" | "maison" | "business" | "famille";
type EventId = "draw-1" | "draw-2" | "draw-3" | "draw-4";

interface DrawEventMeta {
  id: EventId;
  productType: "maison" | "business" | "famille";
  year: string;
  time: string;
  isNext: boolean;
  icon: LucideIcon;
}

const DRAW_EVENTS_META: DrawEventMeta[] = [
  {
    id: "draw-1",
    productType: "business",
    year: "2026",
    time: "20:00 GMT",
    isNext: true,
    icon: Briefcase,
  },
  {
    id: "draw-2",
    productType: "maison",
    year: "2026",
    time: "20:00 GMT",
    isNext: false,
    icon: Home,
  },
  {
    id: "draw-3",
    productType: "famille",
    year: "2026",
    time: "20:00 GMT",
    isNext: false,
    icon: Users,
  },
  {
    id: "draw-4",
    productType: "maison",
    year: "2026",
    time: "20:00 GMT",
    isNext: false,
    icon: Home,
  },
];

export function DrawCalendarSection() {
  const { t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<FilterType>("tous");
  const [remindersSet, setRemindersSet] = useState<Record<string, boolean>>({});

  const filteredEvents = DRAW_EVENTS_META.filter(
    (item) => activeFilter === "tous" || item.productType === activeFilter
  );

  const toggleReminder = (id: string, dateStr: string) => {
    playSound.click();
    setRemindersSet((prev) => {
      const isAlreadySet = !!prev[id];
      if (!isAlreadySet) {
        toast.success(`${t.calendar.toastReminderOnPrefix}${dateStr}!`);
      } else {
        toast.info(t.calendar.toastReminderOff);
      }
      return { ...prev, [id]: !isAlreadySet };
    });
  };

  return (
    <section className="relative py-10 px-4 max-w-6xl mx-auto z-10 transition-colors duration-300">
      
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-black/60 border border-[#fbb505]/40 text-[var(--color-mj-gold)] text-[10px] sm:text-xs font-mono font-bold uppercase tracking-widest mb-3 shadow-[0_0_15px_rgba(251,181,5,0.2)]">
          <ShieldCheck className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" /> {t.calendar.badge}
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-heading font-black text-[#021a3c] dark:text-white uppercase tracking-tight">
          {t.calendar.headingPart1}{" "}
          <span className="text-[var(--color-mj-gold)]">{t.calendar.headingHighlight}</span>
        </h2>
        <p className="text-slate-600 dark:text-gray-300 max-w-xl mx-auto mt-2 text-xs sm:text-sm md:text-base font-medium leading-relaxed">
          {t.calendar.subtitle}
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-8">
        {[
          { id: "tous", label: t.calendar.tabs.tous },
          { id: "maison", label: t.calendar.tabs.maison },
          { id: "business", label: t.calendar.tabs.business },
          { id: "famille", label: t.calendar.tabs.famille },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => {
              setActiveFilter(tab.id as FilterType);
              playSound.click();
            }}
            className={`px-4 py-2 rounded-full font-heading text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeFilter === tab.id
                ? "bg-[var(--color-mj-gold)] text-[#021a3c] shadow-[0_0_15px_rgba(251,181,5,0.4)] scale-105"
                : "bg-slate-100 dark:bg-black/40 hover:bg-slate-200 dark:hover:bg-black/70 text-slate-700 dark:text-gray-300 border border-slate-300 dark:border-white/10"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid of Calendar Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredEvents.map((meta) => {
          const eventCopy = t.calendar.events[meta.id];
          const EventIcon = meta.icon;
          const isReminderSet = !!remindersSet[meta.id];

          return (
            <motion.div
              key={meta.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="relative rounded-3xl p-4 sm:p-6 bg-gradient-to-br from-[#da151f] to-[#a00c17] dark:from-[#102a58] dark:to-[#021a3c] border border-[#fbb505]/40 dark:border-white/10 text-white shadow-xl hover:shadow-2xl transition-all group overflow-hidden"
            >
              <div className="flex items-center justify-between gap-3 sm:gap-4">
                
                {/* Left Date Box */}
                <div className="shrink-0 w-[76px] sm:w-24 text-center p-2.5 sm:p-3 rounded-2xl bg-black/50 dark:bg-black/60 border border-white/20 dark:border-white/15 shadow-md flex flex-col justify-center">
                  <span className="font-heading font-black text-base sm:text-xl text-[var(--color-mj-gold)] block leading-tight">
                    {eventCopy.dayMonth}
                  </span>
                  <span className="font-mono text-[11px] sm:text-xs text-amber-200 dark:text-gray-400 font-bold block mt-0.5">
                    {meta.year}
                  </span>
                  <div className="mt-1 pt-1 border-t border-white/20 dark:border-white/10 text-[9px] font-mono text-red-100 dark:text-gray-400 flex items-center justify-center gap-1">
                    <Clock className="w-2.5 h-2.5 text-[var(--color-mj-gold)]" />
                    {meta.time}
                  </div>
                </div>

                {/* Right Event Content */}
                <div className="flex-1 min-w-0 flex flex-col justify-center space-y-1 text-left">
                  <div className="flex items-center justify-between gap-1.5 flex-wrap sm:flex-nowrap">
                    <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-black/40 border border-[#fbb505]/40 text-[var(--color-mj-gold)] text-[10px] font-mono font-bold uppercase">
                      <EventIcon className="w-3 h-3 shrink-0" />
                      <span>{eventCopy.productName}</span>
                    </div>

                    {meta.isNext && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--color-mj-gold)] text-[#021a3c] text-[9px] font-mono font-black uppercase animate-pulse shadow-md">
                        {t.calendar.nextDrawBadge}
                      </span>
                    )}
                  </div>

                  <h3 className="font-heading font-black text-xs xs:text-sm sm:text-base leading-snug text-white tracking-wide my-0.5 drop-shadow-sm">
                    {eventCopy.prize}
                  </h3>

                  <div className="flex items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-mono text-red-100 dark:text-gray-300 pt-0.5 flex-wrap">
                    <span className="flex items-center gap-1 text-[var(--color-mj-gold)] font-bold">
                      <CalendarIcon className="w-3.5 h-3.5" />
                      {eventCopy.date}
                    </span>
                    <span className="text-amber-200 dark:text-gray-400">({eventCopy.countdown})</span>
                  </div>
                </div>

              </div>

              {/* Action Buttons Row */}
              <div className="mt-4 pt-3.5 border-t border-white/10 flex items-center justify-between gap-2.5 sm:gap-3">
                <button
                  onClick={() => toggleReminder(meta.id, eventCopy.date)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                    isReminderSet
                      ? "bg-green-500/20 border-green-500/50 text-green-400"
                      : "bg-white/5 hover:bg-white/10 border-white/15 text-gray-300 hover:text-white"
                  }`}
                >
                  {isReminderSet ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-400" />
                      <span className="font-bold">{t.calendar.reminderSet}</span>
                    </>
                  ) : (
                    <>
                      <Bell className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" />
                      <span>{t.calendar.remindMe}</span>
                    </>
                  )}
                </button>

                <Link href="/tickets" onClick={() => playSound.click()}>
                  <button className="px-5 py-2 bg-[var(--color-mj-gold)] hover:brightness-110 text-[#021a3c] font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center gap-1.5 cursor-pointer active:scale-95">
                    <span>{t.calendar.reserveCta}</span>
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
