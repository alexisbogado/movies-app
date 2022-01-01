import { useState, useEffect } from 'react'
import { fetchDiscoverMovies } from 'fetcher'

export default function useDiscoverMovies() {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ movies, setMovies ] = useState({
    result: [ ],
    total: -1,
  })

  useEffect(() => {
    setIsLoading(true)

    fetchDiscoverMovies()
      .then(({ data }) => {
        setMovies({
          result: data.results,
          total: data.total_results,
        })
      })
      .catch(() => {
        throw new Error('Cannot fetch movies to discover')
      })
      .finally(() => setIsLoading(false))
  }, [ ])

  return { movies, isLoading }
}
