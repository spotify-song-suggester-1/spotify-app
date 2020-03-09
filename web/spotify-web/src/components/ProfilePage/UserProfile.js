import React from "react";
import UserCard from "./UserCard";
import axiosWithAuth from "../../utils/axiosWithAuth";

const UserProfile = (props) => {
    console.log("PROPS", props)

    const [users, setUsers] = React.useState({});
    const [editing, setEditing] = React.useState(false);
    const [nameToEdit, setNameToEdit] = React.useState( {username: users.username} );
    console.log("NAMETOEDIT", nameToEdit);

    const id = localStorage.getItem("user_id");

    const getUser = () => {
        axiosWithAuth()
        .get(`/api/users/${id}`)
        .then(res => {
            console.log("HERE", res.data)
            setUsers(res.data);
            setNameToEdit(res.data);
        })
        .catch(err => {
            console.log(err.response);
        }, [])
    }

    React.useEffect(() => {
        getUser();
    }, []);

    const handleChange = event => {
        setNameToEdit({...nameToEdit, username: event.target.value});
    }

    const editName = name => {
        setEditing(true);
        // nameToEdit(name.username);
    }

    const saveEdit = (e) => {
        e.preventDefault();
        axiosWithAuth()
        .put(`/api/users/${nameToEdit.id}`, nameToEdit)
        .then(res => {
          setEditing(true)
          getUser(res);
        })
    };

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
        <div>
            <h1>User Profile</h1>
            <span onClick={editName}>
            <UserCard key={users.id} id={props.id} username={users.username}/>
            {editing && (
                <form onSubmit={saveEdit}>
                    <input
                        type="text"
                        value={nameToEdit.username}
                        onChange={handleChange}
                    />
                    <button type="submit">Save</button>
                    <button onClick={() => setEditing(false)}>cancel</button>
                </form>
            )}
            </span>
            <button onClick={logout}>LogOut</button>
            <button onClick={deleteNote}>Delete Profile</button>
        </div>
    )
}

export default UserProfile;