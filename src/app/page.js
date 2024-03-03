"use client";

import CreateCV from "@/components/cv-create/Create_CV";
import Pdf_Container from "@/components/cv-show/Pdf_Container";

function page() {
  return (
    <div className="cv-parent">
      <CreateCV />

      <Pdf_Container />
    </div>
  );
}

export default page;
