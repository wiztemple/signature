import React, { useState, ReactNode } from "react";
import Logo from "../../assets/altlogo.svg";
import Rocket from "../../assets/rocket.svg";
import MenuCard from "../MenuCard";
import { Link } from "react-router-dom";

interface MenuPosition {
  top: number;
  left: number;
}
const Header = () => {
  const [menuContent, setMenuContent] = useState<ReactNode | null>(null);
  const [menuPosition, setMenuPosition] = useState<MenuPosition | null>(null);

  const handleMenuItemHover = (
    content: React.ReactNode,
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    setMenuContent(content);
    if (event.currentTarget instanceof HTMLElement) {
      const rect = event.currentTarget.getBoundingClientRect();
      setMenuPosition({ top: rect.bottom, left: rect.left });
    }
  };

  const handleMenuItemLeave = () => {
    setMenuContent(null);
  };
  return (
    <div className="fixed h-auto w-full">
      <div className="px-[50px] bg-white/60 backdrop-blur-[20px] opacity-100 relative">
        <div className="relative">
          <div className="flex justify-between py-2 px-4 items-center">
            <div className="flex gap-[30px]">
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                Home
              </a>
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                About Us
              </a>
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                Resources
              </a>
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                Media
              </a>
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                Branch Locator
              </a>
            </div>
            <div className="flex">
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <nav className="flex justify-between items-center rounded-[50px] bg-white/60 backdrop-blur-[20px] opacity-100 h-[66px] px-6 py-2.5">
          <div className="flex gap-10">
            <img src={Logo} className="w-[142px] h-[38px]" alt="App Logo" />
            <div className="flex gap-[5px] relative">
              <Link
                to="/"
                className="text-midblack text-base py-2.5 px-3 relative"
                onMouseEnter={(e) =>
                  handleMenuItemHover(
                    <div className="text-red-800 w-[800px] bg-slate-200">
                      Homeeeee
                    </div>,
                    e
                  )
                }
                onMouseLeave={handleMenuItemLeave}
              >
                Personal
              </Link>
              <a
                href="#"
                className="text-midblack text-base py-2.5 px-3"
                onMouseEnter={(e) =>
                  handleMenuItemHover(
                    <div className="text-red-800 w-[800px]">Private</div>,
                    e
                  )
                }
                onMouseLeave={handleMenuItemLeave}
              >
                Private
              </a>
              <a href="business" className="text-midblack text-base py-2.5 px-3">
                Business
              </a>
              <a href="institutional" className="text-midblack text-base py-2.5 px-3">
                Institutional
              </a>
              <a href="digital" className="text-midblack text-base py-2.5 px-3">
                Digital
              </a>
            </div>
          </div>
          <button
            type="button"
            className="bg-hex-2 text-white py-2.5 px-5 rounded-[10px] flex items-center gap-2"
          >
            <img src={Rocket} className="w-6 h-6" alt="Rocket" />
            Open an account - Launching soon
          </button>
        </nav>
        {menuContent && menuPosition && (
          <div
            className="absolute bg-white border-t border-[#894a69]"
            style={{
              top: menuPosition?.top ?? 0,
              left: menuPosition?.left ?? 0,
            }}
          >
            <MenuCard>{menuContent}</MenuCard>
          </div>
        )}
      </div>
    </div>
  );
};
export default Header;
