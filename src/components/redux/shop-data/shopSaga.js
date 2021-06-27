import { takeEvery, call, put } from "@redux-saga/core/effects";

import ShopActionTypes from "./shopActionTypes";

import { firestore, transformCollectionToMap } from "../../firebase/firebase";
import { fetchCollectionsFailure, fetchCollectionsSuccess } from "./shopActionCreator";

export function* fetchCollectionsAsync(){

    try{
        const collectionRef = firestore.collection("collections");
        
        const snapshot = yield collectionRef.get();

        const changedData = yield call(transformCollectionToMap, snapshot); 

        yield put(fetchCollectionsSuccess(changedData));
    } catch(err){
        yield put(fetchCollectionsFailure(err.message));
    }
    

        // collectionRef.get().then(snapshot => {
        //         //  console.log(snapshot);
        //          const changedData = transformCollectionToMap(snapshot);
        //          dispatch(fetchCollectionsSuccess(changedData))
        //          console.log(changedData);
        //         //  updateCollections(changedData);
        //         //  this.setState({ isLoading : false });
        //      }).catch(err => dispatch(fetchCollectionsFailure(err.message)))
}

export function* fetchCollectionsStart(){
    yield takeEvery(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}