import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import SectionCard from "../../components/SectionCard";

const PersonalBanking = () => {
  return (
    // style={{display:"block",width:"100%",height:"100%",borderRadius:"inherit",objectPosition:"center",objectFit:"cover",imageRendering:"auto" }}
    <div>
      <Header />
      <div className="relative h-screen w-screen overflow-hidden">
        <div className=" z-40 w-screen h-full">
          <img
              className="h-full w-full block rounded-inherit object-center object-cover image-auto"
              src="https://framerusercontent.com/images/6ccjmgnwDI1sKpaGyre3Smc0z4Y.jpg"
              alt="Lady using signature bank personal banking"
          />
          </div>
        <div className="text-white z-50 absolute w-full h-auto flex mx-auto justify-center top-[50%]">
          <div style={{backdropFilter: "blur(15px)"}} className="text-[64px] bg-[#fff3] rounded-2xl p-[30px]">
            <h1 className="text-hex-2 text-[64px] text-center font-medium font-nunito leading-[1em]">Experience <br /> Transformational Banking</h1>
            <p className="text-2xl font-nunito text-center mt-4 text-[#101828]">Attain new financial heights with our personalised banking <br /> solutions</p>
          </div>
          </div>
      </div>
      
      {/* Cards */}

      <div className="bg-[#fff] text-black">
        <div className="w-[85%] mx-auto">
          <div className="flex justify-between py-28">
            <div className="text-[40px] font-bold text-[#101828] font-nunito">Customised just for you</div>
            <div className="w-[340px] text-[#555d68] text-lg font-nunito">Experience convenient and innovative banking services designed to power your dreams.</div>
          </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-[30px] justify-center relative overflow-visible p-0 w-full pb-28">
            <Card
              cardTitle="Signature Savings Account"
              cardDescription="Start building your savings with our attractive interest rates and flexible deposit and withdrawal options."
              buttonName="Open an Account"
            />
            <Card
              cardTitle="Signature Savings Account"
              cardDescription="Start building your savings with our attractive interest rates and flexible deposit and withdrawal options."
              buttonName="Open an Account"
            />
            <Card
              cardTitle="Signature Savings Account"
              cardDescription="Start building your savings with our attractive interest rates and flexible deposit and withdrawal options."
              buttonName="Open an Account"
            />
            <Card
              cardTitle="Signature Savings Account"
              cardDescription="Start building your savings with our attractive interest rates and flexible deposit and withdrawal options."
              buttonName="Open an Account"
            />
            <Card
              cardTitle="Signature Savings Account"
              cardDescription="Start building your savings with our attractive interest rates and flexible deposit and withdrawal options."
              buttonName="Open an Account"
            />
        </div>
        </div>
      </div>

      {/* sectionCard */}
      <div className="bg-[#fcf8fb] text-black py-20">
        <div className="w-[85%] mx-auto">
          <h1 className="text-[#0f1728] text-[48px] font-nunito font-bold leading-[-0.96px] text-center">Built for the future, built for your progress.</h1>
          <p className="text-center text-2xl text-[#101828] mt-3 mb-20">We take pride in offering you a superior banking experience</p>
          <SectionCard
            flexRow=""
          />
          <SectionCard
            flexRow="flex-row-reverse"
          />
          <SectionCard
            flexRow=""
          />
        </div>
      </div>

      {/* banner */}
      <div className="bg-white text-black">
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}
export default PersonalBanking;
