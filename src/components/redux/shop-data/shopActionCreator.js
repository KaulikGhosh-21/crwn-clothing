import ShopActionTypes from "./shopActionTypes";

export const updateCollections = (newCollections) => {
    return{
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload : newCollections
    }
}