import React from 'react'
import { Segment } from '../template_styles'
import { TextArea, Title } from './about_styles'

type Props = {}

function About({}: Props) {
  return (
    <Segment colorId="black" textColorId="white" rotation="1deg">
      <Title>About me</Title>
      <TextArea>123</TextArea>
    </Segment>
  )
}

export default About