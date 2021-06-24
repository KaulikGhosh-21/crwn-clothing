import ShopActionTypes from "./shopActionTypes";

import { firestore, transformCollectionToMap } from "../../firebase/firebase";

export const updateCollections = (newCollections) => {
    return{
        type: ShopActionTypes.UPDATE_COLLECTIONS,
        payload : newCollections
    }
}

export const fetchCollectionsStart = () => {
    return{
        type : ShopActionTypes.FETCH_COLLECTIONS_START
    }
}

export const fetchCollectionsSuccess = (collections) => {
    console.log(collections)
    return{
        type : ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
        payload : collections
    }
}

export const fetchCollectionsFailure = (error) => {
    return{
        type : ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
        payload : error
    }
}

export const fetchCollectionsStartAsync = () => {
    return dispatch => {
        const collectionRef = firestore.collection("collections");
        dispatch(fetchCollectionsStart());

        collectionRef.get().then(snapshot => {
                //  console.log(snapshot);
                 const changedData = transformCollectionToMap(snapshot);
                 dispatch(fetchCollectionsSuccess(changedData))
                 console.log(changedData);
                //  updateCollections(changedData);
                //  this.setState({ isLoading : false });
             }).catch(err => dispatch(fetchCollectionsFailure(err.message)))
    }
}