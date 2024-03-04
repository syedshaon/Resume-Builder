import { useAuthContext } from "@/context/AuthContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IKContext, IKUpload, IKImage } from "imagekitio-react";
import { useState } from "react";
import Authenticator from "./Authenticator";
export default function PersonalInfoForm() {
  const { personalInfo, setPersonalInfo } = useAuthContext();
  const [imgKitImgUrl, setImgKitImgUrl] = useState("");

  const onSuccess = (res) => {
    // console.log(res);
    // setImgKitImgUrl(res.url);
    setPersonalInfo((prev) => ({ ...prev, avatar: res.url }));
  };
  const validateFileFunction = (file) => {
    console.log("validating");
    if (file.size < 5000000) {
      // Less than 1mb
      console.log("less than 5mb");
      return true;
    }
    console.log("more than 5mb");
    alert("Images must be less than 5mb");
    return false;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  // const handleAvatarChange = (e) => {
  //   // console.log(URL.createObjectURL(e.target.files[0]));
  //   setPersonalInfo((prev) => ({ ...prev, avatar: URL.createObjectURL(e.target.files[0]) }));
  // };

  const toggleAccordionItem = () => {
    setPersonalInfo((prev) => ({ ...prev, expand: !prev.expand }));
  };

  return (
    <div className="mb-4">
      <h3 onClick={() => toggleAccordionItem()} className="cursor-pointer relative bg-gray-700 text-white  px-4 py-2">
        <span>Personal Information</span>
        {personalInfo.expand && <FaChevronUp className="absolute right-3 pt-1 text-base transition-transform" />}
        {!personalInfo.expand && <FaChevronDown className="absolute right-3 pt-1 text-base transition-transform" />}
      </h3>

      <div className={`${personalInfo.expand && "expanded py-4"} expandle px-2 text-sm leading-normal text-blue-gray-500/80 border shadow`}>
        <div className="flex flex-col space-y-2">
          <label htmlFor="name" className="font-bold">
            Name:
          </label>
          <input type="text" id="name" name="name" value={personalInfo.name} onChange={handleChange} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
        </div>

        {/* Title */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="title" className="font-bold">
            Title:
          </label>
          <input type="text" id="title" name="title" value={personalInfo.title} onChange={handleChange} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>

        {/* Intro */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="intro" className="font-bold">
            Intro:
          </label>
          <textarea id="intro" name="intro" value={personalInfo.intro} onChange={handleChange} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" rows={5} />
        </div>

        {/* Email */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="email" className="font-bold">
            Email:
          </label>
          <input type="email" id="email" name="email" value={personalInfo.email} onChange={handleChange} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
        </div>

        {/* Phone */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="phone" className="font-bold">
            Phone:
          </label>
          <input type="tel" id="phone" name="phone" value={personalInfo.phone} onChange={handleChange} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>

        {/* Web */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="web" className="font-bold">
            Website:
          </label>
          <input type="url" id="web" name="web" value={personalInfo.web} onChange={handleChange} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
        </div>

        {/* Address */}
        <div className="flex flex-col space-y-2">
          <label htmlFor="address" className="font-bold">
            Address:
          </label>
          <textarea id="address" name="address" value={personalInfo.address} onChange={handleChange} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" rows={3} />
        </div>

        {/* ... (other form fields) ... */}

        <div className="flex flex-col space-y-2">
          <label htmlFor="avatar" className="font-bold mt-2">
            Avatar:
          </label>
          {/* <input type="file" accept="image/*" id="avatar" name="avatar" onChange={handleAvatarChange} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" /> */}
          <IKContext publicKey="public_D3R2YXCqESRUwCNMgLufGCsa8GY=" urlEndpoint="https://ik.imagekit.io/odinbook" authenticator={Authenticator}>
            <IKUpload id="imageInput" accept="image/*" validateFile={validateFileFunction} fileName="avatar.png" onSuccess={onSuccess} />
          </IKContext>
        </div>
      </div>
    </div>
  );
}