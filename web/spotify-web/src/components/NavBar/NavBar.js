import React from "react";
import { NavLink } from "react-router-dom";

import {NavSection, NavText} from "./NavBarStyles";

const NavBar = () => {
  return (
    <>
      <NavSection>
        <NavLink to="/profile/home"><NavText>Home</NavText></NavLink>
        <NavText>Playlist</NavText>
        {/* <NavLink path to="/savedsongs">SavedSongs</NavLink> */}
        <NavText>Settings</NavText>
      </NavSection>
    </>
  );
};

export default NavBar;
