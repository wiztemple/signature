import { Reveal } from "../../utils/Reveal";
import ZoomOnScroll from "../../utils/ZoomOnScroll";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import appleLogo from "../../assets/apple.svg";
import googleLogo from "../../assets/google.svg";
import Logo from "../../assets/logo.svg";
import handPhone from "../../assets/handPhone.png";
import cards from "../../assets/groupCard.svg";


const DigitalBanking = () => {
  return (
    <div className="bg-hex-7 font-nunitoSans overflow-hidden">
      <Header
        bg="bg-[#1e191b]/70"
        textColor1="text-white"
        textColor2="text-white"
        logoUrl={Logo}
        primaryBtnClassName="bg-primaryyellow hover:bg-secondarybrown"
        showPrimaryBtnIcon={false}
      />
      <MobileHeader
        bg="bg-[#1e191b]/70"
        textColor1="text-white"
        textColor2="text-white"
        primaryBtnClassName="bg-primaryyellow hover:bg-secondarybrown !py-2.5"
        showPrimaryBtnIcon={false}
        logoUrl={Logo}
        strokeColor="white"
      />

      <div className="h-screen relative md:pb-0 pb-5 w-full overflow-hidden font-nunitoSans">
        <div className="w-full mx-auto relative flex justify-center">
          <img
            className="absolute md:top-4 mt-14 md:left-0 md:-right-36 -left-60 h-screen w-full z-20"
            src="https://framerusercontent.com/images/yaKi2r9uBWv0fG5wicgNzHmYU.png?scale-down-to=2048"
            alt=""
          />
        </div>
        <div className="z-30 relative flex w-full overflow-hidden justify-center h-full">
          <Reveal>
            <div className="lg:w-[90%] sm:w-full w-[600px] h-screen overflow-hidden md:left-0 -left-28 z-40 md:top-36 mt-8 relative">
              <img
            className="bg-cover object-cover lg:w-auto lg:h-auto h-full w-full"
            src="	https://framerusercontent.com/images/90iLC8eLJFKBsYO5b61ZtAyUlzw.png"
            alt="man"
          />
            </div>
          </Reveal>
        </div>
        <div
          className={`text-white z-40 absolute w-full h-auto flex mx-auto justify-center md:bottom-14 bottom-0`}
        >
          <div
            style={{ backdropFilter: "blur(15px)" }}
            className={`text-[60px] bg-[#67194130] rounded-[20px] md:p-[30px] p-4 lg:w-[60%] sm:w-[70%] w-full`}
          >
            <div
              className={`text-white lg:text-[64px] text-center font-bold leading-[1em]`}
            >
              <h1>Limitless Banking</h1>

            </div>
            <p className="text-2xl flex justify-center text-center mt-4 text-white">
              <p className="">
                Do your transactions anytime, anywhere you want.
              </p>
            </p>
          </div>
        </div>
        <div
          style={{
            background:
              "linear-gradient(rgba(68, 11, 41, 0) 0%, rgb(68, 11, 41) 95%)",
          }}
          className="h-[450px] absolute bottom-0 z-30 left-0 w-full"
        />
      </div>
      {/*  */}
      <div className="lg:w-[85%] w-[90%] md:pt-0 pt-10 relative z-40 mx-auto">
        {/*  */}
        <Reveal>
          <div style={{ background: "radial-gradient(135.2% 84.9946% at 48.1033% 33.3333%, rgb(94, 15, 56) 0%, rgb(65, 10, 39) 100%)"}} className="w-full lg:h-[700px] md:h-[620px] h-[650px] z-40 relative pt-20 rounded-[50px] overflow-hidden flex flex-col items-center font-nunitoSans">
          <ZoomOnScroll><div className="md:text-5xl text-4xl font-bold leading-[1em] text-primaryyellow">Bank in style</div></ZoomOnScroll>
          <ZoomOnScroll><div className="md:text-5xl text-4xl font-bold leading-[1em] text-center mt-4 text-white">with Signature Cards</div></ZoomOnScroll>
          <ZoomOnScroll><div className="text-xl text-center text-[#fff3f8] mt-4 px-2">
            Get our safe and durable signature card for your business transactions.
          </div></ZoomOnScroll>
          <a href="/cards" className="relative z-40">
            <button
            type="button"
            className="bg-primaryyellow hover:bg-[#8B7C48]/90 text-lg text-white py-4 px-7 mt-5 rounded-[10px]"
          >
            Learn More
          </button>
          </a>
          <div className="w-full flex justify-center relative h-full">
            {/* signature cards */}
            <div className="lg:w-[83%] md:w-[150%] w-[300%] absolute lg:-bottom-[320px] md:-bottom-[500px] sm:-bottom-[630px] -bottom-[400px]">
                <ZoomOnScroll><img className="w-full h-full relative z-40 bg-cover object-cover" src={cards} alt="atm cards" /></ZoomOnScroll>
            </div>
            </div>
            <img
            className="absolute opacity-50 -bottom-48 -right-[400px] z-20"
            src="https://framerusercontent.com/images/yaKi2r9uBWv0fG5wicgNzHmYU.png?scale-down-to=2048"
            alt=""
          />
        </div>
        </Reveal>
        {/*  */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-20">
          {/* frame1 */}
          <Reveal>
            <div style={{ background: "radial-gradient(135.2% 84.9946% at 48.1033% 33.3333%, rgb(94, 15, 56) 0%, rgb(65, 10, 39) 100%)"}} className="rounded-[30px] font-nunitoSans py-10 px-6 h-[750px] overflow-hidden">
            <h1 className="text-white md:text-5xl text-3xl font-bold leading-[1.2em]">
              <span className="font-bold text-[#b49863]">No constraints,</span>{" "}
              bank anywhere, anytime
            </h1>
            <p className="text-[#fff3f8] text-xl mt-5 leading-[30px]">
              Download our easy to use Mobile application and access financial
              services anywhere you go.{" "}
              </p>
              <div className="gap-4 relative z-40 flex mt-5">
                <a target="_blank" rel="noopener" href="https://play.google.com/store/apps/details?id=ng.gov.cbn.speed.wallet.temp&pli=1"> <img src={googleLogo} alt="apple logo" /></a>
                <a target="_blank" rel="noopener" href="https://apps.apple.com/us/app/enaira-speed-wallet/id1587292843"><img src={appleLogo} alt="apple logo" /></a>
            </div>
              <ZoomOnScroll><img className="w-full object-cover bg-cover lg:-mt-[100px] md:-mt-44 sm:-mt-24 -mt-32 h-[900px]" src={handPhone} alt="" /></ZoomOnScroll>
          </div>
          </Reveal>
          <Reveal>
            <div style={{ background: "radial-gradient(135.2% 84.9946% at 48.1033% 33.3333%, rgb(94, 15, 56) 0%, rgb(65, 10, 39) 100%)"}} className="rounded-[30px] font-nunitoSans py-10 px-6 overflow-hidden h-[750px]">
            <h1 className="text-white md:text-5xl text-3xl font-bold leading-[1.2em]">
              <span className="font-bold text-[#b49863]">Bank on USSD,</span>{" "}
              simply dial *647#
            </h1>
            <p className="text-[#fff3f8] text-xl leading-[30px] mt-5">
              No data, no issues bank with USSD *647#
            </p>
            <button
              type="button"
              className="bg-primaryyellow hover:bg-[#8B7C48]/90 text-lg text-white py-4 px-7 mt-5 rounded-[10px]"
            >
              Dial on mobile
            </button>
              <ZoomOnScroll>
                <div className="gap-4 flex mt-20">
              <div className="flex relative justify-center w-full">
                <div className="relative">
                  <img
                    className="w-[65px] h-[65px] absolute left-0"
                    src="https://framerusercontent.com/images/LcyrFPA26JWdNobi5ZaWYeuZgA.png"
                  />
                  <img
                    className="lg:w-[145px] w-[220px] h-[275px] mt-14"
                    src="https://framerusercontent.com/images/Q3Z59fcA1YlyPzIjt7ADmzYnAZ4.png?scale-down-to=512"
                  />
                </div>
                <img
                  className="w-[145px] h-[275px] md:-ml-4 -ml-10 z-40 mt-24"
                  src="https://framerusercontent.com/images/p9WiW5JMIQep3kcBIAHTOM6aa8g.png?scale-down-to=512"
                />
                <div className="relative mt-28">
                  <img
                    className="w-[55px] h-[55px] absolute -mt-8 right-0"
                    src="	https://framerusercontent.com/images/YPGmOKb8M6uMoz0bP9XXR91j23E.png"
                  />
                  <img
                    className="w-[145px] h-[275px] -ml-2 mt-8"
                    src="https://framerusercontent.com/images/UKjzIgRxSraxI4Qtnjw1OpDdjh4.png?scale-down-to=512"
                  />
                </div>
              </div>
            </div>
            </ZoomOnScroll>
          </div>
          </Reveal>
          <Reveal>
             <div className="z-40 relative rounded-[30px] py-10 px-6 h-[810px] overflow-hidden font-nunitoSans bg-[#6c1d45]/20 from-[rgb(94,15,56)] via-transparent to-[rgb(65,10,39)]">
            <h1 className="text-white md:text-5xl text-3xl font-bold leading-[1.2em]">
              <span className="font-bold text-[#b49863]">Signature Bank,</span>{" "}
              POS terminals
            </h1>
            <p className="text-[#fff3f8] text-xl leading-[30px] mt-5">
              Our Point-of-Sales terminals are available for all customers.
              Please visit the nearest Signature Bank branch or send a request.
            </p>
            <button
              type="button"
              className="bg-primaryyellow hover:bg-[#8B7C48]/90 text-lg mt-6 text-white py-4 px-7 rounded-[10px]"
            >
              Learn More
            </button>
              <div className="relative z-40">
                <ZoomOnScroll>
                <div className="gap-4 flex justify-center mt-14">
              <img
                className="lg:w-[70%] w-full"
                src="https://framerusercontent.com/images/47RYq01ACuY4sFSUp8mrRTbeoM0.png?scale-down-to=2048"
              />
            </div>
              </ZoomOnScroll>
              </div>
              <img
            className="absolute -bottom-[400px] w-[1000px] h-[1000px] opacity-50 rotate-90 -right-12 z-20"
            src="https://framerusercontent.com/images/yaKi2r9uBWv0fG5wicgNzHmYU.png?scale-down-to=2048"
            alt=""
          />
          </div>
         </Reveal>
          <Reveal>
            <div className="rounded-[30px] font-nunitoSans py-10 px-6 h-[810px] overflow-hidden bg-[#6c1d45]/20 from-[rgb(94,15,56)] via-transparent to-[rgb(65,10,39)]">
            <h1 className="text-white text-[48px] font-bold leading-[1.2em]">
              Sign up for{" "}
              <span className="font-bold text-[#b49863]">eNaira</span>
            </h1>
            <p className="text-[#fff3f8] text-xl mt-5 leading-[30px]">
              Say hello to eNaira, the new digital currency issued and regulated
              by Nigeria's Central Bank. It offers the same value as physical
              Naira and promises safe, fast, and efficient transfers and
              payments.
            </p>
            <div className="gap-4 flex mt-5">
                <a target="_blank" href="https://play.google.com/store/apps/details?id=ng.gov.cbn.speed.wallet.temp&pli=1"> <img src={googleLogo} alt="apple logo" /></a>
                <a target="_blank" href="https://apps.apple.com/us/app/enaira-speed-wallet/id1587292843"><img src={appleLogo} alt="apple logo" /></a>
            </div>
              <ZoomOnScroll>
                <div className="gap-4 flex justify-center lg:mt-24 mt-10">
              <img
                className="lg:w-[72%] w-full object-cover bg-cover bg-no-repeat"
                src="https://framerusercontent.com/images/7bvEdP86K1ntVnA6USBkG21iEE.png"
              />
            </div>
            </ZoomOnScroll>
          </div>
          </Reveal>
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-[#ba975a]"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-white w-[90%]"
          imgContainer="md:w-[40%]"
          textColor="text-white"
          title="Experience limitless banking services"
          description="Open a Signature Bank account in few steps"
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  );
};

export default DigitalBanking;
