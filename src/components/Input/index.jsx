import { Container, InputContainer } from './style'

function Input({ type, title, img, name }) {
  return (
    <Container>
      {img}
      <InputContainer type={type} placeholder={title} name={name} />
    </Container>
  )
}

export default Input
