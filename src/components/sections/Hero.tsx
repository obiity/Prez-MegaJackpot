import { Button } from "@/components/ui/Button"
import { Countdown } from "@/components/ui/Countdown"
import { toast } from "sonner"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--color-mj-blue-dark)] pt-20 pb-24 lg:pt-32 lg:pb-36">
      {/* Abstract background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[var(--color-mj-blue)] rounded-full blur-[120px] opacity-40 pointer-events-none" />
      
      <div className="container relative mx-auto px-4 text-center">
        <h1 className="font-heading text-4xl sm:text-6xl lg:text-7xl text-white mb-6 tracking-tight drop-shadow-lg leading-tight">
          CHAQUE TICKET,<br />
          <span className="text-[var(--color-mj-gold)]">UNE CHANCE</span><br />
          DE CHANGER DE VIE
        </h1>
        
        <p className="mx-auto max-w-2xl text-lg md:text-xl text-blue-100 font-medium mb-10">
          Maisons de rêve, voyages d&apos;affaires ou rentes mensuelles. Saisissez votre opportunité avec nos tirages certifiés.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button onClick={() => toast.info("Le module de jeu sera bientôt disponible ! Restez à l'écoute.")} size="lg" variant="default" className="w-full sm:w-auto text-lg h-14">
            Jouer maintenant
          </Button>
          <Button onClick={() => {
            const section = document.getElementById('jeux');
            if(section) section.scrollIntoView({ behavior: 'smooth' });
          }} size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-[var(--color-mj-blue-dark)] text-lg h-14">
            Découvrir les lots
          </Button>
        </div>

        <div className="max-w-xl mx-auto">
          <p className="text-[var(--color-mj-gold)] font-bold mb-4 tracking-widest uppercase text-sm">Fin du tirage principal dans :</p>
          <Countdown />
        </div>
      </div>
    </section>
  )
}
