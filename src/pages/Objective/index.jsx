import { GlobalStyle } from '../../styles/Global'

import { ArrowRight } from '@phosphor-icons/react'
import peca from '../../assets/peca.svg'
import brain from '../../assets/brain.svg'

import {
  FirstContainer,
  SecondContainer,
  ThirdContainer,
  FourthContainer,
  Containers,
  Main,
  Title,
  ContainerMain,
} from './styles'

import { MenuMobile } from '../../components/Header/MenuMobile'
import { Header } from '../../components/Header'
import { useState } from 'react'

export function Objective() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  /* 
    <Button>
      <ArrowRight size={28} color="#ffffff" weight="light" />
    </Button> 
  */

  return (
    <ContainerMain>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

      <Main>
        <Title>
          <span>Objetivos</span> <br />
          principais
        </Title>

        <Containers>
          <FirstContainer>
            <img src={peca} alt="" className="firstImg" />
            <h2 className="firstTitle">Melhorar a Qualidade de Vida</h2>
            <p className="firstP">
              Capacitar pessoas com TDAH a gerenciar sua rotina de forma mais
              eficaz, reduzindo o estresse e aumentando a qualidade de vida.
              Isso possibilita que os indivíduos se dediquem mais às suas
              atividades, obtendo resultados mais satisfatórios.
            </p>
          </FirstContainer>

          <SecondContainer>
            <h2>Aumentar a Produtividade</h2>
            <p>
              Potencializar o foco e a concentração, permitindo que os usuários
              realizem suas tarefas com maior eficiência.
            </p>
          </SecondContainer>

          <ThirdContainer>
            <h2>Promover uma Autonomia</h2>
            <p>
              Capacitar os usuários a gerenciar seu TDAH de forma independente,
              proporcionando maior controle sobre sua própria vida.
            </p>
          </ThirdContainer>

          <FourthContainer>
            <div>
              <h2>Promover o Bem-Estar Mental</h2>
              <p>
                Contribuir para a redução da ansiedade e do cansaço mental,
                criando um ambiente propício para um maior equilíbrio emocional
                e mental.
              </p>
            </div>
            <img src={brain} alt="" className="fourthImg" />
          </FourthContainer>
        </Containers>
      </Main>
      <GlobalStyle />
    </ContainerMain>
  )
}
