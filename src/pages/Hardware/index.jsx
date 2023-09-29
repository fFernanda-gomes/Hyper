import {
  Align,
  Container,
  DOTS,
  Info,
  Main,
  NameProcuct,
  Navigation,
  Price,
  PriceContainer,
  ProductContainer,
  Title,
  Visible,
  VisibleWeb,
} from './styles'

import Cifrao from '../../assets/hardwares/cifrao.png'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'

export function Hardware() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
  })

  const [sliderRefWeb] = useKeenSlider()

  return (
    <Align>
      <Main>
        <Title>
          <span>Equipamentos</span> e Valores
        </Title>

        <Visible>
          <Navigation ref={sliderRef} className="keen-slider">
            <Container className="keen-slider__slide number-slide1">
              <ProductContainer>
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

              <ProductContainer>
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

              <ProductContainer>
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

              <ProductContainer>
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
            </Container>
            <Container className="keen-slider__slide number-slide2">
              <ProductContainer>
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

              <ProductContainer>
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

              <ProductContainer>
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

              <ProductContainer>
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
            </Container>
          </Navigation>
        </Visible>

        <DOTS>
          {loaded && instanceRef.current && (
            <div className="dots">
              {[
                ...Array(
                  instanceRef.current.track.details.slides.length,
                ).keys(),
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
        </DOTS>

        <VisibleWeb>
          <Navigation ref={sliderRefWeb} className="keen-slider">
            <Container className="keen-slider__slide number-slide1">
              <ProductContainer>
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

              <ProductContainer>
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

              <ProductContainer>
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

              <ProductContainer>
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
            </Container>
            <Container className="keen-slider__slide number-slide2">
              <ProductContainer>
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

              <ProductContainer>
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

              <ProductContainer>
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

              <ProductContainer>
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
            </Container>
          </Navigation>
        </VisibleWeb>
      </Main>
    </Align>
  )
}
