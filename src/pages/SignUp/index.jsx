import { ButtonForm } from '../../components/ButtonForm'

import door from '../../assets/door.svg'

import {
  Adds,
  Body,
  InputsContainer,
  LoginArea,
  LogoContainer,
  MainContainer,
} from './styles'
import { InputForm } from '../../components/Input'

export function SignUp() {
  return (
    <>
      <h1>
        <img src={door} alt="" />
        Cadastre-se
      </h1>
      <h2>Preencha os campos abaixo</h2>

      <form action="">
        <InputForm />
        <InputForm />
        <InputForm />
        <InputForm />

        <div>
          <input type="checkbox" name="" id="checkbox" />
          <label htmlFor="">Concordo com os termos</label>
        </div>
      </form>

      <ButtonForm />
    </>
  )
}
