import styled from 'styled-components'

export const Modal = styled.div`
  position: fixed;
  padding: 0;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);

  transform: scale(1.1);
  opacity: 0;
  visibility: hidden;

  transition:
    visibility 0.25s ease-in-out,
    transform 0.25s ease-in-out,
    opacit 0.25s ease-in-out;

  &.showModal {
    transform: scale(1);
    opacity: 1;
    visibility: visible;
  }
`

export const Container = styled.div`
  background: #f8f8ff;
  color: #000;
  padding: 1rem;
  width: 20rem;
  border-radius: 5px;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primary_medium};
    padding-bottom: 0.3rem;
  }
  .header button {
    background: #ff6347;
    border-radius: 50%;
    padding: 0.2rem;
    border: 0;
    display: flex;
    align-items: center;
  }
  .header h2 {
    font-family: 'Montserrat', sans-serif;
  }
  .content p {
    font-size: 1.2rem;
    font-family: 'Poppins', sans-serif;
    margin-block: 1rem 0.2rem;
  }

  @media (min-width: 950px) {
    max-width: 27rem;
    width: 26rem;
    height: auto;

    .header h2 {
      font-size: 1.6rem;
    }

    .content p {
      font-size: 1.5rem;
      font-family: 'Poppins', sans-serif;
      margin-block: 1rem 0.2rem;
    }
  }
`
