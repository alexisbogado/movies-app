import { useState, useEffect, useRef } from 'react'

export default function useFetcher(fetcher) {
  const [ isLoading, setIsLoading ] = useState(true)
  const [ data, setData ] = useState([ ])
  const [ error, setError ] = useState({ })
  const mounted = useRef(true)

  useEffect(() => {
    setIsLoading(true)

    fetcher()
      .then(({ data }) => {
        if (!mounted.current) {
          return
        }

        setData(data)
        setError({ })
        setIsLoading(false)
      })
      .catch(err => {
        if (!mounted.current) {
          return
        }

        setData([ ])
        setError(err)
        setIsLoading(false)
      })

    return () => { mounted.current = false }
  }, [ fetcher ])

  return { data, isLoading, error }
}
