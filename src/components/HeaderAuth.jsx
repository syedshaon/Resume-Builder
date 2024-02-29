"use client";
import { useAuthContext } from "@/actions/AuthContext";

// import { auth } from "@/auth";

import * as actions from "@/actions/index";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function HeaderAuth() {
  const { user, loading } = useAuthContext();

  let authContent;
  if (loading) {
    authContent = (
      <div justify="end" className="p-2 max-w-[250px] w-full  ">
        <div className="animate-pulse flex space-x-3 justify-center">
          <div className="flex-1 space-y-6 py-1">
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                <div className="h-2 bg-slate-200 rounded col-span-1"></div>
              </div>
            </div>
          </div>
          <div className="rounded-full bg-slate-200 h-10 w-10"></div>
        </div>
      </div>
    );
  } else {
    if (user) {
      authContent = (
        <div justify="end" className="flex justify-end items-center">
          {user.image && <Image width={300} height={300} className="cursor-pointer" src={"session.data.user.image" || ""} />}

          <Link href={"/protected"}>Protected</Link>
          <div className="p-4">
            <form action={actions.handleSignOut}>
              <button type="submit">Sign Out</button>
            </form>
          </div>
        </div>
      );
    } else {
      authContent = (
        <div justify="end" className="flex p-4 justify-end gap-3 items-center">
          <Link href={"/protected"}>Protected</Link>
          <Link href={"/signin"}>Sign In</Link>

          <Link href={"/signup"}>Sign Up</Link>
        </div>
      );
    }
  }

  return authContent;
}
