"use client"; // Mark this layout as a client component

import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { useEffect, useState } from "react";
import { ThemeProvider } from "./provider";
import { FloatingDockDemo } from "@/components/ui/FloatingDock";
import { Spotlight } from "@/components/ui/Spotlight";
import { ModeToggle } from "@/components/ui/Modetoggle";

// Load local fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

// Metadata for the page
// export const metadata: Metadata = {
//   title: "Kritsakorn's Portfolio",
//   description: "Modern & Minimalist portfolio",
// };

// Hydration-safe ThemeProvider wrapper
function HydrationSafeThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <div style={{ visibility: "hidden" }} />;
  }

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </ThemeProvider>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="top-10 left-full h-[80vh] w-[50vw]"
            fill="purple"
          />
          <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="blue" />
          <HydrationSafeThemeProvider>
            <div className="flex flex-row justify-center items-center">
              <FloatingDockDemo />
              <ModeToggle />
            </div>
            {children}
          </HydrationSafeThemeProvider>
        </div>
      </body>
    </html>
  );
}
