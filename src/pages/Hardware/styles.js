import styled from 'styled-components'

// Mobile
import arduino from '../../assets/hardwares/Mobile/arduino.svg'
import bateria from '../../assets/hardwares/Mobile/bateria.svg'
import buzzer from '../../assets/hardwares/Mobile/buzzer.svg'
import cabo from '../../assets/hardwares/Mobile/caboAdaptador.svg'
import jumpers from '../../assets/hardwares/Mobile/jumpers.svg'
import led from '../../assets/hardwares/Mobile/led.svg'
import bt from '../../assets/hardwares/Mobile/moduloBt.svg'
import protoboard from '../../assets/hardwares/Mobile/protoboard.svg'

// Web
import Arduino from '../../assets/hardwares/Web/arduino.png'
import Bateria9V from '../../assets/hardwares/Web/bateria9V.png'
import Buzzer from '../../assets/hardwares/Web/Buzzer.png'
import CaboAdaptador from '../../assets/hardwares/Web/caboAdaptador.png'
import Jumpers from '../../assets/hardwares/Web/JumpersMF.png'
import Led from '../../assets/hardwares/Web/Led.png'
import PlacaBluetooth from '../../assets/hardwares/Web/PlacaBluetooth.png'
import Protoboard from '../../assets/hardwares/Web/Protoboard.png'

export const DOTS = styled.div`
  @media (min-width: 850px) {
    display: none;
  }
`

export const Align = styled.div`
  height: 110vh;

  @media (min-width: 850px) {
    height: 125vh;
  }
`

export const Main = styled.main`
  max-width: 1248px;
  padding: 0 3rem 5.75rem 3rem;

  opacity: 0;
  animation: hardwares 1.5s forwards;

  @keyframes hardwares {
    0% {
      transform: translateX(-100px);
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }

  @media (min-width: 850px) {
    margin-bottom: 4rem;
    margin-inline: auto;
    border-radius: 2rem;
    background: rgba(0, 0, 0, 0.8);
    padding: 4.06rem 4rem 6.56rem 4rem;
  }
`
export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }

  @media (min-width: 850px) {
    font-size: 2.5rem;
  }
`
export const Visible = styled.div`
  @media (min-width: 850px) {
    display: none;
  }
`

export const VisibleWeb = styled.div`
  display: none;

  @media (min-width: 850px) {
    display: flex;
  }
`

export const Navigation = styled.div`
  &::-webkit-scrollbar {
    height: 12px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.9);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.colors.primary_medium};
    border-radius: 5px;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;

  @media (min-width: 850px) {
    display: flex;
  }
`

export const ProductContainer = styled.div`
  width: 7.875rem;
  height: 12rem;

  @media (min-width: 850px) {
    width: 15.75rem;
    height: 24rem;
  }
`

export const Info = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 1rem;

  @media (min-width: 850px) {
    padding-bottom: 1.4rem;
  }
`

export const NameProcuct = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 0.5rem;
  font-weight: 700;

  border-radius: 1rem;
  border: 1px solid #36a7db;
  margin-bottom: 0.4rem;
  padding: 0.2rem;

  @media (min-width: 850px) {
    font-size: 1rem;
    padding: 0.4rem;
  }
`
export const PriceContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 0.3rem;

  @media (min-width: 850px) {
    img {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`

export const Price = styled.strong`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 0.6rem;

  @media (min-width: 850px) {
    font-size: 0.8rem;
  }
`

// containers Mobile
export const FirstContainerMobile = styled(ProductContainer)`
  background: url(${cabo});
`
export const SecondContainerMobile = styled(ProductContainer)`
  background: url(${jumpers});
`
export const ThirdContainerMobile = styled(ProductContainer)`
  background: url(${bt});
`
export const FourthContainerMobile = styled(ProductContainer)`
  background: url(${protoboard});
`
export const FifthContainerMobile = styled(ProductContainer)`
  background: url(${arduino});
`
export const SixthContainerMobile = styled(ProductContainer)`
  background: url(${bateria});
`
export const SeventhContainerMobile = styled(ProductContainer)`
  background: url(${buzzer});
`
export const EighthContainerMobile = styled(ProductContainer)`
  background: url(${led});
`

// containers Web
export const FirstContainerWeb = styled(ProductContainer)`
  background: url(${Jumpers});
`
export const SecondContainerWeb = styled(ProductContainer)`
  background: url(${Led});
`
export const ThirdContainerWeb = styled(ProductContainer)`
  background: url(${Protoboard});
`
export const FourthContainerWeb = styled(ProductContainer)`
  background: url(${PlacaBluetooth});
`
export const FifthContainerWeb = styled(ProductContainer)`
  background: url(${CaboAdaptador});
`
export const SixthContainerWeb = styled(ProductContainer)`
  background: url(${Arduino});
`
export const SeventhContainerWeb = styled(ProductContainer)`
  background: url(${Bateria9V});
`
export const EighthContainerWeb = styled(ProductContainer)`
  background: url(${Buzzer});
`
