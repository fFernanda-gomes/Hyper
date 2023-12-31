import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  
  html {
    scroll-behavior: smooth;
  }

  :target {
    scroll-margin-top: 5.5rem;
  }
`
