import styled, { keyframes } from 'styled-components'
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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 850px) {
    margin: 0 6rem 4rem 6rem;
  }
`

export const LogoContainer = styled.div`
  color: white;
  text-align: center;

  opacity: 0;
  animation: appear 1.4s forwards;

  @keyframes appear {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

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

  opacity: 0;
  animation: appear 1.4s forwards;

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
      font-size: 1.15rem;
      font-weight: 400;
      line-height: 1.635rem;
      text-transform: capitalize;
    }
  }
`

export const Button = styled.a`
  border: none;
  background: none;
  width: 11.5rem;
  height: 5.5rem;
  margin: auto;

  opacity: 0;
  animation: appearButton 1.5s forwards;

  @keyframes appearButton {
    0% {
      transform: translateY(90px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
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
  max-width: 1340px;

  @media (min-width: 850px) {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 11.5rem;
    border-radius: 2rem;
    //opacity: 0.32;
    fill-opacity: 0.2;
    background: rgba(0, 0, 0, 0.5);

    padding: 5rem 6.88rem;

    img {
      width: 23.125rem;
      height: 23.51188rem;
      margin-top: 5rem;
    }
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
  font-size: 1rem;
  padding-block: 32.01px;

  @media (min-width: 850px) {
    margin-right: 7.5rem;
    text-align: justify;
    font-size: 1.2rem;
    line-height: 1.875rem;
    text-transform: capitalize;
    max-width: 600px;
  }
`

export const UlArea = styled.div`
  border-radius: 16px;
  margin-bottom: 2rem;
  padding-left: 0.8rem;

  @media (min-width: 850px) {
    padding-left: 1.5rem;
    max-width: 35.5rem;
  }
`

export const List = styled.ul`
  list-style: none;
`

export const ItemList = styled.li`
  color: #fff;
  font-family: 'Poppins', sans-serif;
  line-height: 2.3rem;
  font-size: 15px;
  font-weight: 400;

  &::before {
    content: '•';
    color: #36a7db;
    font-size: 1.3rem;
    display: inline-block;
    width: 0.6em;
    margin-left: -0.2em;
  }

  @media (min-width: 850px) {
    font-size: 1.2rem;
  }
`
