import styled from 'styled-components'
import { DefaultTextArea, DefaultTextTitle } from '../template_styles'

export const Title = styled(DefaultTextTitle)``
export const TextArea = styled(DefaultTextArea)``

export const WorksContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const WorkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 35%;
  height: 90%;
  margin: 0px 25px;
  padding: 5px;
  border: 3px solid ${({theme}) => theme.colors.white};
  // background-color: ${({theme}) => theme.colors.silver};
  // color: ${({theme}) => theme.colors.black};

  @media (max-width: 768px) {
    flex-direction: column;
    width: 80%;
  }
`
export const WorkTitle = styled.h2`
  font-size: 26px;
`
export const WorkImage = styled.img`
  width: 90%;
  height: 60%;
`
export const WorkDescription = styled.p`
  margin: 15px;
  width: 90%;
  font-size: 15px;
`
