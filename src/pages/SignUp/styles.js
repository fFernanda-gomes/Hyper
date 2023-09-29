import styled from 'styled-components'

export const Align = styled.div`
  height: 100vh;
`

export const MainContainer = styled.main`
  padding: 0 3rem 0 3rem;
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

  form {
    margin-bottom: 1.5rem;
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

    form {
      margin-bottom: 1rem;
    }
  }
`

export const Title = styled.div`
  display: flex;

  @media (min-width: 850px) {
    display: none;
  }
`

export const SubTitle = styled.div`
  max-width: 220px;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 20px;
    font-weight: 500;

    margin-block: 1px 52px;
    margin-left: 0.5rem;
  }

  @media (min-width: 850px) {
    display: none;
  }
`

export const Logo = styled.div`
  display: none;

  @media (min-width: 850px) {
    display: flex;

    img {
      width: 4rem;
      height: 4.5rem;
      margin-bottom: 3.15rem;
      margin-inline: auto;
    }
  }
`

export const InputsContainer = styled.div`
  margin: 0 auto;

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
  padding-top: 1rem;
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

  @media (min-width: 850px) {
    label {
      font-size: 1rem;
    }
  }
`
