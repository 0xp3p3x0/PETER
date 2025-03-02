import React, { useState, useEffect } from "react";
import headerlogo from "../../assets/img/headerlogo.png";
import headerbut from "../../assets/img/headerbut.png";
import { Link } from "react-scroll";

const Header = ({ sidebarOpen, setSidebarOpen }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div>
      <header
        className={`  flex py-4 text-black items-center justify-between pl-8 lg:pl-44 pr-8 z-50 transition-all duration-500 ease-in-out ${
          isScrolled
            ? " bg-orange-400/90 shadow-lg translate-y-0 "
            : "bg-transparent "
        }`}
      >
        <div className={`lg:hidden `} onClick={() => setSidebarOpen(true)}>
          <svg
            width="24px"
            height="24px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
          >
            <path
              stroke="#535358"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8h15M5 16h22M5 24h22M5 11l3-3-3-3"
            />
          </svg>
        </div>
        <img
          src={headerlogo}
          alt="Logo"
          className={`w-[93px] h-[27px] lg:w-[186px] lg:h-[54px] ${
            sidebarOpen ? "hidden" : ""
          }`}
        />
        <div className="font-bold space-x-10 justify-center items-center hidden lg:block">
          {["Home", "Story", "Tokenomics", "Roadmap", "Join_Community"].map(
            (item) => (
              <Link
                key={item}
                to={item}
                smooth={true}
                duration={500}
                offset={-100}
              >
                <button className="transition-transform duration-200 hover:scale-110 active:scale-90">
                  {item}
                </button>
              </Link>
            )
          )}
        </div>

        <img
          src={headerbut}
          alt="headerbut"
          className="w-[90px] h-[25px] lg:w-[195px] lg:h-[55px] lg:mr-[140px]"
        />
      </header>
    </div>
  );
};

export default Header;
