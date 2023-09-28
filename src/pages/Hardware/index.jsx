import {
  Container,
  ImageProduct,
  Info,
  Main,
  NameProcuct,
  Price,
  PriceContainer,
  ProductContainer,
  Title,
} from './styles'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import Cifrao from '../../assets/hardwares/cifrao.png'
import Cabo from '../../assets/hardwares/caboAdaptador.png'
import Arduino from '../../assets/hardwares/arduino.png'
import Bateria from '../../assets/hardwares/bateria9V.png'
import Buzzer from '../../assets/hardwares/Buzzer.png'
import bluetooth from '../../assets/hardwares/PlacaBluetooth.png'
import protoboard from '../../assets/hardwares/Protoboard.png'
import jumper from '../../assets/hardwares/JumpersMF.png'
import { useState } from 'react'

export function Hardware() {
  return (
    <Main>
      <Title>
        <span>Equipamentos</span> e Valores
      </Title>

      <Container>
        <ProductContainer className="keen-slider__slide number-slide1">
          {/* <ImageProduct src={Cabo} alt="" /> */}
          <Info>
            <NameProcuct>
              CABO ADAPTADOR <br /> BATERIA 9V
            </NameProcuct>
            <PriceContainer>
              <img src={Cifrao} width={9} height={9} alt="" />
              <Price>R$ 00</Price>
            </PriceContainer>
          </Info>
        </ProductContainer>

        {/* <ProductContainer className="keen-slider__slide number-slide1">
          <ImageProduct src={jumper} alt="" />
          <Info>
            <NameProcuct>JUMPERS</NameProcuct>
            <PriceContainer>
              <img src={Cifrao} width={9} height={9} alt="" />
              <Price>R$ 00</Price>
            </PriceContainer>
          </Info>
        </ProductContainer>

        <ProductContainer className="keen-slider__slide number-slide1">
          <ImageProduct src={bluetooth} alt="" />
          <Info>
            <NameProcuct>MÓDULO HC-05</NameProcuct>
            <PriceContainer>
              <img src={Cifrao} width={9} height={9} alt="" />
              <Price>R$ 00</Price>
            </PriceContainer>
          </Info>
        </ProductContainer>

        <ProductContainer className="keen-slider__slide number-slide1">
          <ImageProduct src={protoboard} alt="" />
          <Info>
            <NameProcuct>PROTOBOARD</NameProcuct>
            <PriceContainer>
              <img src={Cifrao} width={9} height={9} alt="" />
              <Price>R$ 00</Price>
            </PriceContainer>
          </Info>
        </ProductContainer>

        <ProductContainer className="keen-slider__slide number-slide2">
          <ImageProduct src={protoboard} alt="" />
          <Info>
            <NameProcuct>PROTOBOARD</NameProcuct>
            <PriceContainer>
              <img src={Cifrao} width={9} height={9} alt="" />
              <Price>R$ 00</Price>
            </PriceContainer>
          </Info>
        </ProductContainer>

        <ProductContainer className="keen-slider__slide number-slide2">
          <ImageProduct src={protoboard} alt="" />
          <Info>
            <NameProcuct>PROTOBOARD</NameProcuct>
            <PriceContainer>
              <img src={Cifrao} width={9} height={9} alt="" />
              <Price>R$ 00</Price>
            </PriceContainer>
          </Info>
        </ProductContainer> */}
      </Container>
    </Main>
  )
}
