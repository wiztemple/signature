import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import facebookSvg from "../../assets/facebook.svg";
import closeSvg from "../../assets/close.svg";
import messageSvg from "../../assets/message.svg";
import instaSvg from "../../assets/insta.svg";
import twitterSvg from "../../assets/twitter.svg";
import linkedinSvg from "../../assets/linkedin.svg";
import youtubeSvg from "../../assets/youtube.svg";
import musicSvg from "../../assets/music.svg";

function SocialNav() {
    
  const [showItems, setShowItems] = useState(true);
  const [isMounted, setIsMounted] = useState(true);

    const toggleItems = () => {
        setShowItems(!showItems);
        setIsMounted(true);
    };

    return (
        <>
            <div
                className={`rounded-[20px] backdrop-blur-md lg:block hidden bg-[#f3f3f3cc] right-14 fixed bottom-3 z-40 h-10 px-2`}>
                <div className="flex items-center h-full justify-between gap-2">
                    <AnimatePresence>
                        {showItems && isMounted && (<motion.div
                            initial={{ opacity: 0, x: 10 }}
                            animate={{ height: showItems && isMounted ? 'auto' : 0, opacity: showItems && isMounted ? 1 : 0, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="flex gap-2 ">
                            <a href="mailto:enquiries@signaturebankng.com" rel="noopener" target="_blank" className="bg-white hover:bg-gradient-to-r hover:from-yellow-500 hover:to-yellow-700 p-1.5 transition-all ease-in-out duration-300 delay-150 hover:-rotate-45 rounded-full w-[26px] h-[26px]"><img className="w-full h-full" src={messageSvg} alt="svg" /></a>
                            <a href="https://www.facebook.com/profile.php?id=100083538721743" rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-[26px] h-[26px] hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-700 transition-all ease-in-out duration-300 delay-150 hover:-rotate-45"><img className="w-full h-full" src={facebookSvg} alt="svg" /></a>
                            <a href="https://www.linkedin.com/company/signature-bank-nigeria/" rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-[26px] h-[26px] hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-500 transition-all ease-in-out duration-300 delay-150 hover:-rotate-45"><img className="w-full h-full" src={instaSvg} alt="svg" /></a>
                            <a href="https://mobile.twitter.com/Signaturebankng" rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-[26px] h-[26px] hover:bg-gradient-to-r hover:from-blue-300 hover:to-blue-400 transition-all ease-in-out duration-300 delay-150 hover:-rotate-45"><img className="w-full h-full" src={twitterSvg} alt="svg" /></a>
                            <a href="https://www.instagram.com/signaturebankng/?hl=en" rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-[26px] h-[26px] hover:bg-gradient-to-r hover:from-red-200 hover:to-red-600 transition-all ease-in-out duration-300 delay-150 hover:-rotate-45"><img className="w-full h-full" src={linkedinSvg} alt="svg" /></a>
                            <a rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-[26px] h-[26px] hover:bg-gradient-to-r hover:from-red-300 hover:to-red-500 transition-all ease-in-out duration-300 delay-150 hover:-rotate-45"><img className="w-full h-full" src={youtubeSvg} alt="svg" /></a>
                            <a href="https://www.tiktok.com/@signaturebankng" rel="noopener" target="_blank" className="bg-white p-1.5 rounded-full w-[26px] h-[26px] hover:bg-gradient-to-tr hover:from-red-500 hover:to-teal-300 transition-all ease-in-out duration-300 delay-150 hover:-rotate-45"><img className="w-full h-full" src={musicSvg} alt="svg" /></a>
                        </motion.div>)}
                    </AnimatePresence>
                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                        <p className="text-sm text-[#101828b3]">social {showItems && "👋🏾"}</p>
                        <div className={`cursor-pointer ${showItems && "rotate-90"} duration-150 delay-150 transition-all ease-in-out`} onClick={toggleItems}>
                            <img className={`h-[14px] whitespace-nowrap w-[14px] transition-transform duration-300 transform ${showItems ? "rotate-90" : ""
                                }`} src={closeSvg} alt="svg" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SocialNav;
