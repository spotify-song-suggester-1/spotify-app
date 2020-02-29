import React from 'react';

const AccountCreate = () => {
    return(
        <>
            <h1>CreateFormPlaceHolder</h1>
            <form>
                <label>What's Your Email?</label>
                <input type="text" name="email"/>
                <button>Next</button>
            </form>
        </>
    )
}

export default AccountCreate;