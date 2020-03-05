import React from "react";
import { DiscoverCard, MainTitle, Subtext, SectionText } from "./ProfileStyles";
import GenreCards from "./Genre/GenreCards";

const Profile = () => {
  return (
    <>
      <DiscoverCard>
        <MainTitle>Discover</MainTitle>
        <Subtext>Better song suggestions</Subtext>
      </DiscoverCard>

      <SectionText>Genre</SectionText>
      <GenreCards />
    </>
  );
};

export default Profile;
