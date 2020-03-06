import React from 'react';
import { Link, NavLink } from "react-router-dom"
import { HorizontalAlign } from '../../../styles/styles';

const NavBar = () => {

    const [id, setId] = React.useState(localStorage.getItem("user_id"))

    React.useEffect(() => {
        setId(localStorage.getItem("user_id"))
    }, [localStorage.getItem("user_id")])

    return(
        <HorizontalAlign>
        <NavLink path to="/">Home</NavLink>
        <NavLink path to="/Login">Login</NavLink>
        <NavLink path to="/Register">Register</NavLink>
        <Link to='/users/${id}'></Link>
        </HorizontalAlign>
    )
}

export default NavBar;