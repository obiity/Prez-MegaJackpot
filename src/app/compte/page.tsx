"use client";

import { useState } from 'react';
import { User, Lock, Mail, HeadphonesIcon, Wallet, Eye, EyeOff, PlusCircle, ArrowUpRight, History, CreditCard, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import { toast } from 'sonner';

export default function ComptePage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showBalance, setShowBalance] = useState(true);

  const transactions = [
    { id: 'TX-9482', type: 'Rechargement Wave', amount: '+ 25 000 FCFA', status: 'Réussi', date: '01 Août 2026', positive: true },
    { id: 'TX-9321', type: 'Achat Ticket Tirage Maison', amount: '- 5 000 FCFA', status: 'Réussi', date: '28 Juillet 2026', positive: false },
    { id: 'TX-8910', type: 'Gain Lot Secondaire (Bonus)', amount: '+ 10 000 FCFA', status: 'Réussi', date: '15 Juillet 2026', positive: true },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Connexion réussie à votre espace !");
  };

  return (
    <div className="min-h-screen bg-[var(--bg-default)] text-[var(--text-primary)] pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-heading font-black uppercase tracking-wide mb-2">Mon Espace</h1>
          <p className="text-sm text-[var(--text-secondary)]">Gérez votre portefeuille, vos tickets et votre compte MEGA JACKPOT</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Column: Mon Portefeuille Widget */}
          <div className="md:col-span-7 space-y-6">
            
            {/* MON PORTEFEUILLE CARD */}
            <div className="bg-gradient-to-br from-[#0c1836] via-[#051128] to-[#010919] rounded-3xl p-6 sm:p-8 text-white shadow-2xl border border-white/10 relative overflow-hidden text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center">
                <button
                  onClick={() => setShowBalance(!showBalance)}
                  className="absolute top-0 right-0 p-2 text-gray-300 hover:text-white transition-colors rounded-lg bg-white/5 hover:bg-white/10"
                  title="Masquer/Afficher le solde"
                >
                  {showBalance ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                </button>

                <div className="w-10 h-10 rounded-xl bg-[var(--color-mj-gold)] text-black flex items-center justify-center font-bold shadow-md mb-2">
                  <Wallet className="w-5 h-5" />
                </div>
                <h2 className="font-heading font-bold text-lg text-white uppercase tracking-wider">Mon Portefeuille</h2>

                {/* Balance Display */}
                <div className="my-6">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest block mb-1">Solde disponible</span>
                  <div className="font-mono font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
                    {showBalance ? "125 750 FCFA" : "•••••••• FCFA"}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="grid grid-cols-2 gap-3 w-full">
                  <button
                    onClick={() => toast.info("Ouverture du module de rechargement...")}
                    className="py-3 bg-[var(--color-mj-red)] hover:bg-red-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PlusCircle className="w-4 h-4" /> RECHARGER
                  </button>
                  <button
                    onClick={() => toast.info("Ouverture du module de retrait...")}
                    className="py-3 bg-white/10 hover:bg-white/20 text-white border border-white/20 font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ArrowUpRight className="w-4 h-4" /> RETIRER
                  </button>
                </div>
              </div>
            </div>

            {/* TRANSACTIONS RECENTES */}
            <div className="bg-white dark:bg-[var(--bg-surface)] rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-white/5 text-left">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading font-bold text-sm uppercase tracking-wider flex items-center gap-2">
                  <History className="w-4 h-4 text-[var(--color-mj-gold)]" /> Dernières Transactions
                </h3>
                <button onClick={() => toast.info("Historique complet des transactions...")} className="text-xs font-mono text-red-500 hover:underline">
                  Voir tout
                </button>
              </div>

              <div className="space-y-3">
                {transactions.map((tx) => (
                  <div key={tx.id} className="flex items-center justify-between p-3 rounded-2xl bg-gray-50 dark:bg-black/20 border border-gray-100 dark:border-white/5 text-xs">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${tx.positive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-red-500/10 text-red-500'}`}>
                        {tx.positive ? '+' : '-'}
                      </div>
                      <div>
                        <p className="font-bold text-[var(--text-primary)] dark:text-white">{tx.type}</p>
                        <span className="text-[10px] text-gray-400 font-mono">{tx.date} • {tx.id}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={`font-mono font-bold block ${tx.positive ? 'text-emerald-500' : 'text-[var(--text-primary)] dark:text-white'}`}>
                        {tx.amount}
                      </span>
                      <span className="text-[9px] text-emerald-500 font-medium">✓ {tx.status}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Connection / Registration & Permanent Support */}
          <div className="md:col-span-5 space-y-6">
            
            {/* LOGIN / SIGNUP CARD */}
            <div className="bg-white dark:bg-[var(--bg-surface)] rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 p-6 sm:p-8 text-center relative overflow-hidden">
              <div className="w-16 h-16 bg-[var(--color-mj-blue)]/10 text-[var(--color-mj-blue)] dark:text-white rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8" />
              </div>
              
              <h2 className="text-xl font-bold font-heading mb-1 uppercase tracking-wide">Se connecter</h2>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                Accédez à votre compte joueur
              </p>

              <form onSubmit={handleSubmit} className="space-y-3 text-left">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-4 w-4 text-gray-400" />
                  </div>
                  <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="block w-full pl-9 pr-3 py-2.5 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[var(--text-primary)] dark:text-white text-xs focus:ring-2 focus:ring-[var(--color-mj-gold)] outline-none" 
                    placeholder="Adresse email" 
                    required
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-4 w-4 text-gray-400" />
                  </div>
                  <input 
                    type="password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="block w-full pl-9 pr-3 py-2.5 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[var(--text-primary)] dark:text-white text-xs focus:ring-2 focus:ring-[var(--color-mj-gold)] outline-none" 
                    placeholder="Mot de passe" 
                    required
                  />
                </div>

                <Button type="submit" variant="secondary" className="w-full h-10 text-xs rounded-xl font-heading uppercase tracking-widest hover:bg-black/5 dark:hover:bg-white/5 cursor-pointer">
                  Connexion
                </Button>
              </form>
              
              <div className="mt-6 pt-4 border-t border-gray-100 dark:border-white/10 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                  Pas encore de compte ?
                </p>
                <Link href="/inscription" className="w-full block">
                  <Button variant="default" className="w-full h-10 text-xs rounded-xl font-heading uppercase tracking-widest shadow-md hover:scale-105 transition-all cursor-pointer">
                    S'inscrire
                  </Button>
                </Link>
              </div>
            </div>

            {/* Permanent Aide & Support 24/7 Block */}
            <div className="bg-white dark:bg-[var(--bg-surface)] rounded-3xl p-6 shadow-xl border border-gray-100 dark:border-white/5 text-left">
              <Link href="/support" className="group block">
                <div className="p-4 rounded-2xl bg-gradient-to-r from-[var(--color-mj-gold)]/10 via-[var(--color-mj-gold)]/20 to-[var(--color-mj-gold)]/10 border border-[var(--color-mj-gold)]/50 hover:border-[var(--color-mj-gold)] transition-all flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[var(--color-mj-gold)] text-black flex items-center justify-center shrink-0 font-bold shadow-md">
                      <HeadphonesIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-heading font-bold text-sm text-[var(--text-primary)] dark:text-white group-hover:text-[var(--color-mj-gold)] transition-colors">
                        Aide & Support 24/7
                      </h4>
                      <p className="text-xs text-[var(--text-secondary)]">
                        Besoin d&apos;assistance ? Équipe réactive 7j/7
                      </p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-[var(--color-mj-gold)] group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
