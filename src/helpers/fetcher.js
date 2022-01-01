export const {
  REACT_APP_API_URL: API_URL,
  REACT_APP_API_KEY: API_KEY,
} = process.env

export const DEFAULT_LANGUAGE = 'en-US'

export const parseParameters = (parameters) => {
  return Object.entries(parameters)
    .map(([ key, value ]) => value && `${key}=${value}`)
    .filter(Boolean)
    .join('&')
}
