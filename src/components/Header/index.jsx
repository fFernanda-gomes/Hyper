import menuHamburger from '../../assets/hamburger.svg'
import logo from '../../assets/logoHyper.png'
import userIcon from '../../assets/icon-user.svg'

import { HeaderContainer, NavContainer } from './style'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img
          src={menuHamburger}
          alt=""
          width={32}
          height={22}
          className="menu-burger"
        />
      </NavLink>
      <NavLink to="/">
        <img src={logo} alt="" width={28} height={32} className="logo img" />
      </NavLink>
      <a href="">
        <img
          src={userIcon}
          alt=""
          width={32}
          height={32}
          className="user img"
        />
      </a>

      <NavContainer>
        <NavLink to="/SignIn">objetivos</NavLink>
        <NavLink to="">público</NavLink>
        <NavLink to="">equipamentos</NavLink>
        <NavLink to="">funcionamento</NavLink>
        <NavLink to="">download</NavLink>
        <NavLink to="">bibliografia</NavLink>
      </NavContainer>
    </HeaderContainer>
  )
}
