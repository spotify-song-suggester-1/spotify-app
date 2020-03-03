import axios from "axios";
import { FETCH_SUCCESS, FETCH_FAILURE } from "../actions/index";

export const ADD_SONG = "ADD_SONG";

export const addSong = SONG => dispatch => {
    dispatch({ type: ADD_SONG });
        axios
            .post("http://localhost:3333/SONGs", SONG)
            .then(res => {
                console.log("post", res);
                dispatch({ type: FETCH_SUCCESS, payload: res.data })
            })

            .catch(err => {
                console.log("error", err);
                dispatch({type: FETCH_FAILURE, payload: err.response })
        })
    }