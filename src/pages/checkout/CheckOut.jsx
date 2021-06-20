import React from 'react'

import "./CheckOut.scss";

import {connect} from "react-redux";

import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/CheckoutItem";

import { selectCartItems, selectCheckOutTotal } from "../../components/redux/cart/cartSelectors";
import StripeButton from '../../components/stripe/StripeButton';

const CheckOut = ({cartItems, total}) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(cartItem => <CheckoutItem key={cartItem.id} item={cartItem}/>)
            }
            <div className="total">
                <span>TOTAL: ${total}</span>
            </div>
            <div className="error-message">
                * Please use the following Credit Card details for payment *
                <br />
                4242 4242 4242 4242 - Exp:01/22 - CVV: 123
            </div>
            <StripeButton price={total}/>
        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCheckOutTotal
})

export default connect(mapStateToProps)(CheckOut)
