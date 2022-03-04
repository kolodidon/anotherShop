import React from 'react'
import { SearchWrapper, SearchInput, SearchButton} from "../styledComponents";
import { ReactComponent as SearchIcon } from "../images/SearchIcon.svg";

const Search = () => {
  return (
      <SearchWrapper>
        <SearchInput placeholder='Поиск бренда, товара, категории...'/>
        <SearchButton>
            <SearchIcon/>
        </SearchButton>    
      </SearchWrapper>
  )
}

export default Search