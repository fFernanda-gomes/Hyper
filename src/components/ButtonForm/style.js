import styled from 'styled-components'

export const ButtonComponent = styled.button`
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
