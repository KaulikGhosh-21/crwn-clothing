import React, {useState} from "react";
import CustomButton from "../custom-button/CustomButton";

import {connect} from "react-redux";

import FormInput from "../form-input/FormInput";

import { googleSignInStart, emailSignInStart } from "../redux/user/userActionCreator";

import "./SignIn.scss";

const SignIn = (props) => {
        
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        const {emailSignIn} = props
 
        emailSignIn(email, password);

        // try{
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email : "", password : ""});
        // } catch(err){
        //     console.log(err);
        // }
        
    }

    // handleChange = (e) => {
    //     const { name, value } = e.target;
    //     this.setState({ [name] : value });
        
    // }

        const {googleSignIn} = props;

        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={handleSubmit}>
                    <FormInput 
                    type="email" 
                    handleChange={(e) => setEmail(e.target.value)} 
                    name="email" 
                    value={email} 
                    label="email"
                    />
                    <FormInput 
                    type="password" 
                    handleChange={(e) => setPassword(e.target.value)} 
                    name="password" 
                    value={password} 
                    label="password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton 
                        isGoogleSignIn type="button" 
                        onClick={googleSignIn}>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }

const mapDispatchToProps = dispatch => {
    return{
        googleSignIn : () => dispatch(googleSignInStart()),
        emailSignIn : (email, password) => dispatch(emailSignInStart({email : email, password : password}))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);