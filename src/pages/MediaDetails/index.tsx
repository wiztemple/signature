import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import nextSvg from "../../assets/next.svg"
import Banner from "../../components/Banner";


const MediaDetails = () => {
    return (
        <div className="bg-white">
            <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
            <MobileHeader bg="bg-white" textColor1="text-midblack" primaryBtnClassName="bg-hex-2 !py-2.5" />
            <div className="pt-44 bg-main-8 pb-28">
                <div className="lg:w-[40%] md:w-[60%] w-[90%] mx-auto font-nunitoSans">
                    <h1 className="text-[#111111] text-[40px] leading-[1.2em] tracking-[-1.5px] font-bold text-center">Floating the Naira: The impacts and way forward for the economy</h1>
                    <p className="text-base text-center text-[#999999] leading-[2em] mt-5">Jun 7, 2023</p>
                    <div className="mt-5">
                        <img className="rounded-[20px] w-full h-[450px] object-cover bg-cover" src="https://framerusercontent.com/images/gv0N0KSVgZPb3mDGSqnANBv5I.jpg" alt="" />
                        <div className="text-main-4 text-base">
                            <p className="mt-4">In a move by the Central Bank to float the currency, they have authorized the Deposit Money Banks to remove the rate cap on the Nigeria Naira.</p>
                        <p className="mt-6">This would inadvertently lead to increased exchange rate volatility, thus potentially impacting inflation, and external debt obligations.</p>
                        <p className="mt-6">However, there is a high possibility that it would boost export competitiveness, attract foreign investment, and signal economic reforms, requiring careful policy coordination and social safety nets to mitigate the impact on citizens.</p>
                        <p className="mt-14">Click <a href="https://nairametrics.com/2023/06/15/floating-the-naira-the-implications-and-remedies/"><span className="text-hex-2">HERE</span></a> to read more on this.</p>
                        </div>
                        <button className="bg-hex-2 mt-24 hover:bg-hex-1 duration-1000 delay-100 transition-all ease-in-out py-4 px-7 rounded-[20px] text-2xl flex items-center mx-auto gap-2">Next <img className="w-8 h-8" src={nextSvg} alt="" /></button>
                    </div>
                </div>
            </div>
            <div className="lg:w-[85%] w-[90%] bg-white mx-auto py-14">
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
        </div>
    );
};

export default MediaDetails;