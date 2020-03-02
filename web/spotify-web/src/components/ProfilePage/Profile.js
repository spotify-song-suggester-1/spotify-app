import React from "react";
import CardMaps from "./CardMaps";
import { VerticalAlign, HorizontalAlign } from "../../styles/styles";

const Profile = props => {
  console.log("IN-Profile", props);
  return (
    <>
    <h1>Discover</h1>
      <VerticalAlign>
        <h1>Browse</h1>
        <HorizontalAlign>
          <CardMaps content={props.fakeData} subject="mood" />
        </HorizontalAlign>
        <h1>Recent</h1>
        <HorizontalAlign>
          <CardMaps content={props.fakeData} subject="artist" />
        </HorizontalAlign>
        <h1>Made For You</h1>
        <HorizontalAlign>
          <CardMaps content={props.fakeData} subject="mood" />
        </HorizontalAlign>
      </VerticalAlign>
    </>
  );
};

export default Profile;
