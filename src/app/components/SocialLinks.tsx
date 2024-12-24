"use client";
import { IoMail } from "react-icons/io5";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { useState } from "react";

const SocialLinks = () => {
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null); // Track hovered icon by ID

  const handleMouseEnter = (icon: string) => setHoveredIcon(icon);
  const handleMouseLeave = () => setHoveredIcon(null);

  return (
    <div>
      <div className="flex flex-row mt-12 space-x-8">
        <a
          href=""
          onMouseEnter={() => handleMouseEnter("github")}
          onMouseLeave={handleMouseLeave}
          className={`transform transition-all duration-300 ${
            hoveredIcon === "github" ? "scale-110 translate-y-[-5px] text-white" : "text-white/80"
          }`}>
          <FaGithubSquare size={35} />
        </a>
        <a
          href=""
          onMouseEnter={() => handleMouseEnter("linkedin")}
          onMouseLeave={handleMouseLeave}
          className={`transform transition-all duration-300 ${
            hoveredIcon === "linkedin" ? "scale-110 translate-y-[-5px] text-white" : "text-white/80"
          }`}>
          <FaLinkedin size={35} />
        </a>
        <a
          href=""
          onMouseEnter={() => handleMouseEnter("mail")}
          onMouseLeave={handleMouseLeave}
          className={`transform transition-all duration-300 ${
            hoveredIcon === "mail" ? "scale-110 translate-y-[-5px] text-white" : "text-white/80"
          }`}>
          <IoMail size={35} />
        </a>
      </div>
    </div>
  );
};

export default SocialLinks;
