import React from "react";
import ShowPersonal from "./ShowPersonal";
import ShowExperience from "./ShowExperience";
import ShowEducatior from "./ShowEducation";
import ShowReferences from "./ShowReferences";
import ShowSkills from "./ShowSkills";
import ShowOthers from "./ShowOthers";

import { useAuthContext } from "@/context/AuthContext";

function Pdf_Container() {
  const { user, loading, personalInfo, setPersonalInfo, education, setEducation, experience, setExperience, references, setReferences, skills, setSkills, otherInfo, setOtherInfo, hColor, setHColor, cColor, setCColor, sColor, setSColor, fColor, setFColor, iColor, setIColor, edxColor, setEdxpColor, showEdit, setShowEdit, leftSkillVal, setLeftSkillVal, allLeftVal, setLeftVal } = useAuthContext();

  const imgShow = personalInfo.showAvatar ? "showImg" : "noShowImg";

  const noSkill = skills.visible || otherInfo.some((item) => item.visible) ? "" : ` noSkill `;
  const leftSkill = (skills.visible || otherInfo.some((item) => item.visible)) && leftSkillVal ? `leftSkill` : ` `;

  return (
    <div className="cv-show-wrapper" id="print" style={{ color: fColor }}>
      <div className={`cv-show ${noSkill} ${imgShow} ${leftSkill} ${allLeftVal && "allLeft"}`}>
        {/* <div className="cv-show leftSkill"> */}
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
