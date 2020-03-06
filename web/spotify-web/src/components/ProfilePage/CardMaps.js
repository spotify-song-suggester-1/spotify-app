import React from "react";
import Cards from "../Elements/Cards";

const CardMaps = ({ content, subject, height, width, margin}) => {
  return (
    <>
      {content.map(element => (
          <Cards
            key = {Date.now}
            content={element[subject]}
            cardHeight={height}
            cardWidth={width}
            margin={margin}
          />
      ))}
    </>
  );
};

export default CardMaps;
