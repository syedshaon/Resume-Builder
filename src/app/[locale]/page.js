"use client";
import CreateCV from "@/components/cv-create/Create_CV";
import Pdf_Container from "@/components/cv-show/Pdf_Container";
import { useEffect } from "react";

export default function LocaleHomePage() {
  useEffect(() => {
    // This helps ensure we don't have stale redirects
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  return (
    <div className="cv-parent">
      <CreateCV />
      <Pdf_Container />
    </div>
  );
}
