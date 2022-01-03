import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'
import * as fetcher from 'fetcher'

export const mockInvalidApiCall = () => {
  const mock = new MockAdapter(axios.create())
  
  jest.spyOn(axios, 'get')
    .mockImplementationOnce(() => mock.onGet().reply(404))
}

export const mockValidApiCall = () => {
  jest.spyOn(axios, 'get')
    .mockResolvedValue({
      status: 200,
      data: { key: 'value' },
    })
}

export const mockFetchGenres = (callback) => {
  jest.spyOn(fetcher, 'fetchGenres')
    .mockImplementation(callback)
}
