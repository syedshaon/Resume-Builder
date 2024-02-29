"use client";
import LoggedInUsersContent from "@/components/LoggedInUsersContent";

function page() {
  return (
    // LoggedInUsersContent checks whether login status is loading, if logged in or not.
    // Child component can add class!
    <LoggedInUsersContent className="bg-gray-300 h-screen flex items-center justify-center">
      <h1>Only logged-in users can see this content. CONGRATS!</h1>
    </LoggedInUsersContent>
  );
}

export default page;
