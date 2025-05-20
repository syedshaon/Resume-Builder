import { Roboto } from "next/font/google";
import "@/components/scss/styles.scss";
import { AuthContextProvider } from "@/context/AuthContext";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import I18nProviderClient from "@/context/I18nProviderWrapper";
import "./globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"], display: "swap" });

export const metadata = {
  title: "Resume Builder",
  description: "Free Colorful Resume & CV Builder",
  author: "Syed Mashiur Rahman",
  keywords: "resume, CV, builder, colorful",
  image: "/resume_lg.png",
  url: "https://resume-ez.netlify.app/",
  siteName: "Resume Builder",
};

export default function RootLayout({ children, params }) {
  // Since this is the root layout, we won't have locale from params here
  // The locale will be available in the [locale] layout
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className={roboto.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
