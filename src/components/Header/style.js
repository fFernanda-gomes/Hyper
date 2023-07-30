import styled from 'styled-components'

export const HeaderContainer = styled.header`
  padding: 32px 48px 72px 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-family: 'Montserrat', sans-serif;

  @media (min-width: 950px) {
    justify-content: center;
    padding-top: 64px;
    padding-bottom: 112px;

    .menu-burger {
      display: none;
    }

    .img {
      position: absolute;
    }

    .logo {
      left: 80px;
      width: 32px;
      height: 44px;
    }

    .user {
      top: 55px;
      right: 90px;
    }
  }

  @media (min-width: 1440px) {
    justify-content: center;
    align-items: center;
    padding-top: 64px;
    padding-bottom: 112px;

    .menu-burger {
      display: none;
    }

    .img {
      position: absolute;
    }

    .logo {
      left: 96px;
      width: 42px;
      height: 54px;
    }

    .user {
      top: 55px;
      right: 110px;
    }
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
    display: flex;
    padding-inline: 115px;
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
