import styled from 'styled-components'

export const LoginArea = styled.div`
  width: 279px;
  height: 48px;
  border: 2px solid #858585;
  background: (133, 133, 133, 1);

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

  @media (min-width: 850px) {
    background: rgba(217, 217, 217, 1);
    border: 2px solid #d9d9d9;
  }
`

export const Container = styled.div`
  background: #5f5f5f;
  border: 2px solid #858585;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  width: 17.4375rem;
  height: 3rem;

  @media (min-width: 850px) {
    background: rgba(217, 217, 217, 1);
    border: 2px solid #d9d9d9;

    width: 32rem;
    height: 4rem;

    border-radius: 0.3125rem;
  }
`

export const InputContainer = styled.input`
  background: #5f5f5f;
  border: none;
  padding: 0.75rem;
  width: 100%;

  &::placeholder {
    color: #ffffffb5;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
  }

  @media (min-width: 850px) {
    background: rgba(217, 217, 217, 1);
    border: none;
    padding: 1rem;

    &::placeholder {
      color: #606060;
      font-size: 1.25rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }
  }
`
