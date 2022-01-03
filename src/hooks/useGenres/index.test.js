import { renderHook } from '@testing-library/react-hooks'
import * as fetcher from 'fetcher'
import useGenres from './'

// jest.mock('hooks/useFetcher', () => ({
//   isLoading: false,
//   data: { },
//   error: { },
// }))

const invalidCallback = () => Promise.reject('invalid api call')

let hook = null

describe('useGenres hook', () => {
  beforeEach(() => {
    hook = renderHook(() => useGenres())
  })

  it('should return isloading state as true', () => {
    const { result } = hook
    const { isLoading } = result.current

    expect(isLoading).toBe(true)
  })

  it('should fetch from api and set isloading state to false', async () => {
    const { result, waitForNextUpdate } = hook

    await waitForNextUpdate()
    
    const { genres, isLoading } = result.current

    expect(genres).toEqual(expect.any(Array))
    expect(isLoading).toBe(false)
  })

  it('should return empty genres if api call fails', async () => {
    jest.spyOn(fetcher, 'fetchGenres')
      .mockImplementation(invalidCallback)

    const { result, waitForNextUpdate } = renderHook(() => useGenres())
    
    await waitForNextUpdate()

    const { genres } = result.current
    
    expect(genres).toEqual([ ])
  })

  it('get genre name by existing id', async () => {
    const { result, waitForNextUpdate } = hook

    await waitForNextUpdate()
    
    const { genres, getGenreById } = result.current
    const { id, name } = genres[0]

    expect(getGenreById(id)).toBe(name)
  })

  it('get genre name by unexisting id should throw error', async () => {
    const { result, waitForNextUpdate } = hook
    
    await waitForNextUpdate()
    
    const { getGenreById } = result.current

    expect(() => getGenreById(3235332)).toThrow()
  })

  it('should throw error when trying to search genre and api call has failed', async () => {
    jest.spyOn(fetcher, 'fetchGenres')
      .mockImplementation(invalidCallback)

    const { result, waitForNextUpdate } = renderHook(() => useGenres())
    
    await waitForNextUpdate()

    const { getGenreById } = result.current

    expect(() => getGenreById(1)).toThrow()
  })
})
