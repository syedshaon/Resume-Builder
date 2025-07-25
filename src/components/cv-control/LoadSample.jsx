import React from "react";
import { FaRobot } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";

function LoadSample() {
  const { setPersonalInfo, setEducation, setExperience, setReferences, setSkills, setOtherInfo, setIconElement } = useAuthContext();
  const loadData = () => {
    setPersonalInfo({
      name: "John Cina",
      title: "Front-End Developer",
      intro: "Love to code when it doesn't work. Other times I also code!",
      email: "johnC@gmail.com",
      phone: "01888-256545",
      web: "john-cina.com",
      address: "Rajuk, Dhaka",
      avatar: "https://ik.imagekit.io/odinbook/avatar_BoTNSJ_qH.png",
      showAvatar: true,
      expand: false,
    });
    setEducation([
      {
        id: 1,
        school: "University of Georgia",
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
        id: 2,
        school: "Udemy University",
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
        id: 3,
        school: "University of Georgia",
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
        id: 4,
        school: "Udemy University",
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
        id: 5,
        break: true,
      },
      {
        id: 6,
        school: "Udemy University 6",
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
        id: 7,
        school: "Udemy University",
        degree: "Full-Stack Web Development",
        result: "3.8 out of 4",
        startDate: "January 2022",
        endDate: "June 2022",
        location: "San Francisco, USA",
        summary: ["Completed an intensive bootcamp focused on modern web development technologies.", " Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos illo, quam in quidem amet eligendi!"],
        visible: true,
        expand: false,
      },
    ]);

    setExperience([
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
        summary: ["Collaborated with senior developers to build and maintain client websites using the latest web technologies."],
        visible: true,
        expand: false,
      },
      {
        id: 3,
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
        id: 4,
        company: "Wayne Corp",
        jobTitle: "Junior Developer",
        startDate: "March 2018",
        endDate: "May 2019",
        location: "San Francisco, USA",
        summary: ["Collaborated with senior developers to build and maintain client websites using the latest web technologies."],
        visible: true,
        expand: false,
      },
      {
        id: 5,
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
        id: 6,
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
        id: 1,
        referer: "Tony Stark",
        title: "CEO Stark Corp.",
        phone: "444-666-7777",
        visible: true,
        expand: false,
      },
      {
        id: 2,
        referer: "Bruce Wayne",
        title: "CTO Wayne Corp.",
        phone: "123-333-5555",
        visible: true,
        expand: false,
      },
    ]);

    setSkills({ skills: ["JavaScript", "ReactJS", "Next.js", "MERN", "SCSS", "TailWindCSS", "Redux"], visible: true, expand: false });
    setOtherInfo([
      { id: 1, title: "Languages", summary: ["English", "Bengali"], visible: true, expand: false },
      { id: 2, title: "Hobbies", summary: ["Biking", "Watching Movies"], visible: true, expand: false },
    ]);

    setIconElement("circle-check");
    document.documentElement.style.setProperty("--icon", "#FECE00");
  };
  return <FaRobot className="cursor-pointer text-gray-700 hover:text-gray-950 text-xl transition-all hover:text-2xl w-10 " onClick={loadData} />;
}

export default LoadSample;
