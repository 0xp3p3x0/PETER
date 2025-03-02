import React from "react";

const PhaseAssisst = ({ Phase_component }) => {
  // console.log(typeof(Phase_component.Phase_width));
  return (
    <div
      className={`bg-white border-2 border-black border-b-8 border-r-8 rounded-3xl  p-6 space-y-6 w-full  h-auto lg:w-[624px]`}
      
      // style={{
      //   width: `${Phase_component.phaseWidth ?? 624}px`,
      //   height: `${Phase_component.phaseHeight}px`,
      // }}
    >
      <p
        className="flex sm:text-lg md:text-xl leading-[4px] sm:leading-[26px] md:leading-[28px] lg:text-[32px] lg:leading-[36px] font-bold text-blue-500 justify-between"
        style={{ fontFamily: "'Baloo Da' , cursive" }}
      >
        <p>PHASE</p> <p> {Phase_component.phaseNum} </p>
      </p>
      {Phase_component.contents.map((content, index) => (
        <p
          className="list-item list-disc ml-5 font-bold lg:w-[380px]"
          style={{ fontFamily: "'Baloo Da' , cursive" }}
        >
          {content}
        </p>
      ))}
    </div>
  );
};

export default PhaseAssisst;
