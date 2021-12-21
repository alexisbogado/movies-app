import { useState } from 'react'
import {
  Wrapper,
  SearchContainer,
  CategoryTitle,
  FilterButton
} from './styles'
import { desktopBreakpoint } from 'theme/sizes'
import SearchBar from 'components/searchbar'
import ExpandableFilter from 'components/expandablefilter'
import SearchIcon from 'images/search-icon-yellow.png'
import CalendarIcon from 'images/year-icon.png'
import FilterIcon from 'images/filter-icon.png'

export default function SearchFilters({
  genres,
  ratings,
  languages,
  setKeyword,
  setYear,
  isLoading,
}) {
  const [ isOpen, setIsOpen ] = useState(window.innerWidth > desktopBreakpoint)

  return (
    <Wrapper>
      <SearchContainer className="search_inputs_cont" marginBottom>
        <SearchBar
          placeholder="Search for movies"
          icon={SearchIcon}
          marginBottom
          onChange={(e) => setKeyword(e.target.value)}
        />

        <FilterButton onClick={() => setIsOpen(!isOpen)}>
          <img src={FilterIcon} alt="Filter icon" />
        </FilterButton>

        <SearchBar
          className="search_year_input"
          type="number"
          placeholder="Year of release"
          icon={CalendarIcon}
          onChange={(e) => setYear(e.target.value)}
        />
      </SearchContainer>

      <SearchContainer className={!isOpen && 'search_filters_cont_invisible'}>
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
