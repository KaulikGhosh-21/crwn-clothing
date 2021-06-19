import React from 'react'

import {deleteCartFromItem, removeCartItem, addCartItem} from "../redux/cart/cartActionCreator";

import "./CheckoutItem.scss";

import {connect} from "react-redux";
import { removeItemFromCart } from '../redux/cart/cartUtils';

const CheckoutItem = ({item, deleteCartItem, addCartItem, removeCartItem}) => {
    console.log(deleteCartItem);
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={item.imageUrl} />
            </div>
            <span className="name">{item.name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => removeCartItem(item)}>&#10094;</div>
                <span className="value">{item.quantity}</span>
                <div className="arrow" onClick={() => addCartItem(item)}>&#10095;</div>
            </span>
            <span className="price">{item.price}</span>
            <div className="remove-button" onClick={() => deleteCartItem(item)}>&#10005;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return{
        deleteCartItem: (item) => dispatch(deleteCartFromItem(item)),
        removeCartItem: (item) => dispatch(removeCartItem(item)),
        addCartItem: (item) => dispatch(addCartItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CheckoutItem)
