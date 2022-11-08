import React from 'react'
import { Segment } from '../template_styles'
import { TextArea,Title } from './experience_styles'

type Props = {}

function Experience({}: Props) {
  return (
    <Segment colorId="white">
      <Title>Experience</Title>
      <TextArea>123</TextArea>
    </Segment>
  )
}

export default Experience