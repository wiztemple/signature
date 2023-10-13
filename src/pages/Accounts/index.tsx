import Board from "../../components/Board";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";

const Accounts = () => {
  return (
    <div className="bg-white">
      <Header primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-[9px]" />
      <MobileHeader
        primaryBtnClassName="bg-hex-2 hover:bg-primaryyellow !py-2.5" bg="bg-white"
      />
      <Board
        title="Signature Accounts"
        description="We've designed Signature accounts to meet the banking needs of businesses of all sizes, personal usage and special accounts for high net worth individuals."
      />
      <div></div>
      <Footer />
    </div>
  )
}
export default Accounts;