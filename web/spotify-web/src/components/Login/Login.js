import React from 'react';
import { VerticalAlign } from '../../styles/styles';

const Login = () => {
    return(
        <>
        <VerticalAlign>
        <form>
            <label>Email</label>
            <input type="text" name="email"/>
            <label>Password</label>
            <input type="text" name="password"/>
            <button>Log In</button>
        </form>
        </VerticalAlign>
        </>
    )
}

export default Login;