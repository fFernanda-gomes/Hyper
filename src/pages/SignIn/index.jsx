import { ButtonForm } from '../../components/ButtonForm'

import Logo from '../../assets/logo.svg'

import {
  Adds,
  Body,
  InputsContainer,
  InputsContent,
  LogoContainer,
  MainContainer,
} from './styles'
import Input from '../../components/Input'

import { NavLink } from 'react-router-dom'
import { Envelope, LockKey } from '@phosphor-icons/react'

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

            <InputsContent>
              <Input
                title="E-mail"
                img={<Envelope size={28} color="#ffffff" />}
              />
              <Input
                title="Senha"
                img={<LockKey size={28} color="#ffffff" />}
              />
            </InputsContent>

            <Adds>
              <div>
                <input type="checkbox" name="" id="checkbox" />
                <label htmlFor="">Lembrar de mim</label>
              </div>

              <NavLink to="/ForgottenPassword">Esqueceu a senha?</NavLink>
            </Adds>
          </InputsContainer>
        </form>

        <ButtonForm name="Entrar" />
        <NavLink to="/Cadastro">Não possui uma conta?</NavLink>
      </MainContainer>
    </Body>
  )
}
