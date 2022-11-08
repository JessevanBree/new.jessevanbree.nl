import styled from 'styled-components'
import { DefaultTextArea, DefaultTextTitle } from '../template_styles'

type TextDecorationProps = {
  colorId: string;
}

export const Title = styled(DefaultTextTitle)``
export const TextArea = styled(DefaultTextArea)`
  width: 50%;
  margin: 15px 0px;
`

export const TextDecoration = styled.span<TextDecorationProps>`
  color: ${({theme, colorId}) => !colorId ? theme.colors.white : theme.colors[colorId]}
`
