import React from 'react';
import './Login.css';
import { Button } from '@material-ui/core';
import { auth, provider } from './firebase';
import { actionType, actionTypes } from './reducer';
import { useStateValue } from './StateProvider'

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        // sign in ...
        auth
            .signInWithPopup(provider)
            .then((result) => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });

                console.log(result);
            })
            .catch((error) => {
                alert(error.message);
            });
    };
    return (
        <div className='login'>
            <div className="login__logo">
                <img
                src="https://res.cloudinary.com/johnte/image/upload/v1609151163/juk_jw6cv1.jpg"
                alt=""
                />
                <img
                src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                alt=""
                />
                <div>
                    <p>Welcome to jons facebook clone</p>
                </div>
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In 
            </Button>
        </div>
    )
}

export default Login

