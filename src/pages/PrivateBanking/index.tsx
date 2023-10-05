import CustomBanner from "../../components/CustomBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";

const PrivateBanking = () => {
  return (
    <div>
      <Header />
      <CustomBanner
        display="hidden"
        scaling=""
        heroBg="white"
        bannerWidth="w-[59%]"
        textWidth="w-[70%]"
        top="top-[65%]"
        bg="bg-hex-5"
        color="white"
        subColor="white"
        src="https://framerusercontent.com/images/acVComOqWdUeZswrUgELJ3l26w.jpg"
        alt=""
        dropFilter="blur(15px)"
        lineargradient="linear-gradient(rgba(17, 14, 15, 0) 0%, rgb(17, 14, 15) 100%)"
        description="Experience Exclusivity, Privacy and Personalized Solutions"
        title1="Welcome to Private"
        title2="Banking"
      />
      {/* SectionCard */}
      <div style={{background: "linear-gradient(rgb(18, 14, 16) 0%, rgb(18, 14, 16) 100%)"}} className="text-black">
        <div className="w-[85%] mx-auto pb-28">
          <div className="flex justify-between pt-28">
            <div className="text-[48px] w-[45%] font-bold leading-[1.2em] text-white font-nunito">Experience the epitome of luxury banking</div>
            <div className="w-[25%] text-uppergray text-lg font-nunito">Exclusive and unparalleled access to a comprehensive suite of financial solutions</div>
          </div>
          <SectionCard
            black="white"
             buttonBg="bg-primaryyellow"
          buttonColor="text-white"
            gray="text-secondarygray"
            src="	https://framerusercontent.com/images/WFEuFpta6TOIBsSSS6C6PgAGHRs.jpg?scale-down-to=1024"
            cardTitle="Exclusive Customer Privileges"
            cardDescription="Enjoy exclusive privileges that encompass discretionary service, exclusive event invitations, networking opportunities and a host of other offerings meticulously designed to elevate your financial well-being."
            flexRow=""
            display="block"
          />
          <SectionCard
            black="white"
             buttonBg="bg-primaryyellow"
            buttonColor="text-white"
            gray="text-secondarygray"
            src="https://framerusercontent.com/images/7cZwTFEV7Sxck9AaCyerMpA3EP8.jpg"
            cardTitle="Wealth Management Advisory"
            cardDescription="Our dedicated team of experienced wealth advisors will work closely with you to understand your financial objectives, risk appetite, and aspirations. With a deep understanding of global best practices, we will create a bespoke wealth management strategy that aligns with your goals and helps you preserve and grow your wealth."
            flexRow="flex-row-reverse"
            display="block"
          />
          <SectionCard
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
        </div>
        <Footer background="bg-gold" />
      </div>
    </div>
  )
}
export default PrivateBanking;
