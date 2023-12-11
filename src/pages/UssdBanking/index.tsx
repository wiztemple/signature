import React from 'react';
import Header from '../../components/Header';
import MobileHeader from '../../components/MobileHeader';
import Footer from '../../components/Footer';
import Banner from '../../components/Banner';
import TermsBar from '../../components/TermsBar';
import CustomBanner from '../../components/CustomBanner';

const tabs: { name: string, link: string }[] = [
  { name: 'Account opening', link: '#account' },
  { name: 'Registration on USSD (for existing customers)', link: '#register' },
  { name: 'Transfers (Interbank & Intrabank)', link: '#transfer' },
  { name: 'Balance Enquiry', link: '#balance' },
  { name: 'Airtime and Data', link: '#airtime' },
  { name: 'Bills Payment', link: '#bill_payment' },
  { name: 'PIN Reset', link: '#pin_reset' },
];

const USSDBanking: React.FC = () => {
    return (
        <div className='bg-white font-nunitoSans'>
            <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
            <MobileHeader primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-2.5" bg="bg-white" />
            <CustomBanner
                extraClass="md:h-[260px] h-auto"
                overlay_height='300px'
                show={false}
                display="hidden"
                scaling=""
                heroBg="white"
                bannerWidth="lg:w-[62%] sm:w-[80%] w-full"
                textWidth="lg:w-[85%]"
                top=" bottom-0"
                bg="bg-hex-4"
                color="hex-2"
                subColor="alternate"
                src="https://framerusercontent.com/images/q94EFo9FStCjRZHXa2or6arrnPs.jpg"
                alt="Lady using signature bank personal banking"
                dropFilter="blur(15px)"
                lineargradient="linear-gradient(180deg,rgba(249,245,248,0) 0%,#F9F5F8 100%)"
                title1="Bank on-the-go"
                description="With *647#; transfer money, check balance, buy airtime, pay bills and lots more anytime and anywhere, using any type of phone without need for internet connectivity or data."
            />
            <div className='bg-main-13 py-14'>
                <div className='w-[85%] mx-auto md:flex'>
                    <div className='w-full'>
                        <h2 className='text-[40px] font-bold leading-[1.2em] w-full tracking-[-0.8px] text-hex-2'>*647# is a quick, convenient, secure and easy way of banking</h2>
                        <p className='text-lg text-hex-9 leading-7 md:w-[70%] mt-3'>With any type of mobile phone, you are just one dial away from enjoying the 647 lifestyle.
                            Just dial *647# to bank without limits!</p>
                    </div>
                    <div className="flex relative justify-center w-full md:mt-0 mt-14">
                        <div className="relative">
                            <img
                                className="md:w-[60px] md:h-[60px] w-[50px] h-[50px] absolute -mt-5 -left-10"
                                src="https://framerusercontent.com/images/LcyrFPA26JWdNobi5ZaWYeuZgA.png"
                            />
                            <img
                                className="md:w-[141px] md:h-[250px] h-[200px] hover:scale-105 md:-ml-0 -ml-2 transition-all duration-200 delay-150 ease-in-out"
                                src="https://framerusercontent.com/images/Q3Z59fcA1YlyPzIjt7ADmzYnAZ4.png?scale-down-to=512"
                            />
                        </div>
                        <img
                            className="md:w-[125px] md:h-[250px] h-[200px] z-40 hover:scale-105 md:-ml-1 -ml-4 transition-all duration-200 delay-150 ease-in-out"
                            src="https://framerusercontent.com/images/p9WiW5JMIQep3kcBIAHTOM6aa8g.png?scale-down-to=512"
                        />
                        <div className="relative">
                            <img
                                className="md:w-[50px] md:h-[50px] w-[40px] h-[40px] absolute md:-right-12 -right-8 hover:scale-105 transition-all duration-200 delay-150 ease-in-out"
                                src="	https://framerusercontent.com/images/YPGmOKb8M6uMoz0bP9XXR91j23E.png"
                            />
                            <img
                                className="md:w-[127px] md:h-[250px] h-[200px] -ml-2 hover:scale-105 transition-all duration-200 delay-150 ease-in-out"
                                src="https://framerusercontent.com/images/UKjzIgRxSraxI4Qtnjw1OpDdjh4.png?scale-down-to=512"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-[85%] mx-auto'>
                <div className="flex lg:flex-row flex-col gap-10 lg:mt-20 mt-10">
                    <TermsBar color='text-primaryblack' title='Features' tabs={tabs} />
                    <div className="lg:w-[75%]">
                        <div id='account'>
                            <h2 className="text-[30px] text-black font-bold">Account opening</h2>
                            <p className="text-primarygray text-base leading-[2em] mt-2 mb-4">This service enables customers with smart or feature phones to open a Signature Bank savings account by dialling the USSD string and following the screen prompts.</p>
                            <strong className='text-main-4 text-base leading-[2em]'>Requirement:</strong>
                            <p className='text-primarygray text-base leading-[2em] mt-4'>Customers will provide their BVN, DOB and other personal data as requested by the service to open an account.</p>
                        </div>
                        <div id='register' className='mt-8'>
                            <h2 className="text-[30px] text-black font-bold">Registration on USSD (for existing customers)</h2>
                            <p className="text-primarygray text-base leading-[2em] mt-2 mb-4">Existing Customers can register on the USSD platform by dialling the string and choosing the registration option.</p>
                            <p className='text-main-4 text-base leading-[2em]'>Requirement:</p>
                            <p className='text-primarygray text-base leading-[2em] mt-4'>Customers will need to provide their Signature Bank individual account number and fill in other necessary fields as requested by the service to register successfully.</p>
                        </div>
                        <div id='transfer' className='mt-8'>
                            <h2 className="text-[30px] text-black font-bold">Transfers (Interbank & Intrabank)</h2>
                            <p className="text-primarygray text-base leading-[2em] mt-2 mb-8">We are the owner or the licensee of all intellectual property rights on our Website (including but not limited to the listed services and other intellectual property rights offered on or via the Website) and in the material published on it. These works are protected by copyright laws, and treaties around the world. All such rights are reserved. </p>
                            <p className='text-main-4 text-base leading-[2em]'>You may print, , copy and may download extracts, of any page(s) from our website for your personal reference and you may draw the attention of others within your organization to material posted on our website.</p>
                            <p className='text-primarygray text-base leading-[2em] mt-4'>You must not modify the paper or digital copies of any materials you have printed , copied or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text. </p>
                            <p className='text-primarygray text-base leading-[2em] mt-4'>Our status (and that of any identified contributors) as the authors of material on our website must always be acknowledged.
                                You must not use any part of the materials on our website for commercial purposes without obtaining a license to do so from us or our licensors (where applicable).</p>
                            <p className='text-primarygray text-base leading-[2em] mt-4'>If you print, copy, or download any part of our website in breach of these Terms of Website Use, your right to use our website will cease immediately and you must, at our option, return or destroy any copies of the materials you have made whether modified or unmodified.</p>
                        </div>
                        <div id='balance' className='mt-8'>
                            <h2 className="text-[30px] text-black font-bold">Balance Enquiry</h2>
                            <p className="text-primarygray text-base leading-[2em] mt-2 mb-8">We are the owner or the licensee of all intellectual property rights on our Website (including but not limited to the listed services and other intellectual property rights offered on or via the Website) and in the material published on it. These works are protected by copyright laws, and treaties around the world. All such rights are reserved.</p>
                            <p className='text-main-4 text-base leading-[2em]'>You may print, , copy and may download extracts, of any page(s) from our website for your personal reference and you may draw the attention of others within your organization to material posted on our website.</p>
                            <p className='text-primarygray text-base leading-[2em] mt-4'>You must not modify the paper or digital copies of any materials you have printed , copied or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text. </p>
                            <p className='text-primarygray text-base leading-[2em] mt-4'>Our status (and that of any identified contributors) as the authors of material on our website must always be acknowledged.
                                You must not use any part of the materials on our website for commercial purposes without obtaining a license to do so from us or our licensors (where applicable).</p>
                            <p className='text-primarygray text-base leading-[2em] mt-4'>If you print, copy, or download any part of our website in breach of these Terms of Website Use, your right to use our website will cease immediately and you must, at our option, return or destroy any copies of the materials you have made whether modified or unmodified.</p>
                        </div>
                        <div id='airtime' className='mt-10'>
                            <h2 className="text-[30px] text-black font-bold">Airtime and Data</h2>
                            <p className="text-primarygray text-base leading-[2em] mt-2 mb-4">Registered customers can buy Airtime and Data using the USSD service by dialling the string and choosing the Airtime and Data option and following the screen prompts to input necessary parameters.</p>
                            <strong className='text-main-4 text-base leading-[2em]'>Requirement:</strong>
                            <p className='text-primarygray text-base leading-[2em] mt-4'>Customers can only buy airtime and data using the USSD service after they have registered successfully on the platform, their account is funded and not on PND.</p>
                        </div>
                        <div id='bill_payment' className='mt-10'>
                            <h2 className="text-[30px] text-black font-bold">Bills Payment</h2>
                            <p className="text-primarygray text-base leading-[2em] mt-2 mb-4">Registered customers can pay for different utility bills (DSTV, GOTV, Electricity etc) using the USSD service by dialling the string and choosing the Bills payment option and following the screen prompts to input necessary parameters.</p>
                            <strong className='text-main-4 text-base leading-[2em]'>Requirement:</strong>
                            <p className='text-primarygray text-base leading-[2em] mt-4'>Customers can only make bills payment using the service after they have registered successfully on the platform, their account is funded and not on PND.</p>
                        </div>
                        <div id='pin_reset' className='mt-10'>
                            <h2 className="text-[30px] text-black font-bold">PIN Reset</h2>
                            <p className="text-primarygray text-base leading-[2em] mt-2 mb-4">Registered customers can reset their transaction PIN on USSD service by dialling the string and choosing the PIN reset option and following the screen prompts to input necessary parameters.</p>
                            <strong className='text-main-4 text-base leading-[2em]'>Requirement:</strong>
                            <p className='text-primarygray text-base leading-[2em] mt-4'>Customers can only reset their USSD transaction PIN after they have registered successfully on the platform, PIN change can be done using Card (Card option is coming soon) or their DOB and other required parameters.</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="lg:w-[85%] w-[90%] mx-auto py-20">
                <Banner
                    bannerBg="bg-bannerbg"
                    buttonStyle="bg-hex-2 text-white"
                    titleStyle="text-alternate w-[70%]"
                    imgContainer="md:w-[45%] w-full"
                    textColor="text-primarygray"
                    title="Take the bold step to Financial buoyancy"
                    description="Open a Signature Bank account in few steps"
                    buttonName="Open an Account"
                    url="https://framerusercontent.com/images/XuTTuxNqq78uVLDqe5bmNkmn7hE.png"
                />
            </div>
            <Footer />
        </div>
    );
};

export default USSDBanking;