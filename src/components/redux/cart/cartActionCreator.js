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

export default toggleCartHidden;