"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Star,
  ArrowLeft,
  Home,
  Briefcase,
  Users,
  Ticket,
  Clock,
  Trash2,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { toast } from "sonner";

interface Favorite {
  id: string;
  title: string;
  category: "Maison" | "Business" | "Famille";
  grandPrize: string;
  price: string;
  drawDate: string;
  timeLeft: string;
  icon: any;
  color: string;
}

const INITIAL_FAVORITES: Favorite[] = [
  {
    id: "fav-1",
    title: "Opportunité Maison",
    category: "Maison",
    grandPrize: "Villa F4 Haut Standing 120M FCFA",
    price: "5 000 FCFA",
    drawDate: "31 Décembre 2026",
    timeLeft: "147j : 08h : 12m",
    icon: Home,
    color: "text-[var(--color-mj-gold)] bg-[var(--color-mj-gold)]/10 border-[var(--color-mj-gold)]/30",
  },
  {
    id: "fav-2",
    title: "Opportunité Business",
    category: "Business",
    grandPrize: "2x Voyage Dubaï + Capital 15M FCFA",
    price: "2 500 FCFA",
    drawDate: "30 Septembre 2026",
    timeLeft: "55j : 14h : 45m",
    icon: Briefcase,
    color: "text-red-400 bg-red-500/10 border-red-500/30",
  },
];

export default function FavorisPage() {
  const [favorites, setFavorites] = useState<Favorite[]>(INITIAL_FAVORITES);

  const handleRemove = (id: string, title: string) => {
    setFavorites(favorites.filter((f) => f.id !== id));
    toast.info(`"${title}" retiré de vos favoris.`);
  };

  return (
    <div className="min-h-screen bg-[#010919] text-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <Link
            href="/compte"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-[var(--color-mj-gold)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Retour à Mon Compte
          </Link>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/30">
            ★ {favorites.length} Tirages Suivis
          </span>
        </div>

        {/* Title Hero Banner */}
        <div className="bg-gradient-to-r from-[#04112c] via-[#200a12] to-[#04112c] rounded-3xl p-6 sm:p-8 border border-red-500/30 shadow-2xl relative overflow-hidden mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-800 text-white flex items-center justify-center font-bold shadow-lg shrink-0">
              <Star className="w-8 h-8 fill-current text-[var(--color-mj-gold)]" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-wide text-white">
                Mes Favoris & Jeux Suivis
              </h1>
              <p className="text-xs sm:text-sm text-gray-300">
                Retrouvez vos opportunités préférées pour ne rater aucun tirage.
              </p>
            </div>
          </div>
        </div>

        {/* Favorites Grid */}
        {favorites.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {favorites.map((fav) => {
              const IconComp = fav.icon;
              return (
                <div
                  key={fav.id}
                  className="p-6 rounded-3xl bg-[#04112c] border border-white/10 hover:border-[var(--color-mj-gold)]/50 transition-all shadow-xl space-y-4 relative group"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl p-2.5 flex items-center justify-center font-bold border ${fav.color}`}>
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-heading font-extrabold text-base text-white">
                          {fav.title}
                        </h3>
                        <span className="text-[10px] font-mono text-gray-400">
                          Tirage prévu le {fav.drawDate}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(fav.id, fav.title)}
                      className="p-1.5 rounded-lg bg-white/5 hover:bg-red-500/20 text-gray-400 hover:text-red-400 transition-colors"
                      title="Retirer des favoris"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="bg-[#061430] p-4 rounded-2xl border border-white/5 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[var(--color-mj-gold)] block">
                      Grand Lot Phare
                    </span>
                    <p className="font-heading font-bold text-sm text-white">{fav.grandPrize}</p>
                    <span className="text-xs font-mono font-bold text-emerald-400 block pt-1">
                      Prix du ticket: {fav.price}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-gray-400 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-mj-gold)]" /> Temps restant
                    </span>
                    <span className="font-bold text-white">{fav.timeLeft}</span>
                  </div>

                  <Link href="/#jeux" className="block pt-2">
                    <button className="w-full py-3 bg-[var(--color-mj-red)] hover:bg-[#a00c17] text-white font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer">
                      <Ticket className="w-4 h-4" /> Acheter un Ticket ({fav.price})
                    </button>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#04112c] rounded-3xl border border-white/10 p-8 space-y-4">
            <Star className="w-12 h-12 text-gray-500 mx-auto" />
            <h3 className="font-heading font-bold text-lg text-white">Aucun favori enregistré</h3>
            <p className="text-xs text-gray-400 max-w-sm mx-auto">
              Vous n'avez pas encore ajouté d'opportunité à vos favoris. Découvrez nos jeux !
            </p>
            <Link href="/#jeux">
              <button className="py-3 px-6 bg-[var(--color-mj-gold)] text-black font-heading font-black text-xs uppercase tracking-wider rounded-xl shadow-md hover:bg-yellow-400 transition-all cursor-pointer">
                Découvrir nos Jeux
              </button>
            </Link>
          </div>
        )}

      </div>
    </div>
  );
}
