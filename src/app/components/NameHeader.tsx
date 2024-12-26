import localFont from "next/font/local";

const articulatMedium = localFont({
  src: "../../../public/fonts/articulatmedium.otf",
});
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
      {/* Component 1 with no delay */}
      <h1 className={`${gloock.className}  pb-2 text-6xl md:text-7xl lg:text-7xl space-x-4 `}>
        <span
          className="animate-fadeIn opacity-0 drop-shadow-3xl bg-gradient-to-b from-white via-[#d8d1db] to-[#7576B8] inline-block text-transparent bg-clip-text"
          style={{ animationDelay: "30ms" }}>
          Xin
        </span>
        <span
          className="animate-fadeIn opacity-0 drop-shadow-3xl bg-gradient-to-b from-white via-[#d8d1db] to-[#7576B8] inline-block text-transparent bg-clip-text"
          style={{ animationDelay: "100ms" }}>
          Dong
        </span>
      </h1>

      <h3 className={`${articulatMedium.className} pt-1 space-x-1 text-xl text-white`}>
        <span className="animate-fadeIn opacity-0" style={{ animationDelay: "200ms" }}>
          Student,
        </span>
        <span className="animate-fadeIn opacity-0" style={{ animationDelay: "300ms" }}>
          Developer,
        </span>
        <span
          className={`${corinthia.className} text-4xl pl-1 animate-fadeIn opacity-0`}
          style={{ animationDelay: "400ms" }}>
          Designer.
        </span>
      </h3>

      <p className={`${articulatMedium.className} w-4/5 pt-4 text-xl flex flex-wrap text-passiveText `}>
        <span className="animate-fadeIn opacity-0 pr-1 " style={{ animationDelay: "450ms" }}>
          I
        </span>
        <span className="animate-fadeIn opacity-0 pr-1 " style={{ animationDelay: "500ms" }}>
          create
        </span>
        <span className="animate-fadeIn opacity-0 pr-1 " style={{ animationDelay: "550ms" }}>
          thoughtful
        </span>
        <span className="animate-fadeIn opacity-0 pr-1 " style={{ animationDelay: "600ms" }}>
          user
        </span>
        <span className="animate-fadeIn opacity-0 pr-1 " style={{ animationDelay: "650ms" }}>
          experiences
        </span>
        <span className="animate-fadeIn opacity-0 pr-1 " style={{ animationDelay: "700ms" }}>
          with
        </span>
        <span className="animate-fadeIn opacity-0 pr-1 " style={{ animationDelay: "750ms" }}>
          precise
        </span>
        <span className="animate-fadeIn opacity-0 pr-1 " style={{ animationDelay: "800ms" }}>
          attention
        </span>
        <span className="animate-fadeIn opacity-0 pr-1 " style={{ animationDelay: "850ms" }}>
          to
        </span>
        <span className="animate-fadeIn opacity-0 pr-1 " style={{ animationDelay: "900ms" }}>
          detail.
        </span>
      </p>
    </div>
  );
};

export default NameHeader;
