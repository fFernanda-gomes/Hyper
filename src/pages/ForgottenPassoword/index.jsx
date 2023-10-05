import Input from '../../components/Input'
import { ButtonForm } from '../../components/ButtonForm'
import { Envelope, Key } from '@phosphor-icons/react'
import { Align, Form, Logo, MainContainer, TitleContainer } from './styles'
import LogoWeb from '../../assets/Logo.svg'

export function ForgottenPassword() {
  return (
    <Align>
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

        <ButtonForm name="Enviar" />
      </MainContainer>
    </Align>
  )
}
