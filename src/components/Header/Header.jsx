import menuHamburger from "../../assets/hamburger.svg"
import logo from "../../assets/logoHyper.png"
import userIcon from "../../assets/icon-user.svg"

import { HeaderContainer, NavContainer } from "./Header.styles"

export function Header() {
  return(
    <HeaderContainer> 
      <img src={menuHamburger} alt="" width={32} height={22} className="menu-burger"/>
      <img src={logo} alt="" width={28} height={32} className="logo img"/>
      <img src={userIcon} alt="" width={32} height={32} className="user img"/>

      <NavContainer>
        <a href="">objetivos</a>
        <a href="">público</a>
        <a href="">equipamentos</a>
        <a href="">funcionamento</a>
        <a href="">download</a>
        <a href="">bibliografia</a>
      </NavContainer>
    </HeaderContainer>
  )
}

