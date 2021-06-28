import React from 'react'

import { Link } from "react-router-dom";

import { connect } from "react-redux";

import { auth } from "../../components/firebase/firebase";

import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "../redux/user/userSelector";
import { selectCartHidden } from "../redux/cart/cartSelectors";

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './HeaderStyles';

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { signOutStart } from '../redux/user/userActionCreator';

const Header = ({ currentUser, cart, signOut }) => {
    return (
        <HeaderContainer>
            <LogoContainer to="/"> 
                <Logo />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to="/shop">SHOP</OptionLink>
                <OptionLink to="/contact">CONTACT</OptionLink>
                {
                    currentUser ? 
                    (<OptionLink as="div" onClick={signOut}>SIGN OUT</OptionLink>)
                    : 
                    (<OptionLink to="/signin">SIGN IN</OptionLink>)
                }
                <CartIcon />
            </OptionsContainer>
            {cart ? null : <CartDropdown />}
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector(
    {
        currentUser : selectCurrentUser,
        cart : selectCartHidden
    }
    
)

const mapDispatchToProps = dispatch => {
    return{
        signOut : () => dispatch(signOutStart())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
