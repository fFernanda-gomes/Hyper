import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 32px 48px 72px 48px;
  font-family: 'Montserrat', sans-serif;

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
