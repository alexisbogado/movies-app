import { fetchMovies } from 'fetcher'
import { useState, useEffect } from 'react'
import { useDebouncedCallback } from 'use-debounce'

const defaultMovies = {
  result: [ ],
  total: 0,
}

export default function useFilter() {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ keyword, setKeyword ] = useState('')
  const [ year, setYear ] = useState(0)
  const [ movies, setMovies ] = useState(defaultMovies)

  const callback = useDebouncedCallback((year, keyword) => {
    if (!year && !keyword) {
      setMovies(defaultMovies)
      return
    }
    
    setIsLoading(true)

    fetchMovies({ keyword, year })
      .then(({ data }) => {
        setMovies({
          result: data.results,
          total: data.total_results,
        })
      })
      .catch(() => {
        throw new Error('Cannot fetch movies')
      })
      .finally(() => setIsLoading(false))
  }, 500)

  useEffect(() => {
    callback(year, keyword)
  }, [ year, keyword, callback ])

  return { movies, setKeyword, setYear, isLoading }
}
