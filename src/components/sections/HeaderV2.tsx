"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Search,
  Bell,
  User,
  X,
  ChevronRight,
  Home,
  Briefcase,
  Users,
  Trophy,
  Ticket,
  HelpCircle,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { LegalModal } from "@/components/ui/LegalModal";
import { NotificationDropdown } from "@/components/ui/NotificationDropdown";
import { AccountDropdown } from "@/components/ui/AccountDropdown";
import { fetchNotifications, type AppNotification } from "@/lib/mockData";

const SEARCH_ITEMS = [
  { title: "Opportunité Maison", category: "Jeu", href: "/#jeux", icon: Home, color: "text-[var(--color-mj-gold)]" },
  { title: "Opportunité Business", category: "Jeu", href: "/#jeux", icon: Briefcase, color: "text-red-400" },
  { title: "Opportunité Famille", category: "Jeu", href: "/#jeux", icon: Users, color: "text-blue-400" },
  { title: "Résultats des tirages", category: "Résultats", href: "/resultats", icon: Trophy, color: "text-amber-400" },
  { title: "Mes Tickets", category: "Compte", href: "/tickets", icon: Ticket, color: "text-purple-400" },
  { title: "Aide & Support 24/7", category: "Support", href: "/support", icon: HelpCircle, color: "text-green-400" },
];

export function HeaderV2() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  
  const [modalState, setModalState] = useState<{isOpen: boolean, title: string, content: React.ReactNode}>({
    isOpen: false,
    title: "",
    content: null
  });

  // Close search when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  
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

  const filteredSearchItems = SEARCH_ITEMS.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header 
        className={`fixed top-0 z-50 w-full text-white transition-all duration-300 ${
          isScrolled 
            ? "bg-[#021a3c]/95 backdrop-blur-md shadow-lg border-b border-[#fbb505]/20 shadow-[0_4px_30px_rgba(251,181,5,0.05)]" 
            : "bg-gradient-to-b from-[#021a3c]/90 via-[#021a3c]/50 to-transparent sm:bg-transparent border-b border-white/5 sm:border-transparent"
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
                className="flex items-center gap-1.5 px-3 sm:px-5 py-1.5 rounded-full bg-[var(--color-mj-gold)] text-black font-heading font-bold text-xs sm:text-sm uppercase tracking-[0.1em] transition-all hover:scale-105 shadow-[0_4px_14px_rgba(251,181,5,0.4)] dark:shadow-[0_0_20px_rgba(251,181,5,0.4)] cursor-pointer"
              >
                S'inscrire
              </button>
            </Link>

            {/* Inline Header Search Bar Aligned in Location */}
            <div ref={searchRef} className="relative flex items-center">
              {isSearchOpen ? (
                <div className="relative flex items-center animate-in fade-in zoom-in-95 duration-200">
                  <Search className="w-3.5 h-3.5 absolute left-3 text-[var(--color-mj-gold)] z-10" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Rechercher..."
                    className="w-36 xs:w-48 sm:w-60 pl-8 pr-7 py-1.5 rounded-full bg-black/10 dark:bg-black/70 border border-[#fbb505]/50 text-xs sm:text-sm text-[var(--text-primary)] dark:text-white placeholder-gray-400 focus:outline-none shadow-md"
                    autoFocus
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      setSearchQuery("");
                    }}
                    className="absolute right-2.5 p-0.5 text-gray-400 hover:text-white rounded-full cursor-pointer z-10"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>

                  {/* Inline Header Dropdown aligned right under search bar */}
                  <div className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-[#030d22] border border-[#fbb505]/40 rounded-2xl shadow-2xl p-3 text-white space-y-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-2 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-widest border-b border-white/10 mb-1">
                      Résultats de recherche
                    </div>
                    {filteredSearchItems.length > 0 ? (
                      filteredSearchItems.map((item, idx) => {
                        const ItemIcon = item.icon;
                        return (
                          <Link
                            key={idx}
                            href={item.href}
                            onClick={() => {
                              setIsSearchOpen(false);
                              setSearchQuery("");
                            }}
                            className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs transition-all group"
                          >
                            <div className="flex items-center gap-2.5">
                              <ItemIcon className={`w-4 h-4 ${item.color}`} />
                              <span className="font-medium text-white group-hover:text-[var(--color-mj-gold)] transition-colors">
                                {item.title}
                              </span>
                            </div>
                            <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:translate-x-0.5 transition-transform" />
                          </Link>
                        );
                      })
                    ) : (
                      <div className="text-center py-4 text-xs font-mono text-gray-400">
                        Aucun résultat pour &quot;{searchQuery}&quot;
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)] transition-colors rounded-full cursor-pointer"
                  aria-label="Recherche"
                  title="Rechercher dans la plateforme"
                >
                  <Search className="h-5 w-5" />
                </button>
              )}
            </div>
            
            {/* Notification Bell */}
            <div className="relative">
              <button 
                onClick={() => setIsNotifOpen(!isNotifOpen)} 
                className={`relative p-2 transition-colors rounded-full cursor-pointer ${isNotifOpen ? 'bg-black/5 dark:bg-white/10 text-[var(--color-mj-gold)]' : 'text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)]'}`} 
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

            {/* Profile Dropdown */}
            <div className="relative flex">
              <button 
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className={`h-8 w-8 rounded-full border flex items-center justify-center transition-all cursor-pointer ${isAccountOpen ? 'border-[#fbb505] text-[var(--color-mj-gold)] bg-[#fbb505]/10' : 'border-white/20 hover:border-[#fbb505] hover:text-[var(--color-mj-gold)]'}`} 
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
  );
}
