// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

// Load translations manually
import enCommon from "@/locales/en/common.json";
import bnCommon from "@/locales/bn/common.json";
import enAbout from "@/locales/en/about.json";
import bnAbout from "@/locales/bn/about.json";

i18n
  .use(LanguageDetector) // Detect from browser, localStorage, etc.
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        common: enCommon,
        about: enAbout,
      },
      bn: {
        common: bnCommon,
        about: bnAbout,
      },
    },
    fallbackLng: "en",
    supportedLngs: ["en", "bn"],
    ns: ["common", "about"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: ["querystring", "localStorage", "cookie", "navigator"],
      caches: ["localStorage"],
    },
  });

export default i18n;
