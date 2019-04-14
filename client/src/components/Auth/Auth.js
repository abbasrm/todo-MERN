import React, { useState } from 'react';
import axios from 'axios';

import useInputChange from './useInputChange'

const Auth = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignin, setIsSignin] = useState(true);

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }


    const submitHandler = (e) => {
        // const newUser = {
        //     email,
        //     password,
        //     returnSecureToken: true
        // };

        // let url;
        // url = urlType.changeTo === 'signin' ?
        //     'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBU6LGZnBTOUZ59OEn7VVCldMhKNz3_4Zw' :
        //     'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBU6LGZnBTOUZ59OEn7VVCldMhKNz3_4Zw';

        // axios.post(url, newUser)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));

        useInputChange(email, password, isSignin)

        e.preventDefault();
    }

    const changeSignupHandler = (e) => {
        isSignin ?
            setIsSignin(false) :
            setIsSignin(true);
        e.preventDefault()
    }

    return (
        <>
            <h2>{isSignin ? 'Sign in' : 'Sign up'}</h2>
            <form onSubmit={submitHandler}>
                <input type="email" placeholder="E-mail" value={email} onChange={emailChangeHandler} />
                <input type="password" placeholder="Password" value={password} onChange={passwordChangeHandler} />
                <input type="submit" value="Submit" />
            </form>
            {isSignin ? <span>If you don't have an account, please, <a href="#" onClick={changeSignupHandler}>Sign up</a> now</span> :
                <span>If you have an account, please, <a href="#" onClick={changeSignupHandler}>Sign in</a> now</span>}

        </>
    );
};

export default Auth;