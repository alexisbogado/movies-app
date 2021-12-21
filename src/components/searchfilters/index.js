import { Wrapper, SearchContainer, CategoryTitle } from './styles'
// import SearchBar from 'components/searchbar'
import ExpandableFilter from 'components/expandablefilter'

export default function SearchFilters({
  genres,
  ratings,
  languages,
  searchMovies
}) {
  // states

  return (
    <Wrapper>
      <SearchContainer className="search_inputs_cont" marginBottom>
        {/* Implement a "SearchBar" component and re-use it for the keyword and the year inputs */}
      </SearchContainer>

      <SearchContainer>
        <CategoryTitle>Movie</CategoryTitle>
        
        <ExpandableFilter
          items={genres}
          show={true}
          title="Select genre(s)"
        />
        <ExpandableFilter items={ratings} title="Select min. vote" />
        <ExpandableFilter items={languages} title="Select language" />
      </SearchContainer>
    </Wrapper>
  )
}
