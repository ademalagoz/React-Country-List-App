import React from "react";

const SearchForm = (props) => {
  return (
    <form>
      <input
        name="Search"
        placeholder="Type Country Name"
        value={props.search}
        onChange={(e) => props.setSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchForm;
