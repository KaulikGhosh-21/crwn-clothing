import CartActionTypes from "./cartActionTypes";

const toggleCartHidden = () => {
    return{
        type : CartActionTypes.TOGGLE_CART_HIDDEN
    }
}

export const addCartItem = (item) => {
    return{
        type : CartActionTypes.ADD_CART_ITEM,
        payload : item
    }
}

export const deleteCartFromItem = (item) => {
    return{
        type : CartActionTypes.DELETE_CART_ITEM,
        payload : item
    }
}

export const removeCartItem = (item) => {
    return{
        type: CartActionTypes.REMOVE_CART_ITEM,
        payload : item
    }
}

export const clearCart = () => {
    return{
        type : CartActionTypes.CLEAR_CART
    }
}

export default toggleCartHidden;