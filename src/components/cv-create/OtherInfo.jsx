import { useAuthContext } from "@/context/AuthContext";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function OtherInfoForm() {
  const { otherInfo, setOtherInfo } = useAuthContext();

  const toggleAccordionItem = (id) => {
    setOtherInfo((prevItems) =>
      prevItems.map((item) => ({
        ...item,
        expand: item.id === id ? !item.expand : false,
      }))
    );
  };

  const addSummary = (catId) => {
    setOtherInfo((prev) => prev.map((pre) => (pre.id === catId ? { ...pre, summary: [...pre.summary, ""] } : pre)));
  };

  const addAnotherItem = () => {
    setOtherInfo((prev) => [
      ...prev.map((item) => ({ ...item, expand: false })),
      {
        id: prev.length + 1,
        title: "New Info",
        summary: [""],
        visible: true,
        expand: true,
      },
    ]);
  };

  const setInfoTitle = (id, value) => {
    setOtherInfo((prev) => prev.map((item) => (item.id === id ? { ...item, title: value } : item)));
  };

  const setSummary = (id, index, value) => {
    setOtherInfo((prev) => prev.map((item) => (item.id === id ? { ...item, summary: item.summary.map((s, i) => (i === index ? value : s)) } : item)));
  };

  const setvisible = (id, currentVisible) => {
    setOtherInfo((prev) => prev.map((item) => (item.id === id ? { ...item, visible: !currentVisible } : item)));
  };

  return (
    <div className="flex flex-col ">
      <div className="  mb-2">
        <h3 className="bg-gray-700 text-white  px-4 py-2">Other Information</h3>
        {otherInfo.map((item) => (
          <div key={item.id} className="relative mb-1">
            <h6 className="mb-0">
              <button onClick={() => toggleAccordionItem(item.id)} className="relative flex items-center w-full p-4 py-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-300 text-slate-700 rounded-t-1 group text-dark-500">
                <span>{item.title}</span>
                {item.expand && <FaChevronUp className="absolute right-0 pt-1 text-base transition-transform" />}
                {!item.expand && <FaChevronDown className="absolute right-0 pt-1 text-base transition-transform" />}
              </button>
            </h6>

            <div className={`${item.expand && "expanded py-4"} expandle px-2   text-sm leading-normal text-blue-gray-500/80 border shadow`}>
              <div className="flex flex-col space-y-2">
                <label htmlFor={`title_${item.id}`} className="font-bold">
                  Title:
                </label>
                <input type="text" id={`title_${item.id}`} name={`title_${item.id}`} value={item.title} onChange={(e) => setInfoTitle(item.id, e.target.value)} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" required />
              </div>

              <div className="flex flex-col space-y-2 relative additional">
                <label htmlFor={`summary_${item.id}`} className="  mt-2 font-bold">
                  Summary:
                </label>
                {item.summary.map((val, index) => (
                  <input onChange={(e) => setSummary(item.id, index, e.target.value)} key={index} type="text" value={val} className="bg-gray-300 p-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500" />
                ))}
                <span className="absolute bottom-0 right-0 rounded w-10 h-9 px-3 bg-gray-700 hover:bg-gray-950 cursor-pointer text-4xl text-white flex justify-center items-center" onClick={() => addSummary(item.id)}>
                  +
                </span>
              </div>

              <div className="mt-2 flex justify-between items-center">
                <div className="flex items-center mt-2 space-x-2">
                  <input type="checkbox" id={`visible_${item.id}`} name={`visible_${item.id}`} checked={item.visible} onChange={() => setvisible(item.id, item.visible)} className="border rounded focus:outline-none w-5 h-5 accent-slate-900 cursor-pointer" />
                  <label htmlFor={`visible_${item.id}`}>Show on Resume</label>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button onClick={addAnotherItem} className="bg-gray-700 hover:bg-gray-950 text-white ml-auto   text-xs  py-1 px-2">
        Add Another Information
      </button>
    </div>
  );
}
