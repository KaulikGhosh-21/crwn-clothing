import React from 'react'

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { auth } from "../../components/firebase/firebase";

import "./Header.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';

const Header = ({ currentUser, cart }) => {
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
                <CartIcon />
            </div>
            {cart ? null : <CartDropdown />}
        </div>
    )
}

const mapStateToProps = ({user, cart}) => {
    return{
        currentUser : user.currentUser,
        cart : cart.hidden
    }
}

export default connect(mapStateToProps)(Header);
