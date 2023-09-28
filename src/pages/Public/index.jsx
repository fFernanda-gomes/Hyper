import { Body, ItemList, List, Main, SubTitle, Title, UlArea } from './style'
import TargetPublic from '../../assets/TargetPublic.png'
import TargetPublicWeb from '../../assets/PublicWeb.svg'
import { Header } from '../../components/Header'
import { MenuMobile } from '../../components/Header/MenuMobile'
import { useState } from 'react'

export function Public() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Body>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />
      <Main>
        <div className="content">
          <Title>
            <span>Público</span> Alvo
          </Title>
          <SubTitle>O Hyper foi feito especialmente para você</SubTitle>

          <UlArea>
            <List>
              <ItemList className="web">
                Lorem iosum dolor sit amet dolor
              </ItemList>
              <ItemList className="web">
                Lorem iosum dolor sit amet dolor
              </ItemList>
              <ItemList className="web">
                Lorem iosum dolor sit amet dolor
              </ItemList>
              <ItemList className="web">
                Lorem iosum dolor sit amet dolor
              </ItemList>

              <ItemList className="mobile">
                Lorem iosum dolor sit amet dolor but it solem
              </ItemList>
              <ItemList className="mobile">
                Lorem iosum dolor sit amet dolor but it solem
              </ItemList>
              <ItemList className="mobile">
                Lorem iosum dolor sit amet dolor but it solem
              </ItemList>
              <ItemList className="mobile">
                Lorem iosum dolor sit amet dolor but it solem
              </ItemList>
            </List>
          </UlArea>
        </div>

        <img src={TargetPublic} alt="" className="imgMobile" />
        <img src={TargetPublicWeb} alt="" className="imgWeb" />
      </Main>
    </Body>
  )
}
