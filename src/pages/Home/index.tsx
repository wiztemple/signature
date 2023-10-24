import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer"
import Header from "../../components/Header";
import bannerSvg from '../../assets/bannersvg.svg';
import { Slide } from "../../utils/Slide";
import appleLogo from "../../assets/apple.svg";
import facebookSvg from "../../assets/facebook.svg";
import closeSvg from "../../assets/close.svg";
import messageSvg from "../../assets/message.svg";
import instaSvg from "../../assets/insta.svg";
import twitterSvg from "../../assets/twitter.svg";
import linkedinSvg from "../../assets/linkedin.svg";
import youtubeSvg from "../../assets/linkedin.svg";
import musicSvg from "../../assets/music.svg";
import MobileHeader from "../../components/MobileHeader";
import { Reveal } from "../../utils/Reveal";
import Cookies from "../../components/Cookies";

interface HeroProps {
  title: string
  description: string
  url: string
  mt: string
  top: string
  link: string
}

const dots: { dot: number }[] = [{ dot: 1 }, { dot: 2, }, { dot: 3 },];

const banks: { title: string, description: string }[] = [
  { title: "No Constraints", description: "Manage your transactions on our mobile banking application from anywhere you are." },
  { title: "Maximum Security", description: "Your money is safe and secured with our multi-level digital security implementations." },
  { title: "Personalized Experience", description: "Personalise your banking and enjoy the Signature experience." },
];

const Hero = ({ title, description, url, mt, top, link }: HeroProps) => (
  <Slide className="h-full relative w-full z-40">
    <div className="lg:w-[85%] w-[90%] mx-auto h-full">
      <img className='absolute -top-5 z-20 rotate overflow-hidden -ml-20' src="https://framerusercontent.com/images/lrpi5BupBslKQxBnserqWJ30fDs.png" alt="banner svg" />
      <div className="flex lg:flex-row flex-col justify-between relative z-40 items-center w-full h-full">
        <div className={`text-black lg:w-[45%] relative z-30 ${top} relative`}>
          <h1 className="lg:text-[64px] text-[36px] text-hex-2 font-nunitoSans leading-[1em] font-bold">{title}</h1>
          <p className="text-xl font-nunitoSans text-hex-8 mt-3 mb-5">{description}</p>
          <a href={link} className="bg-hex-2 px-4 hover:bg-primaryyellow py-2 rounded-[10px] text-white mt-4 font-nunitoSans">Learn More</a>
        </div>
        <div className="text-black flex-1">
          <img className={`relative z-40 object-center bg-cover ${mt}`} src={url} alt="" />
        </div>
      </div>
    </div>
  </Slide>
);

const Home = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [onCard, setOnCard] = useState<boolean>(false);
  const [onCard2, setOnCard2] = useState<boolean>(false);
  const [onCard3, setOnCard3] = useState<boolean>(false);
  const [onCard4, setOnCard4] = useState<boolean>(false);
  const [onCard5, setOnCard5] = useState<boolean>(false);
  const [onCard6, setOnCard6] = useState<boolean>(false);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === dots.length ? 1 : prevIndex + 1));
  };
    
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 12000);

    return () => clearInterval(slideInterval);
  }, [activeIndex]);

  const transition = "bg-cover ease-in-out transition-all delay-75 duration-700"
  
  return (
    <div className="font-nunitoSans bg-white">
      <Header primaryBtnClassName="bg-hex-2" />
      <MobileHeader bg="bg-white" textColor1="text-midblack" primaryBtnClassName="bg-hex-2 !py-2.5" />
      <div className="h-screen relative lg:block hidden bg-[#f9fafb] overflow-hidden">
        {dots[0].dot === activeIndex &&
          <Hero
          link="/about-us"
          top="2xl:mt-10 mt-[10%]"
          mt="2xl:mt-[11%] mt-[17%] ml-24 w-full h-full"
          title="Unlock Limitless Possibilities"
          description="We provide exceptional banking solutions by leveraging technology to accelerate your financial growth."
          url="https://framerusercontent.com/images/RBrg2DQg02GRb93W6tUeDp1hTE.png"
        />
        }
        {dots[2].dot === activeIndex && <Hero
          link="/cards"
          top="mt-[44px]"
          mt="2xl:mt-[15%] mt-[24%] ml-28 w-[90%]"
          title="Make Your Mark"
          description="We provide exceptional banking solutions by leveraging technology to accelerate your financial growth."
          url="https://framerusercontent.com/images/QgQXRLJTwx5NqjV4oPeHZf4rFf8.png"
        />}
        {dots[1].dot === activeIndex && <Slide className="h-full relative w-full z-40">
          <div className="w-[85%] mx-auto h-full">
            <img className='absolute -top-5 z-20 rotate overflow-hidden -ml-20' src={bannerSvg} alt="banner svg" />
            <div className="flex justify-between items-center w-full h-full">
              <div className="text-black w-[45%] z-30 relative">
                <h1 className="text-[64px] text-hex-2 font-nunitoSans leading-[1em] font-bold">Experience Freedom</h1>
                <p className="text-xl font-nunitoSans text-hex-8 mt-3 mb-5">Stay ahead with on-the-go banking.</p>
                <a href="/signature-mobile-app" className="bg-hex-2 hover:bg-primaryyellow ease-in-out transition-all delay-75 duration-100 px-4 py-2 rounded-[10px] text-white mt-4 font-nunitoSans">Learn More</a>
              </div>
              <div style={{ backdropFilter: "blur(10px)" }} className="text-black h-screen rounded-[175px] relative z-40 mt-[12.5%] w-[35%] bg-[#eaecf080]" />
              <img className={` absolute w-[42%] z-40 object-center right-16 bg-cover 2xl:top-[14%] top-[23%]`} src='https://framerusercontent.com/images/YP5wt0ZQnMobsLhO7jhlynAAio.png' alt="" />
            </div>
          </div>
        </Slide>}
        <div className="absolute  bottom-5 z-40 text-black mx-auto w-full flex justify-center">
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} className="w-[68px] h-[29.2px] gap-2 rounded-[20px] flex justify-center items-center">
            {dots.map((tab, index) => <div onClick={() => setActiveIndex(tab.dot)} key={index} className={`cursor-pointer ${tab.dot === activeIndex ? "bg-white" : "bg-gray-200/50"} rounded-full w-[10px] h-[10px]`}></div>)}
          </div>
        </div>
      </div>
      <div className="h-screen lg:hidden block bg-[#f9fafb] overflow-hidden py-20">
        <div className="h-full relative w-full z-40">
          <div className="w-[90%] mx-auto h-full">
            <img className='absolute top-20 z-20 w-full rotate overflow-hidden' src={bannerSvg} alt="banner svg" />
            <div className="flex lg:flex-row flex-col justify-between relative z-40 items-center w-full mt-24 h-full">
              <div className="text-black z-30 relative">
                <h1 className="lg:text-[64px] text-[36px] text-hex-2 font-nunitoSans leading-[1em] font-bold">Unlock Limitless Possibilities</h1>
                <p className="text-xl font-nunitoSans text-hex-8 mt-3 mb-5">We provide exceptional banking solutions by leveraging technology to accelerate your financial growth.</p>
                <a href="/about-us" className="bg-hex-2 px-4 py-2 rounded-[10px] text-white font-nunitoSans">Learn More</a>
              </div>
              <div className="text-black flex-1">
                <img className={`w-full h-full relative z-40 object-center bg-cover`} src="https://framerusercontent.com/images/RBrg2DQg02GRb93W6tUeDp1hTE.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ background: "linear-gradient(180deg,#f9fafb 0%,rgba(245,234,213,1) 100%)" }}>
        <div className="text-black lg:w-[85%] w-[90%] relative mx-auto">
          <div className="flex lg:flex-row relative flex-col gap-5 lg:py-28 py-10">
            <div className="lg:w-[30%] h-full lg:sticky top-32 text-primaryblack">
              <h2 className="text-[36px] lg:text-start text-center font-nunitoSans font-bold leading-[44px]">All You Need </h2>
              <h2 className="text-[36px] lg:text-start text-center font-nunitoSans font-bold leading-[44px]">In One Place</h2>
              <p className="text-hex-9 lg:text-start text-center lg:w-full w-[90%] mx-auto text-lg font-nunitoSans leading-[28px] mt-4">We are constantly looking for innovative solutions to help you meet your financial goals.</p>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-2 lg:gap-5 gap-8 w-full">
              <Reveal>
                <div
                  onMouseEnter={() => setOnCard(true)}
                  onMouseLeave={() => setOnCard(false)}
                  className="md:h-[384px] h-[384px] bg-[#f1ebdf] overflow-hidden rounded-[20px] pt-6 relative">
                  <div className="px-6">
                    <h3 className="text-xl font-nunitoSans font-bold text-hex-10">Use Our Safe And Unique Signature Cards For All Your Payment Needs.</h3>
                    <button className={`${onCard === true && "bg-primaryyellow"} bg-hex-2 ease-in-out transition-all relative z-40 delay-75 duration-700 rounded-[8px] mt-4 text-white px-5 py-2.5`}>Lauching Soon</button>
                  </div>
                  <div className="w-full absolute -bottom-20 flex flex-col items-center gap-3">
                    <img className={`w-[96%] absolute ${onCard === true ? "bottom-[140px]" : "bottom-24"} z-30 ${transition} object-cover`} src="https://framerusercontent.com/images/pqfPy3VB6tQcckqXMXimpn2jo.png?scale-down-to=512" alt="" />
                    <img className={`w-[96%] absolute ${onCard === true ? "bottom-[100px]" : " bottom-[70px]"} z-20 bg-cover ${transition} object-cover`} src="https://framerusercontent.com/images/NEI1xfhSh4lGxsJCUQmEKNFr7Tc.png?scale-down-to=512" alt="" />
                    <img className={`w-[96%] absolute ${onCard === true ? "bottom-[60px]" : "bottom-[45px]"} z-10 bg-cover ${transition} object-cover`} src="https://framerusercontent.com/images/xfxjiR3gLjxk2ArjCMRpwTOhcZQ.png?scale-down-to=512" alt="" />
                    <img className={`w-[96%] absolute ${onCard === true && "bottom-5"}  bottom-5 bg-cover ${transition} object-cover`} src="https://framerusercontent.com/images/1En9WFPFwPGkndRciPuMzvGz43A.png?scale-down-to=512" alt="" />
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div
                  onMouseEnter={() => setOnCard2(true)}
                  onMouseLeave={() => setOnCard2(false)}
                  style={{ backgroundColor: "rgb(255, 255, 255)" }} className="md:h-[340px] h-[384px] rounded-[20px] z-40 overflow-hidden relative">
                  <div className="z-40 relative p-6">
                    <h3 className="text-xl font-nunitoSans font-bold text-hex-10">Access Bespoke Banking Solutions For Your Business</h3>
                    <button className={`${onCard2 === true && "bg-primaryyellow"} bg-hex-2 ${transition} rounded-[8px] mt-4 text-white lg:px-5 px-3 py-2.5`}>See how</button>
                  </div>
                  <div className={`absolute ${onCard2 === true ? "-bottom-24" : "-bottom-14"} ${transition} z-30`}>
                    <img className="z-30 bg-cover object-cover" src="https://framerusercontent.com/images/PekFpoVisifP2gP4AbGTCGBU3Y.png?scale-down-to=512" alt="" />
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div
                  onMouseEnter={() => setOnCard3(true)}
                  onMouseLeave={() => setOnCard3(false)}
                  style={{ backgroundColor: "rgb(227, 212, 189)" }} className="rounded-[20px] overflow-hidden h-[384px]">
                  <div className="z-40 relative p-6">
                    <h3 className="text-xl font-nunitoSans font-bold text-hex-10">Money Can&apos;t Stop You. Let&apos;s Support You.</h3>
                    <button className={`${onCard3 === true && "bg-primaryyellow"} bg-hex-2 rounded-[8px] ${transition} mt-4 text-white lg:px-5 px-3 py-2.5`}>Coming soon</button>
                    <div className="mt-4">
                      <img className={`bg-cover object-cover w-full ${transition} ${onCard3 === true && "scale-110"}`} src="https://framerusercontent.com/images/IhX3GJKlhJRxvbuaNZe0DoPnLw.png" alt="" />
                    </div>
                  </div>
                </div>
              </Reveal>
              {/* SECTION2 */}
              <Reveal>
                <div
                  onMouseEnter={() => setOnCard4(true)}
                  onMouseLeave={() => setOnCard4(false)}
                  className="md:h-[340px] h-[384px] rounded-[20px] relative">
                  <div className="text-white relative z-40 flex justify-end rounded-[20px] flex-col h-full w-full px-6 pb-10">
                    <h3 className="text-xl text-white font-nunitoSans font-bold">Exclusive Banking That Preserves Wealth</h3>
                    <button className={`${onCard4 === true && "bg-primaryyellow"} ${transition} bg-hex-2 rounded-[8px] mt-4 text-white w-32 py-2.5`}>Learn More</button>
                  </div>
                  {/* <div className="h-44 w-full absolute z-30 opacity-20 bottom-0 bg-black" /> */}
                  <div style={{ background: "linear-gradient(rgba(22, 21, 18, 0) 0%, rgb(18, 18, 18) 100%)" }} className={`top-0 absolute w-full ${transition} opacity-90 h-full rounded-[20px] left-0 z-30`} />
                  <img className={`w-full h-full bg-cover ${transition} left-0 top-0 z-20 absolute object-cover rounded-[20px]`} src="https://framerusercontent.com/images/2QEr7668AEGZzFsB1qiZcUCmGY0.png" />
                </div>
              </Reveal>
              <div className="relative md:-mt-11">
                <Reveal>
                  <div
                    onMouseEnter={() => setOnCard5(true)}
                    onMouseLeave={() => setOnCard5(false)}
                    style={{ backgroundColor: "rgb(227, 212, 189)" }} className="overflow-hidden rounded-[20px] h-[384px] pt-6 px-6">
                    <h3 className="text-xl font-nunitoSans font-bold text-hex-10">Make Everyday Banking Seamless</h3>
                    <p className="text-base text-[#30353f] leading-[17px]">Get the Signature Bank app</p>
                    <div className="w-[130px] h-[30px] mt-2">
                      <img className="w-[80%]" src={appleLogo} alt="apple logo" />
                    </div>
                    <div className="w-[130px] h-[30px] mt-2">
                      <img className="w-[80%]" src={appleLogo} alt="apple logo" />
                    </div>
                    <div className={`flex justify-center ${onCard5 === true ? "md:mt-10 mt-8" : "md:mt-14 mt-11"} ${transition}`}>
                      <img className="md:w-[75%] w-[55%] object-cover bg-cover" src="https://framerusercontent.com/images/hY94RU6GHmyPfbTQBoA1uq06g.png" alt="" />
                    </div>
                  </div>
                </Reveal>
              </div>
              <Reveal>
                <div
                  onMouseEnter={() => setOnCard6(true)}
                  onMouseLeave={() => setOnCard6(false)}
                  style={{ backgroundColor: "rgb(255, 255, 255)" }} className="md:h-[340px] h-[384px] rounded-[20px] overflow-hidden p-6">
                  <div>
                    <h3 className="text-xl font-nunitoSans font-bold text-hex-10">No restrictions, no limitations.</h3>
                    <h3 className="text-xl font-nunitoSans font-bold text-hex-10">Bank on-the-go.</h3>
                    <button type="button" className={`${onCard6 === true && "bg-primaryyellow"} ${transition} bg-hex-2 rounded-[8px] mt-4 text-white w-[50%] py-2.5`}>Coming Soon</button>
                    {/* dial */}
                    <div className={`gap-4 flex md:w-[98%] w-[80%] justify-center mx-auto ${onCard6 === true ? "mt-6" : "mt-12"} ${transition}`}>
                      <div className="flex relative justify-center w-full ml-4">
                        <div className={`relative ${transition}`}>
                          <img className={`w-[40px] h-[40px] absolute ${transition} ${onCard6 === true && "mt-6 rotate-180"} -top-9 -left-3`} src="https://framerusercontent.com/images/LcyrFPA26JWdNobi5ZaWYeuZgA.png" />
                          <img className="z-30" src="https://framerusercontent.com/images/Q3Z59fcA1YlyPzIjt7ADmzYnAZ4.png?scale-down-to=512" />
                        </div>
                        <div className="relative">
                          <img className={`-ml-3 ${onCard6 === true && "-rotate-12 -ml-1.5"} ${transition} z-40`} src="https://framerusercontent.com/images/p9WiW5JMIQep3kcBIAHTOM6aa8g.png?scale-down-to=512" />
                        </div>
                        <div className="relative">
                          <img className={`absolute w-[30px] ${onCard6 === true && "-rotate-45"} ${transition} -top-6 right-6`} src="	https://framerusercontent.com/images/YPGmOKb8M6uMoz0bP9XXR91j23E.png" />
                          <img className=" -ml-7 mt-3" src="https://framerusercontent.com/images/UKjzIgRxSraxI4Qtnjw1OpDdjh4.png?scale-down-to=512" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div style={{ backgroundColor: "rgb(227, 212, 189)" }} className="relative">
        <div className="w-[85%] mx-auto pt-10 pb-28">
          <div className="flex justify-center flex-col items-center w-full">
            <div className="bg-[#f1ebdf] text-[#b9975b] py-1 px-3 rounded-[50px]">Brand New</div>
            <h2 className="text-[36px] leading-[44px] font-nunitoSans font-bold text-[#0f1725] mt-3">Bank on-the-go</h2>
            <p className="text-lg leading-[28px] text-hex-9 mt-3">Banking anytime, anywhere</p>
            <div className="flex justify-center gap-4 mt-3 mx-auto">
              <div className="w-[120px] h-[30px]">
                <img className="w-full" src={appleLogo} alt="apple logo" />
              </div>
              <div className="w-[120px] h-[30px]">
                <img className="w-full" src={appleLogo} alt="apple logo" />
              </div>
            </div>
            <div className="h-[353px] w-full mt-10 relative overflow-hidden">
              <div className="flex relative w-full justify-center mx-auto">
                <img className="w-[300px] bg-cover md:block hidden relative z-40 mt-10" src="https://framerusercontent.com/images/eFWsTDY52vMx1Sv2Rg5Uweg.png" alt="" />
                <img className="w-[300px] bg-cover relative z-40 md:-ml-16" src="https://framerusercontent.com/images/hY94RU6GHmyPfbTQBoA1uq06g.png" alt="" />
              </div>
              <img className="lg:w-[35%] absolute left-12 top-16 z-30" src="https://framerusercontent.com/images/rSYgkYVqa3gEd7bmGhOq4RkzFA.png?scale-down-to=1024" alt="" />
              <img className="w-[35%] absolute right-2 top-1 z-30" src="https://framerusercontent.com/images/er05LdZo66tT1ACAo4r7nUJOrs0.png?scale-down-to=1024" alt="" />
            </div>
            <div className="md:border-t-4 w-full flex md:gap-0 gap-3 mt-4 md:flex-row flex-col">
              {banks.map((bank, index) => (
                  <div onClick={() => setCurrentIndex(index)} key={index} className={`flex-1 text-center md:first:bg-transparent ${transition} md:even:bg-transparent md:last:bg-transparent first:bg-main-5 even:bg-main-6 last:bg-main-6 md:border-t-4 -mt-1 md:rounded-none rounded-[30px] cursor-pointer py-4 px-3 ${currentIndex === index ? "border-hex-2" : "border-hex-2/40"}`}>
                <Reveal>
                  <h4 className="text-xl font-bold font-nunitoSans leading-[30px] text-primaryblack">{bank.title}</h4>
                  <p className="text-[#545c6c] leading-[24px] text-base font-nunitoSans">{bank.description}</p>
                </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center items-center flex-col py-28">
        <Reveal><h2 className="text-primaryblack text-[36px] leading-[44px] font-bold">Latest Publications</h2></Reveal>
        <Reveal><p className="text-[#667084] text-xl lg:text-start lg:w-full w-[60%] mx-auto text-center leading-[30px] mt-4">The latest news, publications, and resources from our team.</p></Reveal>
        <div className="flex md:flex-row flex-col lg:gap-4 gap-8 lg:w-[75%] w-[90%] mx-auto lg:h-[240px] lg:mt-14 mt-10">
          <div className="flex-1 flex md:flex-row flex-col gap-4">
            <div className="lg:w-[240px] lg:h-[240px] md:w-[160px] w-full h-[200px]">
              <Reveal className="lg:w-[240px] lg:h-[240px] md:w-[160px] w-full h-[200px]">
                <img className="rounded-[24px] lg:w-[240px] md:w-[160px] w-full lg:h-[240px] h-[200px] object-cover bg-cover" src="https://framerusercontent.com/images/Q7yK6b8OgphElaqypVACvrLz4.jpg" alt="" />
              </Reveal>
            </div>
            <Reveal>
              <h2 className="text-lg text-main-3 font-bold">CBN provides further update to the guidelines in the Foreign Exchange Market.</h2>
              <p className="text-base text-primarygray">The Director of Corporate Communications, Dr Isa AbdulMumin, has announced further policy changes in relation to FX which is aimed at…</p>
              <button className="bg-hex-2 mt-3 rounded-[8px] text-white px-5 py-2.5">Read more</button>
            </Reveal>
          </div>
          <div className="flex-1 flex md:flex-row flex-col gap-4">
            <div className="lg:w-[240px] lg:h-[240px] md:w-[160px] w-full h-[200px]">
              <Reveal className="lg:w-[240px] lg:h-[240px] md:w-[160px] w-full h-[200px]">
                <img className="rounded-[24px] lg:w-[240px] md:w-[160px] lg:h-[240px] w-full h-[200px]  object-cover bg-cover" src="https://framerusercontent.com/images/cBtUkCjjDXHdpLUs6Ky1h2KLLnk.jpg?scale-down-to=2048" alt="" />
              </Reveal>
            </div>
            <Reveal>
              <h2 className="text-lg text-main-3 font-bold">Excitement as Signature Bank launches operation</h2>
              <p className="text-base text-primarygray">Signature Bank, on Monday, November 21, 2022 launched its operations into the Nigerian banking sector with unique services that are expected to deepen Nigeria's financial inclusion, targeting over 40 million…</p>
              <button className="bg-hex-2 rounded-[8px] text-white px-5 py-2.5 lg:mt-0 mt-2">Read more</button>
            </Reveal>
          </div>
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-alternate md:w-[60%]"
          imgContainer="lg:w-[40%] w-full"
          textColor="text-primarygray md:text-xl"
          title="Unlock new financial possibilities with us"
          description="Open a Signature Bank account in just a few steps"
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      {/* cookies */}
      <Cookies />
      <div style={{ backgroundColor: "rgba(243, 243, 243, 0.8)", backdropFilter: "blur(10px)" }} className="rounded-[20px] lg:block hidden bg-white right-10 fixed bottom-3 w-[24%] z-50 h-11 px-4">
        <div className="flex items-center h-full justify-between gap-2">
          <div className="flex gap-2">
            <a href="mailto:enquiries@signaturebankng.com" rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-6 h-6"><img className="w-full h-full" src={messageSvg} alt="svg" /></a>
            <a href="https://www.facebook.com/profile.php?id=100083538721743" rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-6 h-6"><img className="w-full h-full" src={facebookSvg} alt="svg" /></a>
            <a href="https://www.linkedin.com/company/signature-bank-nigeria/" rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-6 h-6"><img className="w-full h-full" src={instaSvg} alt="svg" /></a>
            <a href="https://mobile.twitter.com/Signaturebankng" rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-6 h-6"><img className="w-full h-full" src={twitterSvg} alt="svg" /></a>
            <a href="https://www.instagram.com/signaturebankng/?hl=en" rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-6 h-6"><img className="w-full h-full" src={linkedinSvg} alt="svg" /></a>
            <a rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-6 h-6"><img className="w-full h-full" src={youtubeSvg} alt="svg" /></a>
            <a href="https://www.tiktok.com/@signaturebankng" rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-6 h-6"><img className="w-full h-full" src={musicSvg} alt="svg" /></a>
          </div>
          <div className="flex items-center gap-3">
            <p className="text-sm text-[#101828b3]">social 👋🏾</p>
            <div>
              <img className="h-[14px] w-[14px]" src={closeSvg} alt="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;