import { FaRegKeyboard } from "react-icons/fa6";
import { CgWebsite } from "react-icons/cg";
import { HiOutlineExternalLink } from "react-icons/hi";

import { useState, useEffect } from "react";
import localFont from "next/font/local";

const articulatMedium = localFont({
  src: "../../../public/fonts/articulatmedium.otf",
});
const SFProBold = localFont({
  src: "../../../public/fonts/sfprobold.otf",
});
const SFProRegular = localFont({
  src: "../../../public/fonts/sfproregular.otf",
});

// Define the icon mapping
const iconMapping: { [key: string]: React.ElementType } = {
  FaRegKeyboard: FaRegKeyboard,
  CgWebsite: CgWebsite,
};

interface ProjectProps {
  title: string;
  link: string;
  desc: string;
  icon: string;
  tag1?: string;
  tag2?: string;
  tag3?: string;
  tag4?: string;
}

const Projects = () => {
  const [iconSize, setIconSize] = useState(60);

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth >= 1536) {
        setIconSize(60); // 2xl
      } else if (window.innerWidth >= 1280) {
        setIconSize(60); // xl
      } else if (window.innerWidth >= 1024) {
        setIconSize(50); // lg
      } else if (window.innerWidth >= 768) {
        setIconSize(45); // md
      } else if (window.innerWidth >= 640) {
        setIconSize(68); // sm
      } else {
        setIconSize(65); // Default
      }
    };

    // Set initial size on mount
    updateIconSize();

    // Update the size on resize
    window.addEventListener("resize", updateIconSize);

    return () => {
      window.removeEventListener("resize", updateIconSize);
    };
  }, []);

  const projectData: ProjectProps[] = [
    {
      title: "Algtype",
      link: "https://algtype.vercel.app",
      desc: "Web application for testing the typing speeds of individuals for different algorithms and languages. View your WPM, accuracy, time per word, and errors made",
      icon: "FaRegKeyboard", // Icon string name
      tag1: "Typescript",
      tag2: "Next.js",
    },
    {
      title: "Personal Website",
      link: "https://github.com/TheDXport/xinsite",
      desc: "The current & most revamped version of my portfolio, built in 2024",
      icon: "CgWebsite", // Icon string name
      tag1: "Typescript",
      tag2: "Next.js",
    },
  ];

  return (
    <section
      className="pt-20 mt-20 section animate-fadeIn opacity-0"
      style={{ animationDelay: "2000ms" }}
      id="PROJECTS">
      <div className={`${articulatMedium.className} text-[#979797]`}>projects</div>
      <span className="absolute h-[0.08rem] bg-[#979797] w-72 mt-[-2px]" />

      {/* Flex container for the cards */}
      <div className="flex flex-col mt-4 gap-6 w-full">
        {projectData.map((item, index) => {
          // Get the corresponding icon component from the mapping
          const IconComponent = iconMapping[item.icon];

          return (
            <div key={index} className="flex flex-row space-y-4">
              <div
                className="box2 group flex justify-center items-center p-[15%] sm:p-[15%] md:px-[20%] lg:p-[12%] xl:p-[20%] rounded-2xl "
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}>
                {/* Render the corresponding icon component with dynamic size */}
                <a href={item.link}>
                  <IconComponent
                    size={iconSize}
                    className=" transition-all duration-300 ease-in-out group-hover:scale-105 group-hover:translate-y-[-10px] text-white/70 group-hover:text-white"
                  />
                </a>
              </div>
              <div className="text-start ml-7 tracking-[0.01em] justify-center flex flex-col">
                <a
                  className={`${SFProBold.className} flex text-xl text-[#d8d6d9] transition-all duration-300 ease-in-out hover:text-2xl hover:translate-y-[-2px] hover:text-[#edecec]`}
                  href={item.link}>
                  {item.title} <HiOutlineExternalLink className="ml-1 mt-1" />
                </a>
                <h2 className={`${SFProRegular.className} text-md text-[#989898]`}>{item.desc}</h2>
                <div className="flex flex-wrap gap-3 mt-3 text-sm text-[#e7e7e7]">
                  {/* Tags */}
                  {item.tag1 && <div className="px-5 py-2 box2 rounded-xl">{item.tag1}</div>}
                  {item.tag2 && <div className="px-5 py-2 box2 rounded-xl">{item.tag2}</div>}
                  {item.tag3 && <div className="px-5 py-2 box2 rounded-xl">{item.tag3}</div>}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
