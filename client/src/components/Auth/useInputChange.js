import React, { useState, useEffect } from 'react';
import axios from 'axios';

const useInputChange = (email, password, isSigninUrl) => {

    const newUser = {
        email,
        password,
        returnSecureToken: true
    };

    let url;
    url = isSigninUrl ?
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyBU6LGZnBTOUZ59OEn7VVCldMhKNz3_4Zw' :
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyBU6LGZnBTOUZ59OEn7VVCldMhKNz3_4Zw';

    axios.post(url, newUser)
        .then(res => console.log(res))
        .catch(err => console.log(err));

}

export default useInputChange;