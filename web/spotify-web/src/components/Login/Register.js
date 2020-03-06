import React from 'react';
import axiosWithAuth from "../../utils/axiosWithAuth";

const Register = (props) => {

    const [form, setForm] = React.useState({ username: "", password: "", email: "" }); 

    const handleChanges = e => {
        setForm({...form, [e.target.name]: e.target.value});
    }

    const register = e => {
        e.preventDefault(); 
        axiosWithAuth()
            .post("/api/auth/register", form) 
            .then(res => {
                console.log("REG", res);
                localStorage.setItem("token", res.data.payload);
                props.history.push("/login");
            })
            .catch(error => {
                console.log(error.response)
                alert("Woops")
                setForm({ username: "", password: "", email: "" }); 
         });
    };
    return(
        <>
        <form onSubmit={register}>
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
           <input 
            type="text"
            placeholder="email"
            name="email" 
            onChange={handleChanges}
            value={form.email}
          />
          <button type="submit">REGISTER</button>
      </form>
        </>
    )
}

export default Register;