import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import NameHeader from "./components/NameHeader";
import Projects from "./components/Projects";
import ResumeButton from "./components/ResumeButton";
import SectionLink from "./components/SectionLink";
import SocialLinks from "./components/SocialLinks";
import { articulatExtraBold, articulatNormal, SFProMedium } from "./fonts";

export default function Home() {
  return (
    <div className="h-screen flex flex-col text-white ">
      {/* Container for Div 2 and Div 3 */}
      <div className="flex flex-col sm:flex-col md:flex-row">
        {/* RED: Div 2: Left half, unscrollable */}
        <div className="w-full lg:w-1/2 p-4 mt-24 md:mt-36 lg:mt-48 pl-0 sm:pl-6 md:pl-9 lg:pl-40 xl:pl-52 overflow-hidden lg:top-0 lg:fixed">
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
          className={`${SFProMedium.className} mt-16 md:mt-36 lg:mt-48 lg:ml-[55vw] md:w-3/4 lg:w-[40rem] p-10 md:py-5 lg:p-8 overflow-y-scroll invisible-scrollbar h-auto space-y-20 px-18 xl:px-14 `}>
          <About />
          <Education />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}
