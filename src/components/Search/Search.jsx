import { useState } from "react";
import { SearchBox, SearchInput, WrapperIcon } from "./Search.styled";
import { SearchIcon } from "./../";

const Search = ({ handleSearchProducts }) => {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    handleSearchProducts(e.target.value);
  };

  return (
    <SearchBox>
      <SearchInput
        type="search"
        name="search"
        onChange={handleChange}
        placeholder="Search"
        value={searchValue}
      />
      <WrapperIcon>
        <SearchIcon height={25} width={20} />
      </WrapperIcon>
    </SearchBox>
  );
};

export default Search;
