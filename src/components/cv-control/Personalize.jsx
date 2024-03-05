import { useAuthContext } from "@/context/AuthContext";
import Image from "next/image";

function Personalize() {
  const { setPersonalInfo, setSkills, setOtherInfo, hColor, setHColor, cColor, setCColor, sColor, setSColor, fColor, setFColor, iColor, setIColor, setEdxpColor, setLeftSkillVal, setLeftVal } = useAuthContext();
  function handleIColor(e) {
    setIColor(e.target.value);
    document.documentElement.style.setProperty("--icon", e.target.value);
  }
  function setContentColor(e) {
    setCColor(e.target.value);
    setEdxpColor(e.target.value);
    document.documentElement.style.setProperty("--bodyC", e.target.value);
  }

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
  }
  function handleLayoutFour() {
    setPersonalInfo((prev) => ({ ...prev, showAvatar: true }));

    // enable sidepanel
    setSkills((skills) => ({ ...skills, visible: true }));

    setOtherInfo((prev) => prev.map((pre) => ({ ...pre, visible: true })));

    // Add AllLeft Class
    setLeftVal(true);
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
  }

  return (
    <>
      <div className="color-area">
        <h3 className="design-title">Select a Layout</h3>
        <div className="color">
          <div className="color-picker font">
            <input id="fColor" type="color" value={fColor} onChange={(e) => setFColor(e.target.value)} name="fColor" />
            <label htmlFor="fColor">Text Color</label>
          </div>
          <div className="color-picker icon">
            <input id="iColor" type="color" value={iColor} onChange={handleIColor} name="iColor" />
            <label htmlFor="iColor">Icon Color</label>
          </div>
        </div>
        <div className="color">
          <div className="color-picker header">
            <input id="hColor" type="color" value={hColor} onChange={(e) => setHColor(e.target.value)} name="hColor" />
            <label htmlFor="hColor">Header Background</label>
          </div>
          <div className="color-picker content">
            <input id="cColor" type="color" value={cColor} onChange={setContentColor} name="cColor" />
            <label htmlFor="cColor">Content Background</label>
          </div>
          <div className="color-picker sidebar">
            <input id="sColor" type="color" value={sColor} onChange={(e) => setSColor(e.target.value)} name="sColor" />
            <label htmlFor="sColor">Sidebar Background</label>
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
