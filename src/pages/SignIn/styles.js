import styled from 'styled-components'

export const Body = styled.body`
  /* @media (min-width: 950px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  } */
`

export const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

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

  @media (min-width: 950px) {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 32px;
    width: 640px;
    padding-block: 47px 64px;
    margin-inline: auto;

    h1,
    p {
      display: none;
    }

    img {
      display: flex;
      padding-bottom: 46px;
    }
  }
`

export const InputsContainer = styled.div``

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const LoginArea = styled.div`
  width: 279px;
  height: 48px;
  border: 2px solid #858585;
  background: #5f5f5f;

  padding: 12px;
  display: flex;
  align-items: center;

  input {
    padding-left: 12px;
    background: none;
    border: none;
    outline: none;

    &::placeholder {
      color: #ffffffb5;
      font-size: 16px;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
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
`
