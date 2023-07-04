import { createGlobalStyle } from "styled-components";
import logoMobile from "../assets/loginMobile.svg"
import bgWeb from "../assets/bgLoginWeb.svg"

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background: url(${logoMobile});
    background-size: cover;
  }

  @media (min-width: 950px) {
    body {
      background: url(${bgWeb});
    }
  }

  @media (min-width: 1400px) {
    body {
      background: url(${bgWeb});
      background-size: cover;
    }
  }
`