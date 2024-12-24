"use client";
import { SetStateAction, useState } from "react";

const SectionLink = () => {
  const [activeLink, setActiveLink] = useState("ABOUT");

  const handleClick = (section: SetStateAction<string>) => {
    // Only update activeLink if clicked on a different section
    if (activeLink !== section) {
      setActiveLink(section);
    }
  };

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

const ButtonLink: React.FC<props> = ({ label, section, activeLink, onClick }) => {
  const isActive = activeLink === section;
  const [isHovered, setIsHovered] = useState(false);

  // Handle hover effect
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <a
      href={`#${section}`}
      onClick={() => onClick(section)}
      className="relative text-md cursor-pointer group flex items-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {/* Dash span */}
      <span
        className={`absolute left-0 h-[0.08rem] ${
          isHovered || isActive ? "bg-white" : "bg-slate-400"
        } transition-all duration-300 ease-in-out ${isActive || isHovered ? "w-20" : "w-12"}`}
      />
      {/* Label */}
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
