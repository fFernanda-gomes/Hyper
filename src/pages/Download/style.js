import styled from 'styled-components'

export const Main = styled.main`
  padding: 0 3rem 6.25rem 3rem;
`

export const Title = styled.h1`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 1.875rem;

  span {
    color: ${({ theme }) => theme.colors.primary_medium};
  }
`

export const SubTitle = styled.p`
  font-family: 'Montserrat', sans-serif;
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.9rem;
  font-weight: 400;
  margin-bottom: 2rem;
`

export const Text = styled.p`
  color: ${({ theme }) => theme.colors.white};
  text-align: justify;
  font-family: 'Poppins', sans-serif;
  font-size: 0.7rem;
  font-weight: 400;
  margin-bottom: 3rem;
`

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 4rem;
`

export const DownloadArea = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Button = styled.button`
  background: transparent;
  border-radius: 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.primary_medium};
  color: ${({ theme }) => theme.colors.white};
  padding: 0.31rem 0.63rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  span {
    font-family: 'Montserrat', sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    margin-left: 0.53rem;
  }
`
