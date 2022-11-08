import React from 'react'
import { Segment } from '../template_styles'
import { Title, WorksContainer, WorkContainer, WorkTitle, WorkImage, WorkDescription } from './my_work_styles'

type Props = {}

function MyWork({}: Props) {
  return (
    <Segment colorId="black" textColorId="white">
      <Title>My work</Title>
      <WorksContainer>
        <WorkContainer>
          <WorkTitle>Vtuber-soundboard</WorkTitle>
          <WorkImage 
            src='/vtuber-soundboard.png' 
            title='Screenshot of the website vtuber-soundboard'
            alt="Screenshot of the website vtuber-soundboard"
          />
          <WorkDescription>A dual-language soundboard website made with Next.js, styled-components and next-i18next</WorkDescription>
        </WorkContainer>
        <WorkContainer>
          <WorkTitle>Animle</WorkTitle>
          <WorkImage 
            src='/animle.png' 
            title="Screenshot of the W.I.P website animle"
            alt="Screenshot of the W.I.P website animle"
          />
          <WorkDescription>A work in progress wordle variant for anime songs made with Next.js and styled-components</WorkDescription>
        </WorkContainer>
      </WorksContainer>
    </Segment>
  )
}

export default MyWork