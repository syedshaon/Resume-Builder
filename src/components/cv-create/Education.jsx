"use client";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";

export default function EducationForm() {
  const { education, setEducation } = useAuthContext();

  const toggleAccordionItem = (id) => {
    setEducation((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        expand: item.id === id ? !item.expand : false,
      }))
    );
  };

  const addSummary = (catId) => {
    setEducation((prev) => prev.map((pre) => (pre.id === catId ? { ...pre, summary: [...pre.summary, ""] } : pre)));
  };

  const addAnotherItem = () => {
    setEducation((prev) => [
      ...prev.map((item) => ({ ...item, expand: false })),
      {
        id: prev.length + 1,
        school: "",
        degree: "New Degree",
        result: "",
        startDate: "",
        endDate: "",
        location: "",
        summary: [""],
        visible: true,
        expand: true,
      },
    ]);
  };

  const setSchoolName = (id, value) => {
    setEducation((prev) => prev.map((item) => (item.id === id ? { ...item, school: value } : item)));
  };

  const setDegree = (id, value) => {
    setEducation((prev) => prev.map((item) => (item.id === id ? { ...item, degree: value } : item)));
  };

  const setResult = (id, value) => {
    setEducation((prev) => prev.map((item) => (item.id === id ? { ...item, result: value } : item)));
  };

  const setStartDate = (id, value) => {
    setEducation((prev) => prev.map((item) => (item.id === id ? { ...item, startDate: value } : item)));
  };

  const setEndDate = (id, value) => {
    setEducation((prev) => prev.map((item) => (item.id === id ? { ...item, endDate: value } : item)));
  };

  const setLocation = (id, value) => {
    setEducation((prev) => prev.map((item) => (item.id === id ? { ...item, location: value } : item)));
  };

  const setSummary = (id, index, value) => {
    setEducation((prev) => prev.map((item) => (item.id === id ? { ...item, summary: item.summary.map((s, i) => (i === index ? value : s)) } : item)));
  };

  const setvisible = (id, currentVisible) => {
    setEducation((prev) => prev.map((item) => (item.id === id ? { ...item, visible: !currentVisible } : item)));
  };

  return (
    <>
      <div>
        <h3 className="bg-gray-700 text-white px-4 py-2">Education</h3>
        {education.map((item) => (
          <div key={item.id} className="relative mb-1">
            <h6 className="mb-0">
              <button onClick={() => toggleAccordionItem(item.id)} className="relative flex items-center w-full p-4 py-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-300 text-slate-700  group text-dark-500">
                <span>{item.degree}</span>
                {item.expand && <FaChevronUp className="absolute right-0 pt-1 text-base transition-transform" />}

                {!item.expand && <FaChevronDown className="absolute right-0 pt-1 text-base transition-transform" />}
              </button>
            </h6>

            <div className={`${item.expand && "expanded py-4"} expandle px-2   text-sm leading-normal text-blue-gray-500/80 border shadow`}>
              <div className="flex flex-col space-y-2">
                <label htmlFor={`schoolName-${item.id}`} className="font-bold">
                  School Name:
                </label>
                <input type="text" name={`schoolName-${item.id}`} id={`schoolName-${item.id}`} value={item.school} onChange={(e) => setSchoolName(item.id, e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" required />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor={`degree-${item.id}`} className="font-bold mt-2">
                  Degree:
                </label>
                <input type="text" id={`degree-${item.id}`} name={`degree-${item.id}`} value={item.degree} onChange={(e) => setDegree(item.id, e.target.value)} className="bg-gray-300 p-2 border focus:outline-none focus:ring-1 focus:ring-blue-500" required />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor={`result-${item.id}`} className="font-bold mt-2">
                  Result/Grade:
                </label>
                <input type="text" id={`result-${item.id}`} name={`result-${item.id}`} value={item.result} onChange={(e) => setResult(item.id, e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor={`edu-startDate-${item.id}`} className="font-bold mt-2">
                    Start Date:
                  </label>
                  <input type="text" id={`edu-startDate-${item.id}`} name={`edu-startDate-${item.id}`} value={item.startDate} onChange={(e) => setStartDate(item.id, e.target.value)} className=" bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor={`edu-endDate-${item.id}`} className="font-bold mt-2">
                    End Date:
                  </label>
                  <input type="text" id={`edu-endDate-${item.id}`} name={`edu-endDate-${item.id}`} value={item.endDate} onChange={(e) => setEndDate(item.id, e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor={`edu-location-${item.id}`} className="font-bold mt-2">
                  Location:
                </label>
                <input type="text" id={`edu-location-${item.id}`} name={`edu-location-${item.id}`} value={item.location} onChange={(e) => setLocation(item.id, e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>
              <div className="flex flex-col space-y-2 relative additional">
                <span className="  mt-2 font-bold">Additional Info:</span>
                {item.summary.map((val, index) => {
                  return (
                    <div key={index} className="addition-holder flex w-full">
                      <label className="hidden" htmlFor={`edu-summary-${index}-${item.id}`}>{`summary-${index}`}</label>
                      <input id={`edu-summary-${index}-${item.id}`} name={`edu-summary-${index}-${item.id}`} onChange={(e) => setSummary(item.id, index, e.target.value)} type="text" value={val} className="w-full bg-gray-300 p-2 border   focus:outline-none focus:ring-1 focus:ring-blue-500" />
                    </div>
                  );
                })}
                <span className="absolute bottom-0 right-0  w-10 h-9 px-3 bg-gray-700 hover:bg-gray-950 cursor-pointer text-4xl text-white flex justify-center items-center" onClick={() => addSummary(item.id)}>
                  +
                </span>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <div className="flex items-center mt-2 space-x-2">
                  <input type="checkbox" name={`edu-visible-${item.id}`} id={`edu-visible-${item.id}`} checked={item.visible} onChange={() => setvisible(item.id, item.visible)} className="border  focus:outline-none     w-5 h-5   accent-slate-900  cursor-pointer  " />
                  <label htmlFor={`edu-visible-${item.id}`}>Show on Resume</label>
                </div>
                <button onClick={addAnotherItem} className="bg-gray-700 hover:bg-gray-950 text-white text-xs  py-1 px-2">
                  Add Another Education
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
