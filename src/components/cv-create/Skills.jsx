import { useAuthContext } from "@/context/AuthContext";
import { FaChevronDown, FaChevronUp, FaTrash } from "react-icons/fa";
export default function SkillsForm({ onSubmit }) {
  const { skills, setSkills } = useAuthContext();

  const handleSkillChange = (index, value) => {
    setSkills((prev) => ({
      ...prev,
      skills: prev.skills.map((skill, i) => (i === index ? value : skill)),
    }));
  };

  const addSkill = () => {
    setSkills((prev) => ({ ...prev, skills: [...prev.skills, ""] }));
  };
  const toggleAccordionItem = () => {
    setSkills((prev) => ({ ...prev, expand: !prev.expand }));
  };

  const removeThisExperience = (id) => {
    setSkills((prev) => ({ ...prev, skills: prev.skills.filter((_, index) => index !== id) }));
  };

  return (
    <div className="mb-4">
      <h3 onClick={() => toggleAccordionItem()} className="cursor-pointer relative bg-gray-700 text-white  px-4 py-2 flex">
        <span>Skills</span>
        {skills.expand && <FaChevronUp className="absolute right-3 pt-1 text-base transition-transform" />}
        {!skills.expand && <FaChevronDown className="absolute right-3 pt-1 text-base transition-transform" />}
      </h3>

      <div className={`${skills.expand && "expanded py-1"} expandle px-2 text-sm leading-normal text-blue-gray-500/80 border shadow`}>
        <div className="relative mb-1">
          <div className="px-2 py-2 text-sm leading-normal text-blue-gray-500/80   flex flex-wrap justify-evenly  gap-2">
            {skills.skills.map((skill, index) => (
              <div key={index} className="flex flex-col  space-y-2 w-2/5 ">
                <label htmlFor={`skill_${index}-${skill.id}`} className="font-bold">
                  Skill {index + 1}:
                </label>
                <div className="flex items-center ">
                  <input type="text" name={`skill_${index}-${skill.id}`} id={`skill_${index}-${skill.id}`} value={skill} onChange={(e) => handleSkillChange(index, e.target.value)} className="  bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                  {skills.skills.length > 1 && (
                    <button className="ml-2 cursor-pointer text-red-500 hover:text-red-700" onClick={() => removeThisExperience(index)}>
                      <FaTrash className="text-black text-xl min-w-[8px] min-h-[8px]" />
                    </button>
                  )}
                </div>
              </div>
            ))}

            <div className="flex w-full items-center mt-3  justify-evenly ">
              <p className="   text-center  text-md font-bold cursor-pointer text-gray-700 hover:text-gray-950" onClick={addSkill}>
                + Add Another Skill +
              </p>
              <div className="flex items-center">
                <input type="checkbox" name="visible_skills" id="visible_skills" checked={skills.visible} onChange={() => setSkills((prev) => ({ ...prev, visible: !prev.visible }))} className="border  focus:outline-none w-5 h-5 accent-slate-900 cursor-pointer mr-3 " />
                <label htmlFor="visible_skills">Show on Resume</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
