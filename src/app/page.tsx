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
      <div className="flex flex-col sm:flex-col lg:flex-row">
        {/* RED: Div 2: Left half, unscrollable */}
        <div className="w-full lg:w-1/2 p-4 mt-24 md:mt-36 lg:mt-48 pl-10 lg:pl-44 overflow-hidden lg:top-0 lg:fixed">
          {/* ORANGE */}
          <div className={`${articulatNormal.className}  flex flex-col pl-16 w-92`}>
            <NameHeader />
            <SectionLink />
            <ResumeButton />
            <SocialLinks />
          </div>
        </div>

        {/* Div 3: Right half, scrollable */}
        <div
          className={`${SFProMedium.className} lg:ml-[55vw] w-1/2 p-4 overflow-y-scroll invisible-scrollbar h-auto space-y-96 `}>
          <About />
          <Education />
          <Experience />
          <Projects />
        </div>
      </div>
    </div>
  );
}
