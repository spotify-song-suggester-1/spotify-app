import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import "./App.css";
import axios from "axios";

import LandingPage from "./components/LandingPage";
// import ProfilePage from "./components/ProfilePage/ProfilePage";
import AccountCreate from "./components/AccountCreate/AccountCreate";
import PasswordCreate from "./components/AccountCreate/PasswordCreate";
import Login from "./components/Login/Login";
import Profile from "./components/ProfilePage/Profile";
import Register from "./components/Login/Register";
import NavBar from "./components/Elements/NavBar/NavBar";
// import SavedSongs from "./components/SavedSongs";
import UserProfile from "./components/ProfilePage/UserProfile";


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
  const initialData = [];
  const [spotifyData, setSpotifyData] = useState(initialData);

  const initiateAxios = () => {
    axios
      .get()
      .then(res => console.log("apiData ", res))
      .catch(err => console.log("ERROR ", err));
  };
  // useEffect(initiateAxios, []);

  return (
    <div className="App">
      <Router>
      {/* <ProfilePage fakeData={fakeData} /> */}
      {/* <LandingPage/> */}
      {/* <AccountCreate /> */}
      {/* <PasswordCreate /> */}
      {/* <Login /> */}

      {/* <Profile fakeData={fakeData}/> */}
      <NavBar/>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      {/* <PrivateRoute exact path="/UserProfile/:id" render={UserProfile}/> */}
      <Route exact path="/users/:id" component={UserProfile}/>
      </Router>
    </div>
  );
}

export default App;
