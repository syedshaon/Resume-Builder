import { useAuthContext } from "@/context/AuthContext";
import { FaChevronDown, FaChevronUp, FaTrash } from "react-icons/fa";

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

  const setInfoTitle = (id, value) => {
    setOtherInfo((prev) => prev.map((item) => (item.id === id ? { ...item, title: value } : item)));
  };

  const setSummary = (id, index, value) => {
    setOtherInfo((prev) => prev.map((item) => (item.id === id ? { ...item, summary: item.summary.map((s, i) => (i === index ? value : s)) } : item)));
  };

  const setvisible = (id, currentVisible) => {
    setOtherInfo((prev) => prev.map((item) => (item.id === id ? { ...item, visible: !currentVisible } : item)));
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

  const addGap = () => {
    setOtherInfo((prev) => [
      ...prev.map((item) => ({ ...item, expand: false })),
      {
        id: prev.length + 1,
        break: true,
        visible: true,
        expand: false,
      },
    ]);
  };
  const removeGap = (id) => {
    setOtherInfo((prev) => prev.filter((item) => !(item.id === id && item.break)));
  };

  const removeThisInfo = (id) => {
    setOtherInfo((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="flex flex-col ">
      <div className="  mb-2">
        <h3 className="bg-gray-700 text-white  px-4 py-2">Other Information</h3>
        {otherInfo.map((item) =>
          !item.break ? (
            <div key={item.id} className="relative mb-1">
              <div className="mb-0 relative flex items-center justify-between w-full p-4 py-2 font-semibold text-left transition-all ease-in border-b border-solid cursor-pointer border-slate-300 text-slate-700 group text-dark-500">
                {/* Left side: Label */}
                <span>{item.title}</span>

                {/* Right side: Actions */}
                <div className="flex items-center space-x-2">
                  {/* Remove info button */}
                  <button onClick={() => removeThisInfo(item.id)} className="flex items-center text-red-500 hover:text-red-700 transition-colors" aria-label="Remove info">
                    <span className="sr-only">Remove Info</span>
                    <FaTrash className="text-black  " />
                  </button>

                  {/* Toggle accordion button */}
                  <button onClick={() => toggleAccordionItem(item.id)} className="flex items-center text-slate-600 hover:text-slate-800 transition-colors" aria-label="Toggle accordion">
                    {item.expand ? <FaChevronUp className="text-base transition-transform" /> : <FaChevronDown className="text-base transition-transform" />}
                  </button>
                </div>
              </div>

              <div className={`${item.expand && "expanded py-4"} expandle px-2   text-sm leading-normal text-blue-gray-500/80 border shadow`}>
                <div className="flex flex-col space-y-2">
                  <label htmlFor={`other-title_${item.id}`} className="font-bold">
                    Title:
                  </label>
                  <input type="text" name={`other-title_${item.id}`} id={`other-title_${item.id}`} value={item.title} onChange={(e) => setInfoTitle(item.id, e.target.value)} className="bg-gray-300 p-2 border  focus:outline-none focus:ring-1 focus:ring-blue-500" required />
                </div>

                <div className="flex flex-col space-y-2 relative additional">
                  <span className="  mt-2 font-bold">Summary:</span>
                  {item.summary.map((val, index) => {
                    return (
                      <div key={index} className="addition-holder flex w-full">
                        <label className="hidden" htmlFor={`other-summary-${index}-${item.id}`}>{`other-summary-${index}`}</label>
                        <input name={`other-summary-${index}-${item.id}`} id={`other-summary-${index}-${item.id}`} onChange={(e) => setSummary(item.id, index, e.target.value)} type="text" value={val} className="w-full bg-gray-300 p-2 border   focus:outline-none focus:ring-1 focus:ring-blue-500" />
                      </div>
                    );
                  })}
                  <span className="absolute bottom-0 right-0  w-10 h-9 px-3 bg-gray-700 hover:bg-gray-950 cursor-pointer text-4xl text-white flex justify-center items-center" onClick={() => addSummary(item.id)}>
                    +
                  </span>
                </div>

                <div className="mt-2 flex justify-between items-center">
                  <div className="flex items-center mt-2 space-x-2">
                    <input type="checkbox" name={`other-visible_${item.id}`} id={`other-visible_${item.id}`} checked={item.visible} onChange={() => setvisible(item.id, item.visible)} className="border  focus:outline-none w-5 h-5 accent-slate-900 cursor-pointer" />
                    <label htmlFor={`other-visible_${item.id}`}>Show on Resume</label>
                  </div>
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
            </div>
          )
        )}
      </div>
      <div className="flex">
        <button onClick={addGap} className="bg-gray-700 hover:bg-gray-950 text-white text-xs  py-1 px-2">
          Add Gap
        </button>
        <button onClick={addAnotherItem} className="bg-gray-700 hover:bg-gray-950 text-white ml-auto   text-xs  py-1 px-2">
          Add More Info
        </button>
      </div>
    </div>
  );
}
