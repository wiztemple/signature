import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Slide = ({ children }: any) => {

    const [ref, inView] = useInView();

    const control = useAnimation();

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden")
        }
            
    }, [control, inView]);

    return (
        <>
            <motion.div
                variants={{
                    hidden: { opacity: 1, x: -600 }, // Slide in from the left (adjust -100 for desired initial position)
                    visible: { opacity: 1, x: 0 }   // Slide to the original position (x: 0)
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.35, delay: 0.05 }}
                className='relative overflow-hidden w-screen md:w-auto'
                ref={ref}
            >
                {children}
            </motion.div>
        </>
    );
};