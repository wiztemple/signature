import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import Header from "../../components/Header";
import MobileHeader from "../../components/MobileHeader";
import frameData from "../../assets/swoosh.json";
import animationData from "../../assets/gradient.json";

const NotFound = () => {
  const container = useRef(null);
  const animationRef = useRef<any>(null);
  const frame = useRef(null);
  const frameRef = useRef<any>(null);

  useEffect(() => {
    if (container.current && !animationRef.current) {
      const anim = lottie.loadAnimation({
        animationData,
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: "svg",
      });
      anim.setSpeed(0.3);
      animationRef.current = anim;
    }
  }, []);

  useEffect(() => {
    if (frame.current && !frameRef.current) {
      const anim = lottie.loadAnimation({
        animationData: frameData,
        autoplay: true,
        container: frame.current,
        loop: true,
        renderer: "svg",
      });
      anim.setSpeed(0.6);
      frameRef.current = anim;
    }
  }, []);

  return (
    <div className="bg-white font-nunitoSans overflow-hidden">
      <Header primaryBtnClassName="bg-hex-2" />
      <MobileHeader
        bg="bg-white"
        textColor1="text-midblack"
        primaryBtnClassName="bg-hex-2 !py-2.5"
      />
      <div className="h-screen text-alternate">
        <div
          className="fixed w-screen h-screen right-0 top-0  overflow-hidden z-20"
          ref={container}
          id="animation-container"
        ></div>
        <div className="relative z-30 flex justify-center flex-col items-center h-full">
          <h1 className="md:text-[216px] text-[175px] font-bold">404</h1>
          <div
              className="absolute lg:w-[850px] w-screen lg:left-72 right-0 lg:top-12 lg:-bottom-72 bottom-16 left-0 lg:right-0 overflow-hidden z-30"
              ref={frame}
              id="animation-frame"
            ></div>
        <h2 className="text-[#333333] z-40 md:w-[45%] w-[90%] text-2xl relative -mt-5 text-center">The page you are looking for doesn't exist or has been moved. Please go back to the homepage.</h2>
        <a className="bg-hex-2 relative z-40 text-white mt-7 px-5 py-3 rounded-[10px] hover:bg-primaryyellow" href="/">Go Back Home</a>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default NotFound