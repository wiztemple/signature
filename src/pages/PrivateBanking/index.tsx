import CustomBanner from "../../components/CustomBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import Logo from "../../assets/logo.svg";
import MobileHeader from "../../components/MobileHeader";
import Banner from "../../components/Banner";
import { Reveal } from "../../utils/Reveal";

const PrivateBanking = () => {
  return (
    <div
      style={{
        background: "linear-gradient(rgb(18, 14, 16) 0%, rgb(18, 14, 16) 100%)",
      }}
    >
      <div className="">
        <Header
          bg="bg-[#1e191b]/70"
          textColor1="text-white"
          textColor2="text-white"
          logoUrl={Logo}
          primaryBtnClassName="bg-primaryyellow hover:bg-secondarybrown !py-3"
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
        <CustomBanner
          extraClass=""
          show={false}
          display="hidden"
          scaling=""
          heroBg="white"
          bannerWidth="md:w-[59%] sm:w-[80%] w-full"
          textWidth="lg:w-[90%]"
          top="top-[65%]"
          bg="bg-hex-5"
          color="white"
          subColor="white"
          src="https://framerusercontent.com/images/acVComOqWdUeZswrUgELJ3l26w.jpg"
          alt=""
          dropFilter="blur(15px)"
          lineargradient="linear-gradient(rgba(17, 14, 15, 0) 0%, rgb(17, 14, 15) 100%)"
          description="Experience Exclusivity, Privacy and Personalized Solutions"
          title1="Welcome to Private Banking"
        />
        <div
          style={{
            background:
              "linear-gradient(rgb(18, 14, 16) 0%, rgb(18, 14, 16) 100%)",
          }}
          className="text-black font-nunitoSans"
        >
          <div className="lg:w-[85%] w-[90%] mx-auto pb-28">
            <div className="flex lg:flex-row flex-col justify-between pt-28">
              <div className="text-[48px] lg:w-[45%] font-bold leading-[1.2em] text-white">
                Experience the epitome of luxury banking
              </div>
              <div className="lg:w-[25%] lg:mt-0 mt-4 text-uppergray text-lg">
                Exclusive and unparalleled access to a comprehensive suite of
                financial solutions
              </div>
            </div>
            <Reveal>
              <SectionCard
                extraClass="lg:w-[570px] md:w-[380px] w-full lg:mt-5 md:mt-12 sm:mt-3 mt-12"
                black="white"
                buttonBg="bg-primaryyellow"
                buttonColor="text-white"
                gray="text-secondarygray"
                src="https://framerusercontent.com/images/WFEuFpta6TOIBsSSS6C6PgAGHRs.jpg?scale-down-to=1024"
                cardTitle="Exclusive Customer Privileges"
                cardDescription="Enjoy exclusive privileges that encompass discretionary service, exclusive event invitations, networking opportunities and a host of other offerings meticulously designed to elevate your financial well-being."
                flexRow=""
                display="block"
              />
            </Reveal>
            <Reveal>
              <SectionCard
                extraClass="lg:w-[570px] md:w-[380px] w-full lg:mt-5 md:mt-12 sm:mt-3 mt-12"
                black="white"
                buttonBg="bg-primaryyellow"
                buttonColor="text-white"
                gray="text-secondarygray"
                src="https://framerusercontent.com/images/7cZwTFEV7Sxck9AaCyerMpA3EP8.jpg"
                cardTitle="Wealth Management Advisory"
                cardDescription="Our dedicated team of experienced wealth advisors will work closely with you to understand your financial objectives, risk appetite, and aspirations. With a deep understanding of global best practices, we will create a bespoke wealth management strategy that aligns with your goals and helps you preserve and grow your wealth."
                flexRow="flex-row-reverse"
                display="hidden"
              />
            </Reveal>
            <Reveal>
              <SectionCard
                extraClass="lg:w-[570px] md:w-[380px] w-full lg:mt-5 sm:mt-3 mt-12"
                black="white"
                buttonBg="bg-primaryyellow"
                buttonColor="text-white"
                gray="text-secondarygray"
                src="https://framerusercontent.com/images/AVRrGV5qinCaJoJhlahT4Od4Qg4.jpg"
                cardTitle="Cutting-Edge Technology"
                cardDescription="We offer a wide range of tailored financial solutions to meet your unique needs. Our team of experts leverage global network and expertise to identify and seize opportunities that align with your financial goals, ensuring you stay ahead in the dynamic world of wealth management."
                flexRow=""
                display="block"
              />
            </Reveal>
          </div>
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-[#b9975b]"
          buttonStyle="bg-dutyblack hover:bg-dutyblack/90 text-white"
          titleStyle="text-white w-[90%]"
          imgContainer=""
          textColor="text-uppergray"
          title="Open an account with us in a few simple steps."
          description="Open an account with us and enjoy the benefits of personalized banking services."
          buttonName="Open an Account"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer background="bg-gold" />
    </div>
  );
};
export default PrivateBanking;
