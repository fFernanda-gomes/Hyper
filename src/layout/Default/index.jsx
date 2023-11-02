import { Outlet } from 'react-router-dom'
import { Body } from './style'

export function DefaultLayout() {
  return (
    <Body>
      <Outlet />
    </Body>
  )
}
