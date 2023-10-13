import React, { useState, ReactNode, useRef, useEffect } from "react";
import lottie from "lottie-web";
import Logo from "../../assets/altlogo.svg";
import MenuCard from "../MenuCard";
import { Link } from "react-router-dom";
import MegaMenu from "../MegaMenu";
import animationData from "../../assets/lottie1.json";
import AppStore from "../../assets/appstore.svg";
import GooglePlay from "../../assets/googleplay.svg";

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

  const handleMenuItemHover = (content: React.ReactNode) => {
    setMenuContent(content);
  };
  const handleMenuMouseLeave = () => {
    setMenuContent(null);
  };
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (container.current && !animationRef.current) {
      const anim = lottie.loadAnimation({
        animationData,
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: 'svg',
      });
      animationRef.current = anim;
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
                <Link
                  to="/"
                  className={`${textColor1} text-sm py-2 px-3 hover:bg-lightgold/10 rounded-[10px]`}
                >
                  Home
                </Link>
                <Link
                  to="/about-us"
                  className={`${textColor1} text-sm py-2 hover:bg-lightgold/10 hover:underline hover:text-lightgold rounded-[10px] px-3 group relative`}
                >
                  About Us
                  <div className="absolute hidden group-hover:block z-50 w-28 -right-3">
                    <div className="shadow-lg bg-white mt-4 rounded-xl p-2">
                      <Link
                        to="/about-us"
                        className="py-3 text-base px-3 block text-alternate hover:bg-primaryyellow/10 rounded-xl"
                      >
                        About Us
                      </Link>
                      <Link
                        to="/careers"
                        className="py-3 text-base px-3 block text-alternate hover:bg-primaryyellow/10 rounded-xl"
                      >
                        Careers
                      </Link>
                    </div>
                  </div>
                </Link>
                <Link
                  to="/resources"
                  className={`${textColor1} text-sm py-2 px-3 hover:bg-lightgold/10 rounded-[10px]`}
                >
                  Resources
                </Link>
                <Link
                  to="/media"
                  className={`${textColor1} text-sm py-2 px-3 hover:bg-lightgold/10 rounded-[10px]`}
                >
                  Media
                </Link>
                <Link
                  to="/branch-locator"
                  className={`${textColor1} text-sm py-2 px-3 hover:bg-lightgold/10 rounded-[10px]`}
                >
                  Branch Locator
                </Link>
              </div>
              <div className="flex">
                <Link
                  to="/branch-locator"
                  className={`${textColor1} text-sm py-2 px-3 hover:bg-lightgold/10 rounded-[10px]`}
                >
                  Contact Us
                </Link>
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
                              to="/accounts"
                              className="flex cursor-pointer gap-4 hover:bg-hex-2/5 rounded-[10px] p-2"
                            >
                              <span className="w-10 h-10 rounded-full flex justify-center items-center bg-[#f1ebdf]">
                                <svg
                                  width="16"
                                  height="20"
                                  viewBox="0 0 16 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                                    fill="#6C1D45"
                                  />
                                  <path
                                    d="M16 15.5C16 17.985 16 20 8 20C0 20 0 17.985 0 15.5C0 13.015 3.582 11 8 11C12.418 11 16 13.015 16 15.5Z"
                                    fill="#6C1D45"
                                  />
                                </svg>
                              </span>
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
                              to="/cards"
                              className="flex cursor-pointer gap-4 hover:bg-hex-2/5 rounded-[10px] p-2 mt-5"
                            >
                              <span className="w-10 h-10 rounded-full flex justify-center items-center bg-[#f1ebdf]">
                                <svg
                                  width="20"
                                  height="16"
                                  viewBox="0 0 20 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 0H12C15.771 0 17.657 -1.19209e-07 18.828 1.172C19.672 2.015 19.908 3.229 19.974 5.25H0.026C0.092 3.229 0.328 2.015 1.172 1.172C2.343 -1.19209e-07 4.229 0 8 0ZM12 16H8C4.229 16 2.343 16 1.172 14.828C-1.19209e-07 13.657 0 11.771 0 8C0 7.558 9.33651e-08 7.142 0.00200009 6.75H19.998C20 7.142 20 7.558 20 8C20 11.771 20 13.657 18.828 14.828C17.657 16 15.771 16 12 16ZM4 11.25C3.80109 11.25 3.61032 11.329 3.46967 11.4697C3.32902 11.6103 3.25 11.8011 3.25 12C3.25 12.1989 3.32902 12.3897 3.46967 12.5303C3.61032 12.671 3.80109 12.75 4 12.75H8C8.19891 12.75 8.38968 12.671 8.53033 12.5303C8.67098 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 8.67098 11.6103 8.53033 11.4697C8.38968 11.329 8.19891 11.25 8 11.25H4ZM10.5 11.25C10.3011 11.25 10.1103 11.329 9.96967 11.4697C9.82902 11.6103 9.75 11.8011 9.75 12C9.75 12.1989 9.82902 12.3897 9.96967 12.5303C10.1103 12.671 10.3011 12.75 10.5 12.75H12C12.1989 12.75 12.3897 12.671 12.5303 12.5303C12.671 12.3897 12.75 12.1989 12.75 12C12.75 11.8011 12.671 11.6103 12.5303 11.4697C12.3897 11.329 12.1989 11.25 12 11.25H10.5Z"
                                    fill="#6C1D45"
                                  />
                                </svg>
                              </span>
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
                        itemBg="bg-[#f1ebdf]"
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
                  <div className="hidden group-hover:block absolute pt-5 rounded-[20px] shadow-sm left-0">
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
                              to="/accounts"
                              className="flex cursor-pointer gap-4 hover:bg-black/10 rounded-[10px] p-2"
                            >
                              <span className="w-10 h-10 rounded-full flex justify-center items-center bg-[#f1ebdf]">
                                <svg
                                  width="16"
                                  height="20"
                                  viewBox="0 0 16 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                                    fill="#6C1D45"
                                  />
                                  <path
                                    d="M16 15.5C16 17.985 16 20 8 20C0 20 0 17.985 0 15.5C0 13.015 3.582 11 8 11C12.418 11 16 13.015 16 15.5Z"
                                    fill="#6C1D45"
                                  />
                                </svg>
                              </span>
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
                              to="/cards"
                              className="flex cursor-pointer gap-4 hover:bg-black/10 rounded-[10px] p-2 mt-5"
                            >
                              <span className="w-10 h-10 rounded-full flex justify-center items-center bg-[#f1ebdf]">
                                <svg
                                  width="20"
                                  height="16"
                                  viewBox="0 0 20 16"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8 0H12C15.771 0 17.657 -1.19209e-07 18.828 1.172C19.672 2.015 19.908 3.229 19.974 5.25H0.026C0.092 3.229 0.328 2.015 1.172 1.172C2.343 -1.19209e-07 4.229 0 8 0ZM12 16H8C4.229 16 2.343 16 1.172 14.828C-1.19209e-07 13.657 0 11.771 0 8C0 7.558 9.33651e-08 7.142 0.00200009 6.75H19.998C20 7.142 20 7.558 20 8C20 11.771 20 13.657 18.828 14.828C17.657 16 15.771 16 12 16ZM4 11.25C3.80109 11.25 3.61032 11.329 3.46967 11.4697C3.32902 11.6103 3.25 11.8011 3.25 12C3.25 12.1989 3.32902 12.3897 3.46967 12.5303C3.61032 12.671 3.80109 12.75 4 12.75H8C8.19891 12.75 8.38968 12.671 8.53033 12.5303C8.67098 12.3897 8.75 12.1989 8.75 12C8.75 11.8011 8.67098 11.6103 8.53033 11.4697C8.38968 11.329 8.19891 11.25 8 11.25H4ZM10.5 11.25C10.3011 11.25 10.1103 11.329 9.96967 11.4697C9.82902 11.6103 9.75 11.8011 9.75 12C9.75 12.1989 9.82902 12.3897 9.96967 12.5303C10.1103 12.671 10.3011 12.75 10.5 12.75H12C12.1989 12.75 12.3897 12.671 12.5303 12.5303C12.671 12.3897 12.75 12.1989 12.75 12C12.75 11.8011 12.671 11.6103 12.5303 11.4697C12.3897 11.329 12.1989 11.25 12 11.25H10.5Z"
                                    fill="#6C1D45"
                                  />
                                </svg>
                              </span>
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
                        itemBg="bg-[#f1ebdf]"
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
                  <div className="hidden group-hover:block absolute pt-5 rounded-[20px] shadow-sm left-0">
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
                              to="/accounts"
                              className="flex cursor-pointer gap-4 hover:bg-hex-2/5 rounded-[10px] p-2"
                            >
                              <span className="w-10 h-10 rounded-full bg-[#fcedeb] flex justify-center items-center">
                                <svg
                                  width="16"
                                  height="20"
                                  viewBox="0 0 16 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                                    fill="#6C1D45"
                                  />
                                  <path
                                    opacity="0.5"
                                    d="M16 15.5C16 17.985 16 20 8 20C0 20 0 17.985 0 15.5C0 13.015 3.582 11 8 11C12.418 11 16 13.015 16 15.5Z"
                                    fill="#6C1D45"
                                  />
                                </svg>
                              </span>
                              <span>
                                <span className="block font-bold text-alternate">
                                  Corporate Current <br /> Account
                                </span>
                                <span className="block text-midblack pt-2 text-sm">
                                  Get a bank account best <br /> suited for your
                                  financial goals
                                </span>
                              </span>
                            </Link>
                          </>
                        }
                        bgColor="bg-white"
                        textColor="secondarybrown"
                        spanColor1="alternate"
                        spanColor2="midblack"
                        itemBg="bg-[#fcedeb]"
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
                  <div className="hidden group-hover:block absolute pt-5 rounded-[20px] shadow-sm left-0">
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
                              className="flex cursor-pointer gap-4 hover:bg-hex-2/5 rounded-[10px] p-2"
                            >
                              <span className="w-10 h-10 rounded-full bg-[#fcedeb] flex justify-center items-center">
                                <svg
                                  width="16"
                                  height="20"
                                  viewBox="0 0 16 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                                    fill="#6C1D45"
                                  />
                                  <path
                                    d="M16 15.5C16 17.985 16 20 8 20C0 20 0 17.985 0 15.5C0 13.015 3.582 11 8 11C12.418 11 16 13.015 16 15.5Z"
                                    fill="#6C1D45"
                                  />
                                </svg>
                              </span>
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
                        itemBg="bg-[#fcedeb]"
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
                  <div className="hidden group-hover:block absolute pt-5 rounded-[20px] shadow-sm left-0]">
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
                              className="flex cursor-pointer gap-4 hover:bg-hex-2/5 rounded-[10px] p-2"
                            >
                              <span className="w-10 h-10 rounded-full bg-[#fcedeb] flex justify-center items-center">
                                <svg
                                  width="12"
                                  height="18"
                                  viewBox="0 0 12 18"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M10.2857 1.38462V0.692308C10.2857 0.508696 10.1954 0.332605 10.0347 0.202772C9.87392 0.0729393 9.6559 0 9.42857 0C9.20124 0 8.98322 0.0729393 8.82248 0.202772C8.66173 0.332605 8.57143 0.508696 8.57143 0.692308V1.38462H1.71429C1.25963 1.38462 0.823594 1.53049 0.502103 1.79016C0.180612 2.04983 0 2.40201 0 2.76923V16.6154C0 16.9826 0.180612 17.3348 0.502103 17.5945C0.823594 17.8541 1.25963 18 1.71429 18H10.2857C10.7404 18 11.1764 17.8541 11.4979 17.5945C11.8194 17.3348 12 16.9826 12 16.6154V2.76923C12 2.40201 11.8194 2.04983 11.4979 1.79016C11.1764 1.53049 10.7404 1.38462 10.2857 1.38462ZM3.42857 16.6154H1.71429V15.2308H3.42857V16.6154ZM3.42857 13.8462H1.71429V12.4615H3.42857V13.8462ZM3.42857 11.0769H1.71429V9.69231H3.42857V11.0769ZM6.85714 16.6154H5.14286V15.2308H6.85714V16.6154ZM6.85714 13.8462H5.14286V12.4615H6.85714V13.8462ZM6.85714 11.0769H5.14286V9.69231H6.85714V11.0769ZM10.2857 16.6154H8.57143V15.2308H10.2857V16.6154ZM10.2857 13.8462H8.57143V12.4615H10.2857V13.8462ZM10.2857 11.0769H8.57143V9.69231H10.2857V11.0769ZM10.2857 7.61538C10.2857 7.799 10.1954 7.97509 10.0347 8.10492C9.87392 8.23475 9.6559 8.30769 9.42857 8.30769H2.57143C2.3441 8.30769 2.12608 8.23475 1.96534 8.10492C1.80459 7.97509 1.71429 7.799 1.71429 7.61538V3.46154C1.71429 3.27793 1.80459 3.10184 1.96534 2.972C2.12608 2.84217 2.3441 2.76923 2.57143 2.76923H9.42857C9.6559 2.76923 9.87392 2.84217 10.0347 2.972C10.1954 3.10184 10.2857 3.27793 10.2857 3.46154V7.61538Z"
                                    fill="#6C1D45"
                                  />
                                </svg>
                              </span>
                              <span>
                                <span className="block font-bold text-alternate">
                                  *647# Instant Banking
                                </span>
                                <span className="block text-midblack pt-2 text-sm">
                                  Access 24/7 banking <br /> anywhere anytime
                                </span>
                              </span>
                            </Link>
                            <Link
                              to="/accounts"
                              className="flex cursor-pointer gap-4 hover:bg-hex-2/5 rounded-[10px] px-2 pt-2 pb-10 mt-5"
                            >
                              <span className="w-10 h-10 rounded-full bg-[#fcedeb] flex justify-center items-center">
                                <svg
                                  width="19"
                                  height="19"
                                  viewBox="0 0 19 19"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M13.1538 5.84613C13.3476 5.84613 13.5334 5.92312 13.6705 6.06017C13.8075 6.19721 13.8845 6.38309 13.8845 6.5769C13.885 7.09534 13.7749 7.60792 13.5615 8.0804C13.3481 8.55289 13.0364 8.97441 12.6471 9.3168C12.5758 9.38411 12.4917 9.4364 12.3998 9.47054C12.3079 9.50469 12.2101 9.51999 12.1121 9.51553C12.0142 9.51108 11.9181 9.48697 11.8297 9.44462C11.7413 9.40228 11.6623 9.34258 11.5974 9.26908C11.5325 9.19557 11.4831 9.10976 11.4521 9.01676C11.4211 8.92375 11.4091 8.82546 11.4168 8.72772C11.4246 8.62999 11.4519 8.53482 11.4972 8.44787C11.5425 8.36092 11.6049 8.28398 11.6805 8.22162C11.9142 8.01614 12.1014 7.76311 12.2294 7.47947C12.3575 7.19582 12.4235 6.8881 12.423 6.5769C12.423 6.38309 12.5 6.19721 12.637 6.06017C12.7741 5.92312 12.9599 5.84613 13.1538 5.84613Z"
                                    fill="#6C1D45"
                                  />
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9.5 0C4.25308 0 0 4.25308 0 9.5C0 14.7469 4.25308 19 9.5 19C14.7469 19 19 14.7469 19 9.5C19 4.25308 14.7469 0 9.5 0ZM2.26538 13.0077C3.06461 14.657 4.40347 15.9838 6.06005 16.7679C7.71662 17.5521 9.59142 17.7466 11.3737 17.3192C11.2367 16.9544 10.9917 16.64 10.6714 16.418C10.351 16.196 9.9706 16.077 9.58087 16.0769C9.354 16.077 9.13447 15.9965 8.96138 15.8498C8.7883 15.7032 8.6729 15.4998 8.63574 15.276L8.56462 14.8502C8.47303 14.2997 8.80821 13.7687 9.3441 13.6157L10.3087 13.3409C10.7248 13.2211 11.0716 12.9336 11.2655 12.5458L11.3006 12.4747C11.401 12.2739 11.5476 12.0999 11.7284 11.967C11.9093 11.834 12.1191 11.746 12.3407 11.7101C12.5623 11.6742 12.7892 11.6915 13.0027 11.7606C13.2163 11.8297 13.4103 11.9485 13.5689 12.1074L13.8846 12.4231H14.4965C14.893 12.423 15.282 12.5304 15.6223 12.7339C15.9625 12.9374 16.2412 13.2293 16.4287 13.5787C17.1154 12.4122 17.4965 11.0911 17.5365 9.73811C17.5765 8.38507 17.2742 7.04383 16.6576 5.8388C16.0409 4.63376 15.13 3.60395 14.0092 2.84487C12.8885 2.0858 11.5942 1.62204 10.2464 1.49662C10.2892 1.7519 10.4217 1.98672 10.6254 2.15528L11.666 3.02246C12.0967 3.382 12.1873 4.00656 11.8765 4.47426L11.3795 5.22062C11.1089 5.62615 10.7109 5.92992 10.2483 6.0839L10.109 6.13067C9.95175 6.18323 9.80877 6.27133 9.69111 6.38812C9.57346 6.50491 9.48432 6.64725 9.43059 6.80408C9.37687 6.96091 9.36002 7.12801 9.38135 7.29241C9.40268 7.45681 9.46162 7.61407 9.55359 7.752C9.63837 7.87939 9.69511 8.02334 9.72003 8.17432C9.74496 8.3253 9.7375 8.47985 9.69816 8.62773C9.65882 8.77561 9.58849 8.91343 9.49184 9.03207C9.39518 9.1507 9.27442 9.24743 9.13754 9.31585L6.57692 10.5962L6.98908 11.628C7.0722 11.8376 7.07649 12.0702 7.00116 12.2827C6.92583 12.4952 6.77598 12.6731 6.57942 12.7836C6.38285 12.894 6.15291 12.9294 5.93224 12.8831C5.71158 12.8369 5.51516 12.7122 5.37944 12.5322L4.71785 11.6494C4.60572 11.5 4.45727 11.3817 4.28658 11.3058C4.11589 11.2299 3.92863 11.1988 3.74257 11.2156C3.55652 11.2324 3.37784 11.2965 3.2235 11.4017C3.06916 11.507 2.94428 11.6499 2.86072 11.817L2.26538 13.0077Z"
                                    fill="#6C1D45"
                                  />
                                </svg>
                              </span>
                              <span>
                                <span className="block font-bold text-alternate">
                                  Mobile Banking
                                </span>
                                <span className="block text-midblack pt-2 text-sm">
                                  Access 24/7 banking <br /> anywhere anytime
                                </span>
                                <a href="https://apps.apple.com/ng/app/signature-mobile/id6446977188" className="block h-12 w-28 -mt-8" target="_blank">
                                  <img src={AppStore} alt="App Store Link" />
                                </a>
                                <a href="https://play.google.com/store/apps/details?id=com.signaturemobile" className="block h-12 w-28 -mt-2" target="_blank">
                                  <img src={GooglePlay} alt="Google Plkay Link" />
                                </a>
                              </span>
                            </Link>
                          </>
                        }
                        bgColor="bg-white"
                        textColor="hex-3"
                        spanColor1="alternate"
                        spanColor2="midblack"
                        position="-ml-60"
                        itemBg="bg-[#fcedeb]"
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
                  <div className="hidden group-hover:block absolute pt-5 rounded-[20px] shadow-sm left-0">
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
