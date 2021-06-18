import React from 'react'
import "./CollectionItem.scss";
import CustomButton from '../custom-button/CustomButton';

import { connect } from "react-redux";

import { addCartItem } from '../redux/cart/cartActionCreator';

const CollectionItem = ({ item, addCartItem }) => {
    const { name, price, imageUrl } = item
    return (
        <div className="collection-item">
            <div className="image" style={{backgroundImage: `url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{`$${price}`}</span>
            </div>
            <CustomButton onClick={() => addCartItem(item)} classname="custom-button" inverted>Add to cart</CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return{
        addCartItem: item => dispatch(addCartItem(item))
    }
}

export default connect(null, mapDispatchToProps)(CollectionItem)
