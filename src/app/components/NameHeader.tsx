import { articulatExtraBold, articulatMedium } from "../fonts";

const NameHeader = () => {
  return (
    <div className="flex flex-col p-32">
      <h1 className={`${articulatExtraBold.className} text-8xl drop-shadow-3xl`}>Xin Dong</h1>
      <h3 className={`${articulatMedium.className}`}>Student, Developer, Designer</h3>
      <p className={`${articulatMedium.className}`}>
        I enjoy creating thoughtful user experiences with precise attention to detail.
      </p>
    </div>
  );
};

export default NameHeader;
