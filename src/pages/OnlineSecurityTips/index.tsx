import Banner from "../../components/Banner";
import Board from "../../components/Board";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import TermsBar from "../../components/TermsBar";

const tabs: { name: string, link: string }[] = [
  { name: 'ATM SAFETY TIPS', link: '#tips' },
  { name: 'ONLINE BANKING SATEFY TIPS', link: '#online' },
  { name: 'USE STRONG AND UNIQUE PASSWORDS', link: '#passwords' },
  { name: 'USE MULTI-FACTOR AUTHENTICATION', link: '#authentication' },
  { name: 'KEEP PERSONAL CONTACT INFORMATION CURRENT', link: '#current' },
  { name: 'BE WARY OF FREE WI-FI', link: '#wifi' },
  { name: 'BEWARE OF PHISHING ATTACKS', link: '#attacks' },
  { name: 'USE ANTIVIRUS SOFTWARE AND KEEP APPS AND SOFTWARE CURRENT', link: '#software' },
];

const OnlineSecurityTips = () => {
  return (
    <div className="bg-white font-nunitoSans">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-2.5" bg="bg-white"
      />
      <Board
        title="Online Security Tips"
        description="Stay secure while you connect with us digitally"
      />
      <div className="w-[85%] mx-auto">
        <div className="flex lg:flex-row flex-col gap-10 lg:mt-20 mt-10">
          <TermsBar tabs={tabs} />
          <div className="lg:w-[75%]">
            <p className="text-primarygray text-lg leading-[28px]">Signature Bank Limited is continuously improving and implementing security enhancements to ensure the integrity of our Online Banking platform. Our aim is to secure the confidentiality of our customer’s account and personal data. While we work to ensure that a secure environment is provided for Online Banking, there are steps that Online Banking clients should adhere to, in order to protect confidential information while performing financial transactions online:</p>
            <div id="tips" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">ATM SAFETY TIPS</h2>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Keep your card in a safe place to avoid damage or theft.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Memorize your Personal Identification Number (PIN). Never write the PIN down on anything in your wallet or on the card. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Register for Verified by Visa if you use a Vpay or Visa card. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Ensure you activate secure by Mastercard if you request a Mastercard from us. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">When selecting a PIN, avoid numbers and letters that relate to your personal information. For example, do not use your initials, birthday, telephone etc.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Immediately report a lost or stolen card. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Observe your surroundings before using an ATM. If you observe or sense suspicious persons or circumstances, do not use the machine at that time.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Visually inspect the ATM for possible skimming devices or strange objects. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Shield the screen and keyboard so anyone waiting to use the ATM cannot see you enter your PIN or transaction amount. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Upon completion of your transactions, please put your cash, card, and receipt away immediately. 
If you see anyone or anything suspicious, cancel your transaction and leave immediately.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">If anyone follows you after making a transaction, go to a crowded, well-lit area and call the police. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Do not leave your car unlocked or engine running when you get out to use an ATM.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">To help guard against fraud, keep your ATM receipts until you check them against your statement.</span>
              </li>
            </div>
            <div id="online" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">ONLINE BANKING SATEFY TIPS</h2>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Use only secure internet browsers and links (https://) that allow secure transmission of data when logging in. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Clear the browser cache before you commence an online banking session. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Set transaction limit on your account, based on your need. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Review account balances and detail transactions regularly (preferably daily) to confirm payment and other transaction data and immediately report any suspicious transactions. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Take advantage of, and regularly view and review system alerts such as balance, transfer, and password change alerts. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Never leave a computer unattended while using online banking or conducting online transactions. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Never conduct banking transactions while multiple browsers are open on your computer. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">When you have completed a transaction, ensure you log off and close browser.</span>
              </li>
            </div>
            <div id="passwords" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">USE STRONG AND UNIQUE PASSWORDS</h2>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Do not use dictionary words. Use letters (both upper and lower case), numbers, and special characters. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Do not use letters and numbers in sequence (no “abc”, “567”, etc.). </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Use eight (8) or more characters. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Do not write passwords down. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Change passwords often and anytime there is a security breach. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Do not share, reuse, or repeat passwords.</span>
              </li>
            </div>
            <div id="authentication" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">USE MULTI-FACTOR AUTHENTICATION</h2>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Multi-Factor Authentication (also called two-factor authentication) requires a second credential to verify your identity (for example, Signature Bank Token Application). </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Obtain and activate Signature Bank Token (Software or hardware).</span>
              </li>
              </div>
            <div id="current" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">KEEP PERSONAL CONTACT INFORMATION CURRENT</h2>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Update your contact information when it changes, so you can be reached if there is a problem. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Select multiple communication options.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Sign up for account activity notifications.</span>
              </li>
              </div>
            <div id="wifi" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">BE WARY OF FREE WI-FI</h2>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Free Wi-Fi networks, such as the public Wi-Fi available at airports, hotels, or coffee shops pose security risks that may give criminals access to your personal/banking information. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">A better option is to use a protected cell phone, home, or office network.</span>
              </li>
              </div>
            <div id="attacks" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">BEWARE OF PHISHING ATTACKS</h2>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Phishing attacks aim to trick you into sharing your passwords, account numbers, and sensitive information, and gain access to your accounts. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">A phishing message may look like it comes from a trusted organization, to lure you to click on a dangerous link or pass along confidential information.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Never respond to an email request for personal or account information, even if it appears to be from a trusted source.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Signature Bank will never ask for your password, account number, personal information, answers to security questions, PIN or any other confidential information. </span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-10">Common warning signs of phishing attacks include: </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">A text message or email that you did not expect or that comes from a person or service you do not know or use. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Spelling errors or poor grammar. <br /> Mismatched links (a seemingly legitimate link redirects you to an unexpected address). </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2"> Often, but not always, you can spot this by hovering your mouse over the link without clicking on it, so that your browser displays the actual destination.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Shortened or odd links or addresses. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">An email request for your account number or personal information.</span>
              </li>
              <p className="text-primarygray text-base leading-[2em]">Offers or messages that seem too good to be true, express great urgency, or are aggressive and scary. </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Strange or mismatched sender addresses.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Anything else that makes you feel uneasy.</span>
              </li>
            </div>
            <div id="software" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">USE ANTIVIRUS SOFTWARE AND KEEP APPS AND SOFTWARE CURRENT</h2>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Make sure that you have trustworthy antivirus software installed and updated to protect your computers and mobile devices from viruses and malware. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Keep all your software up to date with the latest patches and upgrades. If your card is stolen or missing, contact our card services team immediately on </span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-7">Debit Cards : 0700-00727272</p>
              <p className="text-primarygray text-base leading-[2em]">Credit Cards: 0700-00727272</p>
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
  )
}

{/* <div  className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Commitment to Protect Your Privacy</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">The purpose of this Data Protection and Privacy Notice is to inform you about:</p>
              </div>

              <div  className="mt-10">
              <h2 className="text-[30px] text-black font-bold">ATM SAFETY TIPS</h2>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Keep your card in a safe place to avoid damage or theft.</span>
              </li>
              </div>
            
            <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">The personal information we may process on you. </span>
              </li>
            
            */}
export default OnlineSecurityTips;
