import {createSelector} from "reselect";

const selectShopData = state => state.shopData;

export const selectShopDataCollections = createSelector(
    [selectShopData],
    (shopData) => shopData.collections
)

export const selectCollectionsForOverview = createSelector(
    [selectShopData],
    (shopData) => shopData.collections ? 
    Object.keys(shopData.collections).map(key => shopData.collections[key])
    : []
)

export const selectCollection = (collectionUrl) => createSelector(
    [selectShopData],
    (shopData) => shopData.collections ? 
    shopData.collections[collectionUrl] : null
)

export const selectIsCollectionFetching = () => createSelector(
    [selectShopData],
    (shopData) => shopData.isFetching
)

export const selectIsCollectionLoaded = () => createSelector(
    [selectShopData],
    (shopData) => !!shopData.collections
)