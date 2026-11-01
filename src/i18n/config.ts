export type Locale = "fr" | "en";

export const DEFAULT_LOCALE: Locale = "fr";
export const SUPPORTED_LOCALES: Locale[] = ["fr", "en"];

export const LOCALE_STORAGE_KEY = "mj_lang";

export const LOCALE_LABELS: Record<
  Locale,
  { code: string; name: string; nativeName: string }
> = {
  fr: {
    code: "FR",
    name: "Français",
    nativeName: "Français",
  },
  en: {
    code: "EN",
    name: "English",
    nativeName: "English",
  },
};

