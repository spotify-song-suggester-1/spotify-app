import axios from "axios";

export default function axiosWithAuth() {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "https://cors-anywhere.herokuapp.com/https://spotify-suggester-backend.herokuapp.com",
        headers: {
            Authorization: token,
        }
    })
}