import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import * as colors from 'theme/colors'
import { sideNavBarWidth, mobileBreakpoint } from 'theme/sizes'

export const SideNavBarCont = styled.div`
  background-color: ${colors.sideNavBar};
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 1;
  height: 100%;
  padding: 10px 0;
  width: ${sideNavBarWidth}px;

  @media (max-width: ${mobileBreakpoint}px) {
    width: 0;
    opacity: 0;
    visibility: hidden;
    transition: width .5s, opacity .4s, visibility .4s;
    
    &.visible {
      width: 100%;
      opacity: 100;
      visibility: visible;
    }
  }
`

export const NavIcon = styled.img`
  max-width: 100%;
  height: auto;
`

export const SideNavHead = styled.div`
  display: block;
  margin: 0 0 0 auto;
  padding: 10px 35px 0 35px;

  @media (min-width: ${mobileBreakpoint}px) {
    display: none;
  }
`

export const SideNavMainLink = styled(NavLink)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  font-size: 1.6em;
  padding: 25px 35px;

  ${props => props.bg && `background-color: ${props.bg}`};
`
