import Banner from "../../components/Banner";
import Board from "../../components/Board";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import TermsBar from "../../components/TermsBar";

const tabs: { name: string, link: string }[] = [
  { name: 'Information About Us', link: '#about' },
  { name: 'Accessing Our Website', link: '#website' },
  { name: 'Intellectual Property Rights', link: '#rights' },
  { name: 'Reliance On Information Posted', link: '#posted' },
  { name: 'Our Website Changes Regularly', link: '#regularly' },
  { name: 'OUR LIABILITY', link: '#liability' },
  { name: 'INFORMATION ABOUT YOU AND YOUR VISITS TO OUR WEBSITE', link: '#information' },
  { name: 'SERVICES PROVIDED THROUGH OUR WEBSITE', link: '#services' },
  { name: 'UPLOADING MATERIAL TO OUR WEBSITE', link: '#uploading' },
  { name: 'PROHIBITED USES', link: '#uses' },
  { name: 'CONTENT STANDARDS', link: '#standards' },
  { name: 'SOFTWARE DOWNLOADS', link: '#downloads' },
  { name: 'VIRUSES, HACKING AND OTHER OFFENCES', link: '#offences' },
  { name: 'LINKING AND FRAMING', link: '#framing' },
  { name: 'LINKS FROM OUR WEBSITE', link: '#links' },
  { name: 'SUSPENSION AND TERMINATION', link: '#termination' },
  { name: 'JURISDICTION AND APPLICABLE LAW', link: '#law' },
  { name: 'VARIATIONS', link: '#variations' },
  { name: 'YOUR CONCERNS', link: '#concerns' },
];

const Terms = () => {
  return (
    <div className="bg-white font-nunitoSans">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-2.5" bg="bg-white"
      />
      <Board
        title="Terms and Conditions"
        description="Our terms of use"
      />
      <div className="w-[85%] mx-auto">
        <div className="flex lg:flex-row flex-col gap-10 lg:mt-20 mt-10">
          <TermsBar tabs={tabs} />
          <div className="lg:w-[75%]">
            <p className="text-primarygray text-lg leading-[28px]">
              This page (together with the documents referred to on it) tells you the terms of use on which you may make use of our website <span className="text-hex-2"><a href="https://signaturebankng.com/">https://signaturebankng.com/</a></span> (&quot;<span className="text-hex-2"><a href="https://signaturebankng.com/">Website</a></span>	&quot;), whether as a guest or a registered user. Please read these Terms of Website Use carefully before you start to use the Website. By using our website, you indicate that you accept these Terms of Website Use and that you agree to abide by them. If you do not agree to these Terms of Website Use, please refrain from using our website.
            </p>
            <div  className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Information About Us</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2"><a className="text-hex-2" href="https://signaturebankng.com/ ">https://signaturebankng.com/ </a> is a site operated by Signature Bank Limited ("We"). We are a Commercial Bank registered in Nigeria with company number 1887345 and have our registered office at 31b, Gana Street, Maitama, Abuja FCT.</p>
            </div>
            <div id="website" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Accessing Our Website</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2"><a className="text-hex-2" href="https://signaturebankng.com/ "></a>Access to our Website is permitted on a temporary basis, and we reserve the right to amend the information or withdraw the services we provide on our website without notice (see below). We will not be liable if for any reason our website is unavailable at any time or for any period.
You are responsible for making all arrangements necessary for you to have access to our website. You are also responsible for ensuring that all persons who access our website through your internet connection are aware of these terms, and that they comply with them.</p>
            </div>
            <div id="rights" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Intellectual Property Rights</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">We are the owner or the licensee of all intellectual property rights on our Website (including but not limited to the listed services and other intellectual property rights offered on or via the Website) and in the material published on it. Those works are protected by copyright laws, and treaties around the world. All such rights are reserved.</p>
              <p className="text-primarygray text-base leading-[2em] mt-10">You may print, , copy and may download extracts, of any page(s) from our website for your personal reference and you may draw the attention of others within your organization to material posted on our website. </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">You must not modify the paper or digital copies of any materials you have printed , copied or downloaded in any way, and you must not use any illustrations, photographs, video or audio sequences or any graphics separately from any accompanying text.</p>
              <p className="text-primarygray text-base leading-[2em] mt-10">Our status (and that of any identified contributors) as the authors of material on our website must always be <br /> acknowledged. <br /> 
You must not use any part of the materials on our website for commercial purposes without obtaining a license to do so from us or our licensors (where applicable). </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">If you print, copy, or download any part of our website in breach of these Terms of Website Use, your right to use our website will cease immediately and you must, at our option, return or destroy any copies of the materials you have made whether modified or unmodified.</p>
            </div>
            <div id="posted" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Reliance On Information Posted</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">Commentary and other materials posted on our website are not intended to amount to advice on which reliance should be placed. We therefore disclaim all liability and responsibility arising from any reliance placed on such materials by any visitor to our website, or by anyone who may be informed of any of its contents.</p>
            </div>
            <div id="regularly" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">Our Website Changes Regularly</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">We aim to update our website regularly and may change the content at any time. If the need arises, we may suspend access to our website, or close it indefinitely. Any of the material on our website may be out of date at any given time, and we are under no obligation to update such material.</p>
            </div>
            <div id="liability" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">OUR LIABILITY</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">The material displayed on our website is provided without any guarantees, conditions, or warranties as to its accuracy or completeness. To the extent permitted by law, We, our affiliates and third parties connected to us, hereby expressly exclude: </p>
              <li className="text-primarygray text-base leading-[2em] mt-10 items-center">
                <span className="-ml-2">all conditions, warranties and other terms which might otherwise be implied by statute, law or otherwise. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">any liability whatsoever incurred by any user in connection with our website or in connection with the use, inability to use, or results of the use of our website, any websites linked to it and any materials posted on it, including, without limitation any liability for: </span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-2">1. direct, indirect, or consequential loss or damage; </p>
              <p className="text-primarygray text-base leading-[2em] mt-2">2. loss of income or revenue; </p>
              <p className="text-primarygray text-base leading-[2em] mt-2">3. loss of business; </p>
              <p className="text-primarygray text-base leading-[2em] mt-2">4. loss of profits or contracts; </p>
              <p className="text-primarygray text-base leading-[2em] mt-2">5. loss of anticipated savings; </p>
              <p className="text-primarygray text-base leading-[2em] mt-2">6. loss of data; </p>
              <p className="text-primarygray text-base leading-[2em] mt-2">7. loss of goodwill; </p>
              <p className="text-primarygray text-base leading-[2em] mt-2">8. wasted management or office time; and o for any other loss or damage of any kind, however arising and whether caused by infringement of general laws (including the omission to act in accordance with reasonable carefulness), breach of contract or otherwise, even if foreseeable.</p>
              <p className="text-primarygray text-base leading-[2em] mt-10">This does not affect our liability for death or personal injury arising from our negligence, nor our liability for fraudulent misrepresentation, nor any other liability which cannot be excluded or limited under applicable law.</p>
            </div>
            <div id="information" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">INFORMATION ABOUT YOU AND YOUR VISITS TO OUR WEBSITE</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">We process information about you in accordance with our Data Privacy Notice [http://signaturebankng.com/wp-content/uploads/2022/11/Signature-BankLimited-Data-Protection-and-Privacy-Notice.pdf] and Cookie Policy [http://signaturebankng.com/wp-content/uploads/2022/11/cookies-policy-draftredline-121122-amended.pdf]. By using our website, you consent to such processing, and you warrant that all data provided by you is accurate and complete.</p>
            </div>
            <div id="services" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">SERVICES PROVIDED THROUGH OUR WEBSITE</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">Services provided using our Website shall be governed by the Terms and Conditions [http://signaturebankng.com/wp-content/uploads/2022/11/SignatureBank-Term-conditions.pdf].</p>
            </div>
            <div id="uploading" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">UPLOADING MATERIAL TO OUR WEBSITE</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">Whenever you make use of a feature that allows you to upload material to our website, or to contact other users of our website, you must comply with the Content Standards set out below. You confirm that any such Contribution does comply with those standards, and you indemnify us for any failure to comply. Any material you upload to our website will be considered non-confidential and non-proprietary, and we have the right to use, copy, distribute and disclose to third parties any such material for any purpose. We also have the right to disclose your identity to any third party who is claiming that any material posted or uploaded by you to our Website constitutes a violation of their intellectual property rights, breach of their confidential information or of their right to privacy. We will not be responsible, or liable to any third party, for the content or accuracy of any materials posted by you or any other user of our website. We have the right to remove any material or posting you make on our website if such material does not comply with the Content Standards set out below.</p>
            </div>
            <div id="uses" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">PROHIBITED USES</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">You may use our website only for lawful purposes. You may not use our website: </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">in any way that breaches any applicable law or regulations. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">in any way that is unlawful or fraudulent or has unlawful or fraudulent purpose or effect. • for the purpose of harming or attempting to harm any individual in any way.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2"> to send, receive, upload, download, use or re-use any material which does not comply with our Content Standards set out below.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">to create liability for us in any way; or in any way that causes us to lose (in whole or in part) the services of our Internet Service Provider&apos;s (ISP) or other suppliers; and </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">to knowingly transmit any data, send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware or any other harmful programs or similar computer code designed to adversely affect the operation of any computer software or hardware. </span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-10">You also agree:</p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">not to reproduce, duplicate, copy or re-sell any part of our website in contravention of any of the provisions in these Terms of Website Use. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2"> not to access without authority, interfere with, damage, or disrupt: </span>
              </li>
              <p className="text-primarygray text-base leading-[2em]">1. any part of our website.</p>
              <p className="text-primarygray text-base leading-[2em]">2. any equipment or network on which our website is stored. </p>
              <p className="text-primarygray text-base leading-[2em]">3. any software used in the provision of our website; or</p>
              <p className="text-primarygray text-base leading-[2em]">4. any equipment, network, or software owned or used by any third party.</p>
            </div>
            <div id="standards" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">CONTENT STANDARDS</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">These content standards ("Content Standards") apply to all material which you contribute to our website ("Contributions"), and to any interactive services associated with the Website.</p>
              <p className="text-primarygray text-base leading-[2em] mt-10">You must comply with the spirit and the letter of the following standards. The standards apply to each part of any Contribution as well as to its whole. </p>
              <p className="text-primarygray text-base leading-[2em] mt-10">Contributions must: </p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">be accurate (where they state facts).</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">be genuinely held (where they state opinions).</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">comply with applicable law in Nigeria and in any country from which they are posted.</span>
              </li>
              <p className="text-primarygray text-base leading-[2em] mt-10">Contributions must not:</p>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">contain any material which is defamatory of any person, or which is obscene, offensive, hateful, or inflammatory.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">promote violent or sexually explicit material.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">promote discrimination based on race, sex, religion, nationality, disability, sexual orientation, or age. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">infringe any copyright, database right or trademark of any other person.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">be false, inaccurate, or likely to deceive or mislead any person. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">be made in breach of any legal duty owed to a third party, such as a contractual duty or a duty of confidence. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">promote any illegal activity.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">be threatening, abuse or invade another&apos;s privacy, or cause annoyance, inconvenience, or needless anxiety. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">be likely to harass, upset, embarrass, alarm, or annoy any other person.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">be used to impersonate any person, or to misrepresent your identity or affiliation with any person. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">give the impression that they emanate from us if this is not the case. </span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">advocate, promote or assist any unlawful act such as (by way of example only) copyright infringement or computer misuse.</span>
              </li>
              <li className="text-primarygray text-base leading-[2em] items-center">
                <span className="-ml-2">link directly or indirectly to or include descriptions of goods or services that are prohibited under these Terms of Website Use.</span>
              </li>
            </div>
            <div id="downloads" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">SOFTWARE DOWNLOADS</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">The use of any software downloads or link to software downloads made available from our website will be subject to the terms and conditions of the end user license agreement associated with such software. By downloading, installing, modifying, copying or by otherwise using such software you indicate your acceptance of the terms and conditions of the associated end user license agreement.</p>
            </div>
            <div id="offences" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">VIRUSES, HACKING AND OTHER OFFENCES</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">You must not misuse our website by knowingly introducing viruses, trojans, worms, logic bombs or other material, which is malicious, technologically harmful or designed to disrupt the current operation of our website. You must not attempt to gain unauthorized access to our website, the server on which our website is stored, or any server, computer or database connected to our website. You must not attack our website via a denial-of-service attack or a distributed denial-of service attack. We may report any breach under these Terms of Website Use to the relevant law enforcement authorities and we will co-operate with those authorities by disclosing your identity to them. In the event of such a breach, your right to use our website will cease immediately. We shall not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses or other technologically harmful material that may infect your computer equipment, computer programs, data or other proprietary material due to your use of our website or to your downloading of any material posted on it, or on any website linked to it.</p>
            </div>
            <div id="framing" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">LINKING AND FRAMING</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">You may add a link to our home page, provided you do so in a way that is fair and legal and does not damage our reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval or endorsement on our part where none exists. You shall not establish a link from any website that is not owned by you. Our website must not be framed on any other website, nor may you create a link to any part of our website other than the home page. We reserve the right to withdraw linking permission without notice. The website from which you are linking must comply in all respects with the Content Standards.</p>
            </div>
            <div id="links" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">LINKS FROM OUR WEBSITE</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">Where our website contains links to other websites and resources provided by third parties, these links are provided for your information only. If you use these links, you will leave our website. We have not reviewed these third-party websites and we have no control over the contents of those websites or resources and accept no responsibility for them or for any loss or damage that may arise from your use of them. We do not endorse or make any warranties or representations about the other websites, or any information, software or other products or materials found there, or any results that may be obtained from using them. If you decide to access any of the third-party websites linked to our website, you do this entirely at your own risk.</p>
            </div>
            <div id="termination" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">SUSPENSION AND TERMINATION</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">We will determine, in our discretion, whether there has been a breach of these Terms of Website Use. Where a breach has occurred, we may take such action as we deem appropriate. Failure to comply with these Terms of Website Use constitutes a material breach of the terms upon which you are permitted to use our Website, and may result in our taking all or any of the following actions: • immediate, temporary, or permanent withdrawal of your right to use our website. • immediate, temporary, or permanent removal of any posting or material uploaded by you to our website. • issue a warning to you. • take legal proceedings against you for reimbursement of all costs on an indemnity basis (including, but not limited to, reasonable administrative and legal costs) resulting from the breach. • take further legal action against you. • disclosure of such information to law enforcement authorities as we feel is necessary. We exclude liability for actions taken in response to breaches of these Website Terms of Use. The responses described in these Website Terms of Use are not limited, and we may take any other action we deem appropriate.</p>
            </div>
            <div id="law" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">JURISDICTION AND APPLICABLE LAW</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">The Nigerian courts will have exclusive jurisdiction over any claim arising from, or related to, a visit to our Website although we retain the right to bring proceedings against you for breach of these conditions in your country of residence or any other relevant country. These Terms of Website Use and any dispute or claim arising out of or in connection with them or their subject matter or formation (including noncontractual disputes or claims) shall be governed by and construed in accordance with the laws of Nigeria.</p>
            </div>
            <div id="variations" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">VARIATIONS</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">We may revise these Terms of Website Use at any time by amending this page. You are expected to check this page from time to time to take notice of any changes we made, as they are binding on you. Some of the provisions contained in these Terms of Website Use may also be superseded by provisions or notices published elsewhere on our website.</p>
            </div>
            <div id="concerns" className="mt-10">
              <h2 className="text-[30px] text-black font-bold">YOUR CONCERNS</h2>
              <p className="text-primarygray text-base leading-[2em] mt-2">If you have any concerns about material that appears on our website, please contact enquiries@signaturebankng.com Thank you for visiting our website.</p>
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
export default Terms;
