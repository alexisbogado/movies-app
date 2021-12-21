import styled from 'styled-components'
import { mobileBreakpoint, contentPaddingX } from 'theme/sizes'

export const Wrapper = styled.main`
  padding: 60px 25px;

  @media (min-width: ${mobileBreakpoint}px) {
    padding: 60px ${contentPaddingX}px;
  }
`

export const TotalCounter = styled.div`
  font-weight: lighter;
  padding-bottom: 15px;
`

export const MovieResults = styled.div`

`

export const MovieFilters = styled.div`

`
