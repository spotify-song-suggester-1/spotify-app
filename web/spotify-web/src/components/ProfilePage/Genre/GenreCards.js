import React from "react";
import CardMaps from "../CardMaps";
import { HorizontalAlign, ScrollInner } from "../../../styles/styles";

const GenreCards = () => {
  const genreList = [
    { genre: "Rock" },
    { genre: "Rap" },
    { genre: "Country" },
    { genre: "Alternative" },
    { genre: "Lo-fi" },
    { genre: "EDM" },
    { genre: "Indie" },
    { genre: "K-Pop" },
    { genre: "Classical" }
  ];
  return (
    <HorizontalAlign>
      <ScrollInner>
        <CardMaps
          content={genreList}
          subject="genre"
          height="60px"
          width="100px"
          margin="10px"
        />
      </ScrollInner>
    </HorizontalAlign>
  );
};

export default GenreCards;
