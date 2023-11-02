import { useState } from 'react'
import { ButtonComponent } from '../ButtonForm/style'
import { Container, Modal } from './styles'
import { X } from '@phosphor-icons/react'

export function PopUp({ name, message, title }) {
  const [modal, setModal] = useState(false)

  function ShowModal() {
    setModal(true)

    console.log('funfou')
  }

  const handleCloseModal = () => {
    setModal(false)
  }

  return (
    <>
      <ButtonComponent onClick={ShowModal}>{name}</ButtonComponent>
      <Modal className={modal === true ? 'showModal' : ''}>
        <Container>
          <div className="header">
            <h2>{title}</h2>

            <button onClick={handleCloseModal}>
              <X
                size={30}
                color="#fff"
                fontSize={42}
                weight="bold"
                className="list"
              />
            </button>
          </div>
          <div className="content">
            <p>{message}</p>
          </div>
        </Container>
      </Modal>
    </>
  )
}
