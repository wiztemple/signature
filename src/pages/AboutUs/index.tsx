import { useState } from "react";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";
import '../../App.css';
import MobileHeader from "../../components/MobileHeader";
import ZoomOnScroll from "../../utils/ZoomOnScroll";
import AboutModal from "../../modal/AboutUs";


const cores: { url: string, title: string }[] = [
  { url: 'https://framerusercontent.com/images/kdWsYkM6W1ZYYue2sN2HV0eZrM.png', title: 'Professionalism' },
  { url: 'https://framerusercontent.com/images/08l356m0NnV0oaxhH7WmxRuqk.png', title: 'Audacity' },
  { url: 'https://framerusercontent.com/images/tuKO3HicS4R6iPXfgGFr9tPBTc.png', title: 'Creativity' },
  { url: '	https://framerusercontent.com/images/Z4NOytugSYGsrckr0AYs8OjFA0.png', title: 'Trust' },
  { url: 'https://framerusercontent.com/images/NWrEQPq8NCfSfgvCLUfwRybYxac.png', title: 'Service Excellence' }
];

const boardOfDirectors: { url: string, name: string, title: string, alt: string, description: string }[] = [
  { url: 'https://framerusercontent.com/images/yH1mKQmkGuxeLdET4bX3EBOkpz8.jpg?scale-down-to=1024', name: 'Dr. Mutiu Sunmonu, CON', alt: 'Dr. Mutiu Sunmonu, CON', description: "Dr. Sunmonu, the current Chancellor of McPherson University, graduated from the University of Lagos with a first-class degree in Mathematics and Computer Science. He started his career in Shell Petroleum Development Company of Nigeria Limited (SPDC) in August 1978 as a Computer Programmer/Business Analyst.   He has served in various capacities in Shell both in Nigeria and abroad. On January 1, 2008 he was appointed the Managing Director of SPDC and Regional Vice President Production. On January 1, 2010 Dr. Sunmonu became the Country Chair, Shell Companies in Nigeria; he combined the portfolio with his role as Managing Director of the Shell Petroleum Development Company (SPDC) and Vice President, Production, Sub-Saharan Africa. Dr. Sunmonu retired from Shell Petroleum Development Company (SPDC) in 2015 after 36 years of service.   In 2014, Dr. Sunmonu was awarded the National Honour of the Commander of the Order of the Niger (CON) by the Government of the Federal Republic of Nigeria in recognition of his contribution to the Oil & Gas and business sectors in Nigeria. Dr. Sunmonu currently chairs the board of several companies across various industry sectors including Julius Berger Plc., Coronation Insurance Plc., Petralon Energy Ltd, SanLeon Energy (UK) Plc, ChampionX Nigeria (An Ecolab Company), Imperial Homes Mortgage Bank Ltd and The Alpha Mead Group. He is also a Non-Executive Director of Unilever Nigeria Plc and Northridge Engineering Ltd, where he continues to provide leadership guidance across the operations, regulatory/statutory compliance and external relationship management of these companies. Dr. Sunmonu is also the Founder of the Mutiu Sunmonu Foundation with a passion for educational advancement, corporate governance, and entrepreneurship. In his spare time, Dr. Sunmonu loves to read and provide mentorship to upcoming young business leaders.", title: 'Chairman', },
  { url: 'https://framerusercontent.com/images/lxSPT1ijdqOEWCVLJb0LYL2G7E.jpg?scale-down-to=1024', name: 'Mr. Alfred Temile', alt: 'Mr. Alfred Temile', description: "Mr. Temile is an entrepreneurial driven business executive, with over 28 years of Industry-leading expertise. He has established numerous ventures in domestic and international marketplaces. He is renowned for facilitating and building world-class management and service delivery teams, with a specialty in both start-up and scaled growth stages in the Oil and Gas Industry. He has proven networking skills, building fruitful partnerships with hundreds of clients and delivering multimillion dollar bottom-line growth. Mr. Temile has executed and safely delivered ground-breaking projects in record time within the international oil and gas industry. He is a trailblazer in the indigenous oil and gas space. His areas of core competence include company management, capital raising, strategic oversight, product development, leadership & teambuilding, market insights, sales development and public relations to mention a few. He holds a BSc in Political Science from the University of Ibadan and an MBA from the University of Benin.", title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/39xDqtr7ksxq5CbdEbHYHCVo.jpg?scale-down-to=1024', name: 'Mr. Shedrack Odoh', alt: 'Mr. Shedrack Odoh', description: "Mr. Odoh began his career with Citibank in June 1990 at a foundational level. Career moves saw him work in the Central Bank of Nigeria (CBN) as an Assistant Manager, United Bank for Africa as a Senior Manager in the Treasury department and Mobil Producing Nigeria where he served in various capacities including Logistics and Business Services Manager up till 2016. He joined Morningside Group of Companies in September 2016 as an Executive Director. He holds a BSc from the University of Port Harcourt and an MBA from the University of Lagos.", title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/k2GWJF57CeJLzcLDzXdujmfI.jpg?scale-down-to=1024', name: 'Mrs. Chigorom Kalu, CON', alt: 'Mrs. Chigorom Kalu', description: "Mrs. Kalu is a result-focused executive with over twenty-five (25) years’ experience in leadership and management positions with track record of successfully employing best practices that improve efficiency and reduce operating cost, while achieving productivity. She has a passion for properties, home decoration and interior design. She is an alumnus of the prestigious Lagos Business School, Pan-African University and holds an MPA from the Lagos State University and a BSc from the University of Nigeria, Nsukka.", title: 'Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/GOKQ3SOAJdv1eNRxlu0lu4ySr8.jpg', name: 'Alhaji Tijjani M. Borodo, LLM, FloD', alt: 'Alhaji Tijjani M. Borodo, LLM, FloD', description: "Alhaji Borodo is a respected legal luminary and a legal practitioner with over 40 years cognate experience. He started his legal career in private practice at Port Harcourt before joining the Ministry of Justice Kano as a State Counsel where he rose to the enviable position of Director of Public Prosecution (DPP). He thereafter joined the corporate world and rising to become the Pioneer Company Secretary of FBN Holdings PLC. He is now back to private practice where he is the Founder and Principal Partner of Tijjani M Borodo and Associates, Legal Practitioners and Notary Public. A top law firm with offices at Lagos and Abuja.   He is a Fellow, Institute of Directors, Nigeria, the Society for Corporate Governance Nigeria; and the Institute of Chartered Secretaries Administrators, Nigeria. He is a Member International Bar Association, Nigeria Bar Association, and an Honorary Senior Member, Chartered Institute of Bankers of Nigeria. In October 2017, he was given a lifetime achievement award for his contributions to the legal profession in Nigeria by the Esq Magazine.   In January 2018, he was appointed a member of the Technical Committee that drafted the Financial Reporting Council’s Nigerian Code of Corporation Governance 2018.   He is currently the Principal Partner of Tijjani M. Borodo & Associates, a top tier law firm with offices at Lagos and Abuja.", title: 'Independent Non-Executive Director' },
  { url: 'https://framerusercontent.com/images/9PeI9ez86dfLNn0vbtFP4VJlUQ.jpg?scale-down-to=1024', name: 'Mr. Uzoma Nwankwo', alt: 'Mr. Uzoma Nwankwo', description: "Mr. Nwankwo is seasoned executive with experience spanning over thirty-five (35) years.  He started his career at the Citicorp Institute for Global Finance at a foundational level in 1987 rising to become the Vice President/Unit Head of Citicorp North America, New York in 1992. He was appointed Executive Director of Citibank, Nigeria in 1994 and rose to become the African Head, Structured Finance for Citibank African Division, Johannesburg, South Africa. In 1999, he joined Liotta Capital Partners Johannesburg as the Director, Structured Finance. He was to later serve as a Non-Executive Director and Member Finance Committee of Econet Wireless Nigeria. He served First Bank as the ED, Risk Management and Control between 2000-2002 and later served as Managing Director in First Africa Capital Partners between 2002-2004. He joined Dangote Group as the Group ED, Corporate Finance in 2004. He served as the MD/CEO AIQ Capital Management Limited between 2009-2013. He also served as the Chief Financial Officer, Amni International Petroleum Development Company Limited between 2014-2020. Mr. Nwankwo has a bachelor’s degree from the University of Nigeria Nsukka, a Masters degree from the Michigan State University, East Lansing, Michigan USA and an MBA from the University of Michigan, Ann Arbor, Michigan.", title: 'Independent Non-Executive Director' },
  // { url: 'https://framerusercontent.com/images/y2Ex6mqfLWO3G9zFFKH1Hi3IzD4.jpg?scale-down-to=1024', name: 'Mrs. Nonye Ayeni', alt: 'Mrs. Nonye Ayeni', description: "Nonye is an experienced executive with hands-on experience of over twenty-seven years in a variety of roles in the financial industry. She commenced her banking career from foundational level in Citibank Nigeria before moving on to Zenith Bank where she rose the cadre to a General Manager. At Zenith Bank, she pioneered many projects including revamping customer service delivery and customer experience for the entire bank. She had direct supervisory roles across different departments including Treasury and Financial services, Correspondent Banking, Corporate, Commercial and Retail Banking. She also had direct oversight responsibility for Human Resources & Human Capital Development, Credit Risk, E-Business, Domestic and Foreign Operations, Branch and Zonal management amongst others. She joined Funds and Electronic Transfer Solutions Limited (FETS), a financial technology institution that plays actively in the digital payment space by providing financial solutions across many industries, as the Deputy Managing Director in May 2020. Nonye served on several Boards including Zenith General insurance and Zenith life insurance, Zenith Registrars, Zenith Securities and Private Sector Health Initiatives (PSHAN)    Nonye has a bachelor’s degree from Obafemi Awolowo University Ile-Ife and an MBA from University of Lagos. She also has ACI Dealing certification. She attended Advanced Management Program (AMP) at Insead Business School, France. Before her appointment she was a CFA level 3 candidate. Nonye has attended several leadership programs and executive management courses at Harvard Business School, Boston, Massachusetts, Insead Business School France, Wharton School, Pennsylvania. Derivative Bootcamp by Euromoney in Cambridge United Kingdom, Lagos Business School and several other programs organized by JP Morgan, Deutsche Bank, Standard Bank SA and Citibank amongst others. She is an honorary senior member of Chartered Institute of Bankers of Nigeria. An affiliate member of Chartered Institute of Personnel Management of Nigeria. A member of Nigeria Institute of Management (Chartered) and a registered Professional of Financial Reporting Council of Nigeria.    Nonye comes to the board with impressive leadership skills and strong competencies in Business Development, Treasury, Banking Operations, E-business and Digital transformation.", title: 'Managing Director' },
];

const boardOfManagers: { url: string, name: string, title: string, alt: string, description: string }[] = [
  // { url: 'https://framerusercontent.com/images/y2Ex6mqfLWO3G9zFFKH1Hi3IzD4.jpg?scale-down-to=1024', name: 'Mrs. Nonye Ayeni', alt: 'Mrs. Nonye Ayeni', description: "Nonye is an experienced executive with hands-on experience of over twenty-seven years in a variety of roles in the financial industry. She commenced her banking career from foundational level in Citibank Nigeria before moving on to Zenith Bank where she rose the cadre to a General Manager. At Zenith Bank, she pioneered many projects including revamping customer service delivery and customer experience for the entire bank. She had direct supervisory roles across different departments including Treasury and Financial services, Correspondent Banking, Corporate, Commercial and Retail Banking. She also had direct oversight responsibility for Human Resources & Human Capital Development, Credit Risk, E-Business, Domestic and Foreign Operations, Branch and Zonal management amongst others. She joined Funds and Electronic Transfer Solutions Limited (FETS), a financial technology institution that plays actively in the digital payment space by providing financial solutions across many industries, as the Deputy Managing Director in May 2020. Nonye served on several Boards including Zenith General insurance and Zenith life insurance, Zenith Registrars, Zenith Securities and Private Sector Health Initiatives (PSHAN)    Nonye has a bachelor’s degree from Obafemi Awolowo University Ile-Ife and an MBA from University of Lagos. She also has ACI Dealing certification. She attended Advanced Management Program (AMP) at Insead Business School, France. Before her appointment she was a CFA level 3 candidate. Nonye has attended several leadership programs and executive management courses at Harvard Business School, Boston, Massachusetts, Insead Business School France, Wharton School, Pennsylvania. Derivative Bootcamp by Euromoney in Cambridge United Kingdom, Lagos Business School and several other programs organized by JP Morgan, Deutsche Bank, Standard Bank SA and Citibank amongst others. She is an honorary senior member of Chartered Institute of Bankers of Nigeria. An affiliate member of Chartered Institute of Personnel Management of Nigeria. A member of Nigeria Institute of Management (Chartered) and a registered Professional of Financial Reporting Council of Nigeria.    Nonye comes to the board with impressive leadership skills and strong competencies in Business Development, Treasury, Banking Operations, E-business and Digital transformation. ", title: 'Managing Director' },
  { url: 'https://framerusercontent.com/images/3j62M9e6OAseQhFBRDD3d0DORCw.jpg?scale-down-to=1024', name: 'Ms. June Otigba', alt: 'Ms. June Otigba', description: "June Otigba serves as the Head, Retail Banking Group and Abuja Region of Signature Bank. She currently leads an integral part of “Project Signature” where her core responsibility is to work with brand partners to develop and implement the delivery of Signature Bank’s distinct brand identity, which cuts across the implementation of the brand identity through all the customer touch points from flagship branches to the media journey, corporate collaterals and the Bank’s digitalization process to deliver a sustainable future forward financial institution that aligns with its vision. Prior to joining Signature Bank, she was the Head of Investment at Morningside Capital Partners. Her banking career spans over 14 years at Bank PHB, Stanbic IBTC Bank and Diamond Bank in a variety of roles across Wealth Management, Credit risk, Private Equity, Institutional and Retail Banking. In 2013, she led a technical support team for the Chairman, bankers committee, sub-committee on economic development, sustainability and gender, Central Bank of Nigeria, focused on the under-banked and unbanked to drive financial inclusion. June holds a Bachelor of Science degree in Economics, a Master of Science degree in Global Central Banking and Financial Regulation, an MBA with a focus in strategy and investment both from the University of Warwick, United Kingdom. She also holds a post graduate certificate in strategic branding and customer insights from London Business School, United Kingdom. In addition, she holds various certifications in Wealth Management and has attended several courses at leading institutions globally.", title: 'Head, Retail Banking & Abuja Region' },
  { url: 'https://framerusercontent.com/images/vSd6bBrTwRSIsVs5EWzYRNgIzQ.jpg?scale-down-to=1024', name: 'Mr. Ekundayo Yakubu', alt: 'Mr. Ekundayo Yakubu', description: "Ekundayo Yakubu serves as the Chief Financial Officer of Signature Bank Limited. He holds a master's degree in business administration from Obafemi Awolowo University, Ile-Ife and a Higher National Diploma from The Federal Polytechnic, Ado Ekiti. He is a Fellow of the Institute of Chartered Accountants of Nigeria (ICAN). His over two-decades work experience in the banking industry spans across functions such as Financial Control & Strategy, Internal Control, Reconciliation, Debt Recovery and Relationship Management and Branch Management. He started his career at International Breweries PLC, Ilesa and moved to HLB-ZO Ososanya& Co (Chartered Accountants) for his professional training. He commenced his banking career at the defunct MBC International Bank (merged with FBN Limited) in 2001. Dayo worked at Ecobank Nigeria Limited from 2008 to 2019 and joined Globus Bank Nigeria Limited as the Pioneer Chief Financial Officer (CFO). He is a distinguished professional with proven track records in designing and implementing financial planning, management of financial risks, record keeping and financial reporting that assure and optimize sustainable revenues and growth. He pioneered the setting up of finance and strategy department of Globus Bank Ltd. Dayo has attended various trainings within and outside Nigeria which includes Financial Modelling(Agusto& Co), Tax Planning and Management of Tax Liability (LBS), Fraud and Forgeries Prevention (ICAN MCPE) Bank Ratings (Parez Ratings- Ghana) and Capital Allocation (Ghana), Service Excellence (Ecobank Lome) amongst others.", title: 'Chief Financial Officer' },
  { url: 'https://framerusercontent.com/images/ulWJosdkkYenJtn2zb8IZRYs.jpg?scale-down-to=1024', name: 'Mr. Omololu Ajayi', alt: 'Mr. Omololu Ajayi', description: "Omololu Ajayi serves as the Chief Information Officer (CIO) of Signature Bank. A Banking executive with 20 years of domestic and international experience in Information Technology covering Consulting, Core Banking Services, Business Application Management, Digital Transformation, Transaction Electronic Banking, Centralized Business Operations, and Project Management. He holds a bachelor's degree in computer science from the University of Ado Ekiti and a master's degree in information technology from the University of Lagos. Omololu started his IT career with Wema Bank Plc and proceeded to work at various times with Ecobank Plc, Zenith Bank Plc, ITSSGLOBAL Consulting (Geneva, Switzerland), Access Bank Plc, Keystone Bank, Titan Trust Bank, and SecureID Limited. He has held key technical, functional, managerial, and executive roles in IT. He is a certified COBIT 5 implementer and IT professional who has been providing cutting-edge services in the digitalization and business process automation of these institutions for the last 15 years. He has attended many trainings and conferences both locally and internationally on Leadership and IT Management. Omololu has interest in mentoring and building business relationships.", title: 'Chief Information Officer' },
  { url: 'https://framerusercontent.com/images/rlk3JbjQ6M8br1RbhCky4RHk.jpg?scale-down-to=1024', name: 'Mr. Ugonna Onyema', alt: 'Mr. Ugonna Onyema', description: "Ugonna Onyema serves as the Head, Human Capital Management of Signature Bank. Prior to this, he was Head Talent Management with Fidelity Bank. A high-performing visionary with global perspective & entrepreneurial drive, Ugonna started his career in Operations, Adeola Odeku branch of Diamond Bank, before moving to the Clearing Group. In 2006, he joined the Human Resources Division where he drove service excellence across various units in human resources. In 2019 he successfully led the integration team responsible for the fusion of the Human Resources functions of Access and Diamond Banks, before joining Ikeja Electric as Head Organization Development where he engineered the re-tooling of the workforce, as well as structural and operational models to meet the demands of the prepaid metering and service-based tariff regimes. A consummate professional and graduate of Psychology (1st Class Honors), he is a certified Balanced Scorecard Professional (BSP) from the Geroge Washington University College of Professional Studies, a Senior Certified HRM Professional (SHRM – SCP), a Senior Professional in Human Resources International (SPHRi) and an Associate of the Chartered Institute of Personnel Management (ACIPM), Nigeria. Ugonna has attended several key trainings, seminars and conferences both locally and internationally.", title: 'Head, Human Capital Management' },
  { url: 'https://framerusercontent.com/images/E5YP8QsuvJrJ5IMSPGDIxsEXs.jpg', name: 'Mr. Iwueze Ebere', alt: 'Mr. Iwueze Ebere', description: "Iwueze Ebere serves as the Company Secretary/Legal Adviser of Signature Bank. Prior to joining Signature Bank, he was the Team Lead of Corporate Bank and Head Office Legal Business Support in the Legal Department of UBA. He started his banking career in 2008 in Fidelity Bank as a legal officer. With over fourteen years’ experience, he has worked in several organizations including Crusader Insurance (now Custodian and Allied Insurance Plc), Fidelity Bank, EKEDC, First Bank and UBA. He has served in different roles and capacities as an in-house counsel including company secretariat, legal documentation and advisory, litigation and dispute resolution and corporate bank. He holds a masters’ degree in law from the University of Lagos and is a chartered secretary.", title: 'Company Secretary/Legal Adviser' },
];

const slides: { name: string, url: string, path: string, alt: string, stroke:string, color: string }[] = [
  { color: 'bg-main-10/60', stroke: "stroke-main-10", name: 'Personal Banking', path: '/personal-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/0pkpx4EoTB98LDipRi3Fsa17t2U.jpg' },
  { color: 'bg-primaryblown/60',stroke: "stroke-primaryblown", name: 'Private Banking', path: '/private-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/AVRrGV5qinCaJoJhlahT4Od4Qg4.jpg?scale-down-to=512' },
  { color: 'bg-primaryyellow/60',stroke: "stroke-primaryyellow", name: 'Business Banking', path: '/business-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/90iLC8eLJFKBsYO5b61ZtAyUlzw.png?scale-down-to=512' },
  { color: 'bg-hex-2/60',stroke: "stroke-hex-2", name: 'Institutional Banking', path: '/institutional-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/SiwzAOftQDTO4naBSmAOBMWkQJg.jpg' },
  {color: 'bg-primaryyellow/60', stroke: "stroke-primaryyellow", name: 'Digital Banking', path: '/digital-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/csHFzMjSvWHg0OXUzrTfKLl52s.jpg' },
  { color: 'bg-main-10/60',stroke: "stroke-main-10", name: 'Personal Banking', path: '/personal-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/0pkpx4EoTB98LDipRi3Fsa17t2U.jpg' },
  {color: 'bg-primaryblown/60', stroke: "stroke-primaryblown", name: 'Private Banking', path: '/private-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/AVRrGV5qinCaJoJhlahT4Od4Qg4.jpg?scale-down-to=512' },
  {color: 'bg-primaryyellow/60', stroke: "stroke-primaryyellow", name: 'Business Banking', path: '/business-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/90iLC8eLJFKBsYO5b61ZtAyUlzw.png?scale-down-to=512' },
  { color: 'bg-hex-2/60',stroke: "stroke-hex-2", name: 'Institutional Banking', path: '/institutional-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/SiwzAOftQDTO4naBSmAOBMWkQJg.jpg' },
  { color: 'bg-primaryyellow/60',stroke: "stroke-primaryyellow", name: 'Digital Banking', path: '/digital-banking', alt: 'Personal Banking', url: 'https://framerusercontent.com/images/csHFzMjSvWHg0OXUzrTfKLl52s.jpg' },
];

const cardType = [{name: "Board Of Directors"}, {name: "Executive Team"}]

const AboutUs = () => {

  const [onFous, setOnFocus] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [currentCard, setCurrentCard] = useState<number>(0);
  const [closeModal, setCloseModal] = useState<boolean>(false);
  const [directorIndex, setDirectorIndex] = useState<number>(0);
  const [boardIndex, setBoardIndex] = useState<number>(0);
  const [boardClose, setBoardClose] = useState<boolean>(false);
  
  
  return (
    <div className="bg-white font-nunitoSans">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader bg="bg-white" textColor1="text-midblack" primaryBtnClassName="bg-hex-2 !py-2.5" />
      <div className="lg:h-screen md:h-[90vh] h-screen bg-main-7 relative overflow-hidden">
        <img className="absolute w-full h-full top-0 right-0" src="https://framerusercontent.com/images/lrpi5BupBslKQxBnserqWJ30fDs.png" alt="" />
        <div className="lg:w-[50%] md:w-[80%] w-full mx-auto lg:pt-48 md:pt-96 pt-48">
          <h1 className="md:text-[64px] sm:text-[48px] text-3xl text-black leading-[1.2em] text-center font-bold">Built on trust, service and innovation</h1>
          <p className="text-lg text-hex-11 text-center sm:px-10 px-4 mt-5">We're not just a bank, we're a tech-driven financial institution that's constantly pushing the boundaries to bring you the best possible customer experience.</p>
        </div>
        <div className="relative overflow-hidden mask w-full lg:mt-20 md:mt-32 mt-10">
          <div className="slider-container" />
            <div className="flex relative slider w-[3000px] z-20 gap-20 h-[257px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                onMouseEnter={() => {
                  setOnFocus(true)
                  setCurrentIndex(index)
                }}
              onMouseLeave={() => setOnFocus(false)} className="relative overflow-hidden cursor-pointer w-[180px] h-[203px]">
                <svg className={`absolute ${slide.stroke} z-40`} width="180" height="203" viewBox="0 0 180 203" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path opacity="0.5" d="M175 119.5V128C175 166.66 143.66 198 105 198H75C36.34 198 5 166.66 5 128V119.5M175 83.5V75C175 36.34 143.66 5 105 5H75C36.34 5 5 36.34 5 75V83.5" strokeWidth="10" strokeMiterlimit="10" strokeLinecap="round" />
                </svg>
              <img className="rounded-[60px] left-5 bg-primaryyellow top-[22px] absolute w-[140px] h-[160px] bg-cover object-cover" src={slide.url} alt={slide.alt} />
              {(onFous === true && currentIndex === index) && <div className={`rounded-[60px] text-center inset-0 left-5 top-[22px] absolute text-white w-[140px] z-40 h-[160px] ${slide.color}`}>
                <a href={slide.path} className="flex justify-center text-base font-bold text-white relative z-50 items-center h-full">
                  {slide.name}
                </a>
              </div>}
              </div>
            ))}
          </div>
        </div>
      </div>
      {/*  */}
      <div className="bg-bannerbg">
        <div className="md:w-[80%] w-[90%] mx-auto md:py-28 py-10">
          <div className="flex md:flex-row flex-col items-center justify-between">
            <div className="w-full">
            <h2 className="text-primaryblack text-[36px] font-bold">Welcome to Signature Bank</h2>
            <p className="text-primarygray text-lg leading-[28px] md:w-[75%] mt-4">Signature Bank launched in 2022 to serve discerning customers who want to experience real banking. With specially designed financial products and services, we leverage digital solutions to provide you with tailor made solutions that suit your needs.</p>
            <p className="text-primarygray text-lg leading-[28px] md:w-[75%] mt-5">We are committed to helping you achieve your goals through exemplary financial services and products that will empower you and your business.</p>
            <p className="text-primarygray text-lg leading-[28px] md:w-[75%] mt-6">We want to be part of your journey by providing you with excellent customer service with access to innovative financial solutions.</p>
          </div>
          <div className="md:mt-0 my-10">
            <img className="lg:rounded-[140px] lg:h-[471px] h-[350px] bg-cover object-cover" src="https://framerusercontent.com/images/wL0MMQ2zOiT9PCn19u35JFkZD8.jpg" alt="" />
          </div>
          </div>
        </div>
      </div>
      <div className="bg-main-9 pt-28">
        <div className="mx-auto lg:w-[73%] w-[90%] border-b-2 border-main-2/10">
          <h1 className="text-[48px] text-center font-bold text-primaryblack tracking-[-0.96px]">Our Core Values</h1>
          <p className="text-lg leading-[28px] text-center text-primarygray mx-auto lg:w-[55%] md:w-[70%] mt-4">Our values of professionalism, audacity, creativity, trust and service excellence are intrinsic to how we operate and how we serve our customers to deliver exemplary financial services.</p>
          <div className="grid md:grid-cols-5 grid-cols-2 lg:gap-[10px] gap-2 grid-rows-1 mt-10">
            {cores.map((core, index:number) => (
              <div key={index} className="bg-hex-12 flex flex-col gap-5 h-[230px] justify-center items-center rounded-[20px]">
              <img className="w-[72px]" src={core.url} alt="" />
                <h4 className="lg:text-2xl text-xl text-primaryblack text-center font-bold">{core.title}</h4>
            </div>
            ))}
          </div>
          <div className="pb-14">
            <ZoomOnScroll>
              <SectionCard
              extraClass="w-[95%] md:mt-5 mt-3"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="text-primarygray"
            src="https://framerusercontent.com/images/6mQgoUfGYl1B1SZ3Tn6S7slYWM.jpg"
            cardTitle="Our Vision"
            cardDescription="To be the leader in providing innovative financial solutions while creating exceptional customer experience in our chosen market."
            flexRow=""
            display="hidden"
          />
            </ZoomOnScroll>
            <ZoomOnScroll>
              <SectionCard
            extraClass="w-[95%] tracking-[0px] md:mt-1 mt-3"
            black="primaryblack"
            buttonBg=""
            buttonColor=""
            gray="text-primarygray"
            src="https://framerusercontent.com/images/6aQaP9QnI063K3z0D3x4gYDUPI.jpg"
            cardTitle="Our Mission"
            cardDescription="
Deploying cutting-edge technology and a highly motivated workforce to deliver superior value to our publics in a sustainable manner."
            flexRow="flex-row-reverse"
            display="hidden"
          />
          </ZoomOnScroll>
          </div>
        </div>
      </div>
      <div className="bg-main-9 relative py-16">
        <div className="md:w-[85%] w-[90%] mx-auto relative">
           <h1 className="md:text-[48px] text-[30px] lg:w-full md:w-[55%] w-full mx-auto text-center font-bold text-primaryblack lg:tracking-[-0.96px]">Our Outstanding Leadership</h1>
          <p className="text-lg leading-[28px] text-center text-primarygray mx-auto lg:w-[55%] md:w-[80%] mt-4">To bring you the most impactful products and services you deserve. Signature Bank is led by an honorable, trustworthy board of directors and managed by an experienced, talented executive team.</p>
          <div className="sticky top-0 w-full h-full">
             {/* <div className="flex justify-center relative mt-10"> */}
            <div className="text-primaryblack mx-auto flex justify-between lg:w-[42%] md:w-[62%] w-[90%] px-4 py-1 md:text-2xl sm:text-xl text-base mt-14 border-white md:bg-[#ffffffb3] backdrop-blur-md bg-[#edededcc] z-40 md:top-28 sm:top-36 top-36 md:rounded-[10px] rounded-[30px] sticky">
            {cardType.map((card, index) => (
              <div onClick={() => setCurrentCard(index)} key={index} className={`${currentCard === index ? "text-hex-2 font-bold":"text-[#999999]"} cursor-pointer sticky transition-all duration-500 delay-75 ease-in-out py-4 leading-[28px]`}>
              {card.name}
             { currentCard === index && <div className="border-[3px] border-hex-2 w-16 mt-5 rounded-[20px] mx-auto" />}
            </div>
            ))}
          </div>
          {currentCard ===0 && (<div className="text-primaryblack grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 grid-rows-3">
            {boardOfDirectors.map((dierctor, index:number) => (
              <div
                onClick={() => {
                  setCloseModal(true)
                  setDirectorIndex(index)
                }}
                key={index}
                className="mb-10"
              >
                <ZoomOnScroll>
                  <img className="h-[396px] border rounded-[90px] object-cover bg-cover" src={dierctor.url} alt={dierctor.alt} />
                  <h3 className={`md:text-[26.83px] text-2xl font-bold hover:text-primaryyellow font-nunitoSans text-center mt-3`}>{dierctor.name}</h3>
                <p className="text-[18.78px] text-alternatew text-center mt-2">{dierctor.title}</p>
              </ZoomOnScroll>
            </div>
            ))}
          </div>)}
          {currentCard === 1 && (<div className="text-primaryblack grid grid-cols-1 md:grid-cols-3 gap-5 mt-16 grid-rows-2">
            {boardOfManagers.map((manager, index:number) => (
              <div
                onClick={() => {
                  setBoardClose(true)
                  setBoardIndex(index)
                }}
                key={index}
                className="mb-10"
              >
                <ZoomOnScroll>
              <img className="h-[396px] border rounded-[90px] object-cover bg-cover" src={manager.url} alt={manager.alt} />
                <h3 className="text-[26.83px] text-alternate font-bold font-nunitoSans text-center mt-3 hover:text-primaryyellow">{manager.name}</h3>
                <p className="text-[18.78px] text-alternatew text-center mt-2">{manager.title}</p>
                </ZoomOnScroll>
            </div>
            ))}
          </div>)}
         </div>
             </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white hover:bg-hex-1"
          titleStyle="text-alternate md:w-[60%] w-full"
          imgContainer="md:w-[40%] w-full"
          textColor="text-primarygray"
          title="Unlock new financial possibilities with us"
          description="Open a Signature Bank account in few steps"
          buttonName="Open an Account"
          url="https://framerusercontent.com/images/8kftVCBZ5JSM9eOT81gA2QGiiQ.jpg?scale-down-to=1024"
        />
      </div>
      <Footer />
      {closeModal === true && <AboutModal
        url={boardOfDirectors[directorIndex].url}
        title={boardOfDirectors[directorIndex].title}
        description={boardOfDirectors[directorIndex].description}
        name={boardOfDirectors[directorIndex].name}
        handleClick={() => setCloseModal(false)}
      />}
      {boardClose === true && <AboutModal
        url={boardOfManagers[boardIndex].url}
        title={boardOfManagers[boardIndex].title}
        description={boardOfManagers[boardIndex].description}
        name={boardOfManagers[boardIndex].name}
        handleClick={() => setBoardClose(false)}
      />}
    </div>
  );
};

export default AboutUs;
