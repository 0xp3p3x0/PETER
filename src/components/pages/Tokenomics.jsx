import React from "react";
import titleThree from "../../assets/img/title-three.png";
import three_1 from "../../assets/img/three-1.png";
import three_2 from "../../assets/img/three-2.png";
import three_3 from "../../assets/img/three-3.png";
import three_4 from "../../assets/img/three-4.png";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";



const Tokenomics = () => {
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
  
  const [textRef, textAnim] = fadeInLeft(200);
  const [firstRef, firstAnim] = fadeInLeft(600);
  const [secondRef, secondAnim] = fadeInLeft(700);
  const [thirdRef, thirdAnim] = fadeInLeft(800);
  const [fourthRef, fourthAnim] = fadeInLeft(900);

  const [imgRef, imgAnim] = (() => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    const animation = useSpring({
      from: { opacity: 0, scale: 0.2 }, // Small and bottom
      to: inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.2, transform: "translateY(100px)" },
      config: { duration: 300, tension: 200, friction: 20 },
      delay: 300,
    });

    return [ref, animation];
  })();
  
  return (
    <div
      id="Tokenomics"
      className=" px-10 lg:pl-44 mt-[340px] space-y-5 lg:space-y-16 h-screen flex flex-col  items-center  lg:pr-44"
    >
      <animated.div ref={textRef} style={textAnim} >
        <img src={titleThree} alt="[title_three]" className="" />
        <p
          className="text-[36px] lg:text-[52px] leading-[36px] text-center font-bold mt-16 pl-6"
          style={{ fontFamily: "'Baloo Da' , cursive" }}
        >
          1.000.000.000 $PGC
        </p>
      </animated.div>
      <div className="relative grid grid-cols-2 lg:flex lg:flex-row gap-10 pt-6 ">
      <animated.div ref={firstRef} style={firstAnim} >
          <img src={three_1} alt="[three_1]" className="absolute z-10 w-[180px] lg:w-[367px]" />
          <button
            className="border-2 rounded-xl border-black bg-white w-[180px] mt-[185px] lg:w-[362px] lg:h-[100px] lg:mt-[340px] z-0 text-[24px] font-bold border-b-8 border-r-8"
            style={{ fontFamily: "'Baloo Da' , cursive" }}
          >
            0 LB BURNT
          </button>
        </animated.div>
        <animated.div ref={secondRef} style={secondAnim} >
          <img src={three_2} alt="[three_2]" className="absolute z-10 w-[180px] lg:w-[367px]" />
          <button
            className="border-2 rounded-xl border-black bg-white w-[180px] mt-[185px] lg:w-[362px] lg:h-[100px] lg:mt-[340px] z-0 text-[24px] font-bold border-b-8 border-r-8"
            style={{ fontFamily: "'Baloo Da' , cursive" }}
          >
            0% TAX
          </button>
        </animated.div>
        <animated.div ref={thirdRef} style={thirdAnim} >
          <img src={three_3} alt="[three_3]" className="absolute z-10 w-[180px] lg:w-[367px]" />
          <button
            className="border-2 rounded-xl border-black bg-white w-[180px] mt-[185px] lg:w-[362px] lg:h-[100px] lg:mt-[340px] z-0 text-[24px] font-bold border-b-8 border-r-8"
            style={{ fontFamily: "'Baloo Da' , cursive" }}
          >
            MINT/FREEZE REVOKED
          </button>
        </animated.div>
        <animated.div ref={fourthRef} style={fourthAnim} >
          <img
            src={three_4}
            alt="[three_4]"
            className="absolute z-10  w-[180px] lg:w-[367px] "
          />
          <button
            className="border-2 rounded-xl border-black bg-white w-[180px] mt-[185px] lg:w-[362px] lg:h-[100px] lg:mt-[340px] z-0 text-[24px] font-bold border-b-8 border-r-8"
            style={{ fontFamily: "'Baloo Da' , cursive" }}
          >
            FAIR LAUNCH
          </button>
        </animated.div>
      </div>

      <animated.div
        className="text-base sm:text-lg md:text-xl lg:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[36px] font-bold text-white bg-blue-700 rounded-3xl border-2 border-black lg:w-[1285px] lg:h-[146px] text-center lg:p-9 lg:pl-16 p-4"
        style={{ ...imgAnim, fontFamily: "'Baloo Da' , cursive" }} ref={imgRef} 
      >
        At $PCG, trust is our top priority. The LP is burned, there are 0% taxes
        and mint/freeze abilities are revoked. With a fair launch, we ensure
        equal opportunity for all. Enjoy the ride to the moon!
      </animated.div>
    </div>
  );
};

export default Tokenomics;
