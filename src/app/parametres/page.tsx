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
  Globe,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage, getDictionary } from "@/i18n/LanguageContext";
import type { Locale } from "@/i18n/config";

export default function ParametresPage() {
  const { locale, setLocale, t } = useLanguage();
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
    toast.success(t.parametresPage.toastProfileSaved);
  };

  const handleChangePassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!oldPassword || !newPassword) {
      toast.error(t.parametresPage.toastFillPasswords);
      return;
    }
    toast.success(t.parametresPage.toastPasswordChanged);
    setOldPassword("");
    setNewPassword("");
  };

  const handleSwitchLang = (next: Locale) => {
    setLocale(next);
    toast.info(getDictionary(next).languageSwitcher.toastSwitched);
  };

  return (
    <div className="min-h-screen bg-[#021a3c] text-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header Breadcrumb */}
        <div className="flex items-center justify-between mb-8 flex-wrap gap-2">
          <Link
            href="/compte"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold text-gray-400 hover:text-[var(--color-mj-gold)] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t.parametresPage.backToAccount}
          </Link>
          <span className="text-xs font-mono px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            {t.parametresPage.verifiedKycLevel2}
          </span>
        </div>

        {/* Title Hero Banner */}
        <div className="bg-gradient-to-r from-[#021a3c] via-[#102a58] to-[#021a3c] rounded-3xl p-6 sm:p-8 border border-white/10 shadow-2xl relative overflow-hidden mb-8">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-[#363636] text-white flex items-center justify-center font-bold shadow-lg shrink-0">
              <Settings className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-heading font-black uppercase tracking-wide text-white">
                {t.parametresPage.title}
              </h1>
              <p className="text-xs sm:text-sm text-gray-300">
                {t.parametresPage.subtitle}
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          
          {/* Section 0: Langue d'affichage */}
          <div className="p-6 rounded-3xl bg-[#102a58]/50 border border-white/10 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <Globe className="w-4 h-4 text-[var(--color-mj-gold)]" /> {t.parametresPage.languageSectionTitle}
              </h3>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="text-xs text-gray-300">{t.parametresPage.languageDesc}</p>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => handleSwitchLang("fr")}
                  className={`min-h-[44px] px-5 py-2 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    locale === "fr"
                      ? "bg-[var(--color-mj-gold)] text-[#021a3c] shadow-md"
                      : "bg-black/30 text-gray-300 border border-white/15 hover:border-[var(--color-mj-gold)]/50"
                  }`}
                >
                  Français (FR)
                </button>
                <button
                  type="button"
                  onClick={() => handleSwitchLang("en")}
                  className={`min-h-[44px] px-5 py-2 rounded-xl font-heading font-bold text-xs uppercase tracking-wider transition-all cursor-pointer ${
                    locale === "en"
                      ? "bg-[var(--color-mj-gold)] text-[#021a3c] shadow-md"
                      : "bg-black/30 text-gray-300 border border-white/15 hover:border-[var(--color-mj-gold)]/50"
                  }`}
                >
                  English (EN)
                </button>
              </div>
            </div>
          </div>

          {/* Section 1: Informations Personnelles */}
          <div className="p-6 rounded-3xl bg-[#102a58]/50 border border-white/10 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <User className="w-4 h-4 text-[var(--color-mj-gold)]" /> {t.parametresPage.personalInfoTitle}
              </h3>
              <span className="text-[10px] font-mono text-emerald-400">{t.parametresPage.identityVerified}</span>
            </div>

            <form onSubmit={handleSaveProfile} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">{t.parametresPage.firstName}</label>
                  <input
                    type="text"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-black/30 text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">{t.parametresPage.lastName}</label>
                  <input
                    type="text"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-black/30 text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">{t.parametresPage.phone}</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-black/30 font-mono text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-gray-300 block mb-1">{t.parametresPage.email}</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-black/30 text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="py-2.5 px-6 bg-[var(--color-mj-gold)] text-[#021a3c] font-heading font-black text-xs uppercase tracking-wider rounded-xl hover:brightness-110 transition-all cursor-pointer"
              >
                {t.parametresPage.saveChanges}
              </button>
            </form>
          </div>

          {/* Section 2: Statut KYC & Pièces d'identité */}
          <div className="p-6 rounded-3xl bg-[#102a58]/50 border border-white/10 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" /> {t.parametresPage.kycSectionTitle}
              </h3>
              <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/30">
                {t.parametresPage.level2Validated}
              </span>
            </div>

            <div className="p-4 rounded-2xl bg-black/25 border border-emerald-500/30 flex items-center justify-between text-xs gap-2 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <p className="font-bold text-white leading-tight">{t.parametresPage.idValidatedTitle}</p>
                  <span className="text-[10px] text-gray-400">{t.parametresPage.idValidatedSub}</span>
                </div>
              </div>
              <Link href="/inscription">
                <span className="text-[10px] font-mono text-[var(--color-mj-gold)] hover:underline cursor-pointer">
                  {t.parametresPage.updateLink}
                </span>
              </Link>
            </div>
          </div>

          {/* Section 3: Sécurité & Mot de Passe */}
          <div className="p-6 rounded-3xl bg-[#102a58]/50 border border-white/10 shadow-xl space-y-4">
            <div className="border-b border-white/10 pb-3">
              <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <Lock className="w-4 h-4 text-[var(--color-mj-red)]" /> {t.parametresPage.passwordSectionTitle}
              </h3>
            </div>

            <form onSubmit={handleChangePassword} className="space-y-4 max-w-md">
              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1">{t.parametresPage.currentPassword}</label>
                <input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-black/30 text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-gray-300 block mb-1">{t.parametresPage.newPassword}</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3 py-2.5 rounded-xl border border-white/15 bg-black/30 text-xs text-white outline-none focus:border-[var(--color-mj-gold)]"
                />
              </div>

              <button
                type="submit"
                className="py-2.5 px-6 bg-[var(--color-mj-red)] hover:bg-[#a00c17] text-white font-heading font-black text-xs uppercase tracking-wider rounded-xl transition-all cursor-pointer"
              >
                {t.parametresPage.changePasswordBtn}
              </button>
            </form>
          </div>

          {/* Section 4: Notifications & Préférences */}
          <div className="p-6 rounded-3xl bg-[#102a58]/50 border border-white/10 shadow-xl space-y-4">
            <div className="border-b border-white/10 pb-3">
              <h3 className="font-heading font-black text-sm uppercase tracking-wider text-white flex items-center gap-2">
                <Bell className="w-4 h-4 text-[var(--color-mj-gold)]" /> {t.parametresPage.notifSectionTitle}
              </h3>
            </div>

            <div className="space-y-3">
              <label className="flex items-center justify-between p-3 rounded-2xl bg-black/25 border border-white/5 cursor-pointer">
                <div>
                  <p className="text-xs font-bold text-white">{t.parametresPage.smsTitle}</p>
                  <span className="text-[10px] text-gray-400">{t.parametresPage.smsDesc}</span>
                </div>
                <input
                  type="checkbox"
                  checked={notifSms}
                  onChange={(e) => setNotifSms(e.target.checked)}
                  className="w-4 h-4 accent-[var(--color-mj-gold)] rounded"
                />
              </label>

              <label className="flex items-center justify-between p-3 rounded-2xl bg-black/25 border border-white/5 cursor-pointer">
                <div>
                  <p className="text-xs font-bold text-white">{t.parametresPage.emailNotifTitle}</p>
                  <span className="text-[10px] text-gray-400">{t.parametresPage.emailNotifDesc}</span>
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
