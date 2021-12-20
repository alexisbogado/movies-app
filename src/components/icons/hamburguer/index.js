import { fontColor } from 'theme/colors'
import { SVG } from '../styles'

export default function HamburgerIcon() {
  return (
    <SVG viewBox="0 0 100 60" width="40" height="40" fill={fontColor}>
      <rect width="100" height="3"></rect>
      <rect y="30" width="100" height="3"></rect>
      <rect y="60" width="100" height="3"></rect>
    </SVG>
  )
}
