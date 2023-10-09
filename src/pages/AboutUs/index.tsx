import { useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";

const cores: { url: string, title: string }[] = [
  { url: 'https://framerusercontent.com/images/kdWsYkM6W1ZYYue2sN2HV0eZrM.png', title: 'Professionalism' },
  { url: 'https://framerusercontent.com/images/08l356m0NnV0oaxhH7WmxRuqk.png', title: 'Audacity' },
  { url: 'https://framerusercontent.com/images/tuKO3HicS4R6iPXfgGFr9tPBTc.png', title: 'Creativity' },
  { url: '	https://framerusercontent.com/images/Z4NOytugSYGsrckr0AYs8OjFA0.png', title: 'Trust' },
  { url: 'https://framerusercontent.com/images/NWrEQPq8NCfSfgvCLUfwRybYxac.png', title: 'Service Excellence' }
];

const boardOfDirectors: { url: string, name: string, title: string, alt: string }[] = [
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Dr. Mutiu Sunmonu, CON', alt: 'Dr. Mutiu Sunmonu, CON', title: 'Chairman' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Dr. Mutiu Sunmonu, CON', alt: 'Dr. Mutiu Sunmonu, CON', title: 'Chairman' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Dr. Mutiu Sunmonu, CON', alt: 'Dr. Mutiu Sunmonu, CON', title: 'Chairman' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Dr. Mutiu Sunmonu, CON', alt: 'Dr. Mutiu Sunmonu, CON', title: 'Chairman' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Dr. Mutiu Sunmonu, CON', alt: 'Dr. Mutiu Sunmonu, CON', title: 'Chairman' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Dr. Mutiu Sunmonu, CON', alt: 'Dr. Mutiu Sunmonu, CON', title: 'Chairman' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Dr. Mutiu Sunmonu, CON', alt: 'Dr. Mutiu Sunmonu, CON', title: 'Chairman' },
];

const boardOfManagers: { url: string, name: string, title: string, alt: string }[] = [
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Mr. Alfred Temile', alt: 'Mr. Alfred Temile', title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Mr. Alfred Temile', alt: 'Mr. Alfred Temile', title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Mr. Alfred Temile', alt: 'Mr. Alfred Temile', title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Mr. Alfred Temile', alt: 'Mr. Alfred Temile', title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Mr. Alfred Temile', alt: 'Mr. Alfred Temile', title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Mr. Alfred Temile', alt: 'Mr. Alfred Temile', title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Mr. Alfred Temile', alt: 'Mr. Alfred Temile', title: 'Non-Executive Director' },
];

const AboutUs = () => {

  const [activeTab, setActiveTab] = useState<string | undefined>("directors");
const toggleTab = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = event.currentTarget.dataset;
    setActiveTab(value);
};
  
  return (
    <div className="bg-white">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <div className="h-screen bg-main-7">
        <div className="w-[50%] mx-auto pt-44">
          <h1 className="text-[64px] text-black leading-[1.2em] font-nunito text-center font-bold">Built on trust, service and innovation</h1>
          <p className="text-lg text-hex-11 font-nunito text-center px-10 mt-5">We're not just a bank, we're a tech-driven financial institution that's constantly pushing the boundaries to bring you the best possible customer experience.</p>
        </div>
        <div className="h-[257px] relative w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent z-50 via-main-7 text-black to-transparent">
            <div className="flex">
              <div className="relative w-[180px] h-[203px]">
                <svg className="absolute z-40" width="180" height="203" viewBox="0 0 180 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M175 119.5V128C175 166.66 143.66 198 105 198H75C36.34 198 5 166.66 5 128V119.5M175 83.5V75C175 36.34 143.66 5 105 5H75C36.34 5 5 36.34 5 75V83.5" stroke="#6C1D45" stroke-width="10" stroke-miterlimit="10" stroke-linecap="round" />
                </svg>
                <img className="rounded-[60px] left-5 top-[22px] absolute w-[140px] h-[160px] bg-cover object-cover" src="https://framerusercontent.com/images/WFEuFpta6TOIBsSSS6C6PgAGHRs.jpg?scale-down-to=1024" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-bannerbg">
        <div className="w-[80%] mx-auto py-28">
          <div className="flex items-center justify-between">
            <div className="w-full">
            <h2 className="text-primaryblack text-[36px] font-bold font-nunito">Welcome to Signature Bank</h2>
            <p className="text-primarygray font-nunito text-lg leading-[28px] w-[75%] mt-4">Signature Bank launched in 2022 to serve discerning customers who want to experience real banking. With specially designed financial products and services, we leverage digital solutions to provide you with tailor made solutions that suit your needs.</p>
            <p className="text-primarygray font-nunito text-lg leading-[28px] w-[75%] mt-5">We are committed to helping you achieve your goals through exemplary financial services and products that will empower you and your business.</p>
            <p className="text-primarygray font-nunito text-lg leading-[28px] w-[75%] mt-6">We want to be part of your journey by providing you with excellent customer service with access to innovative financial solutions.</p>
          </div>
          <div className="">
            <img className="rounded-[140px] h-[471px] bg-cover object-cover" src="https://framerusercontent.com/images/wL0MMQ2zOiT9PCn19u35JFkZD8.jpg" alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className="bg-main-9 pt-28">
        <div className="mx-auto w-[73%] border-b-2 border-main-2/10">
          <h1 className="text-[48px] text-center font-bold text-primaryblack tracking-[-0.96px]">Our Core Values</h1>
          <p className="text-lg leading-[28px] text-center font-nunito text-primarygray mx-auto w-[55%] mt-4">Our values of professionalism, audacity, creativity, trust and service excellence are intrinsic to how we operate and how we serve our customers to deliver exemplary financial services.</p>
          <div className="grid grid-cols-5 gap-[10px] grid-rows-1 mt-10">
            {cores.map((core, index:number) => (
              <div key={index} className="bg-hex-12 flex flex-col gap-5 h-[230px] justify-center items-center rounded-[20px]">
              <img className="w-[72px]" src={core.url} alt="" />
                <h4 className="text-2xl text-primaryblack text-center font-bold">{core.title}</h4>
            </div>
            ))}
          </div>
          <div className="pb-14">
            <SectionCard
              extraClass="w-[80%]"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="text-primarygray"
            src="https://framerusercontent.com/images/6mQgoUfGYl1B1SZ3Tn6S7slYWM.jpg"
            cardTitle="Our Vision"
            cardDescription="To be the leader in providing innovative financial solutions while creating exceptional customer experience in our chosen market."
            flexRow=""
            display="hidden"
          />
          <SectionCard
            extraClass="w-[80%]"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="text-primarygray"
            src="https://framerusercontent.com/images/6aQaP9QnI063K3z0D3x4gYDUPI.jpg"
            cardTitle="Our Mission"
            cardDescription="
Deploying cutting-edge technology and a highly motivated workforce to deliver superior value to our publics in a sustainable manner."
            flexRow="flex-row-reverse"
            display="hidden"
          />
          </div>
        </div>
      </div>
      <div className="bg-main-9 py-16">
        <div className="w-[85%] mx-auto">
           <h1 className="text-[48px] text-center font-bold text-primaryblack tracking-[-0.96px]">Our Outstanding Leadership</h1>
          <p className="text-lg leading-[28px] text-center font-nunito text-primarygray mx-auto w-[55%] mt-4">To bring you the most impactful products and services you deserve. Signature Bank is led by an honorable, trustworthy board of directors and managed by an experienced, talented executive team.</p>

          <div className="flex justify-center">
            <div className="bg-white w-fit  flex gap-[96px] p-5 rounded-[20px]">
              <button
                type="button"
                className={`py-3 text-xl text-[#9999] border-b-2 border-b-2-transparent font-medium focus:outline-none ${
                  activeTab === "directors" && "text-hex-2 border-b-hex-2"
                }`}
                onClick={toggleTab}
                id="directors"
                data-value="directors"
              >
                board of Directors
              </button>
              <button
                type="button"
                className={`rounded py-3 text-xl font-medium text-[#9999] focus:outline-none ${
                  activeTab === "managers" &&
                  "text-hex-2 after:w-5 after:h-[2px] after:bg-hex-2"
                }`}
                onClick={toggleTab}
                id="managers"
                data-value="managers"
              >
                Executive Team
              </button>
            </div>
          </div>
          {activeTab === "directors" && (<div className="text-primaryblack grid grid-cols-1 lg:grid-cols-3 gap-5 grid-rows-3">
            {boardOfDirectors.map((dierctor, index:number) => (
              <div key={index} className="mb-20">
              <div className="h-[396px] border rounded-[90px]" />
              {/* <img src="	https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024" alt="Dr. Mutiu Sunmonu, CON" /> */}
                <h3 className="text-[26.83px] text-alternate font-medium text-center font-nunito mt-3">{dierctor.name}</h3>
                <p className="text-[18.78px] text-alternatew text-center mt-2">{dierctor.title}</p>
            </div>
            ))}
          </div>)}
          {activeTab == "directors" && (<div className="text-primaryblack grid grid-cols-1 lg:grid-cols-3 gap-5 grid-rows-3">
            {boardOfManagers.map((manager, index:number) => (
              <div key={index} className="mb-20">
              <div className="h-[396px] border rounded-[90px]" />
              {/* <img src="	https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024" alt="Dr. Mutiu Sunmonu, CON" /> */}
                <h3 className="text-[26.83px] text-alternate font-medium text-center font-nunito mt-3">{manager.name}</h3>
                <p className="text-[18.78px] text-alternatew text-center mt-2">{manager.title}</p>
            </div>
            ))}
          </div>)}
          {activeTab == "managers" && (<div className="text-primaryblack grid grid-cols-1 lg:grid-cols-3 gap-5 grid-rows-3">
            {boardOfDirectors.map((board, index:number) => (
              <div key={index} className="mb-20">
              <div className="h-[396px] border rounded-[90px]" />
              {/* <img src="	https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024" alt="Dr. Mutiu Sunmonu, CON" /> */}
                <h3 className="text-[26.83px] text-alternate font-medium text-center font-nunito mt-3">{board.name}</h3>
                <p className="text-[18.78px] text-alternatew text-center mt-2">{board.title}</p>
            </div>
            ))}
          </div>)}
             </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-alternate w-[90%]"
          imgContainer=""
          textColor="text-primarygray"
          title="Open an account with us in a few simple steps."
          description="Open an account with us and enjoy the benefits of personalized banking services."
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
