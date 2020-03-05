import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import axios from "axios";
import ProfileAxios from "./components/ProfilePage/ProfileAxios";




// TEMP FAKE DATA

const fakeData = [
  { artist: "Jimmy Hendrix", mood: "Rock-Out" },
  { artist: "DeadMau5", mood: "Rave" },
  { artist: "Beetles", mood: "Classic" },
  { artist: "Guns N Roses", mood: "Rock-Out" },
  { artist: "Ramova", mood: "Hip - Hop" }
];

// TEMP FAKE DATA

function App() {

  return (
    <div className="App">
      {/* <Router>
      <NavBar/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <PrivateRoute exact path="/Profile" component={ProfileAxios}/>
      <Route path="/savedsongs" component={SavedSongs} />

      </Router> */}

      <ProfileAxios/>

    </div>
  );
}

export default App;
