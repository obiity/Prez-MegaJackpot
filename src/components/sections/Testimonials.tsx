import { Card } from "@/components/ui/Card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    { name: "Awa D.", city: "Dakar", lot: "Villa à Saly", text: "Je n'y croyais pas jusqu'à ce que l'huissier m'appelle. Ma vie et celle de mes enfants ont changé à tout jamais.", img: "A" },
    { name: "Mamadou S.", city: "Thiès", lot: "Capital Business 15M", text: "Grâce au MEGA JACKPOT, j'ai pu lancer mon entreprise d'import-export. Le voyage à Dubaï était incroyable.", img: "M" },
    { name: "Fatou B.", city: "Saint-Louis", lot: "Rente 2M / mois", text: "Avoir 2 millions assurés chaque mois pendant 3 ans me donne une sérénité absolue. C'est une vraie bénédiction.", img: "F" },
  ]

  return (
    <section className="py-24 bg-white" id="gagnants">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-mj-blue-dark)] mb-6">Ils ont changé de vie</h2>
          <p className="text-lg text-[var(--color-mj-gray-dark)]">
            Découvrez les histoires de nos récents gagnants. Le prochain, c&apos;est peut-être vous.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, i) => (
            <Card key={i} className="p-8">
              <div className="flex gap-1 text-[var(--color-mj-gold)] mb-6">
                {[...Array(5)].map((_, j) => <Star key={j} className="h-5 w-5 fill-current" />)}
              </div>
              <p className="text-[var(--color-mj-gray-dark)] italic mb-8">&quot;{testi.text}&quot;</p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-[var(--color-mj-blue)] text-white flex items-center justify-center font-heading text-xl">
                  {testi.img}
                </div>
                <div>
                  <p className="font-bold text-[var(--color-mj-blue-dark)]">{testi.name}</p>
                  <p className="text-sm text-[var(--color-mj-red)] font-semibold">{testi.lot} — {testi.city}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
