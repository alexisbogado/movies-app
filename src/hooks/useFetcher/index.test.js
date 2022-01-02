import react from 'react'
import { renderHook } from '@testing-library/react-hooks'
import { mockValidApiCall } from 'helpers/tests'
import useFetcher from './'
import axios from 'axios'

const callback = () => axios.get('/')

describe('useFetcher hook', () => {
  it('should fetch from api and set isloading state to false', async () => {
    mockValidApiCall()

    const { result, waitForNextUpdate } = renderHook(() => useFetcher(callback))

    expect(result.current.isLoading).toBe(true)

    await waitForNextUpdate()

    const { data, error, isLoading } = result.current

    expect(data).toEqual({ key: 'value' })
    expect(error).toEqual({ })
    expect(isLoading).toBe(false)
  })

  it('should set error state if api call fails', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetcher(() => Promise.reject('invalid api call')))

    expect(result.current.isLoading).toBe(true)

    await waitForNextUpdate()

    const { data, error, isLoading } = result.current

    expect(data).toEqual([ ])
    expect(error).toBe('invalid api call')
    expect(isLoading).toBe(false)
  })

  it('not to change states if hook is not mounted and api is valid', async () => {
    jest.spyOn(react, 'useRef').mockImplementation(() => ({ current: false }))
    mockValidApiCall()

    const { result, waitForNextUpdate } = renderHook(() => useFetcher(callback))
    const firstData = result.current

    expect(firstData.isLoading).toBe(true)

    await expect(waitForNextUpdate).rejects.toThrow()

    const updatedData = result.current

    expect(firstData.data).toEqual(updatedData.data)
    expect(firstData.error).toBe(updatedData.error)
    expect(firstData.isLoading).toBe(updatedData.isLoading)
  })

  it('not to change states if hook is not mounted and api is invalid', async () => {
    jest.spyOn(react, 'useRef').mockImplementation(() => ({ current: false }))
    
    const { result, waitForNextUpdate } = renderHook(() => useFetcher(() => Promise.reject('invalid api call')))
    const firstData = result.current

    expect(firstData.isLoading).toBe(true)

    await expect(waitForNextUpdate).rejects.toThrow()
    
    const updatedData = result.current

    expect(firstData.data).toEqual(updatedData.data)
    expect(firstData.error).toBe(updatedData.error)
    expect(firstData.isLoading).toBe(updatedData.isLoading)
  })
})
