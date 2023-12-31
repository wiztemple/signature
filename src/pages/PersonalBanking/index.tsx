import Banner from "../../components/Banner";
import Card from "../../components/Card";
import CustomBanner from "../../components/CustomBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import SectionCard from "../../components/SectionCard";
import { Reveal } from "../../utils/Reveal";

const cards: { url: string, title: string, description: string, buttonName: string, link: string }[] = [
  {
    url: "https://framerusercontent.com/images/hFULY64HSxNlieXQDxDF2XD13AA.png",
    link: "/accounts",
    title: "Signature Savings Account",
    description: "Start building your savings with our attractive interest rates and flexible deposit and withdrawal options.",
    buttonName: "Open an Account"
  },
  {
    url: "https://framerusercontent.com/images/xUakLXfAp9hDiKFMhJL2sbfLhmc.png",
    link: "/accounts",
    title: "Signature Current Account",
    description: "Manage your day-to-day transactions with ease and enjoy access to a range of banking services.",
    buttonName: "Open an Account"
  },
  {
    url: "https://framerusercontent.com/images/qXGYkj1ONzvdceSrwBEKAownPAU.png",
    link: "",
    title: "Grow With Personal Loans",
    description: "Get financial support for your dreams and aspirations with our competitive personal loan options.",
    buttonName: "Coming Soon"
  },
  {
    url: "https://framerusercontent.com/images/NeWuUuzZ3MDTHXELs9JrOZnxWc8.png",
    link: "/cards",
    title: "Signature Bank Cards",
    description: "Enjoy seamless transactions and exclusive perks with our range of personalized debit and credit cards.",
    buttonName: "Learn More"
  },
  {
    url: "https://framerusercontent.com/images/CFfaM23YU7Zm84gfR4YEZezntYM.png",
    link: "/signature-mobile-app",
    title: "Signature Mobile App",
    description: "Bank on the go, access your accounts anytime, anywhere with our user-friendly and secure mobile app.",
    buttonName: "Learn More"
  },
];

const PersonalBanking = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-2.5" bg="bg-white"
      />
      {/* Custom Banner */}
      <CustomBanner
        extraClass="h-[260px]"
        show={false}
        display="hidden"
        scaling=""
        heroBg="white"
        bannerWidth="lg:w-[62%] sm:w-[80%] w-full"
        textWidth="lg:w-[85%]"
        top="lg:top-[57%] md:bottom-28 bottom-16"
        bg="bg-hex-4"
        color="hex-2"
        subColor="alternate"
        src="https://framerusercontent.com/images/6ccjmgnwDI1sKpaGyre3Smc0z4Y.jpg"
        alt="Lady using signature bank personal banking"
        dropFilter="blur(15px)"
        lineargradient="linear-gradient(180deg,rgba(249,245,248,0) 0%,#F9F5F8 100%)"
        title1={<span>Experience <br /> Transformational Banking</span>}
        description="Attain new financial heights with our personalised banking solutions"
      />
      {/* Cards */}
      <div className="bg-white text-black font-nunitoSans">
        <div className="w-[85%] mx-auto">
          <div className="md:flex justify-between lg:py-28 py-16">
            <div className="lg:text-[40px] text-[28px] font-bold text-[#101828]">Customised just for you</div>
            <div className="w-[340px] text-[#555d68] text-lg">Experience convenient and innovative banking services designed to power your dreams.</div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 lg:grid-rows-2 gap-[30px] justify-center relative overflow-visible p-0 w-full lg:pb-28 pb-10">
            {cards.map((card, index) => (
              <Card
                extraClass="bg-shadowpink"
                link={card.link}
                key={index}
                bg="bg-cardbg/90"
                buttonBg="bg-hex-2 mt-12 hover:bg-hex-1"
                src={card.url}
                cardTitle={card.title}
                cardDescription={card.description}
                buttonName={card.buttonName}
              />
            ))}
          </div>
        </div>
      </div>
      {/* sectionCard */}
      <div className="bg-[#fcf8fb] text-black lg:py-20 py-10 font-nunitoSans">
        <div className="lg:w-[85%] w-[90%] mx-auto">
          <Reveal><h1 className="text-[#0f1728] lg:text-[48px] text-[30px] font-bold lg:leading-[-0.96px] text-center font-nunitoSans">Built for the future, built for your progress.</h1></Reveal>
          <Reveal><p className="text-center text-2xl text-[#101828] mt-3 lg:mb-20 mb-10 font-nunitoSans">We take pride in offering you a superior banking experience</p></Reveal>
            <SectionCard
          extraClass="lg:w-[550px] md:w-[350px] w-full lg:mt-5 sm:mt-5 mt-12"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="text-primarygray"
            src="https://framerusercontent.com/images/dwaQogkrt99Ybnxmpycv6sqPz8.jpg?scale-down-to=1024"
            cardTitle="Personalized Financial Solutions"
            cardDescription="At Signature Bank, we understand that every individual has unique financial goals and needs. Our personal banking services are tailored to empower your aspirations as we provide customized products and services that align with your preferences."
            flexRow=""
            display="hidden"
          />
            <SectionCard
          extraClass="lg:w-[570px] md:w-[350px] w-full lg:mt-5 sm:mt-5 mt-12"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="text-primarygray"
            src="https://framerusercontent.com/images/ui1R9E3KgKbepwNqccyZ52D220M.jpg?scale-down-to=1024"
            cardTitle="Cutting-Edge Technology"
            cardDescription="We leverage the latest advancements in banking technology to enhance convenience and simplify your transactions. With our secure online and mobile banking platforms, you can access your accounts, make payments, transfer funds, and monitor your finances anytime, anywhere without fear of unwanted activities."
            flexRow="flex-row-reverse"
            display="hidden"
          />
            <SectionCard
          extraClass="lg:w-[570px] md:w-[350px] w-full lg:mt-5 mt-12"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="text-primarygray"
            src="https://framerusercontent.com/images/lBUv4SG2dcEfqLW8gB19ubQxg.jpg?scale-down-to=1024"
            cardTitle="Commitment to Security and Privacy"
            cardDescription="Safeguarding your financial information is our top priority. We adhere to the highest security standards, implementing robust security protocols to protect your personal and financial data."
            flexRow=""
            display="hidden"
          />
        </div>
      </div>
      {/* banner */}
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white hover:bg-hex-1"
          titleStyle="text-alternate w-[90%]"
          imgContainer=""
          textColor="text-primarygray"
          title="Open an account with us in a few simple steps."
          description="Open an account with us and enjoy the benefits of personalized banking services."
          buttonName="Open an Account"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default PersonalBanking;
