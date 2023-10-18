import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import appleLogo from "../../assets/apple.svg";
import Logo from "../../assets/logo.svg";
import MobileHeader from "../../components/MobileHeader";
import { Reveal } from "../../utils/Reveal";
import handPhone from "../../assets/handPhone.png"
import ZoomOnScroll from "../../utils/ZoomOnScroll";

const DigitalBanking = () => {
  return (
    <div className="bg-hex-7">
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
      {/* hero section */}

      <div className="h-screen w-full lg:overflow-hidden font-nunitoSans">
        <div className="w-full mx-auto relative flex justify-center">
          <img
            className="absolute top-14 -right-8 w-full z-20"
            src="https://framerusercontent.com/images/yaKi2r9uBWv0fG5wicgNzHmYU.png?scale-down-to=2048"
            alt=""
          />
        </div>
        <div className="z-20 relative flex w-full justify-center h-full">
          <Reveal>
            <div className="lg:h-[670px] md:w-[90%] w-full h-screen z-20 top-36 relative">
              <img
            className="bg-cover object-cover image-auto"
            src="	https://framerusercontent.com/images/90iLC8eLJFKBsYO5b61ZtAyUlzw.png"
            alt="man"
          />
            </div>
          </Reveal>
        </div>
        <div
          className={`text-white z-40 absolute w-full h-auto flex mx-auto justify-center bottom-14`}
        >
          <div
            style={{ backdropFilter: "blur(15px)" }}
            className={`text-[60px] bg-[#67194130] rounded-[20px] p-[30px] lg:w-[60%] w-[70%]`}
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
              "linear-gradient(rgba(68, 11, 41, 0) 0%, rgb(68, 11, 41) 100%)",
          }}
          className="h-[450px] absolute bottom-0 z-30 left-0 w-full"
        />
      </div>
      {/*  */}
      <div className="w-[85%] mx-auto mt-10">
        {/*  */}
        <Reveal>
          <div className="bg-[#6c1d45]/20 w-full h-[550px] overflow-hidden flex flex-col items-center font-nunitoSans">
          <div>Bank in style</div>
          <div>with Signature Cards</div>
          <div>
            Get our safe and durable signature card for your business
            transactions.
          </div>
          <button
            type="button"
            className="bg-primaryyellow text-lg text-white py-4 px-7 mt-5 rounded-[10px]"
          >
            Learn More
          </button>
          <div className="w-full flex justify-center relative h-full">
            {/* signature cards */}
            <div className="w-[24%] rotate-60 rounded-[20px] absolute -bottom-5 border">
              {/* <img
                className="w-full h-[400px] object-fill bg-center"
                src="https://framerusercontent.com/images/YPez6dHwfFEyzqWU5wbuNGWLAs.png?scale-down-to=1024"
                alt=""
              /> */}
            </div>
          </div>
        </div>
        </Reveal>
        {/*  */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 mt-20">
          {/* frame1 */}
          <Reveal>
            <div className="rounded-[30px] font-nunitoSans py-10 px-6 h-[750px] overflow-hidden bg-[#6c1d45]/20 from-[rgb(94,15,56)] via-transparent to-[rgb(65,10,39)]">
            <h1 className="text-white text-[48px] font-bold leading-[1.2em]">
              <span className="font-bold text-[#b49863]">No constraints,</span>{" "}
              bank anywhere, anytime
            </h1>
            <p className="text-[#fff3f8] text-xl mt-5 leading-[30px]">
              Download our easy to use Mobile application and access financial
              services anywhere you go.{" "}
            </p>
            <div className="gap-4 flex mt-5">
              <img src={appleLogo} alt="apple logo" />
              <img src={appleLogo} alt="apple logo" />
              </div>
              <ZoomOnScroll><img className="w-full object-cover bg-cover -mt-[120px] h-[900px]" src={handPhone} alt="" /></ZoomOnScroll>
          </div>
          </Reveal>
          <Reveal>
            <div className="rounded-[30px] font-nunitoSans py-10 px-6 overflow-hidden h-[750px] bg-[#6c1d45]/20 from-[rgb(94,15,56)] via-transparent to-[rgb(65,10,39)]">
            <h1 className="text-white text-[48px] font-bold leading-[1.2em]">
              <span className="font-bold text-[#b49863]">Bank on USSD,</span>{" "}
              simply dial *647#
            </h1>
            <p className="text-[#fff3f8] text-xl leading-[30px] mt-5">
              No data, no issues bank with USSD *647#
            </p>
            <button
              type="button"
              className="bg-primaryyellow text-lg text-white py-4 px-7 mt-5 rounded-[10px]"
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
                    className="w-[145px] h-[275px] mt-14"
                    src="https://framerusercontent.com/images/Q3Z59fcA1YlyPzIjt7ADmzYnAZ4.png?scale-down-to=512"
                  />
                </div>
                <img
                  className="w-[145px] h-[275px] -ml-4 z-40 mt-24"
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
             <div className=" rounded-[30px] py-10 px-6 h-[810px] overflow-hidden font-nunitoSans bg-[#6c1d45]/20 from-[rgb(94,15,56)] via-transparent to-[rgb(65,10,39)]">
            <h1 className="text-white text-[48px] font-bold leading-[1.2em]">
              <span className="font-bold text-[#b49863]">Signature Bank,</span>{" "}
              POS terminals
            </h1>
            <p className="text-[#fff3f8] text-xl leading-[30px] mt-5">
              Our Point-of-Sales terminals are available for all customers.
              Please visit the nearest Signature Bank branch or send a request.
            </p>
            <button
              type="button"
              className="bg-primaryyellow text-lg mt-6 text-white py-4 px-7 rounded-[10px]"
            >
              Learn More
            </button>
              <ZoomOnScroll>
                <div className="gap-4 flex justify-center mt-14">
              <img
                className="w-[70%]"
                src="https://framerusercontent.com/images/47RYq01ACuY4sFSUp8mrRTbeoM0.png?scale-down-to=2048"
              />
            </div>
            </ZoomOnScroll>
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
              <img src={appleLogo} alt="apple logo" />
              <img src={appleLogo} alt="apple logo" />
            </div>
              <ZoomOnScroll>
                <div className="gap-4 flex justify-center mt-24">
              <img
                className="w-[72%] object-cover bg-cover bg-no-repeat"
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
