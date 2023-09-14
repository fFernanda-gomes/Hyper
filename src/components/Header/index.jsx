import { Button, HeaderContainer, NavContainer } from './style'
import { NavLink } from 'react-router-dom'

import { List, User, X } from '@phosphor-icons/react'

import Logo from '../../assets/logo.svg'
import { useState } from 'react'

export function Header() {
  const [abrirFechar, setAbrirFechar] = useState(false)

  function handleAbrirFecharMenu() {
    if (abrirFechar) {
      setAbrirFechar(false)
      return
    }

    setAbrirFechar(true)
  }

  return (
    <HeaderContainer>
      <div className="mobile">
        <div className="botao-menu">
          <Button onClick={handleAbrirFecharMenu}>
            {abrirFechar === true ? (
              <X
                size={32}
                color="#fff"
                fontSize={42}
                weight="bold"
                className="list"
              />
            ) : (
              <List
                size={32}
                color="#fff"
                fontSize={42}
                weight="bold"
                className="list"
              />
            )}
          </Button>

          <div>
            <nav>
              <li>A</li>
              <li>B</li>
              <li>C</li>
              <li>D</li>
            </nav>
          </div>
        </div>

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
