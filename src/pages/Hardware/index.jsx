import {
  FirstProduct,
  FourthProduct,
  Main,
  NameProcuct,
  Price,
  SecondProduct,
  ThirdProduct,
  Title,
} from './styles'

import Cifrao from '../../assets/hardwares/cifrao.png'

export function Hardware() {
  return (
    <Main>
      <Title>
        <span>Equipamentos</span> e Valores
      </Title>

      <div>
        <FirstProduct>
          <NameProcuct>Produto</NameProcuct>
          <div>
            <img src={Cifrao} width={19} height={19} alt="" />
            <Price>R$ 00</Price>
          </div>
        </FirstProduct>

        <SecondProduct>
          <NameProcuct>Produto</NameProcuct>
          <div>
            <img src={Cifrao} width={19} height={19} alt="" />
            <Price>R$ 00</Price>
          </div>
        </SecondProduct>

        <ThirdProduct>
          <NameProcuct>Produto</NameProcuct>
          <div>
            <img src={Cifrao} width={19} height={19} alt="" />
            <Price>R$ 00</Price>
          </div>
        </ThirdProduct>

        <FourthProduct>
          <NameProcuct>Produto</NameProcuct>
          <div>
            <img src={Cifrao} width={19} height={19} alt="" />
            <Price>R$ 00</Price>
          </div>
        </FourthProduct>
      </div>
    </Main>
  )
}
