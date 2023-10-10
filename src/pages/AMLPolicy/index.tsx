import Banner from "../../components/Banner";
import Board from "../../components/Board";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import TermsBar from "../../components/TermsBar";

const tabs: { name: string, link: string }[] = [
  { name: 'Objectives of the Policy', link: '#policy' },
  { name: 'Regulatory Framework', link: '#framework' },
  { name: 'Policy Statements', link: '#statements' },
  { name: 'Prohibited Businesses', link: '#business' },
  { name: 'Other Controls', link: '#controls' },
];


const AMLPolicy = () => {
  return (
    <div className="bg-white">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-2.5" bg="bg-white"
      />
      <Board
        title="AML Policy"
        description="Anti-Money Laundering, Combating the Financing of Terrorism and Combating Proliferation Financing (AML/CFT/CPF) Policy Statements.h"
      />
      <div className="w-[85%] mx-auto">
        <div className="flex lg:flex-row flex-col gap-10 lg:mt-20 mt-10">
          <TermsBar tabs={tabs} />
          <div className="lg:w-[75%]">
            <p className="text-primarygray text-lg leading-[28px]">Signature Bank Limited commits to the campaign against Money Laundering (ML), Financing of Terrorism (FT), Proliferation Financing (PF) and all other forms of financial crimes. As a compliant organization, it continually enforces these principles and ensures that all stakeholders (customers, partners, vendors and third parties, employees, Board and Management, etc.) comply with the same laws in all dealings. In line with corporate governance and observance of regulatory directives, the Bank has established policies to guide against these financial crimes and requires total compliance from all stakeholders.</p>
            <div id="policy" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Objectives of the Policy</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">The objectives of Signature Bank AML/CFT/CPF policies are as follows: </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">1. To ensure that Signature Bank is in full compliance with compliance related laws, regulations, and standards.</p>
              <p className="text-primarygray text-base leading-[2em] mt-5">2. To provide clarity on the prevention of money laundering, financing of terrorists and prevention of persons and organisations involved in the proliferation of weapons of mass destruction from raising, moving, and using funds through the Bank’s channels.</p>
              <p className="text-primarygray text-base leading-[2em] mt-5">3. To lay principles for identification of suspicious activities and transactions that may be indicative of money laundering, terrorist financing or proliferation financing and reporting of same to the appropriate authorities. </p>
              <p className="text-primarygray text-base leading-[2em] mt-5">4. To ensure that Signature Bank and its stakeholders do not become victims of money laundering, terrorist financing and proliferation activities, thereby protecting the reputation of all parties.</p>
            </div>
            <div id="framework" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Regulatory Framework</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">The AML/CFT/CPF policies of Signature Bank are formulated in compliance with the under listed laws and regulations amongst others:</p>
              <p className="text-primarygray text-base leading-[2em] mt-10">1. CBN AML/CFT/CPF Regulations 2022 </p>
              <p className="text-primarygray text-base leading-[2em] mt-5">2. Money Laundering (Prevention and Prohibition) Act 2022</p>
              <p className="text-primarygray text-base leading-[2em] mt-5">3. Proceeds of Crime (Recovery and Management) Act, 2022 </p>
              <p className="text-primarygray text-base leading-[2em] mt-5">4. Terrorism (Prevention and Prohibition) Act 2022 </p>
              <p className="text-primarygray text-base leading-[2em] mt-5">5. Banks and Other Financial Institutions Act 2020 </p>
              <p className="text-primarygray text-base leading-[2em] mt-5">6. CBN Anti-Money Laundering and Combating the Financing of Terrorism (Administrative Sanctions) Regulations, 2018.</p>
              <p className="text-primarygray text-base leading-[2em] mt-5">7. CBN (Customer Due Diligence) Regulations, 2023 </p>
            </div>
            <div id="statements" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Policy Statements</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">1. The Board of Directors has a function of oversight of the Bank&apos;s AML/CFT/CPF policies, Management further approves regulatory and internal reports with the assurance that they are rendered timely to the appropriate authorities. </p>
              <p className="text-primarygray text-base leading-[2em] mt-2">2. All other stakeholders – customers, partners, vendors and third parties, employees, etc. – are to familiarise themselves with the contents of these policies as it relates to their respective dealings with the Bank. </p>
              <p className="text-primarygray text-base leading-[2em] mt-2">3. Know Your Customer (KYC) is well established with the complete details of customers on account opening forms and submission of permitted identification documents, at least, during the onboarding stage. While Enhanced Due Diligence (EDD) is conducted for all high-risk accounts (including PEPs and DNFIs), Simplified Due Diligence is carried out for all other accounts. Effective risk assessment is conducted during onboarding stage and at various stages of the customer journey to ensure proper risk profiling. </p>
              <p className="text-primarygray text-base leading-[2em] mt-2">4. Signature Bank has a duty to render the reports listed below in line with the CBN AML/CFT/CPF Regulations 2022: </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Duty to report international transfer of funds and securities of value in excess of US$10,000 or its equivalent to the Central Bank of Nigeria (CBN) and Nigeria Financial Intelligence Unit (NFIU) within 7 days of the transactions. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">Duty to undertake special surveillance of certain transactions (SUSPICIOUS TRANSACTIONS). The Suspicious Transaction Report (STR) is to be sent to the Nigeria Financial Intelligence Unit (NFIU).</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2"> Single transactions, lodgements, or transfer of funds in excess of N5m and N10m (or their equivalent) for an individual and corporate body, respectively to the Nigeria Financial Intelligence Unit (NFIU).</span>
              </li>
            </div>
            <div id="business" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Prohibited Businesses</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">Signature Bank will not conduct business with Blacklisted Countries and Individuals, Shell businesses, Gambling establishments, Casinos, Lottery houses, Dealers in arms and weapons, Dealers in Cryptocurrencies amongst others. Customers are screened against these categories of businesses during onboarding and transaction monitoring.</p>
            </div>
            <div id="controls" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Other Controls</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">In addition to the programme, Signature Bank Limited has institutionalised other measures to safeguard all stakeholders from financial crimes. These include periodic staff and third-party regulatory compliance training, record keeping and retention, data protection, designation of an Executive Compliance Officer, Chief compliance Officer and other compliance resource officers, Board approved policies, and periodic audits / reviews in line with the CBN AML/CFT/CPF Regulations 2022. Signature Bank limited will continually cooperate with and give priority to Regulators and Law Enforcement Agencies (LEAs) as required to ensure compliance with laws and financial safety of our stakeholders.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto py-14 mt-20">
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

export default AMLPolicy;
