import React from 'react';
import { NavLink } from "react-router-dom"
import { HorizontalAlign } from '../../../styles/styles';

const NavBar = () => {
    return(
        <HorizontalAlign>
        <h1>Home</h1>
        <NavLink path to="/savedsongs">SavedSongs</NavLink>
        <h1>Settings</h1>
        </HorizontalAlign>
    )
}

export default NavBar;