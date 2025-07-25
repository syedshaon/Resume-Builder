"use client";

import { useAuthContext } from "@/context/AuthContext";
import { FaChevronDown, FaChevronUp, FaTrash } from "react-icons/fa";

export default function ReferencesForm() {
  const { references, setReferences } = useAuthContext();

  const handleChange = (id, field, value) => {
    setReferences((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const toggleAccordionItem = (id) => {
    setReferences((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        expand: item.id === id ? !item.expand : false,
      }))
    );
  };

  const setvisible = (id, currentVisible) => {
    setReferences((prev) => prev.map((item) => (item.id === id ? { ...item, visible: !currentVisible } : item)));
  };

  const addAnotherItem = () => {
    setReferences((prev) => [
      ...prev.map((item) => ({ ...item, expand: false })),
      {
        id: prev.length + 2,
        referer: "New Referrer",
        title: "",
        phone: "",
        visible: true,
        expand: true,
      },
    ]);
  };

  const removeThisExperience = (id) => {
    setReferences((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div>
      <h3 className="bg-gray-700 text-white  px-4 py-2">References</h3>
      <div className="px-2   text-sm leading-normal text-blue-gray-500/80  ">
        {references.map((item) => (
          <div key={item.id} className="relative mb-1">
            <div className="mb-0 relative flex items-center justify-between w-full p-4 py-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-300 text-slate-700 group text-dark-500">
              {/* Left side: Label */}
              <span>{item.referer}</span>

              {/* Right side: Actions */}
              <div className="flex items-center space-x-2">
                {/* Remove reference button */}
                <button onClick={() => removeThisExperience(item.id)} className="flex items-center text-red-500 hover:text-red-700 transition-colors" aria-label="Remove reference">
                  <span className="sr-only">Remove Reference</span>
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
                <label htmlFor={`referer_${item.id}`} className="font-bold">
                  Referer:
                </label>
                <input type="text" id={`referer_${item.id}`} name={`referer_${item.id}`} value={item.referer} onChange={(e) => handleChange(item.id, "referer", e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" required />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor={`referer-title_${item.id}`} className="font-bold mt-2">
                  Title:
                </label>
                <input type="text" id={`referer-title_${item.id}`} name={`referer-title_${item.id}`} value={item.title} onChange={(e) => handleChange(item.id, "title", e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor={`referer-phone_${item.id}`} className="font-bold mt-2">
                  Phone:
                </label>
                <input type="text" id={`referer-phone_${item.id}`} name={`referer-phone_${item.id}`} value={item.phone} onChange={(e) => handleChange(item.id, "phone", e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div className="mt-5 flex justify-between items-center">
                <div className="flex items-center mt-2 space-x-2">
                  <input type="checkbox" name={`referer-visible-${item.id}`} id={`referer-visible-${item.id}`} checked={item.visible} onChange={() => setvisible(item.id, item.visible)} className="border  focus:outline-none     w-5 h-5   accent-slate-900  cursor-pointer  " />
                  <label htmlFor={`referer-visible-${item.id}`}>Show on Resume</label>
                </div>
                <button onClick={addAnotherItem} className="bg-gray-700 hover:bg-gray-950 text-white   text-xs  py-1 px-2">
                  Add Another Reference
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
