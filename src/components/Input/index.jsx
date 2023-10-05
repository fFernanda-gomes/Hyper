import { Container, InputContainer } from './style'

function Input({ type, title, imgMobile, imgWeb, name }) {
  return (
    <Container>
      <div className="mobile">{imgMobile}</div>
      <div className="web">{imgWeb}</div>

      <InputContainer type={type} placeholder={title} name={name} />
    </Container>
  )
}

export default Input
