import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";

interface IProps {
  children: ReactNode
}

const ScrollToTop = ({children}: IProps) => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <div>{children}</div>;
};

export default ScrollToTop;