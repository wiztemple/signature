import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import tickSvg from "../../assets/tick.svg";
import Banner from "../../components/Banner";
import cardSvg from "../../assets/cards.png"
import card from "../../assets/card.png"

const slides: { url: string, alt: string }[] = [
  {  alt: 'Personal Banking', url: 'https://framerusercontent.com/images/IdAjTDC1X43zBVcCNP3zIe8dw.png' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/ILI4zioZsAhv2tkI1JrZ3XXNOo.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/EG1qrnQT3u6azhAF7dd0u4egtBg.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: '	https://framerusercontent.com/images/5LpQCnxX1yp1hFoO251hK9KuTIM.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: '	https://framerusercontent.com/images/POXME8dVduwPVY7ZBj6MEJArYE.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: '	https://framerusercontent.com/images/ILI4zioZsAhv2tkI1JrZ3XXNOo.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/EG1qrnQT3u6azhAF7dd0u4egtBg.png?scale-down-to=512' },
  
];

const section2Faq: { title: string, description: string[] }[] = [
  {
    title: "Feature",
    description: [
      "Zero Minimum opening and operating balance ",
      "Account maintenance charge (₦1/mille)",
      "Access to e-banking services.",
    ],
  },
  {
    title: "Benefits",
    description: [
      "Newsletter on investment tips",
      "Access to loans",
    ],
  },
  {
    title: "Documentation Requirements",
    description: [
      "1 Passport photograph",
      "Valid means of Identification",
      "Bank Verification Number (BVN) of Applicant",
      "Resident Permit – for foreigners",
      "2 References",
    ],
  },
];
const faqs: { title: string, description: string[] }[] = [
  {
    title: "How do I get Signature Bank Verve Naira card?",
    description: [
      "Existing Bank Customer (I have a Signature Bank Account)",
      "- Visit any Signature Bank Branch to make request",
      "- Send an email to customercare@signaturebankng.com for card request",
      "- Place your request via Signature Mobile App",
      "New to Bank Customer (I don’t have a Signature Bank Account)",
      "- Visit any Signature Bank Branch to open an account and make request",
      "- Open an account via Signature Mobile App and make your card request,"
    ],
  },
  {
    title: "How can I activate my Signature Verve Naira Card?",
    description: [
      "- Signature Bank ATMS or Any bank’ ATM that supports Verve card pin selection.",
      "- In-branch POS.",
      "- Signature Bank Mobile App.",
      "***Ensure you activate safe token if you request for Verve card from us."
    ],
  },
  {
    title: "What can I do with Signature Verve Naira Card?",
    description: [
      "With Signature Verve Naira Card you can do the following:",
      "- ATM/POS cash withdrawal.",
      "- ATM/POS funds transfer.",
      "- Bills Payment.",
      "- Web Payment."
    ],
  },
];

const cardType = [{name: "Naira Card"}, {name: "Debit Card"}]

const Cards = () => {

  const [onFaq, setOnFaq] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const [currentCard, setCurrentCard] = useState<number>(0);

  return (
    <div className="font-nunitoSans bg-white">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-2.5" bg="bg-white"
      />
      <div className="lg:h-screen md:h-[90vh] h-screen bg-main-7 relative overflow-hidden">
        <img className="absolute w-full h-full top-0 right-0" src="https://framerusercontent.com/images/lrpi5BupBslKQxBnserqWJ30fDs.png" alt="" />
        <div className="lg:w-[50%] md:w-[80%] w-full mx-auto lg:pt-64 md:pt-96 pt-36">
          <h1 className="md:text-[64px] text-[48px] text-black leading-[1.2em] text-center font-bold">Signature Cards</h1>
          <p className="text-lg text-hex-11 text-center px-10 mt-4">Make payments with confidence. Shopping, traveling, or just buying groceries? Our Signature Cards are perfect for you</p>
        </div>
        <div className="relative mask w-full lg:mt-5 md:mt-32 mt-10">
          <div className="slider-container" />
          <div className="flex w-[3000px] relative gap-5 z-20">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative cursor-pointer w-[229px] h-[148px]">
                <img className="left-5 bg-primaryyellow whitespace-nowrap rounded-[10px] w-full h-full bg-cover object-cover" src={slide.url} alt={slide.alt} />
              </div>
            ))}
          </div>
          <div className="flex w-[3000px] relative mt-3 gap-5 z-20">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative cursor-pointer w-[229px] h-[148px]">
                <img className="left-5 bg-primaryyellow whitespace-nowrap rounded-[10px] w-full h-full bg-cover object-cover" src={slide.url} alt={slide.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="lg:w-[85%] w-[93%] mx-auto py-24">
          <h2 className="text-5xl text-primaryblack font-bold text-center tracking-[-0.96px]">A Card for every occasion</h2>
          <div className="text-primaryblack mx-auto flex justify-center text-2xl gap-28 pt-24 bg-white rounded-[10px] sticky">
            {cardType.map((card, index) => (
              <div onClick={() => setCurrentCard(index)} key={index} className={`${currentCard === index ? "text-hex-2 font-bold":"text-[#999999]"} cursor-pointer transition-all duration-500 delay-75 ease-in-out leading-[28px] relative`}>
              {card.name}
             { currentCard === index && <div className="border-[3px] border-hex-2 w-16 mt-5 rounded-[20px] mx-auto" />}
            </div>
            ))}
          </div>
          {currentCard === 0 && (
            <>
              <div className="flex md:flex-row lg:gap-16 gap-10 flex-col md:pt-28 pt-10">
            <div className="flex-1">
              <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Signature Debit Cards</h2>
              <p className="text-primarygray text-lg mt-5">All cards were designed with your specific needs in mind and made to deliver on your unique requirements.  Choose a card</p>
              <button className="bg-hex-2 text-sm hover:bg-primaryyellow ease-in-out transition-all duration-1000 delay-50 text-white py-4 px-7 rounded-[10px] mt-3">Open an Account - Coming Soon</button>
              <div className="h-auto rounded-[20px] border-b w-full mt-5 bg-main-11 py-2 px-5">
                {section2Faq.map((faq, index) => (
                  <div key={index} className=" even:my-7">
                    <div onClick={() => {
                      setOnFaq(!onFaq)
                      setActiveIndex(index)
                    }} className="flex gap-6 cursor-pointer items-center">
                      <span className={`text-hex-9 text-3xl ${(onFaq === true && activeIndex === index) && "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                      <span className="text-hex-9 text-base leading-[2em] font-nunitoSans mt-1 font-bold">{faq.title}</span>
                    </div>
                    {(onFaq === true && activeIndex === index) && (<div className="flex flex-col gap-3 mt-4 pl-10 pr-5">
                      {faq.description.map((faq, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <img src={tickSvg} alt="" />
                          <p className="text-base font-nunitoSans text-hex-9">{faq}</p>
                        </div>
                      ))}
                    </div>)}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-[584px] flex items-center md:pl-10 pl-3 bg-[#f7e7f3] rounded-[50px]">
              <img className="h-[427px] object-cover bg-cover" src={card} alt="" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row-reverse lg:gap-16 gap-10 flex-col md:pt-20 pt-10">
            <div className="flex-1">
              <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Signature Debit Cards</h2>
              <p className="text-primarygray text-lg mt-5">All cards were designed with your specific needs in mind and made to deliver on your unique requirements.  Choose a card</p>
              <button className="bg-hex-2 text-sm hover:bg-primaryyellow ease-in-out transition-all duration-1000 delay-50 text-white py-4 px-7 rounded-[10px] mt-3">Open an Account - Coming Soon</button>
              <div className="h-auto rounded-[20px] border-b w-full mt-5 bg-main-11 py-2 px-5">
                {section2Faq.map((faq, index) => (
                  <div key={index} className=" even:my-7">
                    <div onClick={() => {
                      setOnFaq(!onFaq)
                      setActiveIndex(index)
                    }} className="flex gap-6 cursor-pointer items-center">
                      <span className={`text-hex-9 text-3xl ${(onFaq === true && activeIndex === index) && "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                      <span className="text-hex-9 text-base leading-[2em] font-nunitoSans mt-1 font-bold">{faq.title}</span>
                    </div>
                    {(onFaq === true && activeIndex === index) && (<div className="flex flex-col gap-3 mt-4 pl-10 pr-5">
                      {faq.description.map((faq, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <img src={tickSvg} alt="" />
                          <p className="text-base font-nunitoSans text-hex-9">{faq}</p>
                        </div>
                      ))}
                    </div>)}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="lg:w-[600px] w-full h-[584px] bg-[#f7e7f3] flex items-center relative lg:pl-20 pl-5 rounded-[50px] py-10">
                   <img className="bg-cover h-[400px] z-40 object-cover" src={cardSvg} alt="" />
              </div>
            </div>
          </div>
            </>
          )}
          {currentCard === 1 && (
            <>
              <div className="flex md:flex-row lg:gap-16 gap-10 flex-col md:pt-20 pt-10">
            <div className="flex-1">
              <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Signature Dollar Debit Cards</h2>
              <p className="text-primarygray text-lg mt-5">All cards were designed with your specific needs in mind and made to deliver on your unique requirements.  Choose a card</p>
              <button className="bg-hex-2 text-sm hover:bg-primaryyellow ease-in-out transition-all duration-1000 delay-50 text-white py-4 px-7 rounded-[10px] mt-3">Open an Account - Coming Soon</button>
              <div className="h-auto rounded-[20px] border-b w-full mt-5 bg-main-11 py-2 px-5">
                {section2Faq.map((faq, index) => (
                  <div key={index} className=" even:my-7">
                    <div onClick={() => {
                      setOnFaq(!onFaq)
                      setActiveIndex(index)
                    }} className="flex gap-6 cursor-pointer items-center">
                      <span className={`text-hex-9 text-3xl ${(onFaq === true && activeIndex === index) && "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                      <span className="text-hex-9 text-base leading-[2em] font-nunitoSans mt-1 font-bold">{faq.title}</span>
                    </div>
                    {(onFaq === true && activeIndex === index) && (<div className="flex flex-col gap-3 mt-4 pl-10 pr-5">
                      {faq.description.map((faq, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <img src={tickSvg} alt="" />
                          <p className="text-base font-nunitoSans text-hex-9">{faq}</p>
                        </div>
                      ))}
                    </div>)}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="w-full h-[584px] flex items-center pl-10 bg-[#f7e7f3] rounded-[50px]">
              <img className="h-[427px] object-cover bg-cover" src={card} alt="" />
              </div>
            </div>
          </div>
          <div className="flex md:flex-row-reverse lg:gap-16 gap-10 flex-col md:pt-20 pt-10">
            <div className="flex-1">
              <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Signature Credit Cards</h2>
              <p className="text-primarygray text-lg mt-5">There's something for every stage of life at Signature Bank. Here's your flexible route to financial freedom.</p>
              <button className="bg-hex-2 text-sm hover:bg-primaryyellow ease-in-out transition-all duration-1000 delay-50 text-white py-4 px-7 rounded-[10px] mt-3">Open an Account - Coming Soon</button>
              <div className="h-auto rounded-[20px] border-b w-full mt-5 bg-main-11 py-2 px-5">
                {section2Faq.map((faq, index) => (
                  <div key={index} className=" even:my-7">
                    <div onClick={() => {
                      setOnFaq(!onFaq)
                      setActiveIndex(index)
                    }} className="flex gap-6 cursor-pointer items-center">
                      <span className={`text-hex-9 text-3xl ${(onFaq === true && activeIndex === index) && "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                      <span className="text-hex-9 text-base leading-[2em] font-nunitoSans mt-1 font-bold">{faq.title}</span>
                    </div>
                    {(onFaq === true && activeIndex === index) && (<div className="flex flex-col gap-3 mt-4 pl-10 pr-5">
                      {faq.description.map((faq, index) => (
                        <div key={index} className="flex items-start gap-2">
                          <img src={tickSvg} alt="" />
                          <p className="text-base font-nunitoSans text-hex-9">{faq}</p>
                        </div>
                      ))}
                    </div>)}
                  </div>
                ))}
              </div>
            </div>
            <div className="flex-1">
              <div className="w-[600px] h-[584px] bg-[#f7e7f3] flex items-center relative pl-10 rounded-[50px] py-10">
                   <img className="bg-cover h-[400px] z-40 object-cover" src={cardSvg} alt="" />
              </div>
            </div>
          </div>
            </>
          )}
          <div className="flex md:flex-row-reverse items-center lg:gap-16 gap-10 flex-col md:pt-20 pt-10">
            <div className="flex-1">
              <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Lost / Stolen Cards</h2>
              <p className="text-primarygray text-lg mt-5">If your debit/credit card is lost or stolen, please contact us immediately via Signature helpline on: 0700-00727272, email us: customercare@signaturebankng.com</p>
            </div>
            <div className="flex-1">
              <img className="w-full h-[427px] rounded-[50px] object-cover bg-cover" src="https://framerusercontent.com/images/POPAx8wefXmTdYXpWxgockpjmYo.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2><h2 className="text-5xl text-primaryblack font-bold text-center pt-20 tracking-[-0.96px]">Frequently asked questions</h2></h2>
        <div className="h-auto rounded-[20px] border-b md:w-[70%] w-[90%] mx-auto mt-10 mb-36 bg-[#f2f2f2] py-2 px-5">
                {faqs.map((faq, index) => (
                  <div key={index} className="last:border-none border-b py-2 items-center">
                    <div onClick={() => {
                      setOnFaq(!onFaq)
                      setActiveIndex(index)
                    }} className="flex gap-6 cursor-pointer items-center">
                      <span className={`text-hex-9/70 text-3xl ${(onFaq === true && activeIndex === index) && "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                      <span className="text-[#333333] text-base leading-[2em] font-nunitoSans mt-1 font-bold">{faq.title}</span>
                    </div>
                    {(onFaq === true && activeIndex === index) && (<div className="flex flex-col gap-3 my-3 pl-10 pr-5">
                      {faq.description.map((faq, index) => (
                        <div key={index} className="flex items-start w-[55%] gap-1">
                          {/* <img src={tickSvg} alt="" /> */}
                          <p className="text-base font-nunitoSans font-bold text-hex-9/80">{faq}</p>
                        </div>
                      ))}
                    </div>)}
                  </div>
                ))}
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
export default Cards;
