import React from "react";
import './App.css';
import HomePage from '../src/pages/HomePage/HomePage';
import ShopPage from './pages/shop-page/ShopPage';

import { Switch, Route, Link, Redirect } from "react-router-dom";

import { connect } from "react-redux";
import setCurrentUser from "../src/components/redux/user/userActionCreator";

import { auth, createUserProfileDocument } from "../src/components/firebase/firebase";

import Header from './components/header/Header';
import SignIn_SignUp from './pages/signin-signup/SignIn-SignUp';



class App extends React.Component{

  unsubscribeFromAuth = null;

  componentDidMount(){
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id : snapShot.id,
              ...snapShot.data()
          })
        })
      } else {
        setCurrentUser( userAuth )
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => this.props.currentUser ? <Redirect to="/" /> : <SignIn_SignUp />} />
        </Switch>
      </div>
    );
  } 
}

const mapStateToProps = ({ user }) => {
  return{
    currentUser : user.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    setCurrentUser: user => dispatch(setCurrentUser(user))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
