import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Bai_Jamjuree } from "next/font/google";
import { cn } from "@/lib/utils";
import { AvatarIcon } from "@radix-ui/react-icons";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["700"],
});

const Navbar = () => {
  return (
    <nav className="w-full relative flex items-center justify-between ">
      <Link
        className={cn("font-bold text-[25px] uppercase", baiJamjuree.className)}
        href="/"
      >
        Next<span className="text-primary">Blog</span>
      </Link>

      <div className="flex items-center gap-x-3">
        <Link
          className="inline-block p-1.5 bg-white shadow-sm rounded-md border"
          href="/auth/login"
        >
          <AvatarIcon className="w-6 h-6" />
        </Link>
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
