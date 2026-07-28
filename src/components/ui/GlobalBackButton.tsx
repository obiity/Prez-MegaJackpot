"use client";

import { useRouter, usePathname } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';

export function GlobalBackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    // Si l'utilisateur est arrivé sur la page directement ou via un lien, window.history.length sera faible.
    // length > 2 est une heuristique commune pour s'assurer qu'il y a une page précédente du même site.
    setCanGoBack(window.history.length > 2);
  }, [pathname]);

  if (pathname === '/') return null;

  return (
    <button 
      onClick={() => canGoBack ? router.back() : router.push('/')}
      className="fixed top-4 left-4 md:top-6 md:left-8 z-50 flex items-center justify-center gap-2 p-2 min-h-[44px] min-w-[44px] rounded-full bg-white/70 dark:bg-[#0a1628]/70 backdrop-blur-md border border-gray-200 dark:border-white/10 shadow-md text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-white/20 transition-all group"
      aria-label="Retour"
    >
      <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
      <span className="hidden sm:inline font-medium text-sm pr-2">Retour</span>
    </button>
  );
}
