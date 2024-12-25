import { articulatMedium } from "../fonts";
import { Gloock, Corinthia } from "next/font/google";

const gloock = Gloock({
  weight: "400",
  subsets: ["latin"],
});

const corinthia = Corinthia({
  weight: "700",
  subsets: ["latin"],
});

const NameHeader = () => {
  return (
    <div className="flex flex-col justify-center items-start">
      <h1
        className={`${gloock.className} pb-2 text-6xl md:text-7xl lg:text-7xl drop-shadow-3xl bg-gradient-to-b from-white via-[#d8d1db] to-[#654067] inline-block text-transparent bg-clip-text`}>
        Xin Dong
      </h1>
      <h3 className={`${articulatMedium.className} pt-1 text-xl text-white`}>
        Student, Developer, <span className={`${corinthia.className} text-4xl pl-1 `}>Designer.</span>
      </h3>
      <p className={`${articulatMedium.className} w-4/5 pt-4 text-xl text-passiveText text-wrap`}>
        I create thoughtful user experiences with precise attention to detail.
      </p>
    </div>
  );
};

export default NameHeader;
