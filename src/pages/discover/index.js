import {
  Wrapper,
  TotalCounter,
  MovieResults,
} from './styles'
import MovieList from 'components/movielist'
import useGenres from 'hooks/useGenres'
import useMovies from 'hooks/useMovies'

// import SearchFilters from '../../components/searchfilter'

export default function Discover() {
  const { getGenreById } = useGenres()
  const { result, total } = useMovies()

  // const state = {
  //   keyword: '',
  //   year: 0,
  //   genreOptions: [],
  //   ratingOptions: [
  //     { id: 7.5, name: 7.5 },
  //     { id: 8, name: 8 },
  //     { id: 8.5, name: 8.5 },
  //     { id: 9, name: 9 },
  //     { id: 9.5, name: 9.5 },
  //     { id: 10, name: 10 }
  //   ],
  //   languageOptions: [
  //     { id: 'GR', name: 'Greek' },
  //     { id: 'EN', name: 'English' },
  //     { id: 'RU', name: 'Russian' },
  //     { id: 'PO', name: 'Polish' }
  //   ]
  // }

  // Write a function to trigger the API request and load the search results based on the keyword and year given as parameters

  return (
    <Wrapper>
      {/* <MovieFilters>
        <SearchFilters
          genres={genreOptions} 
          ratings={ratingOptions}  
          languages={languageOptions}
          searchMovies={(keyword, year) => this.searchMovies(keyword, year)}
        />
      </MovieFilters> */}

      <MovieResults>
        { total > 0 && <TotalCounter>{total} movies</TotalCounter>}

        <MovieList movies={result} getGenre={getGenreById} />
      </MovieResults>
    </Wrapper>
  )
}
