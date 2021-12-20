import styled from 'styled-components'
import { mobileBreakpoint, contentPaddingX } from 'theme/sizes'

export const PageTitle = styled.header`
  display: flex;
  align-items: center;
  gap: 30px;
  font-size: 2em;
  line-height: 0;
  padding: 20px ${contentPaddingX}px;

  @media (min-width: ${mobileBreakpoint}px) {
    display: none;
  }
`
