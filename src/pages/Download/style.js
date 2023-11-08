import styled from 'styled-components'
import bgWeb from '../../assets/bgDownloadWeb.svg'
import bgMobile from '../../assets/bgDownloadMobile.svg'

export const Body = styled.div`
  padding-bottom: 139px;
  background: url(${bgMobile});
  background-size: cover;

  @media (min-width: 850px) {
    background: url(${bgWeb});
    background-size: cover;
  }
`

export const Main = styled.main`
  padding: 0 3rem 6.25rem 3rem;

  opacity: 0;
  animation: download 1.5s forwards;

  @keyframes download {
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
    padding: 4.8rem 6rem 7.06rem 4rem;
    max-width: 1348px;
    margin-inline: auto;

    display: flex;
  }
`

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.875rem;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }

  @media (min-width: 850px) {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }
`

export const SubTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 2rem;

  @media (min-width: 850px) {
    font-size: 1rem;
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: justify;
  font-family: 'Poppins', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 3rem;

  @media (min-width: 850px) {
    font-size: 1.3rem;
  }
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;

  @media (min-width: 850px) {
    display: none;
  }
`

export const ImgContainerWeb = styled.div`
  display: none;

  @media (min-width: 850px) {
    display: flex;

    img {
      width: 29.375rem;
      height: 34.5625rem;
      margin-left: 7rem;
    }
  }
`

export const DownloadArea = styled.div`
  display: flex;
  justify-content: center;

  img {
    width: 152px;
    height: 152px;
  }

  @media (min-width: 850px) {
    display: flex;
    margin-inline: 3.13rem 3.12rem;

    img {
      margin-inline: 0.6rem 0.3rem;
      width: 258px;
      height: 258px;
    }
  }
`

export const Button = styled.button`
  background: transparent;
  border-radius: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.primary_medium};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.41rem 0.73rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.9rem;
    font-weight: 500;
    margin-left: 0.53rem;
  }

  .webI {
    display: none;
  }

  @media (min-width: 850px) {
    padding: 0.38rem 2rem;
    gap: 0.15rem;
    cursor: pointer;

    span {
      font-size: 1rem;
      font-weight: 500;
      margin-left: 0.53rem;
    }

    .webI {
      display: flex;
    }

    .mobileI {
      display: none;
    }

    &:hover {
      background: rgba(54, 167, 219, 1);
    }
  }
`
