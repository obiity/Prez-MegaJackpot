"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  ArrowLeft,
  Home,
  Briefcase,
  Ticket,
  Clock,
  Trash2,
  type LucideIcon,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

type FavId = "fav-1" | "fav-2";

interface FavoriteMeta {
  id: FavId;
  price: string;
  icon: LucideIcon;
  color: string;
}

const INITIAL_FAVORITES: FavoriteMeta[] = [
  {
    id: "fav-1",
    price: "5 000 FCFA",
    icon: Home,
    color: "text-[var(--color-mj-gold)] bg-[var(--color-mj-gold)]/10 border-[var(--color-mj-gold)]/30",
  },
  {
    id: "fav-2",
    price: "2 500 FCFA",
    icon: Briefcase,
    color: "text-[var(--color-mj-red)] bg-[#da151f]/10 border-[#da151f]/30",
  },
];

export default function FavorisPage() {
  const { t } = useLanguage();
  const [favorites, setFavorites] = useState<FavoriteMeta[]>(INITIAL_FAVORITES);

  const handleRemove = (id: FavId, title: string) => {
    setFavorites(favorites.filter((f) => f.id !== id));
    toast.info(`"${title}" ${t.favorisPage.toastRemovedSuffix}`);
  };

  return (
    <div className="min-h-screen bg-[#021a3c] text-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
          <Link
            href="/compte"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-[var(--color-mj-gold)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t.favorisPage.backToAccount}
          </Link>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-[#da151f]/15 text-white border border-[#da151f]/40">
            ★ {favorites.length} {t.favorisPage.followedDrawsSuffix}
          </span>
        </div>

        {/* Title Hero Banner */}
        <div className="bg-gradient-to-r from-[#021a3c] via-[#102a58] to-[#021a3c] rounded-3xl p-6 sm:p-8 border border-[#da151f]/30 shadow-2xl relative overflow-hidden mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#da151f] to-[#a00c17] text-white flex items-center justify-center font-bold shadow-lg shrink-0">
              <Star className="w-8 h-8 fill-current text-[var(--color-mj-gold)]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-wide text-white">
                {t.favorisPage.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-300">
                {t.favorisPage.subtitle}
              </p>
            </div>
          </div>
        </div>

        {/* Favorites Grid */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favorites.map((fav) => {
              const IconComp = fav.icon;
              const copy = t.favorisPage.items[fav.id];
              return (
                <div
                  key={fav.id}
                  className="p-6 rounded-3xl bg-[#102a58]/50 border border-white/10 hover:border-[var(--color-mj-gold)]/50 transition-all shadow-xl space-y-4 relative group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl p-2.5 flex items-center justify-center font-bold border ${fav.color}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-base text-white">
                          {copy.title}
                        </h3>
                        <span className="text-[10px] font-mono text-gray-400">
                          {t.favorisPage.drawScheduledPrefix} {copy.drawDate}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(fav.id, copy.title)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-[#da151f]/20 text-gray-400 hover:text-white transition-colors"
                      title={t.favorisPage.removeTitle}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="bg-black/25 p-4 rounded-2xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[var(--color-mj-gold)] block">
                      {t.favorisPage.grandPrizeLabel}
                    </span>
                    <p className="font-heading font-bold text-sm text-white">{copy.grandPrize}</p>
                    <span className="text-xs font-mono font-bold text-emerald-400 block pt-1">
                      {t.favorisPage.ticketPricePrefix} {fav.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" /> {t.favorisPage.timeLeftLabel}
                    </span>
                    <span className="font-bold text-white">{copy.timeLeft}</span>
                  </div>

                  <Link href="/#jeux" className="block pt-2">
                    <button className="w-full py-3 bg-[var(--color-mj-red)] hover:bg-[#a00c17] text-white font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
                      <Ticket className="w-4 h-4" /> {t.favorisPage.buyTicketPrefix} ({fav.price})
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#102a58]/50 rounded-3xl border border-white/10 p-8 space-y-4">
            <Star className="w-12 h-12 text-gray-500 mx-auto" />
            <h3 className="font-heading font-bold text-lg text-white">{t.favorisPage.emptyTitle}</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              {t.favorisPage.emptyMessage}
            </p>
            <Link href="/#jeux">
              <button className="py-3 px-6 bg-[var(--color-mj-gold)] text-[#021a3c] font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-md hover:brightness-110 transition-all cursor-pointer">
                {t.favorisPage.emptyCta}
              </button>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
