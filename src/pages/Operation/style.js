import styled from 'styled-components'

export const Main = styled.main`
  padding: 0 3rem 6.94rem 3rem;
`

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.875rem;
  margin-bottom: 3.37rem;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }
`

export const H2 = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 0.12rem;
`

export const Text = styled.p`
  font-family: 'Poppins', sans-serif;
  text-align: justify;
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: 2rem;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`