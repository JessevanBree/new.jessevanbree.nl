import styled from 'styled-components'

type SegmentProps = {
  colorId: string;
  textColorId?: string;
  rotation: string;
}

export const Segment = styled.div<SegmentProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 600px;
  padding: 15px 0px;

  background-color: ${({theme, colorId}) => theme.colors[colorId]};
  ${({theme, textColorId}) => textColorId ? `color: ${theme.colors[textColorId]};` : null}
  // transform: rotate(${({rotation}) => rotation});
`

export const DefaultTextTitle = styled.h1`
  font-size: 50px;
  margin: 15px 0px ;
`

export const DefaultTextArea = styled.div`
  font-size: 18px;
  margin: 0px;
`
