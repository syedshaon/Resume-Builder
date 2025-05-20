// src/context/I18nProviderClient.js - New file for client-side i18n initialization
"use client";
import { useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, I18nextProvider } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Cookies from "js-cookie";

// Load translations manually
import enCommon from "@/locales/en/common.json";
import bnCommon from "@/locales/bn/common.json";
import enAbout from "@/locales/en/about.json";
import bnAbout from "@/locales/bn/about.json";

// This setup will only run once on the client
let initialized = false;

export default function I18nProviderClient({ children, locale }) {
  useEffect(() => {
    // Set up i18n configuration
    if (!initialized) {
      i18n
        .use(LanguageDetector)
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
          lng: locale,
          fallbackLng: "en",
          supportedLngs: ["en", "bn"],
          ns: ["common", "about"],
          defaultNS: "common",
          interpolation: {
            escapeValue: false,
          },
          react: {
            useSuspense: false,
          },
          detection: {
            order: ["querystring", "cookie", "localStorage", "navigator"],
            caches: ["cookie", "localStorage"],
          },
        });

      initialized = true;
    }

    // Sync i18n instance with URL locale
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
      // Set cookie for middleware to use
      Cookies.set("NEXT_LOCALE", locale, { expires: 365 });
    }
  }, [locale]);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
