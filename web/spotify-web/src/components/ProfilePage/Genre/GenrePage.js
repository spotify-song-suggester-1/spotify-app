import React, { useState, useEffect } from "react";
import axios from "axios";

const GenrePage = () => {
  const initialValue = [];
  const [genreData, setGenreData] = useState(initialValue);

  const genreAxios = () => {
    axios
      .get("https://spotify-api-ds.herokuapp.com/query/genre%3AMetal")
      .then(res => console.log("gerne data", res.data))
      .catch(err => console.log(`%c ERROR`, `color:red`, err));
  };

  useEffect(genreAxios(), []);
  return (
    <>
      <h1>HOLD</h1>
    </>
  );
};

export default GenrePage;
