import styled from "styled-components";
import bgHomeMobile from "../../assets/bgHomeMobile.png"

export const Body = styled.body`
  background: url(${bgHomeMobile});
  background-position: 100%;
  padding-bottom: 139px;
`

export const Main = styled.main`
  margin: 0 48px 0 48px;
  display: grid;
  align-items: center;
  justify-content: center;
`

export const LogoContainer = styled.div`
  color: white;
  text-align: center;

  h2 {
    font-size: 0.75rem;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    letter-spacing: 10px;
    margin-block: 8px 64px;
  }
`

export const IntroducaoContainer = styled.div`
  display: flex;
  color: white;
  margin-bottom: 112px;

  p {
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
    font-weight: 400;
  }
`

export const BarraVertical = styled.div`
  width: 10px;
  height: 76px;
  background: #36A7DB;
  margin-right: 26px;
`

export const DiferencialContainer = styled.div`
  margin-top: 136px;
  color: white;
`

export const ThirdTitle = styled.h3`
  color: white;
  font-size: 30px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif;

  span {
    color: #36A7DB;
  }
`

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Paragrafo = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
  padding-block: 32.01px;
`

export const ParagrafoBarra = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
`

export const ParagrafoContainer = styled.p`
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 12px;
`

export const BarraHorizontal = styled.div`
  width: 24px;
  height: 2px;
  background: #36A7DB;
  margin-right: 10px;
`

export const ContainerText = styled.div`
  background: rgba(31, 31, 31, 0.8);
  width: 279px;
  border-radius: 16px;
  padding: 16px;
  margin-block: 32.01px;

  span{
    color: #36A7DB;
    font-weight: 700;
  }
`