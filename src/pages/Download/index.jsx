import { AndroidLogo, AppleLogo } from '@phosphor-icons/react'
import cell from '../../assets/cellPhone.svg'
import qr from '../../assets/QrCode.svg'

import {
  Button,
  DownloadArea,
  ImgContainer,
  Main,
  SubTitle,
  Text,
  Title,
} from './style'

export function Download() {
  return (
    <Main>
      <div>
        <Title>
          <span>Aplicativo</span> Hyper
        </Title>
        <SubTitle>Para dentro do seu celular</SubTitle>
      </div>

      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore. Lorem ipsum dolor sit amet, consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore..
      </Text>

      <ImgContainer>
        <img src={cell} alt="" />
      </ImgContainer>

      <DownloadArea>
        <Button>
          <AndroidLogo color="#ffffff" weight="fill" />
          <span>For Android</span>
        </Button>
        <Button>
          <AppleLogo color="#ffffff" weight="fill" />
          <span>For Iphone</span>
        </Button>
      </DownloadArea>

      <DownloadArea>
        <img src={qr} alt="" />
        <img src={qr} alt="" />
      </DownloadArea>
    </Main>
  )
}
