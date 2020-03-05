import React from "react";
import SearchItem from "./SearchItem";
import { ResDiv } from "./SearchStyles";

const SearchResult = ({ searchData }) => {
  return (
    <>
      <ResDiv>
        <ul>
          {searchData.map(result => (
            <SearchItem resultData={result} />
          ))}
        </ul>
      </ResDiv>
    </>
  );
};

export default SearchResult;
