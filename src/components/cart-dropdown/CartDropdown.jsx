import React from 'react'
import CartItem from '../cart-item/CartItem';

import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/CustomButton";

import toggleCartHidden from "../../components/redux/cart/cartActionCreator";

import { connect } from "react-redux";

import {selectCartItems} from "../redux/cart/cartSelectors";
import { createStructuredSelector } from "reselect";


import "./CartDropdown.scss";

const CartDropdown = ({cartItems, history, toggleCartHidden}) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {
                    cartItems.length ? 
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/>)
                    : <span className="empty-message">Your cart is empty...</span>
                }
            </div>
            <CustomButton onClick={() => {
                history.push("/checkout")
                toggleCartHidden()
                }}>GO TO CHECKOUT</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        toggleCartHidden: () => dispatch(toggleCartHidden())
    }
}


const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))
