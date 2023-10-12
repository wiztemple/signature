import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const Reveal = ({ children, className }: any) => {

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
        <div className={className}>
            <motion.section
                variants={{
                    hidden: { opacity: 0, y: 45 },
                    visible: { opacity: 1, y: 0 }
                }}
                initial="hidden"
                animate={control}
                transition={{ duration: 0.65, delay: 0.33 }}
                className='relative overflow-hidden opacity-5'
                ref={ref}
            >{children}</motion.section>
        </div>
    )
};