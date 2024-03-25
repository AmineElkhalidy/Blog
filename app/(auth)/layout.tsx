import React from "react";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const font = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sign in to your account",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div
      className={cn(
        "min-h-screen w-full flex items-center justify-center py-10",
        font.className
      )}
    >
      {children}
    </div>
  );
};

export default RootLayout;
