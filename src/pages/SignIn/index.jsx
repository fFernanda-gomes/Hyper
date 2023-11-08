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
import { MenuMobile } from '../../components/Header/MenuMobile'
import { Header } from '../../components/Header'
import { useState } from 'react'
import { PopUp } from '../../components/PopUp'

export function SignIn() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Body>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

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
                imgMobile={<Envelope size={28} color="#ffffff" />}
                imgWeb={<Envelope size={38} color="#686868" weight="fill" />}
              />
              <Input
                title="Senha"
                type="password"
                imgMobile={<LockKey size={28} color="#ffffff" />}
                imgWeb={<LockKey size={35} color="#686868" weight="fill" />}
              />
            </InputsContent>

            <Adds>
              <div>
                <input type="checkbox" name="" id="checkbox" />
                <label>Lembrar de mim</label>
              </div>

              <NavLink to="/ForgottenPassword">Esqueceu a senha?</NavLink>
            </Adds>
          </InputsContainer>
        </form>

        <PopUp
          name="Entrar"
          title="Bom te ver aqui"
          message="E-mail e senha corretos. Parece que você não é tão esquecido quanto pensa"
        />

        <NavLink to="/Cadastro">Não possui uma conta?</NavLink>
      </MainContainer>
    </Body>
  )
}
