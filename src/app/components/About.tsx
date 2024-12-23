"use client";
import { articulatMedium } from "../fonts";
import { useState } from "react";

const About = () => {
  const [hoveredWord, setHoveredWord] = useState<string | null>(null); // Track hovered icon by ID

  const handleMouseEnter = (word: string) => setHoveredWord(word);
  const handleMouseLeave = () => setHoveredWord(null);

  return (
    <section className="pt-28 select-none" id="ABOUT">
      <div className={`${articulatMedium.className} text-[#979797]`}>about</div>
      <span className="absolute h-[0.08rem] bg-[#979797] w-72 mt-[-2px]" />
      <div className="mt-1 text-lg text-[#5c5c5c] max-w-full transform transition-all duration-700">
        {/* {`${
            hoveredWord === "word0"
              ? "text-xl translate-y-[-5px] "
              : "
          } 
           `} */}
        Hi! I am a Chinese-American raised in Brooklyn, New York, and currently studying{" "}
        <span
          className={`${
            hoveredWord === "boldword0"
              ? "text-lgandxl translate-y-[-5px] bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
              : "bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
          } 
          transform transition-all duration-450 `}
          onMouseEnter={() => handleMouseEnter("boldword0")}
          onMouseLeave={handleMouseLeave}>
          @ Binghamton University
        </span>{" "}
        pursuing a{" "}
        <span
          className={`${
            hoveredWord === "boldword1"
              ? "text-lgandxl translate-y-[-5px] bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
              : "bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
          } 
          transform transition-all duration-450 `}
          onMouseEnter={() => handleMouseEnter("boldword1")}
          onMouseLeave={handleMouseLeave}>
          major in Computer Science.
        </span>{" "}
        I have been studying and programming since the sophomore year of high school. I am comfortable working with
        languages such as{" "}
        <span
          className={`${
            hoveredWord === "boldword2"
              ? "text-lgandxl translate-y-[-5px] bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
              : "bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
          } 
          transform transition-all duration-450 ease-in-out `}
          onMouseEnter={() => handleMouseEnter("boldword2")}
          onMouseLeave={handleMouseLeave}>
          Java
        </span>
        ,{" "}
        <span
          className={`${
            hoveredWord === "boldword3"
              ? "text-lgandxl translate-y-[-5px] bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
              : "bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
          } 
          transform transition-all duration-450 ease-in-out `}
          onMouseEnter={() => handleMouseEnter("boldword3")}
          onMouseLeave={handleMouseLeave}>
          Python
        </span>
        ,{" "}
        <span
          className={`${
            hoveredWord === "boldword4"
              ? "text-lgandxl translate-y-[-5px] bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
              : "bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
          } 
          transform transition-all duration-450 ease-in-out `}
          onMouseEnter={() => handleMouseEnter("boldword4")}
          onMouseLeave={handleMouseLeave}>
          Javascript
        </span>
        , and{" "}
        <span
          className={`${
            hoveredWord === "boldword5"
              ? "text-lgandxl translate-y-[-5px] bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
              : "bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
          } 
          transform transition-all duration-450 ease-in-out `}
          onMouseEnter={() => handleMouseEnter("boldword5")}
          onMouseLeave={handleMouseLeave}>
          Typescript
        </span>
        , complementing them with frameworks such as{" "}
        <span
          className={`${
            hoveredWord === "boldword6"
              ? "text-lgandxl translate-y-[-5px] bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
              : "bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
          } 
          transform transition-all duration-450 ease-in-out `}
          onMouseEnter={() => handleMouseEnter("boldword6")}
          onMouseLeave={handleMouseLeave}>
          Next.js
        </span>
        ,{" "}
        <span
          className={`${
            hoveredWord === "boldword7"
              ? "text-lgandxl translate-y-[-5px] bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
              : "bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
          } 
          transform transition-all duration-450 ease-in-out `}
          onMouseEnter={() => handleMouseEnter("boldword7")}
          onMouseLeave={handleMouseLeave}>
          React.js
        </span>
        , and{" "}
        <span
          className={`${
            hoveredWord === "boldword8"
              ? "text-lgandxl translate-y-[-5px] bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
              : "bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#191515] inline text-transparent bg-clip-text"
          } 
          transform transition-all duration-450 ease-in-out `}
          onMouseEnter={() => handleMouseEnter("boldword8")}
          onMouseLeave={handleMouseLeave}>
          Tailwind CSS
        </span>
        .
      </div>
    </section>
  );
};

export default About;
