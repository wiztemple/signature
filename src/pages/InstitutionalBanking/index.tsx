import Banner from "../../components/Banner";
import Card from "../../components/Card";
import CustomBanner from "../../components/CustomBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import Logo from "../../assets/logo.svg";

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

const InstitutionalBanking = () => {
  return (
    <div className="bg-white">
      <Header
        bg="bg-[#1e191b]/70"
        textColor1="text-white"
        textColor2="text-white"
        logoUrl={Logo}
        showPrimaryBtnIcon={false}
        primaryBtnClassName="bg-transparent border-white !py-2.5 hover:bg-primaryyellow hover:border-primaryyellow border-white"
      />
      <CustomBanner
        display="block"
        scaling="px-4 pt-[68px]"
        heroBg="bg-secondarybrown"
        bannerWidth="w-[69%]"
        textWidth="w-[85%]"
        top="top-[61%]"
        bg="bg-hex-6"
        color="white"
        subColor="white"
        src="https://framerusercontent.com/images/tZyV26Dg1nYfbtN9bWqWDz57MQ.png"
        alt="Business banking with Signature bank"
        dropFilter="blur(15px)"
        lineargradient="linear-gradient(rgba(176, 93, 55, 0) 0%, rgb(176, 93, 55) 100%)"
        title1="Custom made financial"
        title2="solutions for large institutions"
        description=""
      />
      <div className="bg-white text-black">
        <div className="w-[85%] mx-auto">
          <div className="flex justify-between py-28">
            <div className="text-[40px] w-[45%] leading-[1.2em] font-bold text-[#101828] font-nunitoSans">
              Banking solutions that deliver growth and sustainability.
            </div>
            <div className="w-[340px] text-[#555d68] text-lg font-nunitoSans">
              With a commitment to excellence, we offer tailored solutions
              designed to meet the specific requirements of large institutions
              with diverse banking needs.
            </div>
          </div>
          <div className="grid grid-cols-3 grid-rows-1 gap-[30px] justify-center relative overflow-visible p-0 w-full pb-28">
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
      <div className="bg-[#fcf8fb] text-black py-20">
        <div className="w-[85%] mx-auto">
          <h1 className="text-[#0f1728] text-[48px] font-nunitoSans font-bold leading-[-0.96px] text-center">
            Built for the future, built for your progress.
          </h1>
          <p className="text-center text-2xl text-[#101828] mt-3 mb-20">
            We take pride in offering you a superior banking experience
          </p>
          <SectionCard
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="primarygray"
            src="https://framerusercontent.com/images/dwaQogkrt99Ybnxmpycv6sqPz8.jpg?scale-down-to=1024"
            cardTitle="Personalized Financial Solutions"
            cardDescription="At Signature Bank, we understand that every individual has unique financial goals and needs. Our personal banking services are tailored to empower your aspirations as we provide customized products and services that align with your preferences."
            flexRow=""
            display="hidden"
          />
          <SectionCard
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="primarygray"
            src="https://framerusercontent.com/images/ui1R9E3KgKbepwNqccyZ52D220M.jpg?scale-down-to=1024"
            cardTitle="Cutting-Edge Technology"
            cardDescription="We leverage the latest advancements in banking technology to enhance convenience and simplify your transactions. With our secure online and mobile banking platforms, you can access your accounts, make payments, transfer funds, and monitor your finances anytime, anywhere without fear of unwanted activities."
            flexRow="flex-row-reverse"
            display="hidden"
          />
          <SectionCard
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
export default InstitutionalBanking;
