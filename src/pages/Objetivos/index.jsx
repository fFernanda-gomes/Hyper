import { GlobalStyle } from '../../styles/Global'
import { Header } from '../../components/Header'
import { Container, Main, Title } from './styles'

import peca from '../../assets/peca.svg'

export function Objetivos() {
  return (
    <body>
      <Header />

      <Main>
        <Title>
          <span>Objetivos</span> <br />
          principais
        </Title>

        <Container>
          <img src={peca} alt="" />
          <h2>Title here and here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur
            adipiscing elit.
          </p>
          <button></button>
        </Container>

        <Container>
          <h2>Title here and here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur
            adipiscing elit.
          </p>
          <button></button>
        </Container>

        <Container>
          <h2>Title here and here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur
            adipiscing elit.
          </p>
          <button></button>
        </Container>

        <Container>
          <h2>Title here and here</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. amet, consectetur
            adipiscing elit.
          </p>
          <button></button>
          <img src={peca} alt="" />
        </Container>
      </Main>
      <GlobalStyle />
    </body>
  )
}
