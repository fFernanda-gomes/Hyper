import { LoginArea } from './style'

function Input({ type, title, src, name }) {
  return (
    <LoginArea>
      <img src={src} alt="" />
      <input type={type} placeholder={title} name={name} />
    </LoginArea>
  )
}

export default Input
