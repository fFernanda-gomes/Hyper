import { MainContainer } from '../SignUp/styles'
import key from '../../assets/key.png'
import Input from '../../components/Input'
import { ButtonForm } from '../../components/ButtonForm'

export function ForgottenPassword() {
  return (
    <MainContainer>
      <h1>
        <img src={key} alt="" />
        Redefina a sua senha
      </h1>

      <form action="">
        <Input />
      </form>

      <ButtonForm />
    </MainContainer>
  )
}
