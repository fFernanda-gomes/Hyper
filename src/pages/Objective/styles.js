import styled from 'styled-components'

export const ContainerMain = styled.div`
  @media (min-width: 950px) {
    height: 155vh;
  }
`

export const Main = styled.main`
  padding: 0 3rem 5rem 3rem;

  opacity: 0;
  animation: objective 1.5s forwards;

  @keyframes objective {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (min-width: 950px) {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 32px;
    width: 78rem;
    margin-inline: auto;
    padding: 4rem;

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
    gap: 1rem;
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 3.25rem;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }
`

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.white};
  background: rgba(239, 239, 239, 0.2);
  border-radius: 12px;
  padding: 2rem;
  margin-bottom: 4rem;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 1.5rem;
  }

  p {
    font-family: 'Poppins', sans-serif;
    color: rgba(255, 255, 255, 0.9);
    text-align: justify;
    font-size: 1rem;
    line-height: 1.375rem;
    margin-block: 1rem 2rem;
  }

  @media (min-width: 950px) {
    margin-bottom: 0;
    p {
      margin-block: 1rem 0;
    }
  }
`

export const FirstContainer = styled(Container)`
  img {
    margin-block: -4.5rem 2rem;
  }

  h2 {
    font-size: 1.25rem;
  }

  p {
    font-size: 0.9rem;
  }

  @media (min-width: 950px) {
    grid-row: 1 / 3;

    img {
      margin-block: -5rem 1.5rem;
      width: 16.9375rem;
      height: 14.8125rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      font-size: 1rem;
    }
  }
`
export const SecondContainer = styled(Container)``
export const ThirdContainer = styled(Container)``
export const FourthContainer = styled(Container)`
  button {
    margin-bottom: 3rem;
  }

  .fourthImg {
    margin: 0 0 0 3.5rem;
  }

  @media (min-width: 950px) {
    grid-column: 2 / 4;
    display: flex;

    button {
      margin-block: 1.3rem 0;
    }
  }
`

export const Button = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primary_medium};
  border-radius: 16px;
  margin-block: 1rem 0;
  padding-inline: 1.5rem;

  display: flex;
  align-items: center;
`
