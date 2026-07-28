import { ShieldCheck, Users, Trophy, Lock } from "lucide-react"

export function TrustBanner() {
  const stats = [
    { icon: Users, label: "Gagnants certifiés", value: "15,000+" },
    { icon: Trophy, label: "Distribués", value: "2 Milliards FCFA" },
    { icon: ShieldCheck, label: "Tirages certifiés", value: "Par huissier" },
    { icon: Lock, label: "Paiement 100%", value: "Sécurisé" },
  ]

  return (
    <section className="bg-white border border-gray-100 py-8 relative z-10 -mt-8 mx-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] md:mx-auto md:max-w-5xl">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center text-center">
              <div className="h-12 w-12 rounded-full bg-[var(--color-mj-blue)]/5 flex items-center justify-center text-[var(--color-mj-blue)] mb-3">
                <stat.icon className="h-6 w-6" />
              </div>
              <p className="font-heading text-xl md:text-2xl text-[var(--color-mj-blue-dark)] mb-1">{stat.value}</p>
              <p className="text-sm font-semibold text-[var(--color-mj-gray-dark)]">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
