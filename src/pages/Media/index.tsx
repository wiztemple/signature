import { Link } from "react-router-dom";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";

const details: { id: number, title: string, description: string, url: string }[] = [
  {
    id: 1,
    url: "https://framerusercontent.com/images/gv0N0KSVgZPb3mDGSqnANBv5I.jpg",
    title: "Floating the Naira: The impacts and way forward for the economy",
    description: "In a move by the Central Bank to float the currency, they have authorized the Deposit Money Banks to remove the rate cap on the Nigeria Naira."
  },
  {
    id: 2,
    url: "https://framerusercontent.com/images/Q7yK6b8OgphElaqypVACvrLz4.jpg",
    title: "Floating the Naira: The impacts and way forward for the economy",
    description: "In a move by the Central Bank to float the currency, they have authorized the Deposit Money Banks to remove the rate cap on the Nigeria Naira."
  },
  {
    id: 3,
    url: "https://framerusercontent.com/images/gv0N0KSVgZPb3mDGSqnANBv5I.jpg",
    title: "Floating the Naira: The impacts and way forward for the economy",
    description: "In a move by the Central Bank to float the currency, they have authorized the Deposit Money Banks to remove the rate cap on the Nigeria Naira."
  },
];

const Media = () => {
  return (
    <div className="bg-white font-nunitoSans">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader bg="bg-white" textColor1="text-midblack" primaryBtnClassName="bg-hex-2 !py-2.5" />
      <div className="pt-[230px] pb-16 bg-[#f9f5f8]">
        <h1 className="text-center md:text-7xl text-[48px] leading-[1.2em] w-[60%] mx-auto font-bold text-alternate">
          Media & Publications
        </h1>
        <p className="text-center md:text-2xl text-lg md:w-[55%] w-[70%] mx-auto pt-3 text-[#555d6c]">
          Learn about everything, from customer&apos;s success stories to getting informed with our latests news
        </p>
      </div>
      <div className="mx-auto lg:w-[58%] md:w-[90%] w-[60%]">
        <div className="md:py-20 py-10 w-full relative">
        {details.map((detail) => (
          <div key={detail.id} className="flex md:flex-row flex-col mb-10 gap-6 items-center">
          <img className="rounded-[10px] w-full h-[300px] object-cover bg-cover" src={detail.url} alt="" />
          <div className="">
              <h2 className="text-2xl text-main-3 font-bold">{detail.title}</h2>
              <p className="text-base text-primarygray leading-[2em]">{detail.description}</p>
              <Link to={`/media/${detail.id}`}>
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

export default Media;
