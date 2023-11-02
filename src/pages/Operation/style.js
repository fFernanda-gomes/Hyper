import styled from 'styled-components'

export const Align = styled.div`
  height: 200vh;

  @media (min-width: 850px) {
    height: 145vh;
  }
`

export const Main = styled.main`
  padding: 0 3rem 6.94rem 3rem;

  opacity: 0;
  animation: operation 1.5s forwards;

  @keyframes operation {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (min-width: 850px) {
    border-radius: 2rem;
    background: rgba(0, 0, 0, 0.8);
    margin-inline: auto;
    padding: 4.8rem 6rem 5.06rem 4rem;
    max-width: 1368px;
  }
`

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.875rem;
  margin-bottom: 3.37rem;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }

  @media (min-width: 850px) {
    font-size: 2.5rem;
    margin-bottom: 4rem;
  }
`

export const Containers = styled.div`
  @media (min-width: 850px) {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    gap: 3rem;
  }
`

export const Container = styled.div``

export const Mode1 = styled(Container)`
  @media (min-width: 850px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`
export const Mode2 = styled(Container)`
  @media (min-width: 850px) {
    grid-column: 3 / 3;
    grid-row: 1 / 2;
  }
`

export const Separador = styled.div`
  @media (min-width: 850px) {
    display: flex;
    gap: 3rem;
    grid-row: 2;
    grid-column: 1 / 4;
  }
`

export const Mode3 = styled(Container)``
export const Mode4 = styled(Container)``

export const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0.22rem;

  @media (min-width: 850px) {
    font-size: 1.7rem;
    margin-bottom: 1rem;
  }
`

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  text-align: justify;
  font-size: 0.85rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;

  @media (min-width: 850px) {
    font-size: 1.1rem;
    line-height: normal;
    color: rgba(255, 255, 255, 0.9);
    margin-bottom: 1rem;
  }
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (min-width: 850px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;

    img {
      width: 31.625rem;
      height: 19.9375rem;
    }
  }
`
