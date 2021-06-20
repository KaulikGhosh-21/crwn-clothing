import {createSelector} from "reselect";

const selectShopData = state => state.shopData;

export const selectShopDataCollections = createSelector(
    [selectShopData],
    (shopData) => shopData.collections
)

export const selectCollectionsForOverview = createSelector(
    [selectShopData],
    (shopData) => Object.keys(shopData.collections).map(key => shopData.collections[key])
)

export const selectCollection = (collectionUrl) => createSelector(
    [selectShopData],
    (shopData) => shopData.collections[collectionUrl]
)