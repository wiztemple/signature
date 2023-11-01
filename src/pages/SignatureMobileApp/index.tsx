import { useState, useRef, useEffect } from "react";
import lottie from "lottie-web";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import tickSvg from "../../assets/tick.svg";
import { faqs } from "../../data/faqs";
import appleSvg from "../../assets/apple.svg";
import googleSvg from "../../assets/google.svg";
import Footer from "../../components/Footer";
import animationData from "../../assets/swoosh.json";

const names: { name: string }[] = [
  { name: "Open an account" },
  { name: "Bank transfers" },
  { name: "Buy Airtime" },
  { name: "Pay Bills" },
  { name: "Biometric authentication" },
  { name: "Request for account upgrade" },
  { name: "Personalised dashboard" },
  { name: "View and request for statement" },
];

const banks: { title: string }[] = [
  { title: "Visit the Android Play Store or iOS Store on your mobile device." },
  { title: `Search for "Signature Mobile App" and download the app.` },
  { title: `Select "Sign up" to register.` },
  { title: "Provide your Account Number, BVN, and Date of Birth." },
  { title: "Create a unique User ID and Password." },
  { title: "Set up your Transaction PIN." },
];

const customers: { title: string }[] = [
  { title: "Visit the Play Store or iOS Store on your mobile device." },
  { title: `Download the "Signature Mobile App".` },
  { title: `Select "Open Account"` },
  {
    title: `Provide your BVN and Date of Birth to complete the account opening process and receive an account number`,
  },
  { title: `Choose a unique User ID and Password.` },
  { title: `Set up your Transaction PIN.` },
];

const SignatureMobileApp = () => {
  const [onFaq, setOnFaq] = useState<boolean>(false);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const container = useRef(null);
  const animationRef = useRef<any>(null);

  useEffect(() => {
    if (container.current && !animationRef.current) {
      const anim = lottie.loadAnimation({
        animationData,
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: "svg",
      });
      anim.setSpeed(0.6);
      animationRef.current = anim;
    }
  }, []);

  return (
    <div className="bg-white font-nunitoSans">
      <Header primaryBtnClassName="bg-hex-2" />
      <MobileHeader
        bg="bg-white"
        textColor1="text-midblack"
        primaryBtnClassName="bg-hex-2 !py-2.5"
      />
      <div className="bg-main-7 md:pt-32 pt-44 2xl:h-[90vh] xl:h-[50vh] lg:h-screen md:h-[50vh] h-auto text-primaryblack overflow-hidden">
        <div className="md:flex justify-between w-[85%] h-full items-center mx-auto">
          <div>
            <h1 className="text-[64px] leading-[1.1em] text-hex-2 font-bold lg:pt-0 pt-16">
              Enjoy the <br /> ease of banking <br /> on-the-go
            </h1>
          </div>
          <div className="flex-1 lg:ml-16 mt-2 relative lg:pb-0 pb-10">
            <div
              className="absolute lg:w-[850px] w-screen lg:-right-28 right-0 lg:top-12 lg:-bottom-72 bottom-16 left-0 lg:left-0 overflow-hidden z-40"
              ref={container}
              id="animation-container"
            ></div>
            <img
              className="lg:w-[480px] lg:h-[662p] w-[75.6%] h-full object-cover mx-auto"
              src="https://framerusercontent.com/images/uv61l0HfxhndhTisCpGJIDgjs.png?scale-down-to=512"
              alt="Signature Careers"
            />
          </div>
        </div>
      </div>
      <div className="text-primaryblack w-[85%] mx-auto">
        <div className="flex lg:flex-row flex-col justify-between pt-28 pb-20 items-center">
          <div className="lg:flex-1">
            <h2 className="text-alternate lg:w-[65%] text-[40px] leading-[1.3em] font-bold">
              The Signature Mobile App- the freedom to bank on-the-go
            </h2>
          </div>
          <div className="text-hex-9 flex-1 flex flex-col lg:mt-0 mt-4 gap-5 text-lg">
            <p>
              Signature mobile is a smart banking app built to deliver the most
              seamless digital banking user experience with an extensive bouquet
              of functionalities for all users. The app is built as an
              electronic channel for potential and existing customers to bank
              on-the-go whilst performing financial transactions and lifestyle
              payments. This implies that potential customers can also open
              accounts through the app and enjoy the freedom to bank on-the-go.
            </p>
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-4">
          {names.map((name) => (
            <div className="bg-cardbg relative w-full h-auto rounded-[20px] p-[20px]">
              <div className="bg-hex-2/10 w-[95px] h-[95px] rounded-[20px]">
                <img
                  className="w-full h-full"
                  loading="lazy"
                  src="https://framerusercontent.com/images/h3MO2XZZjK008vmUX35AGUw2DY.png"
                  alt="icon"
                />
              </div>
              <p className="text-primaryblack text-2xl w-[90%] mt-6 font-bold leading-[1.2em]">
                {name.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-main-9 py-28 md:my-24">
        <div className="w-[85%] mx-auto">
          <h2 className="text-[48px] font-bold leading-[-0.96px] text-primaryblack text-center md:w-[60%] mx-auto">
            How to register on the Signature Mobile App
          </h2>
          <div className="md:flex mt-14 gap-14">
            <div className="flex-1">
              <img
                className="w-full h-64 rounded-[20px] bg-cover object-cover"
                src="https://framerusercontent.com/images/AUKHC7JkfeujrNdtmTTenk5nY.jpg?scale-down-to=512"
                alt=""
              />
              <p className="text-[28.56px] text-primaryblack leading-[1em] font-bold mt-6">
                For existing bank customers
              </p>
              {banks.map((bank, index) => (
                <div key={index} className="flex gap-2 items-center mt-4">
                  <img src={tickSvg} alt="good icon" />
                  <p className="text-hex-9 text-base">{bank.title}</p>
                </div>
              ))}
              <div className="flex gap-5 items-center mt-5">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://play.google.com/store/apps/details?id=ng.gov.cbn.speed.wallet.temp"
                >
                  <img src={googleSvg} alt="apple logo" />
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://apps.apple.com/us/app/enaira-speed-wallet/id1587292843"
                >
                  <img src={appleSvg} alt="apple logo" />
                </a>
              </div>
            </div>
            <div className="flex-1 md:mt-0 mt-14">
              <img
                className="w-full h-64 rounded-[20px] bg-cover object-cover"
                src="https://framerusercontent.com/images/ptvs2cLI1UEsfZl4LVrdQD3GRIY.jpg?scale-down-to=1024"
                alt=""
              />
              <p className="text-[28.56px] text-primaryblack leading-[1em] font-bold mt-6">
                For existing bank customers
              </p>
              {customers.map((customer, index) => (
                <div key={index} className="flex gap-2 items-start mt-4">
                  <img src={tickSvg} alt="good icon" />
                  <p className="text-hex-9 text-base w-[80%]">
                    {customer.title}
                  </p>
                </div>
              ))}
              <div className="flex gap-5 items-center mt-5">
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://play.google.com/store/apps/details?id=ng.gov.cbn.speed.wallet.temp"
                >
                  <img src={googleSvg} alt="google logo" />
                </a>
                <a
                  target="_blank"
                  rel="noopener"
                  href="https://apps.apple.com/us/app/enaira-speed-wallet/id1587292843"
                >
                  <img src={appleSvg} alt="apple logo" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto pb-14">
        <div>
          <h2 className="text-5xl text-primaryblack font-bold text-center pt-10 tracking-[-0.96px]">
            Frequently asked questions
          </h2>
          <div className="h-auto rounded-[20px] border-b w-full mx-auto mt-10 mb-36 bg-[#f2f2f2] py-2 px-5">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="last:border-none border-b py-2 items-center"
              >
                <div
                  onClick={() => {
                    setOnFaq(!onFaq);
                    setActiveIndex(index);
                  }}
                  className="flex gap-6 cursor-pointer items-center"
                >
                  <span
                    className={`text-hex-9/70 text-3xl ${
                      onFaq === true && activeIndex === index && "rotate-45"
                    } transition-all ease-in-out delay-100 duration-300 font-nunitoSans font-medium`}
                  >
                    +
                  </span>
                  <span className="text-[#333333] text-base leading-[2em] font-nunitoSans mt-1 font-bold">
                    {faq.title}
                  </span>
                </div>
                {onFaq === true && activeIndex === index && (
                  <div className="flex flex-col gap-3 my-3 pl-10 pr-5">
                    {faq.description.map((faq, index) => (
                      <div
                        key={index}
                        className="flex items-start w-[93%] gap-1"
                      >
                        {/* <img src={tickSvg} alt="" /> */}
                        <p className="text-base font-nunitoSans font-bold text-hex-9/80">
                          {faq}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-alternate md:w-[60%]"
          imgContainer="lg:w-[40%] w-full"
          textColor="text-primarygray md:text-xl"
          title="Unlock new financial possibilities with us"
          description="Open a Signature Bank account in just a few steps"
          buttonName="Open an Account"
          url="https://framerusercontent.com/images/XuTTuxNqq78uVLDqe5bmNkmn7hE.png?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  );
};

export default SignatureMobileApp;
