"use client";

import React, { useEffect, useRef, useState } from "react";
import { Globe, Check } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";
import { getDictionary } from "@/i18n/LanguageContext";
import { LOCALE_LABELS, SUPPORTED_LOCALES, type Locale } from "@/i18n/config";

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleSelectLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      setIsOpen(false);
      return;
    }
    setLocale(nextLocale);
    setIsOpen(false);
    toast.info(getDictionary(nextLocale).languageSwitcher.toastSwitched);
  };

  return (
    <div ref={containerRef} className="relative flex items-center">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label={t.languageSwitcher.switchAria}
        aria-expanded={isOpen}
        title={t.languageSwitcher.switchAria}
        className={`min-h-[38px] sm:min-h-[44px] px-1.5 sm:px-2.5 py-1 rounded-full flex items-center gap-1 transition-all duration-200 cursor-pointer border ${
          isOpen
            ? "bg-[#102a58]/15 dark:bg-[#102a58]/70 border-[var(--color-mj-gold)] text-[var(--color-mj-gold)]"
            : "bg-transparent hover:bg-[#102a58]/10 dark:hover:bg-white/10 border-transparent hover:border-[var(--color-mj-gold)]/40 text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)]"
        }`}
      >
        <Globe className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2] shrink-0" />
        <span className="font-mono font-bold text-[10px] sm:text-xs uppercase tracking-wider text-[#021a3c] dark:text-[var(--color-mj-gold)]">
          {LOCALE_LABELS[locale].code}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="absolute right-0 top-full mt-2 w-44 rounded-2xl bg-white dark:bg-[#021a3c] border border-gray-200 dark:border-[#fbb505]/40 shadow-2xl p-1.5 z-[110] overflow-hidden"
          >
            <div className="px-3 py-1.5 text-[10px] font-mono uppercase tracking-widest text-[#363636] dark:text-gray-300 border-b border-gray-100 dark:border-white/10 mb-1">
              {t.languageSwitcher.label}
            </div>
            <div className="space-y-1">
              {SUPPORTED_LOCALES.map((loc) => {
                const isSelected = loc === locale;
                const info = LOCALE_LABELS[loc];
                return (
                  <button
                    key={loc}
                    type="button"
                    onClick={() => handleSelectLocale(loc)}
                    className={`w-full min-h-[44px] px-3 py-2 rounded-xl flex items-center justify-between text-xs font-heading font-semibold transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? "bg-[#102a58] text-white border border-[#fbb505]/60 shadow-sm"
                        : "text-[#021a3c] dark:text-white hover:bg-gray-100 dark:hover:bg-[#102a58]/60"
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span
                        className={`inline-flex items-center justify-center w-6 h-6 rounded-md font-mono font-bold text-[10px] ${
                          isSelected
                            ? "bg-[var(--color-mj-gold)] text-[#021a3c]"
                            : "bg-gray-100 dark:bg-white/10 text-[#021a3c] dark:text-[var(--color-mj-gold)]"
                        }`}
                      >
                        {info.code}
                      </span>
                      <span>{info.nativeName}</span>
                    </div>
                    {isSelected && (
                      <Check className="w-4 h-4 text-[var(--color-mj-gold)] stroke-[2.5]" />
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

