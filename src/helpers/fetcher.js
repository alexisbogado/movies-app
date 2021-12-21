export const {
  REACT_APP_API_URL: API_URL,
  REACT_APP_API_KEY: API_KEY,
} = process.env

export const COMMON_PARAMETERS = {
  api_key: API_KEY,
  language: 'en-US',
}

export const parseParameters = (parameters) => {
  return Object.entries(parameters)
    .map(([ key, value ]) => value && `${key}=${value}`)
    .filter(Boolean)
    .join('&')
}
