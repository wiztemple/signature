import Banner from "../../components/Banner";
import Board from "../../components/Board";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import TermsBar from "../../components/TermsBar";

const tabs: { name: string, link: string }[] = [
  { name: 'Commitment to Protect Your Privacy', link: '#privacy' },
  { name: 'Collection of Personal Data', link: '#data' },
  { name: 'Automatic Collection of Non-Personal Information', link: '#information' },
  { name: 'Online Access', link: '#access' },
  { name: 'Lawfulness of Data Processing', link: '#processing' },
  { name: 'Transmission/ Disclosure of Personal Data', link: '#transmission' },
  { name: 'Your Rights', link: '#rights' },
  { name: 'Possible Constraints Associated with Your Request', link: '#request' },
  { name: 'Retention Policy', link: '#policy' },
  { name: 'Privacy Policy Amendment', link: '#amendment' },
  { name: 'Third Party Sites', link: '#sites' },
  { name: 'Cookies', link: '#cookies' },
  { name: 'Contact us', link: '#contact' },
];

const Privacy = () => {
  return (
    <div className="bg-white">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-2.5" bg="bg-white"
      />
      <Board
        title="Data Protection and Privacy Notice"
        description="Your privacy is important"
      />
      <div className="w-[85%] mx-auto">
        <div className="flex lg:flex-row flex-col gap-10 lg:mt-20 mt-10">
          <TermsBar tabs={tabs} />
          <div className="lg:w-[75%]">
            <p className="text-primarygray text-lg leading-[28px]"> Welcome to our Data Protection and Privacy Policy</p>
            <div id="privacy" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Commitment to Protect Your Privacy</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">Signature Bank Limited (referred to in this document as 	&quot;The Bank&quot;, &quot;We&quot;, 	&quot;Our&quot;, 	&quot;Us&quot;) is committed to comply with the national and international data protection regulations as the Bank is aware of the importance of safeguarding the privacy, confidentiality and trust of the Data Subject&apos;s (referred to in this document as 	&quot;Data Subject&quot;, 	&quot;You&quot;, 	&quot;Your&quot;, 	&quot;Yours&quot;) by keeping their personal data, which they entrusted the Bank with, secure against theft damage, abuse, unauthorized access/use or any misuse either knowingly or unknowingly. </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">Data Subjects may be us, our personnel or potential personnel (work candidates), customers or potential customers, suppliers or potential suppliers, payment remitters or payment beneficiaries, or other persons. </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">Personal data as defined under the applied data protection regulations, including the Nigeria Data Protection Regulation (NDPR) and the European Union General Data Protection Regulation (GDPR) and their related terms and conditions and mandatory implementation and any subsequent amendments, is any information, whether processed manually or in electronic format, relating to an identified or identifiable natural person (Data Subject). An identifiable natural person is one whose identity can be ascertained, directly or indirectly, in particular by reference to an identifying identifier such as name, identity number, location data, on-line identity card, or one or more factors relevant to physical, physiological, genetic, psychological, economic, cultural or social identity of that individual. </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">The purpose of this Data Protection and Privacy Notice is to inform you about:</p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">The purpose for which your personal data is collected.  </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">The personal information we may process on you. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">How your personal data is processed (used or shared) the banking operations. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">The process by which you can communicate your requests or complaint with respect to the processing of your personal data. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Why certain non-personal information is collected automatically. </span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-10">Data processing includes any operation or set of operations which is performed on personal data or on sets of personal data, whether or not by automated means, such as the collection, recording, organization, structuring, storage, adaptation or alteration, retrieval, consultation, use, disclosure by transmission, dissemination or otherwise making available, alignment or combination, restriction, erasure or destruction of personal data. Signature Bank is the controller of your personal data, and you can reach us on the contact details stated under the &quot;CONTACT US&quot; menu on our website home page. </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">Our Data Protection and Privacy Policy applies to all Signature Bank branches as well as representatives&apos; offices.</p>
            </div>
            <div id="data" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Collection of Personal Data</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">To address your request or provide quality service, the Bank will collect and process information about direct and indirect parties with whom we work, including information about customers, potential customers, personnel, suppliers, and third-party service providers. </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">The collected information is not only limited to the Bank&apos;s customers. The Bank may need to collect and process information on:  </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2"> Potential parties that we may deal with, such as potential customers, potential suppliers and third-party service providers, and potential candidates applying for a job at Signature Bank, or any other party making a transaction with us. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Parties associated with our customers or potential customers, such as their family members, customers, suppliers, etc. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Parties related to our employees or potential employees such as their family members. </span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-10">The Bank may be required by law to collect, record, use and store information in order to comply with the regulatory requirements. For more information about the collection of online information, please refer to our “Cookies disclaimer”. We treat any information collected in a private and confidential manner.</p>
            </div>
            <div id="information" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Automatic Collection of Non-Personal Information</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">When you access the Bank&apos;s website, we may automatically collect statistical information that is not personally identifiable, such as the type of Internet browser and computer operating system used, name of the domain you used to access the website, number of visits, average time spent and pages viewed. We may use this information and share it with our providers, such as Internet Service Providers(ISPs), web hosting, website developers and designers, to measure the use of the website and improve its performance or content.</p>
            </div>
            <div id="access" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Online Access</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">You can use the Bank&apos;s website without revealing any information about yourself. If for any reasons we ask for your personal data online, it will only be in response to your request for using one of our online provided services or products. Through your online access to the Bank’s website, we may collect and process the following data about you: </p>
              <li className="text-primarygray text-base leading-[2em] mt-10 items-center">
                <span className="-ml-2">Information that you provide by filling in forms on the Bank&apos;s website. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Any up-to-date data information concerning your personal details that you may wish to communicate through the Bank&apos;s website.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2"> Details of your visits to the Bank&apos;s website, including, but not limited to, traffic data, location data, weblogs and other communication data, and the resources that you access. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Any information you communicate to us when reporting a problem with the Bank&apos;s website or when submitting an online complaint or claim.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">When we ask you to complete an online survey or a question that is used for research purposes, in case you agree to respond.</span>
              </li>
            </div>
            <div id="processing" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Lawfulness of Data Processing</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">When processing your data, we will do so in line with the above-mentioned laws and regulations and by abiding by the following principles: </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">We will only collect and use your information where we have lawful grounds and legitimate business reasons to do so. Accordingly, we will process your personal information:  </p>
              <li className="text-primarygray text-base leading-[2em] mt-10 items-center">
                <span className="-ml-2"> To fulfill a contractual agreement with you. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2"> To comply with a legal obligation. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">For our legitimate interest.  </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Where we believe that your information is in the public interest. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2"> To establish, exercise or defend our legal rights. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Where you agree to it. </span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-10">We will collect information from different places including: </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Directly from you.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">From third parties acting on your behalf, such as procurators, lawyers, or other authorized intermediaries. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">From public information. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">From other organization that maintain information retrieved from public records.</span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-10">We will use the collected information for the purpose it was gathered for, and we will inform you prior to utilizing any of the collected data for something else to obtain your relevant permission. In this respect, the Bank will collect on you: </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Personal details such as your name, gender, date, and place of birth.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2"> Contact details including your address, phone number and e-mail.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Identity information including ID Card Information (International passport, national ID card, voter&apos;s card etc.) bank verification number, tax identification number or any other means that contain identifiable data. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Family information including information about your parents, spouses, and children. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Work Information including work address and phone number, current and previous job details. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Financial information such as your source of income and annual income. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Account information including information about the beneficial right owner of the account or other parties that are directly or indirectly associated with the account and its activities. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Other information that you may give us when filling specific forms of communicating with us, whether face to face or by phone, e-mail, mobile or online banking applications or when answering to any of our market research enquiries.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Other information that we may need on you or any other third party to provide you with a specific product or service. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2"> Information that you have asked or allowed us to collect on you from other sources, such as other banks or third parties that you have dealt or still dealing with.  </span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-10">We will update our records when you inform us that your details have changed or require amendment and we will continue to review and assess the quality of our information, yet it is your responsibility to make sure that you give us accurate and up to date information and in case you provide information for another person on your account or associated with your account, you will need to tell them about the terms stated in our Data Protection and Privacy Notice.</p>
              <p className="text-primarygray text-base leading-[2em] mt-10">We will be transparent in our dealings with you, and we will tell you about how we will collect and use your information. For instance, Signature Bank will use your information to: </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Provide you with the products/services that you have requested. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Abide by the applied laws and regulations. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Protect the Bank&apos;s interest against any abuse or misuse of our services and products which include but not limited to: </span>
              </li>
              <p className="text-primarygray text-base leading-[2em]">1. Confirm your identity and address. </p>
              <p className="text-primarygray text-base leading-[2em]">2. Understand how you use your accounts, the transactions you process through us, and their legitimacy. </p>
              <p className="text-primarygray text-base leading-[2em]">3. Identify and investigate unusual transactions processed on your accounts.</p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Carry out your instructions. </span>
              </li>
              <p className="text-primarygray text-base leading-[2em]">Improve our products and services. </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Advertise our products and services to you and others. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Offer you other services that we believe may benefit you unless you ask us not to. </span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-10">Signature Bank will invest all its effort to protect your information by: </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2"> Providing regular and on-going trainings for our staff on their privacy obligations. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Implementing the most appropriate physical and technological security measures to protect your information regardless of where it is held.</span>
              </li>
            </div>
            <div id="transmission" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Transmission/ Disclosure of Personal Data</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">In order to fulfil your request and the Bank&apos;s contractual agreement with respect to specific products or services, we may need to transmit your personal data to other countries or process your data by disclosing information with third party service providers or with Our supervisory authorities or law enforcement agencies without your prior consent in order to comply with legislative and regulatory requirements; including fighting money laundering, terrorism financing laws; and all related predicate offences. </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">Furthermore, and to ensure compliance with the applied regulations and to protect the Bank&apos;s interest, we may share your personal information with third parties including but not limited to our external auditors, legal advisor, or financial or business consultant, or agencies that we deal with to perform background check and market enquiries related to parties we deal with (whether customers, employees, suppliers, consultant, advisors, or third-party service providers). For instance when you request to open an account with Signature Bank or apply for a new product and service, including credit facilities, we may perform credit and identity checks with other parties, such as other banks, credit agencies, information provider agencies or parties that you have informed us that you deal with. </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">When transmitting data to third parties or other countries, we commit: </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">To ensure that the third party has appropriate security measures in place and will contractually require them to comply with our Privacy Principles.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">To ensure that suitable safeguards are in place before personal information is transferred to other countries.</span>
              </li>
            </div>
            <div id="right" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Your Right</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">Under the Privacy Policy, you have the right to ask the Bank about: </p>
              <li className="text-primarygray text-base leading-[2em] mt-10 items-center">
                <span className="-ml-2">The Bank’s obligation to protect your personal data. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">The type of personal data we are collecting. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">The purpose for collecting your personal data. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Other sources from where we could gather data on you.  </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">The need and purpose to disclose your data to third parties to meet our regulatory or contractual requirement and the consequences for not providing the data. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">The countries we may send your data to and the need to do so as well as the applied security measures. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">The applied method to request the Bank to: </span>
              </li>
              <p className="text-primarygray text-base leading-[2em]">1. Use your personal data for specific circumstances.</p>
              <p className="text-primarygray text-base leading-[2em]">2. Rectify inaccurate personal data held about you. </p>
              <p className="text-primarygray text-base leading-[2em]">3. Erase your personal data in certain circumstances, if in compliance with the applied laws. </p>
              <p className="text-primarygray text-base leading-[2em]">4. Provide you with a copy of your personal data in a commonly used electronic format so that you can transfer them to other businesses. </p>
              <p className="text-primarygray text-base leading-[2em]">5. Not to make automated decisions about you based on your personal data that produce significant legal effects.  </p>
              <p className="text-primarygray text-base leading-[2em]">6. Restrict the use of your personal data for specific circumstances. </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">You also have the right to be informed about: </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">The need to process your data for other purposes. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Any personal data breach without undue delay, where that breach is likely to result in a high risk to your rights and freedoms.</span>
              </li>
            </div>
            <div id="requet" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Possible Constraints Associated with Your Request</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">Refusing to provide us with your personal information may drastically affect our ability to assist you with our banking services and it may deny you the right to benefit from specific products or services. Furthermore, it should be noted that your request to rectify, erase, stop an automated decision or restrict the use of your personal data, may have an implication with respect to some or all of the services and products that you are benefiting from and that it is the Bank’s right to unilaterally suspend or terminate the business relationship and any or all of the services/products you are benefiting from as a result of any legal or operational implication that may result due to your request.</p>
              </div>
            <div id="policy" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Retention Policy</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">The Bank will abide by its information retention policies with respect to your personal information and will ensure that they are securely disposed of at the end of the appropriate retention period as described below: </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Information processed on parties who maintained a direct or indirect business relationship with the Bank or made any transaction with the Bank, information processed on the Bank&apos;s personnel, information processed on the Bank&apos;s suppliers and third-party service providers: We will keep the information as long as the relationship is active and for 10 years after the date of terminating the business relationship. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Potential customers who did not maintain any direct or indirect banking relationship with the Bank: We will keep the information for up to 2 years </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Candidates who applied for a job at the Bank: We will keep the information for 1 year if not hired. </span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-10">Where our retention policy is in violation with the laws and regulations applied in the jurisdictions where the Bank is operating or where the data was processed, the Bank shall retain the collected information for the period specified in the regulations applied in that jurisdictions.</p>
            </div>
            <div id="amendment" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Privacy Policy Amendment</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">We constantly review our policies and attempt to keep them up to date. Accordingly, we may change this Data Protection and Privacy Notice from time to time as the need arises. Any changes we may make to this Notice in the future will be posted on this page.</p>
              </div>
            <div id="sites" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Third Party Sites</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">The Bank&apos;s website may contain links to other websites that may be of interest to our website visitors, for example: payment provider, advertising, LinkedIn, Facebook, YouTube, Instagram etc. Please be notified that we are not responsible for the privacy practices of other websites. We encourage you to be aware and read the privacy statements of each website that collects your personally identifiable information.</p>
              </div>
            <div id="cookies" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Cookies</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">For the purpose of enhancing your experience when browsing the Bank&apos;s website, sometimes, we may use cookies to distinguish you from other users. Please refer to our “Cookies Disclaimer” for more details with respect to the cookies that we use and their purpose.</p>
              </div>
            <div id="contact" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Contact us</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">For any request concerning the applied Data Protection and Privacy Notice, please contact our assigned Data Protection Officer on the following e-mail: <a className="text-hex-2" href="mailto:dpo@signaturebankng.com">dpo@signaturebankng.com</a> You can also reach us on the contact details stated under the <span className="text-hex-2">&quot;Contact Us&quot;</span> menu on our homepage (<a className="text-hex-2" href="https://signaturebankng.com">https://signaturebankng.com</a>).</p>
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
}

{/* <div  className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Commitment to Protect Your Privacy</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">The purpose of this Data Protection and Privacy Notice is to inform you about:</p>
              </div>
            
            <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">The personal information we may process on you. </span>
              </li>
            
            */}


export default Privacy;
