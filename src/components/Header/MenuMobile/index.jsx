import { X } from '@phosphor-icons/react'
import { Button, Content, Nav } from './style'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

export function MenuMobile({ menuIsVisible, setMenuIsVisible }) {
  useEffect(() => {
    // no documento, no body e no estilo dele e no overflow(scroll)
    document.body.style.overflowY = menuIsVisible ? 'hidden' : 'auto'
  }, [menuIsVisible])

  return (
    <Content isVisible={menuIsVisible}>
      <Button onClick={() => setMenuIsVisible(false)}>
        <X
          size={32}
          color="#fff"
          fontSize={42}
          weight="bold"
          className="list"
        />
      </Button>
      <Nav>
        <NavLink to="/Objetivos">objetivos</NavLink>
        <NavLink to="/Publico">público</NavLink>
        <NavLink to="/Equipamentos">equipamentos</NavLink>
        <NavLink to="/Funcionamento">funcionamento</NavLink>
        <NavLink to="/Download">download</NavLink>
        <NavLink to="/Bibliografia">bibliografia</NavLink>
      </Nav>
    </Content>
  )
}
