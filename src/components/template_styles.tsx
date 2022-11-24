import styled from 'styled-components'

type SegmentProps = {
  colorId: string;
  textColorId?: string;
}

export const Segment = styled.div<SegmentProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 600px;
  padding: 25px 0px;
  letter-spacing: 1px;
  text-position: center;
  text-align: center;

  background-color: ${({theme, colorId}) => theme.colors[colorId]};
  color: ${({theme, textColorId}) => !textColorId ? theme.colors.black : theme.colors[textColorId]};

  @media (max-width: 768px) {
    height: unset;
    min-height: 600px;
  }
`

export const DefaultTextTitle = styled.h2`
  margin: 15px 0px;
  font-size: 50px;
`

export const DefaultTextArea = styled.div`
  font-size: 18px;
  margin: 0px;
`
