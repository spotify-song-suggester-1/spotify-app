import React from "react";
import Cards from "../Elements/Cards";

const CardMaps = ({ content, subject, height, width, margin}) => {
  return (
    <>
      {content.map(element => (
          <Cards
            content={element[subject]}
            key={Date.now}
            cardHeight={height}
            cardWidth={width}
            margin={margin}
          />
      ))}
    </>
  );
};

export default CardMaps;
