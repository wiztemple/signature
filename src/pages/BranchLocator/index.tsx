import { useEffect, useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import locatorSvg from "../../assets/locator.svg";
import locatorSvg1 from "../../assets/locator1.svg";
import telSvg from "../../assets/tel.svg";
import chatSvg from "../../assets/chat.svg";
import locationSvg from "../../assets/location.svg";
import ZoomOnScroll from "../../utils/ZoomOnScroll";
import { useParams } from "react-router-dom";

interface CProps {
  title: string
  details: string
  extraDetails: string
  extraStyle: string
  url: string
  extraClassName: string
}

interface IProps {
  label: string
  input: any
  inputContainer: string
}

export const Input = ({ label, input, inputContainer }: IProps) => {
  return (
    <div className={inputContainer}>
      <label
        className="text-xs text-black font-medium font-nunito"
        htmlFor={label}
      >
        {label}
      </label>
      <input
        className="w-full bg-hex-13 px-2 py-1.5 placeholder:text-xs rounded-[10px] mt-1 mb-3 border-[#ccc] border-0 outline-none text-primaryblack"
        {...input}
      />
    </div>
  );
};


const locations:{name: string, url: string}[] = [
  {name: "145 Aba Road PH", url: "https://maps.google.com/maps?q=4.817687060480532,7.009801497683675&z=14&output=embed"},
  {name: "31b Gana Street Maitama", url: "https://maps.google.com/maps?q=9.080039249330586,7.500609953041856&z=14&output=embed"},
  {name: "Aba-1B Factory Road Aba", url: "https://maps.google.com/maps?q=5.1205557139818625,7.368289486509419&z=14&output=embed"},
  {name: "Umuahia-2 Library Avenue", url: "https://maps.google.com/maps?q=5.52426917346189,7.490834925110713&z=14&output=embed"},
  {name: "Asaba-119 Nnebisi Road2", url: "https://maps.google.com/maps?q=6.195058723258716,6.740262638605889&z=14&output=embed"},
]

const CompanyInformation = ({ title, details, extraDetails, extraStyle, url, extraClassName }: CProps) => (
  <div className={`bg-[#faf7f2] ${extraStyle} rounded-[20px]`}>
    <div className="flex gap-3 w-full">
      <div className="bg-hex-2 relative w-[48px] h-[48px] rounded-full">
        <div className={`w-[48px] h-[48px] ${extraClassName}`} >
          <img className="w-full h-full text-white" src={url} alt="icons" />
        </div>
      </div>
      <div className="font-nunitoSans flex flex-col gap-3 mt-3">
        <h4 className="text-primaryblack text-xl font-bold">{title}</h4>
        <p className="text-primarygray text-base">{details}</p>
        <p className="text-hex-2 text-base mt-3">{extraDetails}</p>
      </div>
    </div>
  </div>
);

const BranchLocator = () => {

  const [activeIndex, setActiveIndex] = useState<number>(1);
  const [locator, setLocator] = useState<string>("https://maps.google.com/maps?q=9.080039249330586,7.500609953041856&z=14&output=embed");

  const {name} = useParams();

  useEffect(() => {
    const targetDiv = document.getElementById(`${name}`);
    if (targetDiv) {
      targetDiv.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className="bg-white font-nunitoSans">
      <Header primaryBtnClassName="bg-hex-2" />
      <MobileHeader bg="bg-white" textColor1="text-midblack" primaryBtnClassName="bg-hex-2 !py-2.5" />
      {/* Hero */}
      <div className="text-primaryblack md:h-[60vh] h-screen lg:h-[90vh] overflow-hidden relative bg-main-7 pt-32">
            <img className="absolute lg:-bottom-10 md:bottom-10 bottom-0 md:right-44 right-0 md:w-[80%] h-screen w-full" src="https://framerusercontent.com/images/lrpi5BupBslKQxBnserqWJ30fDs.png" alt="" />
            <div className="flex relative flex-col h-full items-center justify-center font-nunitoSans">
                <h1 className="md:text-[72px] w-[60%] leading-[1.3em] text-center text-[36px] font-bold text-black">Contact Us</h1>
                <p className="text-lg md:w-[40%] sm:w-[60%] w-[90%] text-center leading-[1.7em] lg:mt-0 mt-2 text-hex-11">Need assistance with a specific transaction or issue? Our customer support team is available to help you resolve them.</p>
          <div className="flex items-center pt-14"> 
            <img className="h-[232px] w-[207px] md:block hidden bg-cover object-cover rounded-[88px]" src="https://framerusercontent.com/images/fx0irxFFH7ZTEIeprqU9seNNzHM.png?scale-down-to=512" alt="" />
            <div className="md:flex hidden items-center">
              <div className="w-[230px] h-[180px] z-40 -rotate-90 -ml-[25px] bg-hex-2/60 rounded-full polygon" />
              <div className="w-[230px] h-[180px] z-40 -ml-[140px] -rotate-90 bg-hex-2/60 rounded-full polygon" />
            {/* <div className="w-full h-full left-[70px] -rotate-90 bg-hex-2/60 rounded-full polygon" /> */}
            </div>
            <div className="relative h-[232px] md:-ml-[116px] md:w-[500px] sm:w-[400px] w-[350px]">
              <img className="h-full w-full absolute bg-cover object-cover rounded-[88px]" src="https://framerusercontent.com/images/oYa3Hb3tW3oxYrJMJm1aWUVqM.jpg?scale-down-to=1024" alt="" />
            </div>
            <div className="relative md:block hidden -ml-4 w-[207px]">
              <div className="w-[245px] h-[195px] z-40 bg-hex-2 rounded-full polygon" />
            <div className="w-[245px] absolute top-[95px] h-[195px] bg-hex-2 rounded-full polygon" />
            </div>
        </div>
        </div>
      </div>
      <div>
        <div className="lg:w-[70%] w-[90%] mx-auto py-20">
        <div className="font-nunitoSans flex flex-col items-center">
          <h1 className="md:text-[48px] text-[30px] text-center md:w-full w-[80%] text-primaryblack font-bold">We Would Love To Hear From You</h1>
          <p className="text-primarygray text-lg lg:w-[55%] md:w-[80%] sm:w-[62%] w-[80%] lg:mt-0 md:mt-2 mt-4 text-center">we have a ruputation of offering a seamless banking experience that promotes  good relationship with our customers</p>
        </div>
          <div className="flex md:flex-row flex-col md:items-start items-center lg:gap-20 gap-5 mt-16">
            <ZoomOnScroll>
              <div className="flex md:items-start items-center flex-col gap-4">
                <CompanyInformation
                  extraClassName="p-3"
                  url={chatSvg}
              extraStyle="md:w-[457px] sm:w-[70%] w-full lg:p-[40px] p-5"
              title="Send us a message"
              details="We&apos;re here to help."
              extraDetails="enquiries@signaturebankng.com"
            />
                <CompanyInformation
                  extraClassName="p-[15px]"
                  url={locationSvg}
              extraStyle="md:w-[457px] sm:w-[70%] w-full lg:p-[40px] p-5"
              title="Head Office"
              details="Visit our office HQ."
              extraDetails="Signature Bank Limited31B Gana Street, Maitama,Abuja FCT, Nigeria."
            />
                <CompanyInformation
                  extraClassName="p-[15px]"
                  url={telSvg}
              extraStyle="md:w-[457px] sm:w-[70%] w-full lg:p-[40px] p-5"
              title="Call Us"
              details="Mon-Fri from 8am to 5pm."
              extraDetails="0700-00727272"
            />
            </div>
            </ZoomOnScroll>
            <div className="md:w-full sm:w-[70%] w-[90%] font-nunitoSans">
              <h2 className="text-primaryblack text-[36px] text-center font-bold leading-[44px]">Get in touch</h2>
              <p className="text-primarygray text-xl leading-[30px] text-center mt-3">We&apos;d love to hear from you. Please fill out this form.</p>
              <ZoomOnScroll>
                <form className="mt-4">
                <Input
                  inputContainer=""
                  label="First Name"
                  input={{
                    type:"text",
                    datatype:"first name",
                    placeholder:"Your name"
                  }}
                />
                <Input
                  inputContainer=""
                  label="Last Name"
                  input={{
                    type:"text",
                    datatype:"last name",
                    placeholder:"Your Surname"
                  }}
                />
                <Input
                  inputContainer=""
                  label="Email Address"
                  input={{
                    type:"text",
                    datatype:"email address",
                    placeholder:"Your Email Address"
                  }}
                />
                <Input
                  inputContainer=""
                  label="Account Number"
                  input={{
                    type:"text",
                    datatype:"account number",
                    placeholder:"Enter Your Account Number (If Applicable)"
                  }}
                />
                <div>
                  <label className="text-xs text-black font-medium font-nunito">Your Enquiry</label>
                  <select
                    className="w-full bg-hex-13 optional:text-xs px-3 py-1.5 rounded-[10px] mt-1 border-[#ccc] border-0 outline-none text-primaryblack mb-3"
                    datatype="your name"
                    placeholder="Your name">
                    <option value="Select Your Enquiry">Select Your Enquiry</option>
                    <option value="Dispence/Transfer Error">Dispence/Transfer Error</option>
                    <option value="Account Management">Account Management</option>
                    <option value="Loans">Loans</option>
                    <option value="Cards">Cards</option>
                    <option value="Product Enquiry">Product Enquiry</option>
                    <option value="Shareholder Enquiry">Shareholder Enquiry</option>
                    <option value="General Enquiry">General Enquiry</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs text-black font-medium font-nunito">Additional Information</label>
                  <textarea
                    value=""
                    name="additional information"
                    placeholder="Write Additional Information"
                    className="w-full bg-hex-13 rounded-[10px] h-24 placeholder:text-xs p-4 mt-1 border-[#ccc] border-0 outline-none text-primaryblack"
                  />
                </div>
                <div className="mt-3 items-center flex gap-2 text-black text-xs font-bold">
                  <input name="concent" checked type="checkbox" />
                   <p>Click here to indicate that you have read and agree to the privacy policy.*</p>
                </div>
                <button className="bg-hex-2 text-white py-3 px-5 text-xs mt-4 font-bold rounded-[10px]">Submit</button>
              </form>
              </ZoomOnScroll>
            </div>
        </div>
      </div>
      </div>
      <div>
        <div className="lg:w-[85%] md:w-[90%] sm:w-[70%] w-[90%] mx-auto">
          <div className="font-nunitoSans flex flex-col items-center">
          <h1 className="md:text-[48px] text-[30px] text-primaryblack text-center font-bold">There is a branch nearby</h1>
          <p className="text-primarygray text-lg lg:w-[45%] md:w-[50%] w-[95%] mt-3 text-center">Find our nearest branch and ATM locations for convenient and accessible banking services.</p>
            </div>
          <ZoomOnScroll>
            <div id="map" className="md:grid-cols-5 grid-cols-2 gap-2 grid grid-rows-1 lg:mt-10 sm:mt-16 mt-10">
              {locations.map((location, index) => (
                <div
                  onClick={() => {
                    setActiveIndex(index)
                    setLocator(location.url)
                  }}
                  key={index}
                  className={`${activeIndex === index ? "bg-hex-15 text-hex-2" : "bg-hex-14 text-alternate"} cursor-pointer ease-in-out transition-all duration-500 delay-150 h-[150px] pt-[30px] flex flex-col items-center gap-4 pb-5 px-[10px] rounded-[20px]`}
                >
                {activeIndex === index ? <img src={locatorSvg1} alt="" /> : <img src={locatorSvg} alt="" />}
                  <p className="text-base lg:w-[60%] text-center font-nunito">{location.name}</p>
              </div>
              ))}
            </div>
            </ZoomOnScroll>
              </div>
        {/* map */}
        <ZoomOnScroll>
          <div className="md:w-full sm:w-[70%] w-full mx-auto h-[500px] mt-4">
<iframe className="w-full h-full" src={locator}></iframe>
        </div>
        </ZoomOnScroll>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto md:py-28 py-10">
        <div className="grid md:grid-cols-3 grid-cols-1 grid-rows-1 gap-5">
          <CompanyInformation
            extraClassName="p-3"
            url={chatSvg}
            extraStyle="w-full lg:h-48 md:h-64 h-auto p-5"
              title="Report Fraud"
              details="In the event that your bank account has been compromised, Please Call"
              extraDetails="0700-00727272"
            />
          <CompanyInformation
            extraClassName="p-3"
            url={chatSvg}
            extraStyle="w-full lg:p-[20px] p-5"
              title="Missing Card"
              details="If your Bank Card has been lost or stolen, Stop it immediately using our cellphone banking app or call us on"
              extraDetails="0700-00727272"
            />
          <CompanyInformation
            extraClassName="p-[15px]"
            url={telSvg}
            extraStyle="w-full lg:p-[20px] p-5"
              title="Feedback"
              details="We are always wanting to improve our services so if you have any complaints please call us on"
              extraDetails="0700-00727272"
            />
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto pb-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white hover:bg-hex-1"
          titleStyle="text-alternate md:w-[60%] w-full"
          imgContainer="md:w-[40%] w-full"
          textColor="text-primarygray"
          title="Take the bold step to Financial buoyancy"
          description="Open a Signature Bank account in few steps"
          buttonName="Open an Account"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  )
}
export default BranchLocator;
