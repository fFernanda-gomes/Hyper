import styled from 'styled-components'
import bgMobile from '../../assets/bgMobile.svg'
import bgWeb from '../../assets/bgWeb.svg'

export const Body = styled.body`
  background: url(${bgMobile});
  background-size: cover;

  @media (min-width: 850px) {
    background: url(${bgWeb});
    background-size: cover;
  }
`
