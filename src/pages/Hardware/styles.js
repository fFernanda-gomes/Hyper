import styled from 'styled-components'

import Arduino from '../../assets/hardwares/arduino.png'
import Bateria from '../../assets/hardwares/bateria9V.png'
import Buzzer from '../../assets/hardwares/Buzzer.png'
import Cabo from '../../assets/hardwares/caboAdaptador.png'

export const Main = styled.main`
  padding: 0 3rem 5.75rem 3rem;
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
`

export const ProductContainer = styled.div`
  height: 100vh;
`

export const FirstProduct = styled(ProductContainer)`
  background: url(${Arduino});
  background-repeat: no-repeat;
`
export const SecondProduct = styled(ProductContainer)`
  background: url(${Arduino});
  background-repeat: no-repeat;
`
export const ThirdProduct = styled(ProductContainer)`
  background: url(${Arduino});
  background-repeat: no-repeat;
`
export const FourthProduct = styled(ProductContainer)`
  background: url(${Arduino});
  background-repeat: no-repeat;
`

export const NameProcuct = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 1rem;
  font-weight: 700;
`

export const Price = styled.strong`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 0.9rem;
`
