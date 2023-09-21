import { ButtonForm } from '../../components/ButtonForm'

import Logo from '../../assets/logo.svg'

import {
  Adds,
  Body,
  InputsContainer,
  LoginArea,
  LogoContainer,
  MainContainer,
} from './styles'
import Input from '../../components/Input'

import { NavLink } from 'react-router-dom'

export function SignIn() {
  return (
    <Body>
      <MainContainer>
        <h1>Olá</h1>
        <p>É bom te ver de novo</p>

        <form action="">
          <InputsContainer>
            <LogoContainer>
              <img src={Logo} alt="" />
            </LogoContainer>

            <Input type="text" placeholder="Nome" name="dsfas" />
            <Input title="Nome" />

            {/* <LoginArea> */}
            {/* <img src={email} alt="" width={24} height={24} /> */}
            {/* <input type="text" placeholder="E-mail" /> */}
            {/* </LoginArea> */}

            {/* <LoginArea>
              {/* <img src={passwordIcon} alt="" width={24} height={24} />
              <input type="password" placeholder="Senha" />
            </LoginArea> */}

            <Adds>
              <div>
                <input type="checkbox" name="" id="checkbox" />
                <label htmlFor="">Lembrar de mim</label>
              </div>

              <NavLink to="/ForgottenPassword">Esqueceu a senha?</NavLink>
            </Adds>
          </InputsContainer>
        </form>

        <ButtonForm />
        <NavLink to="/Cadastro">Não possui uma conta?</NavLink>
      </MainContainer>
    </Body>
  )
}
