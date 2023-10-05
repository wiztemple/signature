import React, { useState } from "react";
import Banner from "../../components/Banner";
import DownloadCard from "../../components/DownloadCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LogoDownloadCard from "../../components/LogoDownloadCard";
import Logo1 from "../../assets/logo.svg";
import Logo2 from "../../assets/altlogo.svg";
import Logo3 from "../../assets/logowhite.svg";
import Symbol1 from '../../assets/symbol1.svg';
import Symbol2 from '../../assets/symbol2.svg';
const Resources = () => {
  const [activeTab, setActiveTab] = useState<string | undefined>("downloads");

  const toggleTab = (event: React.MouseEvent<HTMLButtonElement>): void => {
    const { value } = event.currentTarget.dataset;
    setActiveTab(value);
  };
  return (
    <div className="font-nunito">
      <Header />
      <div className="pt-[270px] pb-24 bg-[#f9f5f8]">
        <h1 className="text-center text-7xl font-bold text-alternate">
          Resources
        </h1>
        <p className="text-center text-2xl pt-3 text-[#555d6c]">
          Latest downloads, resources and all you need from Signature bank
        </p>
      </div>
      <div className="flex justify-center bg-lightgrey">
        <div className="w-[1000px] py-[50px] px-5">
          <div className="flex justify-center">
            <div className="bg-white w-fit  flex gap-[96px] p-5 rounded-[20px]">
              <button
                type="button"
                className={`py-3 text-xl text-[#9999] border-b-2 border-b-2-transparent font-medium focus:outline-none ${
                  activeTab === "downloads" && "text-hex-2 border-b-hex-2"
                }`}
                onClick={toggleTab}
                id="downloads"
                data-value="downloads"
              >
                Downloads
              </button>
              <button
                type="button"
                className={`rounded py-3 text-xl font-medium text-[#9999] focus:outline-none ${
                  activeTab === "media" &&
                  "text-hex-2 after:w-5 after:h-[2px] after:bg-hex-2"
                }`}
                onClick={toggleTab}
                id="media"
                data-value="media"
              >
                Media Kit
              </button>
            </div>
          </div>
          {activeTab === "downloads" && (
            <div className="w-full grid grid-cols-4 gap-5">
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
              <div className="w-full grid grid-cols-4 gap-5">
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
              <h1 className="text-5xl font-bold text-alternate pb-2.5 pt-28">Symbol</h1>
              <div className="w-full grid grid-cols-4 gap-5">
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
            </div>
          )}
        </div>
      </div>
      <div className="bg-white">
        <Banner />
      </div>
      <Footer />
    </div>
  );
};

export default Resources;
