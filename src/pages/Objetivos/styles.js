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
    display: flex;
    gap: 2rem;
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
  background: rgba(239, 239, 239, 0.2);
  width: 17.4375rem;
  padding: 2rem;
  justify-content: left;
  margin-bottom: 4rem;
  border-radius: 12px;

  .firstImg {
    margin-top: -4.4rem;
  }

  .firstTitle {
    font-size: 1.25rem;
  }

  .firstP {
    font-size: 0.75rem;
  }

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.white};
    font-size: 1.5rem;
    line-height: normal;
  }

  p {
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.white};
    font-family: 'Poppins', sans-serif;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.375rem;
    text-align: justify;
  }

  .fourthImg {
    margin: 3rem 0 0rem 3.5rem;
  }

  @media (min-width: 950px) {
    padding: 1.5rem;

    &.first {
      width: 328px;
      padding: 1.5rem;
    }

    &.first,
    &.second,
    &.third,
    &.fourth {
      h2 {
        font-size: 1.5rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      p {
        font-size: 0.9rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.375rem;
        text-transform: capitalize;
      }
    }

    .firstImg {
      margin-top: -4rem;
    }

    &.second,
    &.third {
      width: 22.75rem;
      height: 13.8125rem;
    }

    &.fourth {
      width: 47.5rem;
      height: 13.75rem;

      p {
        width: 29.75rem;
      }

      img {
        margin: 0;
      }
    }
  }
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
