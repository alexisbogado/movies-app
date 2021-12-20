import styled from 'styled-components'
import { sideNavBarWidth, mobileBreakpoint } from 'theme/sizes'

export const ContentWrapper = styled.main`
  padding-left: 0;

  @media (min-width: ${mobileBreakpoint}px) {
    padding-left: ${sideNavBarWidth}px;
  }
`

export const PageContainer = styled.main`
  overflow-x: hidden;
`
