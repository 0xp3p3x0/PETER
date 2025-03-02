import React from "react";
import footerFooter from "../../assets/img/footer.png";
import instal from "../../assets/img/intal.png";
import tele from "../../assets/img/tele.png";
import X from "../../assets/img/x.png";

const Footer = () => {
  return (
    <footer className=" text-white p-4 lg:pl-48 lg:pr-40 items-center flex justify-between">
      <p className="text-lg lg:text-2xl  font-bold">Peter Griffcoin</p>
      <img src={footerFooter} alt="[Footer_footer]" className="w-[93px] h-[27px] lg:w-[186px] lg:h-[54px]" />
      <div className="flex gap-4  h-[27px] lg:w-[186px] lg:h-[54px]">
        <img src={tele} alt="[tele]" className="cursor-pointer" onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")}/>
        <img src={X} alt="[X]" className="cursor-pointer" onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")} />
        <img src={instal} alt="[instal]" className="cursor-pointer" onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")}/>
      </div>
    </footer>
  );
};

export default Footer;
