import { ButtonForm } from '../../components/ButtonForm'

import door from '../../assets/E-mail-2.png'

import {
  Adds,
  Align,
  Button,
  InputsContainer,
  Logo,
  MainContainer,
  SubTitle,
  Title,
} from './styles'
import Input from '../../components/Input'
import { Envelope, LockKey, User } from '@phosphor-icons/react'
import LogoWeb from '../../assets/logo.svg'
import { MenuMobile } from '../../components/Header/MenuMobile'
import { Header } from '../../components/Header'
import { useState } from 'react'
import { PopUp } from '../../components/PopUp'

export function SignUp() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Align>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

      <MainContainer>
        <Title>
          <img src={door} alt="" />
          <h1>Cadastre-se</h1>
        </Title>
        <SubTitle>
          <h2>Preencha os campos abaixo</h2>
        </SubTitle>

        <Logo>
          <img src={LogoWeb} alt="" />
        </Logo>

        <form action="">
          <InputsContainer>
            <Input
              title="Nome Completo"
              value={name}
              imgMobile={<User size={28} color="#ffffff" weight="fill" />}
              imgWeb={<User size={32} color="#686868" weight="fill" />}
            />
            <Input
              title="E-mail"
              imgMobile={<Envelope size={28} color="#ffffff" weight="fill" />}
              imgWeb={<Envelope size={32} color="#686868" weight="fill" />}
            />
            <Input
              title="Senha"
              type="password"
              imgMobile={<LockKey size={28} color="#ffffff" weight="fill" />}
              imgWeb={<LockKey size={32} color="#686868" weight="fill" />}
            />
            <Input
              title="Confirmar senha"
              type="password"
              imgMobile={<LockKey size={28} color="#ffffff" weight="fill" />}
              imgWeb={<LockKey size={32} color="#686868" weight="fill" />}
            />
          </InputsContainer>

          <Adds>
            <input type="checkbox" name="" id="checkbox" />
            <label htmlFor="">Concordo com os termos</label>
          </Adds>
        </form>

        <PopUp
          name="Criar Conta"
          title="Bem-vindo!💙"
          message="Sua conta foi criada com sucesso!"
        />
      </MainContainer>
    </Align>
  )
}
