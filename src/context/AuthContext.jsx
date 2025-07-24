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
  // Related to Resume area layout
  const [showEdit, setShowEdit] = useState(true);
  const [leftSkillVal, setLeftSkillVal] = useState(false);
  const [allLeftVal, setLeftVal] = useState(false);
  // Related to user's authentication
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Related to Resume color
  const [hColor, setHColor] = useState("#ffffff");
  const [edxColor, setEdxpColor] = useState("#ffffff");
  const [cColor, setCColor] = useState("#ffffff");
  const [sColor, setSColor] = useState("#ffffff");
  const [fColor, setFColor] = useState("#000000");
  const [iColor, setIColor] = useState("#000000");
  // Design Layout
  const [design, setDesign] = useState("Design1");

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
    {
      id: 1,
      school: "University of Georgia",
      degree: "Bachelor of Science in Computer Science",
      result: "3.8 out of 4",
      startDate: "August 2018",
      endDate: "May 2020",
      location: "Cityville, State",
      summary: ["Honors: Dean's List for four consecutive semesters.", " Ldipisicing elit. Id iure animi optio praesentium, voluptatem nisi"],
      visible: true,
      expand: false,
    },
    {
      id: 2,
      school: "Udemy University",
      degree: "Full-Stack Web Development",
      result: "3.8 out of 4",
      startDate: "January 2016",
      endDate: "June 2018",
      location: "San Francisco, USA",
      summary: ["Completed an intensive bootcamp focused on modern web development technologies.", " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo, quam in quidem amet eligendi!"],
      visible: true,
      expand: false,
    },
    {
      id: 3,
      break: true,
      visible: true,
      expand: false,
    },
    {
      id: 4,
      school: "Google University",
      degree: "Front-End Web Development",
      result: "3 out of 4",
      startDate: "January 2014",
      endDate: "June 2016",
      location: "San Francisco, USA",
      summary: ["Completed an intensive bootcamp focused on modern web development technologies.", " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo, quam in quidem amet eligendi!"],
      visible: true,
      expand: false,
    },
  ]);

  const [experience, setExperience] = useState([
    {
      id: 1,
      company: "Stark Corp",
      jobTitle: "Software Engineer",
      startDate: "June 2019",
      endDate: "Present",
      location: "San Francisco, USA",
      summary: ["PSD, Figma to React", "WordPress to Next.js static site", "PSD to HTML5, PSD to WordPress"],
      visible: true,
      expand: false,
    },
    {
      id: 2,
      company: "Wayne Corp",
      jobTitle: "Junior Developer",
      startDate: "March 2018",
      endDate: "May 2019",
      location: "San Francisco, USA",
      summary: ["Collaborated with senior developers to build and maintain client websites using the latest web technologies.", "Edolor sit amet consectetur adipisicing elit. Illum recusandae ad corporis veritatis non asperiores", "Tassumenda reprehenderit totam tempore repudiandae", "Dssumenda reprehenderit totam tempore repudiandae"],
      visible: true,
      expand: false,
    },
    {
      id: 3,
      break: true,
      visible: false,
      expand: false,
    },
    {
      id: 4,
      company: "Robi Corp",
      jobTitle: "Front-End Developer",
      startDate: "March 2016",
      endDate: "Feb 2018",
      location: "San Francisco, USA",
      summary: ["Edolor sit amet consectetur adipisicing elit. Illum recusandae ad corporis veritatis non asperiores", "Tassumenda reprehenderit totam tempore repudiandae", "Dssumenda reprehenderit totam tempore repudiandae"],
      visible: true,
      expand: false,
    },
  ]);

  const [references, setReferences] = useState([
    { id: 1, referer: "J.K. Singh", title: "CEO of Stark Corp.", phone: "555-888-999", visible: true, expand: false },
    { id: 2, referer: "Rubi Ray", title: "CTO of Sama Corp.", phone: "666-888-999", visible: true, expand: false },
  ]);
  const [skills, setSkills] = useState({ skills: ["JavaScript", "ReactJS", "MERN", "SCSS", "TailWindCSS", "Redux"], visible: true, expand: false });
  const [otherInfo, setOtherInfo] = useState([
    { id: 1, title: "Languages", summary: ["English", "Bengali"], visible: true, expand: false },
    // {
    //   id: 2,
    //   break: true,
    //   visible: true,
    //   expand: false,
    // },
    { id: 3, title: "Hobbies", summary: ["Biking", "Watching Movies"], visible: true, expand: false },
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
  return <AuthContext.Provider value={{ user, loading, personalInfo, setPersonalInfo, education, setEducation, experience, setExperience, references, setReferences, skills, setSkills, otherInfo, setOtherInfo, hColor, setHColor, cColor, setCColor, sColor, setSColor, fColor, setFColor, iColor, setIColor, edxColor, setEdxpColor, showEdit, setShowEdit, leftSkillVal, setLeftSkillVal, allLeftVal, setLeftVal, design, setDesign }}>{children}</AuthContext.Provider>;
}
