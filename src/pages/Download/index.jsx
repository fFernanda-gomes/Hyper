import { AndroidLogo } from '@phosphor-icons/react'
import cell from '../../assets/cellPhone.svg'
import qr from '../../assets/App-Hyper.svg'

import {
  Body,
  Button,
  DownloadArea,
  ImgContainer,
  ImgContainerWeb,
  Main,
  SubTitle,
  Text,
  Title,
} from './style'
import { MenuMobile } from '../../components/Header/MenuMobile'
import { Header } from '../../components/Header'
import { useState } from 'react'

export function Download() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Body>
      <MenuMobile
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Header setMenuIsVisible={setMenuIsVisible} />

      <Main>
        <div className="mobile">
          <div>
            <Title>
              <span>Aplicativo</span> Hyper
            </Title>
            <SubTitle>Para dentro do seu celular</SubTitle>
          </div>

          <Text>
            O Aplicativo Hyper: Seu aliado de controle total, gerenciando todas
            as funções do dispositivo, proporcionando uma experiência
            personalizada e eficaz para melhorar o foco e a rotina.
          </Text>

          <ImgContainer>
            <img src={cell} alt="" />
          </ImgContainer>

          <DownloadArea>
            <Button>
              <AndroidLogo color="#ffffff" weight="fill" className="mobileI" />
              <AndroidLogo
                color="#ffffff"
                weight="fill"
                className="webI"
                width={25}
                height={25}
              />
              <span>For Android</span>
            </Button>
          </DownloadArea>

          <DownloadArea>
            <img src={qr} alt="" />
          </DownloadArea>
        </div>

        <ImgContainerWeb>
          <img src={cell} alt="" />
        </ImgContainerWeb>
      </Main>
    </Body>
  )
}
