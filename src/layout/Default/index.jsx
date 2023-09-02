import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { Body } from "./style";

export function DefaultLayout() {
  return(
    <Body>
      <Header />
      <Outlet />
    </Body>
  )
}