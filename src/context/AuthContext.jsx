"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import firebase_app from "@/firebase";

// Initialize Firebase auth instance
const auth = getAuth(firebase_app);

// Create the authentication context
export const AuthContext = createContext({});

// Custom hook to access the authentication context
export const useAuthContext = () => useContext(AuthContext);

export function AuthContextProvider({ children }) {
  // Set up state to track the authenticated user and loading status
  const [showEdit, setShowEdit] = useState(true);
  const [leftSkillVal, setLeftSkillVal] = useState(false);

  const [allLeftVal, setLeftVal] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [hColor, setHColor] = useState("#ffffff");
  const [edxColor, setEdxpColor] = useState("#ffffff");

  const [cColor, setCColor] = useState("#ffffff");
  const [sColor, setSColor] = useState("#ffffff");
  const [fColor, setFColor] = useState("#374151");
  const [iColor, setIColor] = useState("#374151");

  const [personalInfo, setPersonalInfo] = useState({
    name: "John Cina",
    title: "Front-End Developer",
    intro: "Love to code when it doesn't work. Other times I also code!",
    email: "johnC@gmail.com",
    phone: "01888-256545",
    web: "john-cina.com",
    address: "Rajuk, Dhaka",
    avatar: "https://ik.imagekit.io/odinbook/images%20(8)_iQjrTp9XA.jpg",
    showAvatar: true,
    expand: false,
  });
  const [education, setEducation] = useState([
    { id: 1, school: "United International University", degree: "BBA", result: "3.00", startDate: "Jan 2008", endDate: "Dec 2012", location: "Dhaka", summary: ["Best Student Award!", "First place on Science festival", ""], visible: true, expand: false },
    { id: 2, school: "United International University", degree: "BBA", result: "3.00", startDate: "Jan 2008", endDate: "Dec 2012", location: "Dhaka", summary: ["Best Student Award!", "First place on Science festival", ""], visible: true, expand: false },
  ]);

  const [experience, setExperience] = useState([
    { id: 1, company: "Stark Corp", jobTitle: "Junior Developer", startDate: "Jan 2020", endDate: "Jan 2023", location: "Dhaka", summary: ["PSD to HTML5, PSD to WordPress", "PSD to HTML5, PSD to WordPress", "PSD to HTML5, PSD to WordPress"], visible: true, expand: false },
    { id: 2, company: "Sama Corp", jobTitle: "Senior Developer", startDate: "Jan 2023", endDate: "Present", location: "Khulna", summary: ["PSD to HTML5, PSD to WordPress", "PSD to HTML5, PSD to WordPress", "PSD to HTML5, PSD to WordPress"], visible: true, expand: false },
  ]);

  const [references, setReferences] = useState([
    { id: 1, referer: "J.K. Singh", title: "CEO of Stark Corp.", phone: "555-888-999", visible: true, expand: false },
    { id: 2, referer: "Rubi Ray", title: "CTO of Stark Corp.", phone: "666-888-999", visible: true, expand: false },
  ]);
  const [skills, setSkills] = useState({ skills: ["JavaScript", "ReactJS", "MERN", "SCSS", "TailWindCSS", "Redux"], visible: true, expand: false });
  const [otherInfo, setOtherInfo] = useState([
    { id: 1, title: "Languages", summary: ["English", "Bengali"], visible: true, expand: false },
    { id: 2, title: "Hobbies", summary: ["Biking", "Watching Movies"], visible: true, expand: false },
  ]);

  useEffect(() => {
    // Subscribe to the authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        setUser(user);
      } else {
        // User is signed out
        setUser(null);
      }
      // Set loading to false once authentication state is determined
      setLoading(false);
    });

    // Unsubscribe from the authentication state changes when the component is unmounted
    return () => unsubscribe();
  }, []);

  // Provide the authentication context to child components
  return <AuthContext.Provider value={{ user, loading, personalInfo, setPersonalInfo, education, setEducation, experience, setExperience, references, setReferences, skills, setSkills, otherInfo, setOtherInfo, hColor, setHColor, cColor, setCColor, sColor, setSColor, fColor, setFColor, iColor, setIColor, edxColor, setEdxpColor, showEdit, setShowEdit, leftSkillVal, setLeftSkillVal, allLeftVal, setLeftVal }}>{children}</AuthContext.Provider>;
}
