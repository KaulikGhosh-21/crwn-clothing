import React, {useEffect} from "react";
import './App.css';
import HomePage from '../src/pages/HomePage/HomePage';
import ShopPage from './pages/shop-page/ShopPage';
import CheckOut from "./pages/checkout/CheckOut";

import { Switch, Route, Redirect } from "react-router-dom";

import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./components/redux/user/userSelector";

import { checkUserSession } from "./components/redux/user/userActionCreator";


import { connect } from "react-redux";

import Header from './components/header/Header';
import SignIn_SignUp from './pages/signin-signup/SignIn-SignUp';


const App = (props) => {

  const {checkUserSession, currentUser} = props;

  useEffect(() => {
    checkUserSession();
  }, [checkUserSession])

  return(
    <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route 
          exact path="/signin" 
          render={() => currentUser ? 
          <Redirect to="/" /> : <SignIn_SignUp />} />
        </Switch>
      </div>
  )
}



const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
})

const mapDispatchToProps = dispatch => {
  return{
    checkUserSession : () => dispatch(checkUserSession())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);


