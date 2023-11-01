import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import closeSvg from "../../assets/close.svg";
import MessageSvg from "../../assets/message";
import Facebook from '../../assets/facebook';
import Insta from '../../assets/insta';
import Twitter from '../../assets/twitter';
import Linkedin from '../../assets/linkedin';
import Youtube from '../../assets/youtube';
import Music from '../../assets/music';


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
                            <MessageSvg />
                            <Facebook />
                            <Insta />
                            <Twitter />
                            <Linkedin />
                            <Youtube />
                            <Music />
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
