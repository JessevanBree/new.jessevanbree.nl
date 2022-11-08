import React from 'react'
import { FooterContainer, LinkList, LinkListItem, FootNote, LinkListLink } from './footer_styles'

type Props = {}

function Footer({}: Props) {
  return (
    <FooterContainer>
      <LinkList>
        <LinkListItem>
          <LinkListLink href="https://github.com/JessevanBree">Github</LinkListLink>
        </LinkListItem>
        <LinkListItem>
          <LinkListLink href="mailto:jessevanbree@live.nl">E-mail</LinkListLink>
        </LinkListItem>
        <LinkListItem>
          <LinkListLink href="https://www.linkedin.com/in/jessevanbree/">LinkedIn</LinkListLink>
        </LinkListItem>
      </LinkList>
      <FootNote>©2022</FootNote>
    </FooterContainer>
  )
}

export default Footer