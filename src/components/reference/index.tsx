import React from 'react'
import { Segment } from '../template_styles'
import { TextArea, Title } from './reference_styles'

type Props = {}

function Reference({}: Props) {
  return (
    <Segment colorId="black" textColorId="white" rotation="1deg">
      <Title>My work</Title>
      <TextArea>123</TextArea>
    </Segment>
  )
}

export default Reference