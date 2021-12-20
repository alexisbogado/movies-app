import { useState, useEffect } from 'react'

export default function useScreenWidth() {
    const [ width, setWidth ] = useState(window.innerWidth)

    useEffect(() => {
      const handleChange = () => setWidth(window.innerWidth)

      window.addEventListener('resize', handleChange)
      
      return () => window.removeEventListener('resize', handleChange)
    }, [ ])
  
    return width
  }
  