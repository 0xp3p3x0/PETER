import React, { useState } from "react";
import Header from "./components/pages/Header";
import Footer from "./components/pages/Footer";
import Home from "./components/pages/Home";
import Story from "./components/pages/Story";
import Tokenomics from "./components/pages/Tokenomics";
import Roadmap from "./components/pages/Roadmap";
import JoinCommunity from "./components/pages/JoinCommunity";
import FlowFrameBar from "./components/assisstes/FlowFrameBar";
import Sidebar from "./components/assisstes/Sidebar";

import { useSpring, animated } from "@react-spring/web";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const fadeInLeft = (delay) =>
    useSpring({
      from: { opacity: 0, transform: "translateX(-10vw)" },
      to: { opacity: 1, transform: "translateX(0px)" },
      config: { duration: 300, tension: 200, friction: 20 },
      delay: delay, // Delay each element separately
    });

  return (
    <div className="relative w-full flex flex-col bg-no-repeat bg-[url('/img/background1.png')] bg-center bg-cover  ">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      {/* <img
        src="/img/background.png"
        alt="Background"
        className="w-full h-auto z-0"
      /> */}
      {/* Header */}
      <animated.div
        style={fadeInLeft(400)}
        className="fixed  top-0 w-full z-20"
      >
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      </animated.div>
      <div className=" top-0 left-0 w-full  text-black z-10 flex flex-col">
        {/* page one */}
        <Home />
        <FlowFrameBar />
        <Story />
        <div className="translate-y-14">
          <FlowFrameBar />
        </div>
        <Tokenomics />
        <div className="translate-y-56">
          <FlowFrameBar />
        </div>
        <Roadmap />
        <div className="translate-y-96">
          <FlowFrameBar />
        </div>
        <JoinCommunity />
      </div>
      {/* Footer */}
      <div className=" bottom-0 w-full z-20">
        <Footer />
      </div>
    </div>
  );
};

export default App;
