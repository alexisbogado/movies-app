import axios from 'axios'

const {
  REACT_APP_API_URL: url,
  REACT_APP_API_KEY: key,
} = process.env

export const fetchMovies = () => {
  return axios.get(`${url}/discover/movie?api_key=${key}`) // &language=en-US
}

export const fetchGenres = () => {
  return axios.get(`${url}/genre/movie/list?api_key=${key}`) // &language=en-US
}
