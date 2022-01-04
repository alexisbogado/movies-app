import styled from 'styled-components'
import { sideNavBarWidth, mobileBreakpoint } from 'theme/sizes'

export const ContentWrapper = styled.main`
  margin-left: 0;
  padding-bottom: 20px;

  @media (min-width: ${mobileBreakpoint}px) {
    margin-left: ${sideNavBarWidth}px;
  }
`

export const PageContainer = styled.main`
  overflow-x: hidden;
`
