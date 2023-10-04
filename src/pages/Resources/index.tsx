import Banner from "../../components/Banner";
import DownloadCard from "../../components/DownloadCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Resources = () => {
  return (
    <div className="font-nunito">
      <Header />
      <div className="pt-[270px] pb-24 bg-lightgrey">
        <h1 className="text-center text-7xl font-bold text-alternate">
          Resources
        </h1>
        <p className="text-center text-2xl pt-3 text-[#555d6c]">
          Latest downloads, resources and all you need from Signature bank
        </p>
      </div>
      <div className="flex justify-center bg-lightgrey">
        <div className="w-[1000px] py-[50px] px-5">
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
