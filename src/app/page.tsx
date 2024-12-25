"use client";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import NameHeader from "./components/NameHeader";
import Projects from "./components/Projects";
import ResumeButton from "./components/ResumeButton";
import SectionLink from "./components/SectionLink";
import SocialLinks from "./components/SocialLinks";
import { articulatExtraBold, articulatNormal, SFProMedium } from "./fonts";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!heroRef.current) return;
      const { clientX, clientY } = ev;
      const scrollX = window.scrollX;
      const scrollY = window.scrollY;
      heroRef.current.style.setProperty("--x", `${clientX + scrollX}px`);
      heroRef.current.style.setProperty("--y", `${clientY + scrollY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <div ref={heroRef} className="hero absolute -z-10 w-full invisible-scrollbar">
      <div className="w-full h-full flex flex-col text-white ">
        {/* Container for Div 2 and Div 3 */}
        <div className="flex flex-col sm:flex-col md:flex-row">
          {/* RED: Div 2: Left half, unscrollable */}
          <div className="w-full md:w-1/2 lg:w-1/2 p-4 mt-24 md:mt-36 lg:mt-42 pl-0 sm:pl-6 md:pl-9 lg:pl-40 xl:pl-52 overflow-hidden md:top-0 md:fixed lg:top-0 lg:fixed">
            {/* ORANGE */}
            <div className={`${articulatNormal.className}  flex flex-col pl-10 md:pl-4 lg:pl-4 w-92`}>
              <NameHeader />
              <SectionLink />
              <ResumeButton />
              <SocialLinks />
            </div>
          </div>

          {/* Div 3: Right half, scrollable */}
          <div
            className={`${SFProMedium.className} mt-6 md:mt-6 lg:mt-6 md:ml-[50vw] lg:ml-[55vw] md:w-3/4 lg:w-[40rem] p-10 md:py-5 lg:p-8 overflow-y-scroll invisible-scrollbar px-18 xl:px-14 `}>
            <About />
            <Education />
            <Experience />
            <Projects />
          </div>
        </div>
      </div>
    </div>
  );
}
