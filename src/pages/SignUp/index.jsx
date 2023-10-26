import { ButtonForm } from '../../components/ButtonForm'

import door from '../../assets/E-mail-2.png'

import {
  Adds,
  Align,
  InputsContainer,
  Logo,
  MainContainer,
  SubTitle,
  Title,
} from './styles'
import Input from '../../components/Input'
import { Envelope, LockKey, User } from '@phosphor-icons/react'
import LogoWeb from '../../assets/logo.svg'

export function SignUp() {
  return (
    <Align>
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
              imgMobile={<LockKey size={28} color="#ffffff" weight="fill" />}
              imgWeb={<LockKey size={32} color="#686868" weight="fill" />}
            />
            <Input
              title="Confirmar senha"
              imgMobile={<LockKey size={28} color="#ffffff" weight="fill" />}
              imgWeb={<LockKey size={32} color="#686868" weight="fill" />}
            />
          </InputsContainer>

          <Adds>
            <input type="checkbox" name="" id="checkbox" />
            <label htmlFor="">Concordo com os termos</label>
          </Adds>
        </form>

        <ButtonForm name="Criar Conta" />
      </MainContainer>
    </Align>
  )
}
