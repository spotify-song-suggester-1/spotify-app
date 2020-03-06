import {useState, useEffect} from "react";
import axios from "axios";

export const SpotifyAxios = (searchParam) => {
    const [searchData, setSearchData] = useState([]);

    let apiLocation = `https://unit4-tensorflow-test.herokuapp.com/query/${searchParam}`;

    const spotifyGet = () => {
        axios
            .get(apiLocation)
            .then(res => setSearchData(res.data))
            .catch(err => console.log(`%c ERROR`, `color:red`, err));
    };

    useEffect(spotifyGet(),[])

    return searchData;
}