import styled from 'styled-components'

export const LoginArea = styled.div`
  width: 279px;
  height: 48px;
  border: 2px solid #858585;
  background: #5f5f5f;
  border-radius: 5px;

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
