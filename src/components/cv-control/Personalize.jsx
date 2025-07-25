import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";

const iconOptions = [
  { name: "check", src: "/check.png" },
  { name: "chevrons-right", src: "/chevrons-right.png" },
  { name: "circle-check", src: "/circle-check.png" },
  { name: "shell", src: "/shell.png" },
  { name: "square-check", src: "/square-check.png" },
  { name: "circle-dot", src: "/circle-dot.png" },
];

function Personalize() {
  const { setPersonalInfo, setSkills, setOtherInfo, iconElement, setIconElement, setLeftSkillVal, setLeftVal, setDesign } = useAuthContext();

  function handleLayoutOne() {
    // enable image

    setPersonalInfo((prev) => ({ ...prev, showAvatar: true }));

    // enable sidepanel
    setSkills((skills) => ({ ...skills, visible: true }));

    setOtherInfo((prev) => prev.map((pre) => ({ ...pre, visible: true })));

    // disable LEFT sidepanel
    setLeftSkillVal(false);
    // Remove AllLeft Class
    setLeftVal(false);
    setDesign("Design1");
  }
  function handleLayoutTwo() {
    setPersonalInfo((prev) => ({ ...prev, showAvatar: false }));

    // enable sidepanel
    setSkills((skills) => ({ ...skills, visible: true }));

    setOtherInfo((prev) => prev.map((pre) => ({ ...pre, visible: true })));

    // disable LEFT sidepanel
    setLeftSkillVal(false);
    // Remove AllLeft Class
    setLeftVal(false);
    setDesign("Design2");
  }
  function handleLayoutThree() {
    // enable sidepanel
    setSkills((skills) => ({ ...skills, visible: false }));

    setOtherInfo((prev) => prev.map((pre) => ({ ...pre, visible: false })));
    setPersonalInfo((prev) => ({ ...prev, showAvatar: true }));

    // disable LEFT sidepanel
    setLeftSkillVal(false);
    // enable image

    // Remove AllLeft Class
    setLeftVal(false);
    setDesign("Design3");
  }
  function handleLayoutFour() {
    setPersonalInfo((prev) => ({ ...prev, showAvatar: true }));

    // enable sidepanel
    setSkills((skills) => ({ ...skills, visible: true }));

    setOtherInfo((prev) => prev.map((pre) => ({ ...pre, visible: true })));

    // Add AllLeft Class
    setLeftVal(true);
    setDesign("Design4");
  }
  function handleLayoutFive() {
    // enable sidepanel
    setSkills((skills) => ({ ...skills, visible: false }));

    setPersonalInfo((prev) => ({ ...prev, showAvatar: false }));

    setOtherInfo((prev) => prev.map((pre) => ({ ...pre, visible: false })));

    // disable LEFT sidepanel
    setLeftSkillVal(false);
    // disable image

    // Remove AllLeft Class
    setLeftVal(false);
    setDesign("Design5");
  }
  function handleLayoutSix() {
    setPersonalInfo((prev) => ({ ...prev, showAvatar: true }));

    // enable sidepanel
    setSkills((skills) => ({ ...skills, visible: true }));

    setOtherInfo((prev) => prev.map((pre) => ({ ...pre, visible: true })));

    // enable LEFT sidepanel
    setLeftSkillVal(true);
    // Remove AllLeft Class
    setLeftVal(false);
    setDesign("Design6");
  }

  return (
    <>
      <div className="color-area">
        <h3 className="design-title">Select List Icon</h3>
        <div className="color">
          <div className="">
            <div className="icon-grid">
              {iconOptions.map((icon) => (
                <div
                  key={icon.name}
                  className={`icon-option ${iconElement === icon.name ? "selected" : ""}`}
                  onClick={() => {
                    setIconElement(icon.name);
                    document.documentElement.style.setProperty("--icon", icon.name);
                  }}
                >
                  <Image src={icon.src} alt={icon.name} width={15} height={15} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="design-wrapper">
        <h3 className="design-title">Select a Layout</h3>
        <div className="design">
          <div className="layout layout-1" onClick={handleLayoutOne}>
            <Image width={258} height={300} src="/first.jpg" className="layout-first" alt="layout-first" />
          </div>
          <div className="layout layout-2" onClick={handleLayoutTwo}>
            <Image width={258} height={300} src="/second.jpg" className="layout-second" alt="layout-second" />
          </div>
          <div className="layout layout-3" onClick={handleLayoutThree}>
            <Image width={258} height={300} src="/third.jpg" className="layout-third" alt="layout-third" />
          </div>
          <div className="layout layout-4" onClick={handleLayoutFour}>
            <Image width={258} height={300} src="/fourth.jpg" className="layout-fourth" alt="layout-fourth" />
          </div>
          <div className="layout layout-5" onClick={handleLayoutFive}>
            <Image width={258} height={300} src="/fifth.jpg" className="layout-fifth" alt="layout-fifth" />
          </div>
          <div className="layout layout-6" onClick={handleLayoutSix}>
            <Image width={258} height={300} src="/sixth.jpg" className="layout-sixth" alt="layout-sixth" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Personalize;
