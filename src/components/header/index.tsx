import React from 'react'
import { HeaderContainer, HeaderImage, HeaderLogo, ImageSource } from './header_styles'

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
      <ImageSource>Photo by Mads Schmidt Rasmussen on Unsplash</ImageSource>
    </HeaderContainer>
  )
}

export default Header