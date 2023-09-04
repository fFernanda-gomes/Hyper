import { Header } from '../../components/Header'
import { GlobalStyle } from '../../styles/Global'

import logoTitle from '../../assets/titleHyper.svg'
import TitleWeb from '../../assets/LogoWeb.svg'
import glasses from '../../assets/glasses.svg'

import {
  BarraHorizontal,
  BarraVertical,
  Body,
  ContainerFlex,
  ContainerText,
  DiferencialContainer,
  IntroducaoContainer,
  LogoContainer,
  Main,
  Paragrafo,
  ParagrafoBarra,
  ParagrafoContainer,
  ThirdTitle,
} from './styles'

export function Home() {
  return (
    <Body>
      <Header />
      <Main>
        <LogoContainer>
          <img src={logoTitle} alt="" className="TitleMobile" />
          <img src={TitleWeb} alt="" className="TitleWeb" />
          <h2>FOCO E ROTINA</h2>
        </LogoContainer>

        <IntroducaoContainer>
          <BarraVertical />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo accumsan lacus
            vel.
          </p>
        </IntroducaoContainer>

        <button>More</button>

        <DiferencialContainer>
          <div>
            <ThirdTitle>
              <span>Diferenciais</span> do projeto
            </ThirdTitle>
            <Paragrafo>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel{' '}
            </Paragrafo>

            <ContainerFlex>
              <BarraHorizontal />
              <ParagrafoBarra>
                Lorem ipsum dolor sit amet, consectetur
              </ParagrafoBarra>
            </ContainerFlex>

            <ContainerText>
              <ParagrafoContainer>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{' '}
                <span>V</span> tempor incididunt ut labore et dolore magna
                aliqua.
              </ParagrafoContainer>
            </ContainerText>
          </div>

          <img src={glasses} alt="" />
        </DiferencialContainer>
        <GlobalStyle />
      </Main>
    </Body>
  )
}
