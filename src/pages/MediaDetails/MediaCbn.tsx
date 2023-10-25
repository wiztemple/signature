import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import Banner from "../../components/Banner";
import MediaDetailComponent from "../../components/Media";


const MediaCbn = () => {
    return (
        <div className="bg-white">
            <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
            <MobileHeader bg="bg-white" textColor1="text-midblack" primaryBtnClassName="bg-hex-2 !py-2.5" />
            <MediaDetailComponent
                img="https://framerusercontent.com/images/Q7yK6b8OgphElaqypVACvrLz4.jpg"
                title="CBN provides further update to the guidelines in the Foreign Exchange Market."
                date="Jun 7, 2023"
                link="/media-publication/excitement-as-signature-bank-launches-operation"
                children={
                    <div className="mt-5">
                        <div className="text-main-4 text-base">
                            <p className="mt-4 leading-[2.1em]">The Director of Corporate Communications, Dr Isa AbdulMumin, has announced further policy changes in relation to FX which is aimed at promoting transparency, liquidity, and price discovery in the FX market.</p>
                            <p className="mt-4 leading-[2.1em]">He further said that they policy would help to improve FX supply, discourage speculation, enhance customer confidence, and ensure overall stability in the FX market. </p>
                            {/* <p className="mt-6">This would inadvertently lead to increased exchange rate volatility, thus potentially impacting inflation, and external debt obligations.</p>
                            <p className="mt-6">However, there is a high possibility that it would boost export competitiveness, attract foreign investment, and signal economic reforms, requiring careful policy coordination and social safety nets to mitigate the impact on citizens.</p> */}
                            <p className="mt-5">Click <a target="_blank" rel="noopener" href="/excitement-as-signature-bank-launches-operation"><span className="text-hex-2">HERE</span></a> to read more on this.</p>
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
                    buttonName="Open an Account - Coming Soon"
                    url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
                />
            </div>
        </div>
    );
};

export default MediaCbn;