import styled from 'styled-components'

export const Align = styled.div`
  height: 100vh;
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  color: #fff;

  padding-inline: 3rem;

  opacity: 0;
  animation: appear 1.5s forwards;

  @keyframes appear {
    0% {
      transform: translateY(100px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  @media (min-width: 850px) {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 32px;
    width: 40rem;
    height: 31.5rem;
    padding: 3.44rem 4rem 4rem 4rem;
    margin-inline: auto;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 1.06rem;
  margin-bottom: 4rem;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 2.25rem;
    font-weight: 700;
  }

  @media (min-width: 850px) {
    display: none;
  }
`
export const Form = styled.form`
  margin-bottom: 1.5rem;

  @media (min-width: 850px) {
    margin-bottom: 4rem;
  }
`

export const Logo = styled.div`
  display: none;

  @media (min-width: 850px) {
    display: flex;
    flex-direction: column;

    img {
      width: 4rem;
      height: 4.5rem;
      margin-bottom: 2.56rem;
      margin-inline: auto;
    }

    p {
      font-size: 1rem;
      font-family: 'Poppins', sans-serif;
      margin-bottom: 2rem;
    }
  }
`

export const Button = styled.button`
  width: 279px;
  height: 48px;
  border-radius: 5px;
  border: none;
  background: linear-gradient(to right, #36a7db, #5fcee9);
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  font-family: 'Poppins', sans-serif;

  cursor: pointer;
  outline: none;

  @media (min-width: 850px) {
    width: 32rem;
    height: 4rem;
  }
`
