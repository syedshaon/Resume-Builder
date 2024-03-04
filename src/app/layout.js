import { Roboto } from "next/font/google";
import "./globals.css";
import "@/components/scss/styles.scss";
import { AuthContextProvider } from "@/context/AuthContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "Resume Builder",
  description: "Free Colorful Resuem & CV Builder",
  author: "Syed Mashiur Rahman",
  keywords: "resume, CV, builder, colorful",
  image: "/resume_lg.png",
  url: "https://resume-ez.netlify.app/",
  siteName: "Resume Builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div>
          <AuthContextProvider>{children}</AuthContextProvider>
        </div>
      </body>
    </html>
  );
}
