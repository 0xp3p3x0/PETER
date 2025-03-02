import React from "react";
import flowLetter from "../../assets/img/flow-letter.png";
import flowSymbol from "../../assets/img/flow-symbol.png";



const FlowFrameBar = () => {
  return (
    <div className=" px-10 lg:pl-44 overflow-hidden whitespace-nowrap bg-no-repeat bg-[url('/img/pathGroup.png')] bg-center bg-cover">
  {/* Animated Marquee - Duplicated for Seamless Scrolling */}
  <div className="flex flex-row gap-16 p-16 min-w-max animate-marquee rotate-[1.1]">
    {[...Array(2)].map((_, i) => (
      <div key={i} className="flex flex-row gap-16">
        {/* Repeating Images */}
        {[...Array(10)].map((_, index) => (
          <React.Fragment key={index}>
            <img src={flowLetter} alt="Flow Letter" className="h-12 rotate-[1.1]" />
            <img src={flowSymbol} alt="Flow Symbol" className="h-12 rotate-[1.1]" />
          </React.Fragment>
        ))}
      </div>
    ))}
  </div>
</div>


  );
};

export default FlowFrameBar;


