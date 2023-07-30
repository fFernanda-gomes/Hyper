import { GlobalStyle } from "../../styles/Global" 
import { Header } from "../../components/Header/Header"
import { ButtonForm } from "../../components/ButtonForm/Button"

import logo from "../../assets/logo.svg"
import email from  "../../assets/iconEmail.svg"
import passwordIcon from "../../assets/password-icon.svg"

import 
{ 
  Adds,
  Body,
  InputsContainer, 
  LoginArea, 
  LogoContainer, 
  MainContainer 
} from "./styles"

export function SignIn() {
  return(
    <Body>
      <Header />

      <MainContainer>
        <h1>Olá</h1>
        <p>É bom te ver de novo</p>
        
        <form action="">
          <InputsContainer>
            <LogoContainer>
              <img src={logo} alt="" />
            </LogoContainer>

            <LoginArea>
              <img src={email} alt="" width={24} height={24}/>
              <input type="text" placeholder="E-mail" />
            </LoginArea>

            <LoginArea>
              <img src={passwordIcon} alt="" width={24} height={24}/>
              <input type="password" placeholder="Senha" />
            </LoginArea>
            
            <Adds>
              <div>
                <input type="checkbox" name="" id="checkbox" />
                <label htmlFor="">Lembrar de mim</label>
              </div>

              <a href="">Esqueceu a senha?</a>
            </Adds>
          </InputsContainer> 
        </form>

        <ButtonForm />
        <a href="">Não possui uma conta?</a>
      </MainContainer>
      <GlobalStyle />
    </Body>
  )
}