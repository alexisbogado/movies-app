import { createContext } from 'react'
import { mobileBreakpoint } from 'theme/sizes'
import useIsOpen from 'hooks/useIsOpen'

const MainContext = createContext({
  isOpen: false,
  open: () => { },
  close: () => { },
})

const isNavBarOpened = window.innerWidth > mobileBreakpoint

const MainContextProvider = ({ children }) => {
  const { isOpen, open, close } = useIsOpen(isNavBarOpened)

  return (
    <MainContext.Provider value={{ isOpen, open, close }}>
      {children}
    </MainContext.Provider>
  )
}

export { MainContext, MainContextProvider }
