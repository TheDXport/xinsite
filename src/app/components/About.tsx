import { articulatMedium } from "../fonts";

const About = () => {
  return (
    <section className="" id="ABOUT">
      <div className={`${articulatMedium.className}`}>about</div>
      <span className="absolute h-[0.08rem] bg-slate-400 w-72 mt-[-2px]" />
      <div className="mt-1 text-lg text-[#5c5c5c] max-w-full">
        Hi! I am a Chinese-American raised in Brooklyn, New York, and currently studying{" "}
        <span className="bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#6d6971] inline text-transparent bg-clip-text">
          @ Binghamton University
        </span>{" "}
        pursuing a{" "}
        <span className="bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#6d6971] inline text-transparent bg-clip-text">
          major in Computer Science.
        </span>{" "}
        I have been studying and programming since the sophomore year of high school. I am comfortable working with
        languages such as{" "}
        <span className="bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#6d6971] inline text-transparent bg-clip-text">
          Java
        </span>
        ,{" "}
        <span className="bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#6d6971] inline text-transparent bg-clip-text">
          Python
        </span>
        ,{" "}
        <span className="bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#6d6971] inline text-transparent bg-clip-text">
          Javascript
        </span>
        , and{" "}
        <span className="bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#6d6971] inline text-transparent bg-clip-text">
          Typescript
        </span>
        , complementing them with frameworks such as{" "}
        <span className="bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#6d6971] inline text-transparent bg-clip-text">
          Next.js
        </span>
        ,{" "}
        <span className="bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#6d6971] inline text-transparent bg-clip-text">
          React.js
        </span>
        , and{" "}
        <span className="bg-gradient-to-b from-[#d0cdd4] via-[#c0bdc4] to-[#6d6971] inline text-transparent bg-clip-text">
          Tailwind CSS
        </span>
        .
      </div>
    </section>
  );
};

export default About;
