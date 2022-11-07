import styled from 'styled-components'

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center; 
  position: relative;
  width: 100%;
  height: 100px;
  background-color: ${({theme}) => theme.colors.silver};
  color: ${({theme}) => theme.colors.black};
`

export const LinkList = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  width: 100%;
  list-style: none;
`

export const LinkListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center; 
  flex:1;
`

export const LinkListLink = styled.a``

export const CreatedWith = styled.p`
  position: absolute;
  bottom: 4px;
  font-size: 8px;

  @media (max-width: 768px) {
    right: unset;
    bottom: 0px;
  }
`
