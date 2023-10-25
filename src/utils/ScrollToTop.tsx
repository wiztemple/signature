import { ReactNode } from "react";

interface IProps {
    children: ReactNode
}

function SmoothScrollLink({ children }: IProps) {

  const handleNavigation = (event: React.MouseEvent) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return <div onClick={handleNavigation}>{children} </div>;
}

export default SmoothScrollLink;