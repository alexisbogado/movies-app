import {
  fetchDiscoverMovies,
  fetchGenres,
  fetchMovies,
} from './fetcher'

const movieResponseStructure = {
  results: expect.any(Array),
  total_results: expect.any(Number),
}

const movieStructure = {
  title: expect.any(String),
  poster_path: expect.any(String),
  vote_average: expect.any(Number),
  genre_ids: expect.any(Array),
  overview: expect.any(String),
  release_date: expect.any(String),
}

describe('Fetcher', () => {
  it('fetchs movies to discover', async () => {
    const { data, status } = await fetchDiscoverMovies()

    expect(status).toBe(200)
    expect(data).toMatchObject(movieResponseStructure)
    expect(data.results.length).toBeGreaterThan(0)
    expect(data.results[0]).toMatchObject(movieStructure)
  })

  it('fetchs genres', async () => {
    const { data, status } = await fetchGenres()

    expect(status).toBe(200)
    expect(data).toMatchObject({
      genres: expect.any(Array),
    })

    expect(data.genres.length).toBeGreaterThan(0)
    expect(data.genres[0]).toMatchObject({
      id: expect.any(Number),
      name: expect.any(String),
    })
  })

  it('throws an error if argument keyword is not defined when fetching movies', () => {
    expect(() => fetchMovies({ })).toThrow()
  })
  
  it('fetchs movies by keyword', async () => {
    const { data, status } = await fetchMovies({ keyword: 'gucci' })

    expect(status).toBe(200)
    expect(data).toMatchObject(movieResponseStructure)
    expect(data.results.length).toBeGreaterThan(0)
    expect(data.results[0]).toMatchObject(movieStructure)
  })

  it('fetchs movies by keyword and release date', async () => {
    const { data, status } = await fetchMovies({ keyword: 'gucci', year: 2021 })

    expect(status).toBe(200)
    expect(data).toMatchObject(movieResponseStructure)
    expect(data.results.length).toBeGreaterThan(0)
    expect(data.results[0]).toMatchObject(movieStructure)
  })

})
