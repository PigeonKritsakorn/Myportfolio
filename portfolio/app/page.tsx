"use client";

import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ModeToggle } from "@/components/ui/Modetoggle";
import Gridui from "@/components/Grid";
import { FaHome } from "react-icons/fa";
import { FloatingDockDemo } from "@/components/ui/FloatingDock";

export default function Home() {
  return (
    <div className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full flex flex-col justify-between">
        <div className="flex flex-row justify-center items-center">
          {/* <div className="flex flex-row justify-end pt-10">
            <ModeToggle />
          </div> */}
        </div>
        {/* <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        /> */}
        <Hero />
        <Gridui />
      </div>
    </div>
  );
}
