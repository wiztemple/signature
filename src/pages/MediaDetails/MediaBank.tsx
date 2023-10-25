import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import Banner from "../../components/Banner";
import MediaDetailComponent from "../../components/Media";


const MediaBank = () => {
    return (
        <div className="bg-white">
            <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
            <MobileHeader bg="bg-white" textColor1="text-midblack" primaryBtnClassName="bg-hex-2 !py-2.5" />
            <MediaDetailComponent
                img="https://framerusercontent.com/images/WrTwWGbOfJZ64OYtvuaHRsyEFY.jpg?scale-down-to=1024"
                title="Signature Bank Will Set Pace In Innovative Banking – Business Leaders"
                date="Mar 12, 2023"
                link="/media-publication/cbn-provides-further-update-to-the-guidelines-in-the-foreign-exchange-market"
                children={
                    <div className="mt-5">
                        <div className="text-main-4 text-base">
                            <p className="mt-4 leading-[2.1em]">Abia Freedom Alliance (AFA), an association of concerned technocrats, professionals, businessmen, religious leaders and political stakeholders in Abia State, has congratulated the Labour Party (LP) governorship candidate in Abia, Dr. Alex Otti, on the launch of Signature Bank.</p>
                            <p className="mt-4 leading-[2.1em]">AFA says the coming of Signature Bank, from all indications, will bring hope to millions of unbanked and underbanked Nigerians, as well as set the pace for innovation in the banking industry.</p>
                            <p className="mt-4 leading-[2.1em]">Otti, a former Group Managing Director/Chief Executive Officer of the erstwhile Diamond Bank Plc, is the founder and promoter of Signature Bank, which formally opened its doors to business on Monday, November 21, 2022 in Abuja, Nigeria’s Federal Capital Territory.</p>
                            <p className="mt-4 leading-[2.1em]">In a letter dated November 23, 2022 and signed by its Convener, Prince Uzor Nwachukwu, AFA praised Otti for his boldness to re-establish and improve on the success story he began with Diamond Bank, while he was CEO between 2011 and 2014.</p>
                            <p className="mt-4 leading-[2.1em]">Otti was reputed to have taken Diamond Bank from a loss-making position to profitability and one of Nigeria’s eight systemically important banks, according to the Central Bank of Nigeria (CBN), within a space of three years.</p>
                            <p className="mt-4 leading-[2.1em]">He voluntarily resigned in 2014 to contest for the governorship seat of Abia State in 2015. Even though the overwhelming population of Abia residents voted for him, as further attested to by the Court of Appeal, his victory dance was cut short by the judgment of the Supreme Court, which remains controversial.</p>
                            <p className="mt-4 leading-[2.1em]">The letter reads in part: “Our very dear Dr. Alex Otti, we are very glad to felicitate you on the official unveiling and opening of your Bank – Signature Bank Limited.</p>
                            <p className="mt-4 leading-[2.1em]">“We celebrate your unique personage and ideas which you bring to bear on every Project you are associated with.</p>
                            <p className="mt-4 leading-[2.1em]">“The robust history of your studentship in the various institutions you attended, and your career in the Banking sector, all tell tales of excellence and rare giftedness.</p>
                            <p className="mt-4 leading-[2.1em]">“These, and more, are the reasons why we, as distinguished Abia Elites from diverse fields of human endeavour, stand firmly behind you as God sets out to use you to redeem Abia State and liberate her from decades of gross misgovernance and lack of vision.</p>
                            <p className="mt-4 leading-[2.1em]">“We have no doubt whatsoever that this latest golden feather on your already well decorated hat shall glimmer and shine, bringing rare hope to millions of unbanked or underbanked populace, and set the pace in several Banking innovations within the Nigerian/African financial sector.”</p>
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

export default MediaBank;