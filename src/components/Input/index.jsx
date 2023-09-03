import { LoginArea } from './style'

function InputForm(type, PlaceHolder, src) {
  return (
    <LoginArea>
      <img src={src} alt="" />
      <input type={type} placeholder={PlaceHolder} />
    </LoginArea>
  )
}

export { InputForm }
