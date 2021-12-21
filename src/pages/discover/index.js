import {
  Wrapper,
  TotalCounter,
  MovieResults,
  MovieFilters,
} from './styles'
import MovieList from 'components/movielist'
import SearchFilters from 'components/searchfilters'
import useGenres from 'hooks/useGenres'
import useDiscoverMovies from 'hooks/useDiscoverMovies'
import { ratingOptions, languageOptions } from 'helpers/filters'
import useFilter from 'hooks/useFilter'
import Loader from 'components/loader'

export default function Discover() {
  const { isLoading: isFetchingGenres, genres, getGenreById } = useGenres()
  const { isLoading: isFetchingMovies, movies: { result, total } } = useDiscoverMovies()
  const { movies, setYear, setKeyword, isLoading: isFilteringMovies } = useFilter()

  const totalMovies = movies.total || total

  return (
    <Wrapper>
      <MovieFilters>
        <SearchFilters
          genres={genres} 
          ratings={ratingOptions}  
          languages={languageOptions}
          setYear={setYear}
          setKeyword={setKeyword}
          isLoading={isFetchingGenres}
        />
      </MovieFilters>

      <MovieResults>
        {
          (isFetchingGenres || isFetchingMovies || isFilteringMovies)
            ? <Loader />
            : (<>
              {totalMovies > 0 && <TotalCounter>{totalMovies} movies</TotalCounter>}
              
              <MovieList
                movies={movies.result.length ? movies.result : result}
                getGenre={getGenreById}
              />
            </>)
        }
      </MovieResults>
    </Wrapper>
  )
}
