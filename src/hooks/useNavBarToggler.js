import { useEffect, useRef } from 'react'
import { mobileBreakpoint } from 'theme/sizes'
import useIsOpen from './useIsOpen'
import useScreenWidth from './useScreenWidth'

export default function useNavBarToggler() {
  const { isOpen, open, close } = useIsOpen(window.innerWidth > mobileBreakpoint)
  const initialized = useRef(false)
  const width = useScreenWidth()

  const isMobileWidth = width <= mobileBreakpoint
  const closeNavBar = () => isMobileWidth && close()

  useEffect(() => {
    initialized.current
      ? (isOpen && isMobileWidth ? close() : open())
      : (initialized.current = true)
  }, [ isMobileWidth ])

  return { isOpen, open, close: closeNavBar }
}
