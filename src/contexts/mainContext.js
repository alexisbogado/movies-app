import { createContext } from 'react'
import { mobileBreakpoint } from 'theme/sizes'
import { getTitleByPath } from 'routes'
import useIsOpen from 'hooks/useIsOpen'
import usePageTitle from 'hooks/usePageTitle'
import useHandleLocation from 'hooks/useHandleLocation'

const MainContext = createContext({
  isOpen: false,
  open: () => { },
  close: () => { },
  title: ''
})

const isNavBarOpened = window.innerWidth > mobileBreakpoint

const MainContextProvider = ({ children }) => {
  const { isOpen, open, close } = useIsOpen(isNavBarOpened)
  const { title, setTitle } = usePageTitle('Main')

  useHandleLocation(({ pathname }) => {
    const title = getTitleByPath(pathname)
    
    setTitle(title)
    close()
  })

  return (
    <MainContext.Provider value={{ isOpen, open, close, title }}>
      {children}
    </MainContext.Provider>
  )
}

export { MainContext, MainContextProvider }
