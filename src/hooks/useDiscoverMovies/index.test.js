import { renderHook } from '@testing-library/react-hooks'
import { mockFetcher } from 'helpers/tests'
import useDiscoverMovies from './'

const invalidCallback = () => Promise.reject('invalid api call')

let hook = null

describe('useDiscoverMovies hook', () => {
  beforeEach(() => {
    hook = renderHook(() => useDiscoverMovies())
  })

  it('should return isloading state as true', () => {
    const { result } = hook
    const { isLoading } = result.current

    expect(isLoading).toBe(true)
  })

  it('should fetch from api and set isloading state to false', async () => {
    const { result, waitForNextUpdate } = hook

    await waitForNextUpdate()
    
    const { movies, isLoading } = result.current

    expect(movies.result).toEqual(expect.any(Array))
    expect(movies.total).toEqual(expect.any(Number))
    expect(movies.total).not.toBe(-1)
    expect(isLoading).toBe(false)
  })

  it('should return empty movies if api call fails', async () => {
    mockFetcher('fetchDiscoverMovies', invalidCallback)

    const { result, waitForNextUpdate } = renderHook(() => useDiscoverMovies())
    
    await waitForNextUpdate()

    const { movies } = result.current

    expect(movies.result).toEqual([ ])
    expect(movies.total).toBe(-1)
  })
})
