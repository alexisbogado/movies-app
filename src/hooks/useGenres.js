import { useState, useEffect } from 'react'
import { fetchGenres } from 'fetcher'

export default function useGenres() {
  const [ genres, setGenres ] = useState([ ])

  const getGenreById = (id) => {
    const { name } = genres.find(genre => genre.id === id) || { }
    
    return name
  }

  useEffect(() => {
    fetchGenres()
      .then(({ data }) => setGenres(data.genres))
      .catch(() => {
        throw new Error('Cannot fetch genres')
      })
  }, [ ])

  return { genres, getGenreById }
}
