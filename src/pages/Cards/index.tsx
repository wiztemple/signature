import { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import Banner from "../../components/Banner";
import cardSvg from "../../assets/card.png"
import dollarCardSvg from "../../assets/dollarcard.svg"
import shadowSvg from "../../assets/shadow.svg"
import card from "../../assets/cards.png"
import { faqs } from "../../data/faqs";
import { AnimatePresence, motion } from "framer-motion";

const slides: { url: string, alt: string }[] = [
  {  alt: 'Personal Banking', url: 'https://framerusercontent.com/images/IdAjTDC1X43zBVcCNP3zIe8dw.png' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/ILI4zioZsAhv2tkI1JrZ3XXNOo.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/EG1qrnQT3u6azhAF7dd0u4egtBg.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: '	https://framerusercontent.com/images/5LpQCnxX1yp1hFoO251hK9KuTIM.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: '	https://framerusercontent.com/images/POXME8dVduwPVY7ZBj6MEJArYE.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: '	https://framerusercontent.com/images/ILI4zioZsAhv2tkI1JrZ3XXNOo.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/EG1qrnQT3u6azhAF7dd0u4egtBg.png?scale-down-to=512' },
   {  alt: 'Personal Banking', url: 'https://framerusercontent.com/images/IdAjTDC1X43zBVcCNP3zIe8dw.png' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/ILI4zioZsAhv2tkI1JrZ3XXNOo.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: 'https://framerusercontent.com/images/EG1qrnQT3u6azhAF7dd0u4egtBg.png?scale-down-to=512' },
  { alt: 'Personal Banking', url: '	https://framerusercontent.com/images/5LpQCnxX1yp1hFoO251hK9KuTIM.png?scale-down-to=512' },
  
];

const sectionFaq: { title: string, description: string[] }[] = [
  {
    title: "Business Credit Card",
    description: [
      "Expand your lines to credit and enter a whole new world of expansive business growth with our Signature Business Credit Cards. Enjoy juicy credit limits for your various business purchases.   ",
    ],
  },
  {
    title: "Platinum Credit Card ",
    description: [
      "Access extended credit limits on foreign currencies to your business and personal accounts through our Signature Platinum Credit Cards with global acceptability and no border restrictions.",
    ],
  },
  {
    title: "Retail Credit Card",
    description: [
      "Get a Signature Retail Credit Card that for your personal payment needs. With our retail credit card you get access to an improved credit facility that allows you to make payments for items without access to liquid cash.",
    ],
  },
];

const dollarCard: { title: string, description: string[] }[] = [
  {
    title: "Business Dollar Debit Card",
    description: [
      "Choose from our range of savings accounts, current accounts, special purpose, and domiciliary accounts to suit your specific needs. With competitive interest rates, flexible transactions, and a range of digital banking services, we make it easy for you to manage your finances and reach your financial goals. ",
    ],
  },
  {
    title: "Platinum Dollar Debit Card ",
    description: [
      "Choose from our range of savings accounts, current accounts, special purpose, and domiciliary accounts to suit your specific needs. With competitive interest rates, flexible transactions, and a range of digital banking services, we make it easy for you to manage your finances and reach your financial goals.",
    ],
  },
  {
    title: "Retail Dollar Debit Card",
    description: [
      "Choose from our range of savings accounts, current accounts, special purpose, and domiciliary accounts to suit your specific needs. With competitive interest rates, flexible transactions, and a range of digital banking services, we make it easy for you to manage your finances and reach your financial goals.",
    ],
  },
];

const creditDollar: { title: string, description: string[] }[] = [
  {
    title: "Business Credit Card",
    description: [
      "Expand your lines to credit and enter a whole new world of expansive business growth with our Signature Business Credit Cards. Enjoy juicy credit limits for your various business purchases.",
    ],
  },
  {
    title: "Platinum Credit Card ",
    description: [
      "Access extended credit limits on foreign currencies to your business and personal accounts through our Signature Platinum Credit Cards with global acceptability and no border restrictions.",
    ],
  },
  {
    title: "Retail Credit Card",
    description: [
      "Get a Signature Retail Credit Card that for your personal payment needs. With our retail credit card you get access to an improved credit facility that allows you to make payments for items without access to liquid cash.",
    ],
  },
];

const nairaCard: { title: string, description: string[] }[] = [
  {
    title: "Signature Verve Naira Debit Cards",
    description: [
      `Enjoy full control of your account with Signature Verve Naira Debit cards. Our debit card is linked to your
Savings or Current account, and allows you to make payments on WEB, POS, and use on the ATM`,
      `FEATURES:`,
      `The following exciting features are available on the signature verve naira debit card.
- Free POS/WEB transactions
- ATM cash withdrawal and funds transfer
- Bills payment
- 24 hours access to funds via e-channels
- Highly secured with sophisticated PIN and Chip technology
- 4 years validity period`
    ],
  },
  {
    title: "Business Debit Card",
    description: [
      "Manage all your business payments with our 3-D secure Signature Business Card tailor made for your business. Pay busines utility bills, purchase business essentials, make online payments, and access cash necessary for business growth.",
    ],
  },
  {
    title: "Platinum Debit Card ",
    description: [
      "Our Signature Platinum Debit Cards have global acceptability and no border restrictions. With our platinum card, you get access to foreign currency that is instrumental to business expansion. ",
    ],
  },
  {
    title: "Retail Debit Card",
    description: [
      "Get a Signature Retail Debit Card that suits your lifestyle. With our retail debit card you get access to round the clock, reliable financial instrument that ultimately caters to your payment needs and access to cash.",
    ],
  },
  {
    title: "Women Debit Card",
    description: [
      "We have introduced a special debit card specifically for women as we have taken into cognisance their specific needs and peculiarities and we aim to make payments absolutely seamless for them with our Special Women Debit Cards.",
    ],
  },
  {
    title: "Youth Debit Card",
    description: [
      "Finanicial management is also extremely important for the younger generation, as such, we have delivered a unique financial instrument to help youth plan their expenditure and make payments appropriately. Get the special Signature Youth Debit Card.",
    ],
  },
];


const cardType = [{name: "Naira Card"}, {name: "Dollar Card"}]

const Cards = () => {

  const [onFaq, setOnFaq] = useState<boolean>(false);
  const [openDebitNaira, setOpenDebitNaira] = useState<boolean>(false);
  const [openCreditNaira, setOpenCreditNaira] = useState<boolean>(false);
  const [openDebitDollar, setOpenDebitDollar] = useState<boolean>(false);
  const [openCreditDollar, setOpenCreditDollar] = useState<boolean>(false);
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
          <p className="text-lg text-hex-11 text-center sm:px-10 px-5 mt-4">Make payments with confidence. Shopping, traveling, or just buying groceries? Our Signature Cards are perfect for you</p>
        </div>
        <div className="relative mask w-full lg:mt-5 md:mt-32 mt-10">
          <div className="slider-container" />
          <div className="flex slider-left relative gap-5 z-20">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative cursor-pointer sm:w-[229px] w-[198px] sm:h-[148px] h-[130px]">
                <img className="left-5 bg-primaryyellow whitespace-nowrap transition-all duration-500 delay-300 rounded-[10px] w-full h-full bg-cover object-cover" src={slide.url} alt={slide.alt} />
              </div>
            ))}
          </div>
          <div className="flex slider-left relative w-[3500px] mt-3 gap-5 z-20">
            {slides.map((slide, index) => (
              <div
                key={index}
                className="relative cursor-pointer sm:w-[229px] w-[198px] sm:h-[148px] h-[130px]">
                <img className="left-5 bg-primaryyellow whitespace-nowrap rounded-[10px] w-full h-full bg-cover object-cover" src={slide.url} alt={slide.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        <div className="lg:w-[85%] w-[93%] mx-auto py-24 relative">
          <h2 className="text-5xl text-primaryblack font-bold text-center tracking-[-0.96px]">A Card for every occasion</h2>
          <div className="text-primaryblack mx-auto flex justify-between sm:w-96 w-[90%] px-3 text-2xl mt-20 border-white bg-[#ffffffb3] backdrop-blur-md z-40 md:top-[118px] sm:top-28 top-[150px] rounded-[10px] sticky">
            {cardType.map((card, index) => (
              <div onClick={() => setCurrentCard(index)} key={index} className={`${currentCard === index ? "text-hex-2 font-bold" : "text-[#999999]"} cursor-pointer sticky transition-all duration-500 delay-75 ease-in-out py-4 leading-[28px]`}>
                {card.name}
                {currentCard === index && <div className="border-[3px] border-hex-2 w-16 mt-5 rounded-[20px] mx-auto" />}
              </div>
            ))}
          </div>
          {currentCard === 0 && (
            <>
              <div className="flex md:flex-row lg:gap-16 gap-10 flex-col pt-10">
                <div className="flex-1">
                  <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Signature Debit Cards</h2>
                  <p className="text-primarygray text-lg mt-5">All cards were designed with your specific needs in mind and made to deliver on your unique requirements.  Choose a card</p>
                  <button className="bg-hex-2 text-sm hover:bg-primaryyellow ease-in-out transition-all duration-1000 delay-50 text-white py-4 px-7 rounded-[10px] mt-3">Open an Account - Coming Soon</button>
                  <div className="h-auto rounded-[20px] w-full mt-5 bg-main-11 py-2 px-5">
                    {nairaCard.map((card, index) => (
                      <div key={index} className="py-4 last:border-0 border-b border-[#0000000d]">
                        <div onClick={() => {
                          setOpenDebitNaira(!openDebitNaira)
                          setActiveIndex(index)
                        }} className="flex gap-6 cursor-pointer items-center">
                          <span className={`text-hex-9 text-3xl ${(openDebitNaira === true && activeIndex === index) && "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                          <span className="text-hex-9 text-base leading-[2em] font-nunitoSans mt-1 font-bold">{card.title}</span>
                        </div>
                        <AnimatePresence>
                          {(openDebitNaira === true && activeIndex === index) && (<motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ height: openDebitNaira ? 'auto' : 0, opacity: openDebitNaira ? 1 : 0, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-3 mt-4 pl-10 pr-5">
                            {card.description.map((card, index) => (
                              <div key={index} className="flex items-start gap-2">
                                {/* <img src={tickSvg} alt="" /> */}
                                <p className="text-base font-nunitoSans text-hex-9">{card}</p>
                              </div>
                            ))}
                          </motion.div>)}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-full h-[584px] flex flex-col justify-center pt-4 md:pl-8 pl-2 bg-[#f7e7f3] rounded-[50px]">
                    <img className="bg-cover object-cover md:w-[85%] w-full" src={card} alt="" />
                    <img className="bg-cover z-40 md:-ml-20 -ml-5 mt-6 object-cover" src={shadowSvg} alt="" />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row-reverse lg:gap-16 gap-10 flex-col md:pt-20 pt-10">
                <div className="flex-1">
                  <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Signature Debit Cards</h2>
                  <p className="text-primarygray text-lg mt-5">All cards were designed with your specific needs in mind and made to deliver on your unique requirements.  Choose a card</p>
                  <button className="bg-hex-2 text-sm hover:bg-primaryyellow ease-in-out transition-all duration-1000 delay-50 text-white py-4 px-7 rounded-[10px] mt-3">Open an Account - Coming Soon</button>
                  <div className="h-auto rounded-[20px] w-full mt-5 bg-main-11 py-2 px-5">
                    {sectionFaq.map((faq, index) => (
                      <div key={index} className="py-4 last:border-0 border-b border-[#0000000d]">
                        <div onClick={() => {
                          setOpenCreditNaira(!openCreditNaira)
                          setActiveIndex(index)
                        }} className="flex gap-6 cursor-pointer items-center">
                          <span className={`text-hex-9 text-3xl ${(openCreditNaira === true && activeIndex === index) && "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                          <span className="text-hex-9 text-base leading-[2em] font-nunitoSans mt-1 font-bold">{faq.title}</span>
                        </div>
                        <AnimatePresence>
                          {(openCreditNaira === true && activeIndex === index) && (<motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ height: openCreditNaira ? 'auto' : 0, opacity: openCreditNaira ? 1 : 0, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col gap-3 mt-4 pl-10 pr-5">
                            {faq.description.map((faq, index) => (
                              <div key={index} className="flex items-start gap-2">
                                {/* <img src={tickSvg} alt="" /> */}
                                <p className="text-base font-nunitoSans text-hex-9">{faq}</p>
                              </div>
                            ))}
                          </motion.div>)}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="lg:w-[600px] w-full h-[584px] bg-[#f7e7f3] flex flex-col justify-center relative lg:pl-10 pl-5 rounded-[50px] pt-10">
                    <img className="bg-cover lg:w-[80%] w-[95%] sm:h-[420px] h-[350px] lg:object-cover" src={cardSvg} alt="" />
                    <img className="bg-cover z-40 -ml-10 mt-5 object-cover" src={shadowSvg} alt="" />
                  </div>
                </div>
              </div>
            </>
          )}
          {currentCard === 1 && (
            <>
              <div className="flex md:flex-row lg:gap-16 gap-10 flex-col md:pt-14 pt-10">
                <div className="flex-1">
                  <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Signature Dollar Debit Cards</h2>
                  <p className="text-primarygray text-lg mt-5">All cards were designed with your specific needs in mind and made to deliver on your unique requirements. Choose a card</p>
                  <button className="bg-hex-2 text-sm hover:bg-primaryyellow ease-in-out transition-all duration-1000 delay-50 text-white py-4 px-7 rounded-[10px] mt-3">Open an Account - Coming Soon</button>
                  <div className="h-auto rounded-[20px] w-full mt-5 bg-main-11 py-2 px-5">
                    {dollarCard.map((card, index) => (
                      <div key={index} className="py-4 last:border-0 border-b border-[#0000000d]">
                        <div onClick={() => {
                          setOpenDebitDollar(!openDebitDollar)
                          setActiveIndex(index)
                        }} className="flex gap-6 cursor-pointer items-center">
                          <span className={`text-hex-9 text-3xl ${(openDebitDollar === true && activeIndex === index) && "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                          <span className="text-hex-9 text-base leading-[2em] font-nunitoSans mt-1 font-bold">{card.title}</span>
                        </div>
                        <AnimatePresence>
                          {(openDebitDollar === true && activeIndex === index) && (<motion.div
                          initial={{ opacity: 0, y: -20 }}
                            animate={{ height: openDebitDollar ? 'auto' : 0, opacity: openDebitDollar ? 1 : 0, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                          className="flex flex-col gap-3 mt-4 pl-10 pr-5">
                          {card.description.map((card, index) => (
                            <div key={index} className="flex items-start gap-2">
                              {/* <img src={tickSvg} alt="" /> */}
                              <p className="text-base font-nunitoSans text-hex-9">{card}</p>
                            </div>
                          ))}
                        </motion.div>)}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="w-full h-[584px] flex flex-col justify-center pt-4 md:pl-8 pl-2 bg-[#f7e7f3] rounded-[50px]">
                    <img className="bg-cover object-cover md:w-[85%] w-full" src={dollarCardSvg} alt="cards" />
                    <img className="bg-cover z-40 -ml-20 mt-6 object-cover" src={shadowSvg} alt="svg" />
                  </div>
                </div>
              </div>
              <div className="flex md:flex-row-reverse lg:gap-16 gap-10 flex-col md:pt-20 pt-10">
                <div className="flex-1">
                  <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Signature Credit Cards</h2>
                  <p className="text-primarygray text-lg mt-5">There's something for every stage of life at Signature Bank. Here's your flexible route to financial freedom.</p>
                  <button className="bg-hex-2 text-sm hover:bg-primaryyellow ease-in-out transition-all duration-1000 delay-50 text-white py-4 px-7 rounded-[10px] mt-3">Open an Account - Coming Soon</button>
                  <div className="h-auto rounded-[20px] w-full mt-5 bg-main-11 py-2 px-5">
                    {creditDollar.map((card, index) => (
                      <div key={index} className="py-4 last:border-0 border-b border-[#0000000d]">
                        <div onClick={() => {
                          setOpenCreditDollar(!openCreditDollar)
                          setActiveIndex(index)
                        }} className="flex gap-6 cursor-pointer items-center">
                          <span className={`text-hex-9 text-3xl ${(openCreditDollar === true && activeIndex === index) && "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                          <span className="text-hex-9 text-base leading-[2em] font-nunitoSans mt-1 font-bold">{card.title}</span>
                        </div>
                        <AnimatePresence>
                          {(openCreditDollar === true && activeIndex === index) && (<motion.div
                         initial={{ opacity: 0, y: -20 }}
                            animate={{ height: openDebitDollar ? 'auto' : 0, opacity: openDebitDollar ? 1 : 0, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                          className="flex flex-col gap-3 mt-4 pl-10 pr-5">
                          {card.description.map((card, index) => (
                            <div key={index} className="flex items-start gap-2">
                              {/* <img src={tickSvg} alt="" /> */}
                              <p className="text-base font-nunitoSans text-hex-9">{card}</p>
                            </div>
                          ))}
                        </motion.div>)}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="lg:w-[600px] w-full h-[584px] bg-[#f7e7f3] flex flex-col justify-center relative lg:pl-10 pl-5 rounded-[50px] pt-10">
                    <img className="bg-cover lg:w-[80%] w-[95%] sm:h-[420px] h-[350px] lg:object-cover" src={cardSvg} alt="" />
                    <img className="bg-cover z-40 -ml-10 mt-5 object-cover" src={shadowSvg} alt="" />
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
                  <div key={index} className="flex items-start w-[93%] gap-1">
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
          titleStyle="text-alternate md:w-[60%] w-full"
          imgContainer="md:w-[40%] w-full"
          textColor="text-primarygray"
          title="Take the bold step to Financial buoyancy"
          description="Open a Signature Bank account in few steps"
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Cards;
