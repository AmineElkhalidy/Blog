import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
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
    <ClerkProvider>
      <html lang="en">
        <body className="font-inter">
          <main
            className={cn(
              "h-full flex items-center justify-center",
              font.className
            )}
          >
            {children}
          </main>
        </body>
      </html>
    </ClerkProvider>
  );
};

export default RootLayout;
