"use client";
import { useAuthContext } from "@/context/AuthContext";
import { FcGoogle } from "react-icons/fc";

// import { auth } from "@/auth";

import * as actions from "@/actions/index";

import Image from "next/image";

export default function HeaderAuth() {
  const { user, loading } = useAuthContext();
  const handleSignInWithGoogle = async () => {
    // Attempt to sign in with provided email and password
    const { result, error } = await actions.signInWithGoogle();

    if (error) {
      // Display and log any sign-in errors
      console.log(error);
      return;
    }
  };

  let authContent;
  if (loading) {
    authContent = (
      <div className="ml-auto h-[35px] max-w-[150px] w-full  ">
        <div className="animate-pulse flex space-x-3 justify-center">
          <div className="flex-1 space-y-2 py-1">
            <div className="grid grid-cols-1 space-y-2 ">
              <div className="h-2 bg-slate-200 rounded col-span-1"></div>

              <div className="h-2 bg-slate-200 rounded col-span-1"></div>
            </div>
          </div>
          <div className="rounded-full bg-slate-200 h-8 w-8"></div>
        </div>
      </div>
    );
  } else {
    if (user) {
      authContent = (
        <div className="ml-auto flex justify-end items-center">
          {user.image && <Image alt="user image" width={300} height={300} className="cursor-pointer" src={"session.data.user.image" || ""} />}

          <div>
            <form action={actions.handleSignOut} class="group relative ">
              <button className="text-gray-700 hover:text-white hover:bg-gray-700 transition-all font-bold py-2 px-2 sm:px-6   border border-gray-700 " type="submit">
                Sign Out
              </button>
              <span class=" w-[80px] absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Sign Out</span>
            </form>
          </div>
        </div>
      );
    } else {
      authContent = (
        <div className="ml-auto flex  justify-end   items-center group relative ">
          <button onClick={handleSignInWithGoogle} className="text-gray-700 hover:text-white hover:bg-gray-700 transition-all font-bold py-2 px-2 sm:px-6   border border-gray-700  ">
            <FcGoogle />
            Sign In
          </button>
          <span class=" w-[180px] absolute -top-10 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">Sign In to track progress!</span>
        </div>
      );
    }
  }

  return authContent;
}
