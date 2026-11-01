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
  Bell,
  Upload,
  X,
} from "lucide-react";
import { toast } from "sonner";
import { useLanguage } from "@/i18n/LanguageContext";

type Step = 1 | 2 | 3 | 4 | 5;

export default function InscriptionPage() {
  const { t } = useLanguage();
  const ins = t.inscriptionPage;

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
      const interval = setInterval(() => setOtpTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [currentStep, otpTimer]);

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!over18 || !acceptTerms) {
      toast.error(ins.toastAcceptTerms);
      return;
    }
    toast.success(ins.toastSmsSent);
    setCurrentStep(2);
  };

  const handleOtpChange = (index: number, value: string) => {
    if (value.length > 1) return;
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      nextInput?.focus();
    }
  };

  const handleStep2Submit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(ins.toastPhoneVerified);
    setCurrentStep(3);
  };

  const handleStep3Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rectoFile && !versoFile && !selfieFile) {
      toast.info(ins.toastAutoDemo);
    }
    toast.success(ins.toastDocsVerified);
    setCurrentStep(4);
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + " B";
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + " KB";
    return (bytes / (1024 * 1024)).toFixed(1) + " MB";
  };

  return (
    <div className="min-h-screen bg-[#021a3c] text-white pt-24 pb-32">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Step Stepper Progress Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between max-w-2xl mx-auto mb-4 px-2">
            {ins.steps.map((stepTitle, index) => {
              const stepNum = (index + 1) as Step;
              return (
                <button
                  key={stepNum}
                  type="button"
                  onClick={() => setCurrentStep(stepNum)}
                  className={`flex flex-col items-center gap-1 cursor-pointer transition-all min-w-[44px] min-h-[44px] justify-center ${
                    currentStep === stepNum
                      ? "text-[#fbb505] font-bold scale-105"
                      : currentStep > stepNum
                      ? "text-white font-semibold"
                      : "text-gray-400"
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-heading text-xs font-bold transition-all ${
                      currentStep === stepNum
                        ? "bg-[#fbb505] text-[#021a3c] shadow-md"
                        : currentStep > stepNum
                        ? "bg-[#da151f] text-white"
                        : "bg-white/10 text-gray-300 border border-white/10"
                    }`}
                  >
                    {currentStep > stepNum ? "✓" : stepNum}
                  </div>
                  <span className="text-[10px] hidden sm:block font-mono uppercase tracking-tight">
                    {stepTitle}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden max-w-2xl mx-auto">
            <div
              className="bg-gradient-to-r from-[#fbb505] to-[#da151f] h-full transition-all duration-500"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* STEP 1: CRÉATION DE COMPTE */}
        {currentStep === 1 && (
          <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-[#102a58] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden">
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
                <p className="text-xs font-mono text-gray-200">{ins.slogan}</p>
              </div>

              {/* Form Box */}
              <div className="bg-[#021a3c] text-white rounded-2xl p-6 shadow-xl border border-white/10 space-y-4">
                <div>
                  <h2 className="font-heading font-black text-xl text-white uppercase tracking-wide">
                    {ins.createAccountTitle}
                  </h2>
                  <p className="text-xs text-gray-300 font-medium">
                    {ins.fillInfoSub}
                  </p>
                </div>

                <form onSubmit={handleStep1Submit} className="space-y-3.5">
                  {/* Prénom */}
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={prenom}
                      onChange={(e) => setPrenom(e.target.value)}
                      placeholder={ins.firstNamePlaceholder}
                      required
                      className="w-full min-h-[44px] pl-10 pr-3 py-2.5 rounded-xl border border-white/15 bg-[#102a58]/50 text-xs font-medium text-white placeholder-gray-400 focus:border-[#fbb505] focus:ring-1 focus:ring-[#fbb505] outline-none"
                    />
                  </div>

                  {/* Nom */}
                  <div className="relative">
                    <User className="w-4 h-4 text-gray-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      value={nom}
                      onChange={(e) => setNom(e.target.value)}
                      placeholder={ins.lastNamePlaceholder}
                      required
                      className="w-full min-h-[44px] pl-10 pr-3 py-2.5 rounded-xl border border-white/15 bg-[#102a58]/50 text-xs font-medium text-white placeholder-gray-400 focus:border-[#fbb505] focus:ring-1 focus:ring-[#fbb505] outline-none"
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
                      className="w-full min-h-[44px] pl-10 pr-3 py-2.5 rounded-xl border border-white/15 bg-[#102a58]/50 text-xs font-mono font-bold text-white placeholder-gray-400 focus:border-[#fbb505] focus:ring-1 focus:ring-[#fbb505] outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="w-4 h-4 text-gray-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={ins.emailOptionalPlaceholder}
                      className="w-full min-h-[44px] pl-10 pr-3 py-2.5 rounded-xl border border-white/15 bg-[#102a58]/50 text-xs font-medium text-white placeholder-gray-400 focus:border-[#fbb505] focus:ring-1 focus:ring-[#fbb505] outline-none"
                    />
                  </div>

                  {/* Mot de passe */}
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={ins.passwordPlaceholder}
                      required
                      className="w-full min-h-[44px] pl-10 pr-10 py-2.5 rounded-xl border border-white/15 bg-[#102a58]/50 text-xs font-medium text-white placeholder-gray-400 focus:border-[#fbb505] focus:ring-1 focus:ring-[#fbb505] outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white p-2 cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {/* Confirmer le mot de passe */}
                  <div className="relative">
                    <Lock className="w-4 h-4 text-gray-300 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type={showPassword ? "text" : "password"}
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder={ins.confirmPasswordPlaceholder}
                      required
                      className="w-full min-h-[44px] pl-10 pr-10 py-2.5 rounded-xl border border-white/15 bg-[#102a58]/50 text-xs font-medium text-white placeholder-gray-400 focus:border-[#fbb505] focus:ring-1 focus:ring-[#fbb505] outline-none"
                    />
                  </div>

                  {/* Checkboxes */}
                  <div className="space-y-2 pt-1 text-left">
                    <label className="flex items-center gap-2 cursor-pointer min-h-[32px]">
                      <input
                        type="checkbox"
                        checked={over18}
                        onChange={(e) => setOver18(e.target.checked)}
                        className="w-4 h-4 accent-[#da151f] rounded"
                      />
                      <span className="text-xs font-semibold text-gray-200">
                        {ins.over18Label}
                      </span>
                    </label>

                    <label className="flex items-start gap-2 cursor-pointer min-h-[32px]">
                      <input
                        type="checkbox"
                        checked={acceptTerms}
                        onChange={(e) => setAcceptTerms(e.target.checked)}
                        className="w-4 h-4 accent-[#da151f] rounded mt-0.5"
                      />
                      <span className="text-xs text-gray-200 leading-tight">
                        {ins.acceptTermsPrefix}
                        <strong className="text-[#fbb505]">
                          {ins.acceptTermsBold}
                        </strong>
                      </span>
                    </label>
                  </div>

                  {/* S'INSCRIRE CTA */}
                  <button
                    type="submit"
                    className="w-full min-h-[48px] py-3.5 mt-2 bg-[#da151f] hover:bg-[#a00c17] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    {ins.signUpCta}
                  </button>
                </form>

                <div className="text-center pt-2 border-t border-white/10">
                  <span className="text-xs text-gray-300">
                    {ins.alreadyAccount}{" "}
                    <Link
                      href="/compte"
                      className="font-bold text-[#fbb505] hover:underline"
                    >
                      {ins.loginLink}
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: VÉRIFICATION OTP */}
        {currentStep === 2 && (
          <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-[#102a58] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <span className="font-heading font-bold text-sm uppercase text-white tracking-wide">
                  {ins.step2Header}
                </span>
                <User className="w-5 h-5 text-[#fbb505]" />
              </div>

              {/* Graphic Mockup */}
              <div className="my-6 text-center">
                <div className="w-20 h-20 rounded-3xl bg-[#021a3c] border border-[#fbb505]/40 flex items-center justify-center mx-auto mb-4 relative">
                  <Smartphone className="w-10 h-10 text-[#fbb505]" />
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-[#da151f] text-white flex items-center justify-center text-xs font-bold shadow-md">
                    ✓
                  </div>
                </div>
                <p className="text-xs text-gray-200">{ins.codeSentTo}</p>
                <p className="font-mono font-extrabold text-sm text-[#fbb505] mt-0.5">
                  {phone}
                </p>
              </div>

              {/* Form Box */}
              <form
                onSubmit={handleStep2Submit}
                className="bg-[#021a3c] text-white rounded-2xl p-6 shadow-xl border border-white/10 space-y-5 text-center"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-gray-200 block">
                  {ins.enter6Digits}
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
                      className="w-10 h-12 sm:w-11 sm:h-13 rounded-xl border border-white/20 text-center font-mono font-black text-lg text-white bg-[#102a58]/60 focus:border-[#fbb505] focus:ring-2 focus:ring-[#fbb505]/30 outline-none"
                    />
                  ))}
                </div>

                <div className="text-xs font-mono text-gray-300">
                  {ins.resendIn}{" "}
                  <strong className="text-[#fbb505]">
                    00:{otpTimer < 10 ? `0${otpTimer}` : otpTimer}
                  </strong>
                </div>

                {/* VALIDER Button */}
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 bg-[#da151f] hover:bg-[#a00c17] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  {ins.validateCta}
                </button>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setOtpTimer(45);
                      toast.info(ins.toastCodeResent);
                    }}
                    className="text-xs text-gray-300 hover:text-[#fbb505] transition-colors cursor-pointer min-h-[44px]"
                  >
                    {ins.didNotReceive}{" "}
                    <strong className="text-[#fbb505] underline">
                      {ins.resendCode}
                    </strong>
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* STEP 3: VÉRIFICATION D'IDENTITÉ (KYC) */}
        {currentStep === 3 && (
          <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-[#102a58] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <span className="font-heading font-bold text-sm uppercase text-white tracking-wide">
                  {ins.step3Header}
                </span>
                <Shield className="w-5 h-5 text-[#fbb505]" />
              </div>

              <p className="text-xs text-gray-200 text-center mb-5 leading-relaxed">
                {ins.kycIntro}
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
                    toast.success(
                      `${ins.toastFrontLoaded} ${e.target.files[0].name}`
                    );
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
                    toast.success(
                      `${ins.toastBackLoaded} ${e.target.files[0].name}`
                    );
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
                    toast.success(
                      `${ins.toastSelfieLoaded} ${e.target.files[0].name}`
                    );
                  }
                }}
              />

              {/* Form Box */}
              <form
                onSubmit={handleStep3Submit}
                className="bg-[#021a3c] text-white rounded-2xl p-6 shadow-xl border border-white/10 space-y-5 text-left"
              >
                {/* 1. Choisir le type de document */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-200 block mb-2">
                    {ins.docTypeLabel}
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {(
                      [
                        { id: "cni", label: ins.docCni, icon: FileText },
                        { id: "passport", label: ins.docPassport, icon: Shield },
                        {
                          id: "cedeaO",
                          label: ins.docEcowas,
                          icon: CreditCard,
                        },
                      ] as const
                    ).map((doc) => {
                      const DocIcon = doc.icon;
                      const isSelected = docType === doc.id;
                      return (
                        <button
                          key={doc.id}
                          type="button"
                          onClick={() => setDocType(doc.id)}
                          className={`p-3 rounded-xl border flex flex-col items-center justify-center gap-1.5 text-center transition-all cursor-pointer min-h-[72px] ${
                            isSelected
                              ? "border-[#fbb505] bg-[#fbb505]/15 text-[#fbb505] font-bold shadow-sm"
                              : "border-white/10 bg-[#102a58]/50 text-gray-300 hover:bg-white/5"
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

                {/* 2. Joindre les photos du document */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-200 block">
                      {ins.attachPhotosLabel}
                    </label>
                    <span className="text-[10px] font-mono text-gray-300">
                      {ins.formatsNote}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {/* Recto Upload Dropzone */}
                    <div
                      onClick={() => rectoInputRef.current?.click()}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        rectoFile
                          ? "border-[#fbb505]/60 bg-[#fbb505]/10 text-[#fbb505]"
                          : "border-dashed border-white/20 bg-[#102a58]/40 hover:border-[#fbb505]/60 text-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            rectoFile
                              ? "bg-[#fbb505]/20 text-[#fbb505]"
                              : "bg-white/10 text-gray-300"
                          }`}
                        >
                          <Upload className="w-4 h-4" />
                        </div>
                        <div className="text-left min-w-0">
                          <p className="text-xs font-bold leading-tight truncate">
                            {rectoFile ? rectoFile.name : ins.dropFront}
                          </p>
                          <span className="text-[10px] text-gray-300">
                            {rectoFile
                              ? formatFileSize(rectoFile.size)
                              : ins.clickOrDrag}
                          </span>
                        </div>
                      </div>
                      {rectoFile ? (
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] font-mono font-bold text-[#fbb505] bg-[#fbb505]/20 px-2 py-0.5 rounded border border-[#fbb505]/30">
                            {ins.frontValidated}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setRectoFile(null);
                            }}
                            className="p-1 text-gray-300 hover:text-[#da151f]"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] font-mono text-[#fbb505] underline shrink-0">
                          {ins.browse}
                        </span>
                      )}
                    </div>

                    {/* Verso Upload Dropzone */}
                    <div
                      onClick={() => versoInputRef.current?.click()}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                        versoFile
                          ? "border-[#fbb505]/60 bg-[#fbb505]/10 text-[#fbb505]"
                          : "border-dashed border-white/20 bg-[#102a58]/40 hover:border-[#fbb505]/60 text-gray-200"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                            versoFile
                              ? "bg-[#fbb505]/20 text-[#fbb505]"
                              : "bg-white/10 text-gray-300"
                          }`}
                        >
                          <Upload className="w-4 h-4" />
                        </div>
                        <div className="text-left min-w-0">
                          <p className="text-xs font-bold leading-tight truncate">
                            {versoFile ? versoFile.name : ins.dropBack}
                          </p>
                          <span className="text-[10px] text-gray-300">
                            {versoFile
                              ? formatFileSize(versoFile.size)
                              : ins.clickOrDrag}
                          </span>
                        </div>
                      </div>
                      {versoFile ? (
                        <div className="flex items-center gap-2 shrink-0">
                          <span className="text-[10px] font-mono font-bold text-[#fbb505] bg-[#fbb505]/20 px-2 py-0.5 rounded border border-[#fbb505]/30">
                            {ins.backValidated}
                          </span>
                          <button
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setVersoFile(null);
                            }}
                            className="p-1 text-gray-300 hover:text-[#da151f]"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ) : (
                        <span className="text-[10px] font-mono text-[#fbb505] underline shrink-0">
                          {ins.browse}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* 3. Selfie en direct Dropzone */}
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-gray-200 block mb-2">
                    {ins.liveSelfieLabel}
                  </label>
                  <div
                    onClick={() => selfieInputRef.current?.click()}
                    className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-2 ${
                      selfieFile
                        ? "border-[#fbb505]/60 bg-[#fbb505]/10 text-[#fbb505]"
                        : "border-dashed border-white/20 bg-[#102a58]/40 hover:border-[#fbb505]/60 text-gray-200"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div
                        className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${
                          selfieFile
                            ? "bg-[#fbb505]/20 text-[#fbb505]"
                            : "bg-white/10 text-gray-300"
                        }`}
                      >
                        <Camera className="w-5 h-5" />
                      </div>
                      <div className="text-left min-w-0">
                        <p className="text-xs font-bold leading-tight truncate">
                          {selfieFile ? selfieFile.name : ins.attachSelfie}
                        </p>
                        <span className="text-[10px] text-gray-300">
                          {selfieFile
                            ? formatFileSize(selfieFile.size)
                            : ins.clearFaceNote}
                        </span>
                      </div>
                    </div>
                    {selfieFile ? (
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-mono font-bold text-[#fbb505] bg-[#fbb505]/20 px-2 py-0.5 rounded border border-[#fbb505]/30">
                          {ins.selfieValidated}
                        </span>
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelfieFile(null);
                          }}
                          className="p-1 text-gray-300 hover:text-[#da151f]"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <span className="text-[10px] font-mono text-[#fbb505] underline shrink-0">
                        {ins.browse}
                      </span>
                    )}
                  </div>
                </div>

                {/* SOUMETTRE Button */}
                <button
                  type="submit"
                  className="w-full min-h-[48px] py-3.5 mt-2 bg-[#da151f] hover:bg-[#a00c17] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-lg transition-all cursor-pointer"
                >
                  {ins.submitDocsCta}
                </button>
              </form>
            </div>
          </div>
        )}

        {/* STEP 4: VALIDATION KYC */}
        {currentStep === 4 && (
          <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300">
            <div className="bg-[#102a58] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fbb505_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />

              {/* Validated Icon */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-[#fbb505]/20 border-2 border-[#fbb505] text-[#fbb505] flex items-center justify-center mx-auto mb-4 shadow-[0_0_40px_rgba(251,181,5,0.35)]">
                <CheckCircle2 className="w-14 h-14" />
              </div>

              <h2 className="relative z-10 font-heading font-black text-2xl sm:text-3xl text-[#fbb505] uppercase tracking-tight mb-2">
                {ins.congratsTitle}
              </h2>
              <p className="relative z-10 text-sm text-gray-200 mb-6">
                {ins.identityVerifiedSub}
              </p>

              {/* Benefits Checklist Box */}
              <div className="relative z-10 bg-[#021a3c] border border-white/10 rounded-2xl p-5 text-left space-y-3 mb-6">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#fbb505] block mb-1">
                  {ins.accessListTitle}
                </span>

                {ins.benefits.map((b) => (
                  <div
                    key={b}
                    className="flex items-center gap-3 text-xs font-bold text-white"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#fbb505] text-[#021a3c] flex items-center justify-center text-[10px] font-black shrink-0">
                      ✓
                    </div>
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* COMMENCER À JOUER CTA */}
              <button
                type="button"
                onClick={() => setCurrentStep(5)}
                className="relative z-10 w-full min-h-[48px] py-3.5 bg-[#da151f] hover:bg-[#a00c17] text-white font-heading font-black text-xs sm:text-sm uppercase tracking-widest rounded-xl shadow-xl transition-all cursor-pointer"
              >
                {ins.startPlayingCta}
              </button>
            </div>
          </div>
        )}

        {/* STEP 5: MON PORTEFEUILLE */}
        {currentStep === 5 && (
          <div className="max-w-md mx-auto animate-in fade-in zoom-in-95 duration-300 space-y-6">
            <div className="bg-[#102a58] text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/15 relative overflow-hidden">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
                <button
                  type="button"
                  onClick={() => setCurrentStep(4)}
                  className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/15 text-white transition-colors cursor-pointer"
                >
                  <ArrowLeft className="w-5 h-5" />
                </button>
                <span className="font-heading font-bold text-sm uppercase text-white tracking-wide">
                  {ins.myWalletHeader}
                </span>
                <div className="relative">
                  <Bell className="w-5 h-5 text-[#fbb505]" />
                  <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-[#da151f]" />
                </div>
              </div>

              {/* Red Solde Principal Card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-[#da151f] to-[#a00c17] text-white shadow-xl border border-white/20 mb-6">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white/85">
                    {ins.mainBalance}
                  </span>
                  <Eye className="w-4 h-4 text-white/85" />
                </div>
                <div className="font-mono font-black text-3xl text-white mb-4 tracking-tight">
                  125 750 FCFA
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <Link href="/transactions">
                    <button
                      type="button"
                      className="w-full min-h-[44px] py-2.5 bg-white text-[#da151f] hover:bg-gray-100 font-heading font-black text-xs uppercase tracking-wider rounded-full shadow-md transition-all cursor-pointer"
                    >
                      {ins.topUp}
                    </button>
                  </Link>
                  <Link href="/transactions">
                    <button
                      type="button"
                      className="w-full min-h-[44px] py-2.5 bg-[#021a3c]/60 hover:bg-[#021a3c]/80 text-white font-heading font-extrabold text-xs uppercase tracking-wider rounded-full border border-white/20 transition-all cursor-pointer"
                    >
                      {ins.withdraw}
                    </button>
                  </Link>
                </div>
              </div>

              {/* Méthodes de paiement */}
              <div className="space-y-2 mb-6">
                <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-gray-300 px-1">
                  {ins.paymentMethodsTitle}
                </h4>
                <div className="space-y-2">
                  {[
                    {
                      name: "Wave",
                      badge: ins.connectedBadge,
                      color:
                        "text-[#fbb505] bg-[#fbb505]/15 border-[#fbb505]/30",
                    },
                    {
                      name: "Orange Money",
                      badge: ins.connectedBadge,
                      color:
                        "text-[#fbb505] bg-[#fbb505]/15 border-[#fbb505]/30",
                    },
                    {
                      name: "Free Money",
                      badge: ins.connectedBadge,
                      color:
                        "text-[#fbb505] bg-[#fbb505]/15 border-[#fbb505]/30",
                    },
                    {
                      name: ins.bankCardLabel,
                      badge: "VISA / Mastercard",
                      color: "text-white bg-white/10 border-white/20",
                    },
                  ].map((m) => (
                    <div
                      key={m.name}
                      className="flex items-center justify-between p-3 rounded-2xl bg-[#021a3c] border border-white/10 text-xs font-bold"
                    >
                      <span>{m.name}</span>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded border ${m.color}`}
                        >
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
                  <h4 className="text-xs font-heading font-bold uppercase tracking-wider text-gray-300">
                    {ins.txHistoryTitle}
                  </h4>
                  <Link
                    href="/transactions"
                    className="text-[10px] font-mono text-[#fbb505] hover:underline"
                  >
                    {ins.seeAll}
                  </Link>
                </div>

                <div className="space-y-2 text-xs">
                  {ins.demoTxs.map((tx) => (
                    <div
                      key={tx.title}
                      className="flex items-center justify-between p-3 rounded-xl bg-[#021a3c] border border-white/10 gap-2"
                    >
                      <div>
                        <p className="font-bold text-white leading-tight">
                          {tx.title}
                        </p>
                        <span className="text-[9px] font-mono text-gray-300">
                          {tx.date}
                        </span>
                      </div>
                      <span
                        className={`font-mono font-bold shrink-0 ${
                          tx.positive ? "text-[#fbb505]" : "text-[#da151f]"
                        }`}
                      >
                        {tx.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Go to games button */}
              <div className="pt-6 border-t border-white/10 mt-6">
                <Link href="/#jeux">
                  <button
                    type="button"
                    className="w-full min-h-[48px] py-3.5 bg-[#fbb505] hover:opacity-90 text-[#021a3c] font-heading font-black text-xs uppercase tracking-widest rounded-xl shadow-lg transition-all cursor-pointer"
                  >
                    {ins.goToGamesCta}
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
