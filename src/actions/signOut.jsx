import { signOut, getAuth } from "firebase/auth";
const auth = getAuth();

export const handleSignOut = async () => {
  try {
    await signOut(auth);
    // User is signed out successfully
    console.log("User signed out successfuly!");
    // Optionally, redirect or update state to reflect logout
  } catch (error) {
    console.error("Error signing out:", error);
    // Handle any errors that might occur during signout
  }
};
