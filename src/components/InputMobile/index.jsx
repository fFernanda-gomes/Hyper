import { GlobalStyle } from '../../styles/Global'
import { Header } from '../../components/Header'
import { ButtonForm } from '../../components/ButtonForm'

import {
  Adds,
  Body,
  InputsContainer,
  LoginArea,
  LogoContainer,
  MainContainer,
} from './styles'

function InputFormMobile(
  type,
  PlaceHolder,
) {
  return (
   <div>
    <input type={type} placeholder={PlaceHolder}/>
   </div>
  )
}

export { InputFormMobile };