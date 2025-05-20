// src/app/[locale]/layout.js
import I18nProviderClient from "@/context/I18nProviderWrapper";
import { AuthContextProvider } from "@/context/AuthContext";

export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bn" }];
}

export default function LocaleLayout({ children, params }) {
  const { locale } = params;

  return (
    <I18nProviderClient locale={locale}>
      <AuthContextProvider>{children}</AuthContextProvider>
    </I18nProviderClient>
  );
}
