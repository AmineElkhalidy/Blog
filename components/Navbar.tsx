import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";

const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center justify-between ">
      <Link className="font-bold text-3xl" href="/">
        Next<span className="text-primary">Blog</span>
      </Link>

      <ModeToggle />
    </nav>
  );
};

export default Navbar;
