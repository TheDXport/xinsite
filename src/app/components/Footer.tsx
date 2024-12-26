import localFont from "next/font/local";

const SFProRegular = localFont({
  src: "../../../public/fonts/sfproregular.otf",
});
const Footer = () => {
  return (
    <footer className={`${SFProRegular.className} mt-24 py-20 `}>
      <h1>&#169; 2024 Xin Dong. All rights reserved.</h1>
      <h3 className="text-[#a3a3a3]">made with love and the loss of peeky</h3>{" "}
    </footer>
  );
};

export default Footer;
