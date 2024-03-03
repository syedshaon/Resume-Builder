"use client";
import { useAuthContext } from "@/context/AuthContext";

// import { auth } from "@/auth";

import * as actions from "@/actions/index";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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
          {user.image && <Image width={300} height={300} className="cursor-pointer" src={"session.data.user.image" || ""} />}

          <div>
            <form action={actions.handleSignOut}>
              <button title="Sign Out" className="text-white p-2 px-4    bg-gray-700 hover:bg-gray-950" type="submit">
                Sign Out
              </button>
            </form>
          </div>
        </div>
      );
    } else {
      authContent = (
        <div className="ml-auto flex  justify-end   items-center">
          <button onClick={handleSignInWithGoogle} title="Sign In to track progress!" className="text-white p-2    bg-gray-700">
            Sign In to track progress!
          </button>
        </div>
      );
    }
  }

  return authContent;
}
