"use client";
import { FaChevronDown, FaChevronUp, FaTrash } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";
import { CgSpaceBetweenV } from "react-icons/cg";

export default function ExperienceForm() {
  const { experience, setExperience } = useAuthContext();

  const toggleAccordionItem = (id) => {
    setExperience((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        expand: item.id === id ? !item.expand : false,
      }))
    );
  };

  const addSummary = (expId) => {
    setExperience((prev) => prev.map((pre) => (pre.id === expId ? { ...pre, summary: [...pre.summary, ""] } : pre)));
  };

  const addAnotherItem = () => {
    setExperience((prev) => [
      ...prev.map((item) => ({ ...item, expand: false })),
      {
        id: prev.length + 1,
        company: "",
        jobTitle: "New Job",
        startDate: "",
        endDate: "",
        location: "",
        summary: [""],
        visible: true,
        expand: true,
      },
    ]);
  };

  const setCompany = (id, value) => {
    setExperience((prev) => prev.map((item) => (item.id === id ? { ...item, company: value } : item)));
  };

  const setJobTitle = (id, value) => {
    setExperience((prev) => prev.map((item) => (item.id === id ? { ...item, jobTitle: value } : item)));
  };

  const setStartDate = (id, value) => {
    setExperience((prev) => prev.map((item) => (item.id === id ? { ...item, startDate: value } : item)));
  };

  const setEndDate = (id, value) => {
    setExperience((prev) => prev.map((item) => (item.id === id ? { ...item, endDate: value } : item)));
  };

  const setLocation = (id, value) => {
    setExperience((prev) => prev.map((item) => (item.id === id ? { ...item, location: value } : item)));
  };

  const setSummary = (id, index, value) => {
    setExperience((prev) => prev.map((item) => (item.id === id ? { ...item, summary: item.summary.map((s, i) => (i === index ? value : s)) } : item)));
  };

  const setvisible = (id, currentVisible) => {
    setExperience((prev) => prev.map((item) => (item.id === id ? { ...item, visible: !currentVisible } : item)));
  };

  const addGap = (position) => {
    setExperience((prevExperience) => [
      ...prevExperience.slice(0, position),
      {
        id: position + 1,
        break: true,
        visible: true,
        expand: false,
      },
      ...prevExperience.slice(position).map((item, index) => ({
        ...item,
        id: position + index + 2, // Assign unique IDs for the following items
      })),
    ]);
  };

  const removeGap = (id) => {
    setExperience((prevExperience) => prevExperience.filter((item) => !(item.id === id && item.break)));
  };

  const removeThisExperience = (id) => {
    setExperience((prevExperience) => prevExperience.filter((item) => item.id !== id));
  };

  return (
    <>
      <div>
        <h3 className="bg-gray-700 text-white  px-4 py-2">Experiences</h3>
        {experience.map((item) =>
          !item.break ? (
            <div key={item.id} className="relative mb-1">
              <div className="mb-0 relative flex items-center justify-between w-full p-4 py-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-300 text-slate-700 group text-dark-500">
                {/* Left side: Label */}
                <span>{item.jobTitle}</span>

                {/* Right side: Actions */}
                <div className="flex items-center space-x-2">
                  {/* Remove experience button */}
                  <button onClick={() => removeThisExperience(item.id)} className="flex items-center text-red-500 hover:text-red-700 transition-colors" aria-label="Remove experience">
                    <span className="sr-only">Remove Experience</span>
                    <FaTrash className="text-black" />
                  </button>

                  {/* Toggle button */}
                  <button onClick={() => toggleAccordionItem(item.id)} className="flex items-center text-slate-600 hover:text-slate-800 transition-colors" aria-label="Toggle accordion">
                    {item.expand ? <FaChevronUp className="text-base transition-transform" /> : <FaChevronDown className="text-base transition-transform" />}
                  </button>
                </div>
              </div>

              <div className={`${item.expand && "expanded py-4"} expandle px-2   text-sm leading-normal text-blue-gray-500/80 border shadow`}>
                <div className="flex flex-col space-y-2">
                  <label htmlFor={`company-${item.id}`} className="font-bold">
                    Company:
                  </label>
                  <input type="text" name={`company-${item.id}`} id={`company-${item.id}`} value={item.company} onChange={(e) => setCompany(item.id, e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor={`jobTitle-${item.id}`} className="font-bold mt-2">
                    Job Title:
                  </label>
                  <input type="text" name={`jobTitle-${item.id}`} id={`jobTitle-${item.id}`} value={item.jobTitle} onChange={(e) => setJobTitle(item.id, e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor={`exp-startDate-${item.id}`} className="font-bold mt-2">
                    Start Date:
                  </label>
                  <input type="text" name={`exp-startDate-${item.id}`} id={`exp-startDate-${item.id}`} value={item.startDate} onChange={(e) => setStartDate(item.id, e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor={`exp-endDate-${item.id}`} className="font-bold mt-2">
                    End Date:
                  </label>
                  <input type="text" name={`exp-endDate-${item.id}`} id={`exp-endDate-${item.id}`} value={item.endDate} onChange={(e) => setEndDate(item.id, e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor={`exp-location-${item.id}`} className="font-bold mt-2">
                    Location:
                  </label>
                  <input type="text" name={`exp-location-${item.id}`} id={`exp-location-${item.id}`} value={item.location} onChange={(e) => setLocation(item.id, e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex flex-col space-y-2 relative additional">
                  <span className="  mt-2 font-bold">Additional Info:</span>
                  {item.summary.map((val, index) => {
                    return (
                      <div key={index} className="addition-holder flex w-full">
                        <label className="hidden" htmlFor={`exp-summary-${index}-${item.id}`}>{`exp-summary-${index}`}</label>
                        <input name={`exp-summary-${index}-${item.id}`} id={`exp-summary-${index}-${item.id}`} onChange={(e) => setSummary(item.id, index, e.target.value)} type="text" value={val} className="w-full bg-gray-300 p-2 border   focus:outline-none focus:ring-1 focus:ring-blue-500" />
                      </div>
                    );
                  })}
                  <span className="absolute bottom-0 right-0  w-10 h-9 px-3 bg-gray-700 hover:bg-gray-950 cursor-pointer text-4xl text-white flex justify-center items-center" onClick={() => addSummary(item.id)}>
                    +
                  </span>
                </div>

                <div className="mt-5 flex justify-between items-center">
                  <div className="flex items-center mt-2 space-x-2">
                    <input type="checkbox" name={`exp-visible-${item.id}`} id={`exp-visible-${item.id}`} checked={item.visible} onChange={() => setvisible(item.id, item.visible)} className="border  focus:outline-none w-5 h-5 accent-slate-900 cursor-pointer" />
                    <label htmlFor={`exp-visible-${item.id}`}>Show on Resume</label>
                  </div>
                  <button onClick={() => addGap(item.id)} className="bg-gray-700 hover:bg-gray-950 text-white text-xs  py-1 px-2">
                    Add Gap
                  </button>
                  <button onClick={addAnotherItem} className="bg-gray-700 hover:bg-gray-950 text-white text-xs  py-1 px-2">
                    Add Education
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div key={item.id} className="relative mb-1">
              <div className="mb-0 relative flex items-center justify-between w-full p-4 py-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-300 text-slate-700 group text-dark-500">
                {/* Left side: Label */}
                <span>GAP</span>

                {/* Right side: Actions */}
                <div className="flex items-center space-x-2">
                  {/* Remove Gap Button */}
                  <button onClick={() => removeGap(item.id)} className="flex items-center text-red-500 hover:text-red-700 transition-colors" aria-label="Remove gap">
                    <span className="sr-only">Remove Gap</span>
                    {/* or use an icon like <FaTrash /> */}
                    <FaTrash className="text-black" />
                  </button>

                  {/* Toggle Button */}
                  <button onClick={() => toggleAccordionItem(item.id)} className="flex items-center text-slate-600 hover:text-slate-800 transition-colors" aria-label="Toggle accordion">
                    {item.expand ? <FaChevronUp className="text-base transition-transform" /> : <FaChevronDown className="text-base transition-transform" />}
                  </button>
                </div>
              </div>
              <div className={`${item.expand && "expanded py-4"} expandle px-2   text-sm leading-normal text-blue-gray-500/80 border shadow`}>
                <div className="mt-5 flex justify-between items-center">
                  <div className="flex items-center mt-2 space-x-2">
                    <input type="checkbox" name={`edu-visible-${item.id}`} id={`edu-visible-${item.id}`} checked={item.visible} onChange={() => setvisible(item.id, item.visible)} className="border  focus:outline-none     w-5 h-5   accent-slate-900  cursor-pointer  " />
                    <label htmlFor={`edu-visible-${item.id}`}>Show on Resume</label>
                  </div>
                  <button onClick={() => addGap(item.id)} className="bg-gray-700 hover:bg-gray-950 text-white text-xs  py-1 px-2">
                    Add Gap
                  </button>
                  <button onClick={addAnotherItem} className="bg-gray-700 hover:bg-gray-950 text-white text-xs  py-1 px-2">
                    Add Education
                  </button>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </>
  );
}
