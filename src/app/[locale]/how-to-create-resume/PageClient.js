"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import { FaEdit, FaRobot, FaCloudDownloadAlt, FaMagic, FaQuestion } from "react-icons/fa";
import { useEffect } from "react";

export default function Page({ params }) {
  const { locale } = params;
  const { t, i18n } = useTranslation("about");
  const router = useRouter();

  // Sync the i18n instance with the current locale parameter
  useEffect(() => {
    if (i18n.language !== locale) {
      i18n.changeLanguage(locale);
    }
  }, [locale, i18n]);

  const switchLanguage = (newLocale) => {
    // Get current path and replace the locale part
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);

    // Change the language in i18n first, then navigate
    i18n.changeLanguage(newLocale).then(() => {
      router.push(newPath);
    });
  };

  const FeatureCard = ({ icon: Icon, titleKey, descriptionKey }) => (
    <div className="rounded-sm w-full md:max-w-[45%] md:w-1/2 mb-5 md:mb-0 grid grid-cols-12 grid-rows-3 md:grid-rows-2 border-gray-500 shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform">
      <div className="col-span-12 md:col-span-2 md:row-start-1 md:row-span-2 flex items-center justify-center">
        <Icon className="text-2xl" />
      </div>
      <div className="col-span-12 md:col-start-3 md:col-span-10 md:row-start-1 md:row-span-1 xl:-ml-5 text-center md:text-left">
        <p className="text-gray-950 font-semibold">{t(`common.${titleKey}`)}</p>
      </div>
      <div className="col-span-12 md:col-start-3 md:col-span-10 md:row-start-2 md:row-span-1 xl:-ml-5 text-center md:text-left">
        <p className="text-sm text-gray-600 font-light">{t(`common.${descriptionKey}`)}</p>
      </div>
    </div>
  );

  const InstructionSection = ({ titleKey, pointsKey }) => (
    <>
      <h2 className="text-2xl font-bold mt-6 mb-2">{t(`instructions.${titleKey}`)}</h2>
      <ul className="list-disc ml-6 mb-4">
        {t(`instructions.${pointsKey}`, { returnObjects: true }).map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </>
  );

  return (
    <>
      <div className="lang-toggle fixed top-0 right-0 flex items-center gap-5 bg-gray-200 py-5 w-screen justify-end">
        <div className="group relative">
          <Link href={`/${locale}`} className="cursor-pointer text-xl px-3 py-2 flex items-center">
            <FaEdit className="text-gray-700 hover:text-gray-950 transition-all w-10" />
            <span className="hidden md:block">{t("common.create_resume")}</span>
          </Link>
        </div>
        <div className="container toggle-container">
          <div className="switches-container">
            <input type="radio" id="switchMonthly" name="switchPlan" checked={locale === "bn"} onChange={() => switchLanguage("bn")} />
            <input type="radio" id="switchYearly" name="switchPlan" checked={locale === "en"} onChange={() => switchLanguage("en")} />
            <label htmlFor="switchMonthly">{t("common.language_bengali")}</label>
            <label htmlFor="switchYearly">{t("common.language_english")}</label>
            <div className="switch-wrapper">
              <div className="switch">
                <div>{t("common.language_bengali")}</div>
                <div>{t("common.language_english")}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 flex gap-4 flex-wrap flex-auto items-center justify-center">
        <FeatureCard icon={FaEdit} titleKey="edit_content" descriptionKey="edit_content_desc" />
        <FeatureCard icon={FaMagic} titleKey="personalize" descriptionKey="personalize_desc" />
        <FeatureCard icon={FaRobot} titleKey="auto_generate" descriptionKey="auto_generate_desc" />

        <FeatureCard icon={FaQuestion} titleKey="how_to" descriptionKey="how_to_desc" />
      </div>

      <div className="px-4 py-8 container max-w-[900px] mx-auto mt-10 mb-28">
        <h1 className="text-3xl font-bold mb-4">{t("instructions.title")}</h1>
        <p>
          <em className="font-bold">{t("instructions.tldr")}</em>
        </p>

        <Image priority className="my-20 max-w-[80%] mx-auto" width={900} height={555} alt="Button Introduction" src="/different-buttons.jpg" />

        <InstructionSection titleKey="add_content" pointsKey="add_content_points" />
        <Image className="my-20 max-w-[80%] mx-auto" width={900} height={490} alt="add image to cv resume" src="/add-image.png" />
        <Image className="my-20 max-w-[80%] mx-auto" width={900} height={415} alt="Add gap between parts of cv, resume" src="/gap.png" />

        <InstructionSection titleKey="customize" pointsKey="customize_points" />

        <InstructionSection titleKey="download" pointsKey="download_points" />

        <InstructionSection titleKey="signin" pointsKey="signin_points" />
        <InstructionSection titleKey="caution" pointsKey="caution_points" />
      </div>

      <footer className="w-full flex justify-center my-5">
        Made with ❤️ by
        <a href="https://github.com/syedshaon" target="_blank" rel="noopener noreferrer">
          &nbsp; Mashi
        </a>
      </footer>
    </>
  );
}
