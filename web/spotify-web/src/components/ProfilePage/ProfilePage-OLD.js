import React from "react";
import Cards from "../Elements/Cards";
import { VerticalAlign, HorizontalAlign, CardBase} from "../../styles"

const ProfilePage = props => {
  console.log("%cInside Profile Page", "color:orange", props.fakeData);
  return (
    <VerticalAlign>
      <CardBase 
        cardHeight="240px"
        cardWidth="85%"
        divMargin = "40px auto">
        <h3>Discover</h3>
      </CardBase>
      <h1>Browse</h1>
      <HorizontalAlign>
      {props.fakeData.map(artist => (
        <Cards 
            content={artist.mood} 
            sizeHeight="80px"
            sizeWidth ="120px" />
      ))}
      </HorizontalAlign>
      <h1>Recent</h1>
      <HorizontalAlign>
      {props.fakeData.map(artist => (
        <Cards 
            content={artist.artist}
            sizeHeight="80px"
            sizeWidth ="120px" />
      ))}
      </HorizontalAlign>
      <h1>Made For You</h1>
      <HorizontalAlign>
      {props.fakeData.map(artist => (
        <Cards 
            content={artist.mood} 
            sizeHeight="80px"
            sizeWidth ="120px"/>
      ))}
      </HorizontalAlign>
    </VerticalAlign>
  );
};

export default ProfilePage;
