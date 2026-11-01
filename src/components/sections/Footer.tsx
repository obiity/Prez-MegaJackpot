"use client";

import Image from "next/image"
import Link from "next/link"
import { ShieldCheck } from "lucide-react"
import { useState } from "react"
import { LegalModal } from "@/components/ui/LegalModal"
import { useLanguage } from "@/i18n/LanguageContext"

export function Footer() {
  const { t } = useLanguage();
  const [modalState, setModalState] = useState<{isOpen: boolean, title: string, content: React.ReactNode}>({
    isOpen: false,
    title: "",
    content: null
  });

  const openModal = (title: string, content: React.ReactNode) => {
    setModalState({ isOpen: true, title, content });
  };

  const closeModal = () => {
    setModalState(prev => ({ ...prev, isOpen: false }));
  };

  return (
    <footer className="bg-gray-100 dark:bg-[#021a3c] text-gray-600 dark:text-[#94a3b8] py-16 border-t border-gray-200 dark:border-white/5 transition-colors duration-300 pb-32 md:pb-36">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-1">
            <Image 
              src="/MJ_logo_sans_slogan.png" 
              alt="MEGA JACKPOT" 
              width={220} 
              height={50} 
              className="h-10 w-auto object-contain mb-6 opacity-90 dark:hidden"
            />
            <Image 
              src="/MJ_logo_sans_slogan Blanc.png" 
              alt="MEGA JACKPOT" 
              width={220} 
              height={50} 
              className="h-10 w-auto object-contain mb-6 opacity-90 hidden dark:block"
            />
            <p className="text-label leading-relaxed opacity-80 transition-colors">
              {t.footer.tagline}
            </p>
          </div>
          
          <div>
            <h4 className="text-[var(--text-primary)] dark:text-white mb-6 text-label transition-colors">{t.footer.quickLinksTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li><button onClick={() => { const el = document.getElementById('top'); if(el) el.scrollIntoView({behavior: 'smooth'}); else window.location.href = '/'; }} className="hover:text-[var(--color-mj-gold)] transition-colors">{t.footer.home}</button></li>
              <li><button onClick={() => { const el = document.getElementById('jeux'); if(el) el.scrollIntoView({behavior: 'smooth'}); else window.location.href = '/#jeux'; }} className="hover:text-[var(--color-mj-gold)] transition-colors">{t.footer.opportunities}</button></li>
              <li><button onClick={() => { const el = document.getElementById('comment-jouer'); if(el) el.scrollIntoView({behavior: 'smooth'}); else window.location.href = '/#comment-jouer'; }} className="hover:text-[var(--color-mj-gold)] transition-colors">{t.footer.howToPlay}</button></li>
              <li><button onClick={() => { const el = document.getElementById('gagnants'); if(el) el.scrollIntoView({behavior: 'smooth'}); else window.location.href = '/#gagnants'; }} className="hover:text-[var(--color-mj-gold)] transition-colors">{t.footer.testimonials}</button></li>
              <li><Link href="/support" className="text-[var(--color-mj-gold)] hover:underline font-bold transition-colors">{t.footer.support247}</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-[var(--text-primary)] dark:text-white mb-6 text-label transition-colors">{t.footer.legalTitle}</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <button onClick={() => openModal(t.footer.legalNotice, <p>{t.footer.legalNoticeContent}</p>)} className="hover:text-[var(--color-mj-gold)] transition-colors">
                  {t.footer.legalNotice}
                </button>
              </li>
              <li>
                <button onClick={() => openModal(t.footer.terms, <p>{t.footer.termsContent}</p>)} className="hover:text-[var(--color-mj-gold)] transition-colors">
                  {t.footer.terms}
                </button>
              </li>
              <li>
                <button onClick={() => openModal(t.footer.privacy, <p>{t.footer.privacyContent}</p>)} className="hover:text-[var(--color-mj-gold)] transition-colors">
                  {t.footer.privacy}
                </button>
              </li>
              <li>
                <button onClick={() => openModal(t.footer.rules, <p>{t.footer.rulesContent}</p>)} className="hover:text-[var(--color-mj-gold)] transition-colors flex items-center gap-2">
                  {t.footer.rules} <ShieldCheck className="w-3 h-3 text-[var(--color-mj-gold)]" />
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[var(--text-primary)] dark:text-white mb-6 text-label transition-colors">{t.footer.contactTitle}</h4>
            <ul className="space-y-3 text-sm font-mono opacity-90 transition-colors">
              <li>support@megajackpot.com</li>
              <li>+221 33 000 00 00</li>
              <li>{t.footer.location}</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-white/10 pt-8 text-xs text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4 transition-colors">
          <div className="flex items-center gap-3">
            <span className="text-[var(--color-mj-red)] font-bold border border-[#da151f]/50 px-2 py-1 rounded text-[10px] bg-[var(--color-mj-red)]/10">18+</span>
            <p className="opacity-70 transition-colors">
              {t.footer.responsibleGaming}
            </p>
          </div>
          <p className="opacity-60 text-label transition-colors">
            © {new Date().getFullYear()} {t.footer.copyrightSuffix}
          </p>
        </div>
      </div>

      <LegalModal 
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        content={modalState.content}
      />
    </footer>
  )
}
