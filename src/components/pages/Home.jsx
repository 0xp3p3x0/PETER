import React from "react";
import petercoin from "../../assets/img/peter-griffcoin.png";
import peterOnepage from "../../assets/img/peter-griffin-pageone.png";
import skypelogo from "../../assets/img/telegram-onepage.png";
import xlogo from "../../assets/img/x-onepage.png";
import installgramlogo from "../../assets/img/installgram-onepage.png";
import { useSpring, animated } from "@react-spring/web";

const Home = () => {
  const fadeInLeft = (delay) =>
    useSpring({
      from: { opacity: 0, transform: "translateX(-10vw)" },
      to: { opacity: 1, transform: "translateX(0px)" },
      config: { duration: 300, tension: 200, friction: 20 },
      delay: delay, // Delay each element separately
    });

  const textAnim = fadeInLeft(600);
  const buttonAnim = fadeInLeft(800);
  const socialAnim = fadeInLeft(1000);
  return (
    <div
      id="Home"
      className=" px-10 lg:pl-44 flex flex-col-reverse 2xl:flex-row h-screen justify-between items-center mt-24"
    >
      <div className="text-center md:flex-col md:text-left flex flex-col items-center md:items-start">
        <animated.img
          style={fadeInLeft(500)}
          src={petercoin}
          alt="[petercoin]"
          className="my-4 mb-16 "
        />
        <animated.p
          className="text-base sm:text-lg md:text-2xl lg:text-[34px] leading-[24px] sm:leading-[36px] md:leading-[48px] lg:leading-[56px] font-bold text-black"
          style={{
            ...textAnim,
            fontFamily: "'Baloo Da' , cursive",
          }}
        >
          As a Family Guy, I invite you to join our community and reach great
          heights together. Become part of the family and let's make it rain
          PeterGriffcoins!
        </animated.p>
        <animated.button
          className=" sm:w-auto rounded-xl border border-b-4 md:border-b-6 lg:border-b-8 border-black 
             px-2 sm:px-4 py-3 sm:py-4 text-sm sm:text-lg md:text-xl lg:text-[23px] 
             text-black mt-8 sm:mt-10 font-bold"
          style={{
            ...buttonAnim,
            fontFamily: "'Baloo Da', cursive",
          }}
        >
          JOIN THE $PGC FAMILY:
        </animated.button>

        <animated.div
          className="flex space-x-4 flex-wrap justify-center"
          style={socialAnim}
        >
          <img
            src={skypelogo}
            alt="[skypelogo]"
            className="my-4 w-12 sm:w-16 md:w-20 lg:w-[100px] h-12 sm:h-16 md:h-20 lg:h-[100px]  cursor-pointer"
            onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")}
          />
          <img
            src={xlogo}
            alt="[xlogo]"
            className="my-4 w-12 sm:w-16 md:w-20 lg:w-[100px] h-12 sm:h-16 md:h-20 lg:h-[100px]  cursor-pointer "
            onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")}
          />
          <img
            src={installgramlogo}
            alt="[installgramlogo]"
            className="my-4 w-12 sm:w-16 md:w-20 lg:w-[100px] h-12 sm:h-16 md:h-20 lg:h-[100px]   cursor-pointer "
            onClick={() => window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")}
          />
        </animated.div>
      </div>
      <img
        src={peterOnepage}
        alt="[Peter_onepage]"
        className="mt-16 w-96  lg:w-[40%] 2xl:w-full z-10"
      />
    </div>
  );
};
export default Home;
