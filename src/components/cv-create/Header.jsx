"use client";

import Link from "next/link";
import HeaderAuth from "./HeaderAuth";
import { useRouter } from "next/navigation";

import { FaEdit, FaMagic, FaQuestion } from "react-icons/fa";
import LoadSample from "../cv-control/LoadSample";
import { useAuthContext } from "@/context/AuthContext";

export default function Header() {
  const { showEdit, setShowEdit } = useAuthContext();
  const router = useRouter();

  const personalize = () => {
    setShowEdit(false);
  };
  const editContent = () => {
    setShowEdit(true);
  };

  return (
    <nav className="nav flex items-center flex-col gap-3 justify-between mb-7 ">
      <Link href="/" className="font-bold text-2xl text-gray-950">
        Resume Builder
      </Link>

      <div className="flex justify-between items-center w-full">
        <div className="group relative ">
          <button disabled={showEdit} onClick={editContent}>
            <FaEdit className="   text-gray-700 hover:text-gray-950     text-xl transition-all hover:text-2xl w-10 " />
          </button>

          <span className="absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Edit</span>
        </div>

        <div className="group relative ">
          <button className="relative   z-10" disabled={!showEdit} onClick={personalize}>
            <FaMagic className=" text-gray-700 hover:text-gray-950 text-xl transition-all hover:text-2xl w-10 " />
          </button>

          <span className="absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Personalize</span>
          <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-violet-600 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200  "></div>
        </div>

        <div className="group relative ">
          <LoadSample />
          <span className="w-[140px] absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Generate Sample</span>
        </div>

        <div className="group relative ">
          <Link href="/how-to-create-resume" aria-label="How To Create Resume?">
            <FaQuestion className="  text-gray-700 hover:text-gray-950 text-xl transition-all hover:text-2xl w-10 " />
          </Link>
          <span className=" w-[80px] absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">How To?</span>
        </div>

        <HeaderAuth />
      </div>
    </nav>
  );
}
