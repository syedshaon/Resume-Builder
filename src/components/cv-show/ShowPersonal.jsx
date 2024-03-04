import { FaEnvelope, FaPhone, FaGlobeAmericas, FaHome } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";

export default function ShowPersonal() {
  const { personalInfo, hColor } = useAuthContext();

  const backgroundImageStyle = {
    display: personalInfo.showAvatar && personalInfo.avatar ? "inline-block" : "none",
  };

  return (
    <div className={personalInfo.showAvatar && personalInfo.avatar ? `cv-child person showImg ` : `cv-child person hideImg `} style={{ backgroundColor: hColor }}>
      <div className="person-info">
        <h1 className="person-name">{personalInfo.name}</h1>
        <h2 className="person-title">{personalInfo.title}</h2>
        <p className="person-details">{personalInfo.intro}</p>
      </div>

      {/* <div className="person-img" style={backgroundImageStyle} /> */}
      <Image priority alt={personalInfo.name} width={120} height={120} src={personalInfo.avatar} className="person-img" style={backgroundImageStyle} />

      <div className="person-contact">
        <p className="person-emails">
          {personalInfo.email && <FaEnvelope />}
          <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
        </p>
        <p className="person-tel">
          {personalInfo.phone && <FaPhone />} <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
        </p>
        <p className="person-web">
          {personalInfo.website && <FaGlobeAmericas />}
          <a target="_blank" href={`${personalInfo.website}`}>
            {personalInfo.website}
          </a>
        </p>
        <p className="person-address">
          {personalInfo.address && <FaHome />}
          {personalInfo.address}
        </p>
      </div>
    </div>
  );
}
