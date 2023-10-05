import React, { ReactNode } from "react";
interface MenuProps {
  children: ReactNode
}
const MenuCard: React.FC<MenuProps> = ({children}) => {
  return (
    <>
       {children}
    </>
  )
}

export default MenuCard;
