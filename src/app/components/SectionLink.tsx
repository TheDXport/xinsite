"use client";
import { SetStateAction, useState } from "react";

const SectionLink = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleClick = (section: SetStateAction<null>) => {
    // Only update activeLink if clicked on a different section
    if (activeLink !== section) {
      setActiveLink(section);
    }
  };

  return (
    <div className="hidden md:block justify-start items-start w-auto py-8">
      <div className="flex flex-col items-start py-3 space-y-4">
        <ButtonLink label="ABOUT" section="about" activeLink={activeLink} onClick={handleClick} />
        <ButtonLink label="EDUCATION" section="education" activeLink={activeLink} onClick={handleClick} />
        <ButtonLink label="EXPERIENCE" section="experience" activeLink={activeLink} onClick={handleClick} />
        <ButtonLink label="PROJECTS" section="projects" activeLink={activeLink} onClick={handleClick} />
      </div>
    </div>
  );
};

const ButtonLink: React.FC<ButtonProps> = ({ label, section, activeLink, onClick }) => {
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
        className={`pl-6 transition-all duration-300 ease-in-out ${
          isActive || isHovered ? "text-white" : "text-slate-400"
        } ${isActive || isHovered ? "ml-16" : "ml-10"}`}>
        {label}
      </span>
    </a>
  );
};

export default SectionLink;
