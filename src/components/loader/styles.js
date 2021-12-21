import styled from 'styled-components'
import { fontColor, primaryColor } from 'theme/colors'

export const Wrapper = styled.div`
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-items: center;
`

export const Spinner = styled.div`
  border: 4px solid ${fontColor};
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border-left-color: ${primaryColor};
  animation: spin 1s ease infinite;
  margin: 0 auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`
