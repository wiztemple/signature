import { motion, AnimatePresence } from 'framer-motion';

export const Slide = ({ children }: any) => {
    return (
        <AnimatePresence initial={true} mode="wait">
            <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0, }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.5 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    );
};