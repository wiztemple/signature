import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import Banner from "../../components/Banner";
import MediaDetailComponent from "../../components/Media";


const MediaDetails = () => {
    return (
        <div className="bg-white">
            <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
            <MobileHeader bg="bg-white" textColor1="text-midblack" primaryBtnClassName="bg-hex-2 !py-2.5" />
            <MediaDetailComponent
                img="https://framerusercontent.com/images/gv0N0KSVgZPb3mDGSqnANBv5I.jpg"
                title="Floating the Naira: The impacts and way forward for the economy"
                date="Jun 7, 2023"
                link="/media-publication/cbn-provides-further-update-to-the-guidelines-in-the-foreign-exchange-market-1"
                children={
                    <div className="mt-5">
                        <div className="text-main-4 text-base">
                            <p className="mt-4">In a move by the Central Bank to float the currency, they have authorized the Deposit Money Banks to remove the rate cap on the Nigeria Naira.</p>
                            <p className="mt-6">This would inadvertently lead to increased exchange rate volatility, thus potentially impacting inflation, and external debt obligations.</p>
                            <p className="mt-6">However, there is a high possibility that it would boost export competitiveness, attract foreign investment, and signal economic reforms, requiring careful policy coordination and social safety nets to mitigate the impact on citizens.</p>
                            <p className="mt-14">Click <a target="_blank" rel="noopener" href="https://nairametrics.com/2023/06/15/floating-the-naira-the-implications-and-remedies/"><span className="text-hex-2">HERE</span></a> to read more on this.</p>
                        </div>
                    </div>
                } />
            <div className="lg:w-[85%] w-[90%] bg-white mx-auto py-14">
                <Banner
                    bannerBg="bg-bannerbg"
                    buttonStyle="bg-hex-2 text-white"
                    titleStyle="text-alternate w-[90%]"
                    imgContainer=""
                    textColor="text-primarygray"
                    title="Open an account with us in a few simple steps."
                    description="Open an account with us and enjoy the benefits of personalized banking services."
                    buttonName="Open an Account"
                    url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
                />
            </div>
        </div>
    );
};

export default MediaDetails;