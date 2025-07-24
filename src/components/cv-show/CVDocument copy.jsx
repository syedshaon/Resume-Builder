// CVDocument.js
import React from "react";
import { Document, Page, StyleSheet } from "@react-pdf/renderer";
import PersonalPDF from "./PersonalPDF";
import ExperiencePDF from "./ExperiencePDF";
import EducationPDF from "./EducationPDF";
import ReferencesPDF from "./ReferencesPDF";
import SkillsPDF from "./SkillsPDF";
import OthersPDF from "./OthersPDF";

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#FFFFFF",
    padding: 40,
  },
  mainContent: {
    flex: 2,
    paddingRight: 15,
  },
  sideContent: {
    flex: 1,
    backgroundColor: "#f3f3f3", // Default side color
    padding: 10,
  },
});

const CVDocument = ({ personalInfo, skills, otherInfo, education, experience, references, sColor, fColor, edxColor, leftSkillVal, allLeftVal }) => {
  const hasSkills = skills.visible || otherInfo.some((item) => item.visible);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Use a conditional layout based on your preferences */}
        {allLeftVal ? (
          <>
            <div style={{ flex: 1 }}>
              <PersonalPDF personalInfo={personalInfo} />
              <div style={{ backgroundColor: edxColor }}>
                <ExperiencePDF experience={experience} />
                <EducationPDF education={education} />
                <ReferencesPDF references={references} />
              </div>
              {hasSkills && (
                <div style={{ backgroundColor: sColor }}>
                  <SkillsPDF skills={skills} />
                  <OthersPDF otherInfo={otherInfo} />
                </div>
              )}
            </div>
          </>
        ) : (
          <>
            <div style={{ flex: hasSkills && leftSkillVal ? 2 : 1 }}>
              <PersonalPDF personalInfo={personalInfo} />
              <div style={{ backgroundColor: edxColor }}>
                <ExperiencePDF experience={experience} />
                <EducationPDF education={education} />
                <ReferencesPDF references={references} />
              </div>
            </div>

            {hasSkills && (
              <div style={{ flex: 1, backgroundColor: sColor }}>
                <SkillsPDF skills={skills} />
                <OthersPDF otherInfo={otherInfo} />
              </div>
            )}
          </>
        )}
      </Page>
    </Document>
  );
};

export default CVDocument;
