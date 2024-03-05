"use client";
import Header from "./Header";
import EducationForm from "./Education";
import ExperienceForm from "./Experience";
import PersonalInfoForm from "./PersonalInfo";
import ReferencesForm from "./References";
import SkillsForm from "./Skills";
import OtherInfoForm from "./OtherInfo";
import Personalize from "../cv-control/Personalize";

import { useAuthContext } from "@/context/AuthContext";
import { useEffect } from "react";
import StoreData from "../cv-control/StoreData";

export default function CreateCV() {
  const { personalInfo, showEdit } = useAuthContext();

  useEffect(() => {
    const personalInfoArrayString = JSON.stringify(personalInfo);

    localStorage.setItem("personalData", personalInfoArrayString);
  }, [personalInfo]);

  return (
    <div className="builder cv-create my-[30px]  self-start">
      <StoreData />
      <Header />
      <div className="personalize-area" style={{ display: !showEdit ? "block" : "none" }}>
        <Personalize />
      </div>
      <div className="edit-area" style={{ display: showEdit ? "block" : "none" }}>
        <PersonalInfoForm />
        <ExperienceForm />
        <EducationForm />

        <ReferencesForm />
        <SkillsForm />
        <OtherInfoForm />
      </div>
    </div>
  );
}
