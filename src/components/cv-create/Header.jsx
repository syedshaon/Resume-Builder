import Link from "next/link";
import HeaderAuth from "./HeaderAuth";

import { FaEdit, FaCloudDownloadAlt, FaMagic, FaQuestion } from "react-icons/fa";
import LoadSample from "../cv-control/LoadSample";
import { useAuthContext } from "@/context/AuthContext";

export default function Header() {
  const { showEdit, setShowEdit } = useAuthContext();
  const downloadPdf = () => {
    window.print();
  };

  const personalize = () => {
    setShowEdit(false);
  };
  const editContent = () => {
    setShowEdit(true);
  };
  const howTo = () => {};
  return (
    <nav className="nav flex items-center flex-col gap-3 justify-between mb-7 ">
      <Link href="/" className="font-bold text-2xl text-gray-950">
        Resume Builder
      </Link>

      <div className="flex justify-between items-center w-full">
        <button disabled={showEdit} onClick={editContent} title="Edit">
          <FaEdit className="   text-gray-700 hover:text-gray-950     text-xl transition-all hover:text-2xl w-10 " />
        </button>

        <button disabled={!showEdit} onClick={personalize} title="Personalize">
          <FaMagic className=" text-gray-700 hover:text-gray-950 text-xl transition-all hover:text-2xl w-10 " />
        </button>

        <LoadSample />

        <FaCloudDownloadAlt title="download pdf" className="cursor-pointer text-gray-700 hover:text-gray-950 text-xl transition-all hover:text-2xl w-10 " onClick={downloadPdf} />
        <a title="How To?" aria-label="How To Create Resume?" href="https://www.youtube.com/" target="_blank">
          <FaQuestion className="  text-gray-700 hover:text-gray-950 text-xl transition-all hover:text-2xl w-10 " />
        </a>

        <HeaderAuth />
      </div>
    </nav>
  );
}
