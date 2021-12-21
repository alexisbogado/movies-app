import { Wrapper, SearchContainer, CategoryTitle } from './styles'
import SearchBar from 'components/searchbar'
import ExpandableFilter from 'components/expandablefilter'
import SearchIcon from 'images/search-icon-yellow.png'
import CalendarIcon from 'images/year-icon.png'

export default function SearchFilters({
  genres,
  ratings,
  languages,
  setKeyword,
  setYear,
  isLoading,
}) {
  return (
    <Wrapper>
      <SearchContainer marginBottom>
        <SearchBar
          placeholder="Search for movies"
          icon={SearchIcon}
          marginBottom
          onChange={(e) => setKeyword(e.target.value)}
        />

        <SearchBar
          type="number"
          placeholder="Year of release"
          icon={CalendarIcon}
          onChange={(e) => setYear(e.target.value)}
        />
      </SearchContainer>

      <SearchContainer>
        <CategoryTitle>Movie</CategoryTitle>
        
        <ExpandableFilter
          items={genres}
          show={true}
          title="Select genre(s)"
          isLoading={isLoading}
        />
        <ExpandableFilter items={ratings} title="Select min. vote" />
        <ExpandableFilter items={languages} title="Select language" />
      </SearchContainer>
    </Wrapper>
  )
}
