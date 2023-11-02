import styled from 'styled-components'
import bgWeb from '../../assets/bgDownloadWeb.svg'
import bgMobile from '../../assets/bgOrigenMobile.svg'

export const Body = styled.div`
  padding-bottom: 65px;
  background: url(${bgMobile});
  background-size: cover;

  @media (min-width: 850px) {
    padding-bottom: 9px;

    background: url(${bgWeb});
    background-size: cover;
  }
`

export const Main = styled.main`
  padding: 0 3rem 6.25rem 3rem;

  opacity: 0;
  animation: bibliography 1.5s forwards;

  @keyframes bibliography {
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
    margin: 0 6rem 4rem 6rem;
    padding: 4.8rem 6.5rem 7.06rem 5rem;
    margin-inline: auto;

    max-width: 1348px;
  }
`

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.875rem;
  margin-bottom: 3.5rem;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }

  @media (min-width: 950px) {
    font-size: 2.5rem;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 950px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 7.75rem;
    grid-row-gap: 2rem;
    gap: 2rem;
    align-items: center;
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: justify;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 1rem;

  @media (min-width: 950px) {
    font-size: 1rem;
  }
`
