import styled from 'styled-components'
import Arduino from '../../assets/hardwares/arduino.svg'
import Jumpers from '../../assets/hardwares/jumpers.svg'

export const DOTS = styled.div`
  @media (min-width: 850px) {
    display: none;
  }
`

export const Align = styled.div`
  height: 100vh;
`

export const Main = styled.main`
  padding: 0 3rem 5.75rem 3rem;

  .dots {
    display: flex;
    padding: 10px 0;
    justify-content: center;
  }

  .dot {
    border: none;
    width: 10px;
    height: 10px;
    background: #c5c5c5;
    border-radius: 50%;
    margin: 0 5px;
    padding: 5px;
    cursor: pointer;
  }

  .dot:focus {
    outline: none;
  }

  .dot.active {
    background: #000;
  }

  @media (min-width: 850px) {
    margin: 0 6rem 4rem 6rem;
    border-radius: 2rem;
    background: rgba(0, 0, 0, 0.8);
    padding: 4.06rem 4rem 6.56rem 4rem;
  }
`
export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.875rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }

  @media (min-width: 850px) {
    font-size: 2.5rem;
  }
`
export const Visible = styled.div`
  @media (min-width: 850px) {
    display: none;
  }
`

export const VisibleWeb = styled.div`
  display: none;

  @media (min-width: 850px) {
    display: flex;
  }
`

export const Navigation = styled.div``

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media (min-width: 850px) {
    margin-left: 1rem;
    display: flex;
    gap: 3rem;
  }
`

export const ProductContainer = styled.div`
  background: url(${Arduino});
  width: 7.875rem;
  height: 12rem;

  @media (min-width: 850px) {
    background: url(${Jumpers});
    width: 15.75rem;
    height: 24rem;
  }
`

export const Info = styled.div`
  height: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 1rem;

  @media (min-width: 850px) {
    padding-bottom: 1.4rem;
  }
`

export const NameProcuct = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 0.5rem;
  font-weight: 700;

  border-radius: 1rem;
  border: 1px solid #36a7db;
  margin-bottom: 0.4rem;
  padding: 0.2rem;

  @media (min-width: 850px) {
    font-size: 1rem;
    padding: 0.4rem;
  }
`
export const PriceContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 0.3rem;

  @media (min-width: 850px) {
    img {
      width: 1.125rem;
      height: 1.125rem;
    }
  }
`

export const Price = styled.strong`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 0.6rem;

  @media (min-width: 850px) {
    font-size: 0.8rem;
  }
`
