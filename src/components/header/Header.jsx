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

const Header = ({ currentUser, cart }) => {
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
                    (<OptionLink as="div" onClick={() => auth.signOut()}>SIGN OUT</OptionLink>)
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

export default connect(mapStateToProps)(Header);
