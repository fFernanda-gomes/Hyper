import styled from 'styled-components'

export const Main = styled.main`
  padding: 0 3rem 6.25rem 3rem;
`

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.875rem;
  margin-bottom: 3.5rem;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: justify;
  font-family: 'Poppins', sans-serif;
  font-size: 0.75rem;
  font-weight: 400;
  margin-bottom: 1rem;
`
