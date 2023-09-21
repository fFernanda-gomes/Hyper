import { Button, HeaderContainer, Menu, NavContainer } from './style'
import { NavLink } from 'react-router-dom'

import { List, User, X } from '@phosphor-icons/react'

import Logo from '../../assets/logo.svg'
import { useState } from 'react'
import { MenuMobile } from './MenuMobile'

export function Header({ setMenuIsVisible }) {
  return (
    <>
      <MenuMobile />

      <HeaderContainer>
        <div className="mobile">
          <div className="menu">
            <Button onClick={() => setMenuIsVisible(true)}>
              <List
                size={32}
                color="#fff"
                fontSize={42}
                weight="bold"
                className="list"
              />

              {/* {abrirFechar === true ? (
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
              )} */}
            </Button>

            <NavLink to="/">
              <img src={Logo} alt="" className="logo img" />
            </NavLink>

            <NavLink to="/Login">
              <User color="#fff" fontSize={38} className="user" />
            </NavLink>
          </div>

          {/* <Menu className={`options ${abrirFechar == true ? '' : 'close'}`}>
          <NavLink to="/Objetivos">objetivos</NavLink>
          <NavLink to="/Publico">público</NavLink>
          <NavLink to="/Equipamentos">equipamentos</NavLink>
          <NavLink to="/Funcionamento">funcionamento</NavLink>
          <NavLink to="/Download">download</NavLink>
          <NavLink to="/Bibliografia">bibliografia</NavLink>
        </Menu> */}
        </div>

        <div className="web">
          <NavLink to="/">
            <img
              src={Logo}
              alt=""
              width={38}
              height={42}
              className="logo img"
            />
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
    </>
  )
}
