import React, {useState} from "react";

// import { auth, createUserProfileDocument } from "../firebase/firebase";

import "./SignUp.scss";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { connect } from "react-redux";
import { signUpStart } from "../redux/user/userActionCreator";

const SignUp = (props) => {

    const [signUpCredentials, setSignUpCredentials] = 
    useState({displayName:"", email:"", password:"", confirmPassword:""})

    const {displayName, email, password, confirmPassword} = signUpCredentials;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {signUpStart} = props;

        if(password !== confirmPassword){
            alert("Passwords dont match");
            return;
        }

        // try{
        //     const { user } = await auth.createUserWithEmailAndPassword(email, password);
        //     console.log(user)
        //     await createUserProfileDocument(user, {displayName});
            setSignUpCredentials({
                displayName : "",
                email : "",
                password : "",
                confirmPassword : ""
            })
            
        // } catch(err) {
        //     console.log("Error")
        // }
        
        signUpStart({email, password, displayName})

    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setSignUpCredentials({
            ...signUpCredentials,
            [name] : value
        })
    }

        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    type="text" 
                    handleChange={handleChange} 
                    name="displayName" 
                    value={displayName} 
                    label="Name"
                    />
                    <FormInput 
                    type="email" 
                    handleChange={handleChange} 
                    name="email" 
                    value={email} 
                    label="Email"
                    />
                    <FormInput 
                    type="password" 
                    handleChange={handleChange} 
                    name="password" 
                    value={password} 
                    label="Password"
                    />
                    <FormInput 
                    type="password" 
                    handleChange={handleChange} 
                    name="confirmPassword" 
                    value={confirmPassword} 
                    label="Confirm Password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit">SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
        )
    }

const mapDispatchToProps = dispatch => {
    return{
        signUpStart : (userCredentials) => dispatch(signUpStart(userCredentials))
    }
}

export default connect(null, mapDispatchToProps)(SignUp);