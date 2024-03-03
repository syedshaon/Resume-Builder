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
        <h3 className="bg-gray-700 text-white p-4">Education</h3>
        {education.map((item) => (
          <div key={item.id} className="relative mb-3">
            <h6 className="mb-0">
              <button onClick={() => toggleAccordionItem(item.id)} className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-300 text-slate-700 rounded-t-1 group text-dark-500">
                <span>{item.degree}</span>
                {item.expand && <FaChevronUp className="absolute right-0 pt-1 text-base transition-transform" />}

                {!item.expand && <FaChevronDown className="absolute right-0 pt-1 text-base transition-transform" />}
              </button>
            </h6>

            <div className={`${item.expand && "expanded py-4"} expandle px-2   text-sm leading-normal text-blue-gray-500/80 border shadow`}>
              <div className="flex flex-col space-y-2">
                <label htmlFor="schoolName" className="font-bold">
                  School Name:
                </label>
                <input type="text" id="schoolName" name="schoolName" value={item.school} onChange={(e) => setSchoolName(item.id, e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="degree" className="font-bold mt-2">
                  Degree:
                </label>
                <input type="text" id="degree" name="degree" value={item.degree} onChange={(e) => setDegree(item.id, e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor="result" className="font-bold mt-2">
                  Result/Grade:
                </label>
                <input type="text" id="result" name="result" value={item.result} onChange={(e) => setResult(item.id, e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex flex-col space-y-2">
                  <label htmlFor="startDate" className="font-bold mt-2">
                    Start Date:
                  </label>
                  <input type="text" id="startDate" name="startDate" value={item.startDate} onChange={(e) => setStartDate(item.id, e.target.value)} className=" bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>

                <div className="flex flex-col space-y-2">
                  <label htmlFor="endDate" className="font-bold mt-2">
                    End Date:
                  </label>
                  <input type="text" id="endDate" name="endDate" value={item.endDate} onChange={(e) => setEndDate(item.id, e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                </div>
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
                {item.summary.map((val, index) => {
                  return <input onChange={(e) => setSummary(item.id, index, e.target.value)} key={index} type="text" value={val} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />;
                })}
                <span className="absolute bottom-0 right-0 rounded w-10 h-9 px-3 bg-gray-700 hover:bg-gray-950 cursor-pointer text-4xl text-white flex justify-center items-center" onClick={() => addSummary(item.id)}>
                  +
                </span>
              </div>

              <div className="mt-5 flex justify-between items-center">
                <div className="flex items-center mt-2 space-x-2">
                  <input type="checkbox" id="visible" name="visible" checked={item.visible} onChange={() => setvisible(item.id, item.visible)} className="border rounded focus:outline-none     w-5 h-5   accent-slate-900  cursor-pointer  " />
                  <label htmlFor="visible" className="font-medium text-lg">
                    Show on Resume
                  </label>
                </div>
                <button onClick={addAnotherItem} className="bg-gray-700 hover:bg-gray-950 text-white   p-2">
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
