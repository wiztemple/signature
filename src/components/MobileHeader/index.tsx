import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assets/altlogo.svg";
import Rocket from "../../assets/rocket.svg";

interface HeaderProps {
  textColor1?: string;
  textColor2?: string;
  logoUrl?: string;
  bg?: string;
  primaryBtnClassName?: string;
  showPrimaryBtnIcon?: boolean;
  strokeColor?: string;
}

const MobileHeader: React.FC<HeaderProps> = ({
  textColor1 = "text-alternate",
  textColor2 = "text-midblack",
  logoUrl = Logo,
  bg,
  primaryBtnClassName,
  showPrimaryBtnIcon,
  strokeColor = "#C5A4B5",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="fixed h-auto z-50 w-screen block lg:hidden">
      <div className={`w-full bg-transparent backdrop-blur-[20px] relative`}>
        <div className="relative w-full flex justify-center items-stretch">
          <div className="flex py-2 items-center w-full px-5 justify-between">
            <Link to="/" className={`${textColor1} text-sm py-2.5 px-2`}>
              Home
            </Link>
            <Link to="/about-us" className={`${textColor1} text-sm py-2.5 px-2`}>
              About Us
            </Link>
            <Link to="/branch-locator/map" className={`${textColor1} text-sm py-2.5 px-2`}>
              Branch Locator
            </Link>
            <Link to="/contact" className={`${textColor1} text-sm py-2.5 px-2`}>
              Contact Us
            </Link>
          </div>
        </div>
        <div className="px-[10px]">
          <div
            className={`mt-1 w-full relative rounded-[50px] ${bg} backdrop-blur-[20px] `}
          >
            <div className="flex justify-between items-center h-[66px] py-[10px] px-5">
              <Link to="/">
              <img
                src={logoUrl}
                className="w-[143px] h-[38px]"
                alt="App Logo"
              />
              </Link>
              <button className="" onClick={toggleMenu}>
                {isOpen ? (
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17 1L1 17M1 1L17 17"
                      stroke={strokeColor}
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : (
                  <svg
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 14V16H3V14H15ZM18 7V9H0V7H18ZM15 0V2H3V0H15Z"
                      fill={strokeColor}
                    />
                  </svg>
                )}
              </button>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  exit={{ height: 0 }}
                  className="overflow-hidden flex flex-col items-center gap-2"
                >
                  <Link to="/personal-banking" className={`p-2 ${textColor2} text-base`}>
                    Personal
                  </Link>
                  <Link to="/private-banking" className={`p-2 ${textColor2}`}>
                    Private
                  </Link>
                  <Link to="/business-banking" className={`p-2 ${textColor2}`}>
                    Business
                  </Link>
                  <Link
                    to="/institutional-banking"
                    className={`p-2 ${textColor2}`}
                  >
                    Institutional
                  </Link>
                  <Link to="/digital-banking" className={`p-2 ${textColor2}`}>
                    Digital
                  </Link>
                  <Link
                  to="https://aos.signaturebankng.com/" target="_blank"
                    type="button"
                    className={`${primaryBtnClassName} text-white py-[7px] px-[18px] mb-5 rounded-[10px] flex items-center gap-1.5  border border-transparent leading-[1em]`}
                  >
                    {showPrimaryBtnIcon && (
                      <img
                        src={Rocket}
                        className="w-[22px] h-[22px]"
                        alt="Rocket"
                      />
                    )}
                    Open an Account - Launching Soon
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
