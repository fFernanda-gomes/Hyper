import styled from 'styled-components'

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
