const Footer = () => {
  return (
    <footer className="bg-[#6c1d45] w-full">
      <div className="sm:p-[100px] p-5">
        <div className="flex flex-col flex-nowrap h-min justify-start items-start w-full relative">
          <div className="sm:flex flex-row justify-between flex-nowrap pb-16 w-full relative h-min border-b border-b-[#894a69]">
            <div className="flex flex-1 flex-grow-0 flex-shrink-0 items-start gap-2 flex-nowrap h-min overflow-visible relative  justify-start p-0">
              <div className="w-full relative h-auto whitespace-pre break-words outline-none flex gap-2 flex-col justify-start shrink-0 text-white">
                <p className="text-xl font-bold leading-[30px]">
                  Stay informed. Join our newsletter
                </p>
                <p className="leading-6 break-words">
                  Get up-to-date information about products and services that
                  will help build and sustain your finances.
                </p>
              </div>
            </div>
            <div className="sm:w-[430px] w-full h-auto relative">
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
                      className="appearance-none bg-[#5a193a] leading-[1.4em] outline-none font-semibold border-none rounded-[10px] p-[15px] text-white cursor-pointer"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="border-b border-b-[#894a69] w-full py-16">
            <div className="grid sm:grid-cols-6 grid-cols-2">
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-[#C5A4B5]">
                  Products
                </span>
                <span className="flex flex-col gap-3 text-base">
                  <a className="block text-[#EAECF0]">Accounts</a>
                  <a className="block text-[#EAECF0]">Cards</a>
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-[#C5A4B5]">
                  Services
                </span>
                <span className="flex flex-col gap-3 sm:text-base">
                  <a className="block text-[#EAECF0]">Personal Banking</a>
                  <a className="block text-[#EAECF0]">Private Banking</a>
                  <a className="block text-[#EAECF0]">Business Banking</a>
                  <a className="block text-[#EAECF0]">Institutional Banking</a>
                  <a className="block text-[#EAECF0]">Digital Banking</a>
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-[#C5A4B5]">
                  About Signature Bank
                </span>
                <span className="flex flex-col gap-3 text-base">
                  <a className="block text-[#EAECF0]">About Us</a>
                  <a className="block text-[#EAECF0]">Team</a>
                  <a className="block text-[#EAECF0]">Careers</a>
                  <a className="block text-[#EAECF0]">Press</a>
                  <a className="block text-[#EAECF0]">Contact</a>
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-[#C5A4B5]">
                  Resources
                </span>
                <span className="flex flex-col gap-3 text-base">
                  <a className="block text-[#EAECF0]">Forms</a>
                  <a className="block text-[#EAECF0]">Newsletter</a>
                  <a className="block text-[#EAECF0]">Support</a>
                  <a className="block text-[#EAECF0]">Press</a>
                  <a className="block text-[#EAECF0]">Media kit</a>
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-[#C5A4B5]">
                  Social
                </span>
                <span className="flex flex-col gap-3 text-base">
                  <a className="block text-[#EAECF0]">Twitter</a>
                  <a className="block text-[#EAECF0]">LinkedIn</a>
                  <a className="block text-[#EAECF0]">Facebook</a>
                  <a className="block text-[#EAECF0]">Instagram</a>
                </span>
              </div>
              <div className="flex flex-col gap-4">
                <span className="font-bold text-sm leading-5 text-[#C5A4B5]">
                  Legal
                </span>
                <span className="flex flex-col gap-3 text-base">
                  <a className="block text-[#EAECF0]">Terms</a>
                  <a className="block text-[#EAECF0]">Privacy</a>
                  <a className="block text-[#EAECF0]">Cookies</a>
                  <a className="block text-[#EAECF0]">AML Policy</a>
                  <a className="block text-[#EAECF0]">Online Security Tips</a>
                </span>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full pt-8">
            <span>Logo</span>
            <span className="w-fit text-[#C5A4B5]">
              © 2023 Signature Bank Ltd. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
