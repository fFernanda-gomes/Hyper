import {
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

export function Operation() {
  return (
    <Main>
      <Title>
        <span>Funcionamento</span> do Projeto
      </Title>

      <Containers>
        <Mode1>
          <H2>Modo 1</H2>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.od tempor incididunt ut labore.od tempor incididu. ut
            labore.od tempor incididu.
          </Text>
        </Mode1>
        <Mode2>
          <H2>Modo 2</H2>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore.od tempor incididunt ut labore.od tempor incididu. ut
            labore.od tempor incididu.
          </Text>
        </Mode2>
        <Separador>
          <Mode3>
            <H2>Modo 3</H2>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore.od tempor incididunt ut labore.od tempor incididu. ut
              labore.od tempor incididu.
            </Text>
          </Mode3>
          <Mode4>
            <H2>Modo 4</H2>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore.od tempor incididunt ut labore.od tempor incididu. ut
              labore.od tempor incididu.
            </Text>
          </Mode4>
        </Separador>

        <ImageContainer>
          <img src={yt} alt="" />
        </ImageContainer>
      </Containers>
    </Main>
  )
}
