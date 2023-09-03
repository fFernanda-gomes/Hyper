import { H2, ImageContainer, Main, Text, Title } from './style'

import yt from '../../assets/youtube.svg'

export function Operation() {
  return (
    <Main>
      <Title>
        <span>Funcionamento</span> do Projeto
      </Title>

      <div>
        <H2>Modo 1</H2>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Text>
      </div>
      <div>
        <H2>Modo 2</H2>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Text>
      </div>
      <div>
        <H2>Modo 3</H2>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Text>
      </div>
      <div>
        <H2>Modo 4</H2>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit
        </Text>
      </div>
      <ImageContainer>
        <img src={yt} alt="" />
      </ImageContainer>
    </Main>
  )
}
