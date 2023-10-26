import { useState } from "react";
import Board from "../../components/Board";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import tickSvg from "../../assets/tick.svg";
import Banner from "../../components/Banner";
import { AnimatePresence, motion } from "framer-motion";

const sectionFaq: { title: string, description: string[] }[] = [
  {
    title: "Feature",
    description: [
      "Zero minimum opening balance",
      "Default interest rate",
      "Interest forfeiture if withdrawal exceeds four (4) times in a month.",
      "Interest forfeiture if withdrawal exceeds four (4) times in a month.",
      "Maximum cumulative account balance: Tier 1 (₦300,000); Tier 2 (₦500,000)",
      "Maximum cumulative account balance: Tier 1 (₦300,000); Tier 2 (₦500,000)",
      "Unlimited deposits and withdrawals (Tier 3)",
      "Availability of debit card",
      "Lodgement of cheques/dividend warrants of up to ₦2million; References will be provided for cheques above ₦2million."
    ],
  },
  {
    title: "Benefits",
    description: [
      "Newsletter on savings / investment tips",
      "Loyalty rewards",
    ],
  },
  {
    title: "Documentation Requirements",
    description: [
      "1 Passport photograph ",
      "Valid means of Identification (National ID, Drivers Licence, Permanent voter’s card, international passport) *Valid ID not required for Tier 1",
      "Bank Verification Number (BVN) of Applicant",
      "Resident Permit – for foreigners",
    ],
  },
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
const section3Faq: { title: string, description: string[] }[] = [
  {
    title: "Feature",
    description: [
      "No minimum opening balance",
      "No Debit turnover limit",
      "Account Maintenance Charge of N1/mille",
      "Availability of debit card",
      "Availability of cheque book",
      "Third party transactions allowed.",
    ],
  },
  {
    title: "Benefits",
    description: [
      "Newsletter on savings / investment tips",
      "Loyalty rewards",
    ],
  },
  {
    title: "Documentation Requirements",
    description: [
      "No Maximum turnover threshold.",
      "Account eligible for rate/fee concessions",
      "Allows lodgements of cheques and dividend warrants.",
      "Allows access to loans.",
      "No fixed monthly fee.",
      "Access to electronic banking services",
    ],
  },
];

const Accounts = () => {

  const [onFaq, setOnFaq] = useState<boolean>(false);
  const [openCurrent, setOpenCurrent] = useState<boolean>(false);
  const [openCorperate, setOpenCorperate] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  return (
    <div className="bg-white">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-2.5" bg="bg-white"
      />
      <Board
        title="Signature Accounts"
        description="We've designed Signature accounts to meet the banking needs of businesses of all sizes, personal usage and special accounts for high net worth individuals."
      />
      <div className="font-nunitoSans lg:py-28 py-10 lg:w-[85%] w-[90%] mx-auto">
        <h1 className="text-5xl text-center text-primaryblack font-bold tracking-[-0.96px] lg:w-[55%] md:w-[70%] mx-auto">A range of accounts to suit your financial needs</h1>
        <div className="flex md:flex-row lg:gap-16 gap-10 flex-col-reverse md:pt-20 pt-10">
          <div className="flex-1">
            <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Signature Savings</h2>
            <p className="text-primarygray text-lg mt-5">Our Signature Savings account is perfect for customers aged 18 years and above who are looking to save money while earning an attractive interest rate. With our Signature Savings account, you can enjoy unlimited deposits and withdrawals, depending on the documentation provided, at a zero minimum opening balance.</p>
            <button className="bg-hex-2 text-sm hover:bg-primaryyellow ease-in-out transition-all duration-1000 delay-50 text-white py-4 px-7 rounded-[10px] mt-3">Open an Account - Coming Soon</button>
            <div className="h-auto rounded-[20px] w-full mt-5 bg-main-11 py-2 px-5">
              {sectionFaq.map((faq, index) => (
                <div key={index} className="py-4 last:border-0 border-b border-[#0000000d]">
                  <div onClick={() => {
                    setOnFaq(!onFaq)
                    setActiveIndex(index)
                  }} className="flex gap-6 cursor-pointer items-center">
                    <span className={`text-hex-9 text-3xl ${(onFaq === true && activeIndex === index)&& "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                    <span className="text-hex-9 text-base leading-[2em] font-nunitoSans mt-1 font-bold">{faq.title}</span>
                  </div>
                  <AnimatePresence>
                    {(onFaq && activeIndex === index) && (<motion.div
                    initial={{ opacity: 0, y: -20 }}
                            animate={{ height: onFaq ? 'auto' : 0, opacity: onFaq ? 1 : 0, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                    className="flex flex-col gap-3 mt-4 pl-10 pr-5">
                    {faq.description.map((faq, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <img src={tickSvg} alt="" />
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
            <img className="w-full h-[584px] rounded-[50px] object-cover bg-cover" src="https://framerusercontent.com/images/xcSJY994zsxDgZ5WLWNATM0ELog.jpg" alt="" />
          </div>
        </div>
        <div className="flex md:flex-row-reverse lg:gap-16 gap-10 flex-col md:pt-20 pt-10">
          <div className="flex-1">
            <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Signature Current</h2>
            <p className="text-primarygray text-lg mt-5">Our Signature Current account is designed to cater to the transactional needs of individuals aged 18 years and above. You can open this account with zero minimum opening and operating balance, and access our e-banking services.</p>
            <button className="bg-hex-2 text-sm hover:bg-primaryyellow ease-in-out transition-all duration-1000 delay-50 text-white py-4 px-7 rounded-[10px] mt-3">Open an Account - Coming Soon</button>
            <div className="h-auto rounded-[20px] w-full mt-5 bg-main-11 py-2 px-5">
              {section2Faq.map((faq, index) => (
                <div key={index} className="py-4 last:border-0 border-b border-[#0000000d]">
                  <div onClick={() => {
                    setOpenCurrent(!openCurrent)
                    setActiveIndex(index)
                  }} className="flex gap-6 cursor-pointer items-center">
                    <span className={`text-hex-9 text-3xl ${(openCurrent === true && activeIndex === index) && "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                    <span className="text-hex-9 text-base leading-[2em] font-nunitoSans mt-1 font-bold">{faq.title}</span>
                  </div>
                  <AnimatePresence>
                    {(openCurrent === true && activeIndex === index) && (<motion.div
                    initial={{ opacity: 0, y: -20 }}
                            animate={{ height: openCurrent ? 'auto' : 0, opacity: openCurrent ? 1 : 0, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                    className="flex flex-col gap-3 mt-4 pl-10 pr-5">
                    {faq.description.map((faq, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <img src={tickSvg} alt="" />
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
            <img className="w-full h-[584px] rounded-[50px] object-cover bg-cover" src="https://framerusercontent.com/images/xDc68popX58WeVcDakNtBwrgPc.jpg" alt="" />
          </div>
        </div>
        <div className="flex md:flex-row lg:gap-16 gap-10 flex-col md:pt-20 pt-10">
          <div className="flex-1">
            <h2 className="text-primaryblack text-3xl font-bold leading-[28px]">Signature Corporate</h2>
            <p className="text-primarygray text-lg mt-5">Our Signature Corporate account is specially designed to meet the banking needs of corporates, NGOs, Trust fund, Schools, Churches, Embassies & High Commissions etc.</p>
            <button className="bg-hex-2 text-sm hover:bg-primaryyellow ease-in-out transition-all duration-1000 delay-50 text-white py-4 px-7 rounded-[10px] mt-3">Open an Account - Coming Soon</button>
            <div className="h-auto rounded-[20px] w-full mt-5 bg-main-11 py-2 px-5">
              {section3Faq.map((faq, index) => (
                <div key={index} className="py-4 last:border-0 border-b border-[#0000000d]">
                  <div onClick={() => {
                    setOpenCorperate(!openCorperate)
                    setActiveIndex(index)
                  }} className="flex gap-6 cursor-pointer items-center">
                    <span className={`text-hex-9 text-3xl ${(openCorperate === true && activeIndex === index)&& "rotate-45"} transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}>+</span>
                    <span className="text-hex-9 text-base leading-[2em] font-nunitoSans mt-1 font-bold">{faq.title}</span>
                  </div>
                  <AnimatePresence>
                    {(openCorperate && activeIndex === index) && (<motion.div
                    initial={{ opacity: 0, y: -20 }}
                            animate={{ height: openCorperate ? 'auto' : 0, opacity: openCorperate ? 1 : 0, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                    className="flex flex-col gap-3 mt-4 pl-10 pr-5">
                    {faq.description.map((faq, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <img src={tickSvg} alt="" />
                        <p className="text-base font-nunitoSans text-hex-9">{faq}</p>
                      </div>
                    ))}
                  </motion.div>)}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 bg-transparent">
            <img className="w-full h-[584px] rounded-[50px] object-cover bg-cover" src="https://framerusercontent.com/images/FkBW2mEn03WzrVXLNo1zIvMA.jpg" alt="" />
          </div>
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-alternate md:w-[60%] w-full"
          imgContainer="md:w-[40%] w-full"
          textColor="text-primarygray"
          title="Unlock new financial possibilities with us"
          description="Open a Signature Bank account in few steps"
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Accounts;