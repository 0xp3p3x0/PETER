import React from "react";
import roadmapFour from "../../assets/img/roadmap-four.png";
import petergriffinFour from "../../assets/img/petergriffin-four.png";
import PhaseAssisst from "../assisstes/PhaseAssisst";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer";

const data = [
  {
    name: "Phase_one",
    phaseNum: "01",
    phaseHeight: 280,
    contents: [
      "Setup website, telegram and socials",
      "Community Building",
      "Pump.fun",
      "Launch on DEX",
    ],
  },
  {
    name: "Phase_two",
    phaseNum: "02",
    phaseHeight: 235,
    contents: [
      "Huge Marketing Campagne",
      "CoinGecko & CMC",
      "PGC webshop online",
    ],
  },
  {
    name: "Phase_three",
    phaseNum: "03",
    phaseHeight: 241,
    contents: [
      "Tier-1 CEX listings",
      "Partnerships & Influencers",
      "Community events, Promotions & Rewards",
    ],
  },
  {
    name: "Phase_three",
    phaseNum: "04",
    phaseHeight: 229,
    phaseWidth: 900,
    contents: [
      "New Family Guy character Memecoins",
      "$PGC worldwide domination and beat all the other memecoins. TO THE F*CKING MOON!!! ",
    ],
  },
];

const Roadmap = () => {
  const fadeInLeft = (delay) => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
    const animation = useSpring({
      from: { opacity: 0, scale: 0.2 },
      to: inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.2 },
      config: { duration: 300, tension: 200, friction: 20 },
      delay: delay, // Delay each element separately
    });

    return [ref, animation];
  };

  const [textRef, textAnim] = fadeInLeft(200);
  const [firstRef, firstAnim] = fadeInLeft(400);
  const [secondRef, secondAnim] = fadeInLeft(450);

  const [imgRef, imgAnim] = (() => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

    const animation = useSpring({
      from: { opacity: 1,  transform: "translate(30vw, -30vh)" }, // Starts from top-left
      to: inView
        ? { opacity: 1,  transform: "translate(0px, 0px)" }
        : { opacity: 1,  transform: "translate(5vw, -30vh)" }, // Moves back to top-left if not in view
      config: { duration: 300, tension: 200, friction: 20 },
      delay: 0,
    });

    return [ref, animation];
  })();

  return (
    <div
      id="Roadmap"
      className=" px-10 lg:pl-44 mt-[520px] space-y-16 h-screen flex flex-col  items-center "
    >
      <animated.img
        src={roadmapFour}
        alt="[Roadmap_four]"
        ref={textRef}
        style={textAnim}
      />
      <div className="flex flex-col-reverse lg:flex-row space-x-16">
        <div className="flex flex-col space-y-2 lg:space-y-[30px] mt-[68px]  ">
          {data.slice(0, 3).map((Phase_component, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.3,
            });

            const animation = useSpring({
              from: { opacity: 0, scale: 0.2 },
              to: inView
                ? { opacity: 1, scale: 1 }
                : { opacity: 0, scale: 0.2 },
              config: { duration: 300, tension: 200, friction: 20 },
              delay: index * 100 + 100, // 100ms delay for each item
            });

            return (
              <animated.div key={index} ref={ref} style={animation}>
                <PhaseAssisst Phase_component={Phase_component} />
              </animated.div>
            );
          })}
        </div>
        <div className="flex flex-col items-center">
          <animated.img
            src={petergriffinFour}
            alt="[PeterGriffin_four]"
            className="lg:mt-3 lg:mr-10 w-96  lg:w-[40%] 2xl:w-full "
            ref={imgRef}
            style={imgAnim}
          />
          <animated.div
            className={`mt-6 hidden lg:block`}
            ref={firstRef}
            style={firstAnim}
          >
            <div
              className={`bg-white border-2 border-black border-b-8 border-r-8 rounded-3xl  p-6 space-y-6   h-auto w-[900px]`}

              // style={{
              //   width: `${Phase_component.phaseWidth ?? 624}px`,
              //   height: `${Phase_component.phaseHeight}px`,
              // }}
            >
              <p
                className="flex sm:text-lg md:text-xl leading-[4px] sm:leading-[26px] md:leading-[28px] lg:text-[32px] lg:leading-[36px] font-bold text-blue-500 justify-between"
                style={{ fontFamily: "'Baloo Da' , cursive" }}
              >
                <p>PHASE</p> <p> {data[3].phaseNum} </p>
              </p>
              {data[3].contents.map((content, index) => (
                <p
                  className="list-item list-disc ml-5 font-bold lg:w-[380px]"
                  style={{ fontFamily: "'Baloo Da' , cursive" }}
                >
                  {content}
                </p>
              ))}
            </div>
          </animated.div>
        </div>
      </div>

      <animated.div
        className="text-base sm:text-lg md:text-xl lg:text-[20px] leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[36px] font-bold text-white bg-blue-700 rounded-3xl border-2 border-black lg:w-[1285px]  text-center lg:p-9 lg:pl-16 p-4 z-10"
        style={{ ...secondAnim, fontFamily: "'Baloo Da' , cursive" }}
        ref={secondRef}
      >
        <p>
          Our team is committed to creating a reliable, long-term coin. We focus
          on transparency, security and community growth. Stay tuned as we
          enhance $PCG, ensuring it remains a important part of the memecoin
          world.
        </p>
        <p>Together we’re making history with Peter Griffcoin!</p>
      </animated.div>
    </div>
  );
};

export default Roadmap;
