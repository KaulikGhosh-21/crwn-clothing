import CartActionTypes from "./cartActionTypes";

const toggleCartHidden = () => {
    return{
        type : CartActionTypes.TOGGLE_CART_HIDDEN,
    }
}

export default toggleCartHidden;