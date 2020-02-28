import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import LandingPage from "./components/LandingPage";
import ProfilePage from "./components/ProfilePage";

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
      <ProfilePage fakeData={fakeData} />
    </div>
  );
}

export default App;
