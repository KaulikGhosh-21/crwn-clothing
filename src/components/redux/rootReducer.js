import { combineReducers } from "redux"

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import userReducer from "./user/userReducer"
import cartReducer from "./cart/cartReducer"
import {directoryReducer} from "./directory/directoryReducer";
import shopDataReducer from "./shop-data/shopDataReducer";

const persistConfig = {
    key : "root",
    storage,
    whitelist : ['cart']
}

const rootReducer = combineReducers({
    user : userReducer,
    cart : cartReducer,
    directory : directoryReducer,
    shopData : shopDataReducer
})

export default persistReducer(persistConfig, rootReducer);