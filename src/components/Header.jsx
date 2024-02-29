import Link from "next/link";

import { Suspense } from "react";

// import { auth } from "@/auth";

// import * as actions from "@/actions/index";
import HeaderAuth from "./HeaderAuth";

export default function Header() {
  return (
    <nav className="shadow mb-6 flex items-center justify-between p-6">
      <Link href="/" className="font-bold">
        Next Starter
      </Link>

      <HeaderAuth />
    </nav>
  );
}
