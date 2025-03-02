import React, { useState, useEffect } from "react";
import headerlogo from "../../assets/img/headerlogo.png";
import { Link } from "react-scroll";
import instal from "../../assets/img/intal.png";
import tele from "../../assets/img/tele.png";
import X from "../../assets/img/x.png";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false); // Hide sidebar when screen is large
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <aside
      className={` fixed left-0 top-0 z-50 flex h-full w-[150px] flex-col overflow-y-hidden border-r border-stroke  bg-yellow-200 dark:border-stroke-dark dark:bg-gray-dark  ${
        sidebarOpen
          ? "translate-x-0 duration-300 ease-linear"
          : "-translate-x-full duration-300 ease-linear"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-between gap-2 px-2 pt-5 pb-2 border-b-4 border-black">
        <img
          src={headerlogo}
          alt="Logo"
          className={`w-[93px] h-[27px] lg:w-[186px] lg:h-[54px] ${
            sidebarOpen ? "" : "hidden"
          }`}
        />

        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className=" lg:hidden"
        >
          <svg
            className="fill-current"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: "black" }}
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col flex-1 overflow-y-auto items-center duration-300 ease-linear text-black  gap-y-3 my-3 ml-3 text-center">
        {/* <!-- Sidebar Menu --> */}

        <div className="flex flex-col space-y-3">
          {["Home", "Story", "Tokenomics", "Roadmap", "Join_Community"].map(
            (item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-100}
                className="w-full"
              >
                <button className="transition-transform duration-200 hover:scale-110 active:scale-90 border-b-2 border-gray-700 p-2 w-full text-center">
                  {item.replace("_", " ")}
                </button>
              </Link>
            )
          )}
        </div>

        {/* <!-- Sidebar Menu --> */}
      </div>

      {/* logos */}
      <div className="flex items-center justify-between px-1 gap-2 my-6">
        <img
          src={tele}
          alt="[tele]"
          className="cursor-pointer w-10 h-10"
          onClick={() =>
            window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")
          }
        />
        <img
          src={X}
          alt="[X]"
          className="cursor-pointer  w-10 h-10 "
          onClick={() =>
            window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")
          }
        />
        <img
          src={instal}
          alt="[instal]"
          className="cursor-pointer  w-10 h-10"
          onClick={() =>
            window.open("https://mail.google.com/mail/u/0/#inbox", "_blank")
          }
        />
      </div>
    </aside>
  );
};

export default Sidebar;
