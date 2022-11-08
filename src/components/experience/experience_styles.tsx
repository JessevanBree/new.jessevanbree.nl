import styled from 'styled-components'
import { Segment, DefaultTextTitle } from '../template_styles'

export const ExperienceSegment = styled(Segment)`
`
export const Title = styled(DefaultTextTitle)``

export const ExperienceList = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  width: 50%;
`
export const ExperienceListItem = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex:1;
  height: 50px;
  padding: 10px;
  margin: 5px;
  border: 2px solid black;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    width: 115px;
    padding: 5px;
  }
`
