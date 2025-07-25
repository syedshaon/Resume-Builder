// CVDocument.js
import React from "react";
import { Document, Page, StyleSheet, View } from "@react-pdf/renderer";
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
    padding: 50,
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

const CVDocument = ({ personalInfo, skills, otherInfo, education, experience, references, leftSkillVal, allLeftVal, design, iconElement }) => {
  const hasSkills = skills.visible || otherInfo.some((item) => item.visible);
  // const design = personalInfo.design || "Design5"; // Default to Design5 if not specified

  // console.log("personalInfo:", personalInfo);

  if (design === "Design1" || design === "Design2") {
    return (
      <Document title={`${personalInfo.name} Resume`}>
        <Page size="A4" style={styles.page}>
          <View style={{ flex: 1 }}>
            <PersonalPDF personalInfo={personalInfo} design={design} />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ width: "82%", paddingRight: "7%" }}>
                <ExperiencePDF experience={experience} iconElement={iconElement} />
                <EducationPDF education={education} iconElement={iconElement} />
                <ReferencesPDF references={references} />
              </View>

              <View style={{ width: "16%" }}>
                <SkillsPDF skills={skills} iconElement={iconElement} />
                <OthersPDF otherInfo={otherInfo} iconElement={iconElement} />
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  }

  if (design === "Design4" || design === "Design6") {
    return (
      <Document title={`${personalInfo.name} Resume`}>
        <Page size="A4" style={styles.page}>
          <View style={{ flex: 1 }}>
            <PersonalPDF personalInfo={personalInfo} design={design} />
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
              <View style={{ width: "16%" }}>
                <SkillsPDF skills={skills} iconElement={iconElement} />
                <OthersPDF otherInfo={otherInfo} iconElement={iconElement} />
              </View>

              <View style={{ width: "82%", paddingLeft: "7%" }}>
                <ExperiencePDF experience={experience} iconElement={iconElement} />
                <EducationPDF education={education} iconElement={iconElement} />
                <ReferencesPDF references={references} />
              </View>
            </View>
          </View>
        </Page>
      </Document>
    );
  }

  if (design === "Design5" || design === "Design3") {
    return (
      <Document title={`${personalInfo.name} Resume`}>
        <Page size="A4" style={styles.page}>
          <View style={{ flex: 1 }}>
            <PersonalPDF personalInfo={personalInfo} design={design} />
            <ExperiencePDF experience={experience} iconElement={iconElement} />
            <EducationPDF education={education} iconElement={iconElement} />
            <ReferencesPDF references={references} />
          </View>
        </Page>
      </Document>
    );
  }

  return null; // Return null if the design is not Design5
};

export default CVDocument;
