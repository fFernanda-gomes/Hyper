import logo from '../../assets/logoHyper.png'

import { HeaderContainer, NavContainer } from './style'
import { NavLink } from 'react-router-dom'

import { List, User } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <div className="mobile">
        <NavLink to="/">
          <List color="#fff" fontSize={42} weight="bold" className="list" />
        </NavLink>

        <NavLink to="/">
          <img src={logo} alt="" width={28} height={32} className="logo img" />
        </NavLink>

        <NavLink to="/Login">
          <User color="#fff" fontSize={38} className="user" />
        </NavLink>
      </div>

      <div className="web">
        <NavLink to="/">
          <img src={logo} alt="" width={28} height={32} className="logo img" />
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
