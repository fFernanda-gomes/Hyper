import styled from 'styled-components'

export const Container = styled.div`
  background: #5f5f5f;
  border: 2px solid #858585;
  display: flex;
  align-items: center;
  padding: 0.75rem;
  width: 17.4375rem;
  height: 3rem;

  .web {
    display: none;
  }

  @media (min-width: 850px) {
    background: rgba(217, 217, 217, 1);
    border: 2px solid #d9d9d9;

    width: 32rem;
    height: 4rem;

    border-radius: 0.3125rem;

    .mobile {
      display: none;
    }
    .web {
      display: flex;
    }
  }
`

export const InputContainer = styled.input`
  background: #5f5f5f;
  border: none;
  padding: 0.75rem;
  width: 100%;
  outline: none;

  color: #ffffffb5;
  font-size: 1rem;
  font-weight: 500;

  &::placeholder {
    color: #ffffffb5;
    font-size: 1rem;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    text-align: left;
  }

  @media (min-width: 850px) {
    background: rgba(217, 217, 217, 1);
    border: none;
    padding-block: 0.3rem 0;

    font-family: 'Poppins', sans-serif;
    color: #606060;
    font-size: 1rem;
    font-weight: 500;

    &::placeholder {
      color: #606060;
      font-size: 1.25rem;
      font-weight: 500;
      font-family: 'Poppins', sans-serif;
    }
  }
`
