import React from "react";
import UserCard from "./UserCard";
import axiosWithAuth from "../../utils/axiosWithAuth";

const UserProfile = (props) => {

    const [users, setUsers] = React.useState({});

    const id = localStorage.getItem("user_id");

    const getUser = () => {
        axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(res => {
            console.log("HERE", res.data)
            setUsers(res.data);
        })
        .catch(err => {
            console.log(err.response);
        }, [])
    }

    React.useEffect(() => {
        getUser();
    }, []);

    const deleteNote = user => {
        axiosWithAuth()
        .delete(`/api/users/${id}`)
        .then(res => {
            console.log("DELETE", res.data)
          getUser(res);
          window.location.href = "/";
        })
        .catch(err => console.log(err.response));
      }

    const logout = () => {
        localStorage.clear();
        window.location.href = "/";
      }

    return (
        <>
            <h1> User Profile</h1>
            <UserCard key={users.id} id={props.id} username={users.username} />
            <button onClick={logout}>LogOut</button>
            <button onClick={deleteNote}>Delete Note</button>
        </>
    )
}

export default UserProfile;