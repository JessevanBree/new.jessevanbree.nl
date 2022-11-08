import React from 'react'
import { Segment } from '../template_styles'
import { TextArea, Title, TextDecoration } from './about_styles'

type Props = {}

function About({}: Props) {
  return (
    <Segment id="About" colorId="black" textColorId="white">
      <Title>About me</Title>
      <TextArea>
        Hello! my name is <TextDecoration colorId="mintGreen">Jesse van Bree</TextDecoration>. I am a developer based in The Netherlands who specialises in web development.
        I mainly work with <TextDecoration colorId="mintGreen">Next,js and React</TextDecoration>, and have experience with <TextDecoration colorId="yellow"> React native, Angular, Node.js, Ruby on Rails 
        </TextDecoration> and <TextDecoration colorId="yellow"> MySQL</TextDecoration>.
      </TextArea>
      <TextArea>
        Aside from web development I have an interest in PC hardware and like to be up-to-date with hardware news.
      </TextArea>
      <TextArea>
        In my free time I like to spend my time watching sports, movies, series and listening to music.
      </TextArea>
    </Segment>
  )
}

export default About