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
                  <div className="hidden mobile">
                    <NameProcuct className="hiddenH1 mobile">
                      CABO ADAPTADOR <br /> BATERIA 9V
                    </NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 3,90</Price>
                    </PriceContainer>
                  </div>
                  <div className="more mobileMore">
                    <NameProcuct>
                      CABO ADAPTADOR <br /> BATERIA 9V
                    </NameProcuct>
                    <p>Cabo que leva a energia da bateria para o arduino.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 3,90</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </FirstContainerMobile>

              <SecondContainerMobile>
                <Info>
                  <div className="hidden mobile">
                    <NameProcuct className="hiddenH1 mobile">
                      JUMPERS
                    </NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 27,60</Price>
                    </PriceContainer>
                  </div>
                  <div className="more mobileMore">
                    <NameProcuct>JUMPERS</NameProcuct>
                    <p>Cabos que passam a energia.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 27,60</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </SecondContainerMobile>

              <ThirdContainerMobile>
                <Info>
                  <div className="hidden mobile">
                    <NameProcuct className="hiddenH1 mobile">
                      MÓDULO HC-05
                    </NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 49,90</Price>
                    </PriceContainer>
                  </div>
                  <div className="more mobileMore">
                    <NameProcuct>MÓDULO HC-05</NameProcuct>
                    <p>Módulo bluetooth que recebe e envia informações.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 49,90</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </ThirdContainerMobile>

              <FourthContainerMobile>
                <Info>
                  <div className="hidden mobile">
                    <NameProcuct className="hiddenH1 mobile">
                      PROTOBOARD
                    </NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 12,90</Price>
                    </PriceContainer>
                  </div>
                  <div className="more mobileMore">
                    <NameProcuct>PROTOBOARD</NameProcuct>
                    <p>Aumenta as ligações e adiciona novas portas.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 12,90</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </FourthContainerMobile>
            </Container>
            <Container className="keen-slider__slide number-slide2">
              <FifthContainerMobile>
                <Info>
                  <div className="hidden mobileMore">
                    <NameProcuct className="hiddenH1 mobile">
                      ARDUINO UNO
                    </NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 99,90</Price>
                    </PriceContainer>
                  </div>
                  <div className="more mobileMore">
                    <NameProcuct>ARDUINO UNO</NameProcuct>
                    <p>Leva as informações entre o código e os componentes.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 99,90</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </FifthContainerMobile>

              <SixthContainerMobile>
                <Info>
                  <div className="hidden mobile">
                    <NameProcuct className="hiddenH1 mobile">
                      BATERIA 9V
                    </NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 24,44</Price>
                    </PriceContainer>
                  </div>
                  <div className="more mobileMore bateria">
                    <NameProcuct>BATERIA 9V</NameProcuct>
                    <p>
                      Fonte de energia para a placa arduino, assim fornecendo
                      também para todo os outrps componentes.
                    </p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 24,44</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </SixthContainerMobile>

              <SeventhContainerMobile>
                <Info>
                  <div className="hidden mobile">
                    <NameProcuct className="hiddenH1 mobile">
                      BUZZER
                    </NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 5,90</Price>
                    </PriceContainer>
                  </div>
                  <div className="more mobileMore">
                    <NameProcuct>BUZZER</NameProcuct>
                    <p>Emite um som em determinada frequência.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 5,90</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </SeventhContainerMobile>

              <EighthContainerMobile>
                <Info>
                  <div className="hidden mobile">
                    <NameProcuct className="hiddenH1 mobileH1">
                      LED RGB
                    </NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 2,40</Price>
                    </PriceContainer>
                  </div>
                  <div className="more mobileMore">
                    <NameProcuct>LED RGB</NameProcuct>
                    <p>Um led que pode piscar em qualquer cor.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 2,40</Price>
                    </PriceContainer>
                  </div>
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
                  <div className="hidden">
                    <NameProcuct className="hiddenH1">JUMPERS</NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 27,60</Price>
                    </PriceContainer>
                  </div>
                  <div className="more">
                    <NameProcuct>JUMPERS</NameProcuct>
                    <p>Cabos que passam a energia.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price className="preco">R$ 27,60</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </FirstContainerWeb>

              <SecondContainerWeb className="keen-slider__slide number-slide2">
                <Info>
                  <div className="hidden">
                    <NameProcuct className="hiddenH1">LED RGB</NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 2,40</Price>
                    </PriceContainer>
                  </div>
                  <div className="more">
                    <NameProcuct>LED RGB</NameProcuct>
                    <p>Um led que pode piscar em qualquer cor.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price className="preco">R$ 2,40</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </SecondContainerWeb>

              <ThirdContainerWeb className="keen-slider__slide number-slide3">
                <Info>
                  <div className="hidden">
                    <NameProcuct className="hiddenH1">PROTOBOARD</NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 12,90</Price>
                    </PriceContainer>
                  </div>
                  <div className="more">
                    <NameProcuct>PROTOBOARD</NameProcuct>
                    <p>Aumenta as ligações e adiciona novas portas.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price className="preco">R$ 12,90</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </ThirdContainerWeb>

              <FourthContainerWeb className="keen-slider__slide number-slide4">
                <Info>
                  <div className="hidden">
                    <NameProcuct className="hiddenH1">MÓDULO HC-05</NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 49,90</Price>
                    </PriceContainer>
                  </div>
                  <div className="more">
                    <NameProcuct>MÓDULO HC-05</NameProcuct>
                    <p>Módulo bluetooth que recebe e envia informações.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price className="preco">R$ 49,90</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </FourthContainerWeb>
              <FifthContainerWeb className="keen-slider__slide number-slide5">
                <Info>
                  <div className="hidden">
                    <NameProcuct className="hiddenH1">
                      CABO ADAPTADOR <br /> BATERIA 9V
                    </NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price className="preco">R$ 3,90</Price>
                    </PriceContainer>
                  </div>
                  <div className="more">
                    <NameProcuct>
                      CABO ADAPTADOR <br /> BATERIA 9V
                    </NameProcuct>
                    <p>Cabo que leva a energia da bateria para o arduino.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price className="preco">R$ 3,90</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </FifthContainerWeb>

              <SixthContainerWeb className="keen-slider__slide number-slide6">
                <Info>
                  <div className="hidden">
                    <NameProcuct className="hiddenH1">ARDUÍNO UNO</NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 99,90</Price>
                    </PriceContainer>
                  </div>
                  <div className="more">
                    <NameProcuct>ARDUÍNO UNO</NameProcuct>
                    <p>Leva as informações entre o código e os componentes.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price className="preco">R$ 99,90</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </SixthContainerWeb>

              <SeventhContainerWeb className="keen-slider__slide number-slide7">
                <Info>
                  <div className="hidden">
                    <NameProcuct className="hiddenH1">BATERIA 9V</NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 24,44</Price>
                    </PriceContainer>
                  </div>
                  <div className="more">
                    <NameProcuct>BATERIA 9V</NameProcuct>
                    <p>
                      Fonte de energia para a placa arduino, assim fornecendo
                      também para todo os outrps componentes.
                    </p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price className="preco">R$ 24,44</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </SeventhContainerWeb>

              <EighthContainerWeb className="keen-slider__slide number-slide8">
                <Info>
                  <div className="hidden">
                    <NameProcuct className="hiddenH1">BUZZER</NameProcuct>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price>R$ 5,80</Price>
                    </PriceContainer>
                  </div>
                  <div className="more">
                    <NameProcuct>BUZZER</NameProcuct>
                    <p>Emite um som em determinada frequência.</p>
                    <PriceContainer>
                      <img src={Cifrao} width={9} height={9} alt="" />
                      <Price className="preco">R$ 5,80</Price>
                    </PriceContainer>
                  </div>
                </Info>
              </EighthContainerWeb>
            </Container>
          </Navigation>
        </VisibleWeb>
      </Main>
    </Align>
  )
}
