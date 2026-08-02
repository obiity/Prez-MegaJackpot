"use client";

import { Users, Banknote, Trophy, Home, Briefcase, Heart } from "lucide-react"
import { AnimatedNumber } from "@/components/ui/AnimatedNumber"

export function TrustStats() {
  const stats = [
    { icon: <Users className="w-6 h-6" />, value: 150000, suffix: "+", format: (v: number) => Math.floor(v).toLocaleString('fr-FR'), label: "Joueurs inscrits" },
    { icon: <Banknote className="w-6 h-6" />, value: 2, suffix: " Milliards", format: (v: number) => Math.floor(v).toString(), label: "FCFA distribués" },
    { icon: <Trophy className="w-6 h-6" />, value: 12400, suffix: "+", format: (v: number) => Math.floor(v).toLocaleString('fr-FR'), label: "Gagnants" },
    { icon: <Home className="w-6 h-6" />, value: 8, suffix: "", format: (v: number) => Math.floor(v).toString(), label: "Maisons" },
    { icon: <Briefcase className="w-6 h-6" />, value: 45, suffix: "", format: (v: number) => Math.floor(v).toString(), label: "Entreprises" },
    { icon: <Heart className="w-6 h-6" />, value: 120, suffix: "", format: (v: number) => Math.floor(v).toString(), label: "Familles" },
  ]

  return (
    <section className="py-12 bg-white dark:bg-[#010d1e] text-[var(--text-primary)] dark:text-white relative overflow-hidden border-t border-gray-100 dark:border-white/10 transition-colors duration-300">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-50 via-white to-white dark:from-[var(--color-mj-blue-dark)] dark:via-[#010d1e] dark:to-[#010d1e] opacity-50 transition-colors" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-h3 md:text-h2 text-[var(--text-primary)] dark:text-white mb-2 uppercase drop-shadow-md transition-colors">NOTRE ENGAGEMENT : TRANSPARENCE</h2>
          <p className="text-label text-[var(--color-mj-gold)] opacity-90">Des chiffres réels pour des vies transformées.</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 rounded-xl bg-gray-50 dark:bg-white/5 border border-gray-100 dark:border-white/10 hover:bg-gray-100 dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] group backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-[var(--color-mj-red)] flex items-center justify-center text-white mb-4 shadow-lg shadow-[var(--color-mj-red)]/20 group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <strong className="text-stat text-[var(--color-mj-gold)] mb-1 flex items-baseline justify-center drop-shadow-[0_0_10px_rgba(251,181,5,0.4)]">
                <AnimatedNumber value={stat.value} format={stat.format} />
                <span>{stat.suffix}</span>
              </strong>
              <span className="text-label text-gray-500 dark:text-blue-100 opacity-80 transition-colors">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
