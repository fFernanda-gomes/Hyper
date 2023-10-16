import { useState } from 'react'
import { Header } from '../../components/Header'
import { MenuMobile } from '../../components/Header/MenuMobile'
import { Body, Container, Main, Text, Title } from './style'

export function Bibliography() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Body>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <Main>
        <Title>
          <span>Origem</span> do Hyper
        </Title>

        <Container>
          <Text>
            A ideia por trás do Hyper surgiu a partir de uma experiência pessoal
            de um dos fundadores do projeto, que sofria com TDAH (Transtorno do
            Déficit de Atenção e Hiperatividade){' '}
          </Text>
          <Text>
            Ele enfrentou desafios diários para manter o foco e gerenciar sua
            rotina de maneira eficaz. Essa luta o levou a procurar soluções
            inovadoras para melhorar sua qualidade de vida e sua produtividade.{' '}
          </Text>
          <Text>
            Foi durante esse processo de busca por melhorias que a ideia do
            Hyper começou a tomar forma, nos inspirando. Motivados pela
            inovação, nós unimos nossas mentes criativas, transformando o Hyper
            em um projeto cheio de potencial e esperançaS.{' '}
          </Text>
          <Text>
            Inspirado pela tecnologia e pela inovação, o fundador decidiu criar
            um dispositivo que pudesse oferecer um suporte personalizado para
            pessoas com TDAH, ajudando-as a enfrentar os desafios de
            concentração e organização.{' '}
          </Text>
          <Text>
            Com base em sua própria experiência e em extensa pesquisa, ele
            reuniu uma equipe de especialistas em tecnologia e saúde mental para
            desenvolver o Hyper, com o objetivo de fornecer uma ferramenta
            inovadora que pudesse efetivamente transformar a vida das pessoas
            com TDAH, tornando-a mais produtiva e gratificante.{' '}
          </Text>
          <Text>
            O Hyper surgiu da paixão por melhorar a qualidade de vida das
            pessoas lidando com desafios diários de concentração e
            produtividade. Essa busca constante por melhorias resultou na
            concepção do Hyper, um projeto dedicado a transformar a vida
            daqueles que precisam de mais eficiência e foco em suas tarefas.{' '}
          </Text>
        </Container>
      </Main>
    </Body>
  )
}
