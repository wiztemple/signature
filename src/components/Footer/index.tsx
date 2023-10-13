import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg'
const Footer = ({ background = 'bg-hex-2' }) => {
  return (
    <footer className={`w-full ${background} font-nunitoSans`}>
      <div className="lg:p-[100px] p-5">
        <div className="flex flex-col flex-nowrap h-min justify-start items-start w-full relative">
          <div className="lg:flex lg:flex-row flex-col justify-between flex-nowrap pb-16 w-full relative h-min border-b border-b-[#894a69]">
            <div className="flex flex-1 flex-grow-0 flex-shrink-0 items-start gap-2 flex-nowrap h-min overflow-visible relative  justify-start p-0">
              <div className="w-full relative h-auto whitespace-pre break-words outline-none flex gap-2 flex-col justify-start shrink-0 text-white">
                <p className="text-xl font-bold leading-[30px] font-nunitoSans">
                  Stay informed. Join our newsletter
                </p>
                <p className="leading-6 w-full break-after-all break-words text-main-1 lg:hidden block pb-8 font-nunitoSans">
                  Get up-to-date information about products <br /> and services that will help build and sustain <br /> your finances.
                </p>
                <p className="leading-6 w-full break-after-all break-words text-main-1 lg:block hidden font-nunitoSans">
                  Get up-to-date information about products and services that will help build and sustain  your finances.
                </p>
              </div>
            </div>
            <div className="lg:w-[430px] w-full h-auto relative">
              <div className="w-full relative flex justify-center items-center">
                <form className="w-full gap-[15px] flex" method="POST">
                  <input
                    type="email"
                    name="email"
                    placeholder="enter@youremail.com"
                    className="w-full leading-[1.4em] outline-none border-none rounded-[10px] cursor-pointer p-[15px] font-semibold text-base text-white placeholder:text-white placeholder:font-normal bg-[#ebebeb]/30 z-10"
                    value=""
                  />
                  <div className="relative">
                    <input
                      type="submit"
                      value="Subscribe"
                      className="appearance-none bg-hex-1 leading-[1.4em] outline-none font-semibold border-none rounded-[10px] p-[15px] text-white cursor-pointer"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="border-b border-b-[#894a69] w-full py-16">
            <div className="grid sm:grid-cols-6 grid-cols-2 sm:gap-y-0 gap-y-[30px] sm:gap-x-0 gap-x-10">
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-main-2">
                  Products
                </span>
                <span className="flex flex-col gap-3 text-base">
                  <Link to="/accounts" className="block text-main-1">Accounts</Link>
                  <Link to="/cards" className="block text-main-1">Cards</Link>
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-main-2">
                  Services
                </span>
                <span className="flex flex-col gap-3 sm:text-base">
                  <Link to="/personal-banking" className="block text-main-1">Personal Banking</Link>
                  <Link to="/private-banking" className="block text-main-1">Private Banking</Link>
                  <Link to="/business-banking" className="block text-main-1">Business Banking</Link>
                  <Link to="/institutional-banking" className="block text-main-1">Institutional Banking</Link>
                  <Link to="/digital-banking" className="block text-main-1">Digital Banking</Link>
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-main-2">
                  About Signature Bank
                </span>
                <span className="flex flex-col gap-3 text-base">
                  <Link to="/about-us" className="block text-main-1">About Us</Link>
                  <Link to="/about-us" className="block text-main-1">Team</Link>
                  <Link to="/careers" className="block text-main-1">Careers</Link>
                  <Link to="/resources" className="block text-main-1">Press</Link>
                  <Link to="/contact" className="block text-main-1">Contact</Link>
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-main-2">
                  Resources
                </span>
                <span className="flex flex-col gap-3 text-base">
                  <Link to="/resources" className="block text-main-1">Forms</Link>
                  <Link to="/resources" className="block text-main-1">Newsletter</Link>
                  <Link to="/contact" className="block text-main-1">Support</Link>
                  <Link to="/resources" className="block text-main-1">Media kit</Link>
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-main-2">
                  Social
                </span>
                <span className="flex flex-col gap-3 text-base">
                  <a className="block text-main-1">Twitter</a>
                  <a className="block text-main-1">LinkedIn</a>
                  <a className="block text-main-1">Facebook</a>
                  <a className="block text-main-1">Instagram</a>
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-[#C5A4B5]">
                  Legal
                </span>
                <span className="flex flex-col gap-3 text-base">
                  <Link to='/terms' className="block text-main-1">Terms</Link>
                  <Link to='/privacy' className="block text-main-1">Privacy</Link>
                  <Link to='/cookies' className="block text-main-1">Cookies</Link>
                  <Link to='/aml-policy' className="block text-main-1">AML Policy</Link>
                  <Link to='/online-security-tips' className="block text-main-1">Online Security Tips</Link>
                </span>
              </div>
            </div>
          </div>
          <div className="sm:flex justify-between w-full pt-8">
            <img src={Logo} alt="App Logo" />
            <span className="w-fit text-main-2 block pt-5 sm:pt-0">
              © 2023 Signature Bank Ltd. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
