import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
  height: 650px;
  margin: 0px;
  padding: 0px;
  background-color: ${({theme}) => theme.colors.pureWhite};

  @media (max-width: 768px) {
    height: 400px;
  }
`

export const HeaderImage = styled.img`
  height: 100%;
  width: 100%;
`

export const HeaderLogo = styled.img`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 240px;
  height: 78px;
  
  @media (max-width: 768px) {
    left: unset;
  }
`