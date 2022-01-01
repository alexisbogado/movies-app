import axios from 'axios'
import {
  API_URL,
  API_KEY,
  DEFAULT_LANGUAGE,
  parseParameters
} from './helpers/fetcher'

axios.interceptors.request.use(config => ({
  ...config,
  url: `${config.url}&api_key=${API_KEY}`
}))

export const fetchDiscoverMovies = ({ language = DEFAULT_LANGUAGE } = { }) => {
  const parameters = parseParameters({ language })

  return axios.get(`${API_URL}/discover/movie?${parameters}`)
}

export const fetchGenres = ({ language = DEFAULT_LANGUAGE } = { }) => {
  const parameters = parseParameters({ language })

  return axios.get(`${API_URL}/genre/movie/list?${parameters}`)
}

export const fetchMovies = ({ keyword, year, language = DEFAULT_LANGUAGE }) => {
  const parameters = parseParameters({
    language,
    query: keyword,
    primary_release_year: year,
  })

  return axios.get(`${API_URL}/search/movie?${parameters}`)
}
