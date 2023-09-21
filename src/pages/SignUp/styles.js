import styled from 'styled-components'

export const MainContainer = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;

  h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 36px;
    font-weight: 700;
    text-align: center;
  }

  Form {
    margin-bottom: 64px;
  }

  @media (min-width: 950px) {
    background: rgba(0, 0, 0, 0.8);
    border-radius: 32px;
    width: 640px;
    padding-block: 47px 64px;
    margin-inline: auto;

    h1 {
      display: none;
    }

    img {
      display: flex;
      padding-bottom: 46px;
    }
  }
`

export const SubTitle = styled.div`
  max-width: 217px;
  display: flex;
  align-items: left;
  justify-content: left;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 500;
    text-align: start;

    margin-block: 1px 52px;
  }
`

export const InputsContainer = styled.div`
  margin: 0 auto;
`

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
  justify-content: end;

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
