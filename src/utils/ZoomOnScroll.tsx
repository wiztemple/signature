import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ZoomOnScroll = ({ children }: any) => {
  const [ref, inView] = useInView();
  const controls = useAnimation();
//   const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    if (inView) {
      controls.start("zoomedIn")
    } else {
      controls.start("zoomedOut")
    }
  }, [controls, inView]);

  const zoomVariants = {
    zoomedIn: { scale: 1, opacity: 1 },
    zoomedOut: { scale: 0.9, opacity: .1 },
  };

  return (
    <div className="">
      <motion.section
        variants={zoomVariants}
        initial="zoomedOut"
        animate={controls}
        transition={{ duration: 0.65, delay: 0.33 }}
        ref={ref}
      >
        {children}
      </motion.section>
    </div>
  );
};

export default ZoomOnScroll;