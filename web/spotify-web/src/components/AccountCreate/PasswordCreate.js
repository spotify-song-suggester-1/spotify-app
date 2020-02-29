import React from 'react';

const PasswordCreate = () => {
    return(
        <>
        <form>
            <label>Create a Password</label>
            <input type="text" name = "password"/>
            <label>Confirm Password</label>
            <input type="text" name = "confirm" />
            <button>Create</button>
        </form>
        </>
    )
}

export default PasswordCreate