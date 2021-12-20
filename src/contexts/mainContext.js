import { createContext } from 'react'
import useNavBarToggler from 'hooks/useNavBarToggler'

const MainContext = createContext({
  isOpen: false,
  open: () => { },
  close: () => { },
})

const MainContextProvider = ({ children }) => {
  const { isOpen, open, close } = useNavBarToggler()

  return (
    <MainContext.Provider value={{ isOpen, open, close }}>
      {children}
    </MainContext.Provider>
  )
}

export { MainContext, MainContextProvider }
