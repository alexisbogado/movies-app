import styled, { css } from 'styled-components'
import { desktopBreakpoint } from 'theme/sizes'
import { primaryColor } from 'theme/colors'

export const Wrapper = styled.div`
  margin-top: 35px;
`

export const SearchContainer = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 3px;
  transition: height .5s, padding .4s;

  @media (min-width: ${desktopBreakpoint}px) {
    transition: none;
  }
  
  ${props => props.marginBottom && css`
    margin-bottom: 15px;
  `}
  
  &.search_inputs_cont {
    display: flex;
    align-items: center;
    gap: 15px;
    background: transparent;
    padding: 0;

    & .search_year_input {
      display: none;
    }

    @media (min-width: ${desktopBreakpoint}px) {
      display: block;
      background: #fff;
      padding: 20px;

      & .search_year_input {
        display: block;
      }
    }
  }

  &.search_filters_cont_invisible {
    height: 0;
    padding: 0 20px;
    overflow: hidden;

    @media (min-width: ${desktopBreakpoint}px) {
      height: auto;
      padding: 20px;
      visibility: visible;
    }
  }
`

export const CategoryTitle = styled.div`
  font-weight: bold;
  margin-bottom: 10px;
`

export const FilterButton = styled.button`
  color: ${primaryColor};
  cursor: pointer;
  background-color: transparent;
  border-width: 0;
  border-bottom: 2px solid;
  display: block;
  outline: 0;

  @media (min-width: ${desktopBreakpoint}px) {
    display: none;
  }
`
