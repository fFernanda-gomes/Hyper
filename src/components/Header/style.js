import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 32px 48px 72px 48px;
  font-family: 'Montserrat', sans-serif;

  opacity: 0;
  animation: appearMenu 1.7s forwards;

  @keyframes appearMenu {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: translate 0.3s;

    .list {
      display: block;
    }
  }

  .web {
    display: none;
  }

  @media (min-width: 950px) {
    padding-top: 64px;
    padding-bottom: 112px;

    .mobile {
      display: none;
    }

    .web {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .list {
        display: none;
      }

      a:hover {
        scale: 1.2;
        transition: scale 0.3s;
      }
    }
  }

  @media (min-width: 1440px) {
    padding-top: 64px;
    padding-bottom: 112px;

    .web {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`

export const Button = styled.button`
  background: transparent;
  border: none;
`

export const Menu = styled.div`
  .options {
    border: 1px solid slateblue;
    width: 10rem;
    transition: translate 0.3s;
  }

  .options.close {
    translate: 0;
  }
`

export const NavContainer = styled.nav`
  display: none;

  @media (min-width: 950px) {
    display: flex;
    gap: 25px;

    a {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-size: 14px;

      display: inline-block;
      position: relative;

      height: 2.5rem;
      line-height: 2.5rem;
      transition: all 0.3s;
    }

    a:hover {
      transition: all 0.2s;
      color: ${({ theme }) => theme.colors.primary_medium};
      scale: 1.2;
      font-weight: 600;
    }

    a::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      width: 65%;
      height: 1px;
      background: #fff;

      transform: scaleX(0);
      transform-origin: right;
      transition: transform 0.4s;
    }

    a:hover::after {
      transform: scaleX(1);
      transform-origin: left;
      transition: transform 0.4s;
    }
  }

  @media (min-width: 1440px) {
    gap: 50px;

    a {
      text-decoration: none;
      color: #fff;
      text-transform: uppercase;
      font-size: 16px;
    }
  }
`

// shorthand: top right bottom left
