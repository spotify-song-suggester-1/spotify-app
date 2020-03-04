import axios from "axios";

export default function axiosWithAuth() {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: "",
        headers: {
            Authorization: token,
        }
    })
}