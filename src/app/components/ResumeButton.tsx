import { DM_Mono } from "next/font/google";
const DMMono = DM_Mono({
  weight: "500",
  subsets: ["latin"],
});

const ResumeButton = () => {
  return (
    <div className="mt-9 md:mt-5">
      <a
        href=""
        className={`${DMMono.className} py-4 px-10 text-md bg-gradient-to-r from-white to-[#EBBFFD] text-black rounded-xl`}>
        get my resume
      </a>
    </div>
  );
};

export default ResumeButton;
