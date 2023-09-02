import styled from 'styled-components'


export const Body = styled.body`
 
`

export const Main = styled.main`
  padding: 0 3rem 5rem 3rem;

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
  }
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5625rem;
  font-weight: 700;
  margin-bottom: 83px;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }
`

export const Container = styled.div`
  color: white;
  background: rgba(239, 239, 239, 0.20);
  border-radius: 12px;
  padding: 24px;

  h2 {
    font-family: 'Montserrat', sans-serif;
  }
  
  p{
    font-family: 'Poppins', sans-serif;
    color: rgba(255, 255, 255, 0.9);
    text-align: justify;
    margin-top: 4px;
    font-size: 15.8px;
  }
`

export const FirstContainer = styled(Container)`
  grid-row: 1 / 3;
  width: 328px;

  img {
    width: 271px;
    height: 237px;
    margin-top: -4.5rem;
  }
`
export const SecondContainer = styled(Container)`
  width: 364px;
`
export const ThirdContainer = styled(Container)`
  width: 364px;
`
export const FourthContainer = styled(Container)`
  grid-column: 2 / 4;

  p{
    width: 476px;
  }

  img {
    width: 238px;
    height: 216px;
  }
`

export const Button = styled.button`
  background: none;
  border: 2px solid ${({ theme }) => theme.colors.primary_medium};
  border-radius: 16px;
  margin-top: 1rem;
  padding-inline: 24px;

  display: flex;
  align-items: center;
`
