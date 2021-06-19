import CartActionTypes from "./cartActionTypes"

import {addItemToCart, removeItemFromCart, deleteItemFromCart} from "./cartUtils";

const INITIAL_STATE = {
    hidden : true,
    cartItems : []
}

const cartReducer = (state = INITIAL_STATE, action) => {
    console.log(state.cartItems)
    switch(action.type){
        case CartActionTypes.TOGGLE_CART_HIDDEN  :
            return{
                ...state, 
                hidden : !state.hidden
            }
        case CartActionTypes.ADD_CART_ITEM :
            return{
                ...state,
                cartItems : addItemToCart(state.cartItems, action.payload)
            }
        case CartActionTypes.DELETE_CART_ITEM :
            return{
                ...state,
                cartItems : deleteItemFromCart(state.cartItems, action.payload)
            }
        case CartActionTypes.REMOVE_CART_ITEM :
            return{
                ...state,
                cartItems : removeItemFromCart(state.cartItems, action.payload)
            }
        default:
            return state
    }
}

export default cartReducer;