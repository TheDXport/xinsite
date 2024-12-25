import { articulatMedium, SFProBold, SFProRegular } from "../fonts";

// Interface to define the structure of each education item
interface EducationItemProps {
  schoolName: string;
  graduationYear: string;
  coursework: string;
  achievements?: string; // Optional property for achievements
}

// The main Education component
const Education = () => {
  // Array of education data
  const educationData: EducationItemProps[] = [
    {
      schoolName: "Binghamton University",
      graduationYear: "Class of 2028",
      coursework:
        "Relevant Coursework: Programming with Object & Data, Programming & Hardware Fundamentals, Linear Algebra, Calculus III",
    },
    {
      schoolName: "Franklin Delano Roosevelt High School",
      graduationYear: "Class of 2024",
      coursework: "Relevant Coursework: AP Computer Science A, AP Computer Science Principles, AP Calculus BC",
      achievements:
        "Achievements: Ambassador Leadership Award, 2nd Place KISS Robotics Competition, Old Dealers Scholarship, Principal's List",
    },
  ];

  return (
    <section className="pt-24" id="EDUCATION">
      <div className={`${articulatMedium.className} text-[#979797]`}>education</div>
      <span className="absolute h-[0.08rem] bg-[#979797] w-72 mt-[-2px]" />
      <div className={`${SFProRegular.className} flex flex-col tracking-[0.01em] space-y-6`}>
        {educationData.map((item, index) => (
          <div key={index} className="mt-4 py-5 px-6 box">
            <h1 className={`${SFProBold.className} text-xl`}>{item.schoolName}</h1>
            <h2 className="text-[#d7d7d7]">{item.graduationYear}</h2>
            <p className="mt-1 text-[#a3a3a3]">{item.coursework}</p>
            {/* Conditionally render achievements if available */}
            {item.achievements && <p className="text-[#a3a3a3]">{item.achievements}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
