import { ButtonForm } from '../../components/ButtonForm'

import door from '../../assets/E-mail-2.png'

import {
  Adds,
  InputsContainer,
  LoginArea,
  LogoContainer,
  MainContainer,
  SubTitle,
} from './styles'
import Input from '../../components/Input'

export function SignUp() {
  return (
    <MainContainer>
      <h1>
        <img src={door} alt="" />
        Cadastre-se
      </h1>
      <SubTitle>
        <h2>Preencha os campos abaixo</h2>
      </SubTitle>

      <form action="">
        <InputsContainer>
          <Input />
          <Input />
          <Input />
          <Input />
        </InputsContainer>

        <Adds>
          <input type="checkbox" name="" id="checkbox" />
          <label htmlFor="">Concordo com os termos</label>
        </Adds>
      </form>

      <ButtonForm />
    </MainContainer>
  )
}
