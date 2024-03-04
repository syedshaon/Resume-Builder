"use client";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";

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

  return (
    <>
      <div>
        <h3 className="bg-gray-700 text-white  px-4 py-2">Experiences</h3>
        {experience.map((item) => (
          <div key={item.id} className="relative mb-1">
            <h6 className="mb-0">
              <button onClick={() => toggleAccordionItem(item.id)} className="relative flex items-center w-full p-4 py-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-300 text-slate-700 rounded-t-1 group text-dark-500">
                <span>{item.jobTitle}</span>
                {item.expand && <FaChevronUp className="absolute right-0 pt-1 text-base transition-transform" />}

                {!item.expand && <FaChevronDown className="absolute right-0 pt-1 text-base transition-transform" />}
              </button>
            </h6>

            <div className={`${item.expand && "expanded py-4"} expandle px-2   text-sm leading-normal text-blue-gray-500/80 border shadow`}>
              <div className="flex flex-col space-y-2">
                <label htmlFor="company" className="font-bold">
                  Company:
                </label>
                <input type="text" id="company" name="company" value={item.company} onChange={(e) => setCompany(item.id, e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="jobTitle" className="font-bold mt-2">
                  Job Title:
                </label>
                <input type="text" id="jobTitle" name="jobTitle" value={item.jobTitle} onChange={(e) => setJobTitle(item.id, e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="startDate" className="font-bold mt-2">
                  Start Date:
                </label>
                <input type="text" id="startDate" name="startDate" value={item.startDate} onChange={(e) => setStartDate(item.id, e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="endDate" className="font-bold mt-2">
                  End Date:
                </label>
                <input type="text" id="endDate" name="endDate" value={item.endDate} onChange={(e) => setEndDate(item.id, e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="location" className="font-bold mt-2">
                  Location:
                </label>
                <input type="text" id="location" name="location" value={item.location} onChange={(e) => setLocation(item.id, e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div className="flex flex-col space-y-2 relative additional">
                <label htmlFor="additionalInfo" className="  mt-2 font-bold">
                  Additional Info:
                </label>
                {item.summary.map((val, index) => (
                  <input onChange={(e) => setSummary(item.id, index, e.target.value)} key={index} type="text" value={val} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                ))}
                <span className="absolute bottom-0 right-0 rounded w-10 h-9 px-3 bg-gray-700 hover:bg-gray-950 cursor-pointer text-4xl text-white flex justify-center items-center" onClick={() => addSummary(item.id)}>
                  +
                </span>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <div className="flex items-center mt-2 space-x-2">
                  <input type="checkbox" id="visible" name="visible" checked={item.visible} onChange={() => setvisible(item.id, item.visible)} className="border rounded focus:outline-none w-5 h-5 accent-slate-900 cursor-pointer" />
                  <label htmlFor="visible">Show on Resume</label>
                </div>
                <button onClick={addAnotherItem} className="bg-gray-700 hover:bg-gray-950 text-white   text-xs  py-1 px-2">
                  Add Another Experience
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
