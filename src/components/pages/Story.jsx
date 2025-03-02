import React from "react";
import peterTwo from "../../assets/img/peter-two.png";
import peterTextTwo from "../../assets/img/story-pgc-pagetwo.png";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const Story = () => {
  const fadeInLeft = (delay) =>{
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
     const animation = useSpring({
        from: { opacity: 0, transform: "translateX(-10vw)" },
        to: inView ? { opacity: 1, transform: "translateX(0px)" } : { opacity: 0, transform: "translateX(-100px)" },
        config: { duration: 700, tension: 200, friction: 20 },
        delay: delay, // Delay each element separately
      });

      return [ref, animation];
    }

    const [textRef, textAnim] = fadeInLeft(500);
    const [imgRef, imgAnim] = (() => {
      const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  
      const animation = useSpring({
        from: { opacity: 0, scale: 0.2, transform: "translateY(1000px)" }, // Small and bottom
        to: inView ? { opacity: 1, scale: 1, transform: "translateY(0px)" } : { opacity: 0, scale: 0.2, transform: "translateY(100px)" },
        config: { duration: 700, tension: 200, friction: 20 },
        delay: 500,
      });
  
      return [ref, animation];
    })();
  
  return (
    <div id="Story" className=" px-10 lg:pl-44 h-screen flex flex-col-reverse 2xl:flex-row items-center justify-center mt-44 space-x-16">
      <animated.div className="2xl:w-[1400px] space-y-3 mb-10" ref={textRef} style={textAnim}>
        <img
          src={peterTextTwo}
          alt="[Peter_text_two]"
          className="space-y-3 mb-5 "
        />
        <p
         className="text-base sm:text-lg md:text-xl lg:text-[21px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[36px] font-bold text-black"
         style={{
           ...textAnim,
           fontFamily: "'Baloo Da' , cursive",
         }}
        >
          In Quahog, Peter Griffin was eating chips when he saw an ad for
          Memecoins. “Lois! I’m starting my own coin: Peter Griffcoin! It’s
          gonna be Huge!” Lois skeptical asked: “Do you even know what a
          Memecoin is?”
        </p>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-[21px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[36px] font-bold text-black"
          style={{
            ...textAnim,
            fontFamily: "'Baloo Da' , cursive",
          }}
        >
          Peter grinned: “It’s money, but funnier! We’ll beat Dogecoin, Shiba
          Inu, Pepe, all of them! I’m gonna knock 'em all out and become the
          undefeated champion of the Memecoin World!”
        </p>
        <p
         className="text-base sm:text-lg md:text-xl lg:text-[21px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[36px] font-bold text-black"
         style={{
           ...textAnim,
           fontFamily: "'Baloo Da' , cursive",
         }}
        >
          With Cleveland, Stewie and Brian in his corner Peter entered the ring.
          Peter faced famous Memecoins like Dogecoin, Shiba Inu, Pepe and
          others. Knocking them out one by one.
        </p>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-[21px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[36px] font-bold text-black"
          style={{
            ...textAnim,
            fontFamily: "'Baloo Da' , cursive",
          }}
        >
          After winning the championship, Peter stood proudly in front of the
          crowd and shouted: "No one can beat me! PeterGriffcoin to the f*cking
          moon!" The crowd cheered loudly.
        </p>
        <p
          className="text-base sm:text-lg md:text-xl lg:text-[21px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[36px] font-bold text-black"
         style={{
           ...textAnim,
           fontFamily: "'Baloo Da' , cursive",
         }}
        >
          And so PeterGriffcoin became the undefeated champion of the Memecoin
          world! Reaching new heights with humor, discipline and strong pumps.
        </p>
      </animated.div>
      <animated.img ref={imgRef} style={imgAnim} src={peterTwo} alt="[Peter_two]" className = "w-96  lg:w-[40%] 2xl:w-full " />
    </div>
  );
};

export default Story;
