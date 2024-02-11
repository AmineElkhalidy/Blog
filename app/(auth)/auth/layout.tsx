import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next.js Blog Website",
  description:
    "This is a blog website built using Next.js, Sanity, TailwindCSS and Shadcn...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main
            className={cn(
              "w-full min-h-screen flex justify-center items-center py-10",
              inter.className
            )}
          >
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
