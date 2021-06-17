import React from "react";
import CustomButton from "../custom-button/CustomButton";
import { signInWithGoogle } from "../firebase/firebase";

import { auth, signInWithEmailAndPassword } from "../../components/firebase/firebase";

import FormInput from "../form-input/FormInput";

import "./SignIn.scss";

class SignIn extends React.Component{
    constructor(){
        super();

        this.state={
            email : "",
            password : ""
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const {email, password} = this.state;

        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email : "", password : ""});
        } catch(err){
            console.log(err);
        }
        
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value });
        
    }

    render(){
        return(
            <div className="sign-in">
                <h2 className="title">I already have an account</h2>
                <span>Sign In with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    type="email" 
                    handleChange={this.handleChange} 
                    name="email" 
                    value={this.state.email} 
                    label="email"
                    />
                    <FormInput 
                    type="password" 
                    handleChange={this.handleChange} 
                    name="password" 
                    value={this.state.password} 
                    label="password"
                    />
                    <div className="buttons">
                        <CustomButton type="submit">Sign In</CustomButton>
                        <CustomButton 
                        isGoogleSignIn type="submit" 
                        onClick={signInWithGoogle}>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn;