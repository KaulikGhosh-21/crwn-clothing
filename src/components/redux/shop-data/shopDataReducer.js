import SHOP_DATA from "../../../pages/shop-page/shopData";

const INITIAL_STATE = {
    collections : SHOP_DATA
}

const shopDataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        default: return state
    }
}

export default shopDataReducer