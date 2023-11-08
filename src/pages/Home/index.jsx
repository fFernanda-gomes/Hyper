import { Header } from '../../components/Header'

import logoTitle from '../../assets/titleHyper.svg'
import TitleWeb from '../../assets/LogoWeb.svg'
import glasses from '../../assets/glasses.svg'
import ButtonMore from '../../assets/ButtonMore.svg'

import {
  BarraVertical,
  Body,
  Button,
  DiferencialContainer,
  IntroducaoContainer,
  ItemList,
  List,
  LogoContainer,
  Main,
  Paragrafo,
  ThirdTitle,
  UlArea,
} from './styles'
import { useState } from 'react'
import { MenuMobile } from '../../components/Header/MenuMobile'

export function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Body>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <Main>
        <LogoContainer>
          <img src={logoTitle} alt="" className="TitleMobile" />
          <img src={TitleWeb} alt="" className="TitleWeb" />
          <h2>FOCO E ROTINA</h2>
        </LogoContainer>

        <IntroducaoContainer>
          <BarraVertical />
          <p>
            Sua chave para um foco excepcional. Transforme sua rotina e liberte
            seu potencial com o dispositivo que revoluciona a vida das pessoas
            com TDAH.
          </p>
        </IntroducaoContainer>

        <Button href="#diferencial">
          More
          {/* <img src={ButtonMore} alt="" /> */}
        </Button>

        <DiferencialContainer id="diferencial">
          <div>
            <ThirdTitle>
              <span>Diferenciais</span> <br className="br" /> do projeto
            </ThirdTitle>
            <Paragrafo>
              O Hyper oferece uma experiência única com seus diferenciais
              exclusivos, incluindo:
            </Paragrafo>
            <UlArea>
              <List>
                <ItemList>
                  <strong>Modo Foco Personalizado</strong>
                </ItemList>
                <ItemList>
                  <strong>Modo Pomodoro personalizado</strong>
                </ItemList>
                <ItemList>
                  <strong>Aplicativo Integrado</strong>
                </ItemList>
              </List>
            </UlArea>
          </div>

          <img src={glasses} alt="" />
        </DiferencialContainer>
      </Main>
    </Body>
  )
}
