import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer"
import Header from "../../components/Header";
import bannerSvg from '../../assets/bannersvg.svg';
import { Slide } from "../../utils/Slide";
import appleLogo from "../../assets/apple.svg";

interface HeroProps {
  title: string
  description: string
  url: string
  mt: string
  top: string
}

const dots = [
  {dot: 1, tag: <div className="w-[10px] h-[10px] bg-white rounded-full" />},
  {dot: 2, tag: <div className="w-[10px] h-[10px] bg-gray-400 rounded-full" />},
  {dot: 3, tag: <div className="w-[10px] h-[10px] bg-gray-400 rounded-full" />},
]

const Hero = ({ title, description, url, mt, top }: HeroProps) => (
  <Slide className="h-full relative w-full z-40">
    <div className="w-[85%] mx-auto h-full">
      <img className='absolute -top-5 z-20 rotate overflow-hidden -ml-20' src={bannerSvg} alt="banner svg" />
      <div className="flex justify-between relative z-40 items-center w-full h-full">
        <div className={`text-black w-[45%] relative z-30 ${top} relative`}>
          <h1 className="text-[64px] text-hex-2 font-nunito leading-[1em] font-bold">{title}</h1>
          <p className="text-xl font-nunito text-hex-8 mt-3">{description}</p>
          <button className="bg-hex-2 px-4 py-2 rounded-[10px] text-white mt-4 font-nunito">Learn More</button>
        </div>
        <div className="text-black flex-1">
          <img className={`w-full h-full relative z-40 object-center bg-cover ${mt}`} src={url} alt="" />
        </div>
      </div>
    </div>
  </Slide>
);

const Home = () => {

  const [activeIndex, setActiveIndex] = useState(1);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex === dots.length ? 1 : prevIndex + 1));
  };
    
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 12000);

    return () => clearInterval(slideInterval);
  }, [activeIndex]);
  
  return (
    <div className="font-nunitoSans bg-white">
      <Header />
      <div className="h-screen bg-[#f9fafb] overflow-hidden">
        {dots[0].dot === activeIndex && <Hero
          top="mt-[14%]"
          mt="mt-[17%] ml-24"
          title="Unlock Limitless Possibilities"
          description="We provide exceptional banking solutions by leveraging technology to accelerate your financial growth."
          url="https://framerusercontent.com/images/RBrg2DQg02GRb93W6tUeDp1hTE.png"
        />}
        {dots[1].dot === activeIndex && <Hero
          top="mt-[44px]"
          mt="mt-[22%] ml-10"
          title="Experience Freedom"
          description="Stay ahead with on-the-go banking."
          url="https://framerusercontent.com/images/QgQXRLJTwx5NqjV4oPeHZf4rFf8.png"
        />}
        {dots[2].dot === activeIndex && <Slide className="h-full relative w-full z-40">
    <div className="w-[85%] mx-auto h-full">
      <img className='absolute -top-5 z-20 rotate overflow-hidden -ml-20' src={bannerSvg} alt="banner svg" />
      <div className="flex justify-between items-center w-full h-full">
        <div className={`text-black w-[45%] relative z-30 ${top} relative`}>
          <h1 className="text-[64px] text-hex-2 font-nunito leading-[1em] font-bold">Experience Freedom</h1>
          <p className="text-xl font-nunito text-hex-8 mt-3">Stay ahead with on-the-go banking.</p>
          <button className="bg-hex-2 px-4 py-2 rounded-[10px] text-white mt-4 font-nunito">Learn More</button>
        </div>
        <div style={{backdropFilter: "blur(10px)"}} className="text-black h-screen rounded-[175px] relative z-40 mt-[12.5%] w-[35%] bg-[#eaecf080]" />
          <img className={` absolute w-[42%] z-40 object-center right-16 bg-cover top-[23%]`} src='https://framerusercontent.com/images/YP5wt0ZQnMobsLhO7jhlynAAio.png' alt="" />
      </div>
    </div>
  </Slide>}
        <div className="absolute bottom-5 z-40 text-black mx-auto w-full flex justify-center">
          <div style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }} className="w-16 h-7 gap-2 rounded-[20px] flex justify-center items-center">
            {dots.map((tab, index) => <div onClick={() => setActiveIndex(tab.dot)} key={index} className={`cursor-pointer ${tab.dot === activeIndex ? "bg-white" : "bg-gray-200/50"} rounded-full w-[10px] h-[10px]`}></div>)}
          </div>
        </div>
      </div>
      <div style={{ background: "linear-gradient(180deg,#f9fafb 0%,rgba(245,234,213,1) 100%)" }}>
        <div className="text-black w-[85%] mx-auto">
          <div className="flex gap-5 py-28">
            <div className="w-[30%] text-primaryblack">
              <h2 className="text-[36px] font-nunito font-bold leading-[44px]">All You Need </h2>
              <h2 className="text-[36px] font-nunito font-bold leading-[44px]">In One Place</h2>
              <p className="text-hex-9 text-lg font-nunito leading-[28px] mt-4">We are constantly looking for innovative solutions to help you meet your financial goals.</p>
            </div>
            <div className="grid grid-cols-3 gap-5 w-full">
              <div className="h-[384px] bg-[#f1ebdf] overflow-hidden rounded-[20px] pt-6 relative">
                <div className="px-6">
                  <h3 className="text-xl font-nunito font-bold text-hex-10">Use Our Safe And Unique Signature Cards For All Your Payment Needs.</h3>
                  <button className="bg-hex-2 rounded-[8px] mt-4 text-white px-5 py-2.5">Lauching Soon</button>
                </div>
                <div className="w-full absolute -bottom-20 flex flex-col items-center gap-3">
                  <img className="w-[96%] absolute bottom-24 z-30 bg-cover object-cover" src="https://framerusercontent.com/images/pqfPy3VB6tQcckqXMXimpn2jo.png?scale-down-to=512" alt="" />
                  <img className="w-[96%] absolute bottom-[70px] z-20 bg-cover object-cover" src="https://framerusercontent.com/images/NEI1xfhSh4lGxsJCUQmEKNFr7Tc.png?scale-down-to=512" alt="" />
                  <img className="w-[96%] absolute bottom-[45px] z-10 bg-cover object-cover" src="https://framerusercontent.com/images/xfxjiR3gLjxk2ArjCMRpwTOhcZQ.png?scale-down-to=512" alt="" />
                  <img className="w-[96%] absolute bottom-5 bg-cover object-cover" src="https://framerusercontent.com/images/1En9WFPFwPGkndRciPuMzvGz43A.png?scale-down-to=512" alt="" />
                </div>
              </div>
              <div style={{ backgroundColor: "rgb(255, 255, 255)" }} className="h-[340px] rounded-[20px] z-40 overflow-hidden relative">
                <div className="z-40 relative p-6">
                  <h3 className="text-xl font-nunito font-bold text-hex-10">Access Bespoke Banking Solutions For Your Business</h3>
                  <button className="bg-hex-2 rounded-[8px] mt-4 text-white px-5 py-2.5">See how</button>
                </div>
                <div className="absolute -bottom-14 z-30">
                  <img className="z-30 bg-cover object-cover" src="https://framerusercontent.com/images/PekFpoVisifP2gP4AbGTCGBU3Y.png?scale-down-to=512" alt="" />
                </div>
              </div>
              <div style={{ backgroundColor: "rgb(227, 212, 189)" }} className="rounded-[20px] overflow-hidden h-[384px]">
                <div className="z-40 relative p-6">
                  <h3 className="text-xl font-nunito font-bold text-hex-10">Money Can&apos;t Stop You. Let&apos;s Support You.</h3>
                  <button className="bg-hex-2 rounded-[8px] mt-4 text-white px-5 py-2.5">Coming soon</button>
                  <div className="mt-4">
                    <img className="bg-cover object-cover" src="https://framerusercontent.com/images/IhX3GJKlhJRxvbuaNZe0DoPnLw.png" alt="" />
                  </div>
                </div>
              </div>
              {/* SECTION2 */}
              <div style={{ backgroundColor: "rgb(27, 28, 29)" }} className="h-[340px] rounded-[20px] relative">
                <div className="text-white relative flex justify-end flex-col h-full w-full z-40 px-6 -mt-10">
                  <h3 className="text-xl text-white font-nunito font-bold">Exclusive Banking That Preserves Wealth</h3>
                  <button className="bg-hex-2 rounded-[8px] mt-4 text-white w-[50%] py-2.5">Learn More</button>
                </div>
                {/* <div className="h-44 w-full absolute z-30 opacity-20 bottom-0 bg-black" /> */}
                <img className="w-full h-full bg-cover left-0 top-0 z-20 absolute object-cover rounded-[20px]" src="https://framerusercontent.com/images/2QEr7668AEGZzFsB1qiZcUCmGY0.png" />
              </div>
              <div style={{ backgroundColor: "rgb(227, 212, 189)" }} className="-mt-11 overflow-hidden rounded-[20px] h-[384px] pt-6 px-6">
                <h3 className="text-xl font-nunito font-bold text-hex-10">Make Everyday Banking Seamless</h3>
                <p className="text-base text-[#30353f] leading-[17px]">Get the Signature Bank app</p>
                <div className="w-[130px] h-[30px] mt-2">
                  <img className="w-[80%]" src={appleLogo} alt="apple logo" />
                </div>
                <div className="w-[130px] h-[30px] mt-2">
                  <img className="w-[80%]" src={appleLogo} alt="apple logo" />
                </div>
                <div className="flex justify-center mt-14">
                  <img className="w-[75%] object-cover bg-cover" src="https://framerusercontent.com/images/hY94RU6GHmyPfbTQBoA1uq06g.png" alt="" />
                </div>
              </div>
              <div style={{ backgroundColor: "rgb(255, 255, 255)" }} className="h-[340px] rounded-[20px] overflow-hidden p-6">
                <div>
                  <h3 className="text-xl font-nunito font-bold text-hex-10">No restrictions, no limitations.</h3>
                  <h3 className="text-xl font-nunito font-bold text-hex-10">Bank on-the-go.</h3>
                  <button className="bg-hex-2 rounded-[8px] mt-4 text-white w-[50%] py-2.5">Coming Soon</button>
                  {/* dial */}
                  <div className="gap-4 flex w-[98%] justify-center mx-auto mt-12">
                    <div className="flex relative justify-center w-full ml-4">
                      <div className="relative">
                        <img className="w-[33px] h-[33px] absolute -top-7 -left-3" src="https://framerusercontent.com/images/LcyrFPA26JWdNobi5ZaWYeuZgA.png" />
                        <img className="z-30" src="https://framerusercontent.com/images/Q3Z59fcA1YlyPzIjt7ADmzYnAZ4.png?scale-down-to=512" />
                      </div>
                      <div className="relative">
                        <img className="-ml-3 z-40" src="https://framerusercontent.com/images/p9WiW5JMIQep3kcBIAHTOM6aa8g.png?scale-down-to=512" />
                      </div>
                      <div className="relative">
                        <img className=" absolute w-[30px] -top-6 right-6" src="	https://framerusercontent.com/images/YPGmOKb8M6uMoz0bP9XXR91j23E.png" />
                        <img className=" -ml-7 mt-3" src="https://framerusercontent.com/images/UKjzIgRxSraxI4Qtnjw1OpDdjh4.png?scale-down-to=512" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div style={{ backgroundColor: "rgb(227, 212, 189)" }}>
        <div className="w-[85%] mx-auto pt-10 pb-28">
          <div className="flex justify-center flex-col items-center w-full">
            <div className="bg-[#f1ebdf] text-[#b9975b] py-1 px-3 rounded-[50px]">Brand New</div>
            <h2 className="text-[36px] leading-[44px] font-nunito font-bold text-[#0f1725] mt-3">Bank on-the-go</h2>
            <p className="text-lg leading-[28px] text-hex-9 mt-3">Banking anytime, anywhere</p>
            <div className="flex justify-center gap-4 mt-3 mx-auto">
              <div className="w-[120px] h-[30px]">
                <img className="w-full" src={appleLogo} alt="apple logo" />
              </div>
              <div className="w-[120px] h-[30px]">
                <img className="w-full" src={appleLogo} alt="apple logo" />
              </div>
            </div>
            <div className="h-[353px] w-full mt-10 overflow-hidden">
              <div className="flex relative w-full justify-center mx-auto">
                <img className="w-[300px] bg-cover mt-10" src="https://framerusercontent.com/images/eFWsTDY52vMx1Sv2Rg5Uweg.png" alt="" />
                <img className="w-[300px] bg-cover -ml-16" src="	https://framerusercontent.com/images/hY94RU6GHmyPfbTQBoA1uq06g.png" alt="" />
              </div>
            </div>
            <div className="border-t-2 w-full rounded-sm flex pt-5">
              <div className="flex-1 text-center">
                <h4 className="text-xl font-bold font-nunito leading-[30px] text-primaryblack">No Constraints</h4>
                <p className="text-[#545c6c] leading-[24px] text-base font-nunito">Manage your transactions on our mobile banking application from anywhere you are.</p>
              </div>
              <div className="flex-1 text-center">
                <h4 className="text-xl font-bold font-nunito leading-[30px] text-primaryblack">Maximum Security</h4>
                <p className="text-[#545c6c] leading-[24px] text-base font-nunito">Your money is safe and secured with our multi-level digital security implementations.</p>
              </div>
              <div className="flex-1 text-center">
                <h4 className="text-xl font-bold font-nunito leading-[30px] text-primaryblack">Personalized Experience</h4>
                <p className="text-[#545c6c] leading-[24px] text-base font-nunito">Personalise your banking and enjoy the Signature experience.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white flex justify-center items-center flex-col py-28">
        <h2 className="text-primaryblack text-[36px] leading-[44px] font-bold">Latest Publications</h2>
        <p className="text-[#667084] text-xl leading-[30px] mt-4">The latest news, publications, and resources from our team.</p>
        <div className="flex gap-4 w-[75%] mx-auto h-[240px] mt-14">
          <div className="flex-1 flex gap-4">
            <img className="rounded-[24px] w-[240px] h-[240px] object-cover bg-cover" src="https://framerusercontent.com/images/Q7yK6b8OgphElaqypVACvrLz4.jpg" alt="" />
            <div >
              <h2 className="text-lg text-main-3 font-bold">CBN provides further update to the guidelines in the Foreign Exchange Market.</h2>
              <p className="text-base text-primarygray">The Director of Corporate Communications, Dr Isa AbdulMumin, has announced further policy changes in relation to FX which is aimed at…</p>
              <button className="bg-hex-2 mt-3 rounded-[8px] text-white px-5 py-2.5">Read more</button>
            </div>
          </div>
          <div className="flex-1 flex gap-4">
            <img className="rounded-[24px] w-[240px] h-[240px] object-cover bg-cover" src="https://framerusercontent.com/images/cBtUkCjjDXHdpLUs6Ky1h2KLLnk.jpg?scale-down-to=2048" alt="" />
            <div >
              <h2 className="text-lg text-main-3 font-bold">Excitement as Signature Bank launches operation</h2>
              <p className="text-base text-primarygray">Signature Bank, on Monday, November 21, 2022 launched its operations into the Nigerian banking sector with unique services that are expected to deepen Nigeria's financial inclusion, targeting over 40 million…</p>
              <button className="bg-hex-2 rounded-[8px] text-white px-5 py-2.5">Read more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-alternate w-[90%]"
          imgContainer=""
          textColor="text-primarygray"
          title="Open an account with us in a few simple steps."
          description="Open an account with us and enjoy the benefits of personalized banking services."
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      {/* <img width="200px" height="200px" src={curve} alt="" /> */}
      <Footer />
    </div>
  );
};

export default Home;