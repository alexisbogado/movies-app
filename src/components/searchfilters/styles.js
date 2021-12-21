import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  margin-top: 35px;
`

export const SearchContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 3px;
  transition: all .3s ease-in-out;
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}
`

export const CategoryTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`