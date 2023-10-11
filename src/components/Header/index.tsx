import React, { useState, ReactNode, useRef, useEffect } from "react";
import lottie from "lottie-web";
import Logo from "../../assets/altlogo.svg";
// import Rocket from "../../assets/rocket.svg";
import MenuCard from "../MenuCard";
import { Link } from "react-router-dom";
import MegaMenu from "../MegaMenu";
import animationData from "../../assets/lottie1.json";

interface HeaderProps {
  bg?: string;
  textColor1?: string;
  textColor2?: string;
  logoUrl?: string;
  primaryBtnClassName?: string;
  showPrimaryBtnIcon?: boolean;
}
const Header: React.FC<HeaderProps> = ({
  bg = "bg-white/60",
  textColor1 = "text-alternate",
  textColor2 = "text-midblack",
  logoUrl = Logo,
  primaryBtnClassName,
  showPrimaryBtnIcon = true,
}) => {
  const [menuContent, setMenuContent] = useState<ReactNode | null>(null);
  const container = useRef(null);

  const handleMenuItemHover = (
    content: React.ReactNode,
  ) => {
    setMenuContent(content);
  };
  const handleMenuMouseLeave = () => {
    setMenuContent(null);
  };


  useEffect(() => {
    if (container.current) {
      lottie.loadAnimation({
        animationData: animationData,
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: "svg",
      });
    }
  }, []);
  return (
    <>
      <div className="fixed h-auto w-screen z-50 lg:block hidden">
        <div
          className={`px-[50px] bg-transparent backdrop-blur-[20px] opacity-100 relative`}
        >
          <div className="relative">
            <div className="flex justify-between py-2 px-4 items-center">
              <div className="flex gap-[30px]">
                <a
                  href="/"
                  className={`${textColor1} text-sm py-2 px-3 hover:bg-lightgold/10 rounded-[10px]`}
                >
                  Home
                </a>
                <a
                  href="/about-us"
                  className={`${textColor1} text-sm py-2 hover:bg-lightgold/10 hover:underline hover:text-lightgold rounded-[10px] px-3`}
                >
                  About Us
                </a>
                <Link
                  to="/resources"
                  className={`${textColor1} text-sm py-2 px-3 hover:bg-lightgold/10 rounded-[10px]`}
                >
                  Resources
                </Link>
                <a
                  href="media"
                  className={`${textColor1} text-sm py-2 px-3 hover:bg-lightgold/10 rounded-[10px]`}
                >
                  Media
                </a>
                <a
                  href="branch-locator"
                  className={`${textColor1} text-sm py-2 px-3 hover:bg-lightgold/10 rounded-[10px]`}
                >
                  Branch Locator
                </a>
              </div>
              <div className="flex">
                <a
                  href="#"
                  className={`${textColor1} text-sm py-2 px-3 hover:bg-lightgold/10 rounded-[10px]`}
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
          <nav
            className={`flex justify-between items-center rounded-[50px] ${bg} backdrop-blur-[20px] opacity-100 h-[66px] px-6 py-2.5`}
            onMouseLeave={handleMenuMouseLeave}
          >
            <div className="flex gap-10 items-center">
              <img
                src={logoUrl}
                className="w-[142px] h-[38px]"
                alt="App Logo"
              />
              <div className="flex gap-[5px] relative">
                <Link
                  to="/personal-banking"
                  className={`${textColor2} text-base py-2.5 px-3 relative group`}
                  onMouseEnter={() =>
                    handleMenuItemHover(
                      <MegaMenu
                        children={
                          <>
                            <span className="block text-hex-3 px-2 pb-5">
                              Personal Banking
                            </span>
                            <Link
                              to=""
                              className="flex cursor-pointer gap-4 hover:bg-slate-50 rounded-[10px] p-2"
                            >
                              <span className="w-10 h-10 rounded-full block bg-red-100"></span>
                              <span>
                                <span className="block font-bold text-alternate">
                                  Accounts
                                </span>
                                <span className="block text-midblack pt-2 text-sm">
                                  Get a bank account best <br /> suited for your
                                  financial goals
                                </span>
                              </span>
                            </Link>
                            <Link
                              to=""
                              className="flex cursor-pointer gap-4 hover:bg-slate-50 rounded-[10px] p-2 mt-5"
                            >
                              <span className="w-10 h-10 rounded-full block bg-red-100"></span>
                              <span>
                                <span className="block font-bold text-alternate">
                                  Cards
                                </span>
                                <span className="block text-midblack pt-2 text-sm">
                                  Access 24/7 banking <br /> anywhere anytime
                                </span>
                              </span>
                            </Link>
                          </>
                        }
                        bgColor="bg-white"
                        textColor="hex-3"
                        spanColor1="alternate"
                        spanColor2="midblack"
                        imageUrl="https://framerusercontent.com/images/JCvRJtEtCSCOzL84Mf0m5lre29I.png?scale-down-to=512"
                        imageText={
                          <span className="text-white absolute bottom-8 text-[30px] leading-[1.1em] left-8 font-bold">
                            Live your best life <br /> with Signature <br />{" "}
                            Bank
                          </span>
                        }
                      />
                    )
                  }
                >
                  <span className="group-hover:bg-lightgold/10 group-hover:underline group-hover:text-lightgold block px-2 py-1 rounded-xl">
                    Personal
                  </span>
                  <div className="hidden group-hover:block absolute pt-5 rounded-[20px] shadow left-0">
                    <MenuCard>{menuContent}</MenuCard>
                  </div>
                </Link>
                <Link
                  to="/private-banking"
                  className={`${textColor2} text-base py-2.5 px-3 relative group`}
                  onMouseEnter={() =>
                    handleMenuItemHover(
                      <MegaMenu
                        children={
                          <>
                            <span className="block text-lightgold px-2 pb-5">
                              Private Banking
                            </span>
                            <Link
                              to=""
                              className="flex cursor-pointer gap-4 hover:bg-slate-50 rounded-[10px] p-2"
                            >
                              <span className="w-10 h-10 rounded-full block bg-red-100"></span>
                              <span>
                                <span className="block font-bold text-white">
                                  Accounts
                                </span>
                                <span className="block text-white pt-2 text-sm">
                                  Get a bank account best <br /> suited for your
                                  financial <br /> goals
                                </span>
                              </span>
                            </Link>
                            <Link
                              to=""
                              className="flex cursor-pointer gap-4 hover:bg-slate-50 rounded-[10px] p-2 mt-5"
                            >
                              <span className="w-10 h-10 rounded-full block bg-red-100"></span>
                              <span>
                                <span className="block font-bold text-white">
                                  Cards
                                </span>
                                <span className="block text-white pt-2 text-sm">
                                  Access 24/7 banking <br /> anywhere anytime
                                </span>
                              </span>
                            </Link>
                          </>
                        }
                        bgColor="bg-charcoal"
                        textColor="lightgold"
                        spanColor1="white"
                        spanColor2="white"
                        imageUrl="https://framerusercontent.com/images/RUAzHqXscpUfkFr13ELQ6BhK0Ms.png?scale-down-to=512"
                        imageText={
                          <span className="text-white absolute bottom-8 text-[30px] leading-[1.1em] left-8 font-bold">
                            Make, save, <br /> grow your money <br /> with
                            Signature <br /> Bank
                          </span>
                        }
                      />
                    )
                  }
                >
                  <span className="group-hover:bg-lightgold/10 group-hover:underline group-hover:text-lightgold block px-2 py-1 rounded-xl">
                    Private
                  </span>
                  <div className="hidden group-hover:block absolute pt-5 rounded-[20px] shadow left-0">
                    <MenuCard>{menuContent}</MenuCard>
                  </div>
                </Link>
                <Link
                  to="/business-banking"
                  className={`${textColor2} text-base py-2.5 px-3 relative group`}
                  onMouseEnter={() =>
                    handleMenuItemHover(
                      <MegaMenu
                        children={
                          <>
                            <span className="block text-secondarybrown px-2 pb-5">
                              Business Banking
                            </span>
                            <Link
                              to=""
                              className="flex cursor-pointer gap-4 hover:bg-slate-50 rounded-[10px] p-2"
                            >
                              <span className="w-10 h-10 rounded-full block bg-red-100"></span>
                              <span>
                                <span className="block font-bold text-alternate">
                                  Accounts
                                </span>
                                <span className="block text-midblack pt-2 text-sm">
                                  Get a bank account best <br /> suited for your
                                  financial goals
                                </span>
                              </span>
                            </Link>
                            <Link
                              to=""
                              className="flex cursor-pointer gap-4 hover:bg-slate-50 rounded-[10px] p-2 mt-5"
                            >
                              <span className="w-10 h-10 rounded-full block bg-red-100"></span>
                              <span>
                                <span className="block font-bold text-alternate">
                                  Cards
                                </span>
                                <span className="block text-midblack pt-2 text-sm">
                                  Access 24/7 banking <br /> anywhere anytime
                                </span>
                              </span>
                            </Link>
                          </>
                        }
                        bgColor="bg-white"
                        textColor="secondarybrown"
                        spanColor1="alternate"
                        spanColor2="midblack"
                        imageUrl="https://framerusercontent.com/images/hneHIfOkY3L7GZQuZWWokg6New.png"
                        imageText={
                          <span className="text-white absolute bottom-8 text-[30px] leading-[1.1em] left-8 font-bold">
                            Make, save, <br /> grow your money <br /> with
                            Signature <br /> Bank
                          </span>
                        }
                      />
                    )
                  }
                >
                  <span className="group-hover:bg-lightgold/10 group-hover:underline group-hover:text-lightgold block px-2 py-1 rounded-xl">
                    Business
                  </span>
                  <div className="hidden group-hover:block absolute pt-5 rounded-[20px] shadow left-0">
                    <MenuCard>{menuContent}</MenuCard>
                  </div>
                </Link>
                <Link
                  to="/institutional-banking"
                  className={`${textColor2} text-base py-2.5 px-3 relative group`}
                  onMouseEnter={() =>
                    handleMenuItemHover(
                      <MegaMenu
                        children={
                          <>
                            <span className="block text-hex-3 px-2 pb-5">
                              Institutional Banking
                            </span>
                            <Link
                              to=""
                              className="flex cursor-pointer gap-4 hover:bg-slate-50 rounded-[10px] p-2"
                            >
                              <span className="w-10 h-10 rounded-full block bg-red-100"></span>
                              <span>
                                <span className="block font-bold text-alternate">
                                  Corporate Bank Account
                                </span>
                                <span className="block text-midblack pt-2 text-sm">
                                  Get a bank account best <br /> suited for your
                                  financial <br /> goals
                                </span>
                              </span>
                            </Link>
                          </>
                        }
                        bgColor="bg-white"
                        textColor="hex-3"
                        spanColor1="alternate"
                        spanColor2="midblack"
                        imageUrl="https://framerusercontent.com/images/kdyf9gQFmlJbh6v1HuTzIAxVj4.png"
                        imageText={
                          <span className="text-white absolute bottom-8 text-[30px] leading-[1.1em] left-8 font-bold">
                            Make, save, <br /> grow your money <br /> with
                            Signature <br /> Bank
                          </span>
                        }
                      />
                    )
                  }
                >
                  <span className="group-hover:bg-lightgold/10 group-hover:underline group-hover:text-lightgold block px-2 py-1 rounded-xl">
                    Institutional
                  </span>
                  <div className="hidden group-hover:block absolute pt-5 rounded-[20px] shadow left-0]">
                    <MenuCard>{menuContent}</MenuCard>
                  </div>
                </Link>
                <Link
                  to="/digital-banking"
                  className={`${textColor2} text-base py-2.5 px-3 relative group`}
                  onMouseEnter={() =>
                    handleMenuItemHover(
                      <MegaMenu
                        children={
                          <>
                            <span className="block text-hex-3 px-2 pb-5">
                              Digital Banking
                            </span>
                            <Link
                              to=""
                              className="flex cursor-pointer gap-4 hover:bg-slate-50 rounded-[10px] p-2"
                            >
                              <span className="w-10 h-10 rounded-full block bg-red-100"></span>
                              <span>
                                <span className="block font-bold text-alternate">
                                  Corporate Bank Account
                                </span>
                                <span className="block text-midblack pt-2 text-sm">
                                  Get a bank account best <br /> suited for your
                                  financial <br /> goals
                                </span>
                              </span>
                            </Link>
                          </>
                        }
                        bgColor="bg-white"
                        textColor="hex-3"
                        spanColor1="alternate"
                        spanColor2="midblack"
                        position="-ml-60"
                        imageUrl="https://framerusercontent.com/images/MUsbEHK8AAoO9GkfOv9Ln6zWz4I.png?scale-down-to=512"
                        imageText={
                          <span className="text-white absolute bottom-8 text-[30px] leading-[1.1em] left-8 font-bold">
                            Make, save, <br /> grow your money <br /> with
                            Signature <br /> Bank
                          </span>
                        }
                      />
                    )
                  }
                >
                  <span className="group-hover:bg-lightgold/10 group-hover:underline group-hover:text-lightgold block px-2 py-1 rounded-xl">
                    Digital
                  </span>
                  <div className="hidden group-hover:block absolute pt-5 rounded-[20px] shadow left-0">
                    <MenuCard>{menuContent}</MenuCard>
                  </div>
                </Link>
              </div>
            </div>
            <button
              type="button"
              className={`${primaryBtnClassName} text-white py-[7px] px-[18px] rounded-[10px] flex items-center gap-1.5  border border-transparent leading-[1em]`}
            >
              {showPrimaryBtnIcon && (
                <span
                  className="w-[22px] h-[22px]"
                  ref={container}
                  id="animation-container"
                />
              )}
              Open an Account - Launching Soon
            </button>
          </nav>
        </div>
      </div>
    </>
  );
};
export default Header;
