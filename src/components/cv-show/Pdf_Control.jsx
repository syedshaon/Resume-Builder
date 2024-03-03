import { ImZoomIn } from "react-icons/im";
import { ImZoomOut } from "react-icons/im";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { useAuthContext } from "@/context/AuthContext";

function Pdf_Control() {
  const { setZoomLevel } = useAuthContext();

  const zoomIn = () => {
    setZoomLevel((prevZoom) => prevZoom + 0.1);
  };

  const zoomOut = () => {
    setZoomLevel((prevZoom) => Math.max(0.1, prevZoom - 0.1));
  };

  const downloadPdf = () => {
    window.print();
  };

  return (
    <div className="control buttons flex justify-end gap-4 mb-4 items-center mr-6">
      <FaCloudDownloadAlt className="cursor-pointer text-gray-600 hover:text-gray-800 text-2xl " onClick={downloadPdf} />
      <ImZoomIn className="cursor-pointer text-gray-600 hover:text-gray-800   text-2xl" onClick={zoomIn} />
      <ImZoomOut className=" cursor-pointer text-gray-600 hover:text-gray-800   text-2xl  " onClick={zoomOut} />
    </div>
  );
}

export default Pdf_Control;
