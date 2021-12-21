import axios from 'axios'
import {
  API_URL,
  COMMON_PARAMETERS,
  parseParameters
} from './helpers/fetcher'

export const fetchDiscoverMovies = ({ language }) => {
  const parameters = parseParameters({
    ...COMMON_PARAMETERS,
    language: language,
  })

  return axios.get(`${API_URL}/discover/movie?${parameters}`)
}

export const fetchGenres = ({ language }) => {
  const parameters = parseParameters({
    ...COMMON_PARAMETERS,
    language: language,
  })

  return axios.get(`${API_URL}/genre/movie/list?${parameters}`)
}

export const fetchMovies = ({ keyword, year, language }) => {
  const parameters = parseParameters({
    ...COMMON_PARAMETERS,
    language: language,
    query: keyword,
    primary_release_year: year,
  })

  return axios.get(`${API_URL}/search/movie?${parameters}`)
}
