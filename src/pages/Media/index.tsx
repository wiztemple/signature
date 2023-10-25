import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";

const details: { id: number, title: string, description: string, url: string, link: string }[] = [
  {
    id: 1,
    url: "https://framerusercontent.com/images/gv0N0KSVgZPb3mDGSqnANBv5I.jpg",
    link: "/media-publication/cbn-provides-further-update-to-the-guidelines-in-the-foreign-exchange-market",
    title: "Floating the Naira: The impacts and way forward for the economy",
    description: "In a move by the Central Bank to float the currency, they have authorized the Deposit Money Banks to remove the rate cap on the Nigeria Naira."
  },
  {
    id: 2,
    link: "/media-publication/cbn-provides-further-update-to-the-guidelines-in-the-foreign-exchange-market-1",
    url: "https://framerusercontent.com/images/Q7yK6b8OgphElaqypVACvrLz4.jpg",
    title: "CBN Provides Further Update To The Guidelines In The Foreign Exchange Market.",
    description: "The Director of Corporate Communications, Dr Isa AbdulMumin, has announced further policy changes in relation to FX which is aimed at…"
  },
  {
    id: 3,
    link: "/media-publication/excitement-as-signature-bank-launches-operation",
    url: "https://framerusercontent.com/images/cBtUkCjjDXHdpLUs6Ky1h2KLLnk.jpg?scale-down-to=2048",
    title: "Excitement As Signature Bank Launches Operation",
    description: "Signature Bank, on Monday, November 21, 2022 launched its operations into the Nigerian banking sector with unique services that are expected to deepen Nigeria's financial inclusion, targeting over 40 million…"
  },
  {
    id: 4,
    link: "/media-publication/alex-otti-s-signature-bank-will-set-pace-in-innovative-banking",
    url: "https://framerusercontent.com/images/WrTwWGbOfJZ64OYtvuaHRsyEFY.jpg",
    title: "Signature Bank Will Set Pace In Innovative Banking – Business Leaders",
    description: "Abia Freedom Alliance applauds Dr. Alex Otti on the launch of Signature Bank, bringing hope and innovation to Nigeria's banking industry."
  },
];

const Media = () => {
  return (
    <div className="bg-white font-nunitoSans">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader bg="bg-white" textColor1="text-midblack" primaryBtnClassName="bg-hex-2 !py-2.5" />
      <div className="pt-[230px] pb-16 bg-[#f9f5f8]">
        <h1 className="text-center md:text-7xl text-[48px] leading-[1.2em] sm:w-[60%] w-[90%] mx-auto font-bold text-alternate">
          Media & Publications
        </h1>
        <p className="text-center md:text-2xl text-lg md:w-[55%] w-[70%] mx-auto pt-3 text-[#555d6c]">
          Learn about everything, from customer&apos;s success stories to getting informed with our latests news
        </p>
      </div>
      <div className="mx-auto lg:w-[60%] md:w-[90%] sm:w-[60%] w-[90%]">
        <div className="md:py-20 py-10 w-full relative">
        {details.map((detail) => (
          <div key={detail.id} className="flex md:flex-row flex-col mb-10 gap-6 items-center">
            <div className="flex-1">
               <img className="rounded-[10px] w-full h-[300px] object-cover bg-cover" src={detail.url} alt="" />
              </div>
          <div className="flex-1 ">
              <h2 className="text-2xl text-main-3 font-bold">{detail.title}</h2>
              <p className="text-base text-primarygray leading-[2em]">{detail.description}</p>
              <Link to={detail.link}>
                <button className="bg-hex-3 hover:bg-hex-2 transition-all delay-100 duration-1000 ease-in-out mt-3 rounded-[8px] text-white px-5 py-2.5">Read more</button>
            </Link>
          </div>
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
          title="Unlock new financial possibilities with us"
          description="Unlock new financial possibilities with us"
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Media;
