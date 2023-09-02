import { HeaderContainer, NavContainer } from './style'
import { NavLink } from 'react-router-dom'

import { List, User } from '@phosphor-icons/react'

import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <div className="mobile">
        <NavLink to="/">
          <List color="#fff" fontSize={42} weight="bold" className="list" />
        </NavLink>

        <NavLink to="/">
          <img src={Logo} alt="" className="logo img" />
        </NavLink>

        <NavLink to="/Login">
          <User color="#fff" fontSize={38} className="user" />
        </NavLink>
      </div>

      <div className="web">
        <NavLink to="/">
          <img src={Logo} alt="" width={38} height={42} className="logo img" />
        </NavLink>

        <NavContainer>
          <NavLink to="/Objetivos">objetivos</NavLink>
          <NavLink to="/Publico">público</NavLink>
          <NavLink to="/Equipamentos">equipamentos</NavLink>
          <NavLink to="/Funcionamento">funcionamento</NavLink>
          <NavLink to="/Download">download</NavLink>
          <NavLink to="/Bibliografia">bibliografia</NavLink>
        </NavContainer>

        <NavLink to="/Login">
          <User color="#fff" fontSize={38} className="user" />
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
