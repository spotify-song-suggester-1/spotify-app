import React from 'react';
import axiosWithAuth from "../../utils/axiosWithAuth";
import { VerticalAlign } from '../../styles/styles';

const Login = (props) => {

    const [form, setForm] = React.useState({ username: "", password: "" }); 

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const login = e => {
        e.preventDefault(); 
        axiosWithAuth()
            .post("/api/auth/login", form) 
            .then(res => {
                console.log("LOGIN", res);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user_id", res.data.user_id)
                props.history.push(`/users/${localStorage.getItem("user_id")}`);
            })
            .catch(error => {
                console.log(error.response)
                alert("Incorrect Log In Information")
                setForm({ username: "", password: "" }); 
         });
    };



    return(
        <>
        <VerticalAlign>
        <form onSubmit={login}>
          <input 
            type="text" 
            placeholder="username"
            name="username" 
            onChange={handleChanges}
            value={form.username}
          />
          <input 
            type="password"
            placeholder="password"
            name="password" 
            onChange={handleChanges}
            value={form.password}
          />
          <button type="submit">LOG IN</button>
      </form>
        </VerticalAlign>
        </>
    )
}

export default Login;