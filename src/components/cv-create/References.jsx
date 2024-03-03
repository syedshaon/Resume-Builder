"use client";

import { useAuthContext } from "@/context/AuthContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function ReferencesForm() {
  const { references, setReferences } = useAuthContext();

  const handleChange = (id, field, value) => {
    setReferences((prev) => prev.map((item) => (item.id === id ? { ...item, [field]: value } : item)));
  };

  const handleCheckboxChange = (id) => {
    setReferences((prev) => prev.map((item) => (item.id === id ? { ...item, expand: !item.expand } : item)));
  };

  const setvisible = (id, currentVisible) => {
    setReferences((prev) => prev.map((item) => (item.id === id ? { ...item, visible: !currentVisible } : item)));
  };

  const addAnotherItem = () => {
    setReferences((prev) => [
      ...prev.map((item) => ({ ...item, expand: false })),
      {
        id: prev.length + 1,
        referer: "New Referrer",
        title: "",
        phone: "",
        visible: true,
        expand: true,
      },
    ]);
  };

  return (
    <div>
      <h3 className="bg-gray-700 text-white p-4">References</h3>
      <div className="px-2 py-4 text-sm leading-normal text-blue-gray-500/80  ">
        {references.map((item) => (
          <div key={item.id} className="relative mb-3">
            <h6 className="mb-0">
              <button onClick={() => handleCheckboxChange(item.id)} className="relative flex items-center w-full p-4 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-300 text-slate-700 rounded-t-1 group text-dark-500">
                <span>{item.referer}</span>
                {item.expand && <FaChevronUp className="absolute right-0 pt-1 text-base transition-transform" />}
                {!item.expand && <FaChevronDown className="absolute right-0 pt-1 text-base transition-transform" />}
              </button>
            </h6>

            <div className={`${item.expand && "expanded py-4"} expandle px-2   text-sm leading-normal text-blue-gray-500/80 border shadow`}>
              <div className="flex flex-col space-y-2">
                <label htmlFor={`referer_${item.id}`} className="font-bold">
                  Referer:
                </label>
                <input type="text" id={`referer_${item.id}`} name={`referer_${item.id}`} value={item.referer} onChange={(e) => handleChange(item.id, "referer", e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor={`title_${item.id}`} className="font-bold mt-2">
                  Title:
                </label>
                <input type="text" id={`title_${item.id}`} name={`title_${item.id}`} value={item.title} onChange={(e) => handleChange(item.id, "title", e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div className="flex flex-col space-y-2">
                <label htmlFor={`phone_${item.id}`} className="font-bold mt-2">
                  Phone:
                </label>
                <input type="text" id={`phone_${item.id}`} name={`phone_${item.id}`} value={item.phone} onChange={(e) => handleChange(item.id, "phone", e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
              </div>

              <div className="mt-5 flex justify-between items-center">
                <div className="flex items-center mt-2 space-x-2">
                  <input type="checkbox" id="visible" name="visible" checked={item.visible} onChange={() => setvisible(item.id, item.visible)} className="border rounded focus:outline-none     w-5 h-5   accent-slate-900  cursor-pointer  " />
                  <label htmlFor="visible" className="font-medium text-lg">
                    Show on Resume
                  </label>
                </div>
                <button onClick={addAnotherItem} className="bg-gray-700 hover:bg-gray-950 text-white   p-2">
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
