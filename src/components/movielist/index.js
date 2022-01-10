import MovieItem from 'components/movieitem'
import { Wrapper } from './styles'

export default function MovieList({ movies, getGenre }) {
  return (
    <Wrapper data-testid="movies-list">
      {movies.map((movie, index) => {
        const genres = movie.genre_ids
          .map(id => getGenre(id))
          .join(' | ')

        return <MovieItem {...movie} genres={genres} key={index} />
      })}
    </Wrapper>
  )
}
