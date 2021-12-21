import {
  Wrapper,
  TotalCounter,
  MovieResults,
  MovieFilters,
} from './styles'
import MovieList from 'components/movielist'
import SearchFilters from 'components/searchfilters'
import useGenres from 'hooks/useGenres'
import useMovies from 'hooks/useMovies'

export default function Discover() {
  const { genres, getGenreById } = useGenres()
  const { result, total } = useMovies()

  const ratingOptions = [
    { id: 7.5, name: 7.5 },
    { id: 8, name: 8 },
    { id: 8.5, name: 8.5 },
    { id: 9, name: 9 },
    { id: 9.5, name: 9.5 },
    { id: 10, name: 10 }
  ]

  const languageOptions = [
    { id: 'GR', name: 'Greek' },
    { id: 'EN', name: 'English' },
    { id: 'RU', name: 'Russian' },
    { id: 'PO', name: 'Polish' }
  ]

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters
  const searchMovies = (keyword, year) => {
    throw new Error('To be implemented')
  }

  return (
    <Wrapper>
      <MovieFilters>
        <SearchFilters
          genres={genres} 
          ratings={ratingOptions}  
          languages={languageOptions}
          searchMovies={(keyword, year) => searchMovies(keyword, year)}
        />
      </MovieFilters>

      <MovieResults>
        { total > 0 && <TotalCounter>{total} movies</TotalCounter>}

        <MovieList movies={result} getGenre={getGenreById} />
      </MovieResults>
    </Wrapper>
  )
}
