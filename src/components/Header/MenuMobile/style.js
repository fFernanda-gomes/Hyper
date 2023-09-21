import styled, { css } from 'styled-components'

export const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;

  backdrop-filter: blur(3px);
  background: linear-gradient(
    89deg,
    rgba(54, 167, 219, 0.8) 30.73%,
    rgba(108, 236, 210, 0.8) 99.99%,
    rgba(95, 206, 233, 0.8) 100%
  );

  transition: 0.5s;
  transform: translateX(-50px);

  opacity: 0;
  pointer-events: none;

  ${({ isVisible }) =>
    isVisible &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateX(0);
    `}
`

export const Button = styled.button`
  background: transparent;
  border: none;

  position: absolute;
  top: 2rem;
  left: 2rem;
`

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  a {
    font-family: 'Poppins', sans-serif;
    text-decoration: none;
    font-weight: 600;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #fff;
  }
`
