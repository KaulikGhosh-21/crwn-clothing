import React from "react";
import CustomButton from "../custom-button/CustomButton";

import {connect} from "react-redux";

import FormInput from "../form-input/FormInput";

import { googleSignInStart, emailSignInStart } from "../redux/user/userActionCreator";

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

        const {emailSignIn} = this.props

        const {email, password} = this.state;

        emailSignIn(email, password);

        // try{
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email : "", password : ""});
        // } catch(err){
        //     console.log(err);
        // }
        
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name] : value });
        
    }

    render(){

        const {googleSignIn} = this.props;

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
                        isGoogleSignIn type="button" 
                        onClick={googleSignIn}>
                            Sign in with Google
                        </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return{
        googleSignIn : () => dispatch(googleSignInStart()),
        emailSignIn : (email, password) => dispatch(emailSignInStart({email : email, password : password}))
    }
}

export default connect(null, mapDispatchToProps)(SignIn);