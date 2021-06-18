import React from 'react'

import { connect } from "react-redux";

import "./CartIcon.scss";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import toggleCartHidden from '../redux/cart/cartActionCreator';

const CartIcon = ({toggleCartHidden}) => {
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon"/>
            <span className="cart-count">0</span>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}

export default connect(null, mapDispatchToProps)(CartIcon);
