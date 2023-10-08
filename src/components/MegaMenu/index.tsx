import { ReactNode } from "react";

interface MegaMenu {
  children: ReactNode,
  bgColor?: string;
  textColor?: string;
  spanColor1?: string;
  spanColor2?: string;
  imageText?: ReactNode;
  imageUrl?: string;
}
const MegaMenu: React.FC<MegaMenu> = ({ children, bgColor, textColor, spanColor1, spanColor2, imageText, imageUrl }) => {
  return (
    <div className={`flex w-[980px] p-10 bg-${bgColor} rounded-[20px] font-nunitoSans`}>
      <div className="w-3/5 flex gap-x-4">
        <div>
          {/* <span className="block text-hex-3 px-2 pb-5">Business Banking</span>
          <Link
            to=""
            className="flex cursor-pointer gap-4 hover:bg-slate-50 rounded-[10px] p-2"
          >
            <span className="w-10 h-10 rounded-full block bg-red-100"></span>
            <span>
              <span className="block font-bold text-alternate">Accounts</span>
              <span className="block text-midblack pt-2 text-sm">
                Get a bank account best <br /> suited for your financial goals
              </span>
            </span>
          </Link>
          <Link
            to=""
            className="flex cursor-pointer gap-4 hover:bg-slate-50 rounded-[10px] p-2 mt-5"
          >
            <span className="w-10 h-10 rounded-full block bg-red-100"></span>
            <span>
              <span className="block font-bold text-alternate">Cards</span>
              <span className="block text-midblack pt-2 text-sm">
                Access 24/7 banking <br /> anywhere anytime
              </span>
            </span>
          </Link> */}
          {children}
        </div>
        <div>
          <span className={`block text-${textColor} px-2 pb-5`}>Self Services</span>
          <div className="flex cursor-pointer gap-4 rounded-lg p-2">
            <span className="w-10 h-10 rounded-full block bg-red-100"></span>
            <span>
              <span className={`block font-bold text-${spanColor1}`}>
                Find a Branch or ATM
              </span>
              <span className={`block text-${spanColor2} pt-2 text-sm`}>
                Find a branch closest to <br /> you
              </span>
            </span>
          </div>
          <div className="flex cursor-pointer gap-4  rounded-lg p-2 mt-5">
            <span className="w-10 h-10 rounded-full block bg-red-100"></span>
            <span>
              <span className={`block font-bold text-${spanColor1}`}>
                Open an Account
              </span>
              <span className={`block text-${spanColor2} pt-2 text-sm`}>
                Start your financial <br /> journey with us. Get your <br />{" "}
                Signature account - <br /> Launching soon
              </span>
            </span>
          </div>
          <div className="flex cursor-pointer gap-4  rounded-lg p-2 mt-5">
            <span className="w-10 h-10 rounded-full block bg-red-100"></span>
            <span>
              <span className={`block font-bold text-${spanColor1}`}>
                Chat with Us
              </span>
              <span className={`block text-${spanColor2} pt-2 text-sm`}>
                Need help? Contact us.
              </span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-2/5 relative">
        <img
          // src="https://framerusercontent.com/images/JCvRJtEtCSCOzL84Mf0m5lre29I.png?scale-down-to=512"
          src={imageUrl}
          className="rounded-xl w-[355px] h-[400px] object-cover"
          alt=""
        />
        {/* <span className="text-white absolute bottom-8 text-[30px] leading-[1.1em] left-8 font-bold">
          Live your best life <br /> with Signature <br /> Bank
        </span> */}
        {imageText}
      </div>
    </div>
  );
};

export default MegaMenu;
