import styled from 'styled-components'
import bgHomeMobile from '../../assets/bgHomeMobile.svg'
import bgHomeWeb from '../../assets/bgHomeWeb.svg'

export const Body = styled.div`
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

  .TitleWeb {
    display: none;
  }

  .br {
    display: none;
  }

  @media (min-width: 850px) {
    .TitleWeb {
      display: flex;
      margin: auto;
    }

    .TitleMobile {
      display: none;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 600;
      letter-spacing: 1.5rem;

      margin-block: 0 5.5rem;
    }

    .br {
      display: flex;
    }
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

  @media (min-width: 850px) {
    justify-content: center;
    margin-bottom: 4rem;

    p {
      width: 34.9375rem;
      height: 5.25rem;
      text-align: justify;
      font-size: 1rem;
      font-weight: 400;
      line-height: 1.375rem;
      text-transform: capitalize;
    }
  }
`

export const Button = styled.button`
  border: none;
  background: none;
  width: 11.5rem;
  height: 5.5rem;
  margin: auto;
`

export const BarraVertical = styled.div`
  width: 10px;
  height: 76px;
  background: ${({ theme }) => theme.colors.primary_medium};
  margin-right: 26px;

  @media (min-width: 850px) {
    width: 0.125rem;
    height: 5.25rem;
    margin-right: 1.81rem;
  }
`

export const DiferencialContainer = styled.div`
  margin-top: 136px;
  color: ${({ theme }) => theme.colors.white};

  @media (min-width: 850px) {
    display: flex;
    margin-top: 11.5rem;
    border-radius: 2rem;
    //opacity: 0.32;
    background: rgba(0, 0, 0, 0.8);
    padding: 6rem 7.88rem;
  }
`

export const ThirdTitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 30px;
  font-weight: 700;
  font-family: 'Montserrat', sans-serif; //mudar pro global theme

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }

  @media (min-width: 850px) {
    font-size: 2.5rem;
    margin-bottom: 1.87rem;
  }
`

export const ContainerFlex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 850px) {
    justify-content: left;
  }
`

export const Paragrafo = styled.p`
  font-family: 'Poppins', sans-serif; //mudar pro global theme
  font-weight: 400;
  font-size: 12px;
  padding-block: 32.01px;

  @media (min-width: 850px) {
    width: 31.625rem;
    text-align: justify;
    font-size: 0.9rem;
    line-height: 1.375rem;
    text-transform: capitalize;
    margin-bottom: 0.63rem;
  }
`

export const ParagrafoBarra = styled.p`
  font-family: 'Poppins', sans-serif; //mudar pro global theme
  font-weight: 400;
  font-size: 12px;
`

export const BarraHorizontal = styled.div`
  width: 24px;
  height: 2px;
  background: ${({ theme }) => theme.colors.primary_medium};
  margin-right: 10px;

  @media (min-width: 850px) {
    width: 3.25rem;
    height: 0.125rem;
    margin-right: 2.88rem;
  }
`

export const ParagrafoContainer = styled.p`
  font-family: 'Poppins', sans-serif; //mudar pro global theme
  font-weight: 400;
  font-size: 12px;

  @media (min-width: 850px) {
    line-height: 1.375rem;
    text-transform: capitalize;
  }
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

  @media (min-width: 850px) {
    width: 31.625rem;
    height: 6.125rem;
    margin-block: 1.88rem 0;
  }
`
