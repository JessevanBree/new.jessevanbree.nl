import React from 'react'
import { FooterContainer, LinkList, LinkListItem, CreatedWith, LinkListLink } from './footer_styles'

type Props = {}

function Footer({}: Props) {
  return (
    <FooterContainer>
      <LinkList>
        <LinkListItem>
          <LinkListLink>Github</LinkListLink>
        </LinkListItem>
        <LinkListItem>
          <LinkListLink>E-mail</LinkListLink>
        </LinkListItem>
        <LinkListItem>
          <LinkListLink>LinkedIn</LinkListLink>
        </LinkListItem>
      </LinkList>
      <CreatedWith>Made using Next.JS</CreatedWith>
    </FooterContainer>
  )
}

export default Footer