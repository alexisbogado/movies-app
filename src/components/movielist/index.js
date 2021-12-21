import MovieItem from 'components/movieitem'
import { Wrapper } from './styles'

export default function MovieList({ movies, genres }) {
  const item = {
    title: 'Spider-Man: No Way Home',
    picture: 'https://www.themoviedb.org/t/p/w220_and_h330_face/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg',
    score: 8.7,
    category: 'Action | Adventure | Science Fiction',
    description: 'Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero. When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.',
    date: '2021-12-15'
  }

  return (
    <Wrapper>
      <MovieItem {...item} />
      <MovieItem {...item} />
    </Wrapper>
  )
}
