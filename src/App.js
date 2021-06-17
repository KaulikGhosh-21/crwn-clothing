import React from "react";
import './App.css';
import HomePage from '../src/pages/HomePage/HomePage';
import ShopPage from './pages/shop-page/ShopPage';

import { Switch, Route, Link } from "react-router-dom";

import { auth, createUserProfileDocument } from "../src/components/firebase/firebase";

import Header from './components/header/Header';
import SignIn_SignUp from './pages/signin-signup/SignIn-SignUp';



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser : {
              id : snapShot.id,
              ...snapShot.data()
            }
          })
        })
      } else {
        this.setState({ currentUser : userAuth })
      }
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignIn_SignUp} />
        </Switch>
      </div>
    );
  } 
}

export default App;
