import React from "react";
import { Link } from "react-router-dom";

interface HeaderProps {
  textColor1?: string;
}

const MobileHeader: React.FC<HeaderProps> = ({ textColor1 = "text-alternate", }) => {
  return (
    <div className="fixed h-auto z-50 block sm:hidden">
      <div
        className={`px-5 bg-transparent backdrop-blur-[20px] opacity-100 relative`}
      >
        <div className="relative">
          <div className="flex py-2 items-center w-full">
            <Link to="/" className={`${textColor1} text-sm py-2.5 px-3`}>
              Home
            </Link>
            <Link to="/" className={`${textColor1} text-sm py-2.5 px-3`}>
              About Us
            </Link>
            <Link to="/" className={`${textColor1} text-sm py-2.5 px-3`}>
              Branch Locator
            </Link>
            <Link to="/" className={`${textColor1} text-sm py-2.5 px-3`}>
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileHeader;
