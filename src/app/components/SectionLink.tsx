"use client";
import { SetStateAction, useState, useEffect } from "react";

const SectionLink = () => {
  const [activeLink, setActiveLink] = useState("ABOUT");

  // Handle click event to update active link
  const handleClick = (section: SetStateAction<string>) => {
    if (activeLink !== section) {
      setActiveLink(section);
    }
  };

  useEffect(() => {
    const options = {
      root: null, // Viewport is the root
      rootMargin: "0px", // No offset
      threshold: 0.99, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      // Sort sections based on how far they are from the top
      const visibleSections = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => {
          // Sorting entries by their distance from the top of the viewport
          return a.boundingClientRect.top - b.boundingClientRect.top;
        });

      if (visibleSections.length > 0) {
        // Set the active link to the section that's closest to the top of the viewport
        setActiveLink(visibleSections[0].target.id);
      }
    }, options);

    // Observe the sections with the id attribute
    const sections = document.querySelectorAll(".section");
    sections.forEach((section) => {
      observer.observe(section);
    });

    // Cleanup observer on component unmount
    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div className="hidden md:block justify-start items-start w-auto py-8">
      <div className="flex flex-col items-start py-3 space-y-5">
        <ButtonLink label="ABOUT" section="ABOUT" activeLink={activeLink} onClick={handleClick} />
        <ButtonLink label="EDUCATION" section="EDUCATION" activeLink={activeLink} onClick={handleClick} />
        <ButtonLink label="EXPERIENCE" section="EXPERIENCE" activeLink={activeLink} onClick={handleClick} />
        <ButtonLink label="PROJECTS" section="PROJECTS" activeLink={activeLink} onClick={handleClick} />
      </div>
    </div>
  );
};

const ButtonLink: React.FC<{
  label: string;
  section: string;
  activeLink: string;
  onClick: (section: SetStateAction<string>) => void;
}> = ({ label, section, activeLink, onClick }) => {
  const isActive = activeLink === section;
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a
      href={`#${section}`}
      onClick={() => onClick(section)}
      className="relative text-md cursor-pointer group flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <span
        className={`absolute left-0 h-[0.08rem] ${
          isHovered || isActive ? "bg-white" : "bg-slate-400"
        } transition-all duration-300 ease-in-out ${isActive || isHovered ? "w-20" : "w-12"}`}
      />
      <span
        className={`pl-6 transition-all duration-300 ease-in-out tracking-wider ${
          isActive || isHovered ? "text-white" : "text-slate-400"
        } ${isActive || isHovered ? "ml-16" : "ml-10"}`}>
        {label}
      </span>
    </a>
  );
};

export default SectionLink;
