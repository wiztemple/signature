import { useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import '../../App.css';
import MobileHeader from "../../components/MobileHeader";
<<<<<<< HEAD
=======
import { Reveal } from "../../utils/Reveal";
>>>>>>> c142024e916b2cd5eb2ac3f82264cd28ca5e9947


const cores: { url: string, title: string }[] = [
  { url: 'https://framerusercontent.com/images/kdWsYkM6W1ZYYue2sN2HV0eZrM.png', title: 'Professionalism' },
  { url: 'https://framerusercontent.com/images/08l356m0NnV0oaxhH7WmxRuqk.png', title: 'Audacity' },
  { url: 'https://framerusercontent.com/images/tuKO3HicS4R6iPXfgGFr9tPBTc.png', title: 'Creativity' },
  { url: '	https://framerusercontent.com/images/Z4NOytugSYGsrckr0AYs8OjFA0.png', title: 'Trust' },
  { url: 'https://framerusercontent.com/images/NWrEQPq8NCfSfgvCLUfwRybYxac.png', title: 'Service Excellence' }
];

const boardOfDirectors: { url: string, name: string, title: string, alt: string }[] = [
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Dr. Mutiu Sunmonu, CON', alt: 'Dr. Mutiu Sunmonu, CON', title: 'Chairman' },
  { url: 'https://framerusercontent.com/images/lxSPT1ijdqOEWCVLJb0LYL2G7E.jpg?scale-down-to=1024', name: 'Mr. Alfred Temile', alt: 'Mr. Alfred Temile', title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/39xDqtr7ksxq5CbdEbHYHCVo.jpg?scale-down-to=1024', name: 'Mr. Shedrack Odoh', alt: 'Mr. Shedrack Odoh', title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/k2GWJF57CeJLzcLDzXdujmfI.jpg?scale-down-to=1024', name: 'Dr. Mutiu Sunmonu, CON', alt: 'Mrs. Chigorom Kalu', title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/GOKQ3SOAJdv1eNRxlu0lu4ySr8.jpg', name: 'Alhaji Tijjani M. Borodo, LLM, FloD', alt: 'Alhaji Tijjani M. Borodo, LLM, FloD', title: 'Independent Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/9PeI9ez86dfLNn0vbtFP4VJlUQ.jpg?scale-down-to=1024', name: 'Mr. Uzoma Nwankwo', alt: 'Mr. Uzoma Nwankwo', title: 'Independent Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/y2Ex6mqfLWO3G9zFFKH1Hi3IzD4.jpg?scale-down-to=1024', name: 'Mrs. Nonye Ayeni', alt: 'Mrs. Nonye Ayeni', title: 'Managing Director' },
];

const boardOfManagers: { url: string, name: string, title: string, alt: string }[] = [
  { url: 'https://framerusercontent.com/images/y2Ex6mqfLWO3G9zFFKH1Hi3IzD4.jpg?scale-down-to=1024', name: 'Mrs. Nonye Ayeni', alt: 'Mrs. Nonye Ayeni', title: 'Managing Director' },
  { url: 'https://framerusercontent.com/images/3j62M9e6OAseQhFBRDD3d0DORCw.jpg?scale-down-to=1024', name: 'Ms. June Otigba', alt: 'Ms. June Otigba', title: 'Head, Retail Banking & Abuja Region' },
  { url: 'https://framerusercontent.com/images/vSd6bBrTwRSIsVs5EWzYRNgIzQ.jpg?scale-down-to=1024', name: 'Mr. Ekundayo Yakubu', alt: 'Mr. Ekundayo Yakubu', title: 'Chief Financial Officer' },
  { url: 'https://framerusercontent.com/images/ulWJosdkkYenJtn2zb8IZRYs.jpg?scale-down-to=1024', name: 'Mr. Omololu Ajayi', alt: 'Mr. Omololu Ajayi', title: 'Chief Information Officer' },
  { url: 'https://framerusercontent.com/images/rlk3JbjQ6M8br1RbhCky4RHk.jpg?scale-down-to=1024', name: 'Mr. Ugonna Onyema', alt: 'Mr. Ugonna Onyema', title: 'Head, Human Capital Management' },
  { url: 'https://framerusercontent.com/images/E5YP8QsuvJrJ5IMSPGDIxsEXs.jpg', name: 'Mr. Iwueze Ebere', alt: 'Mr. Iwueze Ebere', title: 'Company Secretary/Legal Adviser' },
];

const slides: { name: string, url: string, path: string, alt: string, stroke:string, color: string }[] = [
  { color: 'bg-main-10/60', stroke: "stroke-main-10", name: 'Personal Banking', path: '/personal-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/0pkpx4EoTB98LDipRi3Fsa17t2U.jpg' },
  { color: 'bg-primaryblown/60',stroke: "stroke-primaryblown", name: 'Private Banking', path: '/private-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/AVRrGV5qinCaJoJhlahT4Od4Qg4.jpg?scale-down-to=512' },
  { color: 'bg-primaryyellow/60',stroke: "stroke-primaryyellow", name: 'Business Banking', path: '/business-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/90iLC8eLJFKBsYO5b61ZtAyUlzw.png?scale-down-to=512' },
  { color: 'bg-hex-2/60',stroke: "stroke-hex-2", name: 'Institutional Banking', path: '/institutional-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/SiwzAOftQDTO4naBSmAOBMWkQJg.jpg' },
  {color: 'bg-primaryyellow/60', stroke: "stroke-primaryyellow", name: 'Digital Banking', path: '/digital-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/csHFzMjSvWHg0OXUzrTfKLl52s.jpg' },
  { color: 'bg-main-10/60',stroke: "stroke-main-10", name: 'Personal Banking', path: '/personal-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/0pkpx4EoTB98LDipRi3Fsa17t2U.jpg' },
  {color: 'bg-primaryblown/60', stroke: "stroke-primaryblown", name: 'Private Banking', path: '/private-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/AVRrGV5qinCaJoJhlahT4Od4Qg4.jpg?scale-down-to=512' },
  {color: 'bg-primaryyellow/60', stroke: "stroke-primaryyellow", name: 'Business Banking', path: '/business-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/90iLC8eLJFKBsYO5b61ZtAyUlzw.png?scale-down-to=512' },
  { color: 'bg-hex-2/60',stroke: "stroke-hex-2", name: 'Institutional Banking', path: '/institutional-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/SiwzAOftQDTO4naBSmAOBMWkQJg.jpg' },
  { color: 'bg-primaryyellow/60',stroke: "stroke-primaryyellow", name: 'Digital Banking', path: '/digital-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/csHFzMjSvWHg0OXUzrTfKLl52s.jpg' },
];

const AboutUs = () => {

  const [onFous, setOnFocus] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const [activeTab, setActiveTab] = useState<string | undefined>("directors");
const toggleTab = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = event.currentTarget.dataset;
    setActiveTab(value);
};
  
  
  return (
    <div className="bg-white font-nunitoSans">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader bg="bg-white" textColor1="text-midblack" primaryBtnClassName="bg-hex-2 !py-2.5" />
      <div className="lg:h-screen md:h-[90vh] h-screen bg-main-7 relative overflow-hidden">
        <img className="absolute w-full h-full top-0 right-0" src="https://framerusercontent.com/images/lrpi5BupBslKQxBnserqWJ30fDs.png" alt="" />
        <div className="lg:w-[50%] md:w-[80%] w-full mx-auto lg:pt-48 md:pt-96 pt-48">
          <h1 className="md:text-[64px] text-[48px] text-black leading-[1.2em] text-center font-bold">Built on trust, service and innovation</h1>
          <p className="text-lg text-hex-11 text-center px-10 mt-5">We're not just a bank, we're a tech-driven financial institution that's constantly pushing the boundaries to bring you the best possible customer experience.</p>
        </div>
        <div className="relative overflow-hidden mask w-full lg:mt-20 md:mt-32 mt-10">
          <div className="slider-container" />
            <div className="flex relative slider w-[3000px] z-20 gap-20 h-[257px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                onMouseEnter={() => {
                  setOnFocus(true)
                  setCurrentIndex(index)
                }}
              onMouseLeave={() => setOnFocus(false)} className="relative overflow-hidden cursor-pointer w-[180px] h-[203px]">
                <svg className={`absolute ${slide.stroke} z-40`} width="180" height="203" viewBox="0 0 180 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M175 119.5V128C175 166.66 143.66 198 105 198H75C36.34 198 5 166.66 5 128V119.5M175 83.5V75C175 36.34 143.66 5 105 5H75C36.34 5 5 36.34 5 75V83.5" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
              <img className="rounded-[60px] left-5 bg-primaryyellow top-[22px] absolute w-[140px] h-[160px] bg-cover object-cover" src={slide.url} alt={slide.alt} />
              {(onFous === true && currentIndex === index) && <div className={`rounded-[60px] text-center inset-0 left-5 top-[22px] absolute text-white w-[140px] z-40 h-[160px] ${slide.color}`}>
                <a href={slide.path} className="flex justify-center text-base font-bold text-white relative z-50 items-center h-full">
                  {slide.name}
                </a>
              </div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-bannerbg">
        <div className="md:w-[80%] w-[90%] mx-auto md:py-28 py-10">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="w-full">
            <h2 className="text-primaryblack text-[36px] font-bold">Welcome to Signature Bank</h2>
            <p className="text-primarygray text-lg leading-[28px] md:w-[75%] mt-4">Signature Bank launched in 2022 to serve discerning customers who want to experience real banking. With specially designed financial products and services, we leverage digital solutions to provide you with tailor made solutions that suit your needs.</p>
            <p className="text-primarygray text-lg leading-[28px] md:w-[75%] mt-5">We are committed to helping you achieve your goals through exemplary financial services and products that will empower you and your business.</p>
            <p className="text-primarygray text-lg leading-[28px] md:w-[75%] mt-6">We want to be part of your journey by providing you with excellent customer service with access to innovative financial solutions.</p>
          </div>
          <div className="md:mt-0 my-10">
            <img className="lg:rounded-[140px] lg:h-[471px] h-[350px] bg-cover object-cover" src="https://framerusercontent.com/images/wL0MMQ2zOiT9PCn19u35JFkZD8.jpg" alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className="bg-main-9 pt-28">
        <div className="mx-auto lg:w-[73%] w-[90%] border-b-2 border-main-2/10">
          <h1 className="text-[48px] text-center font-bold text-primaryblack tracking-[-0.96px]">Our Core Values</h1>
          <p className="text-lg leading-[28px] text-center text-primarygray mx-auto lg:w-[55%] md:w-[70%] mt-4">Our values of professionalism, audacity, creativity, trust and service excellence are intrinsic to how we operate and how we serve our customers to deliver exemplary financial services.</p>
          <div className="grid md:grid-cols-5 grid-cols-2 lg:gap-[10px] gap-2 grid-rows-1 mt-10">
            {cores.map((core, index:number) => (
              <div key={index} className="bg-hex-12 flex flex-col gap-5 h-[230px] justify-center items-center rounded-[20px]">
              <img className="w-[72px]" src={core.url} alt="" />
                <h4 className="lg:text-2xl text-xl text-primaryblack text-center font-bold">{core.title}</h4>
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
        <div className="md:w-[85%] w-[90%] mx-auto">
           <h1 className="md:text-[48px] text-[30px] lg:w-full md:w-[55%] w-full mx-auto text-center font-bold text-primaryblack lg:tracking-[-0.96px]">Our Outstanding Leadership</h1>
          <p className="text-lg leading-[28px] text-center text-primarygray mx-auto lg:w-[55%] md:w-[80%] mt-4">To bring you the most impactful products and services you deserve. Signature Bank is led by an honorable, trustworthy board of directors and managed by an experienced, talented executive team.</p>

          <div className="flex justify-center mt-10">
            <div className="bg-white w-fit flex gap-[96px] p-5 rounded-[20px]">
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
          {activeTab === "directors" && (<div className="text-primaryblack grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 grid-rows-3">
            {boardOfDirectors.map((dierctor, index:number) => (
              <div key={index} className="mb-10">
                <Reveal>
                  <img className="h-[396px] border rounded-[90px] object-cover bg-cover" src={dierctor.url} alt={dierctor.alt} />
                <h3 className="text-[26.83px] text-alternate font-bold font-nunitoSans text-center  mt-3">{dierctor.name}</h3>
                <p className="text-[18.78px] text-alternatew text-center mt-2">{dierctor.title}</p>
              </Reveal>
            </div>
            ))}
          </div>)}
          {activeTab == "managers" && (<div className="text-primaryblack grid grid-cols-1 md:grid-cols-3 gap-5 mt-10 grid-rows-2">
            {boardOfManagers.map((manager, index:number) => (
              <div key={index} className="mb-10">
                <Reveal>
              <img className="h-[396px] border rounded-[90px] object-cover bg-cover" src={manager.url} alt={manager.alt} />
                <h3 className="text-[26.83px] text-alternate font-bold font-nunitoSans text-center mt-3 hover:text-primaryyellow">{manager.name}</h3>
                <p className="text-[18.78px] text-alternatew text-center mt-2">{manager.title}</p>
                </Reveal>
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
