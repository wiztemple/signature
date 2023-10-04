import Logo from "../../assets/altlogo.svg";
import Rocket from '../../assets/rocket.svg';
const Header = () => {
  return (
    <div className="fixed h-auto w-full z-50">
      <div className="px-[50px] bg-white/60 backdrop-blur-[20px] opacity-100">
        <div className="relative">
          <div className="flex justify-between py-2 px-4 items-center">
            <div className="flex gap-[30px]">
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                Home
              </a>
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                About Us
              </a>
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                Resources
              </a>
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                Media
              </a>
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                Branch Locator
              </a>
            </div>
            <div className="flex">
              <a href="#" className="text-alternate text-sm py-2.5 px-3">
                Contact Us
              </a>
            </div>
          </div>
        </div>
        <nav className="flex justify-between items-center rounded-[50px] bg-white/60 backdrop-blur-[20px] opacity-100 h-[66px] px-6 py-2.5">
          <div className="flex gap-10">
            <img src={Logo} className="w-[142px] h-[38px]" alt="App Logo" />
            <div className="flex gap-[5px]">
              <a href="personal" className="text-midblack text-base py-2.5 px-3">
                Personal
              </a>
              <a href="private" className="text-midblack text-base py-2.5 px-3">
                Private
              </a>
              <a href="business" className="text-midblack text-base py-2.5 px-3">
                Business
              </a>
              <a href="institutional" className="text-midblack text-base py-2.5 px-3">
                Institutional
              </a>
              <a href="digital" className="text-midblack text-base py-2.5 px-3">
                Digital
              </a>
            </div>
          </div>
          <button type="button" className="bg-hex-2 text-white py-2.5 px-5 rounded-[10px] flex items-center gap-2">
            <img src={Rocket} className="w-6 h-6" alt="Rocket" />
            Open an account - Launching soon</button>
        </nav>
      </div>
    </div>
  );
};
export default Header;
