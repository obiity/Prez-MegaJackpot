import { Ticket, Shuffle, BellRing, Gift } from "lucide-react"

export function HowItWorks() {
  const steps = [
    { icon: Ticket, title: "1. Achetez un ticket", desc: "Choisissez votre opportunité (Maison, Business, Famille) et achetez votre ticket en ligne." },
    { icon: Shuffle, title: "2. Participez au tirage", desc: "Votre numéro de ticket est enregistré pour le prochain tirage certifié par huissier." },
    { icon: BellRing, title: "3. Suivez le résultat", desc: "Découvrez les résultats en direct sur notre site ou recevez une notification." },
    { icon: Gift, title: "4. Récupérez votre lot", desc: "Gagnant ? Notre équipe vous accompagne pour la remise de votre lot ou de votre cash." },
  ]

  return (
    <section className="py-24 bg-gray-50" id="comment-jouer">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-[var(--color-mj-blue-dark)] mb-6">Comment ça marche ?</h2>
          <p className="text-lg text-[var(--color-mj-gray-dark)]">
            Participer au MEGA JACKPOT est simple, rapide et 100% sécurisé.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={i} className="relative flex flex-col items-center text-center">
              {i !== steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-full h-[2px] bg-gray-200" />
              )}
              <div className="relative z-10 w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center text-[var(--color-mj-red)] mb-6 border border-gray-100">
                <step.icon className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-xl mb-3 text-[var(--color-mj-blue-dark)]">{step.title}</h3>
              <p className="text-[var(--color-mj-gray-dark)]">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
