import { GlobalStyle } from '../../styles/Global'
import { Header } from '../../components/Header'

import peca from '../../assets/peca.svg'
import brain from '../../assets/brain.png'
import { ArrowRight } from '@phosphor-icons/react'

import { Body, Button, Container, Containers, Main, Title } from './styles'

export function Objetivos() {
  return (
    <Body>
      <Header />

      <Main>
        <Title>
          <span>Objetivos</span> <br />
          principais
        </Title>

        <Containers>
          <Container className="first">
            <img src={peca} alt="" className="firstImg" />
            <h2 className="firstTitle">Title here and here</h2>
            <p className="firstP">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. amet,
              consectetur adipiscing elit.
            </p>
            <Button>
              <ArrowRight size={28} color="#ffffff" weight="light" />
            </Button>
          </Container>

          <div className="grid">
            <Container className="second">
              <h2>Title here and here</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet,
                consectetur adipiscing elit.
              </p>
              <Button>
                <ArrowRight size={28} color="#ffffff" weight="light" />
              </Button>
            </Container>

            <Container className="third">
              <h2>Title here and here</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. amet,
                consectetur adipiscing elit.
              </p>
              <Button>
                <ArrowRight size={28} color="#ffffff" weight="light" />
              </Button>
            </Container>

            <Container className="fourth">
              <h2>Title here and here</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod.
              </p>
              <Button>
                <ArrowRight size={28} color="#ffffff" weight="light" />
              </Button>
              <img src={brain} alt="" className="fourthImg" />
            </Container>
          </div>
        </Containers>
      </Main>
      <GlobalStyle />
    </Body>
  )
}
