"use client";

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, Bell, HeadphonesIcon, User, X, Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/ThemeToggle"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { useEffect, useState } from "react"
import { LegalModal } from "@/components/ui/LegalModal"
import { NotificationDropdown } from "@/components/ui/NotificationDropdown"
import { AccountDropdown } from "@/components/ui/AccountDropdown"
import { fetchNotifications, type AppNotification } from "@/lib/mockData"

export function HeaderV2() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const pathname = usePathname();
  
  const [modalState, setModalState] = useState<{isOpen: boolean, title: string, content: React.ReactNode}>({
    isOpen: false,
    title: "",
    content: null
  });
  
  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 20);
    });
  }, [scrollY]);

  useEffect(() => {
    fetchNotifications().then(data => setNotifications(data));
  }, []);


  const handleMarkAsRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, isRead: true } : n));
  };

  const handleMarkAllAsRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })));
  };

  const unreadCount = notifications.filter(n => !n.isRead).length;

  const openContactModal = () => {
    setModalState({
      isOpen: true,
      title: "Contactez-nous",
      content: (
        <div className="space-y-4">
          <p>Notre équipe support est disponible du lundi au vendredi de 9h à 18h.</p>
          <p><strong>Email:</strong> support@megajackpot.app</p>
          <p><strong>Téléphone:</strong> +225 00 00 00 00</p>
        </div>
      )
    });
  };

  return (
    <>
      <header 
        className={`fixed top-0 z-50 w-full text-[var(--text-primary)] transition-all duration-300 ${
          isScrolled 
            ? "bg-white/70 dark:bg-[#021a3c]/70 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-[var(--color-mj-gold)]/20 dark:shadow-[0_4px_30px_rgba(251,181,5,0.05)]" 
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          {/* Left: Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="flex items-center gap-2 group">
            <Image 
              src="/MJ_logo_sans_slogan.png" 
              alt="MEGA JACKPOT" 
              width={130} 
              height={26} 
              className="h-6 sm:h-10 w-auto object-contain dark:hidden transition-transform group-hover:scale-105"
              priority
            />
            <Image 
              src="/MJ_logo_sans_slogan Blanc.png" 
              alt="MEGA JACKPOT" 
              width={130} 
              height={26} 
              className="h-6 sm:h-10 w-auto object-contain hidden dark:block transition-transform group-hover:scale-105"
              priority
            />
          </Link>
          </div>


          {/* Right: Actions */}
          <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
            {/* Glowing S'inscrire CTA */}
            <Link href="/inscription" className="flex">
              <button 
                className="flex items-center gap-1.5 px-3 sm:px-5 py-1.5 rounded-full bg-[var(--color-mj-gold)] text-black font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.1em] transition-all hover:scale-105 shadow-[0_4px_14px_rgba(251,181,5,0.4)] dark:shadow-[0_0_20px_rgba(251,181,5,0.4)]"
              >
                S'inscrire
              </button>
            </Link>

            {/* Glowing JOUER CTA */}
            <button 
              onClick={() => { const el = document.getElementById('jeux'); if(el) el.scrollIntoView({behavior: 'smooth'}); else window.location.href = '/#jeux'; }}
              className="flex items-center gap-1.5 px-3 sm:px-5 py-1.5 rounded-full bg-[var(--color-mj-red)] text-white font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.1em] transition-all hover:scale-105 shadow-[0_4px_14px_rgba(218,21,31,0.4)] dark:shadow-[0_0_20px_rgba(218,21,31,0.6)]"
            >
              JOUER
            </button>

            {/* Icons Group */}
            <div className="flex items-center gap-0">
              {/* Theme Toggle */}
              <ThemeToggle />
              
              {/* Notification Bell */}
              <div className="relative">
                <button 
                  onClick={() => setIsNotifOpen(!isNotifOpen)} 
                  className={`relative p-2 transition-colors rounded-full ${isNotifOpen ? 'bg-black/5 dark:bg-white/10 text-[var(--color-mj-gold)]' : 'text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)]'}`} 
                  aria-label="Notifications"
                >
                  <Bell className="h-5 w-5" />
                  {unreadCount > 0 && (
                    <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-mj-red)] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-mj-red)]"></span>
                    </span>
                  )}
                </button>

                <NotificationDropdown 
                  isOpen={isNotifOpen}
                  onClose={() => setIsNotifOpen(false)}
                  notifications={notifications}
                  onMarkAsRead={handleMarkAsRead}
                  onMarkAllAsRead={handleMarkAllAsRead}
                />
              </div>
            </div>

            <div className="relative flex">
              <button 
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className={`h-8 w-8 rounded-full border flex items-center justify-center transition-all ${isAccountOpen ? 'border-[var(--color-mj-gold)] text-[var(--color-mj-gold)] bg-[var(--color-mj-gold)]/10' : 'border-[var(--border-subtle)] hover:border-[var(--color-mj-gold)] hover:text-[var(--color-mj-gold)]'}`} 
                aria-label="Profil"
              >
                <User className="h-4 w-4" />
              </button>
              
              <AccountDropdown 
                isOpen={isAccountOpen} 
                onClose={() => setIsAccountOpen(false)} 
              />
            </div>
          </div>
        </div>
      </header>



      <LegalModal 
        isOpen={modalState.isOpen}
        onClose={() => setModalState(prev => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        content={modalState.content}
      />
    </>
  )
}
