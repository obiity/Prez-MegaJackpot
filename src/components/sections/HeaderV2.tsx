"use client";

import Image from "next/image";
import Link from "next/link";
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
import { LanguageSwitcher } from "@/components/ui/LanguageSwitcher";
import { useScroll } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { LegalModal } from "@/components/ui/LegalModal";
import { NotificationDropdown } from "@/components/ui/NotificationDropdown";
import { AccountDropdown } from "@/components/ui/AccountDropdown";
import { fetchNotifications, type AppNotification } from "@/lib/mockData";
import { useLanguage } from "@/i18n/LanguageContext";

export function HeaderV2() {
  const { locale, t } = useLanguage();
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [readIds, setReadIds] = useState<Set<string>>(new Set());
  const searchRef = useRef<HTMLDivElement>(null);

  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    title: string;
    content: React.ReactNode;
  }>({
    isOpen: false,
    title: "",
    content: null,
  });

  const searchItems = [
    {
      title: t.header.searchItems.maison.title,
      category: t.header.searchItems.maison.category,
      href: "/#jeux",
      icon: Home,
      color: "text-[var(--color-mj-gold)]",
    },
    {
      title: t.header.searchItems.business.title,
      category: t.header.searchItems.business.category,
      href: "/#jeux",
      icon: Briefcase,
      color: "text-[var(--color-mj-red)]",
    },
    {
      title: t.header.searchItems.famille.title,
      category: t.header.searchItems.famille.category,
      href: "/#jeux",
      icon: Users,
      color: "text-blue-400",
    },
    {
      title: t.header.searchItems.resultats.title,
      category: t.header.searchItems.resultats.category,
      href: "/resultats",
      icon: Trophy,
      color: "text-[var(--color-mj-gold)]",
    },
    {
      title: t.header.searchItems.tickets.title,
      category: t.header.searchItems.tickets.category,
      href: "/tickets",
      icon: Ticket,
      color: "text-purple-400",
    },
    {
      title: t.header.searchItems.support.title,
      category: t.header.searchItems.support.category,
      href: "/support",
      icon: HelpCircle,
      color: "text-emerald-400",
    },
  ];

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
    fetchNotifications(locale).then((data) => {
      setNotifications(
        data.map((n) => (readIds.has(n.id) ? { ...n, isRead: true } : n))
      );
    });
  }, [locale, readIds]);

  const handleMarkAsRead = (id: string) => {
    setReadIds((prev) => new Set(prev).add(id));
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, isRead: true } : n))
    );
  };

  const handleMarkAllAsRead = () => {
    setReadIds((prev) => {
      const next = new Set(prev);
      notifications.forEach((n) => next.add(n.id));
      return next;
    });
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })));
  };

  const unreadCount = notifications.filter((n) => !n.isRead).length;

  const filteredSearchItems = searchItems.filter(
    (item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <header
        className={`fixed top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-gradient-to-r from-white via-slate-50 to-white dark:from-[#021a3c]/95 dark:via-[#021a3c]/95 dark:to-[#021a3c]/95 backdrop-blur-md shadow-md border-b border-slate-200 dark:border-white/10 text-[#021a3c] dark:text-white"
            : "bg-gradient-to-r from-white/95 via-slate-50/95 to-white/95 dark:from-transparent dark:via-transparent dark:to-transparent text-[#021a3c] dark:text-white border-b border-slate-200/60 dark:border-transparent backdrop-blur-md dark:backdrop-blur-none"
        }`}
      >
        <div className="container mx-auto px-3 sm:px-4 py-3 flex items-center justify-between gap-2">
          {/* Left: Logo & Slogan */}
          <div className="flex items-center gap-2 sm:gap-3 min-w-0 shrink">
            <Link href="/" className="flex items-center gap-2 group shrink-0">
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

            {/* Slogan officiel en 2 LIGNES */}
            <div className="hidden min-[375px]:flex flex-col justify-center border-l-2 border-[var(--color-mj-red)]/40 dark:border-[var(--color-mj-gold)]/50 pl-2 sm:pl-3.5 py-0.5 leading-none min-w-0">
              <span className="text-[8px] sm:text-xs font-heading font-black tracking-wider uppercase text-[var(--color-mj-red)] dark:text-[var(--color-mj-gold)] drop-shadow-xs truncate">
                {t.header.sloganLine1}
              </span>
              <span className="text-[7px] sm:text-[10px] font-heading font-extrabold tracking-tight uppercase text-slate-800 dark:text-gray-200 mt-0.5 truncate">
                {t.header.sloganLine2}
              </span>
            </div>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-0.5 sm:gap-1.5 shrink-0">
            {/* Inline Header Search Bar */}
            <div ref={searchRef} className="relative flex items-center">
              {isSearchOpen ? (
                <div className="relative flex items-center animate-in fade-in zoom-in-95 duration-200">
                  <Search className="w-3.5 h-3.5 absolute left-3 text-[var(--color-mj-gold)] z-10" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder={t.header.searchPlaceholder}
                    className="w-28 xs:w-40 sm:w-60 pl-8 pr-7 py-1 rounded-full bg-black/10 dark:bg-black/70 border border-[#fbb505]/50 text-xs sm:text-sm text-[var(--text-primary)] dark:text-white placeholder-gray-400 focus:outline-none shadow-md"
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
                  <div className="absolute top-full right-0 mt-2 w-72 sm:w-80 bg-[#021a3c] border border-[#fbb505]/40 rounded-2xl shadow-2xl p-3 text-white space-y-1.5 z-50 animate-in fade-in slide-in-from-top-2">
                    <div className="px-2 py-1 text-[10px] font-mono text-gray-400 uppercase tracking-widest border-b border-white/10 mb-1">
                      {t.header.searchResultsTitle}
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
                        {t.header.noSearchResults} &quot;{searchQuery}&quot;
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-1.5 sm:p-2 text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)] transition-colors cursor-pointer"
                  aria-label={t.header.searchAria}
                  title={t.header.searchTitle}
                >
                  <Search className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2]" />
                </button>
              )}
            </div>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setIsNotifOpen(!isNotifOpen)}
                className={`relative p-1.5 sm:p-2 transition-colors cursor-pointer ${
                  isNotifOpen
                    ? "text-[var(--color-mj-gold)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)]"
                }`}
                aria-label={t.header.notificationsAria}
              >
                <Bell className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2]" />
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

            {/* Language Switcher (FR / EN) */}
            <LanguageSwitcher />

            {/* Theme Toggle (Mode Jour / Mode Nuit) */}
            <ThemeToggle />

            {/* Profile Dropdown */}
            <div className="relative flex">
              <button
                onClick={() => setIsAccountOpen(!isAccountOpen)}
                className={`p-1.5 sm:p-2 flex items-center justify-center transition-all cursor-pointer ${
                  isAccountOpen
                    ? "text-[var(--color-mj-gold)]"
                    : "text-[var(--text-secondary)] hover:text-[var(--color-mj-gold)]"
                }`}
                aria-label={t.header.profileAria}
              >
                <User className="w-4.5 h-4.5 sm:w-5 sm:h-5 stroke-[2.2]" />
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
        onClose={() => setModalState((prev) => ({ ...prev, isOpen: false }))}
        title={modalState.title}
        content={modalState.content}
      />
    </>
  );
}
