import { useState } from 'react'

export default function useIsOpen(state) {
  const [ isOpen, setIsOpen ] = useState(state)

  const open = () => setIsOpen(true)
  const close = () => setIsOpen(false)

  return { isOpen, open, close }
}
