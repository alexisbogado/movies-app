import {
  Wrapper,
  Title,
  Category,
  Header,
  ScoreBubble,
  Information,
  Description,
  Date
} from './styles'

export default function MovieItem({
  title,
  picture,
  score,
  category,
  description,
  date 
}) {
  return (
    <Wrapper>
      <img src={picture} alt={title} loading="lazy" />

      <Information>
        <Header>
          <Title>{title}</Title>
          <ScoreBubble>{score}</ScoreBubble>
        </Header>

        <Category>{category}</Category>

        <Description>{description}</Description>

        <Date>{date}</Date>
      </Information>
    </Wrapper>
  )
}
