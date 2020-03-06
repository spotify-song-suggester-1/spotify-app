import React, { useState, useEffect } from "react";
import SearchResult from "./SearchResult";
import axios from "axios";
import { SearchInput, SearchButton } from "./SearchStyles";

// import { SpotifyAxios } from "../../AxiosFlow/SpotifyAxios";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");

  const [searchModified, setModified] = useState("");
  const mergeSearchValue = () =>{
    let spaceDelete = searchValue.replace(/ /g,'%20')
    setModified(spaceDelete)
  }
  useEffect(mergeSearchValue)

  const initialState = [];
  const [searchData, setSearchData] = useState(initialState);

  // If time allows, I want to remove this from this file and have it be a unique axios file, 
  // this way I can use it to to generate the the Gerne's as it stands only have a search.

  // const searchSet = () => {
  //   setSearchData(SpotifyAxios(searchValue));
  // };

  
  
  
  
  let apiLocation = `https://spotify-api-ds.herokuapp.com/query/${searchModified}`;

  const initiateAxios = () => {
    axios
      .get(apiLocation)
      .then(res => setSearchData(res.data))
      .catch(err => console.log(`%c ERROR`, `color:red`, err));
  };

  // useEffect(initiateAxios(), [])

  const changeHandler = event => {
    setSearchValue(event.target.value);
  };

  const submitHandler = event => {
    event.preventDefault();
    console.log(searchModified)
    initiateAxios();
    // searchSet();
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
