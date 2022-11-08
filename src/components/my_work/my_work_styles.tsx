import styled from 'styled-components'
import Link from 'next/link'
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
export const WorkContainer = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 35%;
  height: 80%;
  margin: 0px 25px;
  padding: 5px;
  text-decoration: none;
  border: 3px solid ${({theme}) => theme.colors.white};
  color: ${({theme}) => theme.colors.white};

  &:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 85%;
    margin: 15px 25px;
  }
`
export const WorkTitle = styled.h2`
  font-size: 26px;
`
export const WorkImage = styled.img`
  width: 70%;
  height: 70%;
`
export const WorkDescription = styled.p`
  margin: 15px;
  width: 80%;
  font-size: 15px;
`
