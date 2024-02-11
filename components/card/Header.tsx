import React from "react";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface HeaderProps {
  label: string;
  screen?: string;
}

const Header = ({ label, screen }: HeaderProps) => {
  return (
    <div className="w-full text-center space-y-4">
      <h1 className={cn("text-3xl font-bold", font.className)}>
        {screen === "login" ? "Sign in to your account" : "Create an account"}
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

export default Header;
