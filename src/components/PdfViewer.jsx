"use client";

import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import CVDocument from "./pdfs/CVDocument";
import { useAuthContext } from "@/context/AuthContext";

const PdfViewer = () => {
  const { personalInfo, skills, otherInfo, education, experience, references, leftSkillVal, allLeftVal, design, iconElement } = useAuthContext();

  return (
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <CVDocument personalInfo={personalInfo} skills={skills} otherInfo={otherInfo} education={education} experience={experience} references={references} leftSkillVal={leftSkillVal} allLeftVal={allLeftVal} design={design} iconElement={iconElement} />
    </PDFViewer>
  );
};

export default PdfViewer;
