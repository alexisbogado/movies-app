import { useState, useEffect } from 'react'
import { fetchMovies } from 'fetcher'

export default function useMovies() {
  const [ movies, setMovies ] = useState({
    result: [ ],
    total: 0,
  })

  useEffect(() => {
    fetchMovies()
      .then(({ data }) => {
        setMovies({
          result: data.results,
          total: data.total_results,
        })
      })
      .catch(() => {
        throw new Error('Cannot fetch movies')
      })
  }, [ ])

  return movies
}
