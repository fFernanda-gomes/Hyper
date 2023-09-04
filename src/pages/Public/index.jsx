import { Body, ItemList, List, Main, SubTitle, Title, UlArea } from './style'
import TargetPublic from '../../assets/TargetPublic.png'
import { Header } from '../../components/Header'

export function Public() {
  return (
    <Body>
      <Header />
      <Main>
        <div className="content">
          <Title>
            <span>Público</span> Alvo
          </Title>
          <SubTitle>O Hyper foi feito especialmente para você</SubTitle>

          <UlArea>
            <List>
              <ItemList>Lorem iosum dolor sit amet dolor</ItemList>
              <ItemList>Lorem iosum dolor sit amet dolor</ItemList>
              <ItemList>Lorem iosum dolor sit amet dolor</ItemList>
              <ItemList>Lorem iosum dolor sit amet dolor</ItemList>
            </List>
          </UlArea>
        </div>

        <img src={TargetPublic} alt="" />
      </Main>
    </Body>
  )
}
