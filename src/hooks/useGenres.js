import { useState, useEffect } from 'react'
import { fetchGenres } from 'fetcher'

export default function useGenres() {
  const [ isLoading, setIsLoading ] = useState(false)
  const [ genres, setGenres ] = useState([ ])

  const getGenreById = (id) => {
    const { name } = genres.find(genre => genre.id === id) || { }
    
    return name
  }

  useEffect(() => {
    setIsLoading(true)

    fetchGenres({ language: 'en-US' })
      .then(({ data }) => setGenres(data.genres))
      .catch(() => {
        throw new Error('Cannot fetch genres')
      })
      .finally(() => setIsLoading(false))
  }, [ ])

  return { genres, getGenreById, isLoading }
}
