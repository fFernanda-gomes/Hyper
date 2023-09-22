import styled from 'styled-components'
import bullet from '../../assets/bulletList.svg'
import bgMobile from '../../assets/bgPublicMobile.svg'

export const Body = styled.div`
  background: url(${bgMobile});
  background-size: cover;
  height: 100vh;
`

export const Main = styled.main`
  padding: 0 3rem 4rem 3rem;

  @media (min-width: 850px) {
    margin: 0 6rem 4rem 6rem;
    padding: 6rem 4rem;

    border-radius: 2rem;
    background: rgba(0, 0, 0, 0.8);

    display: flex;

    .content {
      margin-right: 6.5rem;
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
  padding: 1.3rem 0.88rem;
  margin-bottom: 3rem;

  @media (min-width: 850px) {
    padding: 1.5rem;
  }
`

export const List = styled.ul`
  list-style: inside url(${bullet});
  text-align: center;
`

export const ItemList = styled.li`
  color: rgba(239, 239, 239, 0.9);
  font-family: 'Poppins', sans-serif;
  line-height: 2rem;
  font-size: 0.90625rem;
  font-weight: 400;
`
