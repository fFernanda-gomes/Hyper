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
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [slideRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 4,
      spacing: 5,
    },
  })

  return (
    <Main>
      <Title>
        <span>Equipamentos</span> e Valores
      </Title>

      <Container ref={slideRef} className="keen-slider">
        <ProductContainer className="keen-slider__slide number-slide1">
          <ImageProduct src={Cabo} alt="" />
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
        <ProductContainer className="keen-slider__slide number-slide1">
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
        </ProductContainer>

        {loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}
            />

            <Arrow
              onClick={(e) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={
                currentSlide ===
                instanceRef.current.track.details.slides.length - 1
              }
            />
          </>
        )}
      </Container>

      {loaded && instanceRef.current && (
        <div className="dots">
          {[
            ...Array(instanceRef.current.track.details.slides.length).keys(),
          ].map((idx) => {
            return (
              <button
                key={idx}
                onClick={() => {
                  instanceRef.current?.moveToIdx(idx)
                }}
                className={'dot' + (currentSlide === idx ? ' active' : '')}
              ></button>
            )
          })}
        </div>
      )}
    </Main>
  )
}

function Arrow(props) {
  const disabeld = props.disabled ? ' arrow--disabled' : ''
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? 'arrow--left' : 'arrow--right'
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  )
}
