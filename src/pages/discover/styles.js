import styled from 'styled-components'
import { contentPaddingX, desktopBreakpoint } from 'theme/sizes'

export const Wrapper = styled.main`
  padding: 0 25px;
  display: grid;
  grid-column: 2;
  grid-row: 1;
  grid-auto-flow: row;
  gap: 15px;
  grid-template-columns: 1fr auto;

  @media (min-width: ${desktopBreakpoint}px) {
    padding: 60px ${contentPaddingX}px;
    grid-auto-flow: column;
  }
`

export const TotalCounter = styled.div`
  font-weight: lighter;
  padding-bottom: 15px;
`

export const MovieResults = styled.div`
  grid-column-start: 1;
  
  & h1 {
    margin-top: 35px;
  }
`

export const MovieFilters = styled.div`

`
