import React, { useState } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";
import { SearchInput, SearchButton } from "./SearchStyles";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const initialState = [];

  const [searchData, setSearchData] = useState(initialState);

  let apiLocation = `https://unit4-tensorflow-test.herokuapp.com/query/${searchValue}`;

  const initiateAxios = () => {
    axios
      .get(apiLocation)
      .then(res => setSearchData(res.data))
      .catch(err => console.log(`%c ERROR`, `color:red`, err));
  };

  const changeHandler = event => {
    setSearchValue(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    initiateAxios();
  };


  return (
    <>
      <form onSubmit={event => submitHandler(event)}>
        <SearchInput type="text" onChange={changeHandler} />
        <SearchButton>Search</SearchButton>
      </form>
      <SearchResult searchData={searchData} />
    </>
  );
};

export default SearchBar;
