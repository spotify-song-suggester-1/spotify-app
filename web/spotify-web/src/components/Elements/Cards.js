import React from "react";
import { CardBase } from "../../styles/styles";

const Cards = ({ content, cardHeight, cardWidth, margin }) => {
  return (
    <CardBase 
        cardHeight={cardHeight}
        cardWidth={cardWidth}
        divMargin={margin}>
      <h3>{content}</h3>
    </CardBase>
  );
};
export default Cards;
