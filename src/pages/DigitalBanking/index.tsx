import Banner from "../../components/Banner";
import CustomBanner from "../../components/CustomBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

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
