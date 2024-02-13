import React from "react";
import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { Bai_Jamjuree } from "next/font/google";
import { cn } from "@/lib/utils";
import { AvatarIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs";

const baiJamjuree = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["700"],
});

const Navbar = async () => {
  // Get the Backend API User object when you need access to the user's information
  const user = await currentUser();

  return (
    <nav className="w-full relative flex items-center justify-between">
      <Link
        className={cn("font-bold text-[25px] uppercase", baiJamjuree.className)}
        href="/"
      >
        Next<span className="text-primary">Blog</span>
      </Link>

      <div className="flex items-center gap-x-3">
        {user ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <Button variant="ghost" asChild className="px-1.5">
            <Link
              className="inline-block bg-white dark:bg-black shadow-sm rounded-md border"
              href="/sign-in"
            >
              <AvatarIcon className="w-6 h-6" />
            </Link>
          </Button>
        )}

        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
