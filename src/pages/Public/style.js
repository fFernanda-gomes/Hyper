import styled from 'styled-components'
import bgMobile from '../../assets/bgPublicMobile.svg'
import bgWeb from '../../assets/bgWebPublic.svg'

export const Body = styled.div`
  background: url(${bgMobile});
  background-size: cover;

  .imgWeb {
    display: none;
  }

  @media (min-width: 850px) {
    background: url(${bgWeb});
    background-size: cover;
    height: 110vh;
  }
`

export const Main = styled.main`
  max-width: 1248px;
  padding: 0 3rem 4rem 3rem;

  opacity: 0;
  animation: public 1.5s forwards;

  @keyframes public {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (min-width: 850px) {
    margin-bottom: 4rem;
    margin-inline: auto;
    padding: 6rem 4rem 3rem 4rem;

    border-radius: 2rem;
    background: rgba(0, 0, 0, 0.8);

    display: flex;
    justify-content: space-between;

    .content {
      margin-right: 6.5rem;
    }

    .imgMobile {
      display: none;
    }

    .imgWeb {
      display: flex;
    }
  }
`

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.875rem;
  margin-bottom: 0.5rem;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }

  @media (min-width: 850px) {
    font-size: 2.5rem;
    font-weight: 700;
  }
`

export const SubTitle = styled.p`
  font-family: 'Poppins', sans-serif;
  color: rgba(255, 255, 255, 0.9);
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 2.19rem;
`

export const UlArea = styled.div`
  background: rgba(239, 239, 239, 0.2);
  border-radius: 16px;
  padding: 1.3rem 0.5rem 1.3rem 1rem;
  margin-bottom: 3rem;

  @media (min-width: 850px) {
    padding: 1.5rem;
  }
`

export const List = styled.ul`
  list-style: none;
  text-align: start;
  display: grid;
  gap: 0.2rem;

  @media (min-width: 950px) {
    gap: 0.4rem;
  }
`

export const ItemList = styled.li`
  color: rgba(239, 239, 239, 0.9);
  font-family: 'Poppins', sans-serif;
  line-height: 1.7rem;
  font-size: 0.90625rem;
  font-weight: 400;

  &::before {
    content: '•';
    color: #36a7db;
    font-size: 1.3rem;
    display: inline-block;
    width: 0.6em;
    margin-left: -0.2em;
  }

  @media (min-width: 950px) {
    font-size: 1.2rem;
    line-height: 1.5rem;

    &::before {
      content: '•';
      color: #36a7db;
      font-size: 1.8rem;
      display: inline-block;
      width: 0.6em;
      margin-left: -0.2em;
      margin-right: 0;
    }
  }
`
