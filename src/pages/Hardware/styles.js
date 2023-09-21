import styled from 'styled-components'

export const Main = styled.main`
  padding: 0 3rem 5.75rem 3rem;
  position: relative;

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

  .arrow {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    fill: #fff;
    cursor: pointer;
  }

  .arrow--left {
    left: 5px;
  }

  .arrow--right {
    left: auto;
    right: 5px;
  }

  .arrow--disabled {
    fill: rgba(255, 255, 255, 0.5);
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
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  /* gap: 2rem; */
`

export const ProductContainer = styled.div`
  /* margin-bottom: 3rem; */
  width: 125px;
`

export const ImageProduct = styled.img`
  width: 125px;
  height: 192px;
`
export const Info = styled.div`
  text-align: center;
  margin-top: -3rem;
  position: absolute;
  z-index: 3;
  margin-left: 1.5rem;
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
`
export const PriceContainer = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 0.22rem;
`

export const Price = styled.strong`
  color: ${({ theme }) => theme.colors.white};
  font-family: 'Montserrat', sans-serif;
  font-size: 0.6rem;
`
