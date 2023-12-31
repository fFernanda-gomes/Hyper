import styled from 'styled-components'

export const Body = styled.div`
  height: 100vh;
  @media (min-width: 950px) {
    height: 130vh;
  }
  @media (min-width: 1500px) {
    height: 116vh;
  }
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

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

  img {
    display: none;
  }

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: 700;
  }

  p {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    font-weight: 500;

    margin-block: 7px 64px;
  }

  Form {
    margin-bottom: 64px;
  }

  a {
    margin-top: 16px;
    color: rgba(255, 255, 255, 0.6);
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
  }

  @media (min-width: 850px) {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 32px;
    width: 40rem;
    height: 38.5rem;
    padding: 2.92rem 4rem 4rem 4rem;
    margin-inline: auto;

    h1,
    p {
      display: none;
    }

    img {
      display: flex;
      padding-bottom: 46px;
    }

    form {
      margin-bottom: 1.5rem;
    }

    a {
      font-size: 1.125rem;
    }
  }
`

export const InputsContainer = styled.div``
export const InputsContent = styled.div`
  @media (min-width: 850px) {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  @media (min-width: 850px) {
    img {
      width: 10rem;
      height: 7rem;
    }
  }
`

export const Adds = styled.div`
  font-family: 'Poppins', sans-serif;
  padding-top: 16px;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
  }

  label {
    font-weight: 600;
    font-size: 12px;
    padding-left: 10px;
  }

  a {
    margin: 0;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.6);
  }

  @media (min-width: 850px) {
    div {
      margin-top: 4.31rem;
    }

    label {
      font-size: 1.12rem;
    }

    a {
      font-size: 1.12rem;
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
