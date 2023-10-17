import React, { useState } from "react";
import Banner from "../../components/Banner";
import DownloadCard from "../../components/DownloadCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LogoDownloadCard from "../../components/LogoDownloadCard";
import Logo1 from "../../assets/logo.svg";
import Logo2 from "../../assets/altlogo.svg";
import Logo3 from "../../assets/logowhite.svg";
import Symbol1 from "../../assets/symbol1.svg";
import Symbol2 from "../../assets/symbol2.svg";
import MobileHeader from "../../components/MobileHeader";
import downloadSvg from "../../assets/download.svg"


const Resources = () => {
  const [activeTab, setActiveTab] = useState<string | undefined>("downloads");

  const toggleTab = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = event.currentTarget.dataset;
    setActiveTab(value);
  };
  return (
    <div className="font-nunitoSans bg-white">
      <Header />
      <MobileHeader bg="bg-white" textColor1="text-midblack" primaryBtnClassName="bg-hex-2 !py-2.5" />
      <div className="md:pt-[270px] pt-64 pb-24 bg-[#f9f5f8]">
        <h1 className="text-center md:text-7xl text-[48px] font-bold text-alternate">
          Resources
        </h1>
        <p className="text-center md:text-2xl text-lg w-[60%] mx-auto pt-3 text-[#555d6c]">
          Latest downloads, resources and all you need from Signature bank
        </p>
      </div>
      <div className="flex justify-center bg-lightgrey">
        <div className="w-[1000px] py-[50px] px-5">
          <div className="flex justify-center">
            <div className="bg-white w-fit  flex gap-[96px] p-5 rounded-[20px]">
              <div>
                 <button
                type="button"
                className={`py-3 text-2xl text-[#9999] ${activeTab === "downloads" && "font-semibold text-hex-2 "} mb-1 focus:outline-none`}
                onClick={toggleTab}
                id="downloads"
                data-value="downloads"
              >
                Downloads
                </button>
                <div className={`${activeTab === "downloads" && "border-[3px] w-16 mx-auto rounded-full border-hex-2"}`}></div>
             </div>
              <div>
                <button
                type="button"
                className={`rounded py-3 text-2xl ${activeTab === "media" && "font-semibold"} text-[#9999] mb-1 focus:outline-none ${
                  activeTab === "media" &&
                  "text-hex-2 after:w-5 after:h-[2px] after:bg-hex-2"
                }`}
                onClick={toggleTab}
                id="media"
                data-value="media"
              >
                Media Kit
              </button>
              <div className={`${activeTab === "media" && "border-[3px] w-16 mx-auto rounded-full border-hex-2"}`}></div>
              </div>
            </div>
          </div>
          {activeTab === "downloads" && (
            <div className="grid lg:grid-cols-4 md:grid-cols-3 lg:w-full md:w-[90%] w-[50%] mx-auto mt-5 gap-5">
              <DownloadCard
                downloadLink="https://framerusercontent.com/modules/assets/0FV1xKEkNK9UZqpP2NidGst30K0~BExZr_raEzZGuBE7i6hA-53KnFhwdfpd4VCa35Jb7a8.pdf"
                cardText="Additional Account Opening Form"
              />
              <DownloadCard
                cardText="Signature Bank Account Opening Reference Form"
                downloadLink="https://framerusercontent.com/modules/assets/0FV1xKEkNK9UZqpP2NidGst30K0~BExZr_raEzZGuBE7i6hA-53KnFhwdfpd4VCa35Jb7a8.pdf"
              />
              <DownloadCard
                cardText="Corporate Account Opening Form"
                downloadLink="https://framerusercontent.com/modules/assets/0FV1xKEkNK9UZqpP2NidGst30K0~BExZr_raEzZGuBE7i6hA-53KnFhwdfpd4VCa35Jb7a8.pdf"
              />
              <DownloadCard
                cardText="Individual Account Opening Form"
                downloadLink="https://framerusercontent.com/modules/assets/0FV1xKEkNK9UZqpP2NidGst30K0~BExZr_raEzZGuBE7i6hA-53KnFhwdfpd4VCa35Jb7a8.pdf"
              />
            </div>
          )}
          {activeTab === "media" && (
            <div>
              <h1 className="text-5xl font-bold text-alternate pb-2.5">Logo</h1>
              <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-5">
                <LogoDownloadCard
                  bgColor="bg-hex-2"
                  img={Logo1}
                  imgSize="w-[186px] h-[48px]"
                />
                <LogoDownloadCard
                  bgColor="bg-alternateblack"
                  img={Logo1}
                  imgSize="w-[186px] h-[48px]"
                />
                <LogoDownloadCard
                  bgColor="bg-white"
                  img={Logo2}
                  imgSize="w-[186px] h-[48px]"
                />
                <LogoDownloadCard
                  bgColor="bg-alternateblack"
                  img={Logo3}
                  imgSize="w-[186px] h-[48px]"
                />
              </div>
              <h1 className="text-5xl font-bold text-alternate pb-2.5 pt-28">
                Symbol
              </h1>
              <div className="w-full grid md:grid-cols-4 grid-cols-2 gap-5">
                <LogoDownloadCard
                  bgColor="bg-hex-2"
                  img={Symbol1}
                  imgSize="w-[120px] h-[129px]"
                />
                <LogoDownloadCard
                  bgColor="bg-alternateblack"
                  img={Symbol1}
                  imgSize="w-[120px] h-[129px]"
                />
                <LogoDownloadCard
                  bgColor="bg-white"
                  img={Symbol1}
                  imgSize="w-[120px] h-[129px]"
                />
                <LogoDownloadCard
                  bgColor="bg-alternateblack"
                  img={Symbol2}
                  imgSize="w-[120px] h-[129px]"
                />
              </div>
              <div className="text-alternate md:py-28 py-16">
            <h1 className="text-5xl font-bold text-center">Colour Pallet</h1>
            <p className="text-center text-2xl font-bold mt-10">Primary</p>
            <div className="flex mt-5">
              <div className="flex-1">
                <div className="bg-hex-2 h-44 rounded-tl-[20px] rounded-bl-[20px] w-full" />
                <p className="text-[#2D3442] text-center text-[29.61px] mt-3">Burgundy.</p>
                <button className="mx-auto w-[130px] justify-center outline-none mt-1 flex items-center text-hex-2 font-semibold text-base p-2 rounded-[10px] bg-pink">
                  <p>Copy</p>
                  <input className="outline-none w-full cursor-pointer bg-pink text-center" value="#6C1D45" />
                </button>
              </div>
              <div className="flex-1">
                <div className="bg-primaryyellow h-44 rounded-br-[20px] rounded-tr-[20px] w-full" />
                <p className="text-[#2D3442] text-center text-[29.61px] mt-3">Beige brown.</p>
                <button className="mx-auto w-[130px] justify-center outline-none mt-1 flex items-center text-primaryyellow font-semibold text-base p-2 rounded-[10px] bg-main-12">
                  <p>Copy</p>
                  <input className="outline-none w-full cursor-pointer bg-main-12 text-center" value="#BB975B" />
                </button>
              </div>
            </div>
            <p className="text-center text-2xl font-bold mt-10">Primary</p>
            <div className="flex mt-5">
              <div className="flex-1">
                <div className="bg-[#A61890] h-44 rounded-tl-[20px] rounded-bl-[20px] w-full" />
                <p className="text-[#2D3442] text-center text-[29.61px] mt-3">Purple</p>
                <button className="mx-auto w-[130px] justify-center outline-none mt-1 flex items-center text-[#A61890] font-semibold text-base p-2 rounded-[10px] bg-[#fff0fd]">
                  <p>Copy</p>
                  <input className="outline-none w-full cursor-pointer bg-[#fff0fd] text-center" value="#A61890" />
                </button>
              </div>
              <div className="flex-1">
                <div className="bg-[#B05C37] h-44 w-full" />
                <p className="text-[#2D3442] text-center text-[29.61px] mt-3">Orange</p>
                <button className="mx-auto w-[130px] justify-center outline-none mt-1 flex items-center text-[#B05C37] font-semibold text-base p-2 rounded-[10px] bg-[#fff1eb]">
                  <p>Copy</p>
                  <input className="outline-none w-full cursor-pointer bg-[#fff1eb] text-center" value="#B05C37" />
                </button>
              </div>
              <div className="flex-1">
                <div className="bg-[#898d8e] h-44 rounded-br-[20px] rounded-tr-[20px] w-full" />
                <p className="text-[#2D3442] text-center text-[29.61px] mt-3">Grey</p>
                <button className="mx-auto w-[130px] justify-center outline-none mt-1 flex items-center text-[#898d8e] font-semibold text-base p-2 rounded-[10px] bg-[#e3ebed]">
                  <p>Copy</p>
                  <input className="outline-none w-full cursor-pointer bg-[#e3ebed] text-center" value="#898D8E" />
                </button>
              </div>
            </div>
              </div>
              <button type="button" className="bg-hex-2 gap-1 items-center mx-auto flex py-1 px-4 rounded-[6px] hover:bg-primaryyellow hover:scale-105 transition-all duration-150 delay-100">
                <span><img src={downloadSvg} alt="" /></span>
                Download .zip file
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="lg:w-[85%] w-[90%] mx-auto py-14">
        <Banner
          bannerBg="bg-bannerbg"
          buttonStyle="bg-hex-2 text-white"
          titleStyle="text-alternate md:w-[60%] w-full"
          imgContainer="md:w-[45%] w-full"
          textColor="text-primarygray"
          title="Unlock new financial possibilities with us"
          description="Open a Signature Bank account in few steps"
          buttonName="Open an Account - Coming Soon"
          url="https://framerusercontent.com/images/XuTTuxNqq78uVLDqe5bmNkmn7hE.png?scale-down-to=1024"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
