import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE } from "../actions/index";
import { UPDATE_TITLE } from "../actions/index2";

export const initialState = {
    title: "Enter Playlist Title Here",
    songs: [],
    isFetching: false,
    error: ""
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: ""
            }
        case FETCH_SUCCESS:
            return {
                ...state,
                isFetching: false,
                songs: action.payload
            }
        case FETCH_FAILURE:
            return {
                ...state,
                error: action.payload,
                isFetching: false,
            }
        case UPDATE_TITLE:
            return {
                ...state,
                title: action.payload,
                editing: false
            }
        case "TOGGLE_EDITING":
            return {
                ...state,
                editing: !state.editing
            }
        default:
            return state;
    }
}