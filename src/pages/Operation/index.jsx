import {
  Align,
  Containers,
  H2,
  ImageContainer,
  Main,
  Mode1,
  Mode2,
  Mode3,
  Mode4,
  Separador,
  Text,
  Title,
} from './style'

import yt from '../../assets/youtube.svg'
import { useState } from 'react'
import { MenuMobile } from '../../components/Header/MenuMobile'
import { Header } from '../../components/Header'

export function Operation() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Align>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

      <Main>
        <Title>
          <span>Funcionamento</span> do Projeto
        </Title>

        <Containers>
          <Mode1>
            <H2>Modo Foco Personalizado</H2>
            <Text>
              Personalize o dispositivo de acordo com suas necessidades
              específicas, garantindo uma otimização personalizada do foco. Isso
              permite que cada usuário adapte o dispositivo de forma única,
              maximizando sua concentração.
            </Text>
          </Mode1>
          <Mode2>
            <H2>Aplicativo Integrado</H2>
            <Text>
              Ganhe eficiência no controle das etiquetas e alarmes, otimizando a
              gestão de suas tarefas com facilidade e agilidade. Com essa
              abordagem prática, você terá maior controle sobre seus
              compromissos, permitindo um gerenciamento de tempo mais eficaz.
            </Text>
          </Mode2>
          <Separador>
            <Mode4>
              <H2>Modo Pomodoro personalizado</H2>
              <Text>
                Desfrute ao máximo da técnica Pomodoro com a ajuda de lembretes
                e temporizadores integrados, tornando sua produtividade ainda
                mais eficaz. Isso permite que você siga a técnica com
                facilidade, mantendo seu foco e gerenciando seu tempo de maneira
                mais eficiente.
              </Text>
            </Mode4>
          </Separador>

          <ImageContainer>
            <img src={yt} alt="" />
          </ImageContainer>
        </Containers>
      </Main>
    </Align>
  )
}
