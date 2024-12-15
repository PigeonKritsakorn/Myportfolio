import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import React from "react";
import gradphoto from "@/components/photo/photo.jpg";
import MagicButton from "@/components/ui/MagicButton";
import { TimelineDemo } from "@/components/ui/TimelineStudy";
import { StickyScrollRevealDemo } from "@/components/ui/StickyScroll";

const testimonials = [
  {
    quote: "No pain, No gain",
    name: "Kritsakorn Sripuritanont",
    designation: "Front End Developer",
    src: gradphoto,
  },
  {
    quote: "Implementation ",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "",
  },
  {
    quote: "This solution ",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "",
  },
  {
    quote:
      "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "",
  },
];

function About() {
  return (
    <div>
      <div className="flex flex-row">
        <AnimatedTestimonials testimonials={testimonials} />
        <StickyScrollRevealDemo />
      </div>

      <TimelineDemo />
      {/* <div>
        <MagicButton title="Show My Work" position="right" />
      </div> */}
    </div>
  );
}

export default About;
