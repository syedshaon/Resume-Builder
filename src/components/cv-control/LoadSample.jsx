import React from "react";
import { FaEdit, FaRobot, FaCloudDownloadAlt, FaMagic } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";

function LoadSample() {
  const { setPersonalInfo, setEducation, setExperience, setReferences, setSkills, setOtherInfo, setHColor, setCColor, setSColor, setFColor, setIColor, setEdxpColor } = useAuthContext();
  const loadData = () => {
    setPersonalInfo({
      name: "John Cina",
      title: "Front-End Developer",
      intro: "Love to code when it doesn't work. Other times I also code!",
      email: "johnC@gmail.com",
      phone: "01888-256545",
      web: "john-cina.com",
      address: "Rajuk, Dhaka",
      avatar: null,
      expand: false,
    });
    setEducation([
      {
        school: "University of Georgia 1",
        degree: "Bachelor of Science in Computer Science",
        result: "3.8 out of 4",
        startDate: "August 2019",
        endDate: "May 2023",
        location: "Cityville, State",
        summary: ["Honors: Dean's List for four consecutive semesters.", " Ldipisicing elit. Id iure animi optio praesentium, voluptatem nisi"],
        visible: true,
        expand: false,
      },
      {
        school: "Udemy University 2",
        degree: "Full-Stack Web Development",
        result: "3.8 out of 4",
        startDate: "January 2022",
        endDate: "June 2022",
        location: "San Francisco, USA",
        summary: ["Completed an intensive bootcamp focused on modern web development technologies.", " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo, quam in quidem amet eligendi!"],
        visible: true,
        expand: false,
      },
      {
        school: "Example University 3",
        degree: "Full-Stack Web Development",
        result: "3.8 out of 4",
        startDate: "January 2022",
        endDate: "June 2022",
        location: "San Francisco, USA",
        summary: ["Completed an intensive bootcamp focused on modern web development technologies."],
        visible: true,
        expand: false,
      },
    ]);

    setExperience([
      {
        company: "Stark Corp",
        jobTitle: "Software Engineer",
        startDate: "June 2019",
        endDate: "Present",
        location: "San Francisco, USA",
        summary: ["PSD to HTML5, PSD to WordPress", "PSD to HTML5, PSD to WordPress", "PSD to HTML5, PSD to WordPress"],
        visible: true,
        expand: false,
      },
      {
        company: "Wayne Corp",
        jobTitle: "Junior Developer",
        startDate: "March 2018",
        endDate: "May 2019",
        location: "San Francisco, USA",
        summary: ["Collaborated with senior developers to build and maintain client websites using the latest web technologies."],
        visible: true,
        expand: false,
      },
    ]);

    setReferences([
      {
        referer: "Tony Stark",
        title: "CEO Stark Corp.",
        phone: "+1 123-666-7777",
        visible: true,
        expand: false,
      },
      {
        referer: "Bruce Wayne",
        title: "CEO Wayne Corp.",
        phone: "+1 123-333-5555",
        visible: true,
        expand: false,
      },
    ]);

    setSkills({ skills: ["JavaScript", "ReactJS", "MERN", "SCSS", "TailWindCSS", "Redux"], visible: true, expand: false });
    setOtherInfo([
      { id: 1, title: "Languages", summary: ["English", "Bengali"], visible: true, expand: false },
      { id: 2, title: "Hobbies", summary: ["Biking", "Watching Movies"], visible: true, expand: false },
    ]);

    setHColor("#ffffff");
    setEdxpColor("#ffffff");
    setCColor("#ffffff");
    setSColor("#ffffff");
    setFColor("#374151");
    setIColor("#374151");
  };
  return <FaRobot title="Generate Sample" className="cursor-pointer text-gray-700 hover:text-gray-950 text-xl w-10 " onClick={loadData} />;
}

export default LoadSample;
