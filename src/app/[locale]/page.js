// page.js
"use client";
import CreateCV from "@/components/cv-create/Create_CV";
import { useEffect } from "react";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("@/components/PdfViewer"), {
  ssr: false,
});

export default function LocaleHomePage({ params }) {
  useEffect(() => {
    // This helps ensure we don't have stale redirects
    window.history.replaceState(null, "", window.location.pathname);
  }, []);

  return (
    <div className="cv-parent">
      <CreateCV />
      {/* <Pdf_Container /> */}
      <div style={{ height: "90vh", marginTop: "30px" }}>
        <PdfViewer />
      </div>
    </div>
  );
}
