import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { ModeToggle } from "@/components/ui/Modetoggle";
import Gridui from "@/components/Grid";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full flex flex-col justify-between">
        <div className="flex flex-row justify-end pt-10">
          <ModeToggle />
        </div>
        <FloatingNav
          navItems={[{ name: "Home", link: "/", icon: <FaHome /> }]}
        />
        <Hero />
        <Gridui />
      </div>
    </main>
  );
}
