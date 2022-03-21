import { useState } from "react";
import { FilterBox } from "./Filter.styled";

const Filter = ({ handleFilterValue }) => {
  const [filterValue, setFilterValue] = useState("");

  const handleChange = (e) => {
    setFilterValue(e.target.value);
    handleFilterValue(e.target.value);
  };

  return (
    <FilterBox
      onChange={handleChange}
      className="custom-select"
      aria-label="Filter"
      value={filterValue}
    >
      <option value="All">All</option>
      <option value="eyecatcher">Eyecatcher</option>
      <option value="name">Name</option>
      <option value="price">Price</option>
    </FilterBox>
  );
};

export default Filter;
