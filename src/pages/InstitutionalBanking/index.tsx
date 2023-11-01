import Banner from "../../components/Banner";
import Card from "../../components/Card";
import CustomBanner from "../../components/CustomBanner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import Logo from "../../assets/logo.svg";
import MobileHeader from "../../components/MobileHeader";
import ZoomOnScroll from "../../utils/ZoomOnScroll";

const cards: {
  url: string;
  title: string;
  description: string;
  buttonName: string;
  link: string
}[] = [
  {
    url: "https://framerusercontent.com/images/e7XY9f4WRRlTWnCt3BDX0wjbCY.png",
    title: "Signature Corporate Account",
    link: '/accounts',
    description:
      "Specifically designed to cater to the banking needs of large institutions like yours by providing comprehensive solutions to support your financial operations efficiently.",
    buttonName: "Open an Account",
  },
  {
    url: "https://framerusercontent.com/images/b4ZgmA0vEA334owkTFdKKGjq18.png",
    title: "Public Sector Institution Banking",
    link: '/contact',
    description:
      "Specialized banking solutions tailored for government agencies and ministries. Our services cater to your unique requirements, for seamless collections, payments, and financial management.",
    buttonName: "Contact us",
  },
  {
    url: "https://framerusercontent.com/images/O9K27sirtHvkK7RauE7iXbZTwcA.png",
    title: "Non-Government Institution Banking",
    link: '/contact',
    description:
      "Customized solutions designed to support the financial needs of NGOs, foundations, educational institutions, religious organizations, and other non-profit entities.",
    buttonName: "Contact us",
  },
];

const InstitutionalBanking = () => {
  return (
    <div className="bg-white font-nunitoSans">
      <Header
        gradient="linear-gradient(to bottom, #B05C37 -60%, transparent 100%)"
        bg="bg-[#1e191b]/70"
        textColor1="text-white"
        textColor2="text-white"
        logoUrl={Logo}
        showPrimaryBtnIcon={false}
        primaryBtnClassName="bg-transparent border-white !py-2.5 hover:bg-primaryyellow hover:border-primaryyellow border-white"
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
        extraClass="xl:h-48 lg:h-auto"
        show={true}
        display="block"
        scaling="lg:px-4 pt-[68px]"
        heroBg="bg-secondarybrown"
        bannerWidth="md:w-[69%] sm:w-[80%] w-full"
        textWidth="w-[85%]"
        top="lg:top-[61%] md:bottom-28 bottom-16"
        bg="bg-hex-6"
        color="white"
        subColor="white"
        src="https://framerusercontent.com/images/tZyV26Dg1nYfbtN9bWqWDz57MQ.png"
        alt="Business banking with Signature bank"
        dropFilter="blur(15px)"
        lineargradient="linear-gradient(rgba(176, 93, 55, 0) 0%, rgb(176, 93, 55) 100%)"
        title1="Custom made financial solutions for large institutions"
        description=""
      />
      <div className="bg-white text-black font-nunitoSans">
        <div className="w-[85%] mx-auto">
          <div className="flex lg:flex-row flex-col justify-between lg:py-28 py-10">
            <div className="lg:text-[40px] text-[30px] lg:w-[45%] leading-[1.2em] font-bold text-[#101828]">
              Banking solutions that deliver growth and sustainability.
            </div>
            <div className="lg:w-[340px] text-[#555d68] text-lg lg:mt-0 mt-4">
              With a commitment to excellence, we offer tailored solutions
              designed to meet the specific requirements of large institutions
              with diverse banking needs.
            </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-rows-1 gap-[25px] justify-center relative overflow-visible p-0 w-full pb-28">
            {cards.map((card, index) => (
              <Card
                 extraClass="bg-shadowbeige"
                link={card.link}
                key={index}
                bg="bg-cardbadge h-auto"
                buttonBg={`bg-[#b05c37] hover:bg-[#7E3A1F] mt-14`}
                src={card.url}
                cardTitle={card.title}
                cardDescription={card.description}
                buttonName={card.buttonName}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#fcf8fb] text-black lg:py-20 py-10">
        <div className="w-[85%] mx-auto">
          <h1 className="text-[#0f1728] w-[90%] mx-auto lg:text-[48px] text-[30px] font-bold leading-[1.1em] text-center">
            Access simple business solutions that will certainly put your business ahead.
          </h1>
          <ZoomOnScroll>
            <SectionCard
          extraClass="lg:w-[570px] md:w-[350px] w-full lg:mt-3 mt-10"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="text-primarygray"
            src="	https://framerusercontent.com/images/PsKJOy7r7jgFvDi5Du5WYrjh24.jpg"
            cardTitle="Access to specialized financial services"
            cardDescription="Our institutional banking solutions are designed to provide businesses with the financial resources they need to grow and succeed. From loans and trade finance to cash management services, our range of solutions are customized to meet your specific needs."
            flexRow=""
            display="hidden"
          />
          </ZoomOnScroll>
          <ZoomOnScroll>
            <SectionCard
          extraClass="lg:w-[570px] md:w-[350px] w-full lg:mt-3 mt-10"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="text-primarygray"
            src="https://framerusercontent.com/images/nNqmAzxzVST9lEPTiym3JzqrEU.jpg?scale-down-to=1024"
            cardTitle="Efficient Collaboration and Partnership"
            cardDescription="We believe in building strong partnerships with our institutional clients by embedding our team with theirs. Our relationship managers work closely with you, gaining a deep understanding of your needs and providing customized solutions critical to business growth."
            flexRow="flex-row-reverse"
            display="hidden"
          />
          </ZoomOnScroll>
          <ZoomOnScroll>
            <SectionCard
          extraClass="lg:w-[570px] md:w-[350px] w-full mt-3"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="text-primarygray"
            src="https://framerusercontent.com/images/I2pBKyzhzxcK4B0Kla7xvJqxrr8.jpg?scale-down-to=1024"
            cardTitle="Dedicated Support"
            cardDescription="We understand that your business needs reliable and responsive round the clock support. Hence, our dedicated customer service team is available to assist you with any inquiries or concerns, ensuring that your banking experience is seamless and hassle-free."
            flexRow=""
            display="hidden"
          />
          </ZoomOnScroll>
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
          buttonName="Open an Account"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  );
};
export default InstitutionalBanking;
