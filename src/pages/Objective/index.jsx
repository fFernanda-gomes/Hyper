import { GlobalStyle } from '../../styles/Global'

import { ArrowRight } from '@phosphor-icons/react'
import peca from '../../assets/peca.svg'
import brain from '../../assets/brain.svg'

import {
  Body,
  Button,
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  FourthContainer,
  Containers,
  Main,
  Title,
} from './styles'

export function Objective() {
  return (
    <Body>
      <Main>
        <Title>
          <span>Objetivos</span> <br />
          principais
        </Title>

        <Containers>
          <FirstContainer>
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
          </FirstContainer>

          <SecondContainer>
            <h2>Title here and here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button>
              <ArrowRight size={28} color="#ffffff" weight="light" />
            </Button>
          </SecondContainer>

          <ThirdContainer>
            <h2>Title here and here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <Button>
              <ArrowRight size={28} color="#ffffff" weight="light" />
            </Button>
          </ThirdContainer>

          <FourthContainer>
            <h2>Title here and here</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem
              ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.
            </p>
            <Button>
              <ArrowRight size={28} color="#ffffff" weight="light" />
            </Button>
            <img src={brain} alt="" className="fourthImg" />
          </FourthContainer>
        </Containers>
      </Main>
      <GlobalStyle />
    </Body>
  )
}
