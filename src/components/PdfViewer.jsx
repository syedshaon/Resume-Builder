"use client";

import React from "react";
import { PDFViewer } from "@react-pdf/renderer";
import CVDocument from "./pdfs/CVDocument";
import { useAuthContext } from "@/context/AuthContext";

const PdfViewer = () => {
  const { personalInfo, skills, otherInfo, education, experience, references, sColor, fColor, edxColor, leftSkillVal, allLeftVal, design } = useAuthContext();

  return (
    <PDFViewer style={{ width: "100%", height: "100%" }}>
      <CVDocument personalInfo={personalInfo} skills={skills} otherInfo={otherInfo} education={education} experience={experience} references={references} sColor={sColor} fColor={fColor} edxColor={edxColor} leftSkillVal={leftSkillVal} allLeftVal={allLeftVal} design={design} />
    </PDFViewer>
  );
};

export default PdfViewer;
