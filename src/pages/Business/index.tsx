import Banner from "../../components/Banner";
import Card from "../../components/Card";
import CustomBanner from "../../components/CustomBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import Logo from "../../assets/logo.svg";
import MobileHeader from "../../components/MobileHeader";
import { Reveal } from "../../utils/Reveal";

const cards: {
  url: string;
  title: string;
  description: string;
  buttonName: string;
}[] = [
  {
    url: "https://framerusercontent.com/images/hFULY64HSxNlieXQDxDF2XD13AA.png",
    title: "Signature Savings Account",
    description:
      "Start building your savings with our attractive interest rates and flexible deposit and withdrawal options.",
    buttonName: "Coming Soon",
  },
  {
    url: "https://framerusercontent.com/images/xUakLXfAp9hDiKFMhJL2sbfLhmc.png",
    title: "Signature Current Account",
    description:
      "Manage your day-to-day transactions with ease and enjoy access to a range of banking services.",
    buttonName: "Coming Soon",
  },
  {
    url: "https://framerusercontent.com/images/qXGYkj1ONzvdceSrwBEKAownPAU.png",
    title: "Grow With Personal Loans",
    description:
      "Get financial support for your dreams and aspirations with our competitive personal loan options.",
    buttonName: "Coming Soon",
  },
];

const Business = () => {
  return (
    <div className="bg-white">
      <Header
        bg="bg-[#1e191b]/70"
        textColor1="text-white"
        textColor2="text-white"
        logoUrl={Logo}
        primaryBtnClassName="bg-primaryyellow hover:bg-secondarybrown"
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
        display="hidden"
        scaling=""
        heroBg="white"
        bannerWidth="lg:w-[56%] w-[70%]"
        textWidth="lg:w-[94%]"
        top="lg:top-[57.5%] md:bottom-28 bottom-16"
        bg="bg-hex-6"
        color="white"
        subColor="white"
        src="https://framerusercontent.com/images/l0OIJOKiKgQizZkh0k1eNvADI.jpg"
        alt="Business banking with Signature bank"
        dropFilter="blur(15px)"
        lineargradient="linear-gradient(rgba(176, 93, 55, 0) 0%, rgb(176, 93, 55) 100%)"
        title1="Accelerate your business growth"
        title2=""
        description="Take advantage of our innovative solutions no matter the scale of your business."
      />
      <div className="bg-white text-black font-nunitoSans">
        <div className="w-[85%] mx-auto">
          <div className="flex lg:flex-row flex-col justify-between lg:py-28 py-10">
            <div className="lg:text-[40px] text-[30px] lg:w-[45%] leading-[1.2em] font-bold text-[#101828]">
              Banking services designed to grow your business
            </div>
            <div className="lg:w-[340px] text-[#555d68] lg:mt-0 mt-4 text-lg">
              Empowering you with the tools to drive your business forward and
              achieve your goals.
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-1 gap-[30px] justify-center relative overflow-visible p-0 w-full pb-10 lg:pb-28">
            {cards.map((card, index) => (
              <Card
                key={index}
                bg="bg-cardbadge"
                buttonBg="bg-primaryblown"
                src={card.url}
                cardTitle={card.title}
                cardDescription={card.description}
                buttonName={card.buttonName}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#fcf8fb] text-black lg:py-20 py-5">
        <div className="w-[85%] mx-auto font-nunitoSans">
          <Reveal>
            <h1 className="text-[#0f1728] lg:text-[48px] w-[90%] mx-auto text-[30px] font-bold leading-[1.2em] text-center">
           Access simple business solutions that will certainly put your business ahead.
          </h1>
          {/* <p className="text-center lg:block hidden text-2xl text-[#101828] mt-3 mb-20">
            We take pride in offering you a superior banking experience
          </p> */}
          </Reveal>
          <Reveal>
            <SectionCard
          extraClass="lg:w-[570px] md:w-[350px] w-full md:mt-12 mt-6" 
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="primarygray"
            src="https://framerusercontent.com/images/f99FLM5uoPd4supb9MePBSqcbCA.jpg?scale-down-to=1024"
            cardTitle="Comprehensive Business Banking Solutions"
            cardDescription="We offer a comprehensive suite of banking products and services tailored to your business requirements. From our Signature Corporate Current Account designed to cater to the unique needs of corporates and entities, to our business loan options that provide flexible financing solutions."
            flexRow=""
            display="hidden"
          />
          </Reveal>
          <Reveal>
            <SectionCard
          extraClass="lg:w-[570px] md:w-[350px] w-full mt-3"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="primarygray"
            src="https://framerusercontent.com/images/8Q2HE3imSshUvbjUU1t2SrP6nA.jpg?scale-down-to=1024"
            cardTitle="Powered by Tech"
            cardDescription="With our advanced online banking platform and secure mobile banking app, you can conveniently manage your accounts, initiate transactions, and access comprehensive financial insights anytime, anywhere."
            flexRow="flex-row-reverse"
            display="hidden"
          />
          </Reveal>
          {/* <Reveal>
            <SectionCard
          extraClass="lg:w-[570px] md:w-[350px] w-full"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="primarygray"
            src="https://framerusercontent.com/images/lBUv4SG2dcEfqLW8gB19ubQxg.jpg?scale-down-to=1024"
            cardTitle="Commitment to Security and Privacy"
            cardDescription="Safeguarding your financial information is our top priority. We adhere to the highest security standards, implementing robust security protocols to protect your personal and financial data."
            flexRow=""
            display="hidden"
          />
          </Reveal> */}
        </div>
      </div>
      <div className="w-[85%] mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-secondarybrown text-white"
          titleStyle="text-alternate w-[90%]"
          imgContainer=""
          textColor="text-primarygray"
          title="Enter a whole new world of business advancement"
          description="Open an account with us in a few simple steps."
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  );
};
export default Business;
