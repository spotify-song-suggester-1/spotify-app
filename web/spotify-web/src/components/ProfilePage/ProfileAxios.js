import React from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import Profile from "./Profile";
import NavBar from "../NavBar/NavBar";
import SearchBar from "./SongSearch/SearchBar";
import GenrePage from "./Genre/GenrePage";

function ProfileAxios() {
  return (
    <>
    <Router>
      <Profile />
      <Route exact path='/profile/home' component={SearchBar}/>
      <Route exact path='/profile/genre' component={GenrePage}/>
      <NavBar />
    </Router>  
    </>
  );
}

export default ProfileAxios;
