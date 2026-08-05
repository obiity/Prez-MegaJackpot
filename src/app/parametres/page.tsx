"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Settings,
  ArrowLeft,
  User,
  ShieldCheck,
  Lock,
  Bell,
  CheckCircle2,
  ChevronRight,
  Smartphone,
  Mail,
  Shield,
  KeyRound,
  Eye,
  EyeOff,
} from "lucide-react";
import { toast } from "sonner";

export default function ParametresPage() {
  const [prenom, setPrenom] = useState("Mamadou");
  const [nom, setNom] = useState("Diop");
  const [email, setEmail] = useState("mamadou.diop@example.com");
  const [phone, setPhone] = useState("+221 77 123 45 67");
  const [notifSms, setNotifSms] = useState(true);
  const [notifEmail, setNotifEmail] = useState(true);

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Profil mis à jour avec succès !");
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!oldPassword || !newPassword) {
      toast.error("Veuillez remplir les champs du mot de passe.");
      return;
    }
    toast.success("Mot de passe modifié avec succès !");
    setOldPassword("");
    setNewPassword("");
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
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            ✓ Compte Vérifié KYC (Niveau 2)
          </span>
        </div>

        {/* Title Hero Banner */}
        <div className="bg-gradient-to-r from-[#04112c] via-[#0f1f3d] to-[#04112c] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 text-white flex items-center justify-center font-bold shadow-lg shrink-0">
              <Settings className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-wide text-white">
                Paramètres du Compte
              </h1>
              <p className="text-xs sm:text-sm text-gray-300">
                Gérez vos informations personnelles, votre sécurité et vos préférences de notification.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          
          {/* Section 1: Informations Personnelles */}
          <div className="p-6 rounded-3xl bg-[#04112c] border border-white/10 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <User className="w-4 h-4 text-[var(--color-mj-gold)]" /> Informations Personnelles
              </h3>
              <span className="text-[10px] font-mono text-emerald-400">Identité Vérifiée</span>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Prénom</label>
                  <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-[#010919] text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Nom</label>
                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-[#010919] text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Téléphone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-[#010919] font-mono text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">Adresse Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-[#010919] text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="py-2.5 px-6 bg-[var(--color-mj-gold)] text-black font-heading font-black text-xs uppercase tracking-wider rounded-xl hover:bg-yellow-400 dark:hover:bg-amber-500 transition-all cursor-pointer"
              >
                Enregistrer les modifications
              </button>
            </form>
          </div>

          {/* Section 2: Statut KYC & Pièces d'identité */}
          <div className="p-6 rounded-3xl bg-[#04112c] border border-white/10 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> Vérification KYC & Sécurité Solde
              </h3>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                Niveau 2 Validé
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-[#061430] border border-emerald-500/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-bold text-white leading-tight">Carte Nationale d'Identité & Selfie validés</p>
                  <span className="text-[10px] text-gray-400">Vérifié par l'huissier partenaire MEGA JACKPOT</span>
                </div>
              </div>
              <Link href="/inscription">
                <span className="text-[10px] font-mono text-[var(--color-mj-gold)] hover:underline cursor-pointer">
                  Mettre à jour &gt;
                </span>
              </Link>
            </div>
          </div>

          {/* Section 3: Sécurité & Mot de Passe */}
          <div className="p-6 rounded-3xl bg-[#04112c] border border-white/10 shadow-xl space-y-4">
            <div className="border-b border-white/10 pb-3">
              <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <Lock className="w-4 h-4 text-red-400" /> Modifier le mot de passe
              </h3>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1">Mot de passe actuel</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-[#010919] text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1">Nouveau mot de passe</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-[#010919] text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                />
              </div>

              <button
                type="submit"
                className="py-2.5 px-6 bg-[var(--color-mj-red)] hover:bg-[#a00c17] text-white font-heading font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                Changer le mot de passe
              </button>
            </form>
          </div>

          {/* Section 4: Notifications & Préférences */}
          <div className="p-6 rounded-3xl bg-[#04112c] border border-white/10 shadow-xl space-y-4">
            <div className="border-b border-white/10 pb-3">
              <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <Bell className="w-4 h-4 text-[var(--color-mj-gold)]" /> Alertes & Notifications
              </h3>
            </div>

            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 rounded-2xl bg-[#061430] border border-white/5 cursor-pointer">
                <div>
                  <p className="text-xs font-bold text-white">Notifications SMS</p>
                  <span className="text-[10px] text-gray-400">Recevez des alertes SMS pour chaque tirage et gain</span>
                </div>
                <input
                  type="checkbox"
                  checked={notifSms}
                  onChange={(e) => setNotifSms(e.target.checked)}
                  className="w-4 h-4 accent-[var(--color-mj-gold)] rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-2xl bg-[#061430] border border-white/5 cursor-pointer">
                <div>
                  <p className="text-xs font-bold text-white">Notifications Email</p>
                  <span className="text-[10px] text-gray-400">Reçus d'achat et résultats des tirages par e-mail</span>
                </div>
                <input
                  type="checkbox"
                  checked={notifEmail}
                  onChange={(e) => setNotifEmail(e.target.checked)}
                  className="w-4 h-4 accent-[var(--color-mj-gold)] rounded"
                />
              </label>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
