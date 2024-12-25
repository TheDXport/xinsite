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
        className={`${DMMono.className} transform translate-all duration-500 pt-3 md:pt-4 pb-4 md:pb-5 px-6 md:px-9 text-md border-[1.5px] rounded-xl border-[#a2a1a3] text-[#dbdadc] hover:text-white hover:text-mdandlg `}>
        get my resume
      </a>
    </div>
  );
};

export default ResumeButton;
