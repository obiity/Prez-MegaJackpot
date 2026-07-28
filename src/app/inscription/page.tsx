"use client";

import { useState } from 'react';
import { UserPlus, Lock, Mail, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function InscriptionPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic for signup can be added here later
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-default)] text-[var(--text-primary)] pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-md">
        
        <div className="bg-white dark:bg-[var(--bg-surface)] rounded-3xl shadow-xl border border-gray-100 dark:border-white/5 p-8 sm:p-10 text-center relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-br from-[var(--color-mj-red)] to-[var(--color-mj-red-dark)] opacity-10" />
          
          <div className="relative z-10">
            <div className="w-20 h-20 bg-[var(--color-mj-red)]/10 text-[var(--color-mj-red)] rounded-full flex items-center justify-center mx-auto mb-6">
              <UserPlus className="w-10 h-10" />
            </div>
            
            <h1 className="text-2xl font-bold font-heading mb-2">Création de compte</h1>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
              L'inscription ouvrira très prochainement.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[var(--text-primary)] dark:text-white sm:text-sm focus:ring-2 focus:ring-[var(--color-mj-gold)] focus:border-transparent transition-all outline-none" 
                  placeholder="Nom complet" 
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[var(--text-primary)] dark:text-white sm:text-sm focus:ring-2 focus:ring-[var(--color-mj-gold)] focus:border-transparent transition-all outline-none" 
                  placeholder="Adresse email" 
                  required
                />
              </div>

              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-white/10 rounded-xl bg-gray-50 dark:bg-black/20 text-[var(--text-primary)] dark:text-white sm:text-sm focus:ring-2 focus:ring-[var(--color-mj-gold)] focus:border-transparent transition-all outline-none" 
                  placeholder="Mot de passe" 
                  required
                />
              </div>

              <Button type="submit" variant="default" className="w-full h-12 text-md rounded-xl font-heading uppercase tracking-widest shadow-[0_4px_14px_rgba(218,21,31,0.4)] dark:shadow-[0_0_20px_rgba(218,21,31,0.6)] hover:shadow-[0_0_30px_rgba(218,21,31,0.8)] transition-all">
                Valider l'inscription
              </Button>
            </form>
            
            <div className="mt-8 pt-6 border-t border-gray-100 dark:border-white/10 text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Déjà un compte ?
              </p>
              <Link href="/compte" className="w-full block">
                <Button variant="secondary" className="w-full h-12 text-md rounded-xl uppercase tracking-widest font-heading hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                  Se connecter
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
