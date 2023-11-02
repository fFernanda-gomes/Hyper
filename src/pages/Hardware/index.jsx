import {
  Align,
  Container,
  DOTS,
  EighthContainerMobile,
  EighthContainerWeb,
  FifthContainerMobile,
  FifthContainerWeb,
  FirstContainerMobile,
  FirstContainerWeb,
  FourthContainerMobile,
  FourthContainerWeb,
  Info,
  Main,
  NameProcuct,
  Navigation,
  Price,
  PriceContainer,
  SecondContainerMobile,
  SecondContainerWeb,
  SeventhContainerMobile,
  SeventhContainerWeb,
  SixthContainerMobile,
  SixthContainerWeb,
  ThirdContainerMobile,
  ThirdContainerWeb,
  Title,
  Visible,
  VisibleWeb,
} from './styles'

import Cifrao from '../../assets/hardwares/cifrao.png'

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'
import { useState } from 'react'
import { MenuMobile } from '../../components/Header/MenuMobile'
import { Header } from '../../components/Header'

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
    slides: {
      spacing: 38,
    },
  })

  const [sliderRefWeb] = useKeenSlider({
    slides: {
      perView: 4,
      spacing: 44,
    },
  })

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
          <span>Equipamentos</span> e Valores
        </Title>

        <Visible>
          <Navigation ref={sliderRef} className="keen-slider">
            <Container className="keen-slider__slide number-slide1">
              <FirstContainerMobile>
                <Info>
                  <NameProcuct>
                    CABO ADAPTADOR <br /> BATERIA 9V
                  </NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 3,90</Price>
                  </PriceContainer>
                </Info>
              </FirstContainerMobile>

              <SecondContainerMobile>
                <Info>
                  <NameProcuct>JUMPERS</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 27,60</Price>
                  </PriceContainer>
                </Info>
              </SecondContainerMobile>

              <ThirdContainerMobile>
                <Info>
                  <NameProcuct>MÓDULO HC-05</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 49,90</Price>
                  </PriceContainer>
                </Info>
              </ThirdContainerMobile>

              <FourthContainerMobile>
                <Info>
                  <NameProcuct>PROTOBOARD</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 12,90</Price>
                  </PriceContainer>
                </Info>
              </FourthContainerMobile>
            </Container>
            <Container className="keen-slider__slide number-slide2">
              <FifthContainerMobile>
                <Info>
                  <NameProcuct>ARDUINO UNO</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 99,90</Price>
                  </PriceContainer>
                </Info>
              </FifthContainerMobile>

              <SixthContainerMobile>
                <Info>
                  <NameProcuct>BATERIA 9V</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 24,44</Price>
                  </PriceContainer>
                </Info>
              </SixthContainerMobile>

              <SeventhContainerMobile>
                <Info>
                  <NameProcuct>BUZZER</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 5,90</Price>
                  </PriceContainer>
                </Info>
              </SeventhContainerMobile>

              <EighthContainerMobile>
                <Info>
                  <NameProcuct>LED RGB</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 2,40</Price>
                  </PriceContainer>
                </Info>
              </EighthContainerMobile>
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
          <Navigation
            ref={sliderRefWeb}
            className="keen-slider"
            data-keen-slider-scrollable
            style={{ overflowX: 'scroll' }}
          >
            <Container style={{ marginBottom: 40 }}>
              <FirstContainerWeb className="keen-slider__slide number-slide1">
                <Info>
                  <NameProcuct>JUMPERS</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 27,60</Price>
                  </PriceContainer>
                </Info>
              </FirstContainerWeb>

              <SecondContainerWeb className="keen-slider__slide number-slide2">
                <Info>
                  <NameProcuct>LED RGB</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 2,40</Price>
                  </PriceContainer>
                </Info>
              </SecondContainerWeb>

              <ThirdContainerWeb className="keen-slider__slide number-slide3">
                <Info>
                  <NameProcuct>PROTOBOARD</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 12,90</Price>
                  </PriceContainer>
                </Info>
              </ThirdContainerWeb>

              <FourthContainerWeb className="keen-slider__slide number-slide4">
                <Info>
                  <NameProcuct>MÓDULO HC-05</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 49,90</Price>
                  </PriceContainer>
                </Info>
              </FourthContainerWeb>
              <FifthContainerWeb className="keen-slider__slide number-slide5">
                <Info>
                  <NameProcuct>
                    CABO ADAPTADOR <br /> BATERIA 9V
                  </NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 3,90</Price>
                  </PriceContainer>
                </Info>
              </FifthContainerWeb>

              <SixthContainerWeb className="keen-slider__slide number-slide6">
                <Info>
                  <NameProcuct>ARDUÍNO UNO</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 99,90</Price>
                  </PriceContainer>
                </Info>
              </SixthContainerWeb>

              <SeventhContainerWeb className="keen-slider__slide number-slide7">
                <Info>
                  <NameProcuct>BATERIA 9V</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 24,44</Price>
                  </PriceContainer>
                </Info>
              </SeventhContainerWeb>

              <EighthContainerWeb className="keen-slider__slide number-slide8">
                <Info>
                  <NameProcuct>BUZZER</NameProcuct>
                  <PriceContainer>
                    <img src={Cifrao} width={9} height={9} alt="" />
                    <Price>R$ 5,80</Price>
                  </PriceContainer>
                </Info>
              </EighthContainerWeb>
            </Container>
          </Navigation>
        </VisibleWeb>
      </Main>
    </Align>
  )
}
