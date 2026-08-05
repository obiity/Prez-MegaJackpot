"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowLeft,
  Shield,
  CreditCard,
  Camera,
  FileText,
  Smartphone,
  ChevronRight,
  Plus,
  ArrowUpRight,
  Bell,
  Upload,
  FileUp,
  X,
} from "lucide-react";
import { toast } from "sonner";

type Step = 1 | 2 | 3 | 4 | 5;

export default function InscriptionPage() {
  const [currentStep, setCurrentStep] = useState<Step>(1);

  // Step 1 Form state
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [phone, setPhone] = useState("+221 77 123 45 67");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [over18, setOver18] = useState(true);
  const [acceptTerms, setAcceptTerms] = useState(true);

  // Step 2 OTP State
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [otpTimer, setOtpTimer] = useState(45);

  // Step 3 KYC State & Local File Uploads
  const [docType, setDocType] = useState<"cni" | "passport" | "cedeaO">("cni");
  const [rectoFile, setRectoFile] = useState<File | null>(null);
  const [versoFile, setVersoFile] = useState<File | null>(null);
  const [selfieFile, setSelfieFile] = useState<File | null>(null);

  const rectoInputRef = useRef<HTMLInputElement>(null);
  const versoInputRef = useRef<HTMLInputElement>(null);
  const selfieInputRef = useRef<HTMLInputElement>(null);

  // OTP countdown timer
  useEffect(() => {
    if (currentStep === 2 && otpTimer > 0) {
      const interval = setInterval(() => setOtpTimer((t) => t - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [currentStep, otpTimer]);

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!over18 || !acceptTerms) {
      toast.error("Veuillez accepter les conditions et confirmer votre âge.");
      return;
    }
    toast.success("Code de vérification envoyé par SMS !");
    setCurrentStep(2);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input field
    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Numéro de téléphone vérifié avec succès !");
    setCurrentStep(3);
  };

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rectoFile && !versoFile && !selfieFile) {
      toast.info("Validation automatique des documents de démonstration.");
    }
    toast.success("Documents soumis et vérifiés avec succès !");
    setCurrentStep(4);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className="min-h-screen bg-[#010919] text-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Step Stepper Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto mb-4 px-2">
            {[
              { num: 1, title: "Informations" },
              { num: 2, title: "Vérification OTP" },
              { num: 3, title: "Identité KYC" },
              { num: 4, title: "Validation" },
              { num: 5, title: "Portefeuille" },
            ].map((s) => (
              <button
                key={s.num}
                onClick={() => setCurrentStep(s.num as Step)}
                className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${
                  currentStep === s.num
                    ? "text-[var(--color-mj-gold)] font-bold scale-105"
                    : currentStep > s.num
                    ? "text-emerald-400 font-semibold"
                    : "text-gray-400"
                }`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-xs font-bold transition-all ${
                    currentStep === s.num
                      ? "bg-[var(--color-mj-gold)] text-black shadow-md"
                      : currentStep > s.num
                      ? "bg-emerald-500 text-white"
                      : "bg-white/10 text-gray-400 border border-white/10"
                  }`}
                >
                  {currentStep > s.num ? "✓" : s.num}
                </div>
                <span className="text-[10px] hidden sm:block font-mono uppercase tracking-tight">
                  {s.title}
                </span>
              </button>
            ))}
          </div>

          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden max-w-2xl mx-auto">
            <div
              className="bg-gradient-to-r from-[var(--color-mj-gold)] to-[var(--color-mj-red)] h-full transition-all duration-500"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: CRÉATION DE COMPTE (Dark Charter Aesthetics) */}
        {currentStep === 1 && (
          <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-[#04112c] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden">
              
              {/* Header Logo */}
              <div className="text-center mb-6">
                <Image
                  src="/MJ_logo_sans_slogan Blanc.png"
                  alt="MEGA JACKPOT"
                  width={160}
                  height={32}
                  className="h-8 w-auto mx-auto mb-2 object-contain"
                  priority
                />
                <p className="text-xs font-mono text-gray-300">
                  Chaque ticket, une chance de changer de vie.
                </p>
              </div>

              {/* Form Box - Dark Charter Container */}
              <div className="bg-[#061430] text-white rounded-2xl p-6 shadow-xl border border-white/10 space-y-4">
                <div>
                  <h2 className="font-heading font-black text-xl text-white uppercase tracking-wide">
                    Créer mon compte
                  </h2>
                  <p className="text-xs text-gray-400 font-medium">
                    Remplissez vos informations
                  </p>
                </div>

                <form onSubmit={handleStep1Submit} className="space-y-3.5">
                  {/* Prénom */}
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      placeholder="Prénom"
                      required
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-white/15 bg-[#010919]/70 text-xs font-medium text-white placeholder-gray-400 focus:border-[var(--color-mj-gold)] focus:ring-1 focus:ring-[var(--color-mj-gold)] outline-none"
                    />
                  </div>

                  {/* Nom */}
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      placeholder="Nom"
                      required
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-white/15 bg-[#010919]/70 text-xs font-medium text-white placeholder-gray-400 focus:border-[var(--color-mj-gold)] focus:ring-1 focus:ring-[var(--color-mj-gold)] outline-none"
                    />
                  </div>

                  {/* Téléphone (+221) */}
                  <div className="relative flex items-center">
                    <span className="absolute left-3 text-sm">🇸🇳</span>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+221 77 123 45 67"
                      required
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-white/15 bg-[#010919]/70 text-xs font-mono font-bold text-white placeholder-gray-400 focus:border-[var(--color-mj-gold)] focus:ring-1 focus:ring-[var(--color-mj-gold)] outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email (optionnel)"
                      className="w-full pl-10 pr-3 py-2.5 rounded-xl border border-white/15 bg-[#010919]/70 text-xs font-medium text-white placeholder-gray-400 focus:border-[var(--color-mj-gold)] focus:ring-1 focus:ring-[var(--color-mj-gold)] outline-none"
                    />
                  </div>

                  {/* Mot de passe */}
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Mot de passe"
                      required
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-white/15 bg-[#010919]/70 text-xs font-medium text-white placeholder-gray-400 focus:border-[var(--color-mj-gold)] focus:ring-1 focus:ring-[var(--color-mj-gold)] outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>

                  {/* Confirmer le mot de passe */}
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirmer le mot de passe"
                      required
                      className="w-full pl-10 pr-10 py-2.5 rounded-xl border border-white/15 bg-[#010919]/70 text-xs font-medium text-white placeholder-gray-400 focus:border-[var(--color-mj-gold)] focus:ring-1 focus:ring-[var(--color-mj-gold)] outline-none"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-2 pt-1 text-left">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={over18}
                        onChange={(e) => setOver18(e.target.checked)}
                        className="w-4 h-4 accent-[var(--color-mj-red)] rounded"
                      />
                      <span className="text-xs font-semibold text-gray-300">
                        J'ai plus de 18 ans
                      </span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="w-4 h-4 accent-[var(--color-mj-red)] rounded mt-0.5"
                      />
                      <span className="text-xs text-gray-300 leading-tight">
                        J'accepte les <strong className="text-[var(--color-mj-gold)]">Conditions Générales d'utilisation</strong>
                      </span>
                    </label>
                  </div>

                  {/* S'INSCRIRE CTA */}
                  <button
                    type="submit"
                    className="w-full py-3.5 mt-2 bg-[var(--color-mj-red)] hover:bg-[#a00c17] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    S'INSCRIRE
                  </button>
                </form>

                <div className="text-center pt-2 border-t border-white/10">
                  <span className="text-xs text-gray-400">
                    Vous avez déjà un compte ?{" "}
                    <Link href="/compte" className="font-bold text-[var(--color-mj-gold)] hover:underline">
                      Se connecter
                    </Link>
                  </span>
                </div>
              </div>

            </div>
          </div>
        )}

        {/* STEP 2: VÉRIFICATION OTP (Dark Charter Aesthetics) */}
        {currentStep === 2 && (
          <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-[#04112c] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <button
                  onClick={() => setCurrentStep(1)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <span className="font-heading font-bold text-sm uppercase text-white tracking-wide">
                  Vérification du numéro
                </span>
                <User className="w-5 h-5 text-[var(--color-mj-gold)]" />
              </div>

              {/* Graphic Mockup */}
              <div className="my-6 text-center">
                <div className="w-20 h-20 rounded-3xl bg-blue-600/20 border border-blue-500/40 text-blue-400 flex items-center justify-center mx-auto mb-4 relative">
                  <Smartphone className="w-10 h-10 text-[var(--color-mj-gold)]" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xs font-bold shadow-md">
                    ✓
                  </div>
                </div>
                <p className="text-xs text-gray-300">
                  Un code de vérification a été envoyé au
                </p>
                <p className="font-mono font-extrabold text-sm text-[var(--color-mj-gold)] mt-0.5">
                  {phone}
                </p>
              </div>

              {/* Form Box - Dark Container */}
              <form onSubmit={handleStep2Submit} className="bg-[#061430] text-white rounded-2xl p-6 shadow-xl border border-white/10 space-y-5 text-center">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                  Entrez le code à 6 chiffres
                </span>

                {/* 6 OTP Input Boxes */}
                <div className="flex justify-center gap-2 sm:gap-2.5">
                  {otp.map((digit, idx) => (
                    <input
                      key={idx}
                      id={`otp-input-${idx}`}
                      type="text"
                      maxLength={1}
                      value={digit}
                      onChange={(e) => handleOtpChange(idx, e.target.value)}
                      className="w-10 h-12 sm:w-11 sm:h-13 rounded-xl border border-white/20 text-center font-mono font-black text-lg text-white bg-[#010919]/80 focus:border-[var(--color-mj-gold)] focus:ring-2 focus:ring-[var(--color-mj-gold)]/30 outline-none"
                    />
                  ))}
                </div>

                <div className="text-xs font-mono text-gray-400">
                  Renvoyer dans{" "}
                  <strong className="text-[var(--color-mj-gold)]">
                    00:{otpTimer < 10 ? `0${otpTimer}` : otpTimer}
                  </strong>
                </div>

                {/* VALIDER Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 bg-[var(--color-mj-red)] hover:bg-[#a00c17] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  VALIDER
                </button>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setOtpTimer(45);
                      toast.info("Un nouveau code a été envoyé.");
                    }}
                    className="text-xs text-gray-400 hover:text-[var(--color-mj-gold)] transition-colors"
                  >
                    Vous n'avez pas reçu le code ?{" "}
                    <strong className="text-[var(--color-mj-gold)] underline">Renvoyer le code</strong>
                  </button>
                </div>
              </form>

            </div>
          </div>
        )}

        {/* STEP 3: VÉRIFICATION D'IDENTITÉ (KYC) (Fichiers réels depuis votre dossier) */}
        {currentStep === 3 && (
          <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-[#04112c] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <button
                  onClick={() => setCurrentStep(2)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <span className="font-heading font-bold text-sm uppercase text-white tracking-wide">
                  Vérification d'identité
                </span>
                <Shield className="w-5 h-5 text-emerald-400" />
              </div>

              <p className="text-xs text-gray-300 text-center mb-5 leading-relaxed">
                Votre identité est requise pour sécuriser vos transactions et vos gains.
              </p>

              {/* Hidden HTML File Inputs */}
              <input
                type="file"
                ref={rectoInputRef}
                accept="image/*,.pdf"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setRectoFile(e.target.files[0]);
                    toast.success(`Fichier Recto chargé : ${e.target.files[0].name}`);
                  }
                }}
              />

              <input
                type="file"
                ref={versoInputRef}
                accept="image/*,.pdf"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setVersoFile(e.target.files[0]);
                    toast.success(`Fichier Verso chargé : ${e.target.files[0].name}`);
                  }
                }}
              />

              <input
                type="file"
                ref={selfieInputRef}
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setSelfieFile(e.target.files[0]);
                    toast.success(`Selfie chargé : ${e.target.files[0].name}`);
                  }
                }}
              />

              {/* Form Box - Dark Container */}
              <form onSubmit={handleStep3Submit} className="bg-[#061430] text-white rounded-2xl p-6 shadow-xl border border-white/10 space-y-5 text-left">
                
                {/* 1. Choisir le type de document */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">
                    1. Choisir le type de document
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "cni", label: "Carte Nationale d'Identité", icon: FileText },
                      { id: "passport", label: "Passeport", icon: Shield },
                      { id: "cedeaO", label: "Carte CEDEAO", icon: CreditCard },
                    ].map((doc) => {
                      const DocIcon = doc.icon;
                      const isSelected = docType === doc.id;
                      return (
                        <button
                          key={doc.id}
                          type="button"
                          onClick={() => setDocType(doc.id as any)}
                          className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-center transition-all cursor-pointer ${
                            isSelected
                              ? "border-[var(--color-mj-gold)] bg-[var(--color-mj-gold)]/15 text-[var(--color-mj-gold)] font-bold shadow-sm"
                              : "border-white/10 bg-[#010919]/60 text-gray-400 hover:bg-white/5"
                          }`}
                        >
                          <DocIcon className="w-5 h-5" />
                          <span className="text-[10px] leading-tight font-heading">
                            {doc.label}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Prendre / Déposer les photos du document */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block">
                      2. Joindre les photos du document
                    </label>
                    <span className="text-[10px] font-mono text-gray-400">
                      Formats: JPG, PNG, PDF
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {/* Recto Upload Dropzone */}
                    <div
                      onClick={() => rectoInputRef.current?.click()}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        rectoFile
                          ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
                          : "border-dashed border-white/20 bg-[#010919]/60 hover:border-[var(--color-mj-gold)]/60 text-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${rectoFile ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-gray-400"}`}>
                          <Upload className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-bold leading-tight">
                            {rectoFile ? rectoFile.name : "Déposer la photo du Recto"}
                          </p>
                          <span className="text-[10px] text-gray-400">
                            {rectoFile ? formatFileSize(rectoFile.size) : "Cliquez ou glissez votre fichier ici"}
                          </span>
                        </div>
                      </div>
                      {rectoFile ? (
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                            Recto validé ✓
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setRectoFile(null);
                            }}
                            className="p-1 text-gray-400 hover:text-red-400"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] font-mono text-[var(--color-mj-gold)] underline">
                          Parcourir...
                        </span>
                      )}
                    </div>

                    {/* Verso Upload Dropzone */}
                    <div
                      onClick={() => versoInputRef.current?.click()}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                        versoFile
                          ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
                          : "border-dashed border-white/20 bg-[#010919]/60 hover:border-[var(--color-mj-gold)]/60 text-gray-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${versoFile ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-gray-400"}`}>
                          <Upload className="w-4 h-4" />
                        </div>
                        <div className="text-left">
                          <p className="text-xs font-bold leading-tight">
                            {versoFile ? versoFile.name : "Déposer la photo du Verso"}
                          </p>
                          <span className="text-[10px] text-gray-400">
                            {versoFile ? formatFileSize(versoFile.size) : "Cliquez ou glissez votre fichier ici"}
                          </span>
                        </div>
                      </div>
                      {versoFile ? (
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                            Verso validé ✓
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setVersoFile(null);
                            }}
                            className="p-1 text-gray-400 hover:text-red-400"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] font-mono text-[var(--color-mj-gold)] underline">
                          Parcourir...
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. Selfie en direct Dropzone */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-300 block mb-2">
                    3. Selfie en direct
                  </label>
                  <div
                    onClick={() => selfieInputRef.current?.click()}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                      selfieFile
                        ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-400"
                        : "border-dashed border-white/20 bg-[#010919]/60 hover:border-[var(--color-mj-gold)]/60 text-gray-300"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${selfieFile ? "bg-emerald-500/20 text-emerald-400" : "bg-white/10 text-gray-400"}`}>
                        <Camera className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs font-bold leading-tight">
                          {selfieFile ? selfieFile.name : "Joindre ou prendre un selfie"}
                        </p>
                        <span className="text-[10px] text-gray-400">
                          {selfieFile ? formatFileSize(selfieFile.size) : "Sélectionner une photo visage nette"}
                        </span>
                      </div>
                    </div>
                    {selfieFile ? (
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-500/30">
                          Selfie validé ✓
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelfieFile(null);
                          }}
                          className="p-1 text-gray-400 hover:text-red-400"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-[10px] font-mono text-[var(--color-mj-gold)] underline">
                        Parcourir...
                      </span>
                    )}
                  </div>
                </div>

                {/* SOUMETTRE Button */}
                <button
                  type="submit"
                  className="w-full py-3.5 mt-2 bg-[var(--color-mj-red)] hover:bg-[#a00c17] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  SOUMETTRE LES DOCUMENTS
                </button>
              </form>

            </div>
          </div>
        )}

        {/* STEP 4: VALIDATION KYC (Dark Charter Aesthetics) */}
        {currentStep === 4 && (
          <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-[#04112c] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 text-center relative overflow-hidden">
              
              {/* Confetti Glow Background */}
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fbb505_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

              {/* Big Green Shield Icon */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-emerald-500/20 border-2 border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(16,185,129,0.5)]">
                <CheckCircle2 className="w-14 h-14" />
              </div>

              <h2 className="relative z-10 font-heading font-black text-2xl sm:text-3xl text-emerald-400 uppercase tracking-tight mb-2">
                Félicitations !
              </h2>
              <p className="relative z-10 text-sm text-gray-200 mb-6">
                Votre identité a été vérifiée avec succès.
              </p>

              {/* Benefits Checklist Box - Dark Container */}
              <div className="relative z-10 bg-[#061430] border border-white/10 rounded-2xl p-5 text-left space-y-3 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--color-mj-gold)] block mb-1">
                  Vous avez désormais accès à :
                </span>

                {[
                  "Achat illimité de tickets",
                  "Retrait rapide de vos gains",
                  "Offres exclusives",
                  "Programme de fidélité",
                ].map((b) => (
                  <div key={b} className="flex items-center gap-3 text-xs font-bold text-white">
                    <div className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-black shrink-0">
                      ✓
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* COMMENCER À JOUER CTA */}
              <button
                onClick={() => setCurrentStep(5)}
                className="relative z-10 w-full py-3.5 bg-[var(--color-mj-red)] hover:bg-[#a00c17] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-xl transition-all cursor-pointer"
              >
                COMMENCER À JOUER
              </button>

            </div>
          </div>
        )}

        {/* STEP 5: MON PORTEFEUILLE (Dark Charter Aesthetics) */}
        {currentStep === 5 && (
          <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300 space-y-6">
            <div className="bg-[#04112c] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden">
              
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                <button
                  onClick={() => setCurrentStep(4)}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <span className="font-heading font-bold text-sm uppercase text-white tracking-wide">
                  Mon portefeuille
                </span>
                <div className="relative">
                  <Bell className="w-5 h-5 text-[var(--color-mj-gold)]" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500" />
                </div>
              </div>

              {/* Red Solde Principal Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#da151f] via-[#c01019] to-[#8d0a13] text-white shadow-xl border border-red-500/50 mb-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/80">
                    SOLDE PRINCIPAL
                  </span>
                  <Eye className="w-4 h-4 text-white/80" />
                </div>
                <div className="font-mono font-black text-3xl text-white mb-4 tracking-tight">
                  125 750 FCFA
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <Link href="/tickets">
                    <button className="w-full py-2.5 bg-white text-[#da151f] hover:bg-gray-100 font-heading font-black text-xs uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer">
                      RECHARGER
                    </button>
                  </Link>
                  <Link href="/tickets">
                    <button className="w-full py-2.5 bg-black/35 hover:bg-black/50 text-white font-heading font-extrabold text-xs uppercase tracking-wider rounded-full border border-white/20 transition-all cursor-pointer">
                      RETIRER
                    </button>
                  </Link>
                </div>
              </div>

              {/* Méthodes de paiement */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-gray-400 px-1">
                  Méthodes de paiement
                </h4>
                <div className="space-y-2">
                  {[
                    { name: "Wave", badge: "Connecté", color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30" },
                    { name: "Orange Money", badge: "Connecté", color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30" },
                    { name: "Free Money", badge: "Connecté", color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30" },
                    { name: "Carte bancaire (VISA)", badge: "VISA / Mastercard", color: "text-blue-400 bg-blue-500/15 border-blue-500/30" },
                  ].map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center justify-between p-3 rounded-2xl bg-white/5 border border-white/10 text-xs font-bold"
                    >
                      <span>{m.name}</span>
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded border ${m.color}`}>
                          {m.badge}
                        </span>
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historique des transactions */}
              <div className="space-y-2">
                <div className="flex items-center justify-between px-1">
                  <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-gray-400">
                    Historique des transactions
                  </h4>
                  <span className="text-[10px] font-mono text-[var(--color-mj-gold)] cursor-pointer hover:underline">
                    Voir tout
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  {[
                    { title: "Achat ticket Salaire Garanti", date: "02 Juin 2026 à 14:30", amount: "-2 000 FCFA", color: "text-red-400" },
                    { title: "Recharge - Wave", date: "02 Juin 2026 à 14:25", amount: "+10 000 FCFA", color: "text-emerald-400" },
                    { title: "Gain - Tirage Maison", date: "30 Mai 2026 à 16:15", amount: "+150 000 FCFA", color: "text-emerald-400" },
                  ].map((tx) => (
                    <div key={tx.title} className="flex items-center justify-between p-3 rounded-xl bg-white/5 border border-white/5">
                      <div>
                        <p className="font-bold text-white leading-tight">{tx.title}</p>
                        <span className="text-[9px] font-mono text-gray-400">{tx.date}</span>
                      </div>
                      <span className={`font-mono font-bold ${tx.color}`}>{tx.amount}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Go to games button */}
              <div className="pt-6 border-t border-white/10">
                <Link href="/#jeux">
                  <button className="w-full py-3.5 bg-[var(--color-mj-gold)] hover:bg-yellow-400 text-black font-heading font-black text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all cursor-pointer">
                    ACCÉDER À NOS JEUX
                  </button>
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
}


