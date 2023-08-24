import styled from 'styled-components'
import objetivosMobile from '../../assets/objetivosMobile.png'

export const Body = styled.body`
  background: url(${objetivosMobile});
  background-size: cover;

  @media (min-width: 950px) {
    background-repeat: no-repeat;
  }
`

export const Main = styled.main`
  padding: 0 3rem 5rem 3rem;

  @media (min-width: 950px) {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 32px;
    width: 78rem;
    margin-inline: auto;
    padding: 4rem;

    .grid {
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
    }

    br {
      display: none;
    }

    h1 {
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }
  }
`

export const Containers = styled.div`
  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5625rem;
  font-weight: 700;
  margin-bottom: 3.25rem;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }
`

export const Container = styled.div`
  color: white;
  border: 1px solid red;
`

export const FirstContainer = styled(Container)`
  grid-row: 1 / 3;
`
export const SecondContainer = styled(Container)``
export const ThirdContainer = styled(Container)``
export const FourthContainer = styled(Container)`
  grid-column: 2 / 4;
`

export const Button = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primary_medium};
  border-radius: 16px;
  margin-top: 2rem;
  padding-inline: 24px;

  display: flex;
  align-items: center;
`
