import ShowPersonal from "./ShowPersonal";
import ShowExperience from "./ShowExperience";
import ShowEducatior from "./ShowEducation";
import ShowReferences from "./ShowReferences";
import ShowSkills from "./ShowSkills";
import ShowOthers from "./ShowOthers";

import { useAuthContext } from "@/context/AuthContext";
import React, { useState, useEffect, useRef } from "react";

function Pdf_Container() {
  const { personalInfo, skills, otherInfo, sColor, fColor, edxColor, leftSkillVal, allLeftVal, education, experience, references } = useAuthContext();

  const imgShow = personalInfo.showAvatar ? "showImg" : "noShowImg";

  const noSkill = skills.visible || otherInfo.some((item) => item.visible) ? "" : ` noSkill `;
  const leftSkill = (skills.visible || otherInfo.some((item) => item.visible)) && leftSkillVal ? `leftSkill` : ` `;

  // Related to cv height

  const cvShowRef = useRef(null);
  const [cvShowHeight, setCvShowHeight] = useState(1127);

  useEffect(() => {
    const updateCvShowHeight = () => {
      const cvShow = cvShowRef.current;
      if (!cvShow) return;

      const contentHeight = cvShow.scrollHeight; // Get content height
      console.log("contentHeight", contentHeight);

      // Calculate the multiple of 1132 for the grid's height
      const multipleOf1800 = Math.ceil(contentHeight / 1127);

      // Set the grid's height
      setCvShowHeight(multipleOf1800 * 1127);
    };

    // Add height calculation initially and on content resize
    updateCvShowHeight();
    window.addEventListener("resize", updateCvShowHeight);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateCvShowHeight);
    };
  }, [cvShowRef, education, experience, personalInfo, references, otherInfo]);

  return (
    <div className="cv-show-wrapper" id="print" style={{ color: fColor }}>
      <div ref={cvShowRef} style={{ minHeight: `${cvShowHeight}px` }} className={`cv-show ${noSkill} ${imgShow} ${leftSkill} ${allLeftVal && "allLeft"}`}>
        <ShowPersonal />

        <div className="cv-child eduEx-wrapper" style={{ backgroundColor: edxColor }}>
          <ShowExperience />
          <ShowEducatior />
          <ShowReferences />
        </div>
        <div className="cv-child others" style={{ backgroundColor: sColor }}>
          <ShowSkills />
          <ShowOthers />
        </div>
      </div>
    </div>
  );
}

export default Pdf_Container;
