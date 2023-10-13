import Board from "../../components/Board";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";

const Cards = () => {
  return (
    <div className="font-nunitoSans">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-2.5" bg="bg-white"
      />
         <Board
        title="Signature Cards"
        description="Make payments with confidence. Shopping, traveling, or just buying groceries? Our Signature Cards are perfect for you."
      />
      <Footer />
    </div>
  )
}
export default Cards;
