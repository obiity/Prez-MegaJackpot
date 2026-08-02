import { Button } from "@/components/ui/Button"
import { Menu } from "lucide-react"
import Image from "next/image"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-mj-blue)] bg-[var(--color-mj-blue-dark)]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Image 
            src="/MJ_logo_sans_slogan Blanc.png" 
            alt="MEGA JACKPOT" 
            width={180} 
            height={40} 
            className="h-8 sm:h-10 w-auto object-contain"
            priority
          />
        </div>
        
        <nav className="hidden md:flex gap-8 text-sm font-semibold text-white">
          <a href="#" className="hover:text-[var(--color-mj-red)] transition-colors">Accueil</a>
          <a href="#jeux" className="hover:text-[var(--color-mj-red)] transition-colors">Nos Jeux</a>
          <a href="#resultats" className="hover:text-[var(--color-mj-red)] transition-colors">Résultats</a>
          <a href="#comment-jouer" className="hover:text-[var(--color-mj-red)] transition-colors">Comment jouer</a>
          <a href="#gagnants" className="hover:text-[var(--color-mj-red)] transition-colors">Gagnants</a>
        </nav>
        
        <div className="hidden md:flex items-center gap-4">
          <Button variant="ghost">Connexion</Button>
        </div>

        <button className="md:hidden p-2 text-white">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
