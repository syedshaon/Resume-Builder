"use client";
import { useEffect, useState } from "react";
import { collection, addDoc, doc, where, updateDoc, getDoc, QuerySnapshot, query, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

import { useAuthContext } from "@/context/AuthContext";

export default function StoreData() {
  const [popupIsVisible, setPopupIsVisible] = useState(false);
  const { user, loading, personalInfo, setPersonalInfo, education, setEducation, experience, setExperience, references, setReferences, skills, setSkills, otherInfo, setOtherInfo, iconElement, setIconElement, showEdit, setShowEdit, leftSkillVal, setLeftSkillVal, allLeftVal, setLeftVal } = useAuthContext();
  const storeUser = async (newPersonalInfo, newEducation, newExperience, newReferences, newSkills, newOtherInfo, newIconElement, newShowEdit, newLeftSkillVal, newAllLeftVal) => {
    // console.log(newPersonalInfo.name);
    setPopupIsVisible(true);

    // Check if a document with the user's email exists
    const userQuery = query(collection(db, "userData"), where("email", "==", user.email));
    const userQuerySnapshot = await getDocs(userQuery);

    if (userQuerySnapshot.empty) {
      // If no document exists, add a new one
      await addDoc(collection(db, "userData"), {
        email: user.email,
        data: {
          personalInfo: newPersonalInfo,
          education: newEducation,
          experience: newExperience,
          references: newReferences,
          skills: newSkills,
          otherInfo: newOtherInfo,

          iconElement: newIconElement,

          showEdit: newShowEdit,
          leftSkillVal: newLeftSkillVal,
          allLeftVal: newAllLeftVal,
        },
      });
      // console.log("Inserted data for the first time");
    } else {
      // If a document exists, update the existing one
      const userDoc = userQuerySnapshot.docs[0];
      await updateDoc(doc(db, "userData", userDoc.id), {
        data: {
          personalInfo: newPersonalInfo,
          education: newEducation,
          experience: newExperience,
          references: newReferences,
          skills: newSkills,
          otherInfo: newOtherInfo,

          iconElement: newIconElement,

          showEdit: newShowEdit,
          leftSkillVal: newLeftSkillVal,
          allLeftVal: newAllLeftVal,
        },
      });

      // console.log("Updated data successfully!");
    }

    setTimeout(() => {
      setPopupIsVisible(false);
    }, 5000);
  };

  const storeUserDataInLocalStorage = (newPersonalInfo, newEducation, newExperience, newReferences, newSkills, newOtherInfo, newIconElement, newShowEdit, newLeftSkillVal, newAllLeftVal) => {
    // Save data to localStorage
    setPopupIsVisible(true);
    const userDataForLocalStorage = {
      personalInfo: newPersonalInfo,
      education: newEducation,
      experience: newExperience,
      references: newReferences,
      skills: newSkills,
      otherInfo: newOtherInfo,

      iconElement: newIconElement,

      showEdit: newShowEdit,
      leftSkillVal: newLeftSkillVal,
      allLeftVal: newAllLeftVal,
    };
    localStorage.setItem("userData", JSON.stringify(userDataForLocalStorage));
    setTimeout(() => {
      setPopupIsVisible(false);
    }, 5000);

    console.log("User data stored in localStorage successfully!");
  };

  // const [storedData, setStoredData] = useState("");

  const getUserDataByEmail = async () => {
    const q = query(collection(db, "userData"), where("email", "==", user.email));

    try {
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        console.log("No matching documents.");
        return null;
      }

      const userData = querySnapshot.docs[0].data();
      // setStoredData(userData);
      return userData; // Return the user data
    } catch (error) {
      console.error("Error getting user data:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const userData = await getUserDataByEmail();
      // console.log(userData.data);
      if (userData.data) {
        const userConfirms = window.confirm("Would you like to restore your previous CLOUD data? If Not, your previous data will get lost!");
        if (userConfirms) {
          setPersonalInfo(userData.data.personalInfo);
          setEducation(userData.data.education);
          setExperience(userData.data.experience);
          setReferences(userData.data.references);
          setSkills(userData.data.skills);
          setOtherInfo(userData.data.otherInfo);

          setIconElement(userData.data.iconElement);

          setShowEdit(userData.data.showEdit);
          setLeftSkillVal(userData.data.leftSkillVal);
          setLeftVal(userData.data.allLeftVal);
          // console.log("User data restored successfully!");
        } else {
          // console.log("User data restore Canceled!");
        }
      }
    };

    const restoreUserDataFromLocalStorage = () => {
      const userDataString = localStorage.getItem("userData");
      if (userDataString) {
        const userConfirms = window.confirm("Would you like to restore your previous LOCAL data? If Not, your previous data will get lost!");
        if (userConfirms) {
          const userData = JSON.parse(userDataString);
          setPersonalInfo(userData.personalInfo);
          setEducation(userData.education);
          setExperience(userData.experience);
          setReferences(userData.references);
          setSkills(userData.skills);
          setOtherInfo(userData.otherInfo);

          setIconElement(userData.iconElement);

          setShowEdit(userData.showEdit);
          setLeftSkillVal(userData.leftSkillVal);
          setLeftVal(userData.allLeftVal);
          console.log("User data restored from localStorage successfully!");
        }
      } else {
        console.log("No stored data in localStorage.");
      }
    };

    // if (!loading) {
    //   if (user) {
    //     fetchData();
    //   } else {
    //     restoreUserDataFromLocalStorage();
    //   }
    // }
  }, [user, loading, setPersonalInfo, setEducation, setExperience, setReferences, setSkills, setOtherInfo, setIconElement, setShowEdit, setLeftSkillVal, setLeftVal]);

  useEffect(() => {
    if (user) {
      const intervalId = setInterval(() => {
        storeUser(personalInfo, education, experience, references, skills, otherInfo, iconElement, showEdit, leftSkillVal, allLeftVal); // Run storeUser after 30 seconds
      }, 30000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    } else {
      const intervalId = setInterval(() => {
        storeUserDataInLocalStorage(personalInfo, education, experience, references, skills, otherInfo, iconElement, showEdit, leftSkillVal, allLeftVal); // Run storeUser after 30 seconds
      }, 30000);

      // Clean up the interval when the component unmounts
      return () => clearInterval(intervalId);
    }
  }, [user, loading, personalInfo, education, experience, references, skills, otherInfo, iconElement, showEdit, leftSkillVal, allLeftVal]);

  return (
    <>
      {popupIsVisible && (
        <button type="button" className="fixed z-50 top-4 right-4 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium text-white bg-gray-600 hover:bg-gray-500 focus:outline-none focus:border-gray-700 focus:shadow-outline-gray active:bg-gray-700 transition ease-in-out duration-150 cursor-not-allowed" disabled>
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {user ? "Saving to Cloud" : "Saving to Device"}
        </button>
      )}
    </>
  );
}
