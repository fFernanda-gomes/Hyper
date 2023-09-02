import styled from 'styled-components'
import bgHomeMobile from '../../assets/bgHomeMobile.svg'
import bgHomeWeb from '../../assets/bgHomeWeb.svg'

export const Body = styled.body`
  padding-bottom: 139px;
  background: url(${bgHomeMobile});
  background-size: cover;

  @media (min-width: 850px) {
    background: url(${bgHomeWeb});
    background-size: cover;
  }
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
    font-family: 'Montserrat', sans-serif; //mudar pro global theme
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
    font-family: 'Poppins', sans-serif; //mudar pro global theme
    font-size: 0.75rem;
    font-weight: 400;
  }
`

export const BarraVertical = styled.div`
  width: 10px;
  height: 76px;
  background: ${({ theme }) => theme.colors.primary_medium};
  margin-right: 26px;
`

export const DiferencialContainer = styled.div`
  margin-top: 136px;
  color: ${({ theme }) => theme.colors.white};
`

export const ThirdTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif; //mudar pro global theme

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }
`

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Paragrafo = styled.p`
  font-family: 'Poppins', sans-serif; //mudar pro global theme
  font-weight: 400;
  font-size: 12px;
  padding-block: 32.01px;
`

export const ParagrafoBarra = styled.p`
  font-family: 'Poppins', sans-serif; //mudar pro global theme
  font-weight: 400;
  font-size: 12px;
`

export const ParagrafoContainer = styled.p`
  font-family: 'Poppins', sans-serif; //mudar pro global theme
  font-weight: 400;
  font-size: 12px;
`

export const BarraHorizontal = styled.div`
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary_medium};
  margin-right: 10px;
`

export const ContainerText = styled.div`
  background: rgba(31, 31, 31, 0.8);
  width: 279px;
  border-radius: 16px;
  padding: 16px;
  margin-block: 32.01px;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
    font-weight: 700;
  }
`
