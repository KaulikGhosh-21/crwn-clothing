import React from 'react'

import { Link } from "react-router-dom";

import { auth } from "../../components/firebase/firebase";

import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

const Header = ({ currentUser }) => {
    return (
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo />
            </Link>
            <div className="options">
                <Link className="option" to="/shop">SHOP</Link>
                <Link className="option" to="/contact">CONTACT</Link>
                {
                    currentUser ? 
                    (<div className="option" onClick={() => auth.signOut()}>SIGN OUT</div>)
                    : 
                    (<Link className="option" to="/signin">SIGN IN</Link>)
                }
            </div>
        </div>
    )
}

export default Header
