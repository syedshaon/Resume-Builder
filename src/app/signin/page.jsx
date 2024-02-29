"use client";
import firebase_app from "@/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import * as actions from "@/actions/index";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSignInWithGoogle = async (event) => {
    event.preventDefault();
    // Attempt to sign in with provided email and password
    const { result, error } = await actions.signInWithGoogle();

    if (error) {
      // Display and log any sign-in errors
      console.log(error);
      return;
    }

    // Sign in successful
    // console.log(result);

    // Redirect to the admin page
    // Typically you would want to redirect them to a protected page an add a check to see if they are admin or
    // create a new page for admin
    router.push("/protected");
  };

  // Handle form submission
  const handleForm = async (event) => {
    event.preventDefault();

    // Attempt to sign in with provided email and password
    const { result, error } = await actions.signIn(email, password);

    if (error) {
      // Display and log any sign-in errors
      console.log(error);
      return;
    }

    // Sign in successful
    // console.log(result);

    // Redirect to the admin page
    // Typically you would want to redirect them to a protected page an add a check to see if they are admin or
    // create a new page for admin
    router.push("/protected");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-full max-w-xs">
        <form onSubmit={handleForm} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <h1 className="text-3xl font-bold mb-6 text-black">Sign In</h1>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input onChange={(e) => setEmail(e.target.value)} required type="email" name="email" id="email" placeholder="example@mail.com" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input onChange={(e) => setPassword(e.target.value)} required type="password" name="password" id="password" placeholder="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
          </div>
          <div className="flex items-center justify-between">
            <button type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded">
              Sign In
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <button onClick={handleSignInWithGoogle} type="submit" className="w-full bg-blue-500 text-white font-semibold py-2 rounded">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Page;
