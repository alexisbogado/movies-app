import { Wrapper, Spinner } from './styles'

export default function Loader(props) {
  return (
    <Wrapper {...props}>
      <Spinner data-testid="spinner" {...props} />
    </Wrapper>
  )
}
