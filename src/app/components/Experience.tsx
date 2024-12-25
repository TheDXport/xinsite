import localFont from "next/font/local";

const articulatMedium = localFont({
  src: "../../../public/fonts/articulatmedium.otf",
});
const SFProBold = localFont({
  src: "../../../public/fonts/sfprobold.otf",
});

const SFProLightItalic = localFont({
  src: "../../../public/fonts/sfprolightitalic.otf",
});
const SFProRegular = localFont({
  src: "../../../public/fonts/sfproregular.otf",
});

interface ExperienceProps {
  timeframe: string;
  organizationRole: string;
  bullet1?: string;
  bullet2?: string;
  bullet3?: string;
}

const Experience = () => {
  const experienceData: ExperienceProps[] = [
    {
      timeframe: "Sep 2023 — June 2024",
      organizationRole: "FDRCodes, Founder",
      bullet1:
        "Designed and launched tailored curricula for Java and Python in my club, enabling 30+ students to master core programming concepts through adaptive content suited to diverse skill levels and prior experiences.",
    },
    {
      timeframe: "Jan 2021 — June 2024",
      organizationRole: "FDR Robotics Team",
      bullet1:
        "Conducted rigorous testing and debugging protocols to identify technical issues for optimal performance. Finished Second Place at the 2022 Regional KISS Robotics Botball Competition",
    },
  ];
  return (
    <section className="pt-24 section" id="EXPERIENCE">
      <div className={`${articulatMedium.className} text-[#979797]`}>experience</div>
      <span className="absolute h-[0.08rem] bg-[#979797] w-72 mt-[-2px]" />
      <div>
        {experienceData.map((item, index) => (
          <div key={index} className="tracking-[0.01em] mt-3 pb-4">
            <h2 className={`${SFProLightItalic.className} text-sm text-[#9e9e9e]`}>{item.timeframe}</h2>
            <h1 className={`${SFProBold.className} text-xl text-[#d8d6d9]`}>{item.organizationRole}</h1>
            <div className={`${SFProRegular.className} flex flex-col text-[#989898]`}>
              <p>{item.bullet1}</p>
              <p>{item.bullet2}</p>
              <p>{item.bullet3}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
