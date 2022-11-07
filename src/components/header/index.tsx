import React from 'react'
import { HeaderContainer, HeaderImage, HeaderLogo } from './header_styles'

type Props = {}

function Header({}: Props) {
  return (
    <HeaderContainer>
      <HeaderLogo src='/logoBlack.png' alt="White logo: Jesse" />
      <HeaderImage 
        src='/header.jpg' 
        title='Photo by Mads Schmidt Rasmussen on Unsplash'
        alt="Header photo of a treetops in the fog"
      />
    </HeaderContainer>
  )
}

export default Header