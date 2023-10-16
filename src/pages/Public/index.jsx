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
              <ItemList>
                Pessoas com TDAH (Transtorno do Déficit de Atenção e
                Hiperatividade)
              </ItemList>
              <ItemList>Estudantes e Profissionais</ItemList>
              <ItemList>Pessoas que valorizam a organização</ItemList>
              <ItemList>Cuidadores e Familiares</ItemList>
            </List>
          </UlArea>
        </div>

        <img src={TargetPublic} alt="" className="imgMobile" />
        <img src={TargetPublicWeb} alt="" className="imgWeb" />
      </Main>
    </Body>
  )
}
