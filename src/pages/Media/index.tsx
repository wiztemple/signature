import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Media = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="pt-[270px] pb-24 bg-[#f9f5f8]">
        <h1 className="text-center text-7xl font-bold text-alternate">
          Media & Publications
        </h1>
        <p className="text-center text-2xl w-[55%] mx-auto pt-3 text-[#555d6c]">
          Learn about everything, from customer&apos;s success stories to getting informed with our latests news
        </p>
      </div>
      <div className="mx-auto w-[58%]">
        <div className="py-20 w-full relative">
        <div className="flex gap-6 items-center">
          <img className="rounded-[10px] w-full h-[300px] object-cover bg-cover" src="https://framerusercontent.com/images/gv0N0KSVgZPb3mDGSqnANBv5I.jpg" alt="" />
          <div className="">
            <h2 className="text-2xl text-main-3 font-bold">Floating the Naira: The impacts and way forward for the economy</h2>
            <p className="text-base text-primarygray leading-[2em]">In a move by the Central Bank to float the currency, they have authorized the Deposit Money Banks to remove the rate cap on the Nigeria Naira.</p>
            <button className="bg-hex-2 mt-3 rounded-[8px] text-white px-5 py-2.5">Read more</button>
          </div>
        </div>
        <div className="flex gap-6 mt-8 items-center">
          <img className="rounded-[10px] w-full h-[300px] object-cover bg-cover" src="https://framerusercontent.com/images/Q7yK6b8OgphElaqypVACvrLz4.jpg" alt="" />
          <div className="">
            <h2 className="text-2xl text-main-3 font-bold">Floating the Naira: The impacts and way forward for the economy</h2>
            <p className="text-base text-primarygray leading-[2em]">In a move by the Central Bank to float the currency, they have authorized the Deposit Money Banks to remove the rate cap on the Nigeria Naira.</p>
            <button className="bg-hex-2 mt-3 rounded-[8px] text-white px-5 py-2.5">Read more</button>
          </div>
        </div>
        <div className="flex gap-6 mt-8 items-center">
            <img className="rounded-[10px] w-[55%] h-[300px] object-cover bg-cover" src="https://framerusercontent.com/images/WrTwWGbOfJZ64OYtvuaHRsyEFY.jpg" alt="" />
          <div className="">
            <h2 className="text-2xl text-main-3 font-bold">Floating the Naira: The impacts and way forward for the economy</h2>
            <p className="text-base text-primarygray leading-[2em]">In a move by the Central Bank to float the currency, they have authorized the Deposit Money Banks to remove the rate cap on the Nigeria Naira.</p>
            <button className="bg-hex-2 mt-3 rounded-[8px] text-white px-5 py-2.5">Read more</button>
          </div>
        </div>
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
