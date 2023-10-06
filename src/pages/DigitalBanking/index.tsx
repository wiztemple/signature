import Banner from "../../components/Banner";
import CustomBanner from "../../components/CustomBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import appleLogo from "../../assets/apple.svg";

const DigitalBanking = () => {
  // https://framerusercontent.com/images/yaKi2r9uBWv0fG5wicgNzHmYU.png?scale-down-to=2048
  return (
    <div className="bg-hex-7">
      <Header />
      <Header />
      <CustomBanner
        display="hidden"
        scaling="px-4 pt-[68px] w-[40%]"
        heroBg="bg-[#6c1d45]/60"
        bannerWidth="w-[69%]"
        textWidth="w-[85%]"
        top="top-[61%]"
        bg="bg-hex-7"
        color="white"
        subColor="white"
        src=""
        alt="Business banking with Signature bank"
        dropFilter="blur(15px)"
        lineargradient="linear-gradient(rgba(68, 11, 41, 0) 0%, rgb(68, 11, 41) 100%)"
        title1="Limitless Banking"
        title2=""
        description="Do your transactions anytime, anywhere you want."
      />
      <div className="w-[85%] mx-auto">
        <div className="grid grid-cols-2 gap-10">
        {/* frame1 */}
        <div className=" rounded-[30px] py-10 px-6 h-[750px] overflow-hidden bg-[#6c1d45]/20 from-[rgb(94,15,56)] via-transparent to-[rgb(65,10,39)]">
          <h1 className="text-white text-[48px] font-bold leading-[1.2em] font-nunito"><span className="font-bold text-[#b49863]">No constraints,</span> bank anywhere, anytime</h1>
          <p className="text-[#fff3f8] text-xl mt-5 font-nunito leading-[30px]">Download our easy to use Mobile application and access financial services anywhere you go. </p>
          <div className="gap-4 flex mt-5">
            <img src={appleLogo} alt="apple logo" />
            <img src={appleLogo} alt="apple logo" />
          </div>
        </div>
        <div className=" rounded-[30px] py-10 px-6 overflow-hidden h-[750px] bg-[#6c1d45]/20 from-[rgb(94,15,56)] via-transparent to-[rgb(65,10,39)]">
          <h1 className="text-white text-[48px] font-bold leading-[1.2em] font-nunito"><span className="font-bold text-[#b49863]">Bank on USSD,</span> simply dial *647#</h1>
            <p className="text-[#fff3f8] text-xl font-nunito leading-[30px] mt-5">No data, no issues bank with USSD *647#</p>
            <button type="button" className="bg-primaryyellow text-lg text-white py-4 px-7 mt-5 rounded-[10px]">Dial on mobile</button>
          <div className="gap-4 flex mt-20">
              <div className="flex relative justify-center w-full">
                <div className="relative">
                <img className="w-[65px] h-[65px] absolute left-0" src="https://framerusercontent.com/images/LcyrFPA26JWdNobi5ZaWYeuZgA.png" />
                <img className="w-[145px] h-[275px] mt-14" src="https://framerusercontent.com/images/Q3Z59fcA1YlyPzIjt7ADmzYnAZ4.png?scale-down-to=512" />
                </div>
                <img className="w-[145px] h-[275px] -ml-4 z-40 mt-24" src="https://framerusercontent.com/images/p9WiW5JMIQep3kcBIAHTOM6aa8g.png?scale-down-to=512" />
                <div className="relative mt-28">
                  <img className="w-[55px] h-[55px] absolute -mt-8 right-0" src="	https://framerusercontent.com/images/YPGmOKb8M6uMoz0bP9XXR91j23E.png" />
                   <img className="w-[145px] h-[275px] -ml-2 mt-8" src="https://framerusercontent.com/images/UKjzIgRxSraxI4Qtnjw1OpDdjh4.png?scale-down-to=512" />
                </div>
            </div>
          </div>
        </div>
        <div className=" rounded-[30px] py-10 px-6 h-[810px] overflow-hidden bg-[#6c1d45]/20 from-[rgb(94,15,56)] via-transparent to-[rgb(65,10,39)]">
          <h1 className="text-white text-[48px] font-bold leading-[1.2em] font-nunito"><span className="font-bold text-[#b49863]">Signature Bank,</span> POS terminals</h1>
            <p className="text-[#fff3f8] text-xl font-nunito leading-[30px] mt-5">Our Point-of-Sales terminals are available  for all customers. Please visit the nearest Signature Bank branch or send a request.</p>
            <button type="button" className="bg-primaryyellow text-lg mt-6 text-white py-4 px-7 rounded-[10px]">Learn More</button>
          <div className="gap-4 flex justify-center mt-14">
           <img className="w-[70%]" src="https://framerusercontent.com/images/47RYq01ACuY4sFSUp8mrRTbeoM0.png?scale-down-to=2048" />
          </div>
        </div>
        <div className=" rounded-[30px] py-10 px-6 h-[810px] overflow-hidden bg-[#6c1d45]/20 from-[rgb(94,15,56)] via-transparent to-[rgb(65,10,39)]">
          <h1 className="text-white text-[48px] font-bold leading-[1.2em] font-nunito">Sign up for <span className="font-bold text-[#b49863]">eNaira</span></h1>
            <p className="text-[#fff3f8] text-xl mt-5 font-nunito leading-[30px]">Say hello to eNaira, the new digital currency issued and regulated by Nigeria's Central Bank. It offers the same value as physical Naira and promises safe, fast, and efficient transfers and payments.</p>
            <div className="gap-4 flex mt-5">
            <img src={appleLogo} alt="apple logo" />
            <img src={appleLogo} alt="apple logo" />
          </div>
          <div className="gap-4 flex justify-center mt-14">
            <img className="w-[70%] object-cover bg-cover bg-no-repeat" src="https://framerusercontent.com/images/7bvEdP86K1ntVnA6USBkG21iEE.png" />
          </div>
        </div>
        </div>
      </div>
      <div className="w-[85%] mx-auto py-14">
        <Banner
          bannerBg="bg-[#ba975a]"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-white w-[90%]"
          imgContainer="w-[40%]"
          textColor="text-white"
          title="Experience limitless banking services"
          description="Open an account with us in a few simple steps."
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  )
}
export default DigitalBanking;
