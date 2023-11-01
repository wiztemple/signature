import Banner from "../../components/Banner";
import Board from "../../components/Board";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import TermsBar from "../../components/TermsBar";

const tabs: { name: string, link: string }[] = [
  { name: 'What are cookies?', link: '#cookies' },
  { name: 'How and why does Signature use them?', link: '#them' },
  { name: 'What type of cookies does Signature Bank use?', link: '#use' },
  { name: 'Cookies used on our websites', link: '#websites' },
  { name: 'How can I change my cookie settings?', link: '#settings' },
  { name: 'Legal Notice Update ', link: '#updates' },
];

const Cookies = () => {
  return (
    <div className="bg-white font-nunitoSans">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-2.5" bg="bg-white"
      />
      <Board
        title="Cookie Policy"
        description="Signature Bank's cookie policy"
      />
      <div className="w-[85%] mx-auto scroll-smooth">
        <div className="flex lg:flex-row flex-col gap-10 lg:mt-20 mt-10">
          <TermsBar tabs={tabs} />
          <div className="lg:w-[75%]">
            <p className="text-primarygray text-lg leading-[28px]">Thank you for visiting https://signaturebankng.com/ ("Website"). This cookie notice applies to the Website, any website or branded pages on third party platforms (e.g. YouTube and Facebook) and applications accessed or used through such websites or platforms which are operated by or on behalf of Signature Bank Limited. By using a Signature Bank Site, you are consenting to our use of cookies and other tracking technology in accordance with this notice. If you do not agree to our use of cookies and other tracking technology in this way, you should set your browser settings accordingly or not use the Signature Bank Site. If you disable cookies that we use, this may impact your user experience while on the Signature Bank Site. When using a mobile device to connect to the internet, you should also refer to the privacy notice of the specific App you are using to understand its specific data collection practices.</p>
            <div id="cookies" className="mt-10 scroll-smooth">
              <h2 className="text-[30px] text-black font-bold">What are cookies?</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">Cookies are small text files that are placed on your computer by websites that you visit. They are widely used in order to make websites work, or work more efficiently, as well as to provide information to the owners of the site. See below for details on what information is collected by cookies and how we use that information. For more information about the kind of data we collect, please read our Privacy Notice:
                http://signaturebankng.com/wp-content/uploads/2022/11/Signature-BankLimited-Data-Protection-and-Privacy-Notice.pdf</p>
            </div>
            <div id="them" className="mt-10 scroll-smooth">
              <h2 className="text-[30px] text-black font-bold">How and why does Signature use them?</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">
                Signature Bank uses cookies to gain a better understanding on how visitors use this website. Cookies help us tailor Signature Bank websites to your personal needs, to improve their user-friendliness, gain customer satisfaction feedback on our websites (through designated partners) and to communicate to you elsewhere on the web.
              </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">
                To enable this some cookies are applied when you enter our sites (see links for various Signature Bank sites for further details). Signature Bank keeps all the information collected from cookies in a non–personally identifiable format. Signature Bank cookies located on your computer do not retain your name or your IP address.
              </p>
            </div>
            <div id="use" className="mt-10 scroll-smooth">
              <h2 className="text-[30px] text-black font-bold">What type of cookies does Signature Bank use?</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">The following types of cookies are used on Signature Bank websites.</p>
              <li className="text-primarygray text-base leading-[2em] items-center mt-10 font-bold">
                <span className="-ml-2">Necessary cookies </span>
              </li>
              <p className="text-primarygray text-base leading-[2em]">
                These are cookies that are strictly necessary for the operation of a website. Without these cookies, this website won&apos;t work properly. Accordingly, we are not asking you for your consent for those cookies. For all other cookies your informed consent is required. Session cookies Session cookies are temporary cookie files which are erased when you close your browser. When you restart your browser and go back to the site that created that cookie, the website will treat you as a new visitor.
              </p>
              <li className="text-primarygray text-base leading-[2em] items-center mt-10 font-bold">
                <span className="-ml-2">Functional/Persistent Cookies </span>
              </li>
              <p className="text-primarygray text-base leading-[2em]">
                These are cookies which are set up to improve the functionality of the website. For example, cookies that remember the content you previously viewed on this website or the email address and password you provided when registering during an earlier visit to this website. Cookies may also remember services you have previously requested for while visiting a Signature Bank website. Using Functional cookies, therefore, may allow us to serve you content tailored to your interests and save you the time of having to re-register or re-enter information when you re-visit this website or try to access certain member-only sections. We may also use Cookies to lockout underage users from certain activities.
              </p>
              <li className="text-primarygray text-base leading-[2em] items-center mt-10 font-bold">
                <span className="-ml-2">Cookies that send information to us </span>
              </li>
              <p className="text-primarygray text-base leading-[2em]">
                These are the cookies that we set on a Signature Bank Site and they can only be read by that site. This is known as a "First Party" cookie. We also place cookies on brand ads which are placed on other websites owned by third parties (e.g. Facebook). We obtain information via those cookies when you click on or interact with the advertisement. In this situation the brand is placing a “Third Party” cookie. The brand may use the information obtained by these cookies to serve you with advertising that is relevant and of interest to you based on your past online behaviour.
              </p>
              <li className="text-primarygray text-base leading-[2em] items-center mt-10 font-bold">
                <span className="-ml-2"> Cookies that send information to other companies </span>
              </li>
              <p className="text-primarygray text-base leading-[2em]">
                These are cookies that may be set on a Signature Bank Site by other companies (e.g. Facebook or advertisers). They may use the data collected from these cookies to anonymously target advertising to you on other websites, based on your visit to this Website. For example, if you use a social widget (e.g. the Facebook icon) on the Website, it will record your “share” or “like”. Facebook (as the company setting the cookie) will collect the data. This is known as a “Third Party&apos;&apos; cookie.
              </p>
              <li className="text-primarygray text-base leading-[2em] items-center mt-10 font-bold">
                <span className="-ml-2">Demographics and Interest Reporting </span>
              </li>
              <p className="text-primarygray text-base leading-[2em]">
                Our websites may use Google Analytics Demographics and Interest Reporting or other tools to improve advertising. Some common applications are to target advertising based on what&apos;s relevant to a user, to improve reporting on campaign performance, and to avoid showing ads the user has already seen. This is done using something called the DoubleClick cookie. If you don’t want your information collected in this way, you can:
              </p>
              <p className="text-primarygray text-base leading-[2em]">1. use Google&apos;s <a className="text-hex-2 hover:text-primaryyellow" href="https://www.google.com/search?q=Ad+Settings&rlz=1C5CHFA_enNG984NG984&sourceid=chrome&ie=UTF-8">Ad Settings</a> to opt out of Display Advertising; or </p>
              <p className="text-primarygray text-base leading-[2em]">2. use Google&apos;s <a className="text-hex-2 hover:text-primaryyellow" href="https://www.google.com/search?q=Browser+add-on&rlz=1C5CHFA_enNG984NG984&sourceid=chrome&ie=UTF-8">Browser add-on</a> to opt out of Google Analytics  </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">DoubleClick cookies contain no personally identifiable information. Sometimes the DoubleClick cookie will contain an additional identifier that is similar in appearance to the cookie ID and is used to identify an ad campaign to which a user was exposed previously. We will not use any information reported by Google Analytics Demographics and Interest Reporting to identify any individual user of our site. </p>
              <p className="text-primarygray text-base leading-[2em] mt-10"><a className="text-hex-2 hover:text-primaryyellow" href="https://www.google.com/search?q=Find+out+more+about+Google+Analytics+Demographics+and+Interest+Reporting.&rlz=1C5CHFA_enNG984NG984&sourceid=chrome&ie=UTF-8">Find out more about Google Analytics Demographics and Interest Reporting.</a></p>
            </div>
            <div id="websites" className="mt-10 scroll-smooth">
              <h2 className="text-[30px] text-black font-bold">Cookies used on our websites</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">If you wish to learn more about the specific cookies used on Signature Bank websites please visit the following pages: <a className="text-hex-2 hover:text-primaryyellow" href="https://signaturebankng.com"> https://signaturebankng.com</a></p>
            </div>
            <div id="settings" className="mt-10 scroll-smooth">
              <h2 className="text-[30px] text-black font-bold">How can I change my cookie settings?</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">Please ensure that your computer setting reflects whether you are happy to accept cookies or not. You can set your browser to warn you before accepting cookies, or you can simply set it to refuse them, although you may not have access to all the features of this website if you do so. See your browser 'help' button for how you can do this. You do not need to have cookies on to use or navigate through many parts of this and other Signature Bank websites. Remember that if you use different computers in different locations, you will need to ensure that each browser is adjusted to suit your cookie preferences. To delete the cookies and all information gathered, and otherwise change your cookie settings please click the following link. Change Cookie Settings The Site allows you to choose NOT to allow the services which create and use these cookies to run, although you may not have access to all the features of the Site if you do so. To do this now, just scroll up the page and click on the "Change Cookie Settings" link higher up.</p>
            </div>
            <div id="updates" className="mt-10 scroll-smooth">
              <h2 className="text-[30px] text-black font-bold">Legal Notice Update </h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">We reserve the right to make any changes and corrections to this notice. Please refer to this page from time to time to review these and new additional information.</p>
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
          buttonName="Open an Account"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Cookies;
