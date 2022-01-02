import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'


export const mockInvalidApiCall = () => {
  const mock = new MockAdapter(axios.create())
  
  jest.spyOn(axios, 'get')
    .mockImplementationOnce(() => mock.onGet().reply(404))
}

export const mockValidApiCall = () => {
  jest.spyOn(axios, 'get')
    .mockResolvedValue({
      ...axios.get.config,
      status: 200,
      data: { key: 'value' },
    })
}
