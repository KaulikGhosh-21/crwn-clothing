import React from 'react'

import "./SignIn-SignUp.scss";

import SignIn from '../../components/sign-in/SignIn';

import SignUp from "../../components/sign-up/SignUp";

const SignIn_SignUp = () => {
    return (
        <div className="sign-in-sign-up">
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignIn_SignUp;
