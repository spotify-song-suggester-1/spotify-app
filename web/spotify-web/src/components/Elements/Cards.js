import React from "react";
import { CardBase } from "../../styles/styles";

const Cards = ({ content, sizeHeight, sizeWidth }) => {
  return (
    <CardBase 
        cardHeight={sizeHeight}
        cardWidth={sizeWidth}>
      <h3>{content}</h3>
    </CardBase>
  );
};
export default Cards;
