import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Body } from './style'
import { useState } from 'react'
import { MenuMobile } from '../../components/Header/MenuMobile'

export function DefaultLayout() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Body>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <Outlet />
    </Body>
  )
}
