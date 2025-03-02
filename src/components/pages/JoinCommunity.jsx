import React from "react";
import peterFive from "../../assets/img/peter-five.png";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";


const JoinCommunity = () => {
  const fadeInLeft = (delay) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const animation = useSpring({
      from: { opacity: 0,},
      to: inView
        ? { opacity: 1,}
        : { opacity: 0, },
      config: { duration: 500, tension: 200, friction: 20 },
      delay: delay, // Delay each element separately
    });
  
    return [ref, animation];
  };
  const [textRef, textAnim] = fadeInLeft(100);
  const [firstRef, firstAnim] = fadeInLeft(200);


  const [imgRef, imgAnim] = (() => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    const animation = useSpring({
      from: { opacity: 0, transform: "translateX(-10vw)" },
      to: inView ?  { opacity: 1, transform: "translateX(0px)" } : { opacity: 0, transform: "translateX(-10vw)" },
      config: { duration: 800, tension: 200, friction: 20 },
      delay : 200
    });
   
    return [ref, animation];
  })();

  return (
    <div
      id="Join_Community"
      className="px-10 lg:pl-44 mt-[750px] space-y-40 h-screen flex flex-col  items-center  lg:pr-44"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-14 ">
        <animated.img src={peterFive} alt="[Peter_five]" ref = {imgRef} style={imgAnim} className="w-[175px] h-[238px] lg:w-[350px] lg:h-[476px]"/>
        <animated.p
          className="text-[24px] lg:text-[38px] font-bold text-white bg-blue-500 rounded-3xl border-2 border-b-8 border-r-8  border-black text-center p-4 lg:py-10 lg:px-20 "
          style={{
            ...textAnim,
            fontFamily: "'Baloo Da' , cursive",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
          }}
          ref = {textRef}
        >
          “EVEN AT MY LOIS, I AM STILL A FALIMY GUY”
        </animated.p>
      </div>
      <animated.div
        className="text-[16px] leading-[20px] lg:text-[20px] lg:leading-[36px] font-bold text-white rounded-3xl border-2 border-white border-r-8 border-b-8 w-full lg:w-[1540px] text-center p-3 lg:p-8 lg:px-36 "
        style={{...firstAnim, fontFamily: "'Baloo Da' , cursive"  }}
        ref = {firstRef}
      >
        <p>
          PeterGriffcoin (PGC) is a fan-created memecoin inspired by the
          character Peter Griffin from Family Guy. All references to Family Guy
          and its characters are used under the principles of fair use for
          parody, homage, and commentary. This website and PGC are not
          affiliated with or endorsed by Family Guy, Fox Broadcasting Company,
          or its affiliates. Family Guy and its characters are trademarks of Fox
          Broadcasting Company.
        </p>
      </animated.div>
    </div>
  );
};

export default JoinCommunity;
