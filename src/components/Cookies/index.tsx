import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import cookieSvg from "../../assets/cookie.svg";

const CookiesP = () => {

     const [isLoading, setLoading] = useState(true);
  const [hasCookie, setHasCookie] = useState(false);

  useEffect(() => {
    const checkCookie = () => {
      const cookieValue = Cookies.get('signature');
      setHasCookie(!!cookieValue);
      setLoading(false);
    };

    checkCookie();
  }, []);

  const handleSetCookie = () => {
    Cookies.set('signature', 'true', { expires: 30 });
    setHasCookie(true);
  };

    if (isLoading) return null;
    
  return (
      <div>
          {hasCookie ? (null) : (<div className="flex justify-center mx-auto">
        <div style={{ backdropFilter: "blur(20px)", backgroundColor: "rgba(255, 255, 255, 0.7)" }} className="h-auto lg:w-[45%] w-[80%] rounded-[16px] justify-center fixed bottom-3 z-40">
          <div className="relative flex lg:flex-row flex-col items-center justify-between py-2 px-3">
            <div className="flex lg:flex-row flex-col gap-4 items-center">
              <img className="w-12 h-14" src={cookieSvg} alt="cookie" />
              <p className="text-main-4 text-sm lg:text-start lg: text-center leading-[1.5em] lg:w-[80%]">We use cookies to give you the best online experience. Find out more on how we use cookies in our <span className="text-hex-2">cookie policy</span></p>
            </div>
            <button onClick={handleSetCookie} className="bg-hex-2 hover:bg-primaryyellow ease-in-out transition-all duration-100 delay-75 whitespace-nowrap lg:w-auto w-full px-4 py-2 lg:my-0 my-4 text-sm rounded-[6px] text-white font-nunitoSans">Okay, Thanks</button>
          </div>
        </div>
      </div>)}
    </div>
  )
}

export default CookiesP;