import Input from '../../components/Input'
import { ButtonForm } from '../../components/ButtonForm'
import { Envelope, Key } from '@phosphor-icons/react'
import {
  Align,
  Button,
  Form,
  Logo,
  MainContainer,
  TitleContainer,
} from './styles'
import LogoWeb from '../../assets/logo.svg'
import { useState } from 'react'
import { MenuMobile } from '../../components/Header/MenuMobile'
import { Header } from '../../components/Header'
import { PopUp } from '../../components/PopUp'

export function ForgottenPassword() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Align>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

      <MainContainer>
        <TitleContainer>
          <Key size={60} color="#ffffff" weight="fill" />
          <h1>Redefina a sua senha</h1>
        </TitleContainer>
        <Logo>
          <img src={LogoWeb} alt="" />
          <p>
            Um email será enviado para que você possa alterar sua senha e
            acessar sau conta
          </p>
        </Logo>

        <Form action="">
          <Input
            title="E-mail"
            imgMobile={<Envelope size={28} color="#ffffff" />}
            imgWeb={<Envelope size={32} color="#686868" weight="fill" />}
          />
        </Form>

        <PopUp
          name="Enviar"
          title="E-mail enviado"
          message="Tudo pronto para redefinir sua senha, olhe sua caixa de entrada do gmail"
        />
      </MainContainer>
    </Align>
  )
}
